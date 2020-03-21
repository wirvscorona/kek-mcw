"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CorrespondenceDetails = _interopRequireDefault(require("./CorrespondenceDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The User model module.
 * @module model/User
 * @version 1.0
 */
var User = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>User</code>.
   * All details about a User. 
   * @alias module:model/User
   */
  function User() {
    _classCallCheck(this, User);

    User.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(User, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new User();

        if (data.hasOwnProperty('correspondenceDetails')) {
          obj['correspondenceDetails'] = _ApiClient.default.convertToType(data['correspondenceDetails'], [_CorrespondenceDetails.default]);
        }

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient.default.convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient.default.convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient.default.convertToType(data['lastName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return User;
}();
/**
 * @member {Array.<module:model/CorrespondenceDetails>} correspondenceDetails
 */


User.prototype['correspondenceDetails'] = undefined;
/**
 * @member {String} firstName
 */

User.prototype['firstName'] = undefined;
/**
 * @member {Number} id
 */

User.prototype['id'] = undefined;
/**
 * @member {String} lastName
 */

User.prototype['lastName'] = undefined;
var _default = User;
exports.default = _default;