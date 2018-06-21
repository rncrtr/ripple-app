'use strict';

// GLOBAL COMPONENTS
angular.module('goback', []).directive('goback', function() {
  return {
    template: 
      '<ul class="list-group">'+
          '<li class="list-group-item no-border">'+
              '<a href="javascript:history.back();">'+
                  '<span class="fas fa-fw fa-chevron-left text-left"></span>'+
                  '<span>Back</span>'+
              '</a>'+
          '</li>'+
      '</ul>'
  };
});

angular.module('navMenu', []).directive('navMenu', function() {
  return {
    template: 
      '<ul id="wfc-menu" class="nav col-12-sm nopad">'+
        '<li class="nav-item col-2-sm">'+
          '<a class="nav-link text-white" href="#!/home">Home</a>'+
        '</li>'+
        '<li class="nav-item col-2-sm">'+
          '<a class="nav-link text-white" href="#!/studies">Studies</a>'+
        '</li>'+
        '<li class="nav-item col-2-sm">'+
          '<a class="nav-link text-white" href="#!/devotions">Devotions</a>'+
        '</li>'+
        '<li class="nav-item col-2-sm">'+
          '<a class="nav-link text-white" href="#!/prayer">Prayer</a>'+
        '</li>'+
        '<li style="position: absolute; right: 0px; padding-right: 20px; padding-top: 10px; float: right; text-align: right; height: 43px; width: 50px;" class="menu-drop nav-item">' +
          '<a class="text-white" style="" href=""><i class="fas fa-fw fa-bars" style="font-size: 16px;"></i></a>' +
        '</li>' +
      '</ul>'
  };
});

// HOME
angular.module('whiteflag.home', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', function ($scope) {
    $scope.topBanner = null;
    $scope.menuItems = [
      { icon: 'fas fa-fw fa-book-open', name: 'Today\'s Devotion', url: '#!/devotions' },
      { icon: 'fas fa-fw fa-bullhorn', name: 'Announcements', url: '#!/news'},
      { icon: 'far fa-fw fa-clock', name: 'Services & Contact Info', url: '#!/services'},
      { icon: 'far fa-fw fa-map', name: 'Map', url:'https://www.google.com/maps/place/4625+E+Iowa+Ave,+Denver,+CO+80222/@39.6836303,-104.9332396,15z/data=!4m7!1m4!3m3!1s0x876c7dde82eac263:0x2912172574625955!2s4625+E+Iowa+Ave,+Denver,+CO+80222!3b1!3m1!1s0x876c7dde82eac263:0x2912172574625955',ext: true},
      { icon: 'far fa-fw fa-play-circle', name: 'Studies', url:'#!/studies'},
      { icon: 'far fa-fw fa-paper-plane', name: 'Prayer Requests', url: '#!/prayer' },
      { icon: 'fas fa-fw fa-globe', name: 'Missions', url: '#!/missions' },
      { icon: 'fas fa-fw fa-receipt', name: 'Giving', url:'#!/giving'},
      { icon: 'fas fa-fw fa-heart', name: 'Love Abounds Food Bank', url:'#!/foodbank'},
      { icon: 'fas fa-fw fa-book', name: 'Discipleship', url:'#!/discipleship'},
      { icon: 'fas fa-fw fa-chalkboard-teacher', name: 'Resources', url: '#!/resources' },
      { icon: 'fab fa-fw fa-youtube', name: 'YouTube Videos', url:'https://m.youtube.com/channel/UCNum-_XTF3mmxVUzVRHki8Q',ext: true},
      { icon: 'fab fa-fw fa-facebook', name: 'Facebook Page', url:'https://m.facebook.com/whiteflagcalvary',ext: true},
      { icon: 'fas fa-fw fa-info', name: 'About The App', url:'#!/about'}
    ];
    
    var v = document.getElementById('welcome_video');
    v.addEventListener(
       'play', 
          function() { 
             v.play();
          }, 
        false);

    v.onclick = function() {
      if (v.paused) {
        v.play();
        v.controls=null;
      } else {
        v.pause();
        v.controls="controls";
      }
    };

}]);

// NEWS
//////////////////////////////////////////////////////////
angular.module('whiteflag.news', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/news', { templateUrl: 'news.html', controller: 'NewsCtrl' });
}])

.controller('NewsCtrl', [function () {

}]);

// STUDIES
//////////////////////////////////////////////////////////
angular.module('whiteflag.studies', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/studies', { templateUrl: 'studies.html', controller: 'StudiesCtrl' });
}])

.filter('trustAsResourceUrl', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsResourceUrl(val);
    };
}])

.controller('StudiesCtrl', ['$scope', function ($scope) {
  $scope.currentStudy = null;
  $scope.currentPlayer = null;
  $scope.topBanner = null;
  $scope.menuItems = [
    {name:'Exodus',player_url: '31551'},
    {name:'Elisha',player_url: '31553'},
    {name:'Philippians',player_url: '31554'},
    {name:'Revelation',player_url: '31557'},
    {name:'Genesis',player_url: '31556'},
    {name:'Ephesians',player_url: '31555'},
    {name:'Zechariah',player_url: '31558'},
    {name:'Galatians',player_url: '31559'},
    {name:'Topical',player_url: '31560'}
    ];
    
    $scope.setStudy = function(study){
      console.log('study set to',study);
      if(study != null){
        $scope.currentStudy = study;
        $scope.currentStudyObj = $scope.menuItems.filter(function(el) {
          if(el.name == study){
            return el;
          }
        });
        $scope.currentPlayer = $scope.currentStudyObj[0].player_url; 
        console.log('player',$scope.currentPlayer);
      }else{
        $scope.currentStudy = null;
        $scope.currentPlayer = null;
      }
    }
    
    $scope.setPlayerUrl = function(id){
      return 'https://whiteflagcalvary.sermon.net/widget/listplayer/'+id;
    }
}]);

// DEVOTIONS
//////////////////////////////////////////////////////////
angular.module('whiteflag.devotions', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/devotions', { templateUrl: 'devotions.html', controller: 'DevotionsCtrl' });
}])

.controller('DevotionsCtrl', ['$scope',function($scope) {
  
    if(window.location.hash.indexOf('devotions')!=-1) {
      var url = 'http://livinginchrist.org/wp-content/media/dbdbg/dbdbg.php';
    }  
}]);

// PRAYER
//////////////////////////////////////////////////////////
angular.module('whiteflag.prayer',[])

.config(['$routeProvider',function($routeProvider) {
  $routeProvider.when('/prayer', { templateUrl: 'prayer.html', controller: 'PrayerCtrl' });
}])

.controller('PrayerCtrl', ['$scope','$http', function($scope, $http) {
  $scope.topBanner = null;
  $scope.blanks = [undefined,null,''];
  $scope.prayerError = false;
  $scope.prayerData = {
    subject: '[White Flag Mobile] Prayer Request Submission',
    to: 'me@rncrtr.in',
    from: 'donotreply@whiteflagcalvary.org',
    html: ''
  };
  $scope.prayerConfig = {
    headers:{
      'Content-Type':'application/json',
      'Accepts':'application/json'
    }
  };


  $scope.prepPrayerRequest = function(){
    $scope.prayerHtml = '';
    $scope.prayerHtml += "<div>You've been sent a prayer request from the White Flag Mobile App. Here are the details:</div><br /><br />";
    if($scope.blanks.indexOf($scope.prayerName)==-1){
      $scope.prayerHtml += '<div><b>Name:</b>&nbsp;&nbsp;' + $scope.prayerName + '</div>';
    }
    if($scope.blanks.indexOf($scope.prayerEmail)==-1){
      $scope.prayerHtml += '<div><b>Email:</b>&nbsp;&nbsp;' + $scope.prayerEmail; + '</div>';
    }
    if($scope.blanks.indexOf($scope.prayerPhone)==-1){
      var phone = $scope.prayerPhone;
      $scope.prayerHtml += '<div><b>Phone:</b>&nbsp;' + $scope.prayerPhone; + '</div>';
    }
    if($scope.blanks.indexOf($scope.prayerRequest)==-1){
      $scope.prayerHtml += '<div><b>Prayer Request:</b><br />' + $scope.prayerRequest; + '</div>';
      $scope.sendPrayerRequest();
    }else{
      $scope.prayerError = true;
    }
  }

  $scope.sendPrayerRequest = function(){
    $scope.prayerData.html = $scope.prayerHtml;
    var prayerData = $scope.prayerData;
    var prayerConfig = $scope.prayerConfig;
    $http.post('/api/sendmail',prayerData,prayerConfig)
    .then(function(resp){
      console.log(resp);
    });
  }
}]);


// ABOUT
//////////////////////////////////////////////////////////
angular.module('whiteflag.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', { templateUrl: 'about.html', controller: 'AboutCtrl' });
}])

.controller('AboutCtrl', [function() {

}]);


// SERVICES
//////////////////////////////////////////////////////////
angular.module('whiteflag.svcs', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/services', { templateUrl: 'services.html', controller: 'ServicesCtrl' });
}])

.controller('ServicesCtrl', ['$scope',function($scope) {
    $scope.topBanner = null;
}]);


// MISSIONS
//////////////////////////////////////////////////////////
angular.module('whiteflag.missions', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/missions', { templateUrl: 'missions.html', controller: 'MissionsCtrl' });
}])

.filter('trustAsResourceUrl', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsResourceUrl(val);
    };
}])

  .controller('MissionsCtrl', ['$scope',function($scope) {
  
}]);


// GIVING
//////////////////////////////////////////////////////////
angular.module('whiteflag.give',[])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/giving', { templateUrl: 'giving.html', controller: 'GivingCtrl' });
}])

.controller('GivingCtrl', [function() {

}]);

// FOODBANK
//////////////////////////////////////////////////////////
angular.module('whiteflag.foodbank', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/foodbank', { templateUrl: 'foodbank.html', controller: 'FoodbankCtrl' });
}])

.controller('FoodbankCtrl', [function() {

}]);

//DISCIPLESHIP
//////////////////////////////////////////////////////////
angular.module('whiteflag.disc',[])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/discipleship', { templateUrl: 'discipleship.html', controller: 'DiscipleshipCtrl' });
}])

.filter('trustAsResourceUrl', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsResourceUrl(val);
    };
}])

.controller('DiscipleshipCtrl', ['$scope',function($scope) {
  $scope.currentAudio = null;
  
  $scope.setCurrentAudio = function(url){
    $scope.currentAudio = url;
  }
  
  $scope.getCurrentAudio = function(audioUrl){
    return audioUrl;
  }
}]);

// RESOURCES
//////////////////////////////////////////////////////////
angular.module('whiteflag.resources', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resources', { templateUrl: 'resources.html', controller: 'ResourcesCtrl' });
}])

.filter('trustAsResourceUrl', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsResourceUrl(val);
    };
}])

  .controller('ResourcesCtrl', ['$scope',function($scope) {
    // audio: fa-volume-up
    // book: fa-book

    $scope.resLib = [
      { name: "Managing Your Emotions" },
      { name: "What Wrong with a Little Porn When You're Single" },
      { name: "Can You Change If You're Gay" },
      { name: "I Just Want To Die" },
      { name: "Feeling Guilty" },
      { name: "Recovering from Child Abuse" },
      { name: "Social Anxiety" },
      { name: "PMS" },
      { name: "Stressed to the Max" },
      { name: "Eating Disorders" },
      { name: "Freedom From Addiction" },
      { name: "Freedom From Guilt" },
      { name: "Grief" },
      { name: "Becoming a Widow" },
      { name: "Fibromyalgia" },
      { name: "Suffering" },
      { name: "PTSD" },
      { name: "Temptation" },
      { name: "When Crisis Hits" },
      { name: "Burned Out?" },
      { name: "Accepting God's Forgiveness" },
      { name: "Raising Sexually Healthy Kids" },
      { name: "How to Talk to Your Kid about Sex" },
      { name: "Homosexuality and the Bible" },
      { name: "Your Gay Child Says 'I Do'" },
      { name: "Your Child Says, 'I'm Gay'" },
      { name: "Grieving a Suicide" },
      { name: "Diagnosed with Breast Cancer" },
      { name: "Relief without Cutting" },
      { name: "The Empty Nest" },
      { name: "Facing Death with Hope" },
      { name: "The Gay Dilemma and Your Church" },
      { name: "When Trouble Shows Up" },
      { name: "Alzheimer's Disease" },
      { name: "Anxiety and Panic Attacks" },
      { name: "When Bad Things Happen" },
      { name: "When Cancer Interrupts" },
      { name: "What's Wrong with a Little Porn When You're Married" },
      { name: "Menopause" },
      { name: "Life after Retirement" },
      { name: "Divorce Recovery" },
      { name: "Living Together" },
      { name: "How to Say No When Your Body Says Yes" },
      { name: "Sexual Assault" },
      { name: "Conflict" },
      { name: "Controlling Anger" },
      { name: "Renewing Marital Intimacy" },
      { name: "Helping Your Adopted Child" },
      { name: "Recoving from Child Abuse" },
      { name: "Your Special Needs Child" },
      { name: "Parenting Your ADHD Child" },
      { name: "A Father's Guide to Raising Girls" },
      { name: "Who Does the Dishes?" },
      { name: "Forgiving Others" },
      { name: "iSnooping on Your Kid" },
      { name: "Greiving the Loss of Your Child" },
      { name: "Forming a Strong Mother-Daughter Bond" },
      { name: "Sex Before Marriage" },
      { name: "How Do I Stop Losing It with My Kids?" },
      { name: "Infertility" },
      { name: "Bringing Christ to Abused Women" },
      { name: "Hope for the Depressed" },
      { name: "Life Beyond Your Parents' Mistakes" },
      { name: "Overcoming Anxiety" },
      { name: "How Do I Look?" },
      { name: "The Gift of Addiction" },
      { name: "Borderline Personality" },
      { name: "Leaving Your Family Behind" },
      { name: "Your Husband is Addicted to Porn" },
      { name: "Starting Over" },
      { name: "Self-Centered Spouse" },
      { name: "Burnout" },
      { name: "Healing After Abortion" },
      { name: "Living with an Angry Spouse" },
      { name: "Help! My Spouse Committed Adultery" },
      { name: "Abuse" },
      { name: "Sexual Abuse" },
      { name: "Authority Issues" },
      { name: "Post-Traumatic Stress Disorder" },
      { name: "Cutting" },
      { name: "Protecting Children from Abuse in the Church" },
      { name: "Vulnerability" },
      { name: "Romantic Conflict" },
      { name: "Reuniting after Military Deployment" },
      { name: "Children and Divorce" }

    ];

    $scope.audio = [
      { name: 'Answers to Prayer - George Müller', icon: 'fas fa-volume-up', url: 'https://librivox.org/answers-to-prayer-from-george-mullers-narratives-by-george-muller/' },
    ];

    $scope.books = [

    ];

    $scope.videos = [

    ];
}]);

// SETTINGS
//////////////////////////////////////////////////////////
angular.module('whiteflag.settings', [])

.controller('SettingsCtrl', ['$scope',function ($scope) {
  
}]);

//SETTINGS ADMIN
//////////////////////////////////////////////////////////
angular.module('whiteflag.settAdm', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/settings/admin', {
    templateUrl: 'settadm.html',
    controller: 'SettAdmCtrl'
  });
}])

.controller('SettAdmCtrl', ['$scope',function ($scope) {

}]);