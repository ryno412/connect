class NavbarController {
  constructor($rootScope) {
    this.name = 'navbar';
    $rootScope.$watch('currentAppDetails', ::this.updateNavWithAppDetails)
  }

  updateNavWithAppDetails(appDetails){
    if (appDetails) {
      this.showAppDetails = true;
      this.currentAppName = appDetails.name;
      this.currentAppIcon = appDetails.icon;
    }
    else {
      this.showAppDetails = false;
      this.currentAppName = null;
      this.currentAppIcon = null;
    }

    console.log("APP NAME", appDetails)
  }
}

NavbarController.$inject = ['$rootScope']
export default NavbarController;
