function AboutConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('about', {
    url: '/about', // will go to /#!/about
    controller: 'AboutCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'about/about.html'
  });

};

export default AboutConfig;