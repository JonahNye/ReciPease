 "use strict";

const searchCriteria = {
  templateUrl: "./app/components/searchCriteria.html",
  controller: ["Service", "$location", function (Service, $location) {
    const vm = this;
    vm.listOfItems;
    vm.search = (recipe, healthy, restrictions) => {
      Service.searchRecipe(recipe, healthy, restrictions).then((response) => {
        $location.path("/recipeList");
      }); 
    }
    vm.buttonShown = true;
    vm.searchShown = false;

    vm.onShow = () => {
      if (vm.searchShown === false && vm.buttonShown === true) {
          vm.searchShown = true;
          vm.buttonShown = false;
      } 
      else {
          vm.searchShown = false
          vm.buttonShown = true
      }
    }
    
    vm.goFavorites  = () => {
      $location.path('/favoritesPage');
    }

  }]
}
angular
  .module("App")
  .component("searchCriteria", searchCriteria);