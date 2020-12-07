Page({

    /**
     * 页面的初始数据
     */
    data: {
        bannerList: [],
        designList: [],
        newsList: []
    },

    toMoreDesign: function (e) {
        console.log(e);
        wx.navigateTo({
            url: '/pages/newDesign/newDesign'
        })
    },

    toMoreNews: function (e) {
        console.log(e);
        wx.navigateTo({
            url: '/pages/news/news'
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // wx.request({
        //   url: 'https://www.baidu.com/s',
        //   data:{wd:'Java'},
        //   success:(res)=>{
        //       console.log(res);
        //   },
        //   fail:(err)=>{
        //     console.log(err);
        //   }
        // })
        this.setData({
            bannerList: [
                {bannerImg: '/static/images/banner/2.jpg'},
                {bannerImg: '/static/images/banner/3.jpg'},
                {bannerImg: '/static/images/banner/4.jpg'}
            ],
            designList: [
                {
                    designImg: '/static/images/t1.jpg',
                    designName: 'T1'
                }, {
                    designImg: '/static/images/t2.jpg',
                    designName: 'T2'
                }, {
                    designImg: '/static/images/t3.jpg',
                    designName: 'T3'
                }, {
                    designImg: '/static/images/t4.jpg',
                    designName: 'T4'
                }, {
                    designImg: '/static/images/t5.jpg',
                    designName: 'T5'
                }, {
                    designImg: '/static/images/t1.jpg',
                    designName: 'T1'
                }, {
                    designImg: '/static/images/t2.jpg',
                    designName: 'T2'
                }, {
                    designImg: '/static/images/t3.jpg',
                    designName: 'T3'
                }, {
                    designImg: '/static/images/t4.jpg',
                    designName: 'T4'
                }, {
                    designImg: '/static/images/t5.jpg',
                    designName: 'T5'
                }
            ],
            newsList: [
                {
                    title: '十四届五中全会表示，要全面实现现代化主义强国',
                    date: '2020-12-07'
                }, {
                    title: '世界设计大会于浙江杭州举行，届时会有各方设计人员汇聚',
                    date: '2020-12-01'
                }, {
                    title: '关于设计的一些小技巧，你知道吗,设计方案的选定，创新力的发掘',
                    date: '2020-11-17'
                }, {
                    title: '网页设计方案的选定，创新力的发掘',
                    date: '2020-11-10'
                }
            ]
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
