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
import ContactEntryDTO from './ContactEntryDTO';

/**
 * The CreateDiaryDTO model module.
 * @module model/CreateDiaryDTO
 * @version 1.0
 */
class CreateDiaryDTO {
    /**
     * Constructs a new <code>CreateDiaryDTO</code>.
     * @alias module:model/CreateDiaryDTO
     */
    constructor() { 
        
        CreateDiaryDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateDiaryDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateDiaryDTO} obj Optional instance to populate.
     * @return {module:model/CreateDiaryDTO} The populated <code>CreateDiaryDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateDiaryDTO();

            if (data.hasOwnProperty('contacts')) {
                obj['contacts'] = ApiClient.convertToType(data['contacts'], [ContactEntryDTO]);
            }
            if (data.hasOwnProperty('cured')) {
                obj['cured'] = ApiClient.convertToType(data['cured'], 'Boolean');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ContactEntryDTO>} contacts
 */
CreateDiaryDTO.prototype['contacts'] = undefined;

/**
 * @member {Boolean} cured
 */
CreateDiaryDTO.prototype['cured'] = undefined;

/**
 * @member {Number} userId
 */
CreateDiaryDTO.prototype['userId'] = undefined;






export default CreateDiaryDTO;

