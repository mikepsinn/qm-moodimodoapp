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
    define(['ApiClient', 'model/TrackingReminderNotificationAction', 'model/TrackingReminderNotificationTrackAllAction', 'model/Unit'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TrackingReminderNotificationAction'), require('./TrackingReminderNotificationTrackAllAction'), require('./Unit'));
  } else {
    // Browser globals (root is window)
    if (!root.Quantimodo) {
      root.Quantimodo = {};
    }
    root.Quantimodo.TrackingReminderNotification = factory(root.Quantimodo.ApiClient, root.Quantimodo.TrackingReminderNotificationAction, root.Quantimodo.TrackingReminderNotificationTrackAllAction, root.Quantimodo.Unit);
  }
}(this, function(ApiClient, TrackingReminderNotificationAction, TrackingReminderNotificationTrackAllAction, Unit) {
  'use strict';




  /**
   * The TrackingReminderNotification model module.
   * @module model/TrackingReminderNotification
   * @version 5.8.112511
   */

  /**
   * Constructs a new <code>TrackingReminderNotification</code>.
   * @alias module:model/TrackingReminderNotification
   * @class
   * @param actionArray {Array.<module:model/TrackingReminderNotificationAction>} 
   * @param availableUnits {Array.<module:model/Unit>} 
   * @param fillingValue {Number} Example: 0
   * @param id {Number} id for the specific PENDING tracking remidner
   * @param trackAllActions {Array.<module:model/TrackingReminderNotificationTrackAllAction>} 
   */
  var exports = function(actionArray, availableUnits, fillingValue, id, trackAllActions) {
    var _this = this;

    _this['actionArray'] = actionArray;
    _this['availableUnits'] = availableUnits;













    _this['fillingValue'] = fillingValue;

    _this['id'] = id;






























    _this['trackAllActions'] = trackAllActions;























  };

  /**
   * Constructs a <code>TrackingReminderNotification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackingReminderNotification} obj Optional instance to populate.
   * @return {module:model/TrackingReminderNotification} The populated <code>TrackingReminderNotification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('actionArray')) {
        obj['actionArray'] = ApiClient.convertToType(data['actionArray'], [TrackingReminderNotificationAction]);
      }
      if (data.hasOwnProperty('availableUnits')) {
        obj['availableUnits'] = ApiClient.convertToType(data['availableUnits'], [Unit]);
      }
      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
      }
      if (data.hasOwnProperty('combinationOperation')) {
        obj['combinationOperation'] = ApiClient.convertToType(data['combinationOperation'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('modifiedValue')) {
        obj['modifiedValue'] = ApiClient.convertToType(data['modifiedValue'], 'Number');
      }
      if (data.hasOwnProperty('unitAbbreviatedName')) {
        obj['unitAbbreviatedName'] = ApiClient.convertToType(data['unitAbbreviatedName'], 'String');
      }
      if (data.hasOwnProperty('unitCategoryId')) {
        obj['unitCategoryId'] = ApiClient.convertToType(data['unitCategoryId'], 'Number');
      }
      if (data.hasOwnProperty('unitCategoryName')) {
        obj['unitCategoryName'] = ApiClient.convertToType(data['unitCategoryName'], 'String');
      }
      if (data.hasOwnProperty('unitId')) {
        obj['unitId'] = ApiClient.convertToType(data['unitId'], 'Number');
      }
      if (data.hasOwnProperty('unitName')) {
        obj['unitName'] = ApiClient.convertToType(data['unitName'], 'String');
      }
      if (data.hasOwnProperty('defaultValue')) {
        obj['defaultValue'] = ApiClient.convertToType(data['defaultValue'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'Boolean');
      }
      if (data.hasOwnProperty('fillingValue')) {
        obj['fillingValue'] = ApiClient.convertToType(data['fillingValue'], 'Number');
      }
      if (data.hasOwnProperty('iconIcon')) {
        obj['iconIcon'] = ApiClient.convertToType(data['iconIcon'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('imageUrl')) {
        obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
      }
      if (data.hasOwnProperty('inputType')) {
        obj['inputType'] = ApiClient.convertToType(data['inputType'], 'String');
      }
      if (data.hasOwnProperty('ionIcon')) {
        obj['ionIcon'] = ApiClient.convertToType(data['ionIcon'], 'String');
      }
      if (data.hasOwnProperty('lastValue')) {
        obj['lastValue'] = ApiClient.convertToType(data['lastValue'], 'Number');
      }
      if (data.hasOwnProperty('manualTracking')) {
        obj['manualTracking'] = ApiClient.convertToType(data['manualTracking'], 'Boolean');
      }
      if (data.hasOwnProperty('maximumAllowedValue')) {
        obj['maximumAllowedValue'] = ApiClient.convertToType(data['maximumAllowedValue'], 'Number');
      }
      if (data.hasOwnProperty('minimumAllowedValue')) {
        obj['minimumAllowedValue'] = ApiClient.convertToType(data['minimumAllowedValue'], 'Number');
      }
      if (data.hasOwnProperty('mostCommonValue')) {
        obj['mostCommonValue'] = ApiClient.convertToType(data['mostCommonValue'], 'Number');
      }
      if (data.hasOwnProperty('notificationBar')) {
        obj['notificationBar'] = ApiClient.convertToType(data['notificationBar'], 'Boolean');
      }
      if (data.hasOwnProperty('notifiedAt')) {
        obj['notifiedAt'] = ApiClient.convertToType(data['notifiedAt'], 'String');
      }
      if (data.hasOwnProperty('numberOfUniqueValues')) {
        obj['numberOfUniqueValues'] = ApiClient.convertToType(data['numberOfUniqueValues'], 'Number');
      }
      if (data.hasOwnProperty('outcome')) {
        obj['outcome'] = ApiClient.convertToType(data['outcome'], 'Boolean');
      }
      if (data.hasOwnProperty('pngPath')) {
        obj['pngPath'] = ApiClient.convertToType(data['pngPath'], 'String');
      }
      if (data.hasOwnProperty('pngUrl')) {
        obj['pngUrl'] = ApiClient.convertToType(data['pngUrl'], 'String');
      }
      if (data.hasOwnProperty('popUp')) {
        obj['popUp'] = ApiClient.convertToType(data['popUp'], 'Boolean');
      }
      if (data.hasOwnProperty('productUrl')) {
        obj['productUrl'] = ApiClient.convertToType(data['productUrl'], 'String');
      }
      if (data.hasOwnProperty('question')) {
        obj['question'] = ApiClient.convertToType(data['question'], 'String');
      }
      if (data.hasOwnProperty('reminderEndTime')) {
        obj['reminderEndTime'] = ApiClient.convertToType(data['reminderEndTime'], 'String');
      }
      if (data.hasOwnProperty('reminderFrequency')) {
        obj['reminderFrequency'] = ApiClient.convertToType(data['reminderFrequency'], 'Number');
      }
      if (data.hasOwnProperty('reminderSound')) {
        obj['reminderSound'] = ApiClient.convertToType(data['reminderSound'], 'String');
      }
      if (data.hasOwnProperty('reminderStartTime')) {
        obj['reminderStartTime'] = ApiClient.convertToType(data['reminderStartTime'], 'String');
      }
      if (data.hasOwnProperty('reminderTime')) {
        obj['reminderTime'] = ApiClient.convertToType(data['reminderTime'], 'String');
      }
      if (data.hasOwnProperty('secondMostCommonValue')) {
        obj['secondMostCommonValue'] = ApiClient.convertToType(data['secondMostCommonValue'], 'Number');
      }
      if (data.hasOwnProperty('secondToLastValue')) {
        obj['secondToLastValue'] = ApiClient.convertToType(data['secondToLastValue'], 'Number');
      }
      if (data.hasOwnProperty('sms')) {
        obj['sms'] = ApiClient.convertToType(data['sms'], 'Boolean');
      }
      if (data.hasOwnProperty('svgUrl')) {
        obj['svgUrl'] = ApiClient.convertToType(data['svgUrl'], 'String');
      }
      if (data.hasOwnProperty('thirdMostCommonValue')) {
        obj['thirdMostCommonValue'] = ApiClient.convertToType(data['thirdMostCommonValue'], 'Number');
      }
      if (data.hasOwnProperty('thirdToLastValue')) {
        obj['thirdToLastValue'] = ApiClient.convertToType(data['thirdToLastValue'], 'Number');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('trackAllActions')) {
        obj['trackAllActions'] = ApiClient.convertToType(data['trackAllActions'], [TrackingReminderNotificationTrackAllAction]);
      }
      if (data.hasOwnProperty('trackingReminderId')) {
        obj['trackingReminderId'] = ApiClient.convertToType(data['trackingReminderId'], 'Number');
      }
      if (data.hasOwnProperty('trackingReminderImageUrl')) {
        obj['trackingReminderImageUrl'] = ApiClient.convertToType(data['trackingReminderImageUrl'], 'String');
      }
      if (data.hasOwnProperty('trackingReminderNotificationId')) {
        obj['trackingReminderNotificationId'] = ApiClient.convertToType(data['trackingReminderNotificationId'], 'Number');
      }
      if (data.hasOwnProperty('trackingReminderNotificationTime')) {
        obj['trackingReminderNotificationTime'] = ApiClient.convertToType(data['trackingReminderNotificationTime'], 'String');
      }
      if (data.hasOwnProperty('trackingReminderNotificationTimeEpoch')) {
        obj['trackingReminderNotificationTimeEpoch'] = ApiClient.convertToType(data['trackingReminderNotificationTimeEpoch'], 'Number');
      }
      if (data.hasOwnProperty('trackingReminderNotificationTimeLocal')) {
        obj['trackingReminderNotificationTimeLocal'] = ApiClient.convertToType(data['trackingReminderNotificationTimeLocal'], 'String');
      }
      if (data.hasOwnProperty('trackingReminderNotificationTimeLocalHumanString')) {
        obj['trackingReminderNotificationTimeLocalHumanString'] = ApiClient.convertToType(data['trackingReminderNotificationTimeLocalHumanString'], 'String');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
      }
      if (data.hasOwnProperty('userVariableUnitAbbreviatedName')) {
        obj['userVariableUnitAbbreviatedName'] = ApiClient.convertToType(data['userVariableUnitAbbreviatedName'], 'String');
      }
      if (data.hasOwnProperty('userVariableUnitCategoryId')) {
        obj['userVariableUnitCategoryId'] = ApiClient.convertToType(data['userVariableUnitCategoryId'], 'Number');
      }
      if (data.hasOwnProperty('userVariableUnitCategoryName')) {
        obj['userVariableUnitCategoryName'] = ApiClient.convertToType(data['userVariableUnitCategoryName'], 'String');
      }
      if (data.hasOwnProperty('userVariableUnitId')) {
        obj['userVariableUnitId'] = ApiClient.convertToType(data['userVariableUnitId'], 'Number');
      }
      if (data.hasOwnProperty('userVariableUnitName')) {
        obj['userVariableUnitName'] = ApiClient.convertToType(data['userVariableUnitName'], 'String');
      }
      if (data.hasOwnProperty('userVariableVariableCategoryId')) {
        obj['userVariableVariableCategoryId'] = ApiClient.convertToType(data['userVariableVariableCategoryId'], 'Number');
      }
      if (data.hasOwnProperty('userVariableVariableCategoryName')) {
        obj['userVariableVariableCategoryName'] = ApiClient.convertToType(data['userVariableVariableCategoryName'], 'String');
      }
      if (data.hasOwnProperty('valence')) {
        obj['valence'] = ApiClient.convertToType(data['valence'], 'String');
      }
      if (data.hasOwnProperty('variableCategoryId')) {
        obj['variableCategoryId'] = ApiClient.convertToType(data['variableCategoryId'], 'Number');
      }
      if (data.hasOwnProperty('variableCategoryImageUrl')) {
        obj['variableCategoryImageUrl'] = ApiClient.convertToType(data['variableCategoryImageUrl'], 'String');
      }
      if (data.hasOwnProperty('variableCategoryName')) {
        obj['variableCategoryName'] = ApiClient.convertToType(data['variableCategoryName'], 'String');
      }
      if (data.hasOwnProperty('variableId')) {
        obj['variableId'] = ApiClient.convertToType(data['variableId'], 'Number');
      }
      if (data.hasOwnProperty('variableImageUrl')) {
        obj['variableImageUrl'] = ApiClient.convertToType(data['variableImageUrl'], 'String');
      }
      if (data.hasOwnProperty('variableName')) {
        obj['variableName'] = ApiClient.convertToType(data['variableName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/TrackingReminderNotificationAction>} actionArray
   */
  exports.prototype['actionArray'] = undefined;
  /**
   * @member {Array.<module:model/Unit>} availableUnits
   */
  exports.prototype['availableUnits'] = undefined;
  /**
   * clientId
   * @member {String} clientId
   */
  exports.prototype['clientId'] = undefined;
  /**
   * The way multiple measurements are aggregated over time
   * @member {module:model/TrackingReminderNotification.CombinationOperationEnum} combinationOperation
   */
  exports.prototype['combinationOperation'] = undefined;
  /**
   * Example: 2017-07-29 20:49:54 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
   * @member {String} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * Example: Trader Joe's Bedtime Tea
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * Is the user specified default value or falls back to the last value in user unit. Good for initializing input fields
   * @member {Number} modifiedValue
   */
  exports.prototype['modifiedValue'] = undefined;
  /**
   * Example: /5
   * @member {String} unitAbbreviatedName
   */
  exports.prototype['unitAbbreviatedName'] = undefined;
  /**
   * Example: 5
   * @member {Number} unitCategoryId
   */
  exports.prototype['unitCategoryId'] = undefined;
  /**
   * Example: Rating
   * @member {String} unitCategoryName
   */
  exports.prototype['unitCategoryName'] = undefined;
  /**
   * Example: 10
   * @member {Number} unitId
   */
  exports.prototype['unitId'] = undefined;
  /**
   * Example: 1 to 5 Rating
   * @member {String} unitName
   */
  exports.prototype['unitName'] = undefined;
  /**
   * Default value to use for the measurement when tracking
   * @member {Number} defaultValue
   */
  exports.prototype['defaultValue'] = undefined;
  /**
   * Example: positive
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * True if the reminders should be delivered via email
   * @member {Boolean} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Example: 0
   * @member {Number} fillingValue
   */
  exports.prototype['fillingValue'] = undefined;
  /**
   * Example: ion-sad-outline
   * @member {String} iconIcon
   */
  exports.prototype['iconIcon'] = undefined;
  /**
   * id for the specific PENDING tracking remidner
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Example: https://rximage.nlm.nih.gov/image/images/gallery/original/55111-0129-60_RXNAVIMAGE10_B051D81E.jpg
   * @member {String} imageUrl
   */
  exports.prototype['imageUrl'] = undefined;
  /**
   * Example: happiestFaceIsFive
   * @member {String} inputType
   */
  exports.prototype['inputType'] = undefined;
  /**
   * Example: ion-happy-outline
   * @member {String} ionIcon
   */
  exports.prototype['ionIcon'] = undefined;
  /**
   * Example: 3
   * @member {Number} lastValue
   */
  exports.prototype['lastValue'] = undefined;
  /**
   * Example: 1
   * @member {Boolean} manualTracking
   */
  exports.prototype['manualTracking'] = undefined;
  /**
   * Example: 5
   * @member {Number} maximumAllowedValue
   */
  exports.prototype['maximumAllowedValue'] = undefined;
  /**
   * Example: 1
   * @member {Number} minimumAllowedValue
   */
  exports.prototype['minimumAllowedValue'] = undefined;
  /**
   * Example: 3
   * @member {Number} mostCommonValue
   */
  exports.prototype['mostCommonValue'] = undefined;
  /**
   * True if the reminders should appear in the notification bar
   * @member {Boolean} notificationBar
   */
  exports.prototype['notificationBar'] = undefined;
  /**
   * Example: UTC ISO 8601 YYYY-MM-DDThh:mm:ss
   * @member {String} notifiedAt
   */
  exports.prototype['notifiedAt'] = undefined;
  /**
   * Example: 5
   * @member {Number} numberOfUniqueValues
   */
  exports.prototype['numberOfUniqueValues'] = undefined;
  /**
   * Indicates whether or not the variable is usually an outcome of interest such as a symptom or emotion
   * @member {Boolean} outcome
   */
  exports.prototype['outcome'] = undefined;
  /**
   * Example: img/variable_categories/emotions.png
   * @member {String} pngPath
   */
  exports.prototype['pngPath'] = undefined;
  /**
   * Example: https://app.quantimo.do/ionic/Modo/www/img/variable_categories/emotions.png
   * @member {String} pngUrl
   */
  exports.prototype['pngUrl'] = undefined;
  /**
   * True if the reminders should appear as a popup notification
   * @member {Boolean} popUp
   */
  exports.prototype['popUp'] = undefined;
  /**
   * Link to associated product for purchase
   * @member {String} productUrl
   */
  exports.prototype['productUrl'] = undefined;
  /**
   * Example: How is your overall mood?
   * @member {String} question
   */
  exports.prototype['question'] = undefined;
  /**
   * Example: 01-01-2018
   * @member {String} reminderEndTime
   */
  exports.prototype['reminderEndTime'] = undefined;
  /**
   * How often user should be reminded in seconds. Example: 86400
   * @member {Number} reminderFrequency
   */
  exports.prototype['reminderFrequency'] = undefined;
  /**
   * String identifier for the sound to accompany the reminder
   * @member {String} reminderSound
   */
  exports.prototype['reminderSound'] = undefined;
  /**
   * Earliest time of day at which reminders should appear in UTC HH:MM:SS format
   * @member {String} reminderStartTime
   */
  exports.prototype['reminderStartTime'] = undefined;
  /**
   * UTC ISO 8601 YYYY-MM-DDThh:mm:ss timestamp for the specific time the variable should be tracked in UTC.  This will be used for the measurement startTime if the track endpoint is used.
   * @member {String} reminderTime
   */
  exports.prototype['reminderTime'] = undefined;
  /**
   * Example: 4
   * @member {Number} secondMostCommonValue
   */
  exports.prototype['secondMostCommonValue'] = undefined;
  /**
   * Example: 1
   * @member {Number} secondToLastValue
   */
  exports.prototype['secondToLastValue'] = undefined;
  /**
   * True if the reminders should be delivered via SMS
   * @member {Boolean} sms
   */
  exports.prototype['sms'] = undefined;
  /**
   * Example: https://app.quantimo.do/ionic/Modo/www/img/variable_categories/emotions.svg
   * @member {String} svgUrl
   */
  exports.prototype['svgUrl'] = undefined;
  /**
   * Example: 2
   * @member {Number} thirdMostCommonValue
   */
  exports.prototype['thirdMostCommonValue'] = undefined;
  /**
   * Example: 2
   * @member {Number} thirdToLastValue
   */
  exports.prototype['thirdToLastValue'] = undefined;
  /**
   * Example: Rate Overall Mood
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Example: 3
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;
  /**
   * @member {Array.<module:model/TrackingReminderNotificationTrackAllAction>} trackAllActions
   */
  exports.prototype['trackAllActions'] = undefined;
  /**
   * id for the repeating tracking remidner
   * @member {Number} trackingReminderId
   */
  exports.prototype['trackingReminderId'] = undefined;
  /**
   * Example: https://rximage.nlm.nih.gov/image/images/gallery/original/55111-0129-60_RXNAVIMAGE10_B051D81E.jpg
   * @member {String} trackingReminderImageUrl
   */
  exports.prototype['trackingReminderImageUrl'] = undefined;
  /**
   * Example: 5072482
   * @member {Number} trackingReminderNotificationId
   */
  exports.prototype['trackingReminderNotificationId'] = undefined;
  /**
   * UTC ISO 8601 YYYY-MM-DDThh:mm:ss timestamp for the specific time the variable should be tracked in UTC.  This will be used for the measurement startTime if the track endpoint is used.
   * @member {String} trackingReminderNotificationTime
   */
  exports.prototype['trackingReminderNotificationTime'] = undefined;
  /**
   * Example: 1501534124
   * @member {Number} trackingReminderNotificationTimeEpoch
   */
  exports.prototype['trackingReminderNotificationTimeEpoch'] = undefined;
  /**
   * Example: 15:48:44
   * @member {String} trackingReminderNotificationTimeLocal
   */
  exports.prototype['trackingReminderNotificationTimeLocal'] = undefined;
  /**
   * Example: 8PM Sun, May 1
   * @member {String} trackingReminderNotificationTimeLocalHumanString
   */
  exports.prototype['trackingReminderNotificationTimeLocalHumanString'] = undefined;
  /**
   * When the record in the database was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
   * @member {String} updatedAt
   */
  exports.prototype['updatedAt'] = undefined;
  /**
   * ID of User
   * @member {Number} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * Example: /5
   * @member {String} userVariableUnitAbbreviatedName
   */
  exports.prototype['userVariableUnitAbbreviatedName'] = undefined;
  /**
   * Example: 5
   * @member {Number} userVariableUnitCategoryId
   */
  exports.prototype['userVariableUnitCategoryId'] = undefined;
  /**
   * Example: Rating
   * @member {String} userVariableUnitCategoryName
   */
  exports.prototype['userVariableUnitCategoryName'] = undefined;
  /**
   * Example: 10
   * @member {Number} userVariableUnitId
   */
  exports.prototype['userVariableUnitId'] = undefined;
  /**
   * Example: 1 to 5 Rating
   * @member {String} userVariableUnitName
   */
  exports.prototype['userVariableUnitName'] = undefined;
  /**
   * Example: 1
   * @member {Number} userVariableVariableCategoryId
   */
  exports.prototype['userVariableVariableCategoryId'] = undefined;
  /**
   * Example: Emotions
   * @member {String} userVariableVariableCategoryName
   */
  exports.prototype['userVariableVariableCategoryName'] = undefined;
  /**
   * Example: positive
   * @member {String} valence
   */
  exports.prototype['valence'] = undefined;
  /**
   * Example: 1
   * @member {Number} variableCategoryId
   */
  exports.prototype['variableCategoryId'] = undefined;
  /**
   * Example: https://maxcdn.icons8.com/Color/PNG/96/Cinema/theatre_mask-96.png
   * @member {String} variableCategoryImageUrl
   */
  exports.prototype['variableCategoryImageUrl'] = undefined;
  /**
   * Name of the variable category to be used when sending measurements
   * @member {String} variableCategoryName
   */
  exports.prototype['variableCategoryName'] = undefined;
  /**
   * Id for the variable to be tracked
   * @member {Number} variableId
   */
  exports.prototype['variableId'] = undefined;
  /**
   * Example: https://image.png
   * @member {String} variableImageUrl
   */
  exports.prototype['variableImageUrl'] = undefined;
  /**
   * Name of the variable to be used when sending measurements
   * @member {String} variableName
   */
  exports.prototype['variableName'] = undefined;


  /**
   * Allowed values for the <code>combinationOperation</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CombinationOperationEnum = {
    /**
     * value: "MEAN"
     * @const
     */
    "MEAN": "MEAN",
    /**
     * value: "SUM"
     * @const
     */
    "SUM": "SUM"  };


  return exports;
}));

