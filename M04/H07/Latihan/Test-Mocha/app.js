module.exports = {
    sayHello: function(){
      return 'hello';
    },
    addNumbers: function(value1, value2){
      return value1 + value2;
    },
    Luas: function(value1, value2){
      if(value1 == 0 || value2 == 0) return 1
      return value1 * value2;
    }
  }
  