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
        let caseId = e.currentTarget.dataset.caseid;
        wx.navigateTo({
            url: '/pages/designDetail/designDetail?caseId=' + caseId
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let caseMenuId = options.caseMenuId;
        let data = {};
        if (undefined != caseMenuId && 'undefined' != caseMenuId) {
            //如果没有案例菜单类型，默认显示所有案例图片列表
            data = {caseMenuId: caseMenuId};
        }
        wx.request({
            url: 'http://localhost:8080/design/front/mini/newCaseInfoPage/1',
            data: data,
            success: (res) => {
                console.log(res);
                let respData = res.data;
                if (0 == respData.code) {
                    this.setData({
                        caseItem: {
                            id: 1,
                            title: '最新设计',
                            caseType: 0,
                            haveFlag: true,
                            caseInfoList: respData.data,
                            designImage: ''
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
