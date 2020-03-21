"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelAndView = _interopRequireDefault(require("../model/ModelAndView"));

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
   * Callback function to receive the result of the errorHtmlUsingDELETE operation.
   * @callback module:api/BasicErrorControllerApi~errorHtmlUsingDELETECallback
   * @param {String} error Error message, if any.
   * @param {module:model/ModelAndView} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * errorHtml
   * @param {module:api/BasicErrorControllerApi~errorHtmlUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ModelAndView}
   */


  _createClass(BasicErrorControllerApi, [{
    key: "errorHtmlUsingDELETE",
    value: function errorHtmlUsingDELETE(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/html'];
      var returnType = _ModelAndView.default;
      return this.apiClient.callApi('/error', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the errorHtmlUsingGET operation.
     * @callback module:api/BasicErrorControllerApi~errorHtmlUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelAndView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * errorHtml
     * @param {module:api/BasicErrorControllerApi~errorHtmlUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelAndView}
     */

  }, {
    key: "errorHtmlUsingGET",
    value: function errorHtmlUsingGET(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/html'];
      var returnType = _ModelAndView.default;
      return this.apiClient.callApi('/error', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the errorHtmlUsingHEAD operation.
     * @callback module:api/BasicErrorControllerApi~errorHtmlUsingHEADCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelAndView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * errorHtml
     * @param {module:api/BasicErrorControllerApi~errorHtmlUsingHEADCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelAndView}
     */

  }, {
    key: "errorHtmlUsingHEAD",
    value: function errorHtmlUsingHEAD(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/html'];
      var returnType = _ModelAndView.default;
      return this.apiClient.callApi('/error', 'HEAD', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the errorHtmlUsingOPTIONS operation.
     * @callback module:api/BasicErrorControllerApi~errorHtmlUsingOPTIONSCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelAndView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * errorHtml
     * @param {module:api/BasicErrorControllerApi~errorHtmlUsingOPTIONSCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelAndView}
     */

  }, {
    key: "errorHtmlUsingOPTIONS",
    value: function errorHtmlUsingOPTIONS(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/html'];
      var returnType = _ModelAndView.default;
      return this.apiClient.callApi('/error', 'OPTIONS', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the errorHtmlUsingPATCH operation.
     * @callback module:api/BasicErrorControllerApi~errorHtmlUsingPATCHCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelAndView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * errorHtml
     * @param {module:api/BasicErrorControllerApi~errorHtmlUsingPATCHCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelAndView}
     */

  }, {
    key: "errorHtmlUsingPATCH",
    value: function errorHtmlUsingPATCH(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/html'];
      var returnType = _ModelAndView.default;
      return this.apiClient.callApi('/error', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the errorHtmlUsingPOST operation.
     * @callback module:api/BasicErrorControllerApi~errorHtmlUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelAndView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * errorHtml
     * @param {module:api/BasicErrorControllerApi~errorHtmlUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelAndView}
     */

  }, {
    key: "errorHtmlUsingPOST",
    value: function errorHtmlUsingPOST(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/html'];
      var returnType = _ModelAndView.default;
      return this.apiClient.callApi('/error', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the errorHtmlUsingPUT operation.
     * @callback module:api/BasicErrorControllerApi~errorHtmlUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelAndView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * errorHtml
     * @param {module:api/BasicErrorControllerApi~errorHtmlUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelAndView}
     */

  }, {
    key: "errorHtmlUsingPUT",
    value: function errorHtmlUsingPUT(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/html'];
      var returnType = _ModelAndView.default;
      return this.apiClient.callApi('/error', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return BasicErrorControllerApi;
}();

exports.default = BasicErrorControllerApi;