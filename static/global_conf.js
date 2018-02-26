const GlobalConfigs = {
  pageTitle: "Azino777 бездепозитный бонус",
  navigationType: ProjectConsts.allNavigationTypes.singlePage,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "http://ballun.top/",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"http://ballun.top/"},
    {
      icon: 'list', text: 'Видео',
      url: "http://ballun.top/", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"http://ballun.top/"},
    {
      icon: 'info', text: 'О нас',
      url: "http://ballun.top/"
    },
    {
      icon: 'mail', text: 'Контакты',
      url: "http://ballun.top/"
    },
    {
      icon: 'group', text: 'О разработчике', url: "",
      onClick: function () {
        CSharp.AboutDeveloper();
      }
    }
  ],
  styling: {
    isDarkTheme: 0,
    menuColor: "brown lighten-3", //from https://vuetifyjs.com/style/colors
    showLogo: false,
    showTitleInMenu: true,
    isMenuFlat: false
  }
}



