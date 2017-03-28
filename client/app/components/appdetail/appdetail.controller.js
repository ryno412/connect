class AppdetailController {
  constructor($stateParams, api, $rootScope, $scope) {
    this.name = 'appdetail';
    this.privacyInputVal = 'https://somelink.com';
    api.fetchAppDetail($stateParams.id).then((res) => {
      if (res && res.data) {
        this.currentAppDetails = res.data;
        // add to the root scope so the nav can pick it up and display details.
        $rootScope.currentAppDetails = this.currentAppDetails;

        if (this.currentAppDetails.name) {
          this.appId = this.currentAppDetails.name.replace(/ /gi, '');
        }
      }
      else {
        throw new Error('No app details in response');
      }
    }).catch((e) => {
      console.log(e);
    });
    $scope.$on('$destroy', ()=> {
      $rootScope.currentAppDetails = null;
    });
  }
}

AppdetailController.$inject = ['$stateParams', 'api', '$rootScope', '$scope'];
export default AppdetailController;
