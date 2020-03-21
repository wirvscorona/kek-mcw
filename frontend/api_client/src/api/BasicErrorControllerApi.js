/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ModelAndView from '../model/ModelAndView';

/**
* BasicErrorController service.
* @module api/BasicErrorControllerApi
* @version 1.0
*/
export default class BasicErrorControllerApi {

    /**
    * Constructs a new BasicErrorControllerApi. 
    * @alias module:api/BasicErrorControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    errorHtmlUsingDELETE(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/html'];
      let returnType = ModelAndView;
      return this.apiClient.callApi(
        '/error', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    errorHtmlUsingGET(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/html'];
      let returnType = ModelAndView;
      return this.apiClient.callApi(
        '/error', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    errorHtmlUsingHEAD(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/html'];
      let returnType = ModelAndView;
      return this.apiClient.callApi(
        '/error', 'HEAD',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    errorHtmlUsingOPTIONS(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/html'];
      let returnType = ModelAndView;
      return this.apiClient.callApi(
        '/error', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    errorHtmlUsingPATCH(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/html'];
      let returnType = ModelAndView;
      return this.apiClient.callApi(
        '/error', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    errorHtmlUsingPOST(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/html'];
      let returnType = ModelAndView;
      return this.apiClient.callApi(
        '/error', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    errorHtmlUsingPUT(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/html'];
      let returnType = ModelAndView;
      return this.apiClient.callApi(
        '/error', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
