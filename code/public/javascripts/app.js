var maths = require("./maths");

$(function(){
  var result = maths.add(1, 2);
  $("#results").text(result);
});
