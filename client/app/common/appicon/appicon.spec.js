import AppiconModule from './appicon'
import AppiconController from './appicon.controller';
import AppiconComponent from './appicon.component';
import AppiconTemplate from './appicon.html';

describe.only('Appicon', () => {
  let $rootScope, makeController, $state, $location, $componentController, $compile;

  beforeEach(window.module(AppiconModule));
  beforeEach(inject(( $injector) => {
   // $rootScope = _$rootScope_;
    makeController = () => {
      return new AppiconController();
    };

    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  // describe('Module', () => {
  //   // top-level specs: i.e., routes, injection, naming
  // });
  //
  // describe('Controller', () => {
  //   // controller specs
  //   it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
  //     let controller = makeController();
  //     expect(controller).to.have.property('name');
  //   });
  // });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('should contain a link binding in template', () => {
      expect(AppiconTemplate).to.match(/{{\s?\$ctrl\.link\s?}}/g);
    });

    it('should contain an alt binding in template', () => {
      expect(AppiconTemplate).to.match(/{{\s?\$ctrl\.alt\s?}}/g);
    });

    it('should contain an src binding in template', () => {
      expect(AppiconTemplate).to.match(/{{\s?\$ctrl\.src\s?}}/g);
    });

    it('should contain a title binding in template', () => {
      expect(AppiconTemplate).to.match(/{{\s?\$ctrl\.title\s?}}/g);
    });
  });

  describe.only('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<appicon alt="YOLO"></appicon>')(scope);
      scope.$apply();
    });

    it('has name in template', () => {
      console.log("$$$",template)
      //expect(template.find('h1').html()).to.eq('Found in home.html');
    });

  });

  describe('Component', () => {
      // component/directive specs
      let component = AppiconComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AppiconTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AppiconController);
      });
  });
});
