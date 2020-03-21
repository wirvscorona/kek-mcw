"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SymptomDTO = _interopRequireDefault(require("../model/SymptomDTO"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* SymptomController service.
* @module api/SymptomControllerApi
* @version 1.0
*/
var SymptomControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SymptomControllerApi. 
  * @alias module:api/SymptomControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SymptomControllerApi(apiClient) {
    _classCallCheck(this, SymptomControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * Callback function to receive the result of the findSymptomsUsingGET operation.
   * @callback module:api/SymptomControllerApi~findSymptomsUsingGETCallback
   * @param {String} error Error message, if any.
   * @param {module:model/SymptomDTO} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Responds with a list of symptoms
   * @param {Object} opts Optional parameters
   * @param {String} opts.search The name of the symptom (or part of it) that should be searched
   * @param {module:api/SymptomControllerApi~findSymptomsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/SymptomDTO}
   */


  _createClass(SymptomControllerApi, [{
    key: "findSymptomsUsingGET",
    value: function findSymptomsUsingGET(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'search': opts['search']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _SymptomDTO.default;
      return this.apiClient.callApi('/api/symptoms', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the findUserUsingGET operation.
     * @callback module:api/SymptomControllerApi~findUserUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SymptomDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Responds with a symptom object
     * @param {Number} id id
     * @param {module:api/SymptomControllerApi~findUserUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SymptomDTO}
     */

  }, {
    key: "findUserUsingGET",
    value: function findUserUsingGET(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findUserUsingGET");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _SymptomDTO.default;
      return this.apiClient.callApi('/api/symptoms/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the saveSymptomUsingPOST operation.
     * @callback module:api/SymptomControllerApi~saveSymptomUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SymptomDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Saves new Symptom object
     * @param {module:model/SymptomDTO} newSymptomDTO newSymptomDTO
     * @param {module:api/SymptomControllerApi~saveSymptomUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SymptomDTO}
     */

  }, {
    key: "saveSymptomUsingPOST",
    value: function saveSymptomUsingPOST(newSymptomDTO, callback) {
      var postBody = newSymptomDTO; // verify the required parameter 'newSymptomDTO' is set

      if (newSymptomDTO === undefined || newSymptomDTO === null) {
        throw new Error("Missing the required parameter 'newSymptomDTO' when calling saveSymptomUsingPOST");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = _SymptomDTO.default;
      return this.apiClient.callApi('/api/symptoms', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SymptomControllerApi;
}();

exports.default = SymptomControllerApi;