var formatRichText = require('../../utils/formatRichText')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        longitude: 114.63231325,
        latitude: 38.03733484,
        markers: [
            {
                longitude: 114.63231325,
                latitude: 38.03733484,
                iconPath: '/static/images/about-do.png',
                width: '60rpx',
                height: '60rpx'
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.request({
            url: 'http://localhost:8080/design/front/mini/aboutInfo',
            success: (res) => {
                let respData = res.data;
                if (0 == respData.code) {
                    let dataMap = respData.data;
                    let caseInfo = dataMap.caseInfo;
                    let aboutInfo = dataMap.aboutInfo;
                    let introduction = formatRichText.formatRichText(caseInfo.caseText);
                    this.setData({
                        aboutInfo: aboutInfo,
                        introduction: introduction,
                        caseName: caseInfo.caseName
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
        this.mapCtx = wx.createMapContext('myMap')
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
