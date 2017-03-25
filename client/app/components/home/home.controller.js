import appIconSrc from '../../assets/imgs/appIcon.png';
import analyticsIconSrc from '../../assets/imgs/analyticsIcon.png';
import salesAndTrendsIconSrc from '../../assets/imgs/salesTrendsIcon.png';
import paymentsAndReportsIconSrc from '../../assets/imgs/paymentsIcon.png';
import userIconSrc from '../../assets/imgs/userRolesIcon.png';
import bankIconSrc from '../../assets/imgs/taxBankingIcon.png';
import helpIconSrc from '../../assets/imgs/helpIcon.png';

class HomeController {
  constructor(/*$rootScope*/) {
    this.name = 'home';
  }

  icons = [
    {
      name: 'My Apps',
      iconSrc: appIconSrc,
      link: 'myapps'
    },
    {
      name: 'Anaylitics',
      iconSrc: analyticsIconSrc,
      link: 'myapps'
    },
    {
      name: 'Sales And Trends',
      iconSrc: salesAndTrendsIconSrc,
      link: 'myapps'
    },
    {
      name: 'Payments and Financial Reports',
      iconSrc: paymentsAndReportsIconSrc,
      link: 'myapps'
    },
    {
      name: 'Users and Roles',
      iconSrc: userIconSrc,
      link: 'myapps'
    },
    {
      name: 'Aggrements, Tax, and Banking',
      iconSrc: bankIconSrc,
      link: 'myapps'
    },
    {
      name: 'Resources and Help',
      iconSrc: helpIconSrc,
      link: 'myapps'
    }
  ]
}
//HomeController.$inject = ['$rootScope'];
export default HomeController;
