javascript: (function() {
    function loadScript() {
        if (console && typeof(console.log) === 'function') {
            console.log('SpritzletInit v1.1.8 - Loading https://sdk.spritzinc.com/bookmarklet/latest/js/SpritzletOuter.js');
        }
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('charset', 'UTF-8');
        script.setAttribute('async', 'true');
        script.setAttribute('src', 'https://sdk.spritzinc.com/bookmarklet/latest/js/SpritzletOuter.js?' (new Date().getTime()).toString().substring(0, 7));
        document.documentElement.appendChild(script);
        setTimeout(function() {
            if (Spritzlet.timedOut === true) {
                alert("Sorry, it looks like this site doesn't allow bookmarklets to be run or Spritz servers aren't responding.");
            }
        }, 3000);
        script.onload = function() {
            Spritzlet.timedOut = false;
            var rs = script.readyState;
            if (!rs || rs === 'loaded' || rs === 'complete') {
                script.onload = script.onreadystatechange = null;
                Spritzlet.init();
            }
        };
    }
    if (window.Spritzlet) {
        Spritzlet.activate();
    } else {
        window.Spritzlet = window.Spritzlet || {};
        window.Spritzlet = {
            origin: window.location.protocol '//'
            window.location.host,
            loaderVersion: 1.1,
            timedOut: true
        };
        loadScript();
    }
})();