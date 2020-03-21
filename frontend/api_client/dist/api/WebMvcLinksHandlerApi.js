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
* WebMvcLinksHandler service.
* @module api/WebMvcLinksHandlerApi
* @version 1.0
*/
var WebMvcLinksHandlerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WebMvcLinksHandlerApi. 
  * @alias module:api/WebMvcLinksHandlerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WebMvcLinksHandlerApi(apiClient) {
    _classCallCheck(this, WebMvcLinksHandlerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * Callback function to receive the result of the linksUsingGET operation.
   * @callback module:api/WebMvcLinksHandlerApi~linksUsingGETCallback
   * @param {String} error Error message, if any.
   * @param {Object.<String, {String: {String: Link}}>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * links
   * @param {module:api/WebMvcLinksHandlerApi~linksUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object.<String, {String: {String: Link}}>}
   */


  _createClass(WebMvcLinksHandlerApi, [{
    key: "linksUsingGET",
    value: function linksUsingGET(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/vnd.spring-boot.actuator.v3+json', 'application/json', 'application/vnd.spring-boot.actuator.v2+json'];
      var returnType = {
        'String': {
          'String': Link
        }
      };
      return this.apiClient.callApi('/actuator', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WebMvcLinksHandlerApi;
}();

exports.default = WebMvcLinksHandlerApi;