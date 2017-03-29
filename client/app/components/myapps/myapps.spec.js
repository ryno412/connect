import MyappsModule from './myapps'
import MyappsController from './myapps.controller';
import MyappsComponent from './myapps.component';
import MyappsTemplate from './myapps.html';

describe('Myapps', () => {
  let $rootScope, $state, $location, $componentController, $compile, q, deferred;

  beforeEach(window.module(MyappsModule));
  beforeEach(inject(($injector) => {
      $rootScope = $injector.get('$rootScope');
      $componentController = $injector.get('$componentController');
      $state = $injector.get('$state');
      $location = $injector.get('$location');
      $compile = $injector.get('$compile');
      q = $injector.get('$q');
    }));


  describe('Controller', () => {
    // controller specs
    let controller, scope, apiService, deferred;

      beforeEach(() => {
        scope = $rootScope.$new();
          apiService = {
            fetchMyApps : function () {
              deferred = q.defer();
              return deferred.promise;
                }
          }
          controller = $componentController('myapps', {
            api: apiService,
            $scope : scope
          });
      });


    it('loads the apps array with detials', () => {
      const apps = [
        {
          id:1,
          icon: 'default',
          name: 'My Cool App',
          type: 'Watch',
          version: '1.0',
          submissionState: 'Prepare for Submission'
        },
        {
          id: 2,
          icon: 'default',
          name: 'My Not So Cool App',
          type: 'IOS',
          version: '1.0',
          submissionState: 'Review'
        }
      ];

      deferred.resolve({data:apps});
      scope.$digest()
      expect(controller.apps).to.eql(apps);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyappsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyappsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyappsController);
      });
  });
});
