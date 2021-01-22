const dateUtils = require('../../utils/dateUtils');
const config = require('../../config/config.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        pageNum: 1,
        nothing: '',
        viewMore: '',
        noticeList: '',
        haveFlag: true,
    },

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
            url: config.ctx + 'noticePage/' + this.data.pageNum,
            success: (res) => {
                let respData = res.data;
                if (0 == respData.code) {
                    let dataMap = respData.data;
                    dataMap.noticeList.forEach((item) => {
                        item.createTime = dateUtils.formatTime(item.createTime, 'YY-MM-DD')
                    });
                    this.setData({
                        noticeList: dataMap.noticeList,
                        haveFlag: dataMap.haveFlag
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
        if (!this.data.haveFlag) {
            wx.showToast({
                title: '已经到底了', //弹框内容
                icon: 'none',  //弹框模式
                duration: 2000    //弹框显示时间
            })
        } else {
            // 显示加载图标
            wx.showLoading({
                title: '加载中...',
            })
            // 页数+1
            this.data.pageNum = this.data.pageNum + 1;
            wx.request({
                url: config.ctx + 'noticePage/' + this.data.pageNum,
                success: (res) => {
                    let respData = res.data;
                    if (0 == respData.code) {
                        let dataMap = respData.data;
                        if (!dataMap.haveFlag) {
                            this.setData({
                                nothing: '没有更多了'
                            });
                        }
                        dataMap.noticeList.forEach((item) => {
                            item.createTime = dateUtils.formatTime(item.createTime, 'YY-MM-DD')
                        });
                        this.setData({
                            noticeList: this.data.noticeList.concat(dataMap.noticeList),
                            haveFlag: dataMap.haveFlag,
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
