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
 * The CorrespondenceDetailsDTO model module.
 * @module model/CorrespondenceDetailsDTO
 * @version 1.0
 */
var CorrespondenceDetailsDTO = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CorrespondenceDetailsDTO</code>.
   * @alias module:model/CorrespondenceDetailsDTO
   */
  function CorrespondenceDetailsDTO() {
    _classCallCheck(this, CorrespondenceDetailsDTO);

    CorrespondenceDetailsDTO.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CorrespondenceDetailsDTO, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CorrespondenceDetailsDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CorrespondenceDetailsDTO} obj Optional instance to populate.
     * @return {module:model/CorrespondenceDetailsDTO} The populated <code>CorrespondenceDetailsDTO</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CorrespondenceDetailsDTO();

        if (data.hasOwnProperty('contactMethodType')) {
          obj['contactMethodType'] = _ApiClient.default.convertToType(data['contactMethodType'], 'String');
        }

        if (data.hasOwnProperty('detail')) {
          obj['detail'] = _ApiClient.default.convertToType(data['detail'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CorrespondenceDetailsDTO;
}();
/**
 * @member {module:model/CorrespondenceDetailsDTO.ContactMethodTypeEnum} contactMethodType
 */


CorrespondenceDetailsDTO.prototype['contactMethodType'] = undefined;
/**
 * @member {String} detail
 */

CorrespondenceDetailsDTO.prototype['detail'] = undefined;
/**
 * Allowed values for the <code>contactMethodType</code> property.
 * @enum {String}
 * @readonly
 */

CorrespondenceDetailsDTO['ContactMethodTypeEnum'] = {
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
var _default = CorrespondenceDetailsDTO;
exports.default = _default;