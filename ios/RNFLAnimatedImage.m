//
//  RNFLAnimatedImage.m
//  LearnRN
//
//  Created by bimuyu on 2018/3/29.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RNFLAnimatedImage.h"
#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventDispatcher.h>
#import <React/UIView+React.h>
#import <React/RCTLog.h>
#import "FLAnimatedImage/FLAnimatedImageView.h"
#import "FLAnimatedImage/FLAnimatedImage.h"

@implementation RNFLAnimatedImage {
  RCTEventDispatcher *_eventDispatcher;
  FLAnimatedImage *_image;
  FLAnimatedImageView *_imageView;
}

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher {
  if (self = [super init]) {
    _eventDispatcher = eventDispatcher;
    _imageView = [[FLAnimatedImageView alloc] init];
    [_imageView addObserver:self forKeyPath:@"currentFrameIndex" options:0 context:nil];
  }
  return self;
}

- (void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary<NSKeyValueChangeKey,id> *)change context:(void *)context {
  if (object == _imageView) {
    if ([keyPath isEqualToString:@"currentFrameIndex"]) {
      [_eventDispatcher sendInputEventWithName:@"onFrameChange" body:@{
                                                                       @"currentFrameIndex" : [NSNumber numberWithUnsignedInteger:[object currentFrameIndex]],
                                                                       @"frameCount" : [NSNumber numberWithUnsignedInteger:[_image frameCount]],
                                                                       @"target" : self.reactTag
                                                                       }];
    }
  }
}

- (void)removeFromSuperview {
  [_imageView removeObserver:self forKeyPath:@"currentFrameIndex"];
  _eventDispatcher = nil;
  [super removeFromSuperview];
}

- (void)reloadImage {
  _image = [FLAnimatedImage animatedImageWithGIFData:[NSData dataWithContentsOfURL:[NSURL URLWithString:_src]]];
  _imageView.contentMode = [_contentMode integerValue];
  _imageView.animatedImage = _image;
}

- (void)layoutSubviews {
  _imageView.frame = self.bounds;
  [self addSubview:_imageView];
}

- (void)setSrc:(NSString *)src {
  _src = [src copy];
  [self reloadImage];
}

- (void)setContentMode:(NSNumber *)contentMode {
  if (![contentMode isEqual:_contentMode]) {
    _contentMode = [contentMode copy];
    [self reloadImage];
  }
}

@end
