var dateUtils = require('../../utils/dateUtils')
Page({

    /**
     * 页面的初始数据
     */
    data: {},

    /**
     * 跳转新闻详情页面
     */
    toNewsDetail: function (e) {
        // ！切记 dataset里面都是英文小写
        let noticeId = e.currentTarget.dataset.noticeid;
        wx.navigateTo({
            url: '/pages/newsDetail/newsDetail?noticeId=' + noticeId
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.request({
            url: 'http://localhost:8080/design/front/mini/noticePage/1',
            success: (res) => {
                console.log(res);
                let respData = res.data;
                if (0 == respData.code) {
                    respData.data.forEach((item) => {
                        item.createTime = dateUtils.formatTime(item.createTime, 'YY-MM-DD')
                    });
                    this.setData({
                        noticeList: respData.data
                    });
                }
            },
            fail: (err) => {
                console.log(err);
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
