"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContactEntry = _interopRequireDefault(require("./ContactEntry"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Diary model module.
 * @module model/Diary
 * @version 1.0
 */
var Diary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Diary</code>.
   * All details about a diary. 
   * @alias module:model/Diary
   */
  function Diary() {
    _classCallCheck(this, Diary);

    Diary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Diary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Diary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Diary} obj Optional instance to populate.
     * @return {module:model/Diary} The populated <code>Diary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Diary();

        if (data.hasOwnProperty('contacts')) {
          obj['contacts'] = _ApiClient.default.convertToType(data['contacts'], [_ContactEntry.default]);
        }

        if (data.hasOwnProperty('cured')) {
          obj['cured'] = _ApiClient.default.convertToType(data['cured'], 'Boolean');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient.default.convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _User.default.constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return Diary;
}();
/**
 * @member {Array.<module:model/ContactEntry>} contacts
 */


Diary.prototype['contacts'] = undefined;
/**
 * @member {Boolean} cured
 */

Diary.prototype['cured'] = undefined;
/**
 * @member {Number} id
 */

Diary.prototype['id'] = undefined;
/**
 * @member {module:model/User} user
 */

Diary.prototype['user'] = undefined;
var _default = Diary;
exports.default = _default;