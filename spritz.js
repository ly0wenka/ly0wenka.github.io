/* 
 SpritzBookmarklet 
 1.1.15 
 04-16-2019 
 */
!function(a) {
    function b(a) {
        return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
    }
    function c(a, b) {
        var c = d(a, b) ? f : e;
        c(a, b)
    }
    var d, e, f;
    "classList"in document.documentElement ? (d = function(a, b) {
        return a.classList.contains(b)
    }
    ,
    e = function(a, b) {
        a.classList.add(b)
    }
    ,
    f = function(a, b) {
        a.classList.remove(b)
    }
    ) : (d = function(a, c) {
        return b(c).test(a.className)
    }
    ,
    e = function(a, b) {
        d(a, b) || (a.className = a.className + " " + b)
    }
    ,
    f = function(a, c) {
        a.className = a.className.replace(b(c), " ")
    }
    );
    var g = {
        hasClass: d,
        addClass: e,
        removeClass: f,
        toggleClass: c,
        has: d,
        add: e,
        remove: f,
        toggle: c
    };
    a.classie = g
}(window),
function() {
    function a() {}
    function b(a, b) {
        for (var c = a.length; c--; )
            if (a[c].listener === b)
                return c;
        return -1
    }
    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype
      , e = this
      , f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d)
                d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else
            b = d[a] || (d[a] = []);
        return b
    }
    ,
    d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1)
            c.push(a[b].listener);
        return c
    }
    ,
    d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {},
        b[a] = c),
        b || c
    }
    ,
    d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a), f = "object" == typeof c;
        for (d in e)
            e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
                listener: c,
                once: !1
            });
        return this
    }
    ,
    d.on = c("addListener"),
    d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }
    ,
    d.once = c("addOnceListener"),
    d.defineEvent = function(a) {
        return this.getListeners(a),
        this
    }
    ,
    d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1)
            this.defineEvent(a[b]);
        return this
    }
    ,
    d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f)
            f.hasOwnProperty(e) && (d = b(f[e], c),
            -1 !== d && f[e].splice(d, 1));
        return this
    }
    ,
    d.off = c("removeListener"),
    d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }
    ,
    d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }
    ,
    d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener, g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--; )
                f.call(this, b, c[d]);
        else
            for (d in b)
                b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }
    ,
    d.removeEvent = function(a) {
        var b, c = typeof a, d = this._getEvents();
        if ("string" === c)
            delete d[a];
        else if (a instanceof RegExp)
            for (b in d)
                d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else
            delete this._events;
        return this
    }
    ,
    d.removeAllListeners = c("removeEvent"),
    d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--; )
                    c = g[e][d],
                    c.once === !0 && this.removeListener(a, c.listener),
                    f = c.listener.apply(this, b || []),
                    f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }
    ,
    d.trigger = c("emitEvent"),
    d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }
    ,
    d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a,
        this
    }
    ,
    d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }
    ,
    d._getEvents = function() {
        return this._events || (this._events = {})
    }
    ,
    a.noConflict = function() {
        return e.EventEmitter = f,
        a
    }
    ,
    this.EventEmitter = a
}
.call(this),
function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b,
        c
    }
    var c = document.documentElement
      , d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    }
    : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        }
        : function() {
            var c = b(a);
            d.call(a, c)
        }
        ,
        a.attachEvent("on" + c, a[c + d])
    }
    );
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    }
    : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    }
    );
    var f = {
        bind: d,
        unbind: e
    };
    a.eventie = f
}(this),
function(a) {
    function b(a) {
        if (a) {
            if ("string" == typeof d[a])
                return a;
            a = a.charAt(0).toUpperCase() + a.slice(1);
            for (var b, e = 0, f = c.length; f > e; e++)
                if (b = c[e] + a,
                "string" == typeof d[b])
                    return b
        }
    }
    var c = "Webkit Moz ms Ms O".split(" ")
      , d = document.documentElement.style;
    a.getStyleProperty = b
}(window),
function(a, b) {
    function c(a) {
        var b = parseFloat(a)
          , c = -1 === a.indexOf("%") && !isNaN(b);
        return c && b
    }
    function d() {
        for (var a = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, b = 0, c = h.length; c > b; b++) {
            var d = h[b];
            a[d] = 0
        }
        return a
    }
    function e(a) {
        function b(a) {
            if ("string" == typeof a && (a = document.querySelector(a)),
            a && "object" == typeof a && a.nodeType) {
                var b = g(a);
                if ("none" === b.display)
                    return d();
                var f = {};
                f.width = a.offsetWidth,
                f.height = a.offsetHeight;
                for (var k = f.isBorderBox = !(!j || !b[j] || "border-box" !== b[j]), l = 0, m = h.length; m > l; l++) {
                    var n = h[l]
                      , o = b[n];
                    o = e(a, o);
                    var p = parseFloat(o);
                    f[n] = isNaN(p) ? 0 : p
                }
                var q = f.paddingLeft + f.paddingRight
                  , r = f.paddingTop + f.paddingBottom
                  , s = f.marginLeft + f.marginRight
                  , t = f.marginTop + f.marginBottom
                  , u = f.borderLeftWidth + f.borderRightWidth
                  , v = f.borderTopWidth + f.borderBottomWidth
                  , w = k && i
                  , x = c(b.width);
                x !== !1 && (f.width = x + (w ? 0 : q + u));
                var y = c(b.height);
                return y !== !1 && (f.height = y + (w ? 0 : r + v)),
                f.innerWidth = f.width - (q + u),
                f.innerHeight = f.height - (r + v),
                f.outerWidth = f.width + s,
                f.outerHeight = f.height + t,
                f
            }
        }
        function e(a, b) {
            if (f || -1 === b.indexOf("%"))
                return b;
            var c = a.style
              , d = c.left
              , e = a.runtimeStyle
              , g = e && e.left;
            return g && (e.left = a.currentStyle.left),
            c.left = b,
            b = c.pixelLeft,
            c.left = d,
            g && (e.left = g),
            b
        }
        var i, j = a("boxSizing");
        return function() {
            if (j) {
                var a = document.createElement("div");
                a.style.width = "200px",
                a.style.padding = "1px 2px 3px 4px",
                a.style.borderStyle = "solid",
                a.style.borderWidth = "1px 2px 3px 4px",
                a.style[j] = "border-box";
                var b = document.body || document.documentElement;
                b.appendChild(a);
                var d = g(a);
                i = 200 === c(d.width),
                b.removeChild(a)
            }
        }(),
        b
    }
    var f = a.getComputedStyle
      , g = f ? function(a) {
        return f(a, null)
    }
    : function(a) {
        return a.currentStyle
    }
      , h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    a.getSize = e(a.getStyleProperty)
}(window),
function(a) {
    function b(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function c() {}
    function d(d, e, g, j, k) {
        function m(a, c) {
            this.element = "string" == typeof a ? f.querySelector(a) : a,
            this.options = b({}, this.options),
            b(this.options, c),
            this._create()
        }
        function n() {
            return !1
        }
        function o(a, b) {
            a.x = void 0 !== b.pageX ? b.pageX : b.clientX,
            a.y = void 0 !== b.pageY ? b.pageY : b.clientY
        }
        function p(a, b, c) {
            return c = c || "round",
            b ? Math[c](a / b) * b : a
        }
        var q = j("transform")
          , r = !!j("perspective");
        b(m.prototype, e.prototype),
        m.prototype.options = {},
        m.prototype._create = function() {
            this.position = {},
            this._getPosition(),
            this.startPoint = {
                x: 0,
                y: 0
            },
            this.dragPoint = {
                x: 0,
                y: 0
            },
            this.startPosition = b({}, this.position);
            var a = h(this.element);
            "relative" !== a.position && "absolute" !== a.position && (this.element.style.position = "relative"),
            this.enable(),
            this.setHandles()
        }
        ,
        m.prototype.setHandles = function() {
            this.handles = this.options.handle ? this.element.querySelectorAll(this.options.handle) : [this.element];
            for (var b = 0, c = this.handles.length; c > b; b++) {
                var d = this.handles[b];
                a.navigator.pointerEnabled ? (g.bind(d, "pointerdown", this),
                d.style.touchAction = "none") : a.navigator.msPointerEnabled ? (g.bind(d, "MSPointerDown", this),
                d.style.msTouchAction = "none") : (g.bind(d, "mousedown", this),
                g.bind(d, "touchstart", this),
                t(d))
            }
        }
        ;
        var s = "attachEvent"in f.documentElement
          , t = s ? function(a) {
            "IMG" === a.nodeName && (a.ondragstart = n);
            for (var b = a.querySelectorAll("img"), c = 0, d = b.length; d > c; c++) {
                var e = b[c];
                e.ondragstart = n
            }
        }
        : c;
        m.prototype._getPosition = function() {
            var a = h(this.element)
              , b = parseInt(a.left, 10)
              , c = parseInt(a.top, 10);
            this.position.x = isNaN(b) ? 0 : b,
            this.position.y = isNaN(c) ? 0 : c,
            this._addTransformPosition(a)
        }
        ,
        m.prototype._addTransformPosition = function(a) {
            if (q) {
                var b = a[q];
                if (0 === b.indexOf("matrix")) {
                    var c = b.split(",")
                      , d = 0 === b.indexOf("matrix3d") ? 12 : 4
                      , e = parseInt(c[d], 10)
                      , f = parseInt(c[d + 1], 10);
                    this.position.x += e,
                    this.position.y += f
                }
            }
        }
        ,
        m.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }
        ,
        m.prototype.getTouch = function(a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                if (d.identifier === this.pointerIdentifier)
                    return d
            }
        }
        ,
        m.prototype.onmousedown = function(a) {
            var b = a.button;
            b && 0 !== b && 1 !== b || this.dragStart(a, a)
        }
        ,
        m.prototype.ontouchstart = function(a) {
            this.isDragging || this.dragStart(a, a.changedTouches[0])
        }
        ,
        m.prototype.onMSPointerDown = m.prototype.onpointerdown = function(a) {
            this.isDragging || this.dragStart(a, a)
        }
        ;
        var u = {
            mousedown: ["mousemove", "mouseup"],
            touchstart: ["touchmove", "touchend", "touchcancel"],
            pointerdown: ["pointermove", "pointerup", "pointercancel"],
            MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"]
        };
        m.prototype.dragStart = function(b, c) {
            this.isEnabled && (b.preventDefault ? b.preventDefault() : b.returnValue = !1,
            this.pointerIdentifier = void 0 !== c.pointerId ? c.pointerId : c.identifier,
            this._getPosition(),
            this.measureContainment(),
            o(this.startPoint, c),
            this.startPosition.x = this.position.x,
            this.startPosition.y = this.position.y,
            this.setLeftTop(),
            this.dragPoint.x = 0,
            this.dragPoint.y = 0,
            this._bindEvents({
                events: u[b.type],
                node: b.preventDefault ? a : f
            }),
            d.add(this.element, "is-dragging"),
            this.isDragging = !0,
            this.emitEvent("dragStart", [this, b, c]),
            this.animate())
        }
        ,
        m.prototype._bindEvents = function(a) {
            for (var b = 0, c = a.events.length; c > b; b++) {
                var d = a.events[b];
                g.bind(a.node, d, this)
            }
            this._boundEvents = a
        }
        ,
        m.prototype._unbindEvents = function() {
            var a = this._boundEvents;
            if (a && a.events) {
                for (var b = 0, c = a.events.length; c > b; b++) {
                    var d = a.events[b];
                    g.unbind(a.node, d, this)
                }
                delete this._boundEvents
            }
        }
        ,
        m.prototype.measureContainment = function() {
            var a = this.options.containment;
            if (a) {
                this.size = k(this.element);
                var b = this.element.getBoundingClientRect()
                  , c = i(a) ? a : "string" == typeof a ? f.querySelector(a) : this.element.parentNode;
                this.containerSize = k(c);
                var d = c.getBoundingClientRect();
                this.relativeStartPosition = {
                    x: b.left - d.left,
                    y: b.top - d.top
                }
            }
        }
        ,
        m.prototype.onmousemove = function(a) {
            this.dragMove(a, a)
        }
        ,
        m.prototype.onMSPointerMove = m.prototype.onpointermove = function(a) {
            a.pointerId === this.pointerIdentifier && this.dragMove(a, a)
        }
        ,
        m.prototype.ontouchmove = function(a) {
            var b = this.getTouch(a.changedTouches);
            b && this.dragMove(a, b)
        }
        ,
        m.prototype.dragMove = function(a, b) {
            o(this.dragPoint, b);
            var c = this.dragPoint.x - this.startPoint.x
              , d = this.dragPoint.y - this.startPoint.y
              , e = this.options.grid
              , f = e && e[0]
              , g = e && e[1];
            c = p(c, f),
            d = p(d, g),
            c = this.containDrag("x", c, f),
            d = this.containDrag("y", d, g),
            c = "y" === this.options.axis ? 0 : c,
            d = "x" === this.options.axis ? 0 : d,
            this.position.x = this.startPosition.x + c,
            this.position.y = this.startPosition.y + d,
            this.dragPoint.x = c,
            this.dragPoint.y = d,
            this.emitEvent("dragMove", [this, a, b])
        }
        ,
        m.prototype.containDrag = function(a, b, c) {
            if (!this.options.containment)
                return b;
            var d = "x" === a ? "width" : "height"
              , e = this.relativeStartPosition[a]
              , f = p(-e, c, "ceil")
              , g = this.containerSize[d] - e - this.size[d];
            return g = p(g, c, "floor"),
            Math.min(g, Math.max(f, b))
        }
        ,
        m.prototype.onmouseup = function(a) {
            this.dragEnd(a, a)
        }
        ,
        m.prototype.onMSPointerUp = m.prototype.onpointerup = function(a) {
            a.pointerId === this.pointerIdentifier && this.dragEnd(a, a)
        }
        ,
        m.prototype.ontouchend = function(a) {
            var b = this.getTouch(a.changedTouches);
            b && this.dragEnd(a, b)
        }
        ,
        m.prototype.dragEnd = function(a, b) {
            this.isDragging = !1,
            delete this.pointerIdentifier,
            q && (this.element.style[q] = "",
            this.setLeftTop()),
            this._unbindEvents(),
            d.remove(this.element, "is-dragging"),
            this.emitEvent("dragEnd", [this, a, b])
        }
        ,
        m.prototype.onMSPointerCancel = m.prototype.onpointercancel = function(a) {
            a.pointerId === this.pointerIdentifier && this.dragEnd(a, a)
        }
        ,
        m.prototype.ontouchcancel = function(a) {
            var b = this.getTouch(a.changedTouches);
            this.dragEnd(a, b)
        }
        ,
        m.prototype.animate = function() {
            if (this.isDragging) {
                this.positionDrag();
                var a = this;
                l(function() {
                    a.animate()
                })
            }
        }
        ;
        var v = r ? function(a, b) {
            return "translate3d( " + a + "px, " + b + "px, 0)"
        }
        : function(a, b) {
            return "translate( " + a + "px, " + b + "px)"
        }
        ;
        return m.prototype.setLeftTop = function() {
            this.element.style.left = this.position.x + "px",
            this.element.style.top = this.position.y + "px"
        }
        ,
        m.prototype.positionDrag = q ? function() {
            this.element.style[q] = v(this.dragPoint.x, this.dragPoint.y)
        }
        : m.prototype.setLeftTop,
        m.prototype.enable = function() {
            this.isEnabled = !0
        }
        ,
        m.prototype.disable = function() {
            this.isEnabled = !1,
            this.isDragging && this.dragEnd()
        }
        ,
        m
    }
    for (var e, f = a.document, g = f.defaultView, h = g && g.getComputedStyle ? function(a) {
        return g.getComputedStyle(a, null)
    }
    : function(a) {
        return a.currentStyle
    }
    , i = "object" == typeof HTMLElement ? function(a) {
        return a instanceof HTMLElement
    }
    : function(a) {
        return a && "object" == typeof a && 1 === a.nodeType && "string" == typeof a.nodeName
    }
    , j = 0, k = "webkit moz ms o".split(" "), l = a.requestAnimationFrame, m = a.cancelAnimationFrame, n = 0; n < k.length && (!l || !m); n++)
        e = k[n],
        l = l || a[e + "RequestAnimationFrame"],
        m = m || a[e + "CancelAnimationFrame"] || a[e + "CancelRequestAnimationFrame"];
    l && m || (l = function(b) {
        var c = (new Date).getTime()
          , d = Math.max(0, 16 - (c - j))
          , e = a.setTimeout(function() {
            b(c + d)
        }, d);
        return j = c + d,
        e
    }
    ,
    m = function(b) {
        a.clearTimeout(b)
    }
    ),
    a.Draggabilly = d(a.classie, a.EventEmitter, a.eventie, a.getStyleProperty, a.getSize)
}(window);
var dbg = function() {}
  , readability = {
    version: "1.7.1",
    flags: 7,
    FLAG_STRIP_UNLIKELYS: 1,
    FLAG_WEIGHT_CLASSES: 2,
    FLAG_CLEAN_CONDITIONALLY: 4,
    maxPages: 30,
    parsedPages: {},
    pageETags: {},
    regexps: {
        unlikelyCandidates: /ad|vertisement|aside|combx|comment|community|disqus|extra|foot|nav|header|menu|remark|rss|shoutbox|sidebar|sponsor|ad-break|agegate|pagination|pager|popup|tweet|twitter|figure|figcaption|style|script/i,
        okMaybeItsACandidate: /and|article|body|column|main|shadow/i,
        positive: /article|body|content|entry|hentry|main|page|pagination|post|text|blog|story/i,
        negative: /combx|comment|com-|contact|foot|footer|footnote|masthead|media|meta|outbrain|promo|related|scroll|shoutbox|sidebar|sponsor|shopping|tags|tool|widget|style|script|spritzlet-container/i,
        extraneous: /print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single/i,
        divToPElements: /<(a|blockquote|dl|div|img|ol|p|pre|table|ul)/i,
        replaceBrs: /(<br[^>]*>[ \n\r\t]*){2,}/gi,
        replaceFonts: /<(\/?)font[^>]*>/gi,
        trim: /^\s+|\s+$/g,
        normalize: /\s{2,}/g,
        killBreaks: /(<br\s*\/?>(\s|&nbsp;?)*){1,}/g,
        videos: /http:\/\/(www\.)?(youtube|vimeo)\.com/i,
        skipFootnoteLink: /^\s*(\[?[a-z0-9]{1,2}\]?|^|edit|citation needed)\s*$/i,
        nextLink: /(next|weiter|continue|>([^\|]|$)|Â»([^\|]|$))/i,
        prevLink: /(prev|earl|old|new|<|Â«)/i
    },
    prepArticle: function(a) {
        readability.killBreaks(a),
        readability.cleanConditionally(a, "form"),
        readability.clean(a, "script"),
        readability.clean(a, "style"),
        readability.clean(a, "object"),
        readability.clean(a, "iframe"),
        readability.clean(a, "cite"),
        readability.clean(a, "audio"),
        readability.clean(a, "address"),
        readability.clean(a, "time"),
        readability.clean(a, "meta"),
        readability.cleanHeaders(a),
        readability.cleanConditionally(a, "table"),
        readability.cleanConditionally(a, "ul"),
        readability.cleanConditionally(a, "div");
        for (var b = a.getElementsByTagName("p"), c = b.length - 1; c >= 0; c -= 1) {
            var d = b[c].getElementsByTagName("img").length
              , e = b[c].getElementsByTagName("embed").length
              , f = b[c].getElementsByTagName("object").length;
            0 === d && 0 === e && 0 === f && "" === b[c].textContent && b[c].parentNode.removeChild(b[c])
        }
        try {
            a.innerHTML = a.innerHTML.replace(/<br[^>]*>\s*<p/gi, "<p")
        } catch (g) {
            dbg("Cleaning innerHTML of breaks failed. This is an IE strict-block-elements bug. Ignoring.: " + g)
        }
    },
    initializeNode: function(a) {
        switch (a.readability = {
            contentScore: 0
        },
        a.tagName) {
        case "DIV":
            a.readability.contentScore += 5;
            break;
        case "PRE":
        case "TD":
        case "BLOCKQUOTE":
            a.readability.contentScore += 3;
            break;
        case "ADDRESS":
        case "OL":
        case "UL":
        case "DL":
        case "DD":
        case "DT":
        case "LI":
        case "FORM":
            a.readability.contentScore -= 3;
            break;
        case "H1":
        case "H2":
        case "H3":
        case "H4":
        case "H5":
        case "H6":
        case "TH":
            a.readability.contentScore -= 5
        }
        a.readability.contentScore += readability.getClassWeight(a)
    },
    getBestTextNode: function() {
        var a, b = readability.flagIsActive(readability.FLAG_STRIP_UNLIKELYS), c = document.body.cloneNode(!0), d = c.getElementsByTagName("*"), e = null, f = [], g = function(b) {
            b.parentNode.removeChild(b),
            a--
        };
        for (a = 0; e = d[a]; a += 1)
            if ("svg" != e.tagName)
                if ("none" !== e.style.display.toLowerCase() && "hidden" !== e.style.visibility.toLowerCase()) {
                    if (b) {
                        var h = e.className + e.id + e.tagName;
                        if (-1 !== h.search(readability.regexps.unlikelyCandidates) && -1 === h.search(readability.regexps.okMaybeItsACandidate) && "BODY" !== e.tagName) {
                            g(e);
                            continue
                        }
                    }
                    if (("P" === e.tagName || "TD" === e.tagName || "PRE" === e.tagName || "H2" === e.tagName) && (f[f.length] = e),
                    "DIV" === e.tagName && -1 === e.innerHTML.search(readability.regexps.divToPElements)) {
                        var i = document.createElement("p");
                        try {
                            i.innerHTML = e.innerHTML,
                            e.parentNode.replaceChild(i, e),
                            a -= 1,
                            f[f.length] = e
                        } catch (j) {
                            dbg("Could not alter div to p, probably an IE restriction, reverting back to div.: " + j)
                        }
                    }
                } else
                    g(e);
            else
                g(e);
        for (var k = [], l = 0; l < f.length; l += 1) {
            var m = f[l].parentNode
              , n = m ? m.parentNode : null
              , o = f[l].textContent;
            if (m && "undefined" != typeof m.tagName && !(o.length < 25)) {
                "undefined" == typeof m.readability && (readability.initializeNode(m),
                k.push(m)),
                n && "undefined" == typeof n.readability && "undefined" != typeof n.tagName && (readability.initializeNode(n),
                k.push(n));
                var p = 0;
                p += 1,
                p += o.split(",").length,
                p += Math.min(Math.floor(o.length / 100), 3),
                m.readability.contentScore += p,
                n && (n.readability.contentScore += p / 2)
            }
        }
        for (var q = null, r = 0, s = k.length; s > r; r += 1)
            k[r].readability.contentScore = k[r].readability.contentScore * (1 - readability.getLinkDensity(k[r])),
            dbg("Candidate: " + k[r] + " (" + k[r].className + ":" + k[r].id + ") with score " + k[r].readability.contentScore),
            (!q || k[r].readability.contentScore > q.readability.contentScore) && (q = k[r]);
        return (null === q || "BODY" === q.tagName) && (q = document.createElement("DIV"),
        q.innerHTML = c.innerHTML,
        c.innerHTML = "",
        c.appendChild(q),
        readability.initializeNode(q)),
        q
    },
    getTitle: function(a) {
        var b = ""
          , c = /title|heading|header|headline/gi
          , d = /subtitle|logo|brand|banner|marquee|columnheader/gi
          , e = function(a) {
            var b = a.getElementsByTagName("h1");
            b = [].slice.call(b);
            var c = a.getElementsByTagName("h2");
            return c = [].slice.call(c),
            {
                all: b.concat(c),
                h1s: b,
                h2s: c
            }
        }
          , f = function(a) {
            for (var b = a.all, e = a.h1s, f = a.h2s, g = {}, h = b.length - 1; h >= 0; h--) {
                var i = b[h];
                if (!readability.isHidden(i) && !readability.isHidden(i.parentNode)) {
                    var j = 0
                      , k = i.getAttribute("itemprop") || ""
                      , l = i.getAttribute("role") || ""
                      , m = i.className + " " + i.id
                      , n = l + k;
                    "H1" === i.tagName && (e.length <= 2 && (j += 1),
                    f.length > 3 && (j += 2)),
                    m.search(c) >= 0 && (j += 3),
                    n.search(c) >= 0 && (j += 4),
                    m.search(d) >= 0 && (j -= 4),
                    1 >= h && (j += 1);
                    var o = (new Date).getTime() + Math.random();
                    g[o + "# " + j] = i
                }
            }
            return readability.maxIndex(g) ? readability.maxIndex(g).cloneNode(!0) : !1
        };
        b = f(e(document));
        var g = f(e(a));
        return b && g && b.isEqualNode(g) && (b = !1),
        b
    },
    grabArticle: function() {
        var a;
        return a = readability.getBestTextNode(),
        readability.getContentViaCandidate(a)
    },
    maxIndex: function(a) {
        if (a && Object.keys(a).length > 0) {
            var b, c = -100;
            for (var d in a)
                if (a.hasOwnProperty(d)) {
                    var e = parseInt(d.split("#").pop());
                    isFinite(e) && e > c && (c = e,
                    b = d)
                }
            return a[b]
        }
        return !1
    },
    recurseDOM: function(a, b) {
        b(a),
        a = a.firstChild;
        for (var c = 0, d = 50; a && d >= c; )
            recruseDOM(a, b),
            a = a.nextSibling,
            c++
    },
    getContentViaCandidate: function(a) {
        for (var b = document.createElement("DIV"), c = Math.max(10, .2 * a.readability.contentScore), d = a.parentNode.childNodes, e = 0, f = d.length; f > e; e += 1) {
            var g = d[e]
              , h = !1;
            if (g) {
                dbg("Looking at sibling node: " + g + " (" + g.className + ":" + g.id + ")" + ("undefined" != typeof g.readability ? " with score " + g.readability.contentScore : "")),
                dbg("Sibling has score " + (g.readability ? g.readability.contentScore : "Unknown")),
                g === a && (h = !0);
                var i = 0;
                if (g.className === a.className && "" !== a.className && (i += .2 * a.readability.contentScore),
                "undefined" != typeof g.readability && g.readability.contentScore + i >= c && (h = !0),
                "P" === g.nodeName) {
                    var j = readability.getLinkDensity(g)
                      , k = g.textContent
                      , l = k.length;
                    l > 80 && .25 > j ? h = !0 : 80 > l && 0 === j && -1 !== k.search(/\.( |$)/) && (h = !0)
                }
                if (h) {
                    dbg("Appending node: " + g);
                    var m = null;
                    if ("DIV" !== g.nodeName && "P" !== g.nodeName) {
                        dbg("Altering siblingNode of " + g.nodeName + " to div."),
                        m = document.createElement("DIV");
                        try {
                            m.id = g.id,
                            m.innerHTML = g.innerHTML
                        } catch (n) {
                            dbg("Could not alter siblingNode to div, probably an IE restriction, reverting back to original."),
                            m = g,
                            e -= 1,
                            f -= 1
                        }
                    } else
                        m = g,
                        e -= 1,
                        f -= 1;
                    m.className = "",
                    b.appendChild(m)
                }
            }
        }
        readability.prepArticle(b);
        var o = b.childNodes[0]
          , p = readability.getTitle(b);
        return p && b.insertBefore(p, o),
        b.textContent.length < 250 ? readability.flagIsActive(readability.FLAG_STRIP_UNLIKELYS) ? (readability.removeFlag(readability.FLAG_STRIP_UNLIKELYS),
        readability.grabArticle()) : readability.flagIsActive(readability.FLAG_CLEAN_CONDITIONALLY) ? (readability.removeFlag(readability.FLAG_CLEAN_CONDITIONALLY),
        readability.grabArticle()) : null : b
    },
    grabArticleText: function a(b) {
        if (b = b || readability.grabArticle(),
        !b)
            return "";
        for (var c, d, e = "", f = 0; f < b.childNodes.length; f++)
            c = b.childNodes[f],
            d = c.nodeName.toLowerCase(),
            e += "#text" == d ? c.nodeValue.replace(/^\n+/, "").replace(/\n+$/, "") : a(c);
        return d = b.nodeName.toLowerCase(),
        d.match(/p|div|blockquote|h[1-6]|li/) && ("\n" != e[e.length - 1] && (e += "\n"),
        e += " "),
        e
    },
    getCharCount: function(a, b) {
        return b = b || ",",
        a.textContent.split(b).length - 1
    },
    getLinkDensity: function(a) {
        for (var b = a.getElementsByTagName("a"), c = a.textContent.length, d = 0, e = 0, f = b.length; f > e; e += 1)
            d += b[e].textContent.length;
        return d / c
    },
    findBaseUrl: function() {
        for (var a = window.location.pathname.split("?")[0], b = a.split("/").reverse(), c = [], d = "", e = 0, f = b.length; f > e; e += 1) {
            var g = b[e];
            -1 !== g.indexOf(".") && (d = g.split(".")[1],
            d.match(/[^a-zA-Z]/) || (g = g.split(".")[0])),
            -1 !== g.indexOf(",00") && (g = g.replace(",00", "")),
            !g.match(/((_|-)?p[a-z]*|(_|-))[0-9]{1,2}$/i) || 1 !== e && 0 !== e || (g = g.replace(/((_|-)?p[a-z]*|(_|-))[0-9]{1,2}$/i, ""));
            var h = !1;
            2 > e && g.match(/^\d{1,2}$/) && (h = !0),
            0 === e && "index" === g.toLowerCase() && (h = !0),
            2 > e && g.length < 3 && !b[0].match(/[a-z]/i) && (h = !0),
            h || c.push(g)
        }
        return window.location.protocol + "//" + window.location.host + c.reverse().join("/")
    },
    findNextPageLink: function(a) {
        for (var b = {}, c = a.getElementsByTagName("a"), d = readability.findBaseUrl(), e = 0, f = c.length; f > e; e += 1) {
            var g = c[e]
              , h = c[e].href.replace(/#.*$/, "").replace(/\/$/, "");
            if (!("" === h || h === d || h === window.location.href || h in readability.parsedPages) && window.location.host === h.split(/\/+/g)[1]) {
                var i = g.textContent;
                if (!(i.match(readability.regexps.extraneous) || i.length > 25)) {
                    var j = h.replace(d, "");
                    if (j.match(/\d/)) {
                        h in b ? b[h].linkText += " | " + i : b[h] = {
                            score: 0,
                            linkText: i,
                            href: h
                        };
                        var k = b[h];
                        0 !== h.indexOf(d) && (k.score -= 25);
                        var l = i + " " + g.className + " " + g.id;
                        l.match(readability.regexps.nextLink) && (k.score += 50),
                        l.match(/pag(e|ing|inat)/i) && (k.score += 25),
                        l.match(/(first|last)/i) && (k.linkText.match(readability.regexps.nextLink) || (k.score -= 65)),
                        (l.match(readability.regexps.negative) || l.match(readability.regexps.extraneous)) && (k.score -= 50),
                        l.match(readability.regexps.prevLink) && (k.score -= 200);
                        for (var m = g.parentNode, n = !1, o = !1; m; ) {
                            var p = m.className + " " + m.id;
                            !n && p && p.match(/pag(e|ing|inat)/i) && (n = !0,
                            k.score += 25),
                            !o && p && p.match(readability.regexps.negative) && (p.match(readability.regexps.positive) || (k.score -= 25,
                            o = !0)),
                            m = m.parentNode
                        }
                        (h.match(/p(a|g|ag)?(e|ing|ination)?(=|\/)[0-9]{1,2}/i) || h.match(/(page|paging)/i)) && (k.score += 25),
                        h.match(readability.regexps.extraneous) && (k.score -= 15);
                        var q = parseInt(i, 10);
                        q && (1 === q ? k.score -= 10 : k.score += Math.max(0, 10 - q))
                    }
                }
            }
        }
        var r = null;
        for (var s in b)
            b.hasOwnProperty(s) && b[s].score >= 50 && (!r || r.score < b[s].score) && (r = b[s]);
        if (r) {
            var t = r.href.replace(/\/$/, "");
            return dbg("NEXT PAGE IS " + t),
            readability.parsedPages[t] = !0,
            t
        }
        return null
    },
    getClassWeight: function(a) {
        if (!readability.flagIsActive(readability.FLAG_WEIGHT_CLASSES))
            return 0;
        var b = 0;
        return "string" == typeof a.className && "" !== a.className && (-1 !== a.className.search(readability.regexps.negative) && (b -= 25),
        -1 !== a.className.search(readability.regexps.positive) && (b += 25)),
        "string" == typeof a.id && "" !== a.id && (-1 !== a.id.search(readability.regexps.negative) && (b -= 25),
        -1 !== a.id.search(readability.regexps.positive) && (b += 25)),
        b
    },
    killBreaks: function(a) {
        try {
            a.innerHTML = a.innerHTML.replace(readability.regexps.killBreaks, "<br />"),
            a.innerHTML = a.innerHTML.replace(/\t/g, "")
        } catch (b) {
            dbg("KillBreaks failed - this is an IE bug. Ignoring.: " + b)
        }
    },
    isHidden: function(a) {
        var b = !1
          , c = window.getComputedStyle(a);
        if ("none" === a.style.display.toLowerCase())
            b = !0;
        else if ("none" === c.display.toLowerCase() || "hidden" === c.visibility.toLowerCase())
            b = !0;
        else {
            var d = parseInt(c.top, 10);
            "number" == typeof d && 0 >= d && (b = !0)
        }
        return b
    },
    clean: function(a, b) {
        for (var c = a.getElementsByTagName(b), d = c.length - 1; d >= 0; d -= 1) {
            for (var e = "", f = 0, g = c[d].attributes.length; g > f; f += 1)
                e += c[d].attributes[f].value + "|";
            -1 === e.search(readability.regexps.videos) && -1 === c[d].innerHTML.search(readability.regexps.videos) && c[d].parentNode.removeChild(c[d])
        }
    },
    cleanConditionally: function(a, b) {
        if (readability.flagIsActive(readability.FLAG_CLEAN_CONDITIONALLY))
            for (var c = a.getElementsByTagName(b), d = c.length, e = d - 1; e >= 0; e -= 1) {
                var f = readability.getClassWeight(c[e])
                  , g = "undefined" != typeof c[e].readability ? c[e].readability.contentScore : 0;
                if (dbg("Cleaning Conditionally " + c[e] + " (" + c[e].className + ":" + c[e].id + ")" + ("undefined" != typeof c[e].readability ? " with score " + c[e].readability.contentScore : "")),
                0 > f + g)
                    c[e].parentNode.removeChild(c[e]);
                else if (readability.getCharCount(c[e], ",") < 10) {
                    for (var h = c[e].getElementsByTagName("p").length, i = c[e].getElementsByTagName("img").length, j = c[e].getElementsByTagName("li").length - 100, k = c[e].getElementsByTagName("input").length, l = 0, m = c[e].getElementsByTagName("embed"), n = 0, o = m.length; o > n; n += 1)
                        -1 === m[n].src.search(readability.regexps.videos) && (l += 1);
                    var p = readability.getLinkDensity(c[e])
                      , q = c[e].textContent.length
                      , r = !1;
                    i > h ? r = !0 : j > h && "ul" !== b && "ol" !== b ? r = !0 : k > Math.floor(h / 3) ? r = !0 : 25 > q && (0 === i || i > 2) ? r = !0 : 25 > f && p > .2 ? r = !0 : f >= 25 && p > .5 ? r = !0 : (1 === l && 75 > q || l > 1) && (r = !0),
                    r && c[e].parentNode.removeChild(c[e])
                }
            }
    },
    cleanHeaders: function(a) {
        for (var b = 1; 3 > b; b += 1)
            for (var c = a.getElementsByTagName("h" + b), d = c.length - 1; d >= 0; d -= 1)
                (readability.getClassWeight(c[d]) < 0 || readability.getLinkDensity(c[d]) > .33) && c[d].parentNode.removeChild(c[d])
    },
    flagIsActive: function(a) {
        return (readability.flags & a) > 0
    },
    removeFlag: function(a) {
        readability.flags = readability.flags & ~a
    }
};
!function b(a, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!a[g]) {
                var i = "function" == typeof require && require;
                if (!h && i)
                    return i(g, !0);
                if (f)
                    return f(g, !0);
                throw new Error("Cannot find module '" + g + "'")
            }
            var j = c[g] = {
                exports: {}
            };
            a[g][0].call(j.exports, function(b) {
                var c = a[g][1][b];
                return e(c ? c : b)
            }, j, j.exports, b, a, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)
        e(d[g]);
    return e
}({
    1: [function(a, b, c) {
        function d(a, b) {
            this.name = a,
            this.handler = b,
            this.keydownHandler = e.bind(this),
            this.keyupHandler = f.bind(this),
            this.modifiers = 0
        }
        function e(a) {
            var b = a.keyCode || a.which;
            g.debug(this.name + " keydown: " + b),
            16 === b ? this.modifiers = this.modifiers | h.SHIFT : 17 === b ? this.modifiers = this.modifiers | h.CTRL : 18 === b ? this.modifiers = this.modifiers | h.ALT : 37 === b || 109 === b || 189 === b && 0 === this.modifiers ? this.handler.decrementSpeed() : (39 === b || 107 === b || 187 === b && this.modifiers === h.SHIFT) && this.handler.incrementSpeed()
        }
        function f(a) {
            var b = a.keyCode || a.which;
            g.debug(this.name + " keyup: " + b),
            16 === b ? this.modifiers = this.modifiers & ~h.SHIFT : 17 === b ? this.modifiers = this.modifiers & ~h.CTRL : 18 === b && (this.modifiers = this.modifiers & ~h.ALT)
        }
        var g = a("./loggerFactory.js").getLogger("KeyboardHandler")
          , h = Object.freeze({
            ALT: 1,
            CTRL: 2,
            SHIFT: 4
        });
        d.prototype.attach = function() {
            document.addEventListener("keydown", this.keydownHandler),
            document.addEventListener("keyup", this.keyupHandler)
        }
        ,
        d.prototype.detach = function() {
            document.removeEventListener("keyup", this.keyupHandler),
            document.removeEventListener("keydown", this.keydownHandler)
        }
        ,
        b.exports = d
    }
    , {
        "./loggerFactory.js": 2
    }],
    2: [function(a, b, c) {
        function d(a, b) {
            this.name = a,
            this.threshold = b
        }
        function e(a) {
            var b;
            switch (a) {
            case 1:
                b = "ERROR";
                break;
            case 2:
                b = "WARN";
                break;
            case 3:
                b = "INFO";
                break;
            case 4:
                b = "DEBUG";
                break;
            default:
                b = a.toString()
            }
            return b
        }
        function f() {
            this.loggers = {},
            this.config = {
                ROOT: parseInt("2")
            };
            var a = h.call(this);
            null !== a && this.configure(a)
        }
        function g(a) {
            var b = this.config.ROOT;
            return "number" == typeof this.config[a] && this.config[a] >= 0 && (b = this.config[a]),
            b
        }
        function h() {
            var a = null;
            if ("object" == typeof localStorage) {
                var b = localStorage.getItem("spritz.logging.config");
                if ("string" == typeof b)
                    try {
                        a = JSON.parse(b)
                    } catch (c) {
                        console && "function" == typeof console.log && console.error("Unable to parse logging configuration", c)
                    }
                else {
                    var d = localStorage.getItem("spritz.logging.level");
                    "string" == typeof d && (a = {
                        ROOT: parseInt(d)
                    })
                }
            }
            return a
        }
        d.prototype.debug = function(a) {
            this.log(4, a)
        }
        ,
        d.prototype.error = function(a) {
            this.log(1, a)
        }
        ,
        d.prototype.info = function(a) {
            this.log(3, a)
        }
        ,
        d.prototype.log = function(a, b) {
            a <= this.threshold && console && "function" == typeof console.log && console.log(e(a) + " " + this.name + ": " + b)
        }
        ,
        d.prototype.warn = function(a) {
            this.log(2, a)
        }
        ,
        f.prototype.configure = function(a) {
            var b = this.config;
            this.config = a,
            ("number" != typeof this.config.ROOT || this.config.ROOT < 0 || this.config.ROOT > 4) && (this.config.ROOT = b.ROOT)
        }
        ,
        f.prototype.getLogger = function(a) {
            var b = this.loggers[a];
            if ("undefined" == typeof b) {
                var c = g.call(this, a);
                b = new d(a,c),
                this.loggers[a] = b
            }
            return b
        }
        ,
        b.exports = new f
    }
    , {}],
    3: [function(a, b, c) {
        !function() {
            function c() {
                var a = {
                    method: "",
                    locale: "en_US",
                    text: ""
                }
                  , b = window.getSelection().toString();
                if (b.length > 0 && " " !== b)
                    a.text = b,
                    a.method = "selection";
                else {
                    var c = readability.grabArticleText();
                    a.text = c || "",
                    a.method = "extraction"
                }
                var d = document.documentElement.lang;
                return "undefined" == typeof d || "" === d || (a.locale = f(d)),
                a
            }
            function d(a) {
                h || (h = setTimeout(function() {
                    h = null,
                    i.sendMessage("selectionDelivery", {
                        content: c()
                    })
                }, 250))
            }
            function e() {
                var a = "";
                new g(250,function() {
                    var b = window.getSelection().toString();
                    b !== a && (a = b,
                    i.sendMessage("selectionDelivery", {
                        content: c()
                    }))
                }
                )
            }
            function f(a) {
                var b = a.indexOf("-");
                -1 === b && (b = a.indexOf("_"));
                var c;
                return c = -1 === b ? a : a.substring(0, b) + "_" + a.substring(b + 1).toUpperCase()
            }
            function g(a, b) {
                var c = this;
                this.interval = a,
                this.poll = null,
                this.poll = setInterval(function() {
                    "function" == typeof b && b(c.poll)
                }, this.interval)
            }
            var h, i = a("./iframe.js").create();
            "onselectionchange"in document ? document.onselectionchange = d : e(),
            b.exports = {
                getContent: c
            }
        }()
    }
    , {
        "./iframe.js": 5
    }],
    4: [function(a, b, c) {
        function d(a, b) {
            for (var c in b)
                a[c] && "object" == typeof a[c] && "[object Object]" == a[c].toString() && b[c] ? d(a[c], b[c]) : a[c] = b[c];
            return a
        }
        function e(a) {
            window.Spritzlet && "object" == typeof a && (window.Spritzlet = d(window.Spritzlet, a))
        }
        b.exports = e
    }
    , {}],
    5: [function(a, b, c) {
        function d(a) {
            this.src = a,
            this.container,
            this.draghandle,
            this.iframe,
            this.iframeContent,
            this.hidden = !0,
            this.maxWidth = 560,
            this.maxHeight = .45 * this.maxWidth,
            this.temp = {},
            this.eventRegistry = {
                hide: [],
                show: []
            }
        }
        function e() {
            var a = arguments[0];
            if (!this.eventRegistry.hasOwnProperty(a))
                throw new Error("Unsupported event: " + a);
            for (var b = this.eventRegistry[a], c = Array.prototype.slice.call(arguments, 1, arguments.length), d = 0; d < b.length; d++)
                b[d].apply(null, c)
        }
        function f(a) {
            var b = new Draggabilly(a);
            b.on("dragEnd", h.bind(i)),
            b.on("dragStart", g.bind(i))
        }
        function g(a) {
            this.temp.dhHeight = this.draghandle.offsetHeight + "px" || "40px",
            this.draghandle.style.setProperty("height", "100%")
        }
        function h(a) {
            var b = {
                position: {
                    x: a.position.x,
                    y: a.position.y
                }
            };
            this.sendMessage("saveData", b),
            this.draghandle.style.setProperty("height", this.temp.dhHeight)
        }
        var i, j = a("../CommonModules/loggerFactory.js").getLogger("iframe");
        d.prototype = {
            getIframe: function() {
                return this.iframe
            },
            appendToDom: function(a) {
                var b = this.container = document.createElement("div");
                b.id = "spritzlet-container",
                b.style.setProperty("position", "fixed", "important"),
                this.draghandle = document.createElement("div"),
                this.draghandle.className = "spritzlet-draghandle",
                b.appendChild(this.draghandle);
                var c = this.iframe = document.createElement("iframe");
                c.src = this.src,
                c.setAttribute("frameborder", "0"),
                c.setAttribute("seamless", "seamless"),
                c.setAttribute("scrolling", "no"),
                j.debug("Iframe.appendToDom() this.maxWidth: " + this.maxWidth + ", self.innerWidth: " + self.innerWidth);
                var d = Math.min(this.maxWidth, self.innerWidth)
                  , g = this.maxHeight;
                c.style.setProperty("width", d + "px", "important"),
                c.style.setProperty("height", g + "px", "important"),
                j.debug("Iframe.appendToDom() iframeWidth: " + d + ", iframeHeight: " + g);
                var h = document.createElement("p");
                h.innerHTML = "Your browser doesn't support iframes. :( ",
                c.appendChild(h),
                b.appendChild(c),
                a && "function" == typeof a && (c.onload = c.onreadystatechange = function() {
                    var b = c.readyState;
                    b && "loaded" !== b && "complete" !== b || (c.onload = c.onreadystatechange = null,
                    a && "function" == typeof a && a(c))
                }
                ),
                document.body.appendChild(b),
                f(b),
                this.setPosition(),
                this.iframeContent = this.iframe.contentWindow,
                this.hidden = !1,
                e.call(this, "show")
            },
            decrementSpeed: function() {
                this.sendMessage("WPMdecrement")
            },
            incrementSpeed: function() {
                this.sendMessage("WPMincrement")
            },
            on: function(a, b) {
                if ("undefined" == typeof this.eventRegistry[a])
                    ;
                else {
                    var c = this.eventRegistry[a]
                      , d = c.indexOf(b);
                    -1 === d && c.push(b)
                }
            },
            off: function(a, b) {
                if ("undefined" == typeof this.eventRegistry[a])
                    ;
                else {
                    var c = this.eventRegistry[a]
                      , d = c.indexOf(b);
                    -1 === d || c.splice(d, 1)
                }
            },
            sendMessage: function(a, b) {
                j.debug("sendMessage message: " + a),
                this.iframeContent && this.iframeContent.postMessage({
                    message: a,
                    data: b || {}
                }, "https://sdk.spritzinc.com/bookmarklet/latest")
            },
            resizeIframe: function(a, b) {
                j.debug("Iframe.resizeIframe() w: " + a + ", h: " + b),
                this.iframe.style.setProperty("width", a + "px", "important"),
                this.iframe.style.setProperty("height", b + "px", "important")
            },
            getClientRect: function() {
                var a = this.iframe.getBoundingClientRect();
                return j.debug("Iframe.getClientRect() clientRect: " + a.left + ", " + a.top + ", " + a.right + ", " + a.bottom),
                a
            },
            isHidden: function() {
                return this.hidden
            },
            show: function() {
                this.isHidden() && (this.container.style.top = this.temp.oldY || 0,
                this.container.style.setProperty("position", "fixed", "important"),
                this.hidden = !1,
                e.call(this, "show"))
            },
            hide: function() {
                this.isHidden() || (this.temp.oldY = this.container.style.top,
                this.container.style.top = "-999px",
                this.container.style.setProperty("position", "absolute", "important"),
                window.removeEventListener("resize", this.resizeRepositionHandler),
                this.hidden = !0,
                e.call(this, "hide"))
            },
            setPosition: function(a, b) {
                var c, d, e = this.container, f = window.innerWidth, g = window.innerHeight, h = e.offsetWidth, i = e.offsetHeight;
                "number" == typeof a && "number" == typeof b ? (c = 0 > a ? 5 : a,
                d = 0 > b || b > g ? 0 : b,
                a + h > f && (c = f - h),
                b + i > g && (d = g - i)) : (c = Math.floor((f - h) / 2),
                d = 0),
                e.style.left = c + "px",
                e.style.top = d + "px"
            },
            resizeRepositionHandler: function(a) {
                var b = this.getClientRect()
                  , c = window.innerWidth
                  , d = window.innerHeight;
                if (j.debug("Iframe.resizeRepositionHandler() dimensions: " + JSON.stringify(b) + ", window.innerWidth: " + window.innerWidth + ", window.innerHeight: " + window.innerHeight + ", window.screen.availWidth: " + window.screen.availWidth + ", window.screen.availHeight: " + window.screen.availHeight + ", window.screen.width: " + window.screen.width + ", window.screen.height: " + window.screen.height),
                c < b.width ? (this.resizeIframe(c, b.height),
                this.sendMessage("resizeProportionally", {
                    width: c,
                    height: d
                })) : this.maxWidth > b.width && (this.resizeIframe(Math.min(this.maxWidth, c), b.height),
                this.sendMessage("resizeProportionally", {
                    width: c,
                    height: d
                })),
                c < b.right) {
                    var e = b.right - c;
                    this.setPosition(b.right - e, b.top)
                }
                if (d < b.bottom || d < b.top) {
                    var f = b.top - d;
                    this.setPosition(b.left, b.top - f)
                }
            }
        },
        b.exports.create = function() {
            return function(a) {
                return i || (i = new d(a)),
                i
            }
        }()
    }
    , {
        "../CommonModules/loggerFactory.js": 2
    }],
    6: [function(a, b, c) {
        function d(a) {
            this.iframe = a,
            this.keyboardHandler = new h("outer",this.iframe),
            this.enabled = !1,
            this.registered = !1,
            this.iframe.on("show", f.bind(this)),
            this.iframe.on("hide", e.bind(this))
        }
        function e() {
            g.call(this)
        }
        function f() {
            g.call(this)
        }
        function g() {
            this.enabled && !this.iframe.isHidden() ? this.registered || (this.registered = !0,
            this.keyboardHandler.attach()) : this.registered && (this.registered = !1,
            this.keyboardHandler.detach())
        }
        var h = a("../CommonModules/keyboardHandler.js");
        d.prototype.attach = function() {
            this.enabled = !0,
            g.call(this)
        }
        ,
        d.prototype.detach = function() {
            this.enabled = !1,
            g.call(this)
        }
        ,
        b.exports = d
    }
    , {
        "../CommonModules/keyboardHandler.js": 1
    }],
    7: [function(a, b, c) {
        function d() {
            var a = document.createElement("link");
            a.setAttribute("type", "text/css"),
            a.setAttribute("rel", "stylesheet"),
            a.setAttribute("href", "https://sdk.spritzinc.com/bookmarklet/latest/styles/SpritzletOuter.css?1.1.15"),
            document.documentElement.appendChild(a)
        }
        function e() {
            i.warn("Spritzlet loader version " + Spritzlet.loaderVersion + " is older than SpritzletOuter version " + Spritzlet.outerVersion)
        }
        function f() {
            j.sendMessage("activate", {
                content: l.getContent()
            })
        }
        function g(a, b, c) {
            var d;
            return function() {
                var e = this
                  , f = arguments
                  , g = function() {
                    d = null,
                    c || a.apply(e, f)
                }
                  , h = c && !d;
                clearTimeout(d),
                d = setTimeout(g, b),
                h && a.apply(e, f)
            }
        }
        function h() {
            d(),
            Spritzlet.loaderVersion < Spritzlet.outerVersion && e(),
            j.appendToDom(function() {
                j.sendMessage("initSpritzlet", {
                    currentUrl: window.location.href,
                    content: l.getContent()
                })
            }),
            window.addEventListener("resize", g(function() {
                j.resizeRepositionHandler()
            }, 200))
        }
        var i = a("../CommonModules/loggerFactory.js").getLogger("outerMain");
        i.info("SpritzletOuter v1.1.15 Loading https://sdk.spritzinc.com/bookmarklet/latest/html/spritzlet.html?1.1.15");
        var j = a("./iframe.js").create("https://sdk.spritzinc.com/bookmarklet/latest/html/spritzlet.html?1.1.15")
          , k = a("./globalexpose.js")
          , l = a("./content.js")
          , m = a("./messaging.js")
          , n = a("./keyboard.js")
          , o = new n(j);
        o.attach(),
        window.addEventListener("message", m),
        k({
            init: h,
            activate: f,
            outerVersion: "v1.1.15"
        })
    }
    , {
        "../CommonModules/loggerFactory.js": 2,
        "./content.js": 3,
        "./globalexpose.js": 4,
        "./iframe.js": 5,
        "./keyboard.js": 6,
        "./messaging.js": 8
    }],
    8: [function(a, b, c) {
        function d(b) {
            var c = a("./iframe").create()
              , d = a("./content")
              , f = b.data
              , g = b.origin.split("//").splice(1)[0]
              , h = "https://sdk.spritzinc.com/bookmarklet/latest".split("//")[1].split("/")[0];
            if (e.debug("message received, message: " + f.message),
            g === h)
                switch (f.message) {
                case "resizeIframe":
                case "returnSize":
                    c.resizeIframe(f.data.iframeSize.width, f.data.iframeSize.height);
                    break;
                case "setPosition":
                    c.setPosition(f.data.position.x, f.data.position.y);
                    break;
                case "hideIframe":
                    c.hide();
                    break;
                case "showIframe":
                    c.show();
                    break;
                case "getContent":
                    c.sendMessage("contentDelivery", {
                        content: d.getContent()
                    });
                    break;
                case "getSelection":
                    c.sendMessage("selectionDelivery", {
                        content: d.getContent()
                    });
                    break;
                case "getCurrentUrl":
                    c.sendMessage("sendCurrentUrl", {
                        url: window.location.href
                    })
                }
            else
                e.debug("Ignoring message from origin: " + b.origin + " -> " + g + ", expected: " + h)
        }
        var e = a("../CommonModules/loggerFactory.js").getLogger("outerMessaging");
        b.exports = d
    }
    , {
        "../CommonModules/loggerFactory.js": 2,
        "./content": 3,
        "./iframe": 5
    }]
}, {}, [7]);
