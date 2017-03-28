import AppiconModule from './appicon'
import AppiconController from './appicon.controller';
import AppiconComponent from './appicon.component';
import AppiconTemplate from './appicon.html';

describe('Appicon', () => {
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


  describe('Template', () => {
    // template specs
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

  describe('View', () => {
    // view layer specs.
    let scope;

    beforeEach(() => {
      scope = $rootScope.$new();

    });

    it('should bind link', () => {
      const link = '/link-to-some-page';
      let template = $compile('<appicon link="/link-to-some-page"></appicon>')(scope);
      scope.$apply();
      expect(template.find('a').hasClass('app-icon-link')).to.be.true;
      expect(template.find('a').attr('ui-sref')).to.eql('/link-to-some-page')
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
