// pages/newDesign/newDesign.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        pageNum: 1,
        nothing: '',
        viewMore: '',
        caseItem: {
            caseMenuId: '',
            caseMenuName: '',
            haveFlag: '',
            caseInfoList: ''
        }
    },
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
            this.data.caseItem.caseMenuId = caseMenuId;
            data = {caseMenuId: caseMenuId}
        }
        wx.request({
            url: 'http://localhost:8080/design/front/mini/newCaseInfoPage/' + this.data.pageNum,
            data: data,
            success: (res) => {
                let respData = res.data;
                if (0 == respData.code) {
                    let dataMap = respData.data;
                    this.setData({
                        caseItem: {
                            caseMenuId: dataMap.caseMenuId,
                            caseMenuName: dataMap.caseMenuName,
                            haveFlag: dataMap.haveFlag,
                            caseInfoList: dataMap.caseList
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
        this.setData({
            viewMore: '查看更多...'
        });
        if (!this.data.caseItem.haveFlag) {
            wx.showToast({
                title: '已经到底了', //弹框内容
                icon: 'none',  //弹框模式
                duration: 2000    //弹框显示时间
            })
        } else {
            let data = {};
            if ('' != this.data.caseItem.caseMenuId && null != this.data.caseItem.caseMenuId) {
                data = {caseMenuId: this.data.caseItem.caseMenuId}
            }
            // 显示加载图标
            wx.showLoading({
                title: '玩命加载中...',
            })
            // 页数+1
            this.data.pageNum = this.data.pageNum + 1;
            wx.request({
                url: 'http://localhost:8080/design/front/mini/newCaseInfoPage/' + this.data.pageNum,
                data: data,
                success: (res) => {
                    let respData = res.data;
                    if (0 == respData.code) {
                        let dataMap = respData.data;
                        if (!dataMap.haveFlag) {
                            this.setData({
                                nothing: '没有更多了'
                            });
                        }
                        this.setData({
                            caseItem: {
                                caseMenuId: dataMap.caseMenuId,
                                caseMenuName: dataMap.caseMenuName,
                                haveFlag: dataMap.haveFlag,
                                caseInfoList: this.data.caseItem.caseInfoList.concat(dataMap.caseList)
                            },
                            viewMore: ''
                        });
                        // 隐藏加载框
                        wx.hideLoading();
                    }
                },
                fail: (err) => {
                    console.log(err);
                }
            })
        }
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
