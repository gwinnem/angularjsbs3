﻿var aurora = angular.module('aurora',
    [
        'oc.lazyLoad',
        'ui.router',
        'ui.bootstrap',
        'ui-notification',
        'ngSanitize',
        'abConfig',
        'abSimpleBreadCrumbs',
        'abPageTitle',
        'abWhenScrollEnds',
        'abInfobox',
        'abSmallBox',
        'abIconBox',
        'abDataService',
        'abStatusLabel',
        'abPriorityLabel',
        'abModalDialogs',
        'abIcheck',
        'abNumbersOnly',
        'abTextAreaAutoresize',
        'abFitHeight'
    ]);

aurora.config(

    function (
        $stateProvider,
        $httpProvider,
        $locationProvider,
        $urlRouterProvider,
        $provide,
        $compileProvider,
        $qProvider,
        $urlMatcherFactoryProvider) {

        $urlMatcherFactoryProvider.strictMode(true);

        // Turning on / off unhandled errors
        $qProvider.errorOnUnhandledRejections(true);
        // Turning on / off debug information
        $compileProvider.debugInfoEnabled(true);
        // Turning on pretty urls
        //$locationProvider.html5Mode({enabled: true,requireBase: true});
        $urlRouterProvider.otherwise('/welcome');

        $stateProvider
            .state('welcome', {
                url: '/welcome',
                templateUrl: 'pages/welcome.html',
                pageTitle: 'ABAdmin introduction',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Welcome' }]
            })
            .state('roadmap', {
                url: '/roadmap',
                templateUrl: 'pages/roadmap.html',
                pageTitle: 'ABAdmin Roadmap',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Roadmap' }]
            })
            .state('dependencies', {
                url: '/dependencies',
                templateUrl: 'pages/dependencies.html',
                pageTitle: 'ABAdmin Dependencies',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Dependencies' }]

            })
            .state('layouts', {
                url: '/layout',
                templateUrl: 'pages/layout.html',
                pageTitle: 'ABAdmin Layouts',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Layout' }]

            })
            .state('plugins', {
                url: '/plugins',
                templateUrl: 'pages/plugins.html',
                pageTitle: 'ABAdmin Plugins',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Plugins' }]

            })
            .state('mainheader', {
                url: '/components/html/main-header',
                templateUrl: 'pages/mainheader.html',
                pageTitle: 'ABAdmin Html Component Main Header',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Components' }, { name: 'Html' }, { name: 'Main Header' }]

            })
            .state('sidebar', {
                url: '/components/html/sidebar',
                templateUrl: 'pages/sidebar.html',
                pageTitle: 'ABAdmin Html Component Sidebar(Left side treeview)',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Components' }, { name: 'Html' }, { name: 'Sidebar' }]

            })
            .state('controlsidebar', {
                url: '/components/html/controlsidebar',
                templateUrl: 'pages/controlsidebar.html',
                pageTitle: 'ABAdmin Html Component Control Sidebar(Right side treeview)',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Components' }, { name: 'Html' }, { name: 'Control Sidebar' }]

            })
            .state('box', {
                url: '/components/html/box',
                templateUrl: 'pages/box.html',
                pageTitle: 'ABAdmin Html Component Box',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Components' }, { name: 'Html' }, { name: 'Box' }]

            })
            .state('htmlinfobox', {
                url: '/components/html/infobox',
                templateUrl: 'pages/infobox.html',
                pageTitle: 'ABAdmin Html Component InfoBox',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Components' }, { name: 'Html' }, { name: 'InfoBox' }]

            })
            .state('htmltreeview', {
                url: '/components/html/treeview',
                templateUrl: 'pages/treeview.html',
                pageTitle: 'ABAdmin Html Component Treeview',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Components' }, { name: 'Html' }, { name: 'Treeview' }]

            })
            .state('htmltodolist', {
                url: '/components/html/todolist',
                templateUrl: 'pages/todolist.html',
                pageTitle: 'ABAdmin Html Component Todolist',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Components' }, { name: 'Html' }, { name: 'Todolist' }]

            })
            .state('jscomponents', {
                url: '/components/js',
                templateUrl: 'pages/jscomponents.html',
                pageTitle: 'ABAdmin Js Components',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Components' }, { name: 'Js' }]

            })
            .state('jslayout', {
                url: '/components/js/layout',
                templateUrl: 'pages/jslayout.html',
                pageTitle: 'ABAdmin Js Layout',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Components' }, { name: 'Js' }, { name: 'Layout' }]

            })
            .state('jssidebar', {
                url: '/components/js/sidebar',
                templateUrl: 'pages/jssidebar.html',
                pageTitle: 'ABAdmin Js Sidebar',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Components' }, { name: 'Js' }, { name: 'Sidebar' }]

            })
            .state('jspushmenu', {
                url: '/components/js/pushmenu',
                templateUrl: 'pages/jspushmenu.html',
                pageTitle: 'ABAdmin Js PushMenu',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Components' }, { name: 'Js' }, { name: 'PushMenu' }]

            })
            .state('jscontrolsidebar', {
                url: '/components/js/controlsidebar',
                templateUrl: 'pages/jscontrolsidebar.html',
                pageTitle: 'ABAdmin Js Control Sidebar',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Components' }, { name: 'Js' }, { name: 'Control Sidebar' }]

            })
            .state('jsbox', {
                url: '/components/js/box',
                templateUrl: 'pages/jsbox.html',
                pageTitle: 'ABAdmin Js Box Widget',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Components' }, { name: 'Js' }, { name: 'Box Widget' }]

            })
            .state('jsboxrefresh', {
                url: '/components/js/boxrefresh',
                templateUrl: 'pages/jsboxrefresh.html',
                pageTitle: 'ABAdmin Js Box Refresh',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Components' }, { name: 'Js' }, { name: 'Box Refresh' }]

            })
            .state('jstodolist', {
                url: '/components/js/todolist',
                templateUrl: 'pages/jstodolist.html',
                pageTitle: 'ABAdmin Js Todolist',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Components' }, { name: 'Js' }, { name: 'Todolist' }]

            })
            .state('jstree', {
                url: '/components/js/treewidget',
                templateUrl: 'pages/jstree.html',
                pageTitle: 'ABAdmin Js Tree Widget',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Components' }, { name: 'Js' }, { name: 'Tree Widget' }]

            })
            .state('abelastic', {
                url: '/Directives/abelastic',
                templateUrl: 'pages/abelastic.html',
                pageTitle: 'ABAdmin ab-elastic Directive',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'ab-elastic' }]

            })
            .state('abfitheight', {
                url: '/Directives/abfitheight',
                templateUrl: 'pages/abfitheight.html',
                pageTitle: 'ABAdmin ab-fitheight Directive',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'ab-fitheight' }]

            })
            .state('icheck', {
                url: '/Directives/icheck',
                templateUrl: 'pages/icheck.html',
                pageTitle: 'ABAdmin icheck Directive',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'icheck' }]

            })
            .state('iconbox', {
                url: '/Directives/iconbox',
                templateUrl: 'pages/icon-box.html',
                pageTitle: 'ABAdmin icon-box Directive',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'icon-box' }]

            })
            .state('infobox', {
                url: '/Directives/infobox',
                templateUrl: 'pages/info-box.html',
                pageTitle: 'ABAdmin info-box Directive',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'info-box' }]

            })
            .state('nouislider', {
                url: '/Directives/noUISlider',
                templateUrl: 'pages/nouislider.html',
                pageTitle: 'ABAdmin ab-slider',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'ab-slider' }]

            })
            .state('numbersonly', {
                url: '/Directives/numbersonly',
                templateUrl: 'pages/numbersonly.html',
                pageTitle: 'ABAdmin numbers-only Directive',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'numbers-only' }]

            })
            .state('abpagetitle', {
                url: '/Directives/abpagetitle',
                templateUrl: 'pages/abpagetitle.html',
                pageTitle: 'ABAdmin ab-page-title Directive',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'ab-page-title' }]

            })
            .state('abpboxtools', {
                url: '/Directives/abboxtools',
                templateUrl: 'pages/abboxtools.html',
                pageTitle: 'ABAdmin box-tools Directive',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'box-tools' }]

            })
            .state('abprioritylabel', {
                url: '/Directives/abprioritylabel',
                templateUrl: 'pages/abprioritylabel.html',
                pageTitle: 'ABAdmin priority-label Directive',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'priority-label' }]

            })
            .state('simplebreadcrumb', {
                url: '/Directives/simplebreadcrumb',
                templateUrl: 'pages/simplebreadcrumbs.html',
                pageTitle: 'ABAdmin simple-breadcrumb Directive',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'simple breadcrumb' }]

            })
            .state('slimscroll', {
                url: '/Directives/slimscroll',
                templateUrl: 'pages/slimscroll.html',
                pageTitle: 'ABAdmin slimscroll Directive',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'slimscroll' }]

            })
            .state('smallbox', {
                url: '/Directives/smallbox',
                templateUrl: 'pages/smallbox.html',
                pageTitle: 'ABAdmin small-box Directive',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'small-box' }]

            })
            .state('staticinclude', {
                url: '/Directives/staticinclude',
                templateUrl: 'pages/staticinclude.html',
                pageTitle: 'ABAdmin static-include Directive',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'static-include' }]

            })
            .state('statuslabel', {
                url: '/Directives/statuslabel',
                templateUrl: 'pages/statuslabel.html',
                pageTitle: 'ABAdmin status-label Directive',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'status-label' }]

            })
            .state('todolist', {
                url: '/Directives/todolist',
                templateUrl: 'pages/todolist.html',
                pageTitle: 'ABAdmin todo-list Directive',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'todo-list' }]

            })
            .state('toggleswitch', {
                url: '/Directives/toggleswitch',
                templateUrl: 'pages/toggleswitch.html',
                pageTitle: 'ABAdmin toggle-switch Directive',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'toggle-switch' }]

            })
            .state('whenscrollends', {
                url: '/Directives/whenscrollends',
                templateUrl: 'pages/whenscrollends.html',
                pageTitle: 'ABAdmin when-scroll-ends Directive',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'when-scroll-ends' }]

            })
            .state('fullscreen', {
                url: '/Directives/abfullscreen',
                templateUrl: 'pages/abfullscreen.html',
                pageTitle: 'ABAdmin full-screen Directive',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Directives' }, { name: 'full-screen' }]

            })
            .state('config', {
                url: '/services/config',
                templateUrl: 'pages/config.html',
                pageTitle: 'ABAdmin config Service',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Service' }, { name: 'config' }]
            })
            .state('abdatasvc', {
                url: '/services/abdatasvc',
                templateUrl: 'pages/abDataSvc.html',
                pageTitle: 'ABAdmin abDataSvc Service',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Service' }, { name: 'abDataSvc' }]
            })
            .state('modaldialog', {
                url: '/services/modaldialog',
                templateUrl: 'pages/modaldialogs.html',
                pageTitle: 'ABAdmin modalDialog Service',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Service' }, { name: 'modalDialog' }]
            })
            .state('browser', {
                url: '/browser',
                templateUrl: 'pages/browser.html',
                pageTitle: 'ABAdmin Browser Support',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Browser Support' }]
            })
            .state('aspnetmvc6', {
                url: '/implementations',
                templateUrl: 'pages/aspnetmvc.html',
                pageTitle: 'ABAdmin Implementation ASP.NET Mvc6',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Implementation' }, { name: 'ASP.NET MVC6' }]
            })
            .state('angularjs', {
                url: '/implementations',
                templateUrl: 'pages/angularjs.html',
                pageTitle: 'ABAdmin Implementation AngularJs',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Implementation' }, { name: 'AngularJs' }]
            })
            .state('angularjsphp', {
                url: '/implementations',
                templateUrl: 'pages/angularjsphp.html',
                pageTitle: 'ABAdmin Implementation AngularJs PHP',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Implementation' }, { name: 'AngularJs PHP' }]
            })
            .state('starter', {
                url: '/starter',
                templateUrl: 'starter.html',
                pageTitle: 'Simple starter page',
                pageBreadCrumbs: [{ name: 'Home' }, { name: 'Starter' }]
            });


    }); // closes $routerApp.config()


// Starting angular app
aurora.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
        $rootScope.$stateParams = $stateParams;
    }]);
aurora.controller('MainController', ['$scope', 'config', '$notification', function ($scope, config, $notification) {
    $scope.config = config;
    $notification.info("Introduction", "ABAdmin Documentation", config.notificationDelay);
}]);
