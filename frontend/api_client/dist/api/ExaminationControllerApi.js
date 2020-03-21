"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ExaminationDTO = _interopRequireDefault(require("../model/ExaminationDTO"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ExaminationController service.
* @module api/ExaminationControllerApi
* @version 1.0
*/
var ExaminationControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ExaminationControllerApi. 
  * @alias module:api/ExaminationControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ExaminationControllerApi(apiClient) {
    _classCallCheck(this, ExaminationControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * Callback function to receive the result of the findExaminationUsingGET operation.
   * @callback module:api/ExaminationControllerApi~findExaminationUsingGETCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ExaminationDTO} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Responds with an examination object
   * @param {Number} id id
   * @param {module:api/ExaminationControllerApi~findExaminationUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ExaminationDTO}
   */


  _createClass(ExaminationControllerApi, [{
    key: "findExaminationUsingGET",
    value: function findExaminationUsingGET(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findExaminationUsingGET");
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
      var returnType = _ExaminationDTO.default;
      return this.apiClient.callApi('/api/examinations/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the findExaminationsUsingGET operation.
     * @callback module:api/ExaminationControllerApi~findExaminationsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExaminationDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Responds with a list of examinations
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.containssymptoms A comma seperated list of symptom ids that should be searched for
     * @param {module:api/ExaminationControllerApi~findExaminationsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExaminationDTO}
     */

  }, {
    key: "findExaminationsUsingGET",
    value: function findExaminationsUsingGET(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'containssymptoms': this.apiClient.buildCollectionParam(opts['containssymptoms'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _ExaminationDTO.default;
      return this.apiClient.callApi('/api/examinations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the saveExaminationUsingPOST operation.
     * @callback module:api/ExaminationControllerApi~saveExaminationUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExaminationDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Saves new Examination object
     * @param {module:model/ExaminationDTO} newExaminationDTO newExaminationDTO
     * @param {module:api/ExaminationControllerApi~saveExaminationUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExaminationDTO}
     */

  }, {
    key: "saveExaminationUsingPOST",
    value: function saveExaminationUsingPOST(newExaminationDTO, callback) {
      var postBody = newExaminationDTO; // verify the required parameter 'newExaminationDTO' is set

      if (newExaminationDTO === undefined || newExaminationDTO === null) {
        throw new Error("Missing the required parameter 'newExaminationDTO' when calling saveExaminationUsingPOST");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = _ExaminationDTO.default;
      return this.apiClient.callApi('/api/examinations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ExaminationControllerApi;
}();

exports.default = ExaminationControllerApi;