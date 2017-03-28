/**
 * Created by ryanford on 3/18/17.
 */
let api = angular.module('api', []);

api.factory('api', ['$http',function($http){
  const api = {
    fetchMyApps: function() {
      return $http.get('/api/api-my-app');
    },
    fetchAppDetail: function(id){
      return $http.get(`/api/app-details/${id}`);
    }
  }
  return api;
}])


export default api;
