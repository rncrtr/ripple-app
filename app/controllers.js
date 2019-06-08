'use strict';

angular.module('ripple').constant('__env',env);

// GLOBAL COMPONENTS
angular.module('goback', []).directive('goback', function() {
  return {
    template: 
      '<ul class="list-group">'+
          '<li class="list-group-item no-border">'+
              '<a href="/home">'+
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
          'Ripple Missions'+
        '</li>'+
      '</ul>'
  };
});

angular.module('filters',[])
.filter('churchname', function() {
  return function(input, uppercase) {
    input = input || '';
    var out = '';
    out = input.replace(', USA','');
    return out;
  };
})
.filter('newlines', function() {
  return function(input, uppercase) {
    input = input || '';
    var out = [];
    out = input.split('\n')
    return out;
  };
})
.filter('nohttp', function() {
  return function(input, uppercase) {
    input = input || '';
    var out = [];
    out = input.replace('https://','');
    out = out.replace('http://','');
    out = out.replace('www.','');
    return out;
  };
})
.filter('amp', function() {
  return function(input, uppercase) {
    input = input || '';
    var out = [];
    out = input.replace(' and ',' & ');
    return out;
  };
})
;

angular.module('ripple')
.directive('rippleDonateOnce', function() {
  return {
    scope: {
      onceEmail: '=email'
    },
    template: '<form class="ripple-donate-form ripple-donate-once clear" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">' + 
        '<input type="hidden" style="height: 0px;" name="cmd" value="_donations" />' +
        '<input type="hidden" style="height: 0px;" name="charset" value="utf-8" />' +
        '<input type="hidden" style="height: 0px;" name="business" value="{{onceEmail}}" />' +
        '<input type="hidden" style="height: 0px;" name="no_note" value="1" />' +
        '<input type="hidden" style="height: 0px;" name="no_shipping" value="1" />' +
        '<input type="hidden" style="height: 0px;" name="src" value="0" />' +
        '<input type="hidden" style="height: 0px;" name="item_name" value="One-Time Donation" />' +
        '<strong class="ripple-donate-title">Paypal Donate (one-time):</strong>' +
        '<input type="text" name="amount" value="" class="ripple-donate-amount form-control" placeholder="$ - One-Time Amount" />' +
        '<button type="submit" class="ripple-donate-button ripple-donate-button-once btn btn-sm btn-block btn-primary">Donate One-Time</button>' +
        '<small><b>NOTE:</b> Paypal account NOT required.</small>'+
      '</form>'
  };
});

angular.module('ripple')
.directive('rippleDonateMonthly', function() {
  return {
    scope: {
      monthlyEmail: '=email'
    },
    template: '<form class="ripple-donate-form ripple-donate-monthly clear" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">'+
      '<input type="hidden" style="height: 0px;" name="cmd" value="_xclick-subscriptions" />'+
      '<input type="hidden" style="height: 0px;" name="charset" value="utf-8" />'+
      '<input type="hidden" style="height: 0px;" name="business" value="{{monthlyEmail}}" />'+
      '<input type="hidden" style="height: 0px;" name="t3" value="M" />'+
      '<input type="hidden" style="height: 0px;" name="p3" value="1" />'+
      '<input type="hidden" style="height: 0px;" name="no_note" value="1" />'+
      '<input type="hidden" style="height: 0px;" name="src" value="1" />'+
      '<input type="hidden" style="height: 0px;" name="item_name" value="Monthly Donation" />'+
      '<strong class="ripple-donate-title">Paypal Donate (monthly):</strong>'+
      '<input type="text" name="a3" value="" class="ripple-donate-amount form-control" placeholder="$ - Monthly Amount" />'+
      '<button type="submit" class="ripple-donate-button ripple-donate-button-monthly btn btn-sm btn-block btn-primary">Donate Monthly</button>'+
      '<small><b>NOTE:</b> Paypal account is required for monthly donations.</small>'+
    '</form>'
  };
});


//////////////////////////////////////////////////
// DATA SERVICE
angular.module('ripple').factory('DataService',['$http',function($http){
  var BASE_URL = 'https://ripplemissions.com/';
  var config = {"Content-Type":"application/json", Cache: true};
  return {
    BASE_URL: BASE_URL,
    getList: getList,
    getMissionsByChurchName: getMissionsByChurchName,
    getCountryInfo: getCountryInfo,
    addDoc: addDoc,
    updateDoc: updateDoc,
    deleteDoc: deleteDoc,
    reorder: reorder,
    sendpn: sendpn,
    sendMail: sendMail
  }

  function getList(coll){
    return $http.get(BASE_URL+coll,config).then(function(resp){
      var respData = resp.data;
      return respData;
    },function(error){
      console.log(coll+' ERROR:',error);
    });
  }

  function getMissionsByChurchName(church_name){
    return $http.get('https://ripplemissions.com/wp-json/acf/v3/posts?filter[meta_key]=church_name&filter[meta_value]='+church_name+'&filter[orderby]=post_title&order=asc',config).then(function(resp){
      //var respData = resp.data;
      return resp;
    },function(error){
      console.log(' ERROR:',error);
    });
  }

  function getCountryInfo(countrycode){
    return $http.get('http://joshuaproject.net/api/v2/countries?ROG3='+countrycode+'&api_key='+env.JoshuaProjectApiKey,config).then(function(resp){
      return resp;
    },function(error){
      console.log(' ERROR:',error);
    });
  }

  function addDoc(coll,data){
    return $http.post(BASE_URL+coll+'/add',{"data": data},config).then(function(resp){
      var respData = resp.data;
      return respData;
    },function(error){
      console.log(coll+' ERROR:',error);
    });
  }

  function updateDoc(coll,id,data){
    return $http.put(BASE_URL+coll+'/'+id,{"data": data},config).then(function(resp){
      var respData = resp.data;
      return respData;
    },function(error){
      console.log(coll+' ERROR:',error);
    });
  }

  function deleteDoc(coll,id){
    return $http.delete(BASE_URL+coll+'/'+id,config).then(function(resp){
      var respData = resp.data;
      return respData;
    },function(error){
      console.log(coll+' ERROR:',error);
    });
  }

  function reorder(coll,id,ord){
    return $http.post(BASE_URL+coll+'/'+id+'/reorder',{"data": ord},config).then(function(resp){
      var respData = resp.data;
      return respData;
    },function(error){
      console.log(coll+' ERROR:',error);
    });
  }

  function sendpn(msgOptions){
    return $http.post(BASE_URL+'push/sendpn',{"data": msgOptions},config).then(function(resp){
      var respData = resp.data;
      return respData;
    },function(error){
      console.log(coll+' ERROR:',error);
    });
  }

  function sendMail(data){
    return $http.post(BASE_URL+'sendmail',{data},config).then(function(resp){
      var respData = resp.data;
      return respData;
    },function(error){
      console.log(coll+' ERROR:',error);
    });
  }

}]);

// HOME
angular.module('ripple.home', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope','DataService','$timeout','$localStorage','$sce', function ($scope,DataService,$timeout,$localStorage, $sce) {
  
  // Init: Not set, don't show change link
  // Set prev: Try to set it from localStorage
  // Set now: from search query

  initMap();
  //setChurch();

  function initMap() {
    var input = document.getElementById('church-search');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.setFields(['address_components','name']);
    autocomplete.setTypes(['establishment']);
  }

  $scope.showChurchConfirm = function(){
    if($scope.confirmChurch == null && $scope.churchQuery != null){
      $timeout(function() { 
        $scope.displayChurchQuery = $('#church-search').val();
        $scope.confirmChurch = true;
      }, 500);
    }
  }

  $scope.selectChurch = function(church){
    if(!church){
      $scope.displayChurchQuery = $('#church-search').val();
      $scope.churchQuery = $('#church-search').val();
    }else{
      $scope.displayChurchQuery = church;
      $scope.churchQuery = church;
    }
    $scope.getMissionsByChurch($scope.churchQuery);

  }

  $scope.resetSearch = function(){
    $scope.confirmChurch = null;
    $scope.churchQuery = null;
    $scope.displayChurchQuery = null;
    $('#church-search').focus();
  }

  $scope.getMissionsByChurch = function(churchQuery){
    $scope.confirmChurch = false;
    $scope.loading = true;
    $scope.loadingMessage = "Loading missionaries for your church...";
    $timeout(function() {
      var church_name = encodeURIComponent(churchQuery);
      if(church_name.length > 3){
        DataService.getMissionsByChurchName(church_name).then(function(resp){
          console.log('Missions by Church',resp);
          var respdata = resp.data;
          // parsing
          console.log(respdata);
          angular.forEach(respdata, function(value, key) {
            //console.log(value.acf.bio);
            if(value.acf.bio){
              respdata[key].acf.bio = $sce.trustAsHtml(value.acf.bio);
            }
            if(value.acf.country.slug){
              respdata[key].acf.countryinfo = $scope.getCountryInfo(value.acf.country.slug);
            }
          });
          console.log(respdata);
          $scope.missionsByChurch = respdata;
          $scope.loading = false;
          $scope.storeChurchInfo();
        });
      }
    }, 400);
  }

  $scope.getCountryInfo = function(countrycode){
    DataService.getCountryInfo(countrycode).then(function(resp){
      console.log('Country Info',resp);
      return resp;
    });
  }

  $scope.storeChurchInfo = function(){
    $localStorage.church_name = $scope.displayChurchQuery;
  }

  $scope.changeChurch = function(){
    $scope.resetSearch();
    delete $localStorage.church_name;
    $scope.missionsByChurch = null;
  }

  $scope.getStoredChurch = function(){
    if($localStorage){
      if($localStorage.church_name){
        $scope.churchQuery = $localStorage.church_name;
        $scope.displayChurchQuery = $localStorage.church_name;
        $scope.selectChurch($localStorage.church_name);
      }
    }
  }

  $scope.getStoredChurch();
  
}]);


// ABOUT
//////////////////////////////////////////////////////////
angular.module('ripple.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', { templateUrl: 'about.html', controller: 'AboutCtrl' });
}])

.controller('AboutCtrl', [function() {

}]);

// BUGS
//////////////////////////////////////////////////////////
angular.module('ripple.bugs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bugs', { templateUrl: 'bugs.html', controller: 'BugsCtrl' });
}])

.controller('BugsCtrl', [function() {

}]);



// SETTINGS
//////////////////////////////////////////////////////////
angular.module('ripple.settings', [])

.controller('SettingsCtrl', ['$scope','DataService',function ($scope,DataService) {
  $scope.sendPN = function(){
    var msgOptions = {
      title: 'This is a call',
      content: 'Hey oh, here comes a danger up in this club',
      url: '/announcements'
    }
    DataService.sendpn(msgOptions).then(function(resp){
      console.log(resp);
    });
  }
}]);