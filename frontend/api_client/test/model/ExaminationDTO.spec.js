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
    instance = new ApiDocumentation.ExaminationDTO();
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

  describe('ExaminationDTO', function() {
    it('should create an instance of ExaminationDTO', function() {
      // uncomment below and update the code to test ExaminationDTO
      //var instane = new ApiDocumentation.ExaminationDTO();
      //expect(instance).to.be.a(ApiDocumentation.ExaminationDTO);
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new ApiDocumentation.ExaminationDTO();
      //expect(instance).to.be();
    });

    it('should have the property dateOfExamination (base name: "dateOfExamination")', function() {
      // uncomment below and update the code to test the property dateOfExamination
      //var instane = new ApiDocumentation.ExaminationDTO();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApiDocumentation.ExaminationDTO();
      //expect(instance).to.be();
    });

    it('should have the property streetname (base name: "streetname")', function() {
      // uncomment below and update the code to test the property streetname
      //var instane = new ApiDocumentation.ExaminationDTO();
      //expect(instance).to.be();
    });

    it('should have the property symptomDescription (base name: "symptomDescription")', function() {
      // uncomment below and update the code to test the property symptomDescription
      //var instane = new ApiDocumentation.ExaminationDTO();
      //expect(instance).to.be();
    });

    it('should have the property symptomsID (base name: "symptomsID")', function() {
      // uncomment below and update the code to test the property symptomsID
      //var instane = new ApiDocumentation.ExaminationDTO();
      //expect(instance).to.be();
    });

    it('should have the property zipCode (base name: "zipCode")', function() {
      // uncomment below and update the code to test the property zipCode
      //var instane = new ApiDocumentation.ExaminationDTO();
      //expect(instance).to.be();
    });

  });

}));
