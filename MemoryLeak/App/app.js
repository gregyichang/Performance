(function() {
    "use strict";

    var app = angular.module("memApp", ["ngSanitize", "ngAnimate", "ngAria", "ngMessages", "ui.router", "ui.bootstrap"]);

    angular.element(window).ready(function() {
        angular.bootstrap(document, ["memApp"]);
    });

    app.config(["$stateProvider", "$urlRouterProvider", "$compileProvider", function ($stateProvider, $urlRouterProvider, $compileProvider) {
        $compileProvider.debugInfoEnabled(false);

        $urlRouterProvider.otherwise("/form1");

        $stateProvider.state("/form1",
            {
                url: "/form1",
                templateUrl: "App/views/form1.html"
            })
            .state("/form2",
            {
                url: "/form2",
                templateUrl: "App/views/form2.html"
            })
            .state("/form3",
            {
                url: "/form3",
                templateUrl: "App/views/form3.html"
            });


    }]);

})();