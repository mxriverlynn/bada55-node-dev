var MyMath = require("../lib/my-math");

describe("adding numbers", function(){
  var result;

  beforeEach(function(){
    result = MyMath.add(1, 1);
  });

  it("should add correctly", function(){
    expect(result).toBe(2);
  });
  
});
