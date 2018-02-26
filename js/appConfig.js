app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
    	url: '/home',
        views: {
        	'': { 
                templateUrl: '/views/home.html',
                controller: '/js/homeController.js', 
            },
        }
    })
    .state('about-me', {
        url: '/about-me',
        views: {
            '': { 
                templateUrl: '/views/about-me.html',
                controller: '/js/aboutMeController.js',
            },
        }
    })
    .state('projects', {
        url: '/projects',
        views: {
            '': { 
                templateUrl: '/views/projects.html',
                controller: '/js/projectsController.js',
            },
        }
    })
    .state('blog', {
        url: '/blog',
        views: {
            '': { 
                templateUrl: '/views/blog.html',
                controller: '/js/blogController.js',
            },
        }
    })
    .state('contact-me', {
        url: '/contact-me',
        views: {
            '': { 
                templateUrl: '/views/contact-me.html',
                controller: '/js/contactMeController.js',
            },
        }
    })
    $urlRouterProvider.otherwise('/home');
}); 