/*!
 SLeasy 3.9.10 by 宇文互动 庄宇 2020-09-12 email:30755405@qq.com
 3.9.10(2020-09-12):增加fixWidthMode自适应宽度模式开关，更新完善stageMode的阈值模式~
 3.9.9(2020-09-06):fixHeight+1以避免小数，导致底部有背景缝隙;增加SLeasy.respY()功能函数，解决顶部/底部元素超出安全区域时自适应定位~
 3.9.8(2020-07-26):修正x,y自适应偏移判断bug;回滚config函数值计算的返回值为原生值;添加SortableJS库~
 3.9.7(2020-05-20):重构subMotion的timeline起始时间点定位~
 3.9.6(2020-05-17):更新自定义loading和slider本身添加on事件绑定参数选项~
 3.9.5(2020-05-12):更新完善height模式下的元素自适应~
 3.9.4(2020-05-04):更新优化完全按config配置顺序预加载图片，包括ae类型;webAudio模式下，内置音乐按钮增加全局静音功能~
 3.9.3(2020-04-26):更新完善ScrollMagic模式;
 3.9.2(2020-04-22):借鉴ios-inner-height.js，内置获取iphone等全面屏机型下，钉钉、手淘中全屏高度的兼容方法;
 3.9.1(2020-04-22):更新添加iosInnerHeight()，以解决兼容iphone等全面屏机型下，钉钉、手淘中全屏高度的问题;
 3.9.0(2020-04-22):更新添加ScrollMagic模式;
 3.8.23(2020-03-18):添加SLeasy.resize()自适应x5同层模式，更新video元素object-fit默认为cover;
 3.8.22(2020-01-19):更新、添加、修复了一些……;
 3.8.21(2020-01-16):更新幻灯子元素起始时间为0的场景及边界判断，不等待页面切换时间;
 3.8.20(2019-10-31):新增letter-spacing属性缩放变换;单独提取SLeasy.bitConvent()函数;
 3.8.19(2019-08-31):新增SLeasy.copyText()函数，修正video元素controls属性，幻灯页新增preMotionFX选项~;
 3.8.18(2019-07-03):新增SLeasy.loadAelayer()，按需加载~;
 3.8.17(2019-07-02):调整资源加载顺序，ae序列帧资源放置最后;
 3.8.16(2019-05-29):增加支持指定n线程下载，进一步完善SLeasy.playAeLayer/show/hide()等系列函数;
 3.8.15(2019-04-17):初步集成webAudio/howler;
 3.8.14(2019-04-14):进一步强化sprite元素功能，及media系列功能函数;
 3.8.13(2019-04-09):添加sprite元素及相关功能函数;
 3.8.12(2019-04-03):添加SLeasy.intiMedia/media/pauseAeLayer/resumeAeLayer函数，修复SLeasy.playAeLayer函数参数为数组对象时，某些情况下跳帧的bug;
 3.8.11(2019-03-31):自定义loading添加onComplete钩子，更新修复subMotion中addPause()时间定位不准确的问题;
 3.8.10(2019-03-02):更新添加对subMotion.to的全功能支持,更新幻灯页可单独分别设置入场和出场的动画效果,以及对'+='、'-='相对值的自动缩放支持;
 3.8.9(2019-02-22):内置ae插件支持同一个aeLayer的多种不同格式序列合并，支持同时传递aeLayer播放对象数组参数;
 3.8.8(2019-02-20):更新完善内置ae插件img渲染引擎，支持多层aeLayer;
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