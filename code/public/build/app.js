(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var maths = require("./maths");

$(function(){
  var result = maths.add(1, 2);
  $("#results").text(result);
});

},{"./maths":2}],2:[function(require,module,exports){
var Maths = {

  add: function(a, b){
    return a + b;
  }

};

module.exports = Maths;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvZGVyaWNrYmFpbGV5L2Rldi9zY3JlZW5jYXN0cy93b3JrZmxvdy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2Rlcmlja2JhaWxleS9kZXYvc2NyZWVuY2FzdHMvd29ya2Zsb3cvcHVibGljL2phdmFzY3JpcHRzL2FwcC5qcyIsIi9Vc2Vycy9kZXJpY2tiYWlsZXkvZGV2L3NjcmVlbmNhc3RzL3dvcmtmbG93L3B1YmxpYy9qYXZhc2NyaXB0cy9tYXRocy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgbWF0aHMgPSByZXF1aXJlKFwiLi9tYXRoc1wiKTtcblxuJChmdW5jdGlvbigpe1xuICB2YXIgcmVzdWx0ID0gbWF0aHMuYWRkKDEsIDIpO1xuICAkKFwiI3Jlc3VsdHNcIikudGV4dChyZXN1bHQpO1xufSk7XG4iLCJ2YXIgTWF0aHMgPSB7XG5cbiAgYWRkOiBmdW5jdGlvbihhLCBiKXtcbiAgICByZXR1cm4gYSArIGI7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXRocztcbiJdfQ==
