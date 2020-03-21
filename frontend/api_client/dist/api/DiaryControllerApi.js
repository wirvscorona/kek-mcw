"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Diary = _interopRequireDefault(require("../model/Diary"));

var _DiaryDTO = _interopRequireDefault(require("../model/DiaryDTO"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* DiaryController service.
* @module api/DiaryControllerApi
* @version 1.0
*/
var DiaryControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DiaryControllerApi. 
  * @alias module:api/DiaryControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DiaryControllerApi(apiClient) {
    _classCallCheck(this, DiaryControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * Callback function to receive the result of the deleteDiaryUsingDELETE operation.
   * @callback module:api/DiaryControllerApi~deleteDiaryUsingDELETECallback
   * @param {String} error Error message, if any.
   * @param {module:model/Diary} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Deletes diary object
   * @param {Number} id id
   * @param {module:api/DiaryControllerApi~deleteDiaryUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Diary}
   */


  _createClass(DiaryControllerApi, [{
    key: "deleteDiaryUsingDELETE",
    value: function deleteDiaryUsingDELETE(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDiaryUsingDELETE");
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
      var returnType = _Diary.default;
      return this.apiClient.callApi('/api/diaries/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the findDiariesUsingGET operation.
     * @callback module:api/DiaryControllerApi~findDiariesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Diary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Responds with a list of diaries
     * @param {module:api/DiaryControllerApi~findDiariesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Diary}
     */

  }, {
    key: "findDiariesUsingGET",
    value: function findDiariesUsingGET(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _Diary.default;
      return this.apiClient.callApi('/api/diaries', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the findDiaryUsingGET operation.
     * @callback module:api/DiaryControllerApi~findDiaryUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Diary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Responds with a diary object
     * @param {Number} id id
     * @param {module:api/DiaryControllerApi~findDiaryUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Diary}
     */

  }, {
    key: "findDiaryUsingGET",
    value: function findDiaryUsingGET(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findDiaryUsingGET");
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
      var returnType = _Diary.default;
      return this.apiClient.callApi('/api/diaries/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the saveDiaryUsingPOST operation.
     * @callback module:api/DiaryControllerApi~saveDiaryUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Diary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Saves new diary object
     * @param {module:model/DiaryDTO} diaryDTO diaryDTO
     * @param {module:api/DiaryControllerApi~saveDiaryUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Diary}
     */

  }, {
    key: "saveDiaryUsingPOST",
    value: function saveDiaryUsingPOST(diaryDTO, callback) {
      var postBody = diaryDTO; // verify the required parameter 'diaryDTO' is set

      if (diaryDTO === undefined || diaryDTO === null) {
        throw new Error("Missing the required parameter 'diaryDTO' when calling saveDiaryUsingPOST");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = _Diary.default;
      return this.apiClient.callApi('/api/diaries/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateDiaryUsingPUT operation.
     * @callback module:api/DiaryControllerApi~updateDiaryUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Diary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a diary object
     * @param {Number} id id
     * @param {module:model/DiaryDTO} diaryDTO diaryDTO
     * @param {module:api/DiaryControllerApi~updateDiaryUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Diary}
     */

  }, {
    key: "updateDiaryUsingPUT",
    value: function updateDiaryUsingPUT(id, diaryDTO, callback) {
      var postBody = diaryDTO; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateDiaryUsingPUT");
      } // verify the required parameter 'diaryDTO' is set


      if (diaryDTO === undefined || diaryDTO === null) {
        throw new Error("Missing the required parameter 'diaryDTO' when calling updateDiaryUsingPUT");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = _Diary.default;
      return this.apiClient.callApi('/api/diaries/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DiaryControllerApi;
}();

exports.default = DiaryControllerApi;