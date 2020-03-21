"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Duration = _interopRequireDefault(require("./Duration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PlaceVisit model module.
 * @module model/PlaceVisit
 * @version 1.0
 */
var PlaceVisit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PlaceVisit</code>.
   * @alias module:model/PlaceVisit
   */
  function PlaceVisit() {
    _classCallCheck(this, PlaceVisit);

    PlaceVisit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PlaceVisit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PlaceVisit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlaceVisit} obj Optional instance to populate.
     * @return {module:model/PlaceVisit} The populated <code>PlaceVisit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PlaceVisit();

        if (data.hasOwnProperty('centerLatE7')) {
          obj['centerLatE7'] = _ApiClient.default.convertToType(data['centerLatE7'], 'Number');
        }

        if (data.hasOwnProperty('centerLngE7')) {
          obj['centerLngE7'] = _ApiClient.default.convertToType(data['centerLngE7'], 'Number');
        }

        if (data.hasOwnProperty('duration')) {
          obj['duration'] = _Duration.default.constructFromObject(data['duration']);
        }
      }

      return obj;
    }
  }]);

  return PlaceVisit;
}();
/**
 * @member {Number} centerLatE7
 */


PlaceVisit.prototype['centerLatE7'] = undefined;
/**
 * @member {Number} centerLngE7
 */

PlaceVisit.prototype['centerLngE7'] = undefined;
/**
 * @member {module:model/Duration} duration
 */

PlaceVisit.prototype['duration'] = undefined;
var _default = PlaceVisit;
exports.default = _default;