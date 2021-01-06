class HeadlessDetect {
    allTestFunctions = ['testUserAgent', 'testChromeWindow', 'testPopUp', 'testNotificationPermissions', 'testPlugins', 'testPluginsPrototype', 'testAppVersion', 'testDevtool', 'testOuter', 'testLanguages', 'testConnectionRtt'];

    constructor() {
    }



    //* All Tests *//

    // User Agent
    testUserAgent() {
        if (/HeadlessChrome/.test(window.navigator.userAgent)) {
            // Headless
            return 1;
        } else {
            // Not Headless
            return 0;
        }
    }

    // Window.Chrome
    testChromeWindow() {
        if (eval.toString().length == 33 && !window.chrome) {
            // Headless
            return 1;
        } else {
            // Not Headless
            return 0;
        }
    }

    // Pop-Up's Blocked
    testPopUp() {
        if(eval.toString().length == 37){
            // Stop Firefox's scary Message and just return NOT HEADLESS
            return 0;
        }else{
            var p = open("");
            if (p !== null) {
                // NOT Headless
                p.close();
                return 0;
            } else {
                // Headless
                return 1;
            }
        }
    }

    // Notification Permissions
    // TODO DOESNT WORK
    testNotificationPermissions() {
        navigator.permissions.query({name:'notifications'}).then(function(permissionStatus) {
            if(Notification.permission === 'denied' && permissionStatus.state === 'prompt') {
                return 1;
            } else {
                return 0;
            }
        });
    }

    // No Plugins
    testPlugins() {
        let length = navigator.plugins.length;

        return length === 0 ? 1 : 0;
    }

    // PluginsArray prototype
    testPluginsPrototype() {
        let correctPrototypes = PluginArray.prototype === navigator.plugins.__proto__;
        if (navigator.plugins.length > 0)
            correctPrototypes &= Plugin.prototype === navigator.plugins[0].__proto__;

        return correctPrototypes ? 0 : 1;
    }

    // App Version
    testAppVersion() {
        let appVersion = navigator.appVersion;

        return /headless/i.test(appVersion) ? 1 : 0;
    }

    // Devtools present
    testDevtool() {
        const any = /./;
        let count = 0;
        let oldToString = any.toString;

        any.toString = function() {
            count++;
            return "any";
        }

        console.debug(any);
        let usingDevTools = count > 1;
        any.toString = oldToString;
        return usingDevTools ? 1 : 0;
    }

    // Outer Dimension
    testOuter() {
        let outerHeight = window.outerHeight;
        let outerWidth = window.outerWidth;

        return (outerHeight === 0 && outerWidth === 0) ? 1 : 0;
    }

    // Languages
    testLanguages(){
        if (navigator.languages == "") {
            // Headless
            return 1;
        } else {
            // Not Headless
            return 0;
        }
    }

    // Connection Rtt
    testConnectionRtt() {
        let connection = navigator.connection;
        let connectionRtt = connection ? connection.rtt : undefined;

        if (connectionRtt === undefined) {
            return 0; // Flag doesn't even exists so just return NOT HEADLESS
        } else {
            return connectionRtt === 0 ? 1 : 0;
        }
    }



    //* Main Functions *//

    getHeadlessScore() {
        let score = 0;
        let testsRun = 0;

        // Loop through all functions and add their results together
        for(let i = 0; i < this.allTestFunctions.length; i++){
            score += this[this.allTestFunctions[i]].apply();
            //console.log(this.allTestFunctions[i] + ": " + this[this.allTestFunctions[i]].apply());
            testsRun++;
        }

        return score / testsRun;
    }
}