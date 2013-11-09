var _visit = new function(){
  var today = new Date().getTime();
  var base = document.location.protocol + '//visitors.shopify.com/';
  var cookies = (document.cookie ? document.cookie : '').split(';');

  var uniqueId = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    }).toUpperCase();
  };

  var readCookie = function(permanent, key) {
    for(var i=0;i<cookies.length;i++) { 
      var c = cookies[i];
      var start=c.indexOf(key+'=');
      if (start!=-1) {
        return unescape(c.substring(start+key.length+1,c.length));
      }
    }
    return null;
  }

  var readStorage = function(permanent, key) {
    var storage = permanent ? 'localStorage' : 'sessionStorage';
    
    if (storage in window) { return window[storage].getItem(key); }
    else { return false; }
  }

  var setCookieWithExpiration = function(key, value, expire) {
    var match = document.location.hostname.match(/shopify\..*/)
    var domain
    if(match){
      domain = '.' + match[0]
    }
    else {
      domain = '.shopify.com'
    }
    document.cookie = key + "=" + escape(value) + ";path=/" +";expires=" + expire.toUTCString() + ';domain=' + domain;
  };

  var setCookie = function(permanent, key, value) {
    var increment = (permanent) ? 1000*60*60*24*360*20 : 1000*60*30;
    var expire = new Date(today + increment);
    setCookieWithExpiration(key, value, expire)
  }

  var setStorage = function(permanent, key, value) {
    var storage = permanent ? 'localStorage' : 'sessionStorage';
    if (storage in window) { window[storage].setItem(key, value); }
  };

  var fetch = function(permanent, key, func) {
    var cookie = readCookie(permanent, key);
    var local  = readStorage(permanent, key);
    var value  = cookie || local || func.call();

    if (!cookie || !permanent) { setCookie(permanent, key, value); }
    if (!local)  { setStorage(permanent, key, value); }

    return value; 
  };

  var referrer = document.referrer;
  var landing_page = window.location.toString();

  var uniq = "9FEA39C0-DA3A-4204-A712";
  var visit = fetch(false, '_s', function(){ return uniqueId(); });
 
  setTimeout(function() {
    new Image().src = base + 'record.gif?y='+ uniq + '&s='+visit+'&r=' +encodeURIComponent(referrer)+'&l='+encodeURIComponent(landing_page)+'&'+ today;
  }, 1);

  this.multitrackToken = function() { return uniq; };
  this.sessionToken = function() { return visit; };
  this.tag = function(name) {
    new Image().src = base + 'record-tag.gif?y='+ uniq + '&s='+visit+'&n=' + encodeURIComponent(name);
  };
  this.keyValue = function(key, value) {
    new Image().src = base + 'record-kv.gif?y='+ uniq + '&k='+ encodeURIComponent(key) + '&v=' + encodeURIComponent(value) + '&s='+visit;
  };

  var getURLParameter = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
    }

  var brandedKeyword = function(ref) {
     var match1 = new RegExp("((google|yahoo|bing)(.*)&?q=([^&]*)shopify)", "gi").test(ref);
     return (match1);
  }
  var ref = getURLParameter('ref');
  var ssid = getURLParameter('ssid');
  if (ref && !brandedKeyword(document.referrer)) {
    var expire = new Date(today + 1000*60*24*30);
    setCookieWithExpiration('source', ref , expire);
    if (ssid) {
      setCookieWithExpiration('ssid', ssid , expire);
    }
  }
};
