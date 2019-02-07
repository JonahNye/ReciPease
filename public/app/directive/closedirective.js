"use strict";

function closeDirective() {
    return {
        restrict: "A",
        replace: false,
        link: function ($scope, $element, $attrs) {
            $element.on("click", () => {
                console.log($element);
                $element[0].parentElement.parentElement.nextElementSibling.style.display = "none";
                $element[0].style.display = "none";
                $element[0].previousElementSibling.style.display = "flex";

            })
        }
    }
};


angular
    .module("App")
    .directive("closeDirective", closeDirective);