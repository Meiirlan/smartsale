function t(e) {
    var n = e && e.e ? e.e : null;
    e = e ? !! e.guess : !0;
    var r = new t.implementation;
    return n = r.run(n), e ? r.guessFunctions(n) : n
}

function n(e) {
    var t = {
        success: {
            gaq: ["_trackEvent", "threefield", "threefield", "threefield"],
            tracker: {
                eventCategory: "SignUp",
                eventAction: "success",
                eventLabel: "three field",
                dimension1: "Lead"
            }
        },
        error: {
            gaq: ["_trackEvent", "threefield", "error", "error"],
            tracker: {
                eventCategory: "SignUp",
                eventAction: "error",
                eventLabel: "error"
            }
        },
        bademail: {
            gaq: ["_trackEvent", "threefield", "error", "bademail"],
            tracker: {
                eventCategory: "SignUp",
                eventAction: "error",
                eventLabel: "Bad email"
            }
        },
        badpassword: {
            gaq: ["_trackEvent", "threefield", "error", "badpassword"],
            tracker: {
                eventCategory: "SignUp",
                eventAction: "error",
                eventLabel: "Bad password"
            }
        }
    };
    e in t && (_gaq.push(t[e].gaq), _gaUTracker("send", "event", t[e].tracker))
}
/*
function r(e) {
    $("#btn-open-store").attr("disabled", "disabled");
    var t = $(e.target).parent().find("input"),
        r = t.first().attr("value"),
        i = $(t[1]).attr("value"),
        s = $(t[2]).attr("value");
    $(".modal-wrapper").removeClass("visually-hidden"), $(".modal-wrapper .modal-child").addClass("visually-hidden"), $("#signup-fields").removeClass("slideIn"), setTimeout(function () {
        $("#creating-store").removeClass("visually-hidden"), $("#creating-store").addClass("slideIn"), $(".loading-text").animate({
            opacity: 1
        }, 6500, function () {
            $(".loading-text").css({
                "margin-top": -22
            }).find("span").addClass("done").parent().prepend("<span><strong>2 of 4: </strong>Initializing your store...</span>").animate({
                "margin-top": 0
            }, function () {
                $(".loading-text").animate({
                    opacity: 1
                }, 6500, function () {
                    $(".loading-text").css({
                        "margin-top": -22
                    }).find("span").addClass("done").parent().prepend("<span><strong>3 of 4: </strong>Applying store settings...</span>").animate({
                        "margin-top": 0
                    }, function () {
                        $(".loading-text").animate({
                            opacity: 1
                        }, 5e3, function () {
                            $(".loading-text").css({
                                "margin-top": -22
                            }).find("span").addClass("done").parent().prepend("<span><strong>4 of 4: </strong>Applying default theme...</span>").animate({
                                "margin-top": 0
                            })
                        })
                    })
                })
            })
        })
    }, 300), ShopifySignup.directSignup && n("success"), ShopifySignup.create(r, i, s, function (e, t) {
        e ? (n("error"), $("#creating-store").removeClass("slideIn"), $("#creating-store").hide(), $("#error-store").removeClass("visually-hidden"), $("#error-store").addClass("slideIn"), $("#error-store .error-details").html(e)) : ($("#creating-store").removeClass("slideIn"), setTimeout(function () {
            var e = t.admin_url.slice(7, t.admin_url.indexOf(".myshopify.com"));
            ShopifyCookies.setSubdomainCookie(e), ShopifyCookies.setCustomerEmailCookie(i), $("#success").attr("href", t.admin_url), $("#creating-store").addClass("visually-hidden"), $("#success-store").removeClass("visually-hidden"), $("#success-store").addClass("slideIn"), $("#success-store #modal-title").css("visibility", "visible"), n("success"), window.optimizely = window.optimizely || [], window.optimizely.push(["trackEvent", "SignedUp"])
        }, 1e3))
    })
}
*/
jQuery.cookie = function (e, t, n) {
    if (arguments.length > 1 && String(t) !== "[object Object]") {
        n = jQuery.extend({}, n);
        if (t === null || t === undefined) n.expires = -1;
        if (typeof n.expires == "number") {
            var r = n.expires,
                i = n.expires = new Date;
            i.setDate(i.getDate() + r)
        }
        return t = String(t), document.cookie = [encodeURIComponent(e), "=", n.raw ? t : encodeURIComponent(t), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
    }
    n = t || {};
    var s, o = n.raw ? function (e) {
            return e
        } : decodeURIComponent;
    return (s = (new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)")).exec(document.cookie)) ? o(s[1]) : null
};
var e = {
    VERSION: "2.0",
    NOTICE_XML: '<?xml version="1.0" encoding="UTF-8"?>  <notice version="2.0">    <api-key></api-key>    <notifier>      <name>errbit_notifier_js</name>      <version>2.0</version>      <url>https://github.com/errbit/errbit</url>    </notifier>    <error>      <class>EXCEPTION_CLASS</class>      <message>EXCEPTION_MESSAGE</message>      <backtrace>BACKTRACE_LINES</backtrace>    </error>    <request>      <url>REQUEST_URL</url>      <component>REQUEST_COMPONENT</component>      <action>REQUEST_ACTION</action>    </request>    <server-environment>      <project-root>PROJECT_ROOT</project-root>      <environment-name>production</environment-name>    </server-environment>  </notice>',
    ROOT: window.location.protocol + "//" + window.location.host,
    BACKTRACE_MATCHER: /^(.*)\@(.*)\:(\d+)$/,
    backtrace_filters: [/notifier\.js/],
    notify: function (t) {
        var n = escape(e.generateXML(t)),
            r = e.host,
            i = "//" + r + "/notifier_api/v2/notices.xml?data=" + n,
            s = document.createElement("iframe");
        s.style.width = "1px", s.style.height = "1px", s.style.display = "none", s.src = i, document.getElementsByTagName("head")[0].appendChild(s)
    },
    setEnvironment: function (t) {
        var n = /<environment-name>.*<\/environment-name>/;
        e.NOTICE_XML = e.NOTICE_XML.replace(n, "<environment-name>" + t + "</environment-name>")
    },
    setHost: function (t) {
        e.host = t
    },
    setKey: function (t) {
        var n = /<api-key>.*<\/api-key>/;
        e.NOTICE_XML = e.NOTICE_XML.replace(n, "<api-key>" + t + "</api-key>")
    },
    setErrorDefaults: function (t) {
        e.errorDefaults = t
    },
    generateXML: function (t) {
        var n = e.mergeDefault(e.errorDefaults, t),
            r = e.NOTICE_XML,
            i = e.escapeText(n.url || ""),
            s = e.escapeText(n.component || ""),
            o = e.escapeText(n.action || ""),
            u = e.escapeText(n.type || "Error"),
            a = e.escapeText(n.message || "Unknown error."),
            f = e.generateBacktrace(n);
        if (e.trim(i) == "" && e.trim(s) == "") r = r.replace(/<request>.*<\/request>/, "");
        else {
            var l = "",
                c = n["cgi-data"] || {};
            c.HTTP_USER_AGENT = navigator.userAgent, l += "<cgi-data>", l += e.generateVariables(c), l += "</cgi-data>";
            var h = ["params", "session"];
            for (var p = 0; p < 2; p++) {
                var u = h[p];
                n[u] && (l += "<" + u + ">", l += e.generateVariables(n[u]), l += "</" + u + ">")
            }
            r = r.replace("</request>", l + "</request>").replace("REQUEST_URL", i).replace("REQUEST_ACTION", o).replace("REQUEST_COMPONENT", s)
        }
        return r.replace("PROJECT_ROOT", e.ROOT).replace("EXCEPTION_CLASS", u).replace("EXCEPTION_MESSAGE", a).replace("BACKTRACE_LINES", f.join(""))
    },
    generateBacktrace: function (t) {
        t = t || {};
        if (typeof t.stack != "string") try {
            (0)()
        } catch (n) {
            t.stack = n.stack
        }
        var r = [],
            i = e.getStackTrace(t);
        for (var s = 0, o = i.length; s < o; s++) {
            var u = i[s],
                a = u.match(e.BACKTRACE_MATCHER);
            if (a && e.validBacktraceLine(u)) {
                var f = a[2].replace(e.ROOT, "[PROJECT_ROOT]");
                s == 0 && a[2].match(document.location.href) && r.push('<line method="" file="internal: " number=""/>'), r.push('<line method="' + e.escapeText(a[1]) + '" file="' + e.escapeText(f) + '" number="' + a[3] + '" />')
            }
        }
        return r
    },
    getStackTrace: function (e) {
        var n = t({
            e: e,
            guess: !1
        });
        for (var r = 0, i = n.length; r < i; r++) {
            if (n[r].match(/\:\d+$/)) continue;
            n[r].indexOf("@") == -1 && (n[r] += "@unsupported.js"), n[r] += ":0"
        }
        return n
    },
    validBacktraceLine: function (t) {
        for (var n = 0; n < e.backtrace_filters.length; n++)
            if (t.match(e.backtrace_filters[n])) return !1;
        return !0
    },
    generateVariables: function (t) {
        var n, r = "";
        for (n in t) r += '<var key="' + e.escapeText(n) + '">' + e.escapeText(t[n]) + "</var>";
        return r
    },
    escapeText: function (e) {
        return e.replace(/&/g, "&#38;").replace(/</g, "&#60;").replace(/>/g, "&#62;").replace(/'/g, "&#39;").replace(/"/g, "&#34;")
    },
    trim: function (e) {
        return e.toString().replace(/^\s+/, "").replace(/\s+$/, "")
    },
    mergeDefault: function (e, t) {
        var n = {}, r;
        for (r in t) n[r] = t[r];
        for (r in e) n.hasOwnProperty(r) || (n[r] = e[r]);
        return n
    }
};
t.implementation = function () {}, t.implementation.prototype = {
    run: function (e) {
        var t = this._mode || this.mode();
        if (t === "other") return this.other(arguments.callee);
        var n;
        if (!(n = e)) e: {
            try {
                (0)()
            } catch (r) {
                n = r;
                break e
            }
            n = void 0
        }
        return e = n, this[t](e)
    },
    mode: function () {
        try {
            (0)()
        } catch (e) {
            if (e.arguments) return this._mode = "chrome";
            if (e.stack) return this._mode = "firefox";
            if (window.opera && !("stacktrace" in e)) return this._mode = "opera"
        }
        return this._mode = "other"
    },
    chrome: function (e) {
        return e.stack.replace(/^.*?\n/, "").replace(/^.*?\n/, "").replace(/^.*?\n/, "").replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@").split("\n")
    },
    firefox: function (e) {
        return e.stack.replace(/^.*?\n/, "").replace(/(?:\n@:0)?\s+$/m, "").replace(/^\(/gm, "{anonymous}(").split("\n")
    },
    opera: function (e) {
        e = e.message.split("\n");
        var t = /Line\s+(\d+).*?script\s+(http\S+)(?:.*?in\s+function\s+(\S+))?/i,
            n, r, i;
        n = 4, r = 0;
        for (i = e.length; n < i; n += 2) t.test(e[n]) && (e[r++] = (RegExp.$3 ? RegExp.$3 + "()@" + RegExp.$2 + RegExp.$1 : "{anonymous}()@" + RegExp.$2 + ":" + RegExp.$1) + " -- " + e[n + 1].replace(/^\s+/, ""));
        return e.splice(r, e.length - r), e
    },
    other: function (e) {
        for (var n = /function\s*([\w\-$]+)?\s*\(/i, r = [], i = 0, s, o; e && r.length < 10;) {
            s = n.test(e.toString()) ? RegExp.$1 || "{anonymous}" : "{anonymous}", o = Array.prototype.slice.call(e.arguments), r[i++] = s + "(" + t.implementation.prototype.stringifyArguments(o) + ")";
            if (e === e.caller && window.opera) break;
            e = e.caller
        }
        return r
    },
    stringifyArguments: function (e) {
        for (var t = 0; t < e.length; ++t) {
            var n = e[t];
            typeof n == "object" ? e[t] = "#object" : typeof n == "function" ? e[t] = "#function" : typeof n == "string" && (e[t] = '"' + n + '"')
        }
        return e.join(",")
    },
    sourceCache: {},
    ajax: function (e) {
        var t = this.createXMLHTTPObject();
        if (t) return t.open("GET", e, !1), t.setRequestHeader("User-Agent", "XMLHTTP/1.0"), t.send(""), t.responseText
    },
    createXMLHTTPObject: function () {
        for (var e, t = [
                function () {
                    return new XMLHttpRequest
                },
                function () {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                },
                function () {
                    return new ActiveXObject("Msxml3.XMLHTTP")
                },
                function () {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                }
            ], n = 0; n < t.length; n++) try {
            return e = t[n](), this.createXMLHTTPObject = t[n], e
        } catch (r) {}
    },
    getSource: function (e) {
        return e in this.sourceCache || (this.sourceCache[e] = this.ajax(e).split("\n")), this.sourceCache[e]
    },
    guessFunctions: function (e) {
        for (var t = 0; t < e.length; ++t) {
            var n = e[t],
                r = /{anonymous}\(.*\)@(\w+:\/\/([-\w\.]+)+(:\d+)?[^:]+):(\d+):?(\d+)?/.exec(n);
            if (r) {
                var i = r[1];
                r = r[4], i && r && (i = this.guessFunctionName(i, r), e[t] = n.replace("{anonymous}", i))
            }
        }
        return e
    },
    guessFunctionName: function (e, t) {
        try {
            return this.guessFunctionNameFromLines(t, this.getSource(e))
        } catch (n) {
            return "getSource failed with url: " + e + ", exception: " + n.toString()
        }
    },
    guessFunctionNameFromLines: function (e, t) {
        for (var n = /function ([^(]*)\(([^)]*)\)/, r = /['"]?([0-9A-Za-z_]+)['"]?\s*[:=]\s*(function|eval|new Function)/, i = "", s = 0; s < 10; ++s) {
            i = t[e - s] + i;
            if (i !== undefined) {
                var o = r.exec(i);
                if (o && o[1]) return o[1];
                if ((o = n.exec(i)) && o[1]) return o[1]
            }
        }
        return "(?)"
    }
},
function (e) {
    var t, n, r = 1,
        i, s = this,
        o = !1,
        u = "postMessage",
        a = "addEventListener",
        f, l = s[u] && !e.browser.opera;
    e[u] = function (t, n, i) {
        if (!n) return;
        t = typeof t == "string" ? t : e.param(t), i = i || parent, l ? i[u](t, n.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : n && (i.location = n.replace(/#.*$/, "") + "#" + +(new Date) + r+++"&" + t)
    }, e.receiveMessage = f = function (r, u, h) {
        l ? (r && (i && f(), i = function (t) {
            if (typeof u == "string" && t.origin !== u || e.isFunction(u) && u(t.origin) === o) return o;
            r(t)
        }), s[a] ? s[r ? a : "removeEventListener"]("message", i, o) : s[r ? "attachEvent" : "detachEvent"]("onmessage", i)) : (t && clearInterval(t), t = null, r && (h = typeof u == "number" ? u : typeof h == "number" ? h : 100, t = setInterval(function () {
            var e = document.location.hash,
                t = /^#?\d+&/;
            e !== n && t.test(e) && (n = e, r({
                data: e.replace(t, "")
            }))
        }, h)))
    }
}(jQuery),
function (e) {
    e.backstretch = function (t, n, r) {
        function i() {
            if (t) {
                var n;
                0 == u.length ? u = e("<div />").attr("id", "backstretch").css({
                    left: 0,
                    top: 0,
                    position: l ? "fixed" : "absolute",
                    overflow: "hidden",
                    zIndex: -999999,
                    margin: 0,
                    padding: 0,
                    height: "100%",
                    width: "100%"
                }) : u.find("img").addClass("deleteable"), n = e("<img />").css({
                    position: "absolute",
                    display: "none",
                    margin: 0,
                    padding: 0,
                    border: "none",
                    zIndex: -999999,
                    maxWidth: "none"
                }).bind("load", function (t) {
                    var n = e(this),
                        i;
                    n.css({
                        width: "auto",
                        height: "auto"
                    }), i = this.width || e(t.target).width(), t = this.height || e(t.target).height(), h = i / t, s(), n.fadeIn(a.speed, function () {
                        u.find(".deleteable").remove(), "function" == typeof r && r()
                    })
                }).appendTo(u), 0 == e("body #backstretch").length && (0 === e(window).scrollTop() && window.scrollTo(0, 0), e("body").append(u)), u.data("settings", a), n.attr("src", t), e(window).unbind("resize.backstretch").bind("resize.backstretch", function () {
                    "onorientationchange" in window && window.pageYOffset === 0 && window.scrollTo(0, 1), s()
                })
            }
        }

        function s() {
            try {
                m = {
                    left: 0,
                    top: 0
                }, rootWidth = p = f.width(), rootHeight = c ? window.innerHeight : f.height(), d = p / h, d >= rootHeight ? (v = (d - rootHeight) / 2, a.centeredY && (m.top = "-" + v + "px")) : (d = rootHeight, p = d * h, v = (p - rootWidth) / 2, a.centeredX && (m.left = "-" + v + "px")), u.css({
                    width: rootWidth,
                    height: rootHeight
                }).find("img:not(.deleteable)").css({
                    width: p,
                    height: d
                }).css(m)
            } catch (e) {}
        }
        var o = {
            centeredX: !0,
            centeredY: !0,
            speed: 0
        }, u = e("#backstretch"),
            a = u.data("settings") || o;
        u.data("settings");
        var f, l, c, h, p, d, v, m;
        return n && "object" == typeof n && e.extend(a, n), n && "function" == typeof n && (r = n), e(document).ready(function () {
            var t = window,
                n = navigator.userAgent,
                r = navigator.platform,
                s = n.match(/AppleWebKit\/([0-9]+)/),
                s = !! s && s[1],
                o = n.match(/Fennec\/([0-9]+)/),
                o = !! o && o[1],
                u = n.match(/Opera Mobi\/([0-9]+)/),
                a = !! u && u[1],
                h = n.match(/MSIE ([0-9]+)/),
                h = !! h && h[1];
            f = (l = !((-1 < r.indexOf("iPhone") || -1 < r.indexOf("iPad") || -1 < r.indexOf("iPod")) && s && 534 > s || t.operamini && "[object OperaMini]" === {}.toString.call(t.operamini) || u && 7458 > a || -1 < n.indexOf("Android") && s && 533 > s || o && 6 > o || "palmGetResource" in window && s && 534 > s || -1 < n.indexOf("MeeGo") && -1 < n.indexOf("NokiaBrowser/8.5.0") || h && 6 >= h)) ? e(window) : e(document), c = l && window.innerHeight, i()
        }), this
    }
}(jQuery),
function (e, t, n) {
    function r(t) {
        if (!Z) {
            J = t, o(), M = e(J), K = 0, z.rel !== "nofollow" && (M = e("." + p).filter(function () {
                var t = e.data(this, c).rel || this.rel;
                return t === z.rel
            }), K = M.index(J), K === -1 && (M = M.add(J), K = M.length - 1));
            if (!G) {
                G = Y = !0, T.show();
                if (z.returnFocus) try {
                    J.blur(), e(J).one(y, function () {
                        try {
                            this.focus()
                        } catch (e) {}
                    })
                } catch (n) {}
                x.css({
                    opacity: +z.opacity,
                    cursor: z.overlayClose ? "pointer" : "auto"
                }).show(), z.w = a(z.initialWidth, "x"), z.h = a(z.initialHeight, "y"), nt.position(), E && _.bind("resize." + S + " scroll." + S, function () {
                    x.css({
                        width: _.width(),
                        height: _.height(),
                        top: _.scrollTop(),
                        left: _.scrollLeft()
                    })
                }).trigger("resize." + S), s(d, z.onOpen), U.add(B).hide(), R.html(z.close).show()
            }
            nt.load(!0)
        }
    }

    function i() {
        var e, t = h + "Slideshow_",
            n = "click." + h,
            r, i, s;
        z.slideshow && M[1] ? (r = function () {
            F.text(z.slideshowStop).unbind(n).bind(m, function () {
                if (K < M.length - 1 || z.loop) e = setTimeout(nt.next, z.slideshowSpeed)
            }).bind(v, function () {
                clearTimeout(e)
            }).one(n + " " + g, i), T.removeClass(t + "off").addClass(t + "on"), e = setTimeout(nt.next, z.slideshowSpeed)
        }, i = function () {
            clearTimeout(e), F.text(z.slideshowStart).unbind([m, v, g, n].join(" ")).one(n, r), T.removeClass(t + "on").addClass(t + "off")
        }, z.slideshowAuto ? r() : i()) : T.removeClass(t + "off " + t + "on")
    }

    function s(t, n) {
        n && n.call(J), e.event.trigger(t)
    }

    function o(t) {
        z = e.extend({}, e.data(J, c));
        for (t in z) e.isFunction(z[t]) && t.substring(0, 2) !== "on" && (z[t] = z[t].call(J));
        z.rel = z.rel || J.rel || "nofollow", z.href = z.href || e(J).attr("href"), z.title = z.title || J.title, typeof z.href == "string" && (z.href = e.trim(z.href))
    }

    function u(e) {
        return z.photo || /\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i.test(e)
    }

    function a(e, t) {
        return Math.round((/%/.test(e) ? (t === "x" ? _.width() : _.height()) / 100 : 1) * parseInt(e, 10))
    }

    function f(n, r, i) {
        return i = t.createElement("div"), n && (i.id = h + n), i.style.cssText = r || "", e(i)
    }
    var l = {
        transition: "elastic",
        speed: 300,
        width: !1,
        initialWidth: "600",
        innerWidth: !1,
        maxWidth: !1,
        height: !1,
        initialHeight: "450",
        innerHeight: !1,
        maxHeight: !1,
        scalePhotos: !0,
        scrolling: !0,
        inline: !1,
        html: !1,
        iframe: !1,
        fastIframe: !0,
        photo: !1,
        href: !1,
        title: !1,
        rel: !1,
        opacity: .9,
        preloading: !0,
        current: "image {current} of {total}",
        previous: "previous",
        next: "next",
        close: "close",
        open: !1,
        returnFocus: !0,
        loop: !0,
        slideshow: !1,
        slideshowAuto: !0,
        slideshowSpeed: 2500,
        slideshowStart: "start slideshow",
        slideshowStop: "stop slideshow",
        onOpen: !1,
        onLoad: !1,
        onComplete: !1,
        onCleanup: !1,
        onClosed: !1,
        overlayClose: !0,
        escKey: !0,
        arrowKey: !0,
        top: !1,
        bottom: !1,
        left: !1,
        right: !1,
        fixed: !1,
        data: !1
    }, c = "colorbox",
        h = "cbox",
        p = h + "Element",
        d = h + "_open",
        v = h + "_load",
        m = h + "_complete",
        g = h + "_cleanup",
        y = h + "_closed",
        b = h + "_purge",
        w = e.browser.msie && !e.support.opacity,
        E = w && e.browser.version < 7,
        S = h + "_IE6",
        x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q, R, U, z, W, X, V, $, J, K, Q, G, Y, Z, et, tt, nt;
    nt = e.fn[c] = e[c] = function (t, n) {
        var i = this;
        t = t || {};
        if (!i[0]) {
            if (i.selector) return i;
            i = e("<a/>"), t.open = !0
        }
        return n && (t.onComplete = n), i.each(function () {
            e.data(this, c, e.extend({}, e.data(this, c) || l, t)), e(this).addClass(p)
        }), (e.isFunction(t.open) && t.open.call(i) || t.open) && r(i[0]), i
    }, nt.init = function () {
        _ = e(n), T = f().attr({
            id: c,
            "class": w ? h + (E ? "IE6" : "IE") : ""
        }), x = f("Overlay", E ? "position:absolute" : "").hide(), N = f("Wrapper"), C = f("Content").append(D = f("LoadedContent", "width:0; height:0; overflow:hidden"), H = f("LoadingOverlay").add(f("LoadingGraphic")), B = f("Title"), j = f("Current"), I = f("Next"), q = f("Previous"), F = f("Slideshow").bind(d, i), R = f("Close")), N.append(f().append(f("TopLeft"), k = f("TopCenter"), f("TopRight")), f(!1, "clear:left").append(L = f("MiddleLeft"), C, A = f("MiddleRight")), f(!1, "clear:left").append(f("BottomLeft"), O = f("BottomCenter"), f("BottomRight"))).children().children().css({
            "float": "left"
        }), P = f(!1, "position:absolute; width:9999px; visibility:hidden; display:none"), e("body").prepend(x, T.append(N, P)), C.children().hover(function () {
            e(this).addClass("hover")
        }, function () {
            e(this).removeClass("hover")
        }).addClass("hover"), W = k.height() + O.height() + C.outerHeight(!0) - C.height(), X = L.width() + A.width() + C.outerWidth(!0) - C.width(), V = D.outerHeight(!0), $ = D.outerWidth(!0), T.css({
            "padding-bottom": W,
            "padding-right": X
        }).hide(), I.click(function () {
            nt.next()
        }), q.click(function () {
            nt.prev()
        }), R.click(function () {
            nt.close()
        }), U = I.add(q).add(j).add(F), C.children().removeClass("hover"), x.click(function () {
            z.overlayClose && nt.close()
        }), e(t).bind("keydown." + h, function (e) {
            var t = e.keyCode;
            G && z.escKey && t === 27 && (e.preventDefault(), nt.close()), G && z.arrowKey && M[1] && (t === 37 ? (e.preventDefault(), q.click()) : t === 39 && (e.preventDefault(), I.click()))
        })
    }, nt.remove = function () {
        T.add(x).remove(), e("." + p).removeData(c).removeClass(p)
    }, nt.position = function (e, n) {
        function r(e) {
            k[0].style.width = O[0].style.width = C[0].style.width = e.style.width, H[0].style.height = H[1].style.height = C[0].style.height = L[0].style.height = A[0].style.height = e.style.height
        }
        var i = 0,
            s = 0;
        _.unbind("resize." + h), T.hide(), z.fixed && !E ? T.css({
            position: "fixed"
        }) : (i = _.scrollTop(), s = _.scrollLeft(), T.css({
            position: "absolute"
        })), z.right !== !1 ? s += Math.max(_.width() - z.w - $ - X - a(z.right, "x"), 0) : z.left !== !1 ? s += a(z.left, "x") : s += Math.round(Math.max(_.width() - z.w - $ - X, 0) / 2), z.bottom !== !1 ? i += Math.max(t.documentElement.clientHeight - z.h - V - W - a(z.bottom, "y"), 0) : z.top !== !1 ? i += a(z.top, "y") : i += Math.round(Math.max(t.documentElement.clientHeight - z.h - V - W, 0) / 2), T.show(), e = T.width() === z.w + $ && T.height() === z.h + V ? 0 : e || 0, N[0].style.width = N[0].style.height = "9999px", T.dequeue().animate({
            width: z.w + $,
            height: z.h + V,
            top: i,
            left: s
        }, {
            duration: e,
            complete: function () {
                r(this), Y = !1, N[0].style.width = z.w + $ + X + "px", N[0].style.height = z.h + V + W + "px", n && n(), setTimeout(function () {
                    _.bind("resize." + h, nt.position)
                }, 1)
            },
            step: function () {
                r(this)
            }
        })
    }, nt.resize = function (e) {
        if (G) {
            e = e || {}, e.width && (z.w = a(e.width, "x") - $ - X), e.innerWidth && (z.w = a(e.innerWidth, "x")), D.css({
                width: z.w
            }), e.height && (z.h = a(e.height, "y") - V - W), e.innerHeight && (z.h = a(e.innerHeight, "y"));
            if (!e.innerHeight && !e.height) {
                var t = D.wrapInner("<div style='overflow:auto'></div>").children();
                z.h = t.height(), t.replaceWith(t.children())
            }
            D.css({
                height: z.h
            }), nt.position(z.transition === "none" ? 0 : z.speed)
        }
    }, nt.prep = function (t) {
        function n() {
            return z.h = z.h || D.height(), z.h = z.mh && z.mh < z.h ? z.mh : z.h, z.h
        }

        function r() {
            return z.w = z.w || D.width(), z.w = z.mw && z.mw < z.w ? z.mw : z.w, z.w
        }
        if ( !! G) {
            var i, o = z.transition === "none" ? 0 : z.speed;
            D.remove(), D = f("LoadedContent").append(t), D.hide().appendTo(P.show()).css({
                width: r(),
                overflow: z.scrolling ? "auto" : "hidden"
            }).css({
                height: n()
            }).prependTo(C), P.hide(), e(Q).css({
                "float": "none"
            }), E && e("select").not(T.find("select")).filter(function () {
                return this.style.visibility !== "hidden"
            }).css({
                visibility: "hidden"
            }).one(g, function () {
                this.style.visibility = "inherit"
            }), i = function () {
                function t() {
                    w && T[0].style.removeAttribute("filter")
                }
                var n, r, i, a, f = M.length,
                    l, p;
                !G || (p = function () {
                    clearTimeout(tt), H.hide(), s(m, z.onComplete)
                }, w && Q && D.fadeIn(100), B.html(z.title).add(D).show(), f > 1 ? (typeof z.current == "string" && j.html(z.current.replace("{current}", K + 1).replace("{total}", f)).show(), I[z.loop || K < f - 1 ? "show" : "hide"]().html(z.next), q[z.loop || K ? "show" : "hide"]().html(z.previous), n = K ? M[K - 1] : M[f - 1], i = K < f - 1 ? M[K + 1] : M[0], z.slideshow && F.show(), z.preloading && (a = e.data(i, c).href || i.href, r = e.data(n, c).href || n.href, a = e.isFunction(a) ? a.call(i) : a, r = e.isFunction(r) ? r.call(n) : r, u(a) && (e("<img/>")[0].src = a), u(r) && (e("<img/>")[0].src = r))) : U.hide(), z.iframe ? (l = e("<iframe/>").addClass(h + "Iframe")[0], z.fastIframe ? p() : e(l).one("load", p), l.name = h + +(new Date), l.src = z.href, z.scrolling || (l.scrolling = "no"), w && (l.frameBorder = 0, l.allowTransparency = "true"), e(l).appendTo(D).one(b, function () {
                    l.src = "//about:blank"
                })) : p(), z.transition === "fade" ? T.fadeTo(o, 1, t) : t())
            }, z.transition === "fade" ? T.fadeTo(o, 0, function () {
                nt.position(0, i)
            }) : nt.position(o, i)
        }
    }, nt.load = function (t) {
        var n, r, i = nt.prep;
        Y = !0, Q = !1, J = M[K], t || o(), s(b), s(v, z.onLoad), z.h = z.height ? a(z.height, "y") - V - W : z.innerHeight && a(z.innerHeight, "y"), z.w = z.width ? a(z.width, "x") - $ - X : z.innerWidth && a(z.innerWidth, "x"), z.mw = z.w, z.mh = z.h, z.maxWidth && (z.mw = a(z.maxWidth, "x") - $ - X, z.mw = z.w && z.w < z.mw ? z.w : z.mw), z.maxHeight && (z.mh = a(z.maxHeight, "y") - V - W, z.mh = z.h && z.h < z.mh ? z.h : z.mh), n = z.href, tt = setTimeout(function () {
            H.show()
        }, 100), z.inline ? (f().hide().insertBefore(e(n)[0]).one(b, function () {
            e(this).replaceWith(D.children())
        }), i(e(n))) : z.iframe ? i(" ") : z.html ? i(z.html) : u(n) ? (e(Q = new Image).addClass(h + "Photo").error(function () {
            z.title = !1, i(f("Error").text("This image could not be loaded"))
        }).load(function () {
            var e;
            Q.onload = null, z.scalePhotos && (r = function () {
                Q.height -= Q.height * e, Q.width -= Q.width * e
            }, z.mw && Q.width > z.mw && (e = (Q.width - z.mw) / Q.width, r()), z.mh && Q.height > z.mh && (e = (Q.height - z.mh) / Q.height, r())), z.h && (Q.style.marginTop = Math.max(z.h - Q.height, 0) / 2 + "px"), M[1] && (K < M.length - 1 || z.loop) && (Q.style.cursor = "pointer", Q.onclick = function () {
                nt.next()
            }), w && (Q.style.msInterpolationMode = "bicubic"), setTimeout(function () {
                i(Q)
            }, 1)
        }), setTimeout(function () {
            Q.src = n
        }, 1)) : n && P.load(n, z.data, function (t, n, r) {
            i(n === "error" ? f("Error").text("Request unsuccessful: " + r.statusText) : e(this).contents())
        })
    }, nt.next = function () {
        !Y && M[1] && (K < M.length - 1 || z.loop) && (K = K < M.length - 1 ? K + 1 : 0, nt.load())
    }, nt.prev = function () {
        !Y && M[1] && (K || z.loop) && (K = K ? K - 1 : M.length - 1, nt.load())
    }, nt.close = function () {
        G && !Z && (Z = !0, G = !1, s(g, z.onCleanup), _.unbind("." + h + " ." + S), x.fadeTo(200, 0), T.stop().fadeTo(300, 0, function () {
            T.add(x).css({
                opacity: 1,
                cursor: "auto"
            }).hide(), s(b), D.remove(), setTimeout(function () {
                Z = !1, s(y, z.onClosed)
            }, 1)
        }))
    }, nt.element = function () {
        return e(J)
    }, nt.settings = l, et = function (e) {
        e.button !== 0 && typeof e.button != "undefined" || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), r(this))
    }, e.fn.delegate ? e(t).delegate("." + p, "click", et) : e("." + p).live("click", et), e(nt.init)
}(jQuery, document, this),
function (e) {
    var t = {
        navigate: function (t, n, r, i, s) {
            var o = i.scroll,
                u = 1,
                a = 0;
            s.expanded && (o = 1, u = 3, a = s.idxClicked);
            if (t === 1) r.find("div.ca-item:lt(" + o + ")").each(function (t) {
                e(this).clone(!0).css("left", (s.totalItems - a + t) * s.itemW * u + "px").appendTo(r)
            });
            else {
                var f = r.children().eq(0);
                r.find("div.ca-item:gt(" + (s.totalItems - 1 - o) + ")").each(function (t) {
                    e(this).clone(!0).css("left", -(o - t + a) * s.itemW * u + "px").insertBefore(f)
                })
            }
            r.find("div.ca-item").each(function (n) {
                var r = e(this);
                r.stop().animate({
                    left: t === 1 ? "-=" + s.itemW * u * o + "px" : "+=" + s.itemW * u * o + "px"
                }, i.sliderSpeed, i.sliderEasing, function () {
                    (t === 1 && r.position().left < -a * s.itemW * u || t === -1 && r.position().left > (s.totalItems - 1 - a) * s.itemW * u) && r.remove(), s.isAnimating = !1
                })
            })
        },
        openItem: function (e, n, r, i) {
            i.idxClicked = n.index(), i.winpos = t.getWinPos(n.position().left, i), e.find("div.ca-item").not(n).hide(), n.find("div.ca-content-wrapper").css("left", i.itemW + "px").stop().animate({
                width: i.itemW * 2 + "px",
                left: i.itemW + "px"
            }, r.itemSpeed, r.itemEasing).end().stop().animate({
                left: "0px"
            }, r.itemSpeed, r.itemEasing, function () {
                i.isAnimating = !1, i.expanded = !0, t.openItems(e, n, r, i)
            })
        },
        openItems: function (n, r, i, s) {
            var o = r.index();
            n.find("div.ca-item").each(function (n) {
                var r = e(this),
                    i = r.index();
                i !== o && (r.css("left", -(o - i) * s.itemW * 3 + "px").show().find("div.ca-content-wrapper").css({
                    left: s.itemW + "px",
                    width: s.itemW * 2 + "px"
                }), t.toggleMore(r, !1))
            })
        },
        toggleMore: function (e, t) {
            t ? e.find("a.ca-more").show() : e.find("a.ca-more").hide()
        },
        closeItems: function (n, r, i, s) {
            var o = r.index();
            r.find("div.ca-content-wrapper").stop().animate({
                width: "0px"
            }, i.itemSpeed, i.itemEasing).end().stop().animate({
                left: s.itemW * (s.winpos - 1) + "px"
            }, i.itemSpeed, i.itemEasing, function () {
                s.isAnimating = !1, s.expanded = !1
            }), t.toggleMore(r, !0), n.find("div.ca-item").each(function (n) {
                var r = e(this),
                    i = r.index();
                i !== o && (r.find("div.ca-content-wrapper").css({
                    width: "0px"
                }).end().css("left", (s.winpos - 1 - (o - i)) * s.itemW + "px").show(), t.toggleMore(r, !0))
            })
        },
        getWinPos: function (e, t) {
            switch (e) {
            case 0:
                return 1;
            case t.itemW:
                return 2;
            case t.itemW * 2:
                return 3
            }
        }
    }, n = {
            init: function (n) {
                if (this.length) {
                    var r = {
                        sliderSpeed: 500,
                        sliderEasing: "easeOutExpo",
                        itemSpeed: 500,
                        itemEasing: "easeOutExpo",
                        scroll: 1
                    };
                    return this.each(function () {
                        n && e.extend(r, n);
                        var i = e(this),
                            s = i.find("div.ca-wrapper"),
                            o = s.children("div.ca-item"),
                            u = {};
                        u.itemW = o.width(), u.totalItems = o.length, u.totalItems > 3 && i.prepend('<div class="ca-nav"><span class="ca-nav-prev">Previous</span><span class="ca-nav-next">Next</span></div>'), r.scroll < 1 ? r.scroll = 1 : r.scroll > 3 && (r.scroll = 3);
                        var a = i.find("span.ca-nav-prev"),
                            f = i.find("span.ca-nav-next");
                        s.css("overflow", "hidden"), o.each(function (t) {
                            e(this).css({
                                position: "absolute",
                                left: t * u.itemW + "px"
                            })
                        }), i.find("a.ca-more").live("click.contentcarousel", function (n) {
                            if (u.isAnimating) return !1;
                            u.isAnimating = !0, e(this).hide();
                            var i = e(this).closest("div.ca-item");
                            return t.openItem(s, i, r, u), !1
                        }), i.find("a.ca-close").live("click.contentcarousel", function (n) {
                            if (u.isAnimating) return !1;
                            u.isAnimating = !0;
                            var i = e(this).closest("div.ca-item");
                            return t.closeItems(s, i, r, u), !1
                        }), a.bind("click.contentcarousel", function (e) {
                            if (u.isAnimating) return !1;
                            u.isAnimating = !0, t.navigate(-1, i, s, r, u)
                        }), f.bind("click.contentcarousel", function (e) {
                            if (u.isAnimating) return !1;
                            u.isAnimating = !0, t.navigate(1, i, s, r, u)
                        })
                    })
                }
            }
        };
    e.fn.contentcarousel = function (t) {
        if (n[t]) return n[t].apply(this, Array.prototype.slice.call(arguments, 1));
        if (typeof t == "object" || !t) return n.init.apply(this, arguments);
        e.error("Method " + t + " does not exist on jQuery.contentcarousel")
    }
}(jQuery),
function (e) {
    "use strict";

    function n(t, r, i, s) {
        function c(e) {
            e.timeout && (o.cycleTimeout = setTimeout(function () {
                n(t, e, 0, !e.rev)
            }, e.timeout))
        }
        if (r.busy) return;
        var o = t[0].parentNode,
            u = t[r.currSlide],
            a = t[r.nextSlide];
        if (o.cycleTimeout === 0 && !i) return;
        if (i || !o.cyclePause) {
            r.before.length && e.each(r.before, function (e, t) {
                t.apply(a, [u, a, r, s])
            });
            var f = function () {
                e.browser.msie && this.style.removeAttribute("filter"), e.each(r.after, function (e, t) {
                    t.apply(a, [u, a, r, s])
                }), c(r)
            };
            r.nextSlide != r.currSlide && (r.busy = 1, e.fn.cycle.custom(u, a, r, f));
            var l = r.nextSlide + 1 == t.length;
            r.nextSlide = l ? 0 : r.nextSlide + 1, r.currSlide = l ? t.length - 1 : r.nextSlide - 1
        } else c(r)
    }

    function r(e, t, r) {
        var i = e[0].parentNode,
            s = i.cycleTimeout;
        return s && (clearTimeout(s), i.cycleTimeout = 0), t.nextSlide = t.currSlide + r, t.nextSlide < 0 ? t.nextSlide = e.length - 1 : t.nextSlide >= e.length && (t.nextSlide = 0), n(e, t, 1, r >= 0), !1
    }
    var t = "Lite-1.6";
    e.fn.cycle = function (t) {
        return this.each(function () {
            t = t || {}, this.cycleTimeout && clearTimeout(this.cycleTimeout), this.cycleTimeout = 0, this.cyclePause = 0;
            var i = e(this),
                s = t.slideExpr ? e(t.slideExpr, this) : i.children(),
                o = s.get();
            if (o.length < 2) {
                window.console && console.log("terminating; too few slides: " + o.length);
                return
            }
            var u = e.extend({}, e.fn.cycle.defaults, t || {}, e.metadata ? i.metadata() : e.meta ? i.data() : {}),
                a = e.isFunction(i.data) ? i.data(u.metaAttr) : null;
            a && (u = e.extend(u, a)), u.before = u.before ? [u.before] : [], u.after = u.after ? [u.after] : [], u.after.unshift(function () {
                u.busy = 0
            });
            var f = this.className;
            u.width = parseInt((f.match(/w:(\d+)/) || [])[1], 10) || u.width, u.height = parseInt((f.match(/h:(\d+)/) || [])[1], 10) || u.height, u.timeout = parseInt((f.match(/t:(\d+)/) || [])[1], 10) || u.timeout, i.css("position") == "static" && i.css("position", "relative"), u.width && i.width(u.width), u.height && u.height != "auto" && i.height(u.height);
            var l = 0;
            s.css({
                position: "absolute",
                top: 0
            }).each(function (t) {
                e(this).css("z-index", o.length - t)
            }), e(o[l]).css("opacity", 1).show(), e.browser.msie && o[l].style.removeAttribute("filter"), u.fit && u.width && s.width(u.width), u.fit && u.height && u.height != "auto" && s.height(u.height), u.pause && i.hover(function () {
                this.cyclePause = 1
            }, function () {
                this.cyclePause = 0
            });
            var c = e.fn.cycle.transitions[u.fx];
            c && c(i, s, u), s.each(function () {
                var t = e(this);
                this.cycleH = u.fit && u.height ? u.height : t.height(), this.cycleW = u.fit && u.width ? u.width : t.width()
            }), u.cssFirst && e(s[l]).css(u.cssFirst);
            if (u.timeout) {
                u.speed.constructor == String && (u.speed = {
                    slow: 600,
                    fast: 200
                }[u.speed] || 400), u.sync || (u.speed = u.speed / 2);
                while (u.timeout - u.speed < 250) u.timeout += u.speed
            }
            u.speedIn = u.speed, u.speedOut = u.speed, u.slideCount = o.length, u.currSlide = l, u.nextSlide = 1;
            var h = s[l];
            u.before.length && u.before[0].apply(h, [h, h, u, !0]), u.after.length > 1 && u.after[1].apply(h, [h, h, u, !0]), u.click && !u.next && (u.next = u.click), u.next && e(u.next).unbind("click.cycle").bind("click.cycle", function () {
                return r(o, u, u.rev ? -1 : 1)
            }), u.prev && e(u.prev).unbind("click.cycle").bind("click.cycle", function () {
                return r(o, u, u.rev ? 1 : -1)
            }), u.timeout && (this.cycleTimeout = setTimeout(function () {
                n(o, u, 0, !u.rev)
            }, u.timeout + (u.delay || 0)))
        })
    }, e.fn.cycle.custom = function (t, n, r, i) {
        var s = e(t),
            o = e(n);
        o.css(r.cssBefore);
        var u = function () {
            o.animate(r.animIn, r.speedIn, r.easeIn, i)
        };
        s.animate(r.animOut, r.speedOut, r.easeOut, function () {
            s.css(r.cssAfter), r.sync || u()
        }), r.sync && u()
    }, e.fn.cycle.transitions = {
        fade: function (e, t, n) {
            t.not(":eq(0)").hide(), n.cssBefore = {
                opacity: 0,
                display: "block"
            }, n.cssAfter = {
                display: "none"
            }, n.animOut = {
                opacity: 0
            }, n.animIn = {
                opacity: 1
            }
        },
        fadeout: function (t, n, r) {
            r.before.push(function (t, n, r, i) {
                e(t).css("zIndex", r.slideCount + (i === !0 ? 1 : 0)), e(n).css("zIndex", r.slideCount + (i === !0 ? 0 : 1))
            }), n.not(":eq(0)").hide(), r.cssBefore = {
                opacity: 1,
                display: "block",
                zIndex: 1
            }, r.cssAfter = {
                display: "none",
                zIndex: 0
            }, r.animOut = {
                opacity: 0
            }, r.animIn = {
                opacity: 1
            }
        }
    }, e.fn.cycle.ver = function () {
        return t
    }, e.fn.cycle.defaults = {
        animIn: {},
        animOut: {},
        fx: "fade",
        after: null,
        before: null,
        cssBefore: {},
        cssAfter: {},
        delay: 0,
        fit: 0,
        height: "auto",
        metaAttr: "cycle",
        next: null,
        pause: !1,
        prev: null,
        speed: 1e3,
        slideExpr: null,
        sync: !0,
        timeout: 4e3
    }
}(jQuery),
function (e, t, n) {
    "use strict";
    var r = t.Modernizr,
        i = e("body");
    e.DLMenu = function (t, n) {
        this.$el = e(n), this._init(t)
    }, e.DLMenu.defaults = {
        animationClasses: {
            classin: "dl-animate-in-1",
            classout: "dl-animate-out-1"
        },
        onLevelClick: function (e, t) {
            return !1
        },
        onLinkClick: function (e, t) {
            return !1
        }
    }, e.DLMenu.prototype = {
        _init: function (t) {
            this.options = e.extend(!0, {}, e.DLMenu.defaults, t), this._config();
            var n = {
                WebkitAnimation: "webkitAnimationEnd",
                OAnimation: "oAnimationEnd",
                msAnimation: "MSAnimationEnd",
                animation: "animationend"
            }, i = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    msTransition: "MSTransitionEnd",
                    transition: "transitionend"
                };
            this.animEndEventName = n[r.prefixed("animation")] + ".dlmenu", this.transEndEventName = i[r.prefixed("transition")] + ".dlmenu", this.supportAnimations = r.cssanimations, this.supportTransitions = r.csstransitions, this._initEvents()
        },
        _config: function () {
            this.open = !1, this.$trigger = this.$el.children(".dl-trigger"), this.$menu = this.$el.children("ul.dl-menu"), this.$menuitems = this.$menu.find("li:not(.dl-back)"), this.$el.find("ul.dl-submenu").prepend('<li class="dl-back"><a href="#">back</a></li>'), this.$back = this.$menu.find("li.dl-back")
        },
        _initEvents: function () {
            var t = this;
            this.$trigger.on("click.dlmenu", function () {
                return t.open ? t._closeMenu() : t._openMenu(), !1
            }), this.$menuitems.on("click.dlmenu", function (n) {
                n.stopPropagation();
                var r = e(this),
                    i = r.children("ul.dl-submenu");
                if (i.length > 0) {
                    var s = i.clone().css("opacity", 0).insertAfter(t.$menu),
                        o = function () {
                            t.$menu.off(t.animEndEventName).removeClass(t.options.animationClasses.classout).addClass("dl-subview"), r.addClass("dl-subviewopen").parents(".dl-subviewopen:first").removeClass("dl-subviewopen").addClass("dl-subview"), s.remove()
                        };
                    return setTimeout(function () {
                        s.addClass(t.options.animationClasses.classin), t.$menu.addClass(t.options.animationClasses.classout), t.supportAnimations ? t.$menu.on(t.animEndEventName, o) : o.call(), t.options.onLevelClick(r, r.children("a:first").text())
                    }), !1
                }
                t.options.onLinkClick(r, n)
            }), this.$back.on("click.dlmenu", function (n) {
                var r = e(this),
                    i = r.parents("ul.dl-submenu:first"),
                    s = i.parent(),
                    o = i.clone().insertAfter(t.$menu),
                    u = function () {
                        t.$menu.off(t.animEndEventName).removeClass(t.options.animationClasses.classin), o.remove()
                    };
                return setTimeout(function () {
                    o.addClass(t.options.animationClasses.classout), t.$menu.addClass(t.options.animationClasses.classin), t.supportAnimations ? t.$menu.on(t.animEndEventName, u) : u.call(), s.removeClass("dl-subviewopen");
                    var e = r.parents(".dl-subview:first");
                    e.is("li") && e.addClass("dl-subviewopen"), e.removeClass("dl-subview")
                }), !1
            })
        },
        closeMenu: function () {
            this.open && this._closeMenu()
        },
        _closeMenu: function () {
            var e = this,
                t = function () {
                    e.$menu.off(e.transEndEventName), e._resetMenu()
                };
            this.$menu.removeClass("dl-menuopen"), this.$menu.addClass("dl-menu-toggle"), this.$trigger.removeClass("dl-active"), this.supportTransitions ? this.$menu.on(this.transEndEventName, t) : t.call(), this.open = !1
        },
        openMenu: function () {
            this.open || this._openMenu()
        },
        _openMenu: function () {
            var t = this;
            i.off("click").on("click.dlmenu", function () {
                t._closeMenu()
            }), this.$menu.addClass("dl-menuopen dl-menu-toggle").on(this.transEndEventName, function () {
                e(this).removeClass("dl-menu-toggle")
            }), this.$trigger.addClass("dl-active"), this.open = !0
        },
        _resetMenu: function () {
            this.$menu.removeClass("dl-subview"), this.$menuitems.removeClass("dl-subview dl-subviewopen")
        }
    };
    var s = function (e) {
        t.console && t.console.error(e)
    };
    e.fn.dlmenu = function (t) {
        if (typeof t == "string") {
            var n = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var r = e.data(this, "dlmenu");
                if (!r) {
                    s("cannot call methods on dlmenu prior to initialization; attempted to call method '" + t + "'");
                    return
                }
                if (!e.isFunction(r[t]) || t.charAt(0) === "_") {
                    s("no such method '" + t + "' for dlmenu instance");
                    return
                }
                r[t].apply(r, n)
            })
        } else this.each(function () {
            var n = e.data(this, "dlmenu");
            n ? n._init() : n = e.data(this, "dlmenu", new e.DLMenu(t, this))
        });
        return this
    }
}(jQuery, window), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeInQuad: function (e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeOutQuad: function (e, t, n, r, i) {
        return -r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function (e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    },
    easeOutCubic: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function (e, t, n, r, i) {
        return -r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function (e, t, n, r, i) {
        return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function (e, t, n, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function (e, t, n, r, i) {
        return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function (e, t, n, r, i) {
        return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function (e, t, n, r, i) {
        return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function (e, t, n, r, i) {
        return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function (e, t, n, r, i) {
        return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function (e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function (e, t, n, r, i) {
        var s = 1.70158,
            o = 0,
            u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        o || (o = i * .3);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
    },
    easeOutElastic: function (e, t, n, r, i) {
        var s = 1.70158,
            o = 0,
            u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        o || (o = i * .3);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
    },
    easeInOutElastic: function (e, t, n, r, i) {
        var s = 1.70158,
            o = 0,
            u = r;
        if (t == 0) return n;
        if ((t /= i / 2) == 2) return n + r;
        o || (o = i * .3 * 1.5);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return t < 1 ? -0.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
    },
    easeInBack: function (e, t, n, r, i, s) {
        return s == undefined && (s = 1.70158), r * (t /= i) * t * ((s + 1) * t - s) + n
    },
    easeOutBack: function (e, t, n, r, i, s) {
        return s == undefined && (s = 1.70158), r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
    },
    easeInOutBack: function (e, t, n, r, i, s) {
        return s == undefined && (s = 1.70158), (t /= i / 2) < 1 ? r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
    },
    easeInBounce: function (e, t, n, r, i) {
        return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
    },
    easeOutBounce: function (e, t, n, r, i) {
        return (t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function (e, t, n, r, i) {
        return t < i / 2 ? jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n : jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
    }
}),
function (e) {
    e.flexslider = function (t, n) {
        var r = e(t),
            i = e.extend({}, e.flexslider.defaults, n),
            s = i.namespace,
            o = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
            u = o ? "touchend" : "click",
            a = "vertical" === i.direction,
            f = i.reverse,
            l = 0 < i.itemWidth,
            c = "fade" === i.animation,
            h = "" !== i.asNavFor,
            p = {};
        e.data(t, "flexslider", r), p = {
            init: function () {
                r.animating = !1, r.currentSlide = i.startAt, r.animatingTo = r.currentSlide, r.atEnd = 0 === r.currentSlide || r.currentSlide === r.last, r.containerSelector = i.selector.substr(0, i.selector.search(" ")), r.slides = e(i.selector, r), r.container = e(r.containerSelector, r), r.count = r.slides.length, r.syncExists = 0 < e(i.sync).length, "slide" === i.animation && (i.animation = "swing"), r.prop = a ? "top" : "marginLeft", r.args = {}, r.manualPause = !1;
                var t = r,
                    n;
                if (n = !i.video)
                    if (n = !c)
                        if (n = i.useCSS) e: {
                            n = document.createElement("div");
                            var s = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"],
                                u;
                            for (u in s)
                                if (void 0 !== n.style[s[u]]) {
                                    r.pfx = s[u].replace("Perspective", "").toLowerCase(), r.prop = "-" + r.pfx + "-transform", n = !0;
                                    break e
                                }
                            n = !1
                        }
                        t.transitions = n, "" !== i.controlsContainer && (r.controlsContainer = 0 < e(i.controlsContainer).length && e(i.controlsContainer)), "" !== i.manualControls && (r.manualControls = 0 < e(i.manualControls).length && e(i.manualControls)), i.randomize && (r.slides.sort(function () {
                    return Math.round(Math.random()) - .5
                }), r.container.empty().append(r.slides)), r.doMath(), h && p.asNav.setup(), r.setup("init"), i.controlNav && p.controlNav.setup(), i.directionNav && p.directionNav.setup(), i.keyboard && (1 === e(r.containerSelector).length || i.multipleKeyboard) && e(document).bind("keyup", function (e) {
                    e = e.keyCode, !r.animating && (39 === e || 37 === e) && (e = 39 === e ? r.getTarget("next") : 37 === e ? r.getTarget("prev") : !1, r.flexAnimate(e, i.pauseOnAction))
                }), i.mousewheel && r.bind("mousewheel", function (e, t) {
                    e.preventDefault();
                    var n = 0 > t ? r.getTarget("next") : r.getTarget("prev");
                    r.flexAnimate(n, i.pauseOnAction)
                }), i.pausePlay && p.pausePlay.setup(), i.slideshow && (i.pauseOnHover && r.hover(function () {
                    !r.manualPlay && !r.manualPause && r.pause()
                }, function () {
                    !r.manualPause && !r.manualPlay && r.play()
                }), 0 < i.initDelay ? setTimeout(r.play, i.initDelay) : r.play()), o && i.touch && p.touch(), (!c || c && i.smoothHeight) && e(window).bind("resize focus", p.resize), setTimeout(function () {
                    i.start(r)
                }, 200)
            },
            asNav: {
                setup: function () {
                    r.asNav = !0, r.animatingTo = Math.floor(r.currentSlide / r.move), r.currentItem = r.currentSlide, r.slides.removeClass(s + "active-slide").eq(r.currentItem).addClass(s + "active-slide"), r.slides.click(function (t) {
                        t.preventDefault(), t = e(this);
                        var n = t.index();
                        !e(i.asNavFor).data("flexslider").animating && !t.hasClass("active") && (r.direction = r.currentItem < n ? "next" : "prev", r.flexAnimate(n, i.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function () {
                    r.manualControls ? p.controlNav.setupManual() : p.controlNav.setupPaging()
                },
                setupPaging: function () {
                    var t = 1,
                        n;
                    r.controlNavScaffold = e('<ol class="' + s + "control-nav " + s + ("thumbnails" === i.controlNav ? "control-thumbs" : "control-paging") + '"></ol>');
                    if (1 < r.pagingCount)
                        for (var a = 0; a < r.pagingCount; a++) n = "thumbnails" === i.controlNav ? '<img src="' + r.slides.eq(a).attr("data-thumb") + '"/>' : "<a>" + t + "</a>", r.controlNavScaffold.append("<li>" + n + "</li>"), t++;
                    r.controlsContainer ? e(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold), p.controlNav.set(), p.controlNav.active(), r.controlNavScaffold.delegate("a, img", u, function (t) {
                        t.preventDefault(), t = e(this);
                        var n = r.controlNav.index(t);
                        t.hasClass(s + "active") || (r.direction = n > r.currentSlide ? "next" : "prev", r.flexAnimate(n, i.pauseOnAction))
                    }), o && r.controlNavScaffold.delegate("a", "click touchstart", function (e) {
                        e.preventDefault()
                    })
                },
                setupManual: function () {
                    r.controlNav = r.manualControls, p.controlNav.active(), r.controlNav.live(u, function (t) {
                        t.preventDefault(), t = e(this);
                        var n = r.controlNav.index(t);
                        t.hasClass(s + "active") || (n > r.currentSlide ? r.direction = "next" : r.direction = "prev", r.flexAnimate(n, i.pauseOnAction))
                    }), o && r.controlNav.live("click touchstart", function (e) {
                        e.preventDefault()
                    })
                },
                set: function () {
                    r.controlNav = e("." + s + "control-nav li " + ("thumbnails" === i.controlNav ? "img" : "a"), r.controlsContainer ? r.controlsContainer : r)
                },
                active: function () {
                    r.controlNav.removeClass(s + "active").eq(r.animatingTo).addClass(s + "active")
                },
                update: function (t, n) {
                    1 < r.pagingCount && "add" === t ? r.controlNavScaffold.append(e("<li><a>" + r.count + "</a></li>")) : 1 === r.pagingCount ? r.controlNavScaffold.find("li").remove() : r.controlNav.eq(n).closest("li").remove(), p.controlNav.set(), 1 < r.pagingCount && r.pagingCount !== r.controlNav.length ? r.update(n, t) : p.controlNav.active()
                }
            },
            directionNav: {
                setup: function () {
                    var t = e('<ul class="' + s + 'direction-nav"><li><a class="' + s + 'prev" href="#">' + i.prevText + '</a></li><li><a class="' + s + 'next" href="#">' + i.nextText + "</a></li></ul>");
                    r.controlsContainer ? (e(r.controlsContainer).append(t), r.directionNav = e("." + s + "direction-nav li a", r.controlsContainer)) : (r.append(t), r.directionNav = e("." + s + "direction-nav li a", r)), p.directionNav.update(), r.directionNav.bind(u, function (t) {
                        t.preventDefault(), t = e(this).hasClass(s + "next") ? r.getTarget("next") : r.getTarget("prev"), r.flexAnimate(t, i.pauseOnAction)
                    }), o && r.directionNav.bind("click touchstart", function (e) {
                        e.preventDefault()
                    })
                },
                update: function () {
                    var e = s + "disabled";
                    1 === r.pagingCount ? r.directionNav.addClass(e) : i.animationLoop ? r.directionNav.removeClass(e) : 0 === r.animatingTo ? r.directionNav.removeClass(e).filter("." + s + "prev").addClass(e) : r.animatingTo === r.last ? r.directionNav.removeClass(e).filter("." + s + "next").addClass(e) : r.directionNav.removeClass(e)
                }
            },
            pausePlay: {
                setup: function () {
                    var t = e('<div class="' + s + 'pauseplay"><a></a></div>');
                    r.controlsContainer ? (r.controlsContainer.append(t), r.pausePlay = e("." + s + "pauseplay a", r.controlsContainer)) : (r.append(t), r.pausePlay = e("." + s + "pauseplay a", r)), p.pausePlay.update(i.slideshow ? s + "pause" : s + "play"), r.pausePlay.bind(u, function (t) {
                        t.preventDefault(), e(this).hasClass(s + "pause") ? (r.manualPause = !0, r.manualPlay = !1, r.pause()) : (r.manualPause = !1, r.manualPlay = !0, r.play())
                    }), o && r.pausePlay.bind("click touchstart", function (e) {
                        e.preventDefault()
                    })
                },
                update: function (e) {
                    "play" === e ? r.pausePlay.removeClass(s + "pause").addClass(s + "play").text(i.playText) : r.pausePlay.removeClass(s + "play").addClass(s + "pause").text(i.pauseText)
                }
            },
            touch: function () {
                function e(e) {
                    p = a ? s - e.touches[0].pageY : s - e.touches[0].pageX, v = a ? Math.abs(p) < Math.abs(e.touches[0].pageX - o) : Math.abs(p) < Math.abs(e.touches[0].pageY - o);
                    if (!v || 500 < Number(new Date) - d) e.preventDefault(), !c && r.transitions && (i.animationLoop || (p /= 0 === r.currentSlide && 0 > p || r.currentSlide === r.last && 0 < p ? Math.abs(p) / h + 2 : 1), r.setProps(u + p, "setTouch"))
                }

                function n() {
                    t.removeEventListener("touchmove", e, !1);
                    if (r.animatingTo === r.currentSlide && !v && null !== p) {
                        var a = f ? -p : p,
                            l = 0 < a ? r.getTarget("next") : r.getTarget("prev");
                        r.canAdvance(l) && (550 > Number(new Date) - d && 50 < Math.abs(a) || Math.abs(a) > h / 2) ? r.flexAnimate(l, i.pauseOnAction) : c || r.flexAnimate(r.currentSlide, i.pauseOnAction, !0)
                    }
                    t.removeEventListener("touchend", n, !1), u = p = o = s = null
                }
                var s, o, u, h, p, d, v = !1;
                t.addEventListener("touchstart", function (c) {
                    r.animating ? c.preventDefault() : 1 === c.touches.length && (r.pause(), h = a ? r.h : r.w, d = Number(new Date), u = l && f && r.animatingTo === r.last ? 0 : l && f ? r.limit - (r.itemW + i.itemMargin) * r.move * r.animatingTo : l && r.currentSlide === r.last ? r.limit : l ? (r.itemW + i.itemMargin) * r.move * r.currentSlide : f ? (r.last - r.currentSlide + r.cloneOffset) * h : (r.currentSlide + r.cloneOffset) * h, s = a ? c.touches[0].pageY : c.touches[0].pageX, o = a ? c.touches[0].pageX : c.touches[0].pageY, t.addEventListener("touchmove", e, !1), t.addEventListener("touchend", n, !1))
                }, !1)
            },
            resize: function () {
                !r.animating && r.is(":visible") && (l || r.doMath(), c ? p.smoothHeight() : l ? (r.slides.width(r.computedW), r.update(r.pagingCount), r.setProps()) : a ? (r.viewport.height(r.h), r.setProps(r.h, "setTotal")) : (i.smoothHeight && p.smoothHeight(), r.newSlides.width(r.computedW), r.setProps(r.computedW, "setTotal")))
            },
            smoothHeight: function (e) {
                if (!a || c) {
                    var t = c ? r : r.viewport;
                    e ? t.animate({
                        height: r.slides.eq(r.animatingTo).height()
                    }, e) : t.height(r.slides.eq(r.animatingTo).height())
                }
            },
            sync: function (t) {
                var n = e(i.sync).data("flexslider"),
                    s = r.animatingTo;
                switch (t) {
                case "animate":
                    n.flexAnimate(s, i.pauseOnAction, !1, !0);
                    break;
                case "play":
                    !n.playing && !n.asNav && n.play();
                    break;
                case "pause":
                    n.pause()
                }
            }
        }, r.flexAnimate = function (t, n, u, v, g) {
            h && 1 === r.pagingCount && (r.direction = r.currentItem < t ? "next" : "prev");
            if (!r.animating && (r.canAdvance(t, g) || u) && r.is(":visible")) {
                if (h && v) {
                    if (u = e(i.asNavFor).data("flexslider"), r.atEnd = 0 === t || t === r.count - 1, u.flexAnimate(t, !0, !1, !0, g), r.direction = r.currentItem < t ? "next" : "prev", u.direction = r.direction, Math.ceil((t + 1) / r.visible) - 1 === r.currentSlide || 0 === t) return r.currentItem = t, r.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), !1;
                    r.currentItem = t, r.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), t = Math.floor(t / r.visible)
                }
                r.animating = !0, r.animatingTo = t, i.before(r), n && r.pause(), r.syncExists && !g && p.sync("animate"), i.controlNav && p.controlNav.active(), l || r.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), r.atEnd = 0 === t || t === r.last, i.directionNav && p.directionNav.update(), t === r.last && (i.end(r), i.animationLoop || r.pause());
                if (c) o ? (r.slides.eq(r.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), r.slides.eq(t).css({
                    opacity: 1,
                    zIndex: 2
                }), r.slides.unbind("webkitTransitionEnd transitionend"), r.slides.eq(r.currentSlide).bind("webkitTransitionEnd transitionend", function () {
                    i.after(r)
                }), r.animating = !1, r.currentSlide = r.animatingTo) : (r.slides.eq(r.currentSlide).fadeOut(i.animationSpeed, i.easing), r.slides.eq(t).fadeIn(i.animationSpeed, i.easing, r.wrapup));
                else {
                    var y = a ? r.slides.filter(":first").height() : r.computedW;
                    l ? (t = i.itemWidth > r.w ? 2 * i.itemMargin : i.itemMargin, t = (r.itemW + t) * r.move * r.animatingTo, t = t > r.limit && 1 !== r.visible ? r.limit : t) : t = 0 === r.currentSlide && t === r.count - 1 && i.animationLoop && "next" !== r.direction ? f ? (r.count + r.cloneOffset) * y : 0 : r.currentSlide === r.last && 0 === t && i.animationLoop && "prev" !== r.direction ? f ? 0 : (r.count + 1) * y : f ? (r.count - 1 - t + r.cloneOffset) * y : (t + r.cloneOffset) * y, r.setProps(t, "", i.animationSpeed);
                    if (r.transitions) {
                        if (!i.animationLoop || !r.atEnd) r.animating = !1, r.currentSlide = r.animatingTo;
                        r.container.unbind("webkitTransitionEnd transitionend"), r.container.bind("webkitTransitionEnd transitionend", function () {
                            r.wrapup(y)
                        })
                    } else r.container.animate(r.args, i.animationSpeed, i.easing, function () {
                        r.wrapup(y)
                    })
                }
                i.smoothHeight && p.smoothHeight(i.animationSpeed)
            }
        }, r.wrapup = function (e) {
            !c && !l && (0 === r.currentSlide && r.animatingTo === r.last && i.animationLoop ? r.setProps(e, "jumpEnd") : r.currentSlide === r.last && 0 === r.animatingTo && i.animationLoop && r.setProps(e, "jumpStart")), r.animating = !1, r.currentSlide = r.animatingTo, i.after(r)
        }, r.animateSlides = function () {
            r.animating || r.flexAnimate(r.getTarget("next"))
        }, r.pause = function () {
            clearInterval(r.animatedSlides), r.playing = !1, i.pausePlay && p.pausePlay.update("play"), r.syncExists && p.sync("pause")
        }, r.play = function () {
            r.animatedSlides = setInterval(r.animateSlides, i.slideshowSpeed), r.playing = !0, i.pausePlay && p.pausePlay.update("pause"), r.syncExists && p.sync("play")
        }, r.canAdvance = function (e, t) {
            var n = h ? r.pagingCount - 1 : r.last;
            return t ? !0 : h && r.currentItem === r.count - 1 && 0 === e && "prev" === r.direction ? !0 : h && 0 === r.currentItem && e === r.pagingCount - 1 && "next" !== r.direction ? !1 : e === r.currentSlide && !h ? !1 : i.animationLoop ? !0 : r.atEnd && 0 === r.currentSlide && e === n && "next" !== r.direction ? !1 : r.atEnd && r.currentSlide === n && 0 === e && "next" === r.direction ? !1 : !0
        }, r.getTarget = function (e) {
            return r.direction = e, "next" === e ? r.currentSlide === r.last ? 0 : r.currentSlide + 1 : 0 === r.currentSlide ? r.last : r.currentSlide - 1
        }, r.setProps = function (e, t, n) {
            var s, o = e ? e : (r.itemW + i.itemMargin) * r.move * r.animatingTo;
            s = -1 * function () {
                if (l) return "setTouch" === t ? e : f && r.animatingTo === r.last ? 0 : f ? r.limit - (r.itemW + i.itemMargin) * r.move * r.animatingTo : r.animatingTo === r.last ? r.limit : o;
                switch (t) {
                case "setTotal":
                    return f ? (r.count - 1 - r.currentSlide + r.cloneOffset) * e : (r.currentSlide + r.cloneOffset) * e;
                case "setTouch":
                    return e;
                case "jumpEnd":
                    return f ? e : r.count * e;
                case "jumpStart":
                    return f ? r.count * e : e;
                default:
                    return e
                }
            }() + "px", r.transitions && (s = a ? "translate3d(0," + s + ",0)" : "translate3d(" + s + ",0,0)", n = void 0 !== n ? n / 1e3 + "s" : "0s", r.container.css("-" + r.pfx + "-transition-duration", n)), r.args[r.prop] = s, (r.transitions || void 0 === n) && r.container.css(r.args)
        }, r.setup = function (t) {
            if (c) r.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === t && (o ? r.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + i.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(r.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : r.slides.eq(r.currentSlide).fadeIn(i.animationSpeed, i.easing)), i.smoothHeight && p.smoothHeight();
            else {
                var n, u;
                "init" === t && (r.viewport = e('<div class="' + s + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(r).append(r.container), r.cloneCount = 0, r.cloneOffset = 0, f && (u = e.makeArray(r.slides).reverse(), r.slides = e(u), r.container.empty().append(r.slides))), i.animationLoop && !l && (r.cloneCount = 2, r.cloneOffset = 1, "init" !== t && r.container.find(".clone").remove(), r.container.append(r.slides.first().clone().addClass("clone")).prepend(r.slides.last().clone().addClass("clone"))), r.newSlides = e(i.selector, r), n = f ? r.count - 1 - r.currentSlide + r.cloneOffset : r.currentSlide + r.cloneOffset, a && !l ? (r.container.height(200 * (r.count + r.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                    r.newSlides.css({
                        display: "block"
                    }), r.doMath(), r.viewport.height(r.h), r.setProps(n * r.h, "init")
                }, "init" === t ? 100 : 0)) : (r.container.width(200 * (r.count + r.cloneCount) + "%"), r.setProps(n * r.computedW, "init"), setTimeout(function () {
                    r.doMath(), r.newSlides.css({
                        width: r.computedW,
                        "float": "left",
                        display: "block"
                    }), i.smoothHeight && p.smoothHeight()
                }, "init" === t ? 100 : 0))
            }
            l || r.slides.removeClass(s + "active-slide").eq(r.currentSlide).addClass(s + "active-slide")
        }, r.doMath = function () {
            var e = r.slides.first(),
                t = i.itemMargin,
                n = i.minItems,
                s = i.maxItems;
            r.w = r.width(), r.h = e.height(), r.boxPadding = e.outerWidth() - e.width(), l ? (r.itemT = i.itemWidth + t, r.minW = n ? n * r.itemT : r.w, r.maxW = s ? s * r.itemT : r.w, r.itemW = r.minW > r.w ? (r.w - t * n) / n : r.maxW < r.w ? (r.w - t * s) / s : i.itemWidth > r.w ? r.w : i.itemWidth, r.visible = Math.floor(r.w / (r.itemW + t)), r.move = 0 < i.move && i.move < r.visible ? i.move : r.visible, r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1), r.last = r.pagingCount - 1, r.limit = 1 === r.pagingCount ? 0 : i.itemWidth > r.w ? (r.itemW + 2 * t) * r.count - r.w - t : (r.itemW + t) * r.count - r.w - t) : (r.itemW = r.w, r.pagingCount = r.count, r.last = r.count - 1), r.computedW = r.itemW - r.boxPadding
        }, r.update = function (e, t) {
            r.doMath(), l || (e < r.currentSlide ? r.currentSlide += 1 : e <= r.currentSlide && 0 !== e && (r.currentSlide -= 1), r.animatingTo = r.currentSlide);
            if (i.controlNav && !r.manualControls)
                if ("add" === t && !l || r.pagingCount > r.controlNav.length) p.controlNav.update("add");
                else if ("remove" === t && !l || r.pagingCount < r.controlNav.length) l && r.currentSlide > r.last && (r.currentSlide -= 1, r.animatingTo -= 1), p.controlNav.update("remove", r.last);
            i.directionNav && p.directionNav.update()
        }, r.addSlide = function (t, n) {
            var s = e(t);
            r.count += 1, r.last = r.count - 1, a && f ? void 0 !== n ? r.slides.eq(r.count - n).after(s) : r.container.prepend(s) : void 0 !== n ? r.slides.eq(n).before(s) : r.container.append(s), r.update(n, "add"), r.slides = e(i.selector + ":not(.clone)", r), r.setup(), i.added(r)
        }, r.removeSlide = function (t) {
            var n = isNaN(t) ? r.slides.index(e(t)) : t;
            r.count -= 1, r.last = r.count - 1, isNaN(t) ? e(t, r.slides).remove() : a && f ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove(), r.doMath(), r.update(n, "remove"), r.slides = e(i.selector + ":not(.clone)", r), r.setup(), i.removed(r)
        }, p.init()
    }, e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 0,
        maxItems: 0,
        move: 0,
        start: function () {},
        before: function () {},
        after: function () {},
        end: function () {},
        added: function () {},
        removed: function () {}
    }, e.fn.flexslider = function (t) {
        void 0 === t && (t = {});
        if ("object" == typeof t) return this.each(function () {
            var n = e(this),
                r = n.find(t.selector ? t.selector : ".slides > li");
            1 === r.length ? (r.fadeIn(400), t.start && t.start(n)) : void 0 == n.data("flexslider") && new e.flexslider(this, t)
        });
        var n = e(this).data("flexslider");
        switch (t) {
        case "play":
            n.play();
            break;
        case "pause":
            n.pause();
            break;
        case "next":
            n.flexAnimate(n.getTarget("next"), !0);
            break;
        case "prev":
        case "previous":
            n.flexAnimate(n.getTarget("prev"), !0);
            break;
        default:
            "number" == typeof t && n.flexAnimate(t, !0)
        }
    }
}(jQuery),
function (e) {
    e.InFieldLabels = function (t, n, r) {
        var i = this;
        i.$label = e(t), i.label = t, i.$field = e(n), i.field = n, i.$label.data("InFieldLabels", i), i.showing = !0, i.init = function () {
            i.options = e.extend({}, e.InFieldLabels.defaultOptions, r), i.$field.val() != "" && (i.$label.hide(), i.showing = !1), i.$field.focus(function () {
                i.fadeOnFocus()
            }).blur(function () {
                i.checkForEmpty(!0)
            }).bind("keydown.infieldlabel", function (e) {
                i.hideOnChange(e)
            }).change(function (e) {
                i.checkForEmpty()
            }).bind("onPropertyChange", function () {
                i.checkForEmpty()
            })
        }, i.fadeOnFocus = function () {
            i.showing && i.setOpacity(i.options.fadeOpacity)
        }, i.setOpacity = function (e) {
            i.$label.stop().animate({
                opacity: e
            }, i.options.fadeDuration), i.showing = e > 0
        }, i.checkForEmpty = function (e) {
            i.$field.val() == "" ? (i.prepForShow(), i.setOpacity(e ? 1 : i.options.fadeOpacity)) : i.setOpacity(0)
        }, i.prepForShow = function (e) {
            i.showing || (i.$label.css({
                opacity: 0
            }).show(), i.$field.bind("keydown.infieldlabel", function (e) {
                i.hideOnChange(e)
            }))
        }, i.hideOnChange = function (e) {
            if (e.keyCode == 16 || e.keyCode == 9) return;
            i.showing && (i.$label.hide(), i.showing = !1), i.$field.unbind("keydown.infieldlabel")
        }, i.init()
    }, e.InFieldLabels.defaultOptions = {
        fadeOpacity: .5,
        fadeDuration: 300
    }, e.fn.inFieldLabels = function (t) {
        return this.each(function () {
            var n = e(this).attr("for");
            if (!n) return;
            var r = e("input#" + n + "[type='text']," + "input#" + n + "[type='password']," + "textarea#" + n);
            if (r.length == 0) return;
            new e.InFieldLabels(this, r[0], t)
        })
    }
}(jQuery),
function (e) {
    function t() {
        var t, n = {
                height: o.innerHeight,
                width: o.innerWidth
            };
        return !n.height && ((t = s.compatMode) || !e.support.boxModel) && (t = t === "CSS1Compat" ? u : s.body, n = {
            height: t.clientHeight,
            width: t.clientWidth
        }), n
    }
    var n = {}, r, i, s = document,
        o = window,
        u = s.documentElement,
        a = e.expando;
    e.event.special.inview = {
        add: function (t) {
            n[t.guid + "-" + this[a]] = {
                data: t,
                $element: e(this)
            }
        },
        remove: function (e) {
            try {
                delete n[e.guid + "-" + this[a]]
            } catch (t) {}
        }
    }, e(o).bind("scroll resize", function () {
        r = i = null
    }), setInterval(function () {
        var a = e(),
            f, l = 0;
        e.each(n, function (e, t) {
            var n = t.data.selector,
                r = t.$element;
            a = a.add(n ? r.find(n) : r)
        });
        if (f = a.length) {
            r = r || t();
            for (i = i || {
                top: o.pageYOffset || u.scrollTop || s.body.scrollTop,
                left: o.pageXOffset || u.scrollLeft || s.body.scrollLeft
            }; l < f; l++)
                if (e.contains(u, a[l])) {
                    var d = e(a[l]),
                        v = {
                            height: d.height(),
                            width: d.width()
                        }, g = d.offset(),
                        y = d.data("inview"),
                        b;
                    if (!i || !r) break;
                    g.top + v.height > i.top && g.top < i.top + r.height && g.left + v.width > i.left && g.left < i.left + r.width ? (b = i.left > g.left ? "right" : i.left + r.width < g.left + v.width ? "left" : "both", v = i.top > g.top ? "bottom" : i.top + r.height < g.top + v.height ? "top" : "both", g = b + "-" + v, (!y || y !== g) && d.data("inview", g).trigger("inview", [!0, b, v])) : y && d.data("inview", !1).trigger("inview", [!1])
                }
        }
    }, 250)
}(jQuery),
function (e, t, n) {
    "use strict";
    var r = function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }, i = "Moz Webkit O Ms".split(" "),
        s = function (e) {
            var t = document.documentElement.style,
                n;
            if (typeof t[e] == "string") return e;
            e = r(e);
            for (var s = 0, o = i.length; s < o; s++) {
                n = i[s] + e;
                if (typeof t[n] == "string") return n
            }
        }, o = s("transform"),
        u = s("transitionProperty"),
        a = {
            csstransforms: function () {
                return !!o
            },
            csstransforms3d: function () {
                var e = !! s("perspective");
                if (e) {
                    var n = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                        r = "@media (" + n.join("transform-3d),(") + "modernizr)",
                        i = t("<style>" + r + "{#modernizr{height:3px}}" + "</style>").appendTo("head"),
                        o = t('<div id="modernizr" />').appendTo("html");
                    e = o.height() === 3, o.remove(), i.remove()
                }
                return e
            },
            csstransitions: function () {
                return !!u
            }
        };
    if (e.Modernizr)
        for (var f in a) Modernizr.hasOwnProperty(f) || Modernizr.addTest(f, a[f]);
    else e.Modernizr = function () {
        var e = {
            _version: "1.6ish: miniModernizr for Isotope"
        }, n = " ",
            r, i;
        for (i in a) r = a[i](), e[i] = r, n += " " + (r ? "" : "no-") + i;
        return t("html").addClass(n), e
    }(); if (Modernizr.csstransforms) {
        var l = Modernizr.csstransforms3d ? {
            translate: function (e) {
                return "translate3d(" + e[0] + "px, " + e[1] + "px, 0) "
            },
            scale: function (e) {
                return "scale3d(" + e + ", " + e + ", 1) "
            }
        } : {
            translate: function (e) {
                return "translate(" + e[0] + "px, " + e[1] + "px) "
            },
            scale: function (e) {
                return "scale(" + e + ") "
            }
        }, c = function (e, n, r) {
                var i = t.data(e, "isoTransform") || {}, s = {}, u, a = {}, f;
                s[n] = r, t.extend(i, s);
                for (u in i) f = i[u], a[u] = l[u](f);
                var c = a.translate || "",
                    h = a.scale || "",
                    p = c + h;
                t.data(e, "isoTransform", i), e.style[o] = p
            };
        t.cssNumber.scale = !0, t.cssHooks.scale = {
            set: function (e, t) {
                c(e, "scale", t)
            },
            get: function (e, n) {
                var r = t.data(e, "isoTransform");
                return r && r.scale ? r.scale : 1
            }
        }, t.fx.step.scale = function (e) {
            t.cssHooks.scale.set(e.elem, e.now + e.unit)
        }, t.cssNumber.translate = !0, t.cssHooks.translate = {
            set: function (e, t) {
                c(e, "translate", t)
            },
            get: function (e, n) {
                var r = t.data(e, "isoTransform");
                return r && r.translate ? r.translate : [0, 0]
            }
        }
    }
    var h, p;
    Modernizr.csstransitions && (h = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd",
        transitionProperty: "transitionEnd"
    }[u], p = s("transitionDuration"));
    var d = t.event,
        v;
    d.special.smartresize = {
        setup: function () {
            t(this).bind("resize", d.special.smartresize.handler)
        },
        teardown: function () {
            t(this).unbind("resize", d.special.smartresize.handler)
        },
        handler: function (e, t) {
            var n = this,
                r = arguments;
            e.type = "smartresize", v && clearTimeout(v), v = setTimeout(function () {
                jQuery.event.handle.apply(n, r)
            }, t === "execAsap" ? 0 : 100)
        }
    }, t.fn.smartresize = function (e) {
        return e ? this.bind("smartresize", e) : this.trigger("smartresize", ["execAsap"])
    }, t.Isotope = function (e, n, r) {
        this.element = t(n), this._create(e), this._init(r)
    };
    var m = ["overflow", "position", "width", "height"],
        g = t(e);
    t.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: {
            opacity: 0,
            scale: .001
        },
        visibleStyle: {
            opacity: 1,
            scale: 1
        },
        animationEngine: "best-available",
        animationOptions: {
            queue: !1,
            duration: 800
        },
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !t.browser.opera,
        itemPositionDataEnabled: !1
    }, t.Isotope.prototype = {
        _create: function (e) {
            this.options = t.extend({}, t.Isotope.settings, e), this.styleQueue = [], this.elemCount = 0;
            var n = this.element[0].style;
            this.originalStyle = {};
            for (var r = 0, i = m.length; r < i; r++) {
                var s = m[r];
                this.originalStyle[s] = n[s] || ""
            }
            this.element.css({
                overflow: "hidden",
                position: "relative"
            }), this._updateAnimationEngine(), this._updateUsingTransforms();
            var o = {
                "original-order": function (e, t) {
                    return t.elemCount++, t.elemCount
                },
                random: function () {
                    return Math.random()
                }
            };
            this.options.getSortData = t.extend(this.options.getSortData, o), this.reloadItems();
            var u = t(document.createElement("div")).prependTo(this.element);
            this.offset = u.position(), u.remove();
            var a = this;
            setTimeout(function () {
                a.element.addClass(a.options.containerClass)
            }, 0), this.options.resizable && g.bind("smartresize.isotope", function () {
                a.resize()
            }), this.element.delegate("." + this.options.hiddenClass, "click", function () {
                return !1
            })
        },
        _getAtoms: function (e) {
            var t = this.options.itemSelector,
                n = t ? e.filter(t).add(e.find(t)) : e,
                r = {
                    position: "absolute"
                };
            return this.usingTransforms && (r.left = 0, r.top = 0), n.css(r).addClass(this.options.itemClass), this.updateSortData(n, !0), n
        },
        _init: function (e) {
            this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(e)
        },
        option: function (e) {
            if (t.isPlainObject(e)) {
                this.options = t.extend(!0, this.options, e);
                var n;
                for (var i in e) n = "_update" + r(i), this[n] && this[n]()
            }
        },
        _updateAnimationEngine: function () {
            var e = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, ""),
                t;
            switch (e) {
            case "css":
            case "none":
                t = !1;
                break;
            case "jquery":
                t = !0;
                break;
            default:
                t = !Modernizr.csstransitions
            }
            this.isUsingJQueryAnimation = t, this._updateUsingTransforms()
        },
        _updateTransformsEnabled: function () {
            this._updateUsingTransforms()
        },
        _updateUsingTransforms: function () {
            var e = this.usingTransforms = this.options.transformsEnabled && Modernizr.csstransforms && Modernizr.csstransitions && !this.isUsingJQueryAnimation;
            e || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = e ? this._translate : this._positionAbs
        },
        _filter: function (e) {
            var t = this.options.filter === "" ? "*" : this.options.filter;
            if (!t) return e;
            var n = this.options.hiddenClass,
                r = "." + n,
                i = e.filter(r),
                s = i;
            if (t !== "*") {
                s = i.filter(t);
                var o = e.not(r).not(t).addClass(n);
                this.styleQueue.push({
                    $el: o,
                    style: this.options.hiddenStyle
                })
            }
            return this.styleQueue.push({
                $el: s,
                style: this.options.visibleStyle
            }), s.removeClass(n), e.filter(t)
        },
        updateSortData: function (e, n) {
            var r = this,
                i = this.options.getSortData,
                s, o;
            e.each(function () {
                s = t(this), o = {};
                for (var e in i)!n && e === "original-order" ? o[e] = t.data(this, "isotope-sort-data")[e] : o[e] = i[e](s, r);
                t.data(this, "isotope-sort-data", o)
            })
        },
        _sort: function () {
            var e = this.options.sortBy,
                t = this._getSorter,
                n = this.options.sortAscending ? 1 : -1,
                r = function (r, i) {
                    var s = t(r, e),
                        o = t(i, e);
                    return s === o && e !== "original-order" && (s = t(r, "original-order"), o = t(i, "original-order")), (s > o ? 1 : s < o ? -1 : 0) * n
                };
            this.$filteredAtoms.sort(r)
        },
        _getSorter: function (e, n) {
            return t.data(e, "isotope-sort-data")[n]
        },
        _translate: function (e, t) {
            return {
                translate: [e, t]
            }
        },
        _positionAbs: function (e, t) {
            return {
                left: e,
                top: t
            }
        },
        _pushPosition: function (e, t, n) {
            t += this.offset.left, n += this.offset.top;
            var r = this.getPositionStyles(t, n);
            this.styleQueue.push({
                $el: e,
                style: r
            }), this.options.itemPositionDataEnabled && e.data("isotope-item-position", {
                x: t,
                y: n
            })
        },
        layout: function (e, t) {
            var n = this.options.layoutMode;
            this["_" + n + "Layout"](e);
            if (this.options.resizesContainer) {
                var r = this["_" + n + "GetContainerSize"]();
                this.styleQueue.push({
                    $el: this.element,
                    style: r
                })
            }
            this._processStyleQueue(e, t), this.isLaidOut = !0
        },
        _processStyleQueue: function (e, n) {
            var r = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate" : "css" : "css",
                i = this.options.animationOptions,
                s, o, u, a;
            o = function (e, t) {
                t.$el[r](t.style, i)
            };
            if (this._isInserting && this.isUsingJQueryAnimation) o = function (e, t) {
                s = t.$el.hasClass("no-transition") ? "css" : r, t.$el[s](t.style, i)
            };
            else if (n) {
                var f = !1,
                    l = this;
                u = !0, a = function () {
                    f || (n.call(l.element, e), f = !0)
                };
                if (this.isUsingJQueryAnimation && r === "animate") i.complete = a, u = !1;
                else if (Modernizr.csstransitions) {
                    var c = 0,
                        d = this.styleQueue[0].$el,
                        v;
                    while (!d.length) {
                        v = this.styleQueue[c++];
                        if (!v) return;
                        d = v.$el
                    }
                    var m = parseFloat(getComputedStyle(d[0])[p]);
                    m > 0 && (o = function (e, t) {
                        t.$el[r](t.style, i).one(h, a)
                    }, u = !1)
                }
            }
            t.each(this.styleQueue, o), u && a(), this.styleQueue = []
        },
        resize: function () {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        },
        reLayout: function (e) {
            this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, e)
        },
        addItems: function (e, t) {
            var n = this._getAtoms(e);
            this.$allAtoms = this.$allAtoms.add(n), t && t(n)
        },
        insert: function (e, t) {
            this.element.append(e);
            var n = this;
            this.addItems(e, function (e) {
                var r = n._filter(e);
                n._addHideAppended(r), n._sort(), n.reLayout(), n._revealAppended(r, t)
            })
        },
        appended: function (e, t) {
            var n = this;
            this.addItems(e, function (e) {
                n._addHideAppended(e), n.layout(e), n._revealAppended(e, t)
            })
        },
        _addHideAppended: function (e) {
            this.$filteredAtoms = this.$filteredAtoms.add(e), e.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                $el: e,
                style: this.options.hiddenStyle
            })
        },
        _revealAppended: function (e, t) {
            var n = this;
            setTimeout(function () {
                e.removeClass("no-transition"), n.styleQueue.push({
                    $el: e,
                    style: n.options.visibleStyle
                }), n._isInserting = !1, n._processStyleQueue(e, t)
            }, 10)
        },
        reloadItems: function () {
            this.$allAtoms = this._getAtoms(this.element.children())
        },
        remove: function (e) {
            var t = this,
                n = function () {
                    t.$allAtoms = t.$allAtoms.not(e), e.remove()
                };
            e.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                $el: e,
                style: this.options.hiddenStyle
            }), this.$filteredAtoms = this.$filteredAtoms.not(e), this._sort(), this.reLayout(n)) : n()
        },
        shuffle: function (e) {
            this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(e)
        },
        destroy: function () {
            var e = this.usingTransforms,
                t = this.options;
            this.$allAtoms.removeClass(t.hiddenClass + " " + t.itemClass).each(function () {
                var t = this.style;
                t.position = "", t.top = "", t.left = "", t.opacity = "", e && (t[o] = "")
            });
            var n = this.element[0].style;
            for (var r = 0, i = m.length; r < i; r++) {
                var s = m[r];
                n[s] = this.originalStyle[s]
            }
            this.element.unbind(".isotope").undelegate("." + t.hiddenClass, "click").removeClass(t.containerClass).removeData("isotope"), g.unbind(".isotope")
        },
        _getSegments: function (e) {
            var t = this.options.layoutMode,
                n = e ? "rowHeight" : "columnWidth",
                i = e ? "height" : "width",
                s = e ? "rows" : "cols",
                o = this.element[i](),
                u, a = this.options[t] && this.options[t][n] || this.$filteredAtoms["outer" + r(i)](!0) || o;
            u = Math.floor(o / a), u = Math.max(u, 1), this[t][s] = u, this[t][n] = a
        },
        _checkIfSegmentsChanged: function (e) {
            var t = this.options.layoutMode,
                n = e ? "rows" : "cols",
                r = this[t][n];
            return this._getSegments(e), this[t][n] !== r
        },
        _masonryReset: function () {
            this.masonry = {}, this._getSegments();
            var e = this.masonry.cols;
            this.masonry.colYs = [];
            while (e--) this.masonry.colYs.push(0)
        },
        _masonryLayout: function (e) {
            var n = this,
                r = n.masonry;
            e.each(function () {
                var e = t(this),
                    i = Math.ceil(e.outerWidth(!0) / r.columnWidth);
                i = Math.min(i, r.cols);
                if (i === 1) n._masonryPlaceBrick(e, r.colYs);
                else {
                    var s = r.cols + 1 - i,
                        o = [],
                        u, a;
                    for (a = 0; a < s; a++) u = r.colYs.slice(a, a + i), o[a] = Math.max.apply(Math, u);
                    n._masonryPlaceBrick(e, o)
                }
            })
        },
        _masonryPlaceBrick: function (e, t) {
            var n = Math.min.apply(Math, t),
                r = 0;
            for (var i = 0, s = t.length; i < s; i++)
                if (t[i] === n) {
                    r = i;
                    break
                }
            var o = this.masonry.columnWidth * r,
                u = n;
            this._pushPosition(e, o, u);
            var a = n + e.outerHeight(!0),
                f = this.masonry.cols + 1 - s;
            for (i = 0; i < f; i++) this.masonry.colYs[r + i] = a
        },
        _masonryGetContainerSize: function () {
            var e = Math.max.apply(Math, this.masonry.colYs);
            return {
                height: e
            }
        },
        _masonryResizeChanged: function () {
            return this._checkIfSegmentsChanged()
        },
        _fitRowsReset: function () {
            this.fitRows = {
                x: 0,
                y: 0,
                height: 0
            }
        },
        _fitRowsLayout: function (e) {
            var n = this,
                r = this.element.width(),
                i = this.fitRows;
            e.each(function () {
                var e = t(this),
                    s = e.outerWidth(!0),
                    o = e.outerHeight(!0);
                i.x !== 0 && s + i.x > r && (i.x = 0, i.y = i.height), n._pushPosition(e, i.x, i.y), i.height = Math.max(i.y + o, i.height), i.x += s
            })
        },
        _fitRowsGetContainerSize: function () {
            return {
                height: this.fitRows.height
            }
        },
        _fitRowsResizeChanged: function () {
            return !0
        },
        _cellsByRowReset: function () {
            this.cellsByRow = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByRowLayout: function (e) {
            var n = this,
                r = this.cellsByRow;
            e.each(function () {
                var e = t(this),
                    i = r.index % r.cols,
                    s = Math.floor(r.index / r.cols),
                    o = Math.round((i + .5) * r.columnWidth - e.outerWidth(!0) / 2),
                    u = Math.round((s + .5) * r.rowHeight - e.outerHeight(!0) / 2);
                n._pushPosition(e, o, u), r.index++
            })
        },
        _cellsByRowGetContainerSize: function () {
            return {
                height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
            }
        },
        _cellsByRowResizeChanged: function () {
            return this._checkIfSegmentsChanged()
        },
        _straightDownReset: function () {
            this.straightDown = {
                y: 0
            }
        },
        _straightDownLayout: function (e) {
            var n = this;
            e.each(function (e) {
                var r = t(this);
                n._pushPosition(r, 0, n.straightDown.y), n.straightDown.y += r.outerHeight(!0)
            })
        },
        _straightDownGetContainerSize: function () {
            return {
                height: this.straightDown.y
            }
        },
        _straightDownResizeChanged: function () {
            return !0
        },
        _masonryHorizontalReset: function () {
            this.masonryHorizontal = {}, this._getSegments(!0);
            var e = this.masonryHorizontal.rows;
            this.masonryHorizontal.rowXs = [];
            while (e--) this.masonryHorizontal.rowXs.push(0)
        },
        _masonryHorizontalLayout: function (e) {
            var n = this,
                r = n.masonryHorizontal;
            e.each(function () {
                var e = t(this),
                    i = Math.ceil(e.outerHeight(!0) / r.rowHeight);
                i = Math.min(i, r.rows);
                if (i === 1) n._masonryHorizontalPlaceBrick(e, r.rowXs);
                else {
                    var s = r.rows + 1 - i,
                        o = [],
                        u, a;
                    for (a = 0; a < s; a++) u = r.rowXs.slice(a, a + i), o[a] = Math.max.apply(Math, u);
                    n._masonryHorizontalPlaceBrick(e, o)
                }
            })
        },
        _masonryHorizontalPlaceBrick: function (e, t) {
            var n = Math.min.apply(Math, t),
                r = 0;
            for (var i = 0, s = t.length; i < s; i++)
                if (t[i] === n) {
                    r = i;
                    break
                }
            var o = n,
                u = this.masonryHorizontal.rowHeight * r;
            this._pushPosition(e, o, u);
            var a = n + e.outerWidth(!0),
                f = this.masonryHorizontal.rows + 1 - s;
            for (i = 0; i < f; i++) this.masonryHorizontal.rowXs[r + i] = a
        },
        _masonryHorizontalGetContainerSize: function () {
            var e = Math.max.apply(Math, this.masonryHorizontal.rowXs);
            return {
                width: e
            }
        },
        _masonryHorizontalResizeChanged: function () {
            return this._checkIfSegmentsChanged(!0)
        },
        _fitColumnsReset: function () {
            this.fitColumns = {
                x: 0,
                y: 0,
                width: 0
            }
        },
        _fitColumnsLayout: function (e) {
            var n = this,
                r = this.element.height(),
                i = this.fitColumns;
            e.each(function () {
                var e = t(this),
                    s = e.outerWidth(!0),
                    o = e.outerHeight(!0);
                i.y !== 0 && o + i.y > r && (i.x = i.width, i.y = 0), n._pushPosition(e, i.x, i.y), i.width = Math.max(i.x + s, i.width), i.y += o
            })
        },
        _fitColumnsGetContainerSize: function () {
            return {
                width: this.fitColumns.width
            }
        },
        _fitColumnsResizeChanged: function () {
            return !0
        },
        _cellsByColumnReset: function () {
            this.cellsByColumn = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByColumnLayout: function (e) {
            var n = this,
                r = this.cellsByColumn;
            e.each(function () {
                var e = t(this),
                    i = Math.floor(r.index / r.rows),
                    s = r.index % r.rows,
                    o = Math.round((i + .5) * r.columnWidth - e.outerWidth(!0) / 2),
                    u = Math.round((s + .5) * r.rowHeight - e.outerHeight(!0) / 2);
                n._pushPosition(e, o, u), r.index++
            })
        },
        _cellsByColumnGetContainerSize: function () {
            return {
                width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
            }
        },
        _cellsByColumnResizeChanged: function () {
            return this._checkIfSegmentsChanged(!0)
        },
        _straightAcrossReset: function () {
            this.straightAcross = {
                x: 0
            }
        },
        _straightAcrossLayout: function (e) {
            var n = this;
            e.each(function (e) {
                var r = t(this);
                n._pushPosition(r, n.straightAcross.x, 0), n.straightAcross.x += r.outerWidth(!0)
            })
        },
        _straightAcrossGetContainerSize: function () {
            return {
                width: this.straightAcross.x
            }
        },
        _straightAcrossResizeChanged: function () {
            return !0
        }
    }, t.fn.imagesLoaded = function (e) {
        function n(e) {
            e.target.src !== u && t.inArray(this, a) === -1 && (a.push(this), --o <= 0 && (setTimeout(r), s.unbind(".imagesLoaded", n)))
        }

        function r() {
            e.call(i, s)
        }
        var i = this,
            s = i.find("img").add(i.filter("img")),
            o = s.length,
            u = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            a = [];
        return o || r(), s.bind("load.imagesLoaded error.imagesLoaded", n).each(function () {
            var e = this.src;
            this.src = u, this.src = e
        }), i
    };
    var y = function (t) {
        e.console && e.console.error(t)
    };
    t.fn.isotope = function (e, n) {
        if (typeof e == "string") {
            var r = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var n = t.data(this, "isotope");
                if (!n) y("cannot call methods on isotope prior to initialization; attempted to call method '" + e + "'");
                else {
                    if (!t.isFunction(n[e]) || e.charAt(0) === "_") {
                        y("no such method '" + e + "' for isotope instance");
                        return
                    }
                    n[e].apply(n, r)
                }
            })
        } else this.each(function () {
            var r = t.data(this, "isotope");
            r ? (r.option(e), r._init(n)) : t.data(this, "isotope", new t.Isotope(e, this, n))
        });
        return this
    }
}(window, jQuery),
function (e) {
    e.organicTabs = function (t, n) {
        var r = this;
        r.$el = e(t), r.$nav = r.$el.find(".tab-nav"), r.init = function () {
            r.options = e.extend({}, e.organicTabs.defaultOptions, n), e(".hide").css({
                position: "relative",
                top: 0,
                left: 0,
                display: "none"
            }), r.$nav.delegate("li > a", "click", function () {
                var t = r.$el.find("a.current").attr("href").substring(1),
                    n = e(this),
                    i = n.attr("href").substring(1),
                    s = r.$el.find(".list-wrap"),
                    o = s.height();
                return s.height(o), i != t && r.$el.find(":animated").length == 0 && r.$el.find("#" + t).fadeOut(r.options.speed, function () {
                    r.$el.find("#" + i).fadeIn(r.options.speed);
                    var e = r.$el.find("#" + i).height();
                    s.animate({
                        height: e
                    }), r.$el.find(".tab-nav li a").removeClass("current"), n.addClass("current")
                }), !1
            })
        }, r.init()
    }, e.organicTabs.defaultOptions = {
        speed: 0
    }, e.fn.organicTabs = function (t) {
        return this.each(function () {
            new e.organicTabs(this, t)
        })
    }
}(jQuery),
function (e) {
    e.fn.extend({
        resizeBackground: function (t) {
            function r() {}
            var n = {
                width: 1280,
                height: 720,
                fade: 1e3
            }, t = e.extend(n, t);
            return this.each(function () {
                var n = t,
                    r = e(this),
                    i = n.width / n.height,
                    s = r.parent().outerHeight(),
                    o = r.parent().outerWidth(),
                    u = o / s,
                    a = r.height(),
                    f = r.width();
                r.on("load", function () {
                    e(this).fadeIn(fade)
                }), setTimeout(function () {
                    r.fadeIn(fade)
                }, 500), u < i ? (r.height(s), r.width(s * i)) : (r.width(o), r.height(o * (1 / i))), r.css({
                    marginTop: -r.height() / 2,
                    marginLeft: -r.width() / 2
                })
            })
        }
    })
}(jQuery),
function (e) {
    function n(e) {
        return typeof e == "object" ? e : {
            top: e,
            left: e
        }
    }
    var t = e.scrollTo = function (t, n, r) {
        e(window).scrollTo(t, n, r)
    };
    t.defaults = {
        axis: "xy",
        duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1
    }, t.window = function (t) {
        return e(window)._scrollable()
    }, e.fn._scrollable = function () {
        return this.map(function () {
            var t = this,
                n = !t.nodeName || e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1;
            if (!n) return t;
            var r = (t.contentWindow || t).document || t.ownerDocument || t;
            return e.browser.safari || r.compatMode == "BackCompat" ? r.body : r.documentElement
        })
    }, e.fn.scrollTo = function (r, i, s) {
        return typeof i == "object" && (s = i, i = 0), typeof s == "function" && (s = {
            onAfter: s
        }), r == "max" && (r = 9e9), s = e.extend({}, t.defaults, s), i = i || s.speed || s.duration, s.queue = s.queue && s.axis.length > 1, s.queue && (i /= 2), s.offset = n(s.offset), s.over = n(s.over), this._scrollable().each(function () {
            function h(e) {
                u.animate(l, i, s.easing, e && function () {
                    e.call(this, r, s)
                })
            }
            var o = this,
                u = e(o),
                a = r,
                f, l = {}, c = u.is("html,body");
            switch (typeof a) {
            case "number":
            case "string":
                if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(a)) {
                    a = n(a);
                    break
                }
                a = e(a, this);
            case "object":
                if (a.is || a.style) f = (a = e(a)).offset()
            }
            e.each(s.axis.split(""), function (e, n) {
                var r = n == "x" ? "Left" : "Top",
                    i = r.toLowerCase(),
                    p = "scroll" + r,
                    d = o[p],
                    v = t.max(o, n);
                if (f) l[p] = f[i] + (c ? 0 : d - u.offset()[i]), s.margin && (l[p] -= parseInt(a.css("margin" + r)) || 0, l[p] -= parseInt(a.css("border" + r + "Width")) || 0), l[p] += s.offset[i] || 0, s.over[i] && (l[p] += a[n == "x" ? "width" : "height"]() * s.over[i]);
                else {
                    var m = a[i];
                    l[p] = m.slice && m.slice(-1) == "%" ? parseFloat(m) / 100 * v : m
                }
                /^\d+$/.test(l[p]) && (l[p] = l[p] <= 0 ? 0 : Math.min(l[p], v)), !e && s.queue && (d != l[p] && h(s.onAfterFirst), delete l[p])
            }), h(s.onAfter)
        }).end()
    }, t.max = function (t, n) {
        var r = n == "x" ? "Width" : "Height",
            i = "scroll" + r;
        if (!e(t).is("html,body")) return t[i] - e(t)[r.toLowerCase()]();
        var s = "client" + r,
            o = t.ownerDocument.documentElement,
            u = t.ownerDocument.body;
        return Math.max(o[i], u[i]) - Math.min(o[s], u[s])
    }
}(jQuery),
function (e) {
    typeof define == "function" && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
    e.fn.tweet = function (t) {
        function i(e, t) {
            if (typeof e == "string") {
                var n = e;
                for (var r in t) {
                    var i = t[r];
                    n = n.split("{" + r + "}").join(i === null ? "" : i)
                }
                return n
            }
            return e(t)
        }

        function s(t, n) {
            return function () {
                var r = [];
                return this.each(function () {
                    r.push(this.replace(t, n))
                }), e(r)
            }
        }

        function o(e) {
            return e.replace(/</g, "&lt;").replace(/>/g, "^&gt;")
        }

        function u(e, t) {
            return e.replace(r, function (e) {
                var n = /^[a-z]+:/i.test(e) ? e : "http://" + e,
                    r = e;
                for (var i = 0; i < t.length; ++i) {
                    var s = t[i];
                    if (s.url == n && s.expanded_url) {
                        n = s.expanded_url, r = s.display_url;
                        break
                    }
                }
                return '<a href="' + o(n) + '">' + o(r) + "</a>"
            })
        }

        function a(e) {
            return Date.parse(e.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, "$1,$2$4$3"))
        }

        function f(e) {
            var t = function (e) {
                return parseInt(e, 10)
            }, n = new Date,
                r = t((n.getTime() - e) / 1e3);
            return r < 1 && (r = 0), {
                days: t(r / 86400),
                hours: t(r / 3600),
                minutes: t(r / 60),
                seconds: t(r)
            }
        }

        function l(e) {
            return e.days > 2 ? "about " + e.days + " days ago" : e.hours > 24 ? "about a day ago" : e.hours > 2 ? "about " + e.hours + " hours ago" : e.minutes > 45 ? "about an hour ago" : e.minutes > 2 ? "about " + e.minutes + " minutes ago" : e.seconds > 1 ? "about " + e.seconds + " seconds ago" : "just now"
        }

        function c(e) {
            return e.match(/^(@([A-Za-z0-9-_]+)) .*/i) ? n.auto_join_text_reply : e.match(r) ? n.auto_join_text_url : e.match(/^((\w+ed)|just) .*/im) ? n.auto_join_text_ed : e.match(/^(\w*ing) .*/i) ? n.auto_join_text_ing : n.auto_join_text_default
        }

        function h() {
            var e = "https:" == document.location.protocol ? "https:" : "http:",
                t = n.fetch === null ? n.count : n.fetch,
                r = "&include_entities=1&callback=?";
            if (n.list) return e + "//" + n.twitter_api_url + "/1/" + n.username[0] + "/lists/" + n.list + "/statuses.json?page=" + n.page + "&per_page=" + t + r;
            if (n.favorites) return e + "//" + n.twitter_api_url + "/1/favorites.json?screen_name=" + n.username[0] + "&page=" + n.page + "&count=" + t + r;
            if (n.query === null && n.username.length == 1) return e + "//" + n.twitter_api_url + "/1/statuses/user_timeline.json?screen_name=" + n.username[0] + "&count=" + t + (n.retweets ? "&include_rts=1" : "") + "&page=" + n.page + r;
            var i = n.query || "from:" + n.username.join(" OR from:");
            return e + "//" + n.twitter_search_url + "/search.json?&q=" + encodeURIComponent(i) + "&rpp=" + t + "&page=" + n.page + r
        }

        function p(e, t) {
            return t ? "user" in e ? e.user.profile_image_url_https : p(e, !1).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/") : e.profile_image_url || e.user.profile_image_url
        }

        function d(t) {
            var r = {};
            return r.item = t, r.source = t.source, r.screen_name = t.from_user || t.user.screen_name, r.name = t.from_user_name || t.user.name, r.retweet = typeof t.retweeted_status != "undefined", r.tweet_time = a(t.created_at), r.join_text = n.join_text == "auto" ? c(t.text) : n.join_text, r.tweet_id = t.id_str, r.twitter_base = "http://" + n.twitter_url + "/", r.user_url = r.twitter_base + r.screen_name, r.tweet_url = r.user_url + "/status/" + r.tweet_id, r.reply_url = r.twitter_base + "intent/tweet?in_reply_to=" + r.tweet_id, r.retweet_url = r.twitter_base + "intent/retweet?tweet_id=" + r.tweet_id, r.favorite_url = r.twitter_base + "intent/favorite?tweet_id=" + r.tweet_id, r.retweeted_screen_name = r.retweet && t.retweeted_status.user.screen_name, r.tweet_relative_time = l(f(r.tweet_time)), r.entities = t.entities ? (t.entities.urls || []).concat(t.entities.media || []) : [], r.tweet_raw_text = r.retweet ? "RT @" + r.retweeted_screen_name + " " + t.retweeted_status.text : t.text, r.tweet_text = e([u(r.tweet_raw_text, r.entities)]).linkUser().linkHash()[0], r.retweeted_tweet_text = e([u(t.text, r.entities)]).linkUser().linkHash()[0], r.tweet_text_fancy = e([r.tweet_text]).makeHeart()[0], r.avatar_size = n.avatar_size, r.avatar_url = p(r.retweet ? t.retweeted_status : t, document.location.protocol === "https:"), r.avatar_screen_name = r.retweet ? r.retweeted_screen_name : r.screen_name, r.avatar_profile_url = r.twitter_base + r.avatar_screen_name, r.user = i('<a class="tweet_user" href="{user_url}">{screen_name}</a>', r), r.join = n.join_text ? i('<span class="tweet_join">{join_text}</span>', r) : "", r.avatar = r.avatar_size ? i('<a class="tweet_avatar" href="{avatar_profile_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{avatar_screen_name}\'s avatar" title="{avatar_screen_name}\'s avatar" border="0"/></a>', r) : "", r.time = i('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', r), r.text = i('<span class="tweet_text">{tweet_text_fancy}</span>', r), r.retweeted_text = i('<span class="tweet_text">{retweeted_tweet_text}</span>', r), r.reply_action = i('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', r), r.retweet_action = i('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', r), r.favorite_action = i('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', r), r
        }

        function v(t, r) {
            var s = e('<ul class="tweet_list">');
            s.append(e.map(r, function (e) {
                return "<li>" + i(n.template, e) + "</li>"
            }).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd"), e(t).empty().append(s), n.intro_text && s.before('<p class="tweet_intro">' + n.intro_text + "</p>"), n.outro_text && s.after('<p class="tweet_outro">' + n.outro_text + "</p>"), e(t).trigger("loaded").trigger(r.length === 0 ? "empty" : "full"), n.refresh_interval && window.setTimeout(function () {
                e(t).trigger("tweet:load")
            }, 1e3 * n.refresh_interval)
        }

        function m(t) {
            var r = e('<p class="loading">' + n.loading_text + "</p>");
            n.loading_text && e(t).not(":has(.tweet_list)").empty().append(r), e.getJSON(h(), function (r) {
                var i = e.map(r.results || r, d);
                i = e.grep(i, n.filter).sort(n.comparator).slice(0, n.count), e(t).trigger("tweet:retrieved", [i])
            })
        }
        var n = e.extend({
            username: null,
            list: null,
            favorites: !1,
            query: null,
            avatar_size: null,
            count: 3,
            fetch: null,
            page: 1,
            retweets: !0,
            intro_text: null,
            outro_text: null,
            join_text: null,
            auto_join_text_default: " I said, ",
            auto_join_text_ed: " I ",
            auto_join_text_ing: " I am ",
            auto_join_text_reply: " I replied to ",
            auto_join_text_url: " I was looking at ",
            loading_text: null,
            refresh_interval: null,
            twitter_url: "twitter.com",
            twitter_api_url: "api.twitter.com",
            twitter_search_url: "search.twitter.com",
            template: "{avatar}{time}{join} {text}",
            comparator: function (e, t) {
                return t.tweet_time - e.tweet_time
            },
            filter: function (e) {
                return !0
            }
        }, t),
            r = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?Â«Â»â€œâ€â€˜â€™]))/gi;
        return e.extend({
            tweet: {
                t: i
            }
        }), e.fn.extend({
            linkUser: s(/(^|[\W])@(\w+)/gi, '$1<span class="at">@</span><a href="http://' + n.twitter_url + '/$2">$2</a>'),
            linkHash: s(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi, ' <a href="http://' + n.twitter_search_url + "/search?q=&tag=$1&lang=all" + (n.username && n.username.length == 1 && !n.list ? "&from=" + n.username.join("%2BOR%2B") : "") + '" class="tweet_hashtag">#$1</a>'),
            makeHeart: s(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
        }), this.each(function (t, r) {
            n.username && typeof n.username == "string" && (n.username = [n.username]), e(r).unbind("tweet:render").unbind("tweet:retrieved").unbind("tweet:load").bind({
                "tweet:load": function () {
                    m(r)
                },
                "tweet:retrieved": function (t, n) {
                    e(r).trigger("tweet:render", [n])
                },
                "tweet:render": function (t, n) {
                    v(e(r), n)
                }
            }).trigger("tweet:load")
        })
    }
}),
function () {
    jQuery.parseQueryString = function (e) {
        var t = {};
        e == null && (e = document.location.search);
        var n = e.replace(/^\?/, "").split("&");
        for (var r = 0; r < n.length; r++) {
            var i = n[r].split("=");
            t[i[0]] = i[1]
        }
        return t
    };
    var e;
    jQuery.queryParam = function (t) {
        return e == null && (e = jQuery.parseQueryString()), e[t]
    }
}(), 
function (e) {
    e.fn.tooltips = function (t) {
        var n, r = e("body"),
            i;
        return this.each(function (t, n) {
            i = e(n).attr("data-tooltip", t);
            var r = e('<div class="tooltip" data-tooltip="' + t + '">' + i.attr("title") + '<div class="tooltip-arrow"></div></div>').appendTo("body"),
                s = i.position();
            r.css({
                top: s.top - r.outerHeight() - 13,
                left: s.left - r.width() / 2
            }), i.removeAttr("title").hover(function () {
                i = e(this), r = e("div[data-tooltip=" + i.data("tooltip") + "]");
                var t = i.position();
                r.css({
                    top: t.top - r.outerHeight() - 13,
                    left: t.left - r.width() / 2
                }), r.addClass("active")
            }, function () {
                i = e(this), r = e("div[data-tooltip=" + i.data("tooltip") + "]").addClass("out"), setTimeout(function () {
                    r.removeClass("active").removeClass("out")
                }, 300)
            })
        })
    }
}(jQuery),
function () {
    var e = this,
        t = e._,
        n = {}, r = Array.prototype,
        i = Object.prototype,
        s = Function.prototype,
        o = r.push,
        u = r.slice,
        a = r.concat,
        f = i.toString,
        l = i.hasOwnProperty,
        c = r.forEach,
        h = r.map,
        p = r.reduce,
        d = r.reduceRight,
        v = r.filter,
        m = r.every,
        g = r.some,
        y = r.indexOf,
        b = r.lastIndexOf,
        w = Array.isArray,
        E = Object.keys,
        S = s.bind,
        x = function (e) {
            if (e instanceof x) return e;
            if (!(this instanceof x)) return new x(e);
            this._wrapped = e
        };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.5.2";
    var T = x.each = x.forEach = function (e, t, r) {
        if (e == null) return;
        if (c && e.forEach === c) e.forEach(t, r);
        else if (e.length === +e.length) {
            for (var i = 0, s = e.length; i < s; i++)
                if (t.call(r, e[i], i, e) === n) return
        } else {
            var o = x.keys(e);
            for (var i = 0, s = o.length; i < s; i++)
                if (t.call(r, e[o[i]], o[i], e) === n) return
        }
    };
    x.map = x.collect = function (e, t, n) {
        var r = [];
        return e == null ? r : h && e.map === h ? e.map(t, n) : (T(e, function (e, i, s) {
            r.push(t.call(n, e, i, s))
        }), r)
    };
    var N = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        T(e, function (e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
        });
        if (!i) throw new TypeError(N);
        return n
    }, x.reduceRight = x.foldr = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = e.length;
        if (s !== +s) {
            var o = x.keys(e);
            s = o.length
        }
        T(e, function (u, a, f) {
            a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
        });
        if (!i) throw new TypeError(N);
        return n
    }, x.find = x.detect = function (e, t, n) {
        var r;
        return C(e, function (e, i, s) {
            if (t.call(n, e, i, s)) return r = e, !0
        }), r
    }, x.filter = x.select = function (e, t, n) {
        var r = [];
        return e == null ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function (e, i, s) {
            t.call(n, e, i, s) && r.push(e)
        }), r)
    }, x.reject = function (e, t, n) {
        return x.filter(e, function (e, r, i) {
            return !t.call(n, e, r, i)
        }, n)
    }, x.every = x.all = function (e, t, r) {
        t || (t = x.identity);
        var i = !0;
        return e == null ? i : m && e.every === m ? e.every(t, r) : (T(e, function (e, s, o) {
            if (!(i = i && t.call(r, e, s, o))) return n
        }), !! i)
    };
    var C = x.some = x.any = function (e, t, r) {
        t || (t = x.identity);
        var i = !1;
        return e == null ? i : g && e.some === g ? e.some(t, r) : (T(e, function (e, s, o) {
            if (i || (i = t.call(r, e, s, o))) return n
        }), !! i)
    };
    x.contains = x.include = function (e, t) {
        return e == null ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function (e) {
            return e === t
        })
    }, x.invoke = function (e, t) {
        var n = u.call(arguments, 2),
            r = x.isFunction(t);
        return x.map(e, function (e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, x.pluck = function (e, t) {
        return x.map(e, function (e) {
            return e[t]
        })
    }, x.where = function (e, t, n) {
        return x.isEmpty(t) ? n ? void 0 : [] : x[n ? "find" : "filter"](e, function (e) {
            for (var n in t)
                if (t[n] !== e[n]) return !1;
            return !0
        })
    }, x.findWhere = function (e, t) {
        return x.where(e, t, !0)
    }, x.max = function (e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        if (!t && x.isEmpty(e)) return -Infinity;
        var r = {
            computed: -Infinity,
            value: -Infinity
        };
        return T(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o > r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.min = function (e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
        if (!t && x.isEmpty(e)) return Infinity;
        var r = {
            computed: Infinity,
            value: Infinity
        };
        return T(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o < r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.shuffle = function (e) {
        var t, n = 0,
            r = [];
        return T(e, function (e) {
            t = x.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    }, x.sample = function (e, t, n) {
        return arguments.length < 2 || n ? e[x.random(e.length - 1)] : x.shuffle(e).slice(0, Math.max(0, t))
    };
    var k = function (e) {
        return x.isFunction(e) ? e : function (t) {
            return t[e]
        }
    };
    x.sortBy = function (e, t, n) {
        var r = k(t);
        return x.pluck(x.map(e, function (e, t, i) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, i)
            }
        }).sort(function (e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0) return 1;
                if (n < r || r === void 0) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var L = function (e) {
        return function (t, n, r) {
            var i = {}, s = n == null ? x.identity : k(n);
            return T(t, function (n, o) {
                var u = s.call(r, n, o, t);
                e(i, u, n)
            }), i
        }
    };
    x.groupBy = L(function (e, t, n) {
        (x.has(e, t) ? e[t] : e[t] = []).push(n)
    }), x.indexBy = L(function (e, t, n) {
        e[t] = n
    }), x.countBy = L(function (e, t) {
        x.has(e, t) ? e[t]++ : e[t] = 1
    }), x.sortedIndex = function (e, t, n, r) {
        n = n == null ? x.identity : k(n);
        var i = n.call(r, t),
            s = 0,
            o = e.length;
        while (s < o) {
            var u = s + o >>> 1;
            n.call(r, e[u]) < i ? s = u + 1 : o = u
        }
        return s
    }, x.toArray = function (e) {
        return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
    }, x.size = function (e) {
        return e == null ? 0 : e.length === +e.length ? e.length : x.keys(e).length
    }, x.first = x.head = x.take = function (e, t, n) {
        return e == null ? void 0 : t == null || n ? e[0] : u.call(e, 0, t)
    }, x.initial = function (e, t, n) {
        return u.call(e, 0, e.length - (t == null || n ? 1 : t))
    }, x.last = function (e, t, n) {
        return e == null ? void 0 : t == null || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0))
    }, x.rest = x.tail = x.drop = function (e, t, n) {
        return u.call(e, t == null || n ? 1 : t)
    }, x.compact = function (e) {
        return x.filter(e, x.identity)
    };
    var A = function (e, t, n) {
        return t && x.every(e, x.isArray) ? a.apply(n, e) : (T(e, function (e) {
            x.isArray(e) || x.isArguments(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
        }), n)
    };
    x.flatten = function (e, t) {
        return A(e, t, [])
    }, x.without = function (e) {
        return x.difference(e, u.call(arguments, 1))
    }, x.uniq = x.unique = function (e, t, n, r) {
        x.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? x.map(e, n, r) : e,
            s = [],
            o = [];
        return T(i, function (n, r) {
            if (t ? !r || o[o.length - 1] !== n : !x.contains(o, n)) o.push(n), s.push(e[r])
        }), s
    }, x.union = function () {
        return x.uniq(x.flatten(arguments, !0))
    }, x.intersection = function (e) {
        var t = u.call(arguments, 1);
        return x.filter(x.uniq(e), function (e) {
            return x.every(t, function (t) {
                return x.indexOf(t, e) >= 0
            })
        })
    }, x.difference = function (e) {
        var t = a.apply(r, u.call(arguments, 1));
        return x.filter(e, function (e) {
            return !x.contains(t, e)
        })
    }, x.zip = function () {
        var e = x.max(x.pluck(arguments, "length").concat(0)),
            t = new Array(e);
        for (var n = 0; n < e; n++) t[n] = x.pluck(arguments, "" + n);
        return t
    }, x.object = function (e, t) {
        if (e == null) return {};
        var n = {};
        for (var r = 0, i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, x.indexOf = function (e, t, n) {
        if (e == null) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if (typeof n != "number") return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
            r = n < 0 ? Math.max(0, i + n) : n
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (; r < i; r++)
            if (e[r] === t) return r;
        return -1
    }, x.lastIndexOf = function (e, t, n) {
        if (e == null) return -1;
        var r = n != null;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        var i = r ? n : e.length;
        while (i--)
            if (e[i] === t) return i;
        return -1
    }, x.range = function (e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0),
            i = 0,
            s = new Array(r);
        while (i < r) s[i++] = e, e += n;
        return s
    };
    var O = function () {};
    x.bind = function (e, t) {
        var n, r;
        if (S && e.bind === S) return S.apply(e, u.call(arguments, 1));
        if (!x.isFunction(e)) throw new TypeError;
        return n = u.call(arguments, 2), r = function () {
            if (this instanceof r) {
                O.prototype = e.prototype;
                var i = new O;
                O.prototype = null;
                var s = e.apply(i, n.concat(u.call(arguments)));
                return Object(s) === s ? s : i
            }
            return e.apply(t, n.concat(u.call(arguments)))
        }
    }, x.partial = function (e) {
        var t = u.call(arguments, 1);
        return function () {
            return e.apply(this, t.concat(u.call(arguments)))
        }
    }, x.bindAll = function (e) {
        var t = u.call(arguments, 1);
        if (t.length === 0) throw new Error("bindAll must be passed function names");
        return T(t, function (t) {
            e[t] = x.bind(e[t], e)
        }), e
    }, x.memoize = function (e, t) {
        var n = {};
        return t || (t = x.identity),
        function () {
            var r = t.apply(this, arguments);
            return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }, x.delay = function (e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, x.defer = function (e) {
        return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
    }, x.throttle = function (e, t, n) {
        var r, i, s, o = null,
            u = 0;
        n || (n = {});
        var a = function () {
            u = n.leading === !1 ? 0 : new Date, o = null, s = e.apply(r, i)
        };
        return function () {
            var f = new Date;
            !u && n.leading === !1 && (u = f);
            var l = t - (f - u);
            return r = this, i = arguments, l <= 0 ? (clearTimeout(o), o = null, u = f, s = e.apply(r, i)) : !o && n.trailing !== !1 && (o = setTimeout(a, l)), s
        }
    }, x.debounce = function (e, t, n) {
        var r, i, s, o, u;
        return function () {
            s = this, i = arguments, o = new Date;
            var a = function () {
                var f = new Date - o;
                f < t ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i)))
            }, f = n && !r;
            return r || (r = setTimeout(a, t)), f && (u = e.apply(s, i)), u
        }
    }, x.once = function (e) {
        var t = !1,
            n;
        return function () {
            return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
        }
    }, x.wrap = function (e, t) {
        return function () {
            var n = [e];
            return o.apply(n, arguments), t.apply(this, n)
        }
    }, x.compose = function () {
        var e = arguments;
        return function () {
            var t = arguments;
            for (var n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, x.after = function (e, t) {
        return function () {
            if (--e < 1) return t.apply(this, arguments)
        }
    }, x.keys = E || function (e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) x.has(e, n) && t.push(n);
        return t
    }, x.values = function (e) {
        var t = x.keys(e),
            n = t.length,
            r = new Array(n);
        for (var i = 0; i < n; i++) r[i] = e[t[i]];
        return r
    }, x.pairs = function (e) {
        var t = x.keys(e),
            n = t.length,
            r = new Array(n);
        for (var i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
        return r
    }, x.invert = function (e) {
        var t = {}, n = x.keys(e);
        for (var r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
        return t
    }, x.functions = x.methods = function (e) {
        var t = [];
        for (var n in e) x.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, x.extend = function (e) {
        return T(u.call(arguments, 1), function (t) {
            if (t)
                for (var n in t) e[n] = t[n]
        }), e
    }, x.pick = function (e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        return T(n, function (n) {
            n in e && (t[n] = e[n])
        }), t
    }, x.omit = function (e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        for (var i in e) x.contains(n, i) || (t[i] = e[i]);
        return t
    }, x.defaults = function (e) {
        return T(u.call(arguments, 1), function (t) {
            if (t)
                for (var n in t) e[n] === void 0 && (e[n] = t[n])
        }), e
    }, x.clone = function (e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
    }, x.tap = function (e, t) {
        return t(e), e
    };
    var M = function (e, t, n, r) {
        if (e === t) return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null) return e === t;
        e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
        var i = f.call(e);
        if (i != f.call(t)) return !1;
        switch (i) {
        case "[object String]":
            return e == String(t);
        case "[object Number]":
            return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +e == +t;
        case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if (typeof e != "object" || typeof t != "object") return !1;
        var s = n.length;
        while (s--)
            if (n[s] == e) return r[s] == t;
        var o = e.constructor,
            u = t.constructor;
        if (o !== u && !(x.isFunction(o) && o instanceof o && x.isFunction(u) && u instanceof u)) return !1;
        n.push(e), r.push(t);
        var a = 0,
            l = !0;
        if (i == "[object Array]") {
            a = e.length, l = a == t.length;
            if (l)
                while (a--)
                    if (!(l = M(e[a], t[a], n, r))) break
        } else {
            for (var c in e)
                if (x.has(e, c)) {
                    a++;
                    if (!(l = x.has(t, c) && M(e[c], t[c], n, r))) break
                }
            if (l) {
                for (c in t)
                    if (x.has(t, c) && !(a--)) break;
                l = !a
            }
        }
        return n.pop(), r.pop(), l
    };
    x.isEqual = function (e, t) {
        return M(e, t, [], [])
    }, x.isEmpty = function (e) {
        if (e == null) return !0;
        if (x.isArray(e) || x.isString(e)) return e.length === 0;
        for (var t in e)
            if (x.has(e, t)) return !1;
        return !0
    }, x.isElement = function (e) {
        return !!e && e.nodeType === 1
    }, x.isArray = w || function (e) {
        return f.call(e) == "[object Array]"
    }, x.isObject = function (e) {
        return e === Object(e)
    }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
        x["is" + e] = function (t) {
            return f.call(t) == "[object " + e + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function (e) {
        return !!e && !! x.has(e, "callee")
    }), typeof / . / != "function" && (x.isFunction = function (e) {
        return typeof e == "function"
    }), x.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, x.isNaN = function (e) {
        return x.isNumber(e) && e != +e
    }, x.isBoolean = function (e) {
        return e === !0 || e === !1 || f.call(e) == "[object Boolean]"
    }, x.isNull = function (e) {
        return e === null
    }, x.isUndefined = function (e) {
        return e === void 0
    }, x.has = function (e, t) {
        return l.call(e, t)
    }, x.noConflict = function () {
        return e._ = t, this
    }, x.identity = function (e) {
        return e
    }, x.times = function (e, t, n) {
        var r = Array(Math.max(0, e));
        for (var i = 0; i < e; i++) r[i] = t.call(n, i);
        return r
    }, x.random = function (e, t) {
        return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    };
    var _ = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    _.unescape = x.invert(_.escape);
    var D = {
        escape: new RegExp("[" + x.keys(_.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(_.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"], function (e) {
        x[e] = function (t) {
            return t == null ? "" : ("" + t).replace(D[e], function (t) {
                return _[e][t]
            })
        }
    }), x.result = function (e, t) {
        if (e == null) return void 0;
        var n = e[t];
        return x.isFunction(n) ? n.call(e) : n
    }, x.mixin = function (e) {
        T(x.functions(e), function (t) {
            var n = x[t] = e[t];
            x.prototype[t] = function () {
                var e = [this._wrapped];
                return o.apply(e, arguments), F.call(this, n.apply(x, e))
            }
        })
    };
    var P = 0;
    x.uniqueId = function (e) {
        var t = ++P + "";
        return e ? e + t : t
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var H = /(.)^/,
        B = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function (e, t, n) {
        var r;
        n = x.defaults({}, n, x.templateSettings);
        var i = new RegExp([(n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source].join("|") + "|$", "g"),
            s = 0,
            o = "__p+='";
        e.replace(i, function (t, n, r, i, u) {
            return o += e.slice(s, u).replace(j, function (e) {
                return "\\" + B[e]
            }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t
        }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            r = new Function(n.variable || "obj", "_", o)
        } catch (u) {
            throw u.source = o, u
        }
        if (t) return r(t, x);
        var a = function (e) {
            return r.call(this, e, x)
        };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
    }, x.chain = function (e) {
        return x(e).chain()
    };
    var F = function (e) {
        return this._chain ? x(e).chain() : e
    };
    x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = r[e];
        x.prototype[e] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], F.call(this, n)
        }
    }), T(["concat", "join", "slice"], function (e) {
        var t = r[e];
        x.prototype[e] = function () {
            return F.call(this, t.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    })
}.call(this);

$(document).ready(function() {
  // Tabs for Screenshots 
  var tabs = $('ul.tabs');
    tabs.each(function(i) {
        var tab = $(this).find('> li > a');
        tab.click(function(e) {
            $('ul.tabs > li > a.active > span').removeClass('active');
            var contentLocation = $(this).attr('href');
            if(contentLocation.charAt(0)=="#") {
                e.preventDefault();
                tab.removeClass('active');
                $(this).addClass('active');
                $('ul.tabs > li > a.active > span').addClass('active');
                $(contentLocation).show().addClass('active').siblings().hide().removeClass('active');
            }
        });
    });
     $( '#dl-menu' ).dlmenu({
      animationClasses : { classin : 'dl-animate-in-2', classout : 'dl-animate-out-2'}     
    });
    $("#segment-test").removeClass('hidden');
    $(".overview").css({"display":"none", "visibility":""});
    $(".experience").css({"display":"none", "visibility":""});
    $(".testimonials").css({"padding-top":"0"});
    $(".examples").css({"padding-bottom":"60px"});

      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-45820109-1', 'smartsale.kz');
      ga('send', 'pageview');
});