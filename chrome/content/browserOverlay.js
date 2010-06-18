if("undefined" == typeof(vimxdebugChrome)){
    var vimxdebugChrome = {};
}

vimxdebugChrome.BrowserOverlay = {

   reload : function(aEvent){

        var i = 0;
        var foo = setInterval(function(){ 
            //var baz = document.getElementById("foobaz");
            //baz.setAttribute('label','>>>'+t);
            i++;
        }, 1000);

        var dude = setTimeout(function(foo){
            //baz.setAttribute('label', 'users');
            var current_url = window.content.location.href;
            current_url.indexOf('?') >= 0 ? current_url += '&' : current_url += '?';
            current_url += 'XDEBUG_SESSION_START=1';

            /*
            var windowManager = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator);
            var browserWindow = windowManager.getMostRecentWindow("navigator:browser");

            browserWindow.loadURI(current_url, null, null);
            */

            //gBrowser.loadURI(current_url, null, null);

            var win = gBrowser.addTab(current_url, null, null); 
            clearInterval(foo);
        },6000);

    } 
}
