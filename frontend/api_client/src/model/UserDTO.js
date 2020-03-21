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

import ApiClient from '../ApiClient';
import CorrespondenceDetailsDTO from './CorrespondenceDetailsDTO';

/**
 * The UserDTO model module.
 * @module model/UserDTO
 * @version 1.0
 */
class UserDTO {
    /**
     * Constructs a new <code>UserDTO</code>.
     * All details about a User. 
     * @alias module:model/UserDTO
     */
    constructor() { 
        
        UserDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserDTO} obj Optional instance to populate.
     * @return {module:model/UserDTO} The populated <code>UserDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserDTO();

            if (data.hasOwnProperty('correspondenceDetails')) {
                obj['correspondenceDetails'] = ApiClient.convertToType(data['correspondenceDetails'], [CorrespondenceDetailsDTO]);
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CorrespondenceDetailsDTO>} correspondenceDetails
 */
UserDTO.prototype['correspondenceDetails'] = undefined;

/**
 * @member {String} firstName
 */
UserDTO.prototype['firstName'] = undefined;

/**
 * @member {Number} id
 */
UserDTO.prototype['id'] = undefined;

/**
 * @member {String} lastName
 */
UserDTO.prototype['lastName'] = undefined;






export default UserDTO;

