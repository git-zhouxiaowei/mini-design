// pages/newDesign/newDesign.js
Page({

    /**
     * 页面的初始数据
     */
    data: {},
    /**
     * 跳转设计详情页面
     */
    toDesignDetail: function (e) {
        // ！切记 dataset里面都是英文小写
        let designId = e.currentTarget.dataset.designid;
        console.log(designId);
        wx.navigateTo({
            url: '/pages/designDetail/designDetail?designId=' + designId
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            caseItem: {
                id: 1,
                title: '最新设计',
                caseType: 0,
                haveFlag: true,
                designImageList: [
                    {
                        id: 1,
                        imageUrl: '/static/images/t1.jpg'
                    }, {
                        id: 2,
                        imageUrl: '/static/images/t2.jpg'
                    }, {
                        id: 3,
                        imageUrl: '/static/images/t3.jpg'
                    }, {
                        id: 4,
                        imageUrl: '/static/images/t4.jpg'
                    }, {
                        id: 5,
                        imageUrl: '/static/images/t5.jpg'
                    }, {
                        id: 6,
                        imageUrl: '/static/images/t1.jpg'
                    }, {
                        id: 7,
                        imageUrl: '/static/images/t2.jpg'
                    }, {
                        id: 8,
                        imageUrl: '/static/images/t3.jpg'
                    }, {
                        id: 9,
                        imageUrl: '/static/images/t4.jpg'
                    }, {
                        id: 10,
                        imageUrl: '/static/images/t5.jpg'
                    }
                ],
                designImage: ''
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
