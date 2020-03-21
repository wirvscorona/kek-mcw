"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CorrespondenceDetailsDTO = _interopRequireDefault(require("./CorrespondenceDetailsDTO"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UserDTO model module.
 * @module model/UserDTO
 * @version 1.0
 */
var UserDTO = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserDTO</code>.
   * All details about a User. 
   * @alias module:model/UserDTO
   */
  function UserDTO() {
    _classCallCheck(this, UserDTO);

    UserDTO.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserDTO, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserDTO} obj Optional instance to populate.
     * @return {module:model/UserDTO} The populated <code>UserDTO</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserDTO();

        if (data.hasOwnProperty('correspondenceDetails')) {
          obj['correspondenceDetails'] = _ApiClient.default.convertToType(data['correspondenceDetails'], [_CorrespondenceDetailsDTO.default]);
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

  return UserDTO;
}();
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
var _default = UserDTO;
exports.default = _default;