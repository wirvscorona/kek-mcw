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
 * The Examination model module.
 * @module model/Examination
 * @version 1.0
 */
var Examination = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Examination</code>.
   * All details about an examination.
   * @alias module:model/Examination
   */
  function Examination() {
    _classCallCheck(this, Examination);

    Examination.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Examination, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Examination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Examination} obj Optional instance to populate.
     * @return {module:model/Examination} The populated <code>Examination</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Examination();

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient.default.convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('dateOfExamination')) {
          obj['dateOfExamination'] = _ApiClient.default.convertToType(data['dateOfExamination'], 'Date');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient.default.convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('streetname')) {
          obj['streetname'] = _ApiClient.default.convertToType(data['streetname'], 'String');
        }

        if (data.hasOwnProperty('symptomDescription')) {
          obj['symptomDescription'] = _ApiClient.default.convertToType(data['symptomDescription'], ['String']);
        }

        if (data.hasOwnProperty('symptomsID')) {
          obj['symptomsID'] = _ApiClient.default.convertToType(data['symptomsID'], ['Number']);
        }

        if (data.hasOwnProperty('zipCode')) {
          obj['zipCode'] = _ApiClient.default.convertToType(data['zipCode'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Examination;
}();
/**
 * @member {String} city
 */


Examination.prototype['city'] = undefined;
/**
 * @member {Date} dateOfExamination
 */

Examination.prototype['dateOfExamination'] = undefined;
/**
 * @member {Number} id
 */

Examination.prototype['id'] = undefined;
/**
 * @member {String} streetname
 */

Examination.prototype['streetname'] = undefined;
/**
 * @member {Array.<String>} symptomDescription
 */

Examination.prototype['symptomDescription'] = undefined;
/**
 * @member {Array.<Number>} symptomsID
 */

Examination.prototype['symptomsID'] = undefined;
/**
 * @member {String} zipCode
 */

Examination.prototype['zipCode'] = undefined;
var _default = Examination;
exports.default = _default;