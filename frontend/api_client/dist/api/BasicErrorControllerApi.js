"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* BasicErrorController service.
* @module api/BasicErrorControllerApi
* @version 1.0
*/
var BasicErrorControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BasicErrorControllerApi. 
  * @alias module:api/BasicErrorControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BasicErrorControllerApi(apiClient) {
    _classCallCheck(this, BasicErrorControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * Callback function to receive the result of the errorUsingDELETE operation.
   * @callback module:api/BasicErrorControllerApi~errorUsingDELETECallback
   * @param {String} error Error message, if any.
   * @param {Object.<String, {String: Object}>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * error
   * @param {module:api/BasicErrorControllerApi~errorUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object.<String, {String: Object}>}
   */


  _createClass(BasicErrorControllerApi, [{
    key: "errorUsingDELETE",
    value: function errorUsingDELETE(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = {
        'String': Object
      };
      return this.apiClient.callApi('/error', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the errorUsingGET operation.
     * @callback module:api/BasicErrorControllerApi~errorUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * error
     * @param {module:api/BasicErrorControllerApi~errorUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */

  }, {
    key: "errorUsingGET",
    value: function errorUsingGET(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = {
        'String': Object
      };
      return this.apiClient.callApi('/error', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the errorUsingHEAD operation.
     * @callback module:api/BasicErrorControllerApi~errorUsingHEADCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * error
     * @param {module:api/BasicErrorControllerApi~errorUsingHEADCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */

  }, {
    key: "errorUsingHEAD",
    value: function errorUsingHEAD(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = {
        'String': Object
      };
      return this.apiClient.callApi('/error', 'HEAD', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the errorUsingOPTIONS operation.
     * @callback module:api/BasicErrorControllerApi~errorUsingOPTIONSCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * error
     * @param {module:api/BasicErrorControllerApi~errorUsingOPTIONSCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */

  }, {
    key: "errorUsingOPTIONS",
    value: function errorUsingOPTIONS(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = {
        'String': Object
      };
      return this.apiClient.callApi('/error', 'OPTIONS', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the errorUsingPATCH operation.
     * @callback module:api/BasicErrorControllerApi~errorUsingPATCHCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * error
     * @param {module:api/BasicErrorControllerApi~errorUsingPATCHCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */

  }, {
    key: "errorUsingPATCH",
    value: function errorUsingPATCH(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = {
        'String': Object
      };
      return this.apiClient.callApi('/error', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the errorUsingPOST operation.
     * @callback module:api/BasicErrorControllerApi~errorUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * error
     * @param {module:api/BasicErrorControllerApi~errorUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */

  }, {
    key: "errorUsingPOST",
    value: function errorUsingPOST(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = {
        'String': Object
      };
      return this.apiClient.callApi('/error', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the errorUsingPUT operation.
     * @callback module:api/BasicErrorControllerApi~errorUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * error
     * @param {module:api/BasicErrorControllerApi~errorUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */

  }, {
    key: "errorUsingPUT",
    value: function errorUsingPUT(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = {
        'String': Object
      };
      return this.apiClient.callApi('/error', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return BasicErrorControllerApi;
}();

exports.default = BasicErrorControllerApi;