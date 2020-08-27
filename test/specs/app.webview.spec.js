import TabBar from '../screenobjects/components/tab.bar';
import WebViewScreen from '../screenobjects/webview.screen';
import { CONTEXT_REF } from '../helpers/WebView';

describe('WebdriverIO and Appium, when interacting with a WebView,', () => {
    beforeEach(() => {
        TabBar.waitForTabBarShown(true);
        TabBar.openWebView();
        WebViewScreen.waitForWebsiteLoaded();
    });

    it('should be able to open webview and scroll to buttom element', () => {

        WebViewScreen.switchToContext(CONTEXT_REF.WEBVIEW);

        const webdriverProtocol = $('.copyright');
        webdriverProtocol.waitForDisplayed({ timeout: 30000 });
        webdriverProtocol.scrollIntoView();
        WebViewScreen.switchToContext(CONTEXT_REF.NATIVE);
    });

});
