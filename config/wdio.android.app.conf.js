const { join } = require('path');
const { config } = require('./wdio.conf');

// ============
// Specs
// ============

config.specs = [
    'test/specs/app.webview.spec.js'
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {   
        maxInstances: 1,
        platformName: "Android",
        platformVersion: "11",
        deviceName: "Pixel 3a XL API 30",
        app: join(process.cwd(),"./Android-NativeDemoApp-0.2.1.apk"),
        'appium:automationName': 'UiAutomator2',
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
      }
];

exports.config = config;