"use strict";

const recipeList = {
    templateUrl: "./app/components/recipeList.html",
    // bindings: {
    //     listOfItems: "<",
    //     listOfIngredients: "<"
    // },
    controller: ["Service", "$location", function (Service, $location) {
        const vm = this;
        vm.listOfItems = Service.getResults().lists;
        vm.ingredients = Service.getResults().ingredients;
        vm.add = (list) => {
            Service.addFavorite(list);
        };

        vm.goFavorites  = () => {
            $location.path('/favoritesPage');
        };

        vm.goToSearch = () => {
            $location.path('/searchCriteria');
        };

    }]
}


angular
    .module("App")
    .component("recipeList", recipeList);