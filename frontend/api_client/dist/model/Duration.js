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
 * The Duration model module.
 * @module model/Duration
 * @version 1.0
 */
var Duration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Duration</code>.
   * @alias module:model/Duration
   */
  function Duration() {
    _classCallCheck(this, Duration);

    Duration.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Duration, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Duration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Duration} obj Optional instance to populate.
     * @return {module:model/Duration} The populated <code>Duration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Duration();

        if (data.hasOwnProperty('endTimestampMs')) {
          obj['endTimestampMs'] = _ApiClient.default.convertToType(data['endTimestampMs'], 'Number');
        }

        if (data.hasOwnProperty('startTimestampMs')) {
          obj['startTimestampMs'] = _ApiClient.default.convertToType(data['startTimestampMs'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Duration;
}();
/**
 * @member {Number} endTimestampMs
 */


Duration.prototype['endTimestampMs'] = undefined;
/**
 * @member {Number} startTimestampMs
 */

Duration.prototype['startTimestampMs'] = undefined;
var _default = Duration;
exports.default = _default;