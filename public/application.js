'use strict';

var mainApplicationModuleName = 'hakstrace';

var mainApplicationModule = angular.module(mainApplicationModuleName, [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ngRoute',
    'toaster',
    'xeditable',
    'app',
    'datatables',
    'admin'
]);


angular.element(document).ready(function() {
  angular.bootstrap(document, [mainApplicationModuleName]);
});

// xeditable default setting (http://vitalets.github.io/angular-xeditable)
mainApplicationModule.run(function(editableOptions, editableThemes) {
  editableThemes.bs3.inputClass = 'input-sm';
  editableThemes.bs3.buttonsClass = 'btn-sm';
  editableOptions.theme = 'bs3';
});

// 요건 global error handle 할려고
mainApplicationModule.config(function ($provide, $httpProvider){
  $httpProvider.interceptors.push(function($q, $log, toaster) {
    return {
      /*
      'request': function(config) {
       return config;
      },

      'response': function(response) {
        return response;
      },
      */

      'responseError': function(rejection) {
        toaster.pop({
          type: 'error',
          title: rejection.status + ' ' + rejection.statusText,
          body: rejection.data.message
        });
        return $q.reject(rejection);
      }
    };
  });

});

// x-requested-with 가 안 붙어 날라감.
mainApplicationModule.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
}]);


// filter

mainApplicationModule
  .filter('fromNow', function() {
    return function(date) {
      return moment(date).fromNow();
    }
  });

// lazyload config
