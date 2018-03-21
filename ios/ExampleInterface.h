//
//  ExampleInterface.h
//  LearnRN
//
//  Created by bimuyu on 2018/3/21.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>

@interface ExampleInterface : NSObject <RCTBridgeModule>

@property (copy, nonatomic) NSString *contactName;
@property (copy, nonatomic) NSString *contactPhoneNumber;

@end
