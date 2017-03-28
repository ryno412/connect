class AppdetailController {
  constructor($stateParams, api, $rootScope, $scope) {
    this.name = 'appdetail';
    this.foo = 'heyWhatsup'
    this.kook = 'kook'
    $scope.foo = 'yoFromController';
    this.bar = 'yolo';
    $scope.sayFoo = () =>{
      alert(this.foo)
      alert(this.kook)
    }


    api.fetchAppDetail($stateParams.id).then((res) => {
      if (res && res.data) {
        this.currentAppDetails = res.data;
        $rootScope.currentAppDetails = this.currentAppDetails;
      }
      else {
        throw new Error('No app details in response');
      }
    }).catch((e) => {
      console.log(e);
    })

    $scope.$on('$destroy', ()=> {
      $rootScope.currentAppDetails = null;
    })

  }
}

AppdetailController.$inject = ['$stateParams', 'api', '$rootScope', '$scope'];
export default AppdetailController;
