class MyappsController {
  constructor(api) {
    this.name = 'myapps';
    this.apps = [];
    api.fetchMyApps().then((res) => {
      if (res && res.data && Array.isArray(res.data)) {
        this.apps = res.data;
      }
      else {
        throw new Error('No Apps in response');
      }
    }).catch(e => {
      console.log(e);
    })
  }
}

MyappsController.$inject = ['api'];
export default MyappsController;
