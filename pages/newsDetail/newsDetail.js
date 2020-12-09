Page({

    /**
     * 页面的初始数据
     */
    data: {
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // ！切记 dataset里面都是英文小写
        let newsId = options.newsId;
        //样例数据
        let detail = '<p style="text-indent: 28px;"><span style="font-family: 宋体;">近日，安哥拉新国家身份证制证中心正式落成。11月8日，该中心举行落成仪式，安哥拉总统洛伦索出席剪彩，并对该中心为安哥拉公民的身份证电子化管理、推动安哥拉社会经济发展给予了高度评价。 </span></p><p style="text-align: center;"><span style="font-family: 宋体;">&nbsp;<img width="427" height="283" title="1574402574659014895.jpg" style="width: 319px; height: 204px;" alt="20191118112422212221.jpg" src="http://he.aisino.com/upload/image/day_20191122/1574402574659014895.jpg"/></span></p><p style="text-align: center;"><span style="font-family: 宋体;">安哥拉总统洛伦索剪彩</span></p><p style="text-indent: 28px;"><span style="font-family: 宋体;">安哥拉国家身份证制证中心由中国电子进出口有限公司承建，航天信息股份有限公司作为软硬件供货及服务商，提供了系统规划、制证软件系统开发、硬件设备、软件服务及卡片供货，保障了新制证中心的顺利落成。 </span></p><p style="text-indent: 28px;"><span style="font-family: 宋体;">2019</span><span style="font-family: 宋体;">年8月，该中心筹备硬件设备及相关数据迁移任务，航天信息快速响应，迅速完成了各项系统及硬件的安装调试。截至目前，航天信息已完成全部制证设备的投产运行，并完成340余万张的制证任务。 </span></p><p style="text-align: center;"><span style="font-family: 宋体;"><img width="425" height="319" title="1574402593347081523.jpg" style="width: 331px; height: 236px;" alt="20191118112431533153.jpg" src="http://he.aisino.com/upload/image/day_20191122/1574402593347081523.jpg"/>&nbsp;</span></p><p style="text-align: center;"><span style="font-family: 宋体;">安哥拉新制证中心</span></p><p style="text-indent: 28px;"><span style="font-family: 宋体;">安哥拉公民身份证制证中心系统方案充分展现了航天信息在电子证件制证领域的技术优势。硬件设备方面，航天信息为安哥拉既提供可适用于集中大批量制证的大型制证设备（JKFZ9系列大型多功能制证一体机），也提供了适用于桌面制证的小型制证设备和相关配套设备及耗材。项目中所涉及的所有制证设备均可实现双覆膜双打印，加强了对卡片的保护。卡片方面，航天信息结合非洲当地的气候、温度、湿度条件进行了细致的工艺研究，研发出多种创新防伪技术，大幅提升了信息安全性。</span></p><p style="text-indent: 28px;"><span style="font-family: 宋体;">未来，航天信息将紧随国家“一带一路”战略，整合资源，谋划国际合作发展，全面提升品牌影响力和产业发展能力。</span></p><p></p>';
        detail = detail.replace(/\<img/gi, '<img style="width:100%;height:auto;"').replace(/\<p>/gi, '<p class="p_class">');
        this.setData({
            news: {
              title: '世界设计大会于浙江杭州举行，届时会有各方设计人员汇聚',
              publishTime: '2020-12-07',
              scanTimes: '23',
              detail
            }
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
