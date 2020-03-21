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

/**
 * The CorrespondenceDetails model module.
 * @module model/CorrespondenceDetails
 * @version 1.0
 */
class CorrespondenceDetails {
    /**
     * Constructs a new <code>CorrespondenceDetails</code>.
     * @alias module:model/CorrespondenceDetails
     */
    constructor() { 
        
        CorrespondenceDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CorrespondenceDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CorrespondenceDetails} obj Optional instance to populate.
     * @return {module:model/CorrespondenceDetails} The populated <code>CorrespondenceDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CorrespondenceDetails();

            if (data.hasOwnProperty('contactMethodType')) {
                obj['contactMethodType'] = ApiClient.convertToType(data['contactMethodType'], 'String');
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CorrespondenceDetails.ContactMethodTypeEnum} contactMethodType
 */
CorrespondenceDetails.prototype['contactMethodType'] = undefined;

/**
 * @member {String} detail
 */
CorrespondenceDetails.prototype['detail'] = undefined;





/**
 * Allowed values for the <code>contactMethodType</code> property.
 * @enum {String}
 * @readonly
 */
CorrespondenceDetails['ContactMethodTypeEnum'] = {

    /**
     * value: "HOME"
     * @const
     */
    "HOME": "HOME",

    /**
     * value: "MOBILE"
     * @const
     */
    "MOBILE": "MOBILE",

    /**
     * value: "EMAIL"
     * @const
     */
    "EMAIL": "EMAIL"
};



export default CorrespondenceDetails;
