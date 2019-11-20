import angular from 'angular';

// Create the module where our functionality can attach to
let homeModule = angular.module('home', []);

// Include our UI-Router config settings
import HomeConfig from './home.config';
homeModule.config(HomeConfig);

// Controllers
import HomeCtrl from './home.controller';
homeModule.controller('HomeCtrl', HomeCtrl);

// Services inject, so u can use in controller as argument via name
import UserService from './user.service';
homeModule.service('UserService', UserService);

// factory return an obj w method
homeModule.factory("DriversFactory", function($http) {
  const factory = {};
  factory.getDrivers = function() {
      return $http({      
        url: 'https://jsonplaceholder.typicode.com/posts'
      });
    }
  return factory;
})

export default homeModule;