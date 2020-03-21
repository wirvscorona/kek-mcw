"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Examination = _interopRequireDefault(require("./Examination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ContactEntry model module.
 * @module model/ContactEntry
 * @version 1.0
 */
var ContactEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContactEntry</code>.
   * All details about a contact entry.
   * @alias module:model/ContactEntry
   */
  function ContactEntry() {
    _classCallCheck(this, ContactEntry);

    ContactEntry.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContactEntry, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContactEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactEntry} obj Optional instance to populate.
     * @return {module:model/ContactEntry} The populated <code>ContactEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContactEntry();

        if (data.hasOwnProperty('contactWith')) {
          obj['contactWith'] = _ApiClient.default.convertToType(data['contactWith'], 'String');
        }

        if (data.hasOwnProperty('customSymptom')) {
          obj['customSymptom'] = _ApiClient.default.convertToType(data['customSymptom'], 'String');
        }

        if (data.hasOwnProperty('customSymptomPresent')) {
          obj['customSymptomPresent'] = _ApiClient.default.convertToType(data['customSymptomPresent'], 'Boolean');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient.default.convertToType(data['date'], 'Date');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient.default.convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('examination')) {
          obj['examination'] = _Examination.default.constructFromObject(data['examination']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient.default.convertToType(data['id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ContactEntry;
}();
/**
 * @member {String} contactWith
 */


ContactEntry.prototype['contactWith'] = undefined;
/**
 * @member {String} customSymptom
 */

ContactEntry.prototype['customSymptom'] = undefined;
/**
 * @member {Boolean} customSymptomPresent
 */

ContactEntry.prototype['customSymptomPresent'] = undefined;
/**
 * @member {Date} date
 */

ContactEntry.prototype['date'] = undefined;
/**
 * @member {String} description
 */

ContactEntry.prototype['description'] = undefined;
/**
 * @member {module:model/Examination} examination
 */

ContactEntry.prototype['examination'] = undefined;
/**
 * @member {Number} id
 */

ContactEntry.prototype['id'] = undefined;
var _default = ContactEntry;
exports.default = _default;