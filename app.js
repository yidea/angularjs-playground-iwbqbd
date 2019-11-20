import angular from 'angular';
import '@uirouter/angularjs';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './home'
import './about'

// Create and bootstrap application
window.app = angular.module('app', [
  'ui.router',
  'home',
  'about'
]);

angular.bootstrap(document.getElementById('app'), ['app']);