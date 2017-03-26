class AppdetailController {
  constructor($stateParams, api, $rootScope, $transitions, $scope) {
    console.log("PRAMS", $stateParams)
    this.name = 'appdetail';
    api.fetchAppDetail($stateParams.id).then((res) => {
      console.log("$$$", res)
      console.log('$$$$$$')
      $rootScope.currentAppDetails = res.data;
    })

    $scope.$on('$destroy', ()=> {
      console.log('distroyed')
      $rootScope.currentAppDetails = null;
    })

    $transitions.onExit({foo: 'bar'}, (match, cb) => {
      //console.log("EXIT", match, cb)
      true;
    })
  }
}

AppdetailController.$inject = ['$stateParams', 'api', '$rootScope', '$transitions', '$scope'];
export default AppdetailController;
