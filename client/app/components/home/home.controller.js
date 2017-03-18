import appIconSrc from '../../assets/imgs/appIcon.png';
import analyticsIconSrc from '../../assets/imgs/analyticsIcon.png';

class HomeController {
  constructor($rootScope) {
    this.name = 'home';
    this.myAppsIcon = appIconSrc;
    this.anaylticsIcon = analyticsIconSrc;
    this.$rootScope = $rootScope;
    this.$rootScope.bodyClazz = 'FOO'
  }
}
HomeController.$inject = ['$rootScope'];
export default HomeController;
