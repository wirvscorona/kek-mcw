/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiDocumentation);
  }
}(this, function(expect, ApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApiDocumentation.BasicErrorControllerApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BasicErrorControllerApi', function() {
    describe('errorUsingDELETE', function() {
      it('should call errorUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test errorUsingDELETE
        //instance.errorUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('errorUsingGET', function() {
      it('should call errorUsingGET successfully', function(done) {
        //uncomment below and update the code to test errorUsingGET
        //instance.errorUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('errorUsingHEAD', function() {
      it('should call errorUsingHEAD successfully', function(done) {
        //uncomment below and update the code to test errorUsingHEAD
        //instance.errorUsingHEAD(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('errorUsingOPTIONS', function() {
      it('should call errorUsingOPTIONS successfully', function(done) {
        //uncomment below and update the code to test errorUsingOPTIONS
        //instance.errorUsingOPTIONS(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('errorUsingPATCH', function() {
      it('should call errorUsingPATCH successfully', function(done) {
        //uncomment below and update the code to test errorUsingPATCH
        //instance.errorUsingPATCH(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('errorUsingPOST', function() {
      it('should call errorUsingPOST successfully', function(done) {
        //uncomment below and update the code to test errorUsingPOST
        //instance.errorUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('errorUsingPUT', function() {
      it('should call errorUsingPUT successfully', function(done) {
        //uncomment below and update the code to test errorUsingPUT
        //instance.errorUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
