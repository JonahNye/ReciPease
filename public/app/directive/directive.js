"use strict";

function directive() {
    return {
        restrict: "A",
        replace: false,
        link: function ($scope, $element, $attrs) {
            $element.on("click", () => {
                console.log($element);
                $element[0].parentElement.parentElement.nextElementSibling.style.display = "flex";
                $element[0].style.display = "none";
                $element[0].nextElementSibling.style.display = "flex";
            })
        }
    }
};


angular
    .module("App")
    .directive("directive", directive);