/**
 * 
 * @author Geirr Winnem
 * @version 1.0.0
 * @link http://www.abadmin.com
 * @license MIT
 * @summary
 */
(function () {
    "use strict";
    angular.module("aNameModule", [[]])
        .controller("NameController", ["$scope", "$notification", "config",
            function ($scope, $notification, config) {

                if (config.debug) {
                    $notification.success("Widgets loaded", "Widgets", config.notificationDelay);
                }
            }]);
})();
