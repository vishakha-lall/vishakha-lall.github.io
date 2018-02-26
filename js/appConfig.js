app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
    	controller: '/js/homeController.js',
        url: '/home',
        views: {
        	'': { templateUrl: '/views/home.html' },
        }
    })
    .state('about-me', {
        controller: '/js/aboutMeController.js',
        url: '/about-me',
        views: {
            '': { templateUrl: '/views/about-me.html' },
        }
    })
    .state('projects', {
        controller: '/js/projectsController.js',
        url: '/projects',
        views: {
            '': { templateUrl: '/views/projects.html' },
        }
    })
    .state('blog', {
        controller: '/js/blogController.js',
        url: '/blog',
        views: {
            '': { templateUrl: '/views/blog.html' },
        }
    })
    .state('contact-me', {
        controller: '/js/contactMeController.js',
        url: '/contact-me',
        views: {
            '': { templateUrl: '/views/contact-me.html' },
        }
    })
    $urlRouterProvider.otherwise('/home');
}); 