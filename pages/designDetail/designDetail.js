const formatRichText = require('../../utils/formatRichText');
const config = require('../../config/config.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let caseId = options.caseId;
        wx.request({
            url: config.ctx + 'caseText/' + caseId,
            success: (res) => {
                console.log(res);
                let respData = res.data;
                if (0 == respData.code) {
                    let caseInfo = respData.data;
                    let detail = caseInfo.caseText;
                    if ('' == detail) {
                        detail = '<img src="' + caseInfo.coverImg + '"/>'
                    }
                    detail = formatRichText.formatRichText(detail);
                    this.setData({
                        design: {
                            title: caseInfo.caseName,
                            publishTime: caseInfo.uploadTime,
                            scanTimes: caseInfo.viewTimes,
                            detail
                        }
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
