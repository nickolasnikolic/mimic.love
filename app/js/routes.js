var mimicApp = angular.module('mimic', ['ui.router', 'ngSanitize', 'angular.filter'])
  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider
//logged out
        .state('homenotlogged', {
          url: '/',
          templateUrl: 'templates/home.html',
          //controller: 'HomeController', //todo controllers are shut down in routes temp
          onEnter: function($state) {
            console.log('home');
          }
        })

        .state('profilenotlogged', {
          url: '/profile/submit',
          templateUrl: 'templates/profile.html',
          //controller: 'ProfileController',
          onEnter: function($state) {
            console.log('profile');
          }
        })

      .state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html',
        //controller: 'ContactController',
        onEnter: function($state) {
          console.log('contact');
        }
      })
//logged in
      .state('profilelogged', {
        url: '/profile/update',
        templateUrl: 'templates/profile.html',
        //controller: 'ProfileUpdateController',
        onEnter: function($state) {
          console.log('profile.update');
        }
      })

      .state('selectionlogged', {
        url: '/selection',
        templateUrl: 'templates/selection.html',
        //controller: 'SelectionController',
        onEnter: function($state) {
          console.log('selection');
          //if the credentials are not set
          //route back to
        }
      })

      .state('schedulinglogged', {
        url: '/scheduling/:loveInterest',
        templateUrl: 'templates/scheduling.html',
        //controller: 'SchedulingController',
        onEnter: function($state) {
          console.log('scheduling');
        }
      })

      .state('confirmationlogged', {
        url: '/confirmation',
        templateUrl: 'templates/confirmation.html',
        //controller: 'ConfirmationController',
        onEnter: function($state) {
          console.log('confirmation');
        }
      })

      .state('itinerarylogged', {
        url: '/itinerary',
        templateUrl: 'templates/itinerary.html',
        //controller: 'ItineraryController',
        onEnter: function($state) {
          console.log('itinerary');
        }
      })

      .state('ratinglogged', {
        url: '/rating',
        templateUrl: 'templates/itinerary.html',
        //controller: 'RatingController',
        onEnter: function($state) {
          console.log('rating');
        }
      })

      .state('blog', {
        url: '/blog',
        templateUrl: 'templates/blog.html',
        //controller: 'BlogController',
        onEnter: function($state) {
          console.log('blog');
        }
      })


          .state('postjob', {
            url: '/post-job',
            templateUrl: 'templates/post-job.html',
            //controller: 'PostJobController',
            onEnter: function($state) {
              console.log('post-job');
            }
          })


          .state('findjob', {
            url: '/find-job',
            templateUrl: 'templates/find-job.html',
            //controller: 'FindJobController',
            onEnter: function($state) {
              console.log('find-job');
            }
          })

          .state('talent', {
            url: '/talent',
            templateUrl: 'templates/talent.html',
            //controller: 'TalentController',
            onEnter: function($state) {
              console.log('talent');
            }
          })
          .state('services', {
            url: '/services',
            templateUrl: 'templates/services.html',
            //controller: 'TalentController',
            onEnter: function($state) {
              console.log('services');
            }
          })
          .state('detail', {
            url: '/talent/:detailId',
            templateUrl: 'templates/detail.html',
            //controller: 'TalentController',
            onEnter: function($state) {
              console.log('talent');
            }
          })

          .state('careers', {
            url: '/careers',
            templateUrl: 'templates/careers.html',
            //controller: 'TalentController',
            onEnter: function($state) {
              console.log('careers');
            }
          })

          .state('about-us', {
            url: '/about-us',
            templateUrl: 'templates/about-us.html',
            //controller: 'TalentController',
            onEnter: function($state) {
              console.log('talent');
            }
          })

          .state('faq', {
            url: '/faq',
            templateUrl: 'templates/faq.html',
            //controller: 'FaqController',
            onEnter: function($state) {
              console.log('faq');
            }
          })
          .state('apply', {
            url: '/apply',
            templateUrl: 'templates/apply.html',
            //controller: 'FaqController',
            onEnter: function($state) {
              console.log('apply');
            }
          })
    }
  ]);
