const chai = require('chai');

const assert = require('chai').assert;
const expect = require('chai').expect;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require('../app');

chai.should()

// Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);

describe('App', function(){
  describe('sayHello()', function(){
    it('sayHello should return hello', function(){
      //let result = app.sayHello();
      assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return type string', function(){
      //let result = app.sayHello();
      // assert.typeOf(sayHelloResult, 'string');
      sayHelloResult.should.be.a('string')
    });
  });

  describe('addNumbers()', function(){
    it('addNumbers should be above 5', function(){
      //let result = app.addNumbers(5,5);
      assert.isAbove(addNumbersResult, 5);
    });

    it('addNumbers should return type number', function(){
      //let result = app.addNumbers(5,5);
      // assert.typeOf(addNumbersResult, 'number');
      expect(addNumbersResult).to.be.a('number')
    });
  });

  describe('Luas()', function () {
    it('harus bernilai 10', function () {
      assert.equal(app.Luas(5, 2), 10)
    })

    it('return harus 1', function () {
      assert.equal(app.Luas(5, 0), 1)
    })
  })

});
