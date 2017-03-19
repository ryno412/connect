class MyappsController {
  constructor(myAppsApi) {
    this.name = 'myapps';
    myAppsApi.fetchMyApps().then((res) => {
      if (res && res.data && Array.isArray(res.data)) {
        this.apps = res.data;
      }
      else {
        throw new Error('No Apps in respons')
      }
    }).catch(e => {
      console.log("E",e)
    })
  }
}

MyappsController.$inject = ['myAppsApi'];
export default MyappsController;
