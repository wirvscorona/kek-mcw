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
import LocationMatch from '../model/LocationMatch';
import TimelineJsonRoot from '../model/TimelineJsonRoot';

/**
* LocationDataController service.
* @module api/LocationDataControllerApi
* @version 1.0
*/
export default class LocationDataControllerApi {

    /**
    * Constructs a new LocationDataControllerApi. 
    * @alias module:api/LocationDataControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
     * @param {module:api/LocationDataControllerApi~getMatchingLocationsUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/LocationMatch>}
     */
    getMatchingLocationsUsingPOST(jsonData, callback) {
      let postBody = jsonData;
      // verify the required parameter 'jsonData' is set
      if (jsonData === undefined || jsonData === null) {
        throw new Error("Missing the required parameter 'jsonData' when calling getMatchingLocationsUsingPOST");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = [LocationMatch];
      return this.apiClient.callApi(
        '/locations/check', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
     * @param {String} user user
     * @param {module:model/TimelineJsonRoot} jsonData jsonData
     * @param {module:api/LocationDataControllerApi~uploadLocationDataUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    uploadLocationDataUsingPOST(user, jsonData, callback) {
      let postBody = jsonData;
      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling uploadLocationDataUsingPOST");
      }
      // verify the required parameter 'jsonData' is set
      if (jsonData === undefined || jsonData === null) {
        throw new Error("Missing the required parameter 'jsonData' when calling uploadLocationDataUsingPOST");
      }

      let pathParams = {
        'user': user
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/locations/{user}/upload', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
