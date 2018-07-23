/**
 * @author Geirr Winnem
 * @copywright 2018- Geirr Winnem. All Rights Reserved
 * @version 1.0.0
 * @link http://www.abadmin.com
 * @license MIT
 * @summary Directive template.
 */
(function () {
    "use strict";
    angular.module('moduleName', [])
        .directive('directiveName', function () {
            return {
                restrict: "EA",
                replace: true,
                transclude: true, // makes the contents of a directive with this option have access to the scope outside of the directive rather than inside.
                required: "ngModel",
                scope: {
                    customerInfo: '=ngModel', // Two way databinding
                    info: "@info", // Oneway binding
                    myFunction: "&myFunction" //Function binding
                },
                template: "Any html code here",
                templateUrl: "uri to template file",
                link: function($scope, element, attrs) {},
                controller: ["$scope", function ($scope) { }]
                // for more info visit https://stackoverflow.com/questions/24615103/angular-directives-when-and-how-to-use-compile-controller-pre-link-and-post
        }
        });

}());