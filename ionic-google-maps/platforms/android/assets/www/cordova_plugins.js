cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "pluginId": "com.ionic.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    },
    {
        "file": "plugins/com.matimenich.plugins.nativeclick/www/nativeclick.js",
        "id": "com.matimenich.plugins.nativeclick.nativeclick",
        "pluginId": "com.matimenich.plugins.nativeclick",
        "clobbers": [
            "nativeclick"
        ]
    },
    {
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "id": "cordova-plugin-console.logger",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "id": "cordova-plugin-console.console",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "console"
        ]
    },
    {
        "file": "plugins/cordova-plugin-datepicker/www/android/DatePicker.js",
        "id": "cordova-plugin-datepicker.DatePicker",
        "pluginId": "cordova-plugin-datepicker",
        "clobbers": [
            "datePicker"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "id": "cordova-plugin-dialogs.notification_android",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-locationservices/www/Coordinates.js",
        "id": "cordova-plugin-locationservices.Coordinates",
        "pluginId": "cordova-plugin-locationservices",
        "clobbers": [
            "Coordinates",
            "cordova.plugins.locationServices.Coordinates",
            "plugin.locationServices.Coordinates"
        ]
    },
    {
        "file": "plugins/cordova-plugin-locationservices/www/PositionError.js",
        "id": "cordova-plugin-locationservices.PositionError",
        "pluginId": "cordova-plugin-locationservices",
        "clobbers": [
            "PositionError",
            "cordova.plugins.locationServices.PositionError",
            "plugin.locationServices.PositionError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-locationservices/www/Position.js",
        "id": "cordova-plugin-locationservices.Position",
        "pluginId": "cordova-plugin-locationservices",
        "clobbers": [
            "Position",
            "cordova.plugins.locationServices.PositionError",
            "plugin.locationServices.PositionError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-locationservices/www/LocationServices.js",
        "id": "cordova-plugin-locationservices.LocationServices",
        "pluginId": "cordova-plugin-locationservices",
        "clobbers": [
            "LocationServices",
            "cordova.plugins.locationServices.geolocation",
            "plugin.locationServices.geolocation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-sms/www/SMS.js",
        "id": "cordova-plugin-sms.SMS",
        "pluginId": "cordova-plugin-sms",
        "clobbers": [
            "window.SMS"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "pluginId": "org.apache.cordova.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/plugin.google.maps/www/googlemaps-cdv-plugin.js",
        "id": "plugin.google.maps.phonegap-googlemaps-plugin",
        "pluginId": "plugin.google.maps",
        "clobbers": [
            "plugin.google.maps"
        ]
    },
    {
        "file": "plugins/com.appsflyer.phonegap.plugins.appsflyer/www/appsflyer.js",
        "id": "com.appsflyer.phonegap.plugins.appsflyer.appsflyer",
        "pluginId": "com.appsflyer.phonegap.plugins.appsflyer",
        "clobbers": [
            "window.plugins.appsFlyer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.ionic.keyboard": "1.0.4",
    "com.matimenich.plugins.nativeclick": "0.0.1",
    "cordova-plugin-console": "1.0.1",
    "cordova-plugin-datepicker": "0.9.3",
    "cordova-plugin-device": "1.0.1",
    "cordova-plugin-dialogs": "1.1.1",
    "cordova-plugin-locationservices": "1.1.0",
    "cordova-plugin-network-information": "1.0.1",
    "cordova-plugin-sms": "1.0.5",
    "cordova-plugin-splashscreen": "2.1.0",
    "cordova-plugin-whitelist": "1.0.0",
    "org.apache.cordova.geolocation": "0.3.12",
    "org.apache.cordova.inappbrowser": "0.6.0",
    "plugin.google.maps": "1.3.9",
    "com.appsflyer.phonegap.plugins.appsflyer": "3.0"
}
// BOTTOM OF METADATA
});