import AppdetailModule from './appdetail'
import AppdetailController from './appdetail.controller';
import AppdetailComponent from './appdetail.component';
import AppdetailTemplate from './appdetail.html';

describe('Appdetail', () => {
  let $rootScope, $state, $location, $componentController, $compile, q, deferred;

  beforeEach(window.module(AppdetailModule));
  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
    q = $injector.get('$q');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    let controller, scope, apiService;
    beforeEach(() => {
      scope = $rootScope.$new();
      apiService = {
        fetchAppDetail : function () {
           deferred = q.defer();
            return deferred.promise;
          }
      }
      controller = $componentController('appdetail', {
        api: apiService,
        $scope : scope
      });

    });
    // controller specs
    it('controller should load data', () => { // erase if removing this.name from the controller
      let appDetailsMock = {
        id:1,
        icon: 'default',
        name: 'My Cool App',
        type: 'Watch',
        version: '1.0',
        submissionState: 'Prepare for Submission'
      }
      deferred.resolve({data:appDetailsMock});
      scope.$digest()
      expect(controller.currentAppDetails).to.eql(appDetailsMock);
    });
  })


  describe('Component', () => {
      // component/directive specs
      let component = AppdetailComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AppdetailTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AppdetailController);
      });
  });
});
