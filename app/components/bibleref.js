'use strict';
/* global angular */
angular.module('bibleref', ['ngRoute'])

.directive('bibleref', function() {
   function link(scope, element, attrs) {
        console.log('el',element);
        console.log('attrs',attrs);
        
        // https://www.biblegateway.com/passage/?search=2+Cor+9%3A7
        element.innerHTML = '<a class="bibleref" href="https://www.biblegateway.com/passage/?search='+escape(element.innerHTML)+'&version=NKJV">'+element.innerHTML+'</a>';
        
   }
  
  return {
    link: link
  };
});