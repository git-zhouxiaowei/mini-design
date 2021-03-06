const config = require('../../config/config.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {},
    /**
     * 跳转相应的更多页面
     */
    toMore: function (e) {
        let caseMenuId = e.currentTarget.dataset.casemenuid;
        let url = '/pages/newDesign/newDesign?caseMenuId=' + caseMenuId;
        wx.navigateTo({
            url: url
        })
    },
    /**
     * 跳转设计详情页面
     */
    toDesignDetail: function (e) {
        let caseId = e.currentTarget.dataset.caseid;
        wx.navigateTo({
            url: '/pages/designDetail/designDetail?caseId=' + caseId
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.request({
            url: config.ctx + 'caseTabInitData',
            success: (res) => {
                console.log(res);
                let respData = res.data;
                if (0 == respData.code) {
                    this.setData({
                        menuList: respData.data
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
