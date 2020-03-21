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
 * The SymptomDTO model module.
 * @module model/SymptomDTO
 * @version 1.0
 */
var SymptomDTO = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SymptomDTO</code>.
   * All details about a symptom.
   * @alias module:model/SymptomDTO
   */
  function SymptomDTO() {
    _classCallCheck(this, SymptomDTO);

    SymptomDTO.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SymptomDTO, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SymptomDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SymptomDTO} obj Optional instance to populate.
     * @return {module:model/SymptomDTO} The populated <code>SymptomDTO</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SymptomDTO();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient.default.convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient.default.convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('symptomType')) {
          obj['symptomType'] = _ApiClient.default.convertToType(data['symptomType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SymptomDTO;
}();
/**
 * @member {Number} id
 */


SymptomDTO.prototype['id'] = undefined;
/**
 * @member {String} name
 */

SymptomDTO.prototype['name'] = undefined;
/**
 * @member {module:model/SymptomDTO.SymptomTypeEnum} symptomType
 */

SymptomDTO.prototype['symptomType'] = undefined;
/**
 * Allowed values for the <code>symptomType</code> property.
 * @enum {String}
 * @readonly
 */

SymptomDTO['SymptomTypeEnum'] = {
  /**
   * value: "NUMERICAL"
   * @const
   */
  "NUMERICAL": "NUMERICAL",

  /**
   * value: "STRING"
   * @const
   */
  "STRING": "STRING"
};
var _default = SymptomDTO;
exports.default = _default;