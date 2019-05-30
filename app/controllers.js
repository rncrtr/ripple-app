'use strict';

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
    return $http.get('https://ripplemissions.com/wp-json/acf/v3/posts?filter[meta_key]=church_name&filter[meta_value]='+church_name,config).then(function(resp){
      //var respData = resp.data;
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

.controller('HomeCtrl', ['$scope','DataService','$timeout','$localStorage', function ($scope,DataService,$timeout,$localStorage) {
  
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
          $scope.missionsByChurch = resp.data;
          $scope.loading = false;
          $scope.storeChurchInfo();
        });
      }
    }, 400);
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