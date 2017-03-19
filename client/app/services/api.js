/**
 * Created by ryanford on 3/18/17.
 */
let api = angular.module('api', []);

api.factory('myAppsApi', ['$http',function($http){
  var shinyNewServiceInstance;
  const myAppsApi = {

    fetchMyApps: function() {
      return $http.get('/api/api-my-app');
      // return new Promise((resolve, reject) => {
      //   setTimeout(function () {
      //     console.log('$$$$$$', "SET TIME OU CALLED")
      //     return resolve({foo:'bar'})
      //   },2000)
      // })
    }
  }
  return myAppsApi;
}])


export default api;
