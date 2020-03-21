"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _User = _interopRequireDefault(require("../model/User"));

var _UserDTO = _interopRequireDefault(require("../model/UserDTO"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* UserController service.
* @module api/UserControllerApi
* @version 1.0
*/
var UserControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserControllerApi. 
  * @alias module:api/UserControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UserControllerApi(apiClient) {
    _classCallCheck(this, UserControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * Callback function to receive the result of the deleteUserUsingDELETE operation.
   * @callback module:api/UserControllerApi~deleteUserUsingDELETECallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Deletes user object
   * @param {Number} id id
   * @param {module:api/UserControllerApi~deleteUserUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(UserControllerApi, [{
    key: "deleteUserUsingDELETE",
    value: function deleteUserUsingDELETE(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUserUsingDELETE");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/api/users/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the findUserUsingGET1 operation.
     * @callback module:api/UserControllerApi~findUserUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Responds with a user object
     * @param {Number} id id
     * @param {module:api/UserControllerApi~findUserUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserDTO}
     */

  }, {
    key: "findUserUsingGET1",
    value: function findUserUsingGET1(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findUserUsingGET1");
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
      var returnType = _UserDTO.default;
      return this.apiClient.callApi('/api/users/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the findUsersUsingGET operation.
     * @callback module:api/UserControllerApi~findUsersUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Responds with a list of users
     * @param {module:api/UserControllerApi~findUsersUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "findUsersUsingGET",
    value: function findUsersUsingGET(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _User.default;
      return this.apiClient.callApi('/api/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the saveUserUsingPOST operation.
     * @callback module:api/UserControllerApi~saveUserUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Saves new User object
     * @param {module:model/UserDTO} newUserDTO newUserDTO
     * @param {module:api/UserControllerApi~saveUserUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserDTO}
     */

  }, {
    key: "saveUserUsingPOST",
    value: function saveUserUsingPOST(newUserDTO, callback) {
      var postBody = newUserDTO; // verify the required parameter 'newUserDTO' is set

      if (newUserDTO === undefined || newUserDTO === null) {
        throw new Error("Missing the required parameter 'newUserDTO' when calling saveUserUsingPOST");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = _UserDTO.default;
      return this.apiClient.callApi('/api/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateUserUsingPUT operation.
     * @callback module:api/UserControllerApi~updateUserUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a user object
     * @param {Number} id id
     * @param {module:model/UserDTO} updatedUserDTO updatedUserDTO
     * @param {module:api/UserControllerApi~updateUserUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserDTO}
     */

  }, {
    key: "updateUserUsingPUT",
    value: function updateUserUsingPUT(id, updatedUserDTO, callback) {
      var postBody = updatedUserDTO; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateUserUsingPUT");
      } // verify the required parameter 'updatedUserDTO' is set


      if (updatedUserDTO === undefined || updatedUserDTO === null) {
        throw new Error("Missing the required parameter 'updatedUserDTO' when calling updateUserUsingPUT");
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
      var returnType = _UserDTO.default;
      return this.apiClient.callApi('/api/users/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UserControllerApi;
}();

exports.default = UserControllerApi;