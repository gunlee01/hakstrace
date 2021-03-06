'use strict';

angular.module('admin').factory('Users', ['$resource',
  function($resource) {
    return $resource('api/admin/users/:email', null,
              {'update': { method:'PUT' }});
}]);

angular.module('admin').factory('UserAuths', ['$resource',
  function($resource) {
    return $resource('/api/admin/user-auths/:code');
}]);


angular.module('admin').factory('Scripts', ['$resource',
  function($resource) {
    return $resource('/api/admin/scripts/:version');
}]);

angular.module('admin').factory('ScriptLatest', ['$resource',
  function($resource) {
    return $resource('/api/admin/scripts/latest',{},{cache:false});
}]);
