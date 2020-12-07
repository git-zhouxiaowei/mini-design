// pages/about/about.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        introduction: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let introduction = '<p><strong class="ql-size-huge" style="color: rgb(0, 0, 0);">一分钟了解</strong></p><p><img src="http://localhost:8080/profile/upload/2020/12/07/9fdaa2313d8a17345b951b7c07f21016.jpg"></p><p><img src="http://localhost:8080/profile/upload/2020/12/07/f5e1541d4138a653e6a10c7d615c9d04.jpg"></p><p><img src="http://localhost:8080/profile/upload/2020/12/07/3edf3dfa87aede510cc9b161d352d953.jpg"></p><p><img src="http://localhost:8080/profile/upload/2020/12/07/d09f874c2cf9049a2963d0a38c9eb409.jpg"></p><p><img src="http://localhost:8080/profile/upload/2020/12/07/6b6ab3ab50183b817dd8798418a780a9.jpg"></p><p><img src="http://localhost:8080/profile/upload/2020/12/07/8f75dfeec80f7340e7f1e54b2720f881.jpg"></p><p><img src="http://localhost:8080/profile/upload/2020/12/07/45accef495f681b508971ab42f69c237.jpg"></p><p><br></p>';
      introduction = introduction.replace(/\<img/gi,'<img style="width:100%;height:auto;"').replace(/\<p>/gi, '<p class="p_class">');
      this.setData({
        introduction
      })
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
