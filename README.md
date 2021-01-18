# mini-design

## 简介
作为一个小程序端的企业宣传或者创业者推广的平台，后台Java实现小程序端所有动态配置；

### 一、C端页面
#### 1、主页tab
轮播图；  
待定：联系客服；  
固定5按钮（品牌命名，标志VI，包装系统，宣传画册，网站建设）  
固定最新通知模块（4条最新通知标题-时间）  
动态最新8个案例轮播（图片+名称）  
#### 2、案例大全tab  
按照案例类型，如果是图片类的，展示该案例下的2X5的图片，
并配有"浏览更多"按钮（点击浏览更多再次查询10个图片，直到全部列出，浏览更多隐藏），
点击小图路由到某网页展示图片案例表中详细内容：标题，时间，浏览次数，原始图片；  
如果是富文本类的，展示菜单图片大图，点击大图，路由某网页展示富文本内容；
#### 3、关于我们tab  
了解内容 + 关于我详情。  
待定：联系客服；    

### 二、前端页面
    1.新增字典；
    2.案例菜单管理；
        案例列表，crud
    3.联系方式管理；
    4.通知公告管理；
    5.轮播图设置；

### 三、服务端表设计：
案例菜单表：  
    名称，二级名称，案例类型，图片类型，通知类型，是否主菜单，排序  
图片案例表：  
    案例菜单ID，名称，简介（富文本），图片类型，图片（封面图），浏览次数，上传时间    
    
案例类型  

    1.多图类  
    2.富文本
    3.列表类
    
图片类型字典（主要区分展示图片的大小）  
       
    510 336 网络建设  
    343 258 包装系统，环境导视，宣传画册  
    206 155 标志，品牌命名  
    
关于我表：  
   单位名称，地址，座机，手机，邮箱，QQ号，二维码  

通知表（新闻和招聘）：  
    标题，详细内容（富文本），浏览次数，手动发布时间  
通知类型字典表：  
    列入统一字典表

轮播图表：  
  
