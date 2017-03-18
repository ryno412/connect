/**
 * Created by ryanford on 3/18/17.
 */
class AppController {
  constructor($transitions,) {
    this.name = 'app';
    $transitions.onStart({}, (trans)=>{
      const fromName = `${trans.$from().name}-page`;
      const toName = `${trans.$to().name}-page`;
      angular.element(document.body).removeClass(fromName).addClass(toName);
    });
  }
}
AppController.$inject = ['$transitions',];
export default AppController;
