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
 * The LocationMatch model module.
 * @module model/LocationMatch
 * @version 1.0
 */
var LocationMatch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LocationMatch</code>.
   * Describes match between two locations.
   * @alias module:model/LocationMatch
   */
  function LocationMatch() {
    _classCallCheck(this, LocationMatch);

    LocationMatch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LocationMatch, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LocationMatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationMatch} obj Optional instance to populate.
     * @return {module:model/LocationMatch} The populated <code>LocationMatch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocationMatch();

        if (data.hasOwnProperty('endTimeMillis')) {
          obj['endTimeMillis'] = _ApiClient.default.convertToType(data['endTimeMillis'], 'Number');
        }

        if (data.hasOwnProperty('latitudeE7')) {
          obj['latitudeE7'] = _ApiClient.default.convertToType(data['latitudeE7'], 'Number');
        }

        if (data.hasOwnProperty('longitudeE7')) {
          obj['longitudeE7'] = _ApiClient.default.convertToType(data['longitudeE7'], 'Number');
        }

        if (data.hasOwnProperty('startTimeMillis')) {
          obj['startTimeMillis'] = _ApiClient.default.convertToType(data['startTimeMillis'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LocationMatch;
}();
/**
 * @member {Number} endTimeMillis
 */


LocationMatch.prototype['endTimeMillis'] = undefined;
/**
 * @member {Number} latitudeE7
 */

LocationMatch.prototype['latitudeE7'] = undefined;
/**
 * @member {Number} longitudeE7
 */

LocationMatch.prototype['longitudeE7'] = undefined;
/**
 * @member {Number} startTimeMillis
 */

LocationMatch.prototype['startTimeMillis'] = undefined;
var _default = LocationMatch;
exports.default = _default;