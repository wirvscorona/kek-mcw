"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContactEntryDTO = _interopRequireDefault(require("./ContactEntryDTO"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateDiaryDTO model module.
 * @module model/CreateDiaryDTO
 * @version 1.0
 */
var CreateDiaryDTO = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateDiaryDTO</code>.
   * @alias module:model/CreateDiaryDTO
   */
  function CreateDiaryDTO() {
    _classCallCheck(this, CreateDiaryDTO);

    CreateDiaryDTO.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateDiaryDTO, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateDiaryDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateDiaryDTO} obj Optional instance to populate.
     * @return {module:model/CreateDiaryDTO} The populated <code>CreateDiaryDTO</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateDiaryDTO();

        if (data.hasOwnProperty('contacts')) {
          obj['contacts'] = _ApiClient.default.convertToType(data['contacts'], [_ContactEntryDTO.default]);
        }

        if (data.hasOwnProperty('cured')) {
          obj['cured'] = _ApiClient.default.convertToType(data['cured'], 'Boolean');
        }

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient.default.convertToType(data['userId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CreateDiaryDTO;
}();
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
var _default = CreateDiaryDTO;
exports.default = _default;