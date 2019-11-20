import angular from 'angular';
import '@uirouter/angularjs';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './home'
import './about'

// Create and bootstrap application
const requires = [
  'ui.router',
  'home',
  'about'
];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);