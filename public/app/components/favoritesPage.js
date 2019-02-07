"use strict";

const favoritesPage = {
  template: `
  <i id="favorite-search-btn" class="fas fa-search" ng-click="$ctrl.goToSearch()"></i>
  <h3>Favorites</h3>
  <section id="main-favorite">
    <section id="favorite" ng-repeat="favorite in $ctrl.favoritesList track by $index">
        <i id="delete-btn" class="fa fa-times" ng-click="$ctrl.remove($index)"></i>
        <p class="favorite-title">{{favorite.recipe.label}}</p>
        <p class="favorite-info"> Diet: {{ favorite.recipe.dietLabels[0] }} </p>
        <p class="favorite-info"> Servings: {{ favorite.recipe.yield }} </p>
        <p class="favorite-info">Link to recipe: </p><a id="link" href="{{ favorite.recipe.url }}">{{ favorite.recipe.url }}</a>
        <img id="favorite-image" src="{{ favorite.recipe.image }}">
    </section>
  </section>
  `,
  controller: ["Service", "$location", function (Service, $location) {
    const vm = this;
    vm.favoritesList = Service.getFavorites();
    vm.remove = (index) => {
      Service.removeFavorite(index);
    };
    vm.goToSearch = () => {
      $location.path('/searchCriteria');
    }


  }]
}

angular
  .module("App")
  .component("favoritesPage", favoritesPage)