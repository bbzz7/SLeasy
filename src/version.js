/*!
 SLeasy 3.8.8 by 宇文互动 庄宇 2019-02-19 email:30755405@qq.com
 3.8.8(2019-02-19):更新完善内置ae插件img渲染引擎，支持多层aeLayer;
 3.8.7(2019-02-17):进一步完善更新自定义loading模块，移除noFade，autoStart参数相关控制逻辑;
 3.8.6(2019-01-29):修复top值错误计算的问题;
 3.8.5(2019-01-23):内置ae插件增加SLeasy.gotoAeLayer功能;
 3.8.3(2019-01-21):更新添加文件timeStamp时间戳以刷新cdn缓存;
 3.8.2(2019-01-16):修复更新SLeasy初始化回调（元素imgToDiv）计数错误的问题;
 3.8.1(2019-01-08):更新有自定义loading选项，SLeasy二次初始化时，最外层SLeasy.init().done()回调触发失效的问题;
 3.8.0(2019-01-07):内置ae插件重大升级，重构新增为3种渲染引擎(easel、pixi、img);
 3.7.7(2019-01-06):更新真·SLeasy.init().done();
 3.7.6(2019-01-05):修正musicBt图片地址没经过SLeasy.path处理的问题，更新SLeasy.isHttp()函数和SLeasy.path()函数;
 3.7.5(2018-12-30):重构内置ae插件，提升性能;
 3.7.4(2018-12-29):解决ios微信中，横竖屏切换导致布局尺寸异常不能复位的问题;
 3.7.3(2018-12-13):支持单页幻灯alignMode参数;
 3.7.2(2018-06-21):大幅优化ae插件资源释放效果，支持自定义loading自动播放ae序列，添加横竖屏旋转回调等;
 3.7.1(2018-06-19):优化debug模式，force3D全局配置，修复alignMode相关定位bug等;
 3.7.0(2017-07-19):更新高级自定义loading功能模块;
 3.6.0(2017-06-19):更新依赖库，第三方库，以及gulp构建工具链;
 3.5.6(2017-01-06):添加安卓微信h5同层播放器相关代码，viewport添加device-width模式;
 3.5.5(2016-12-05):添加幻灯页scroll模式，修正子动画时间为0时，开始时间定位错误的bug;
 3.5.0(2016-12-03):重构子动画timeline开始时间为绝对时间值,添加loaderMsg模块;
 3.4.0(2016-09-25):子动画队列播放重构为与场景切换动效前置对齐的模式，添加audio、video、iframe等内置元素;
 3.3.1(2016-08-14):添加传统click事件支持,方便兼容某些广告监测代码,shadownBt添加name属性,以及debug模式下的对比阴影;
 3.3.0(2016-04-17):backfaceVisiblity bug修复,添加阈值高度(threshold)适配模式,优化gulpfile自动化构建;
 3.2.7(2015-12-23):SLeasy.cache方法bug修复，添加更多fixProps;
 3.2.6(2015-08-20):修正幻灯切换效果索引不为0时，详情页默认切换效果获取不正确的bug; loading结构优化;
 3.2.5(2015-08-18):调整模块分布目录，使构架更清晰，增加mask涂抹遮罩插件，修正幻灯切换状态锁定，优化gulpfile自动化构建
 3.2.0(2015-07-22):路由功能优化加强，动画模块解耦重构，增加打开淘宝天猫客户端跳转功能
 3.1.0(2015-06-28):全新路由功能，支持所有切换及详情页开关状态
 3.0.0:全新构架，重大升级
 2.8.7:微信背景音乐自动播放及视频行内播放兼容
 2.8.5:增加子动画to配置参数（同一元素连动功能）
 2.8：大幅升级，内部初始化重构，
 增加预加载模块包括：可配置的内置loading式样，2种加载模式（多线程异步乱序加载，和单线程顺序加载），
 增加固定浮动元素功能，
 添加加载回调及幻灯切换回调，
 其他显示体验提升
 * https://github.com/bbzz7/SLeasy
 * Licensed under the MIT license 
 */