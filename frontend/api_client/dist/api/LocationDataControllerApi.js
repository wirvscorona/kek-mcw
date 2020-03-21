"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LocationMatch = _interopRequireDefault(require("../model/LocationMatch"));

var _TimelineJsonRoot = _interopRequireDefault(require("../model/TimelineJsonRoot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* LocationDataController service.
* @module api/LocationDataControllerApi
* @version 1.0
*/
var LocationDataControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LocationDataControllerApi. 
  * @alias module:api/LocationDataControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LocationDataControllerApi(apiClient) {
    _classCallCheck(this, LocationDataControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * Callback function to receive the result of the getMatchingLocationsUsingPOST operation.
   * @callback module:api/LocationDataControllerApi~getMatchingLocationsUsingPOSTCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/LocationMatch>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Responds with a list of matched locations
   * @param {module:model/TimelineJsonRoot} jsonData jsonData
   * @param {Object} opts Optional parameters
   * @param {Number} opts.maxDistanceInMeters maxDistanceInMeters (default to 100)
   * @param {Number} opts.virusPersistenceTimeInMillis virusPersistenceTimeInMillis (default to 1800000)
   * @param {module:api/LocationDataControllerApi~getMatchingLocationsUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/LocationMatch>}
   */


  _createClass(LocationDataControllerApi, [{
    key: "getMatchingLocationsUsingPOST",
    value: function getMatchingLocationsUsingPOST(jsonData, opts, callback) {
      opts = opts || {};
      var postBody = jsonData; // verify the required parameter 'jsonData' is set

      if (jsonData === undefined || jsonData === null) {
        throw new Error("Missing the required parameter 'jsonData' when calling getMatchingLocationsUsingPOST");
      }

      var pathParams = {};
      var queryParams = {
        'maxDistanceInMeters': opts['maxDistanceInMeters'],
        'virusPersistenceTimeInMillis': opts['virusPersistenceTimeInMillis']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = [_LocationMatch.default];
      return this.apiClient.callApi('/locations/check', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the uploadLocationDataUsingPOST operation.
     * @callback module:api/LocationDataControllerApi~uploadLocationDataUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Responds with a list of diaries, if parameters are set it will respond with a list of contacts taken between start and finish
     * @param {module:model/TimelineJsonRoot} jsonData jsonData
     * @param {module:api/LocationDataControllerApi~uploadLocationDataUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "uploadLocationDataUsingPOST",
    value: function uploadLocationDataUsingPOST(jsonData, callback) {
      var postBody = jsonData; // verify the required parameter 'jsonData' is set

      if (jsonData === undefined || jsonData === null) {
        throw new Error("Missing the required parameter 'jsonData' when calling uploadLocationDataUsingPOST");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = 'String';
      return this.apiClient.callApi('/locations/upload', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return LocationDataControllerApi;
}();

exports.default = LocationDataControllerApi;