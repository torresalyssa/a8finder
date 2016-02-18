var app = angular.module('a8finder', ['ionic', 'nodeA8.service']);

app.run(function ($ionicPlatform) {
    console.log("App running");
    $ionicPlatform.ready(function () {
        console.log("Ionic platform ready");
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
        if (window.cordova) {
            console.log("Cordova loaded");
        } else {
        }
        if (window.cordova && window.cordova.plugins) {
            console.log("Cordova plugins loaded");
        } else {
            console.log("Cordova plugins NOT loaded");
        }
    });
});
