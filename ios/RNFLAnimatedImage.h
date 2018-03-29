//
//  RNFLAnimatedImage.h
//  LearnRN
//
//  Created by bimuyu on 2018/3/29.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/RCTView.h>
#import <React/RCTEventDispatcher.h>
@class RCTEventDispatcher;

@interface RNFLAnimatedImage : UIView

@property (copy, nonatomic) NSString *src;
@property (strong, nonatomic) NSNumber *contentMode;

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;

@end
