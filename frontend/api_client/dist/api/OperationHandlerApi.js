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
* OperationHandler service.
* @module api/OperationHandlerApi
* @version 1.0
*/
var OperationHandlerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new OperationHandlerApi. 
  * @alias module:api/OperationHandlerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OperationHandlerApi(apiClient) {
    _classCallCheck(this, OperationHandlerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * Callback function to receive the result of the handleUsingGET operation.
   * @callback module:api/OperationHandlerApi~handleUsingGETCallback
   * @param {String} error Error message, if any.
   * @param {Object} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * handle
   * @param {Object} opts Optional parameters
   * @param {Object.<String, {String: String}>} opts.body body
   * @param {module:api/OperationHandlerApi~handleUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object}
   */


  _createClass(OperationHandlerApi, [{
    key: "handleUsingGET",
    value: function handleUsingGET(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/vnd.spring-boot.actuator.v3+json', 'application/json', 'application/vnd.spring-boot.actuator.v2+json'];
      var returnType = Object;
      return this.apiClient.callApi('/actuator/health/**', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the handleUsingGET1 operation.
     * @callback module:api/OperationHandlerApi~handleUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * handle
     * @param {Object} opts Optional parameters
     * @param {Object.<String, {String: String}>} opts.body body
     * @param {module:api/OperationHandlerApi~handleUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "handleUsingGET1",
    value: function handleUsingGET1(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/vnd.spring-boot.actuator.v3+json', 'application/json', 'application/vnd.spring-boot.actuator.v2+json'];
      var returnType = Object;
      return this.apiClient.callApi('/actuator/health', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the handleUsingGET2 operation.
     * @callback module:api/OperationHandlerApi~handleUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * handle
     * @param {Object} opts Optional parameters
     * @param {Object.<String, {String: String}>} opts.body body
     * @param {module:api/OperationHandlerApi~handleUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "handleUsingGET2",
    value: function handleUsingGET2(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/vnd.spring-boot.actuator.v3+json', 'application/json', 'application/vnd.spring-boot.actuator.v2+json'];
      var returnType = Object;
      return this.apiClient.callApi('/actuator/info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return OperationHandlerApi;
}();

exports.default = OperationHandlerApi;