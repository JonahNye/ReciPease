"use strict";

angular
    .module("App", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/recipeList", {
                template: "<recipe-list></recipe-list>"
            })
            .when("/favoritesPage", {
                template: "<favorites-page></favorites-page>"
            })
            .when("/searchCriteria", {
                template: "<search-criteria></search-criteria>"
            })
            .when("/", {
                template: "<search-criteria></search-criteria>"
            })
    }]);