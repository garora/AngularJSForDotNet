// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider

        // route to show our basic form (/form)
        .state('form', {
        	url: '/form',
        	templateUrl: 'form.html',
        	controller: 'formController'
        })

        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.project', {
        	url: '/project',
        	templateUrl: 'form-project.html'
        })

        // url will be /form/interests
        .state('form.interest', {
        	url: '/interest',
        	templateUrl: 'form-interest.html'
        })

        // url will be /form/payment
        .state('form.location', {
        	url: '/location',
        	templateUrl: 'form-location.html'
        })

	// url will be /form/payment
	.state('form.management', {
		url: '/management',
		templateUrl: 'form-management.html'
	})

	// url will be /form/payment
	.state('form.run', {
		url: '/run',
		templateUrl: 'form-run.html'
	})

	// url will be /form/payment
	.state('form.reports', {
		url: '/reports',
		templateUrl: 'form-reports.html'
	});

	// catch all route
	// send users to the form page 
	$urlRouterProvider.otherwise('/form/project');
})

// our controller for the form
// =============================================================================
.controller('formController', function ($scope) {

	// we will store all of our form data in this object
	$scope.formData = {};

	// function to process the form
	$scope.processForm = function () {
		alert('awesome!');
	};

});

