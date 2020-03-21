"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TimeLineObject = _interopRequireDefault(require("./TimeLineObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TimelineJsonRoot model module.
 * @module model/TimelineJsonRoot
 * @version 1.0
 */
var TimelineJsonRoot = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimelineJsonRoot</code>.
   * @alias module:model/TimelineJsonRoot
   */
  function TimelineJsonRoot() {
    _classCallCheck(this, TimelineJsonRoot);

    TimelineJsonRoot.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TimelineJsonRoot, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TimelineJsonRoot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimelineJsonRoot} obj Optional instance to populate.
     * @return {module:model/TimelineJsonRoot} The populated <code>TimelineJsonRoot</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimelineJsonRoot();

        if (data.hasOwnProperty('timelineObjects')) {
          obj['timelineObjects'] = _ApiClient.default.convertToType(data['timelineObjects'], [_TimeLineObject.default]);
        }
      }

      return obj;
    }
  }]);

  return TimelineJsonRoot;
}();
/**
 * @member {Array.<module:model/TimeLineObject>} timelineObjects
 */


TimelineJsonRoot.prototype['timelineObjects'] = undefined;
var _default = TimelineJsonRoot;
exports.default = _default;