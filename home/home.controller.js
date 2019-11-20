class HomeCtrl {
  constructor($scope, UserService, DriversFactory, $location) {
    "ngInject";
    this.name = "";
    this.$Uservice = UserService;
    this.users = [];
    this.$scope = $scope;

    DriversFactory.getDrivers().then((res) => {
      $scope.items = res.data;
    })

  }

  async getUsers() {
    this.users = await this.$Uservice.getUsers().then(res => res.data);
    this.$scope.$applyAsync();
  }
  submit() {
    console.log(this.name);
  }
}

export default HomeCtrl;
