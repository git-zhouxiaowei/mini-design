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
        let caseType = e.currentTarget.dataset.casetype;
        console.log('caseType=' + caseType);
        if (0 == caseType) {
            let designId = e.currentTarget.dataset.designid;
            console.log(designId);
            wx.navigateTo({
                url: '/pages/designDetail/designDetail?designId=' + designId
            });
        } else {
            let caseItemId = e.currentTarget.dataset.caseitemid;
            console.log(caseItemId);
            wx.navigateTo({
                url: '/pages/designDetail/designDetail?designId=' + caseItemId
            });
        }

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            caseList: [
                {
                    id: 1,
                    title: '品牌命名',
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
                }, {
                    id: 2,
                    title: '标志VI',
                    caseType: 1,
                    haveFlag: false,
                    designImage: '/static/images/banner/3.jpg',
                    designImageList: []
                }, {
                    id: 3,
                    title: '包装系统',
                    caseType: 0,
                    haveFlag: false,
                    designImageList: [
                        {
                            id: 11,
                            imageUrl: '/static/images/t1.jpg'
                        }, {
                            id: 12,
                            imageUrl: '/static/images/t2.jpg'
                        }, {
                            id: 13,
                            imageUrl: '/static/images/t3.jpg'
                        }, {
                            id: 14,
                            imageUrl: '/static/images/t4.jpg'
                        }, {
                            id: 15,
                            imageUrl: '/static/images/t5.jpg'
                        }, {
                            id: 16,
                            imageUrl: '/static/images/t1.jpg'
                        }, {
                            id: 17,
                            imageUrl: '/static/images/t2.jpg'
                        }
                    ],
                    designImage: ''
                }, {
                    id: 4,
                    title: '宣传画册',
                    caseType: 1,
                    haveFlag: false,
                    designImage: '/static/images/banner/2.jpg',
                    designImageList: []
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
