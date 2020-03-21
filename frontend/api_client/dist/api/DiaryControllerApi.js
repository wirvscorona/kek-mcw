"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateDiaryDTO = _interopRequireDefault(require("../model/CreateDiaryDTO"));

var _Diary = _interopRequireDefault(require("../model/Diary"));

var _User = _interopRequireDefault(require("../model/User"));

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
     * Callback function to receive the result of the findUserUsingGET operation.
     * @callback module:api/DiaryControllerApi~findUserUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Responds with a diary object
     * @param {Number} id id
     * @param {module:api/DiaryControllerApi~findUserUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
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
      var returnType = _User.default;
      return this.apiClient.callApi('/api/diaries/user/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the newDiaryUsingPOST operation.
     * @callback module:api/DiaryControllerApi~newDiaryUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Diary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Saves new diary object
     * @param {module:model/CreateDiaryDTO} createDiaryDTO createDiaryDTO
     * @param {module:api/DiaryControllerApi~newDiaryUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Diary}
     */

  }, {
    key: "newDiaryUsingPOST",
    value: function newDiaryUsingPOST(createDiaryDTO, callback) {
      var postBody = createDiaryDTO; // verify the required parameter 'createDiaryDTO' is set

      if (createDiaryDTO === undefined || createDiaryDTO === null) {
        throw new Error("Missing the required parameter 'createDiaryDTO' when calling newDiaryUsingPOST");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = _Diary.default;
      return this.apiClient.callApi('/api/diaries/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the replaceDiaryUsingPUT operation.
     * @callback module:api/DiaryControllerApi~replaceDiaryUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Diary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a diary object
     * @param {Number} id id
     * @param {module:model/Diary} newDiary newDiary
     * @param {module:api/DiaryControllerApi~replaceDiaryUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Diary}
     */

  }, {
    key: "replaceDiaryUsingPUT",
    value: function replaceDiaryUsingPUT(id, newDiary, callback) {
      var postBody = newDiary; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling replaceDiaryUsingPUT");
      } // verify the required parameter 'newDiary' is set


      if (newDiary === undefined || newDiary === null) {
        throw new Error("Missing the required parameter 'newDiary' when calling replaceDiaryUsingPUT");
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