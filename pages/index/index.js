//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=881638803,1075513620&fm=27&gp=0.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2537028580,4058459576&fm=27&gp=0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529586294&di=270c7510dfc665f9bb0d65b3d4440f99&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.xcar.com.cn%2Fattachments%2Fa%2Fday_20140921%2F2014092123_6b90dc09dc432c42b728e5HoJuh2pL5x.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navItems: [
      {
        name: '点菜',
        url: 'dishes'
      },
      {
        name: '付款',
        url: 'take',
        isSplot: true
      },
      {
        name: '评价',
        url: 'out'
      },
      {
        name: '历史',
        url: 'bill'
      },
      {
        name: '帐单',
        url: 'bill',
        isSplot: true
      },
      {
        name: '报表',
        url: 'bill'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }

})
