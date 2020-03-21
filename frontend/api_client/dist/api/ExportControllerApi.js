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
* ExportController service.
* @module api/ExportControllerApi
* @version 1.0
*/
var ExportControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ExportControllerApi. 
  * @alias module:api/ExportControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ExportControllerApi(apiClient) {
    _classCallCheck(this, ExportControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * Callback function to receive the result of the exportExaminationFeaturesUsingGET operation.
   * @callback module:api/ExportControllerApi~exportExaminationFeaturesUsingGETCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Responds with a list of diaries
   * @param {module:api/ExportControllerApi~exportExaminationFeaturesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ExportControllerApi, [{
    key: "exportExaminationFeaturesUsingGET",
    value: function exportExaminationFeaturesUsingGET(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/api/export/examination_feature_set.csv', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ExportControllerApi;
}();

exports.default = ExportControllerApi;