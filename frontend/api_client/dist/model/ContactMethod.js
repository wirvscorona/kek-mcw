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
 * The ContactMethod model module.
 * @module model/ContactMethod
 * @version 1.0
 */
var ContactMethod = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContactMethod</code>.
   * @alias module:model/ContactMethod
   */
  function ContactMethod() {
    _classCallCheck(this, ContactMethod);

    ContactMethod.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContactMethod, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContactMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactMethod} obj Optional instance to populate.
     * @return {module:model/ContactMethod} The populated <code>ContactMethod</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContactMethod();

        if (data.hasOwnProperty('contactMethodType')) {
          obj['contactMethodType'] = _ApiClient.default.convertToType(data['contactMethodType'], 'String');
        }

        if (data.hasOwnProperty('detail')) {
          obj['detail'] = _ApiClient.default.convertToType(data['detail'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient.default.convertToType(data['id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ContactMethod;
}();
/**
 * @member {module:model/ContactMethod.ContactMethodTypeEnum} contactMethodType
 */


ContactMethod.prototype['contactMethodType'] = undefined;
/**
 * @member {String} detail
 */

ContactMethod.prototype['detail'] = undefined;
/**
 * @member {Number} id
 */

ContactMethod.prototype['id'] = undefined;
/**
 * Allowed values for the <code>contactMethodType</code> property.
 * @enum {String}
 * @readonly
 */

ContactMethod['ContactMethodTypeEnum'] = {
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
var _default = ContactMethod;
exports.default = _default;