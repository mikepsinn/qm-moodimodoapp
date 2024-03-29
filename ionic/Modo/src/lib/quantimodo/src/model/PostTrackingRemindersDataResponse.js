/**
 * quantimodo
 * We make it easy to retrieve and analyze normalized user data from a wide array of devices and applications. Check out our [docs and sdk's](https://github.com/QuantiModo/docs) or [contact us](https://help.quantimo.do).
 *
 * OpenAPI spec version: 5.8.112511
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TrackingReminder', 'model/TrackingReminderNotification', 'model/Variable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TrackingReminder'), require('./TrackingReminderNotification'), require('./Variable'));
  } else {
    // Browser globals (root is window)
    if (!root.Quantimodo) {
      root.Quantimodo = {};
    }
    root.Quantimodo.PostTrackingRemindersDataResponse = factory(root.Quantimodo.ApiClient, root.Quantimodo.TrackingReminder, root.Quantimodo.TrackingReminderNotification, root.Quantimodo.Variable);
  }
}(this, function(ApiClient, TrackingReminder, TrackingReminderNotification, Variable) {
  'use strict';




  /**
   * The PostTrackingRemindersDataResponse model module.
   * @module model/PostTrackingRemindersDataResponse
   * @version 5.8.112511
   */

  /**
   * Constructs a new <code>PostTrackingRemindersDataResponse</code>.
   * @alias module:model/PostTrackingRemindersDataResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PostTrackingRemindersDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostTrackingRemindersDataResponse} obj Optional instance to populate.
   * @return {module:model/PostTrackingRemindersDataResponse} The populated <code>PostTrackingRemindersDataResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('trackingReminderNotifications')) {
        obj['trackingReminderNotifications'] = ApiClient.convertToType(data['trackingReminderNotifications'], [TrackingReminderNotification]);
      }
      if (data.hasOwnProperty('trackingReminders')) {
        obj['trackingReminders'] = ApiClient.convertToType(data['trackingReminders'], [TrackingReminder]);
      }
      if (data.hasOwnProperty('userVariables')) {
        obj['userVariables'] = ApiClient.convertToType(data['userVariables'], [Variable]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/TrackingReminderNotification>} trackingReminderNotifications
   */
  exports.prototype['trackingReminderNotifications'] = undefined;
  /**
   * @member {Array.<module:model/TrackingReminder>} trackingReminders
   */
  exports.prototype['trackingReminders'] = undefined;
  /**
   * @member {Array.<module:model/Variable>} userVariables
   */
  exports.prototype['userVariables'] = undefined;



  return exports;
}));


