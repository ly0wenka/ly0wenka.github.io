///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Spritz JavaScript SDK  version 2.0.16
// Tue Apr 16 2019 11:07:00 GMT+0200 (Central European Summer Time)
//
// Copyright (c) 2019 All Right Reserved, http://www.spritzinc.com/
//
// This source is subject to the Spritz Developer License.
// Please see http://www.spritzinc.com/spritz-developers-agreement for more information.
// All other rights reserved.
//
// Spritz JavaScript SDK uses the following open source software:
//     Closure Tools:   Home Page: developers.google.com/closure/library   License: www.apache.org/licenses/LICENSE-2.0
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

!function(a, b, c) {
    function d() {
        if (b.spritz_sdk_root)
            ;
        else {
            var a = c.getElementById("spritzjs");
            if (null === a)
                b.spritz_sdk_root = "//sdk.spritzinc.com/js/2.0.16";
            else {
                var d = a.getAttribute("src")
                  , e = d.split("/")
                  , f = "";
                if (e.length < 3)
                    f = ".";
                else
                    for (var g = 0; g < e.length - 2; g++)
                        f += e[g],
                        f += "/";
                b.spritz_sdk_root = f
            }
        }
    }
    function e() {
        if (!c.getElementById("spritz-css")) {
            var a = c.getElementsByTagName("head")[0]
              , d = c.createElement("link");
            d.id = "spritz-css",
            d.rel = "stylesheet",
            d.type = "text/css",
            d.href = b.spritz_sdk_root,
            "/" !== d.href.substring(d.href.length - 1) && (d.href += "/"),
            d.href += "css/spritz.min.css",
            d.media = "all",
            a.appendChild(d)
        }
    }
    function f(a, b, c, d, e) {
        this.model = i.model,
        this.word = a,
        this.orp = b,
        this.multiplier = c,
        this.position = d,
        this.flags = e
    }
    function g(a, b, c, d, e, f, g) {
        this.seekType = i.model.SpritzText.SeekType,
        this.contentVersionId = a,
        this.words = b,
        this.duration = c,
        this.wordCount = d,
        this.rawWordCount = e,
        this.locale = f,
        this.version = g,
        this.index = 0,
        this.progressTracker = null
    }
    function h(a, c) {
        var d = "SpritzReadingPanel: ";
        i.utils.debug(3, d + " Created");
        var e = Object.freeze({
            ready: 0,
            running: 1,
            paused: 2,
            completed: 3
        })
          , f = Math.round(c.redicleWidth)
          , g = Math.round(c.redicleHeight);
        console;
        var h = i.helper.createCanvas(i.constants.CSSClasses.CANVAS, f, g);
        a.appendChild(h),
        h.addEventListener("click", function() {
            i.helper.dispatchEvent(a, "redicleClick")
        }),
        h.addEventListener("mousedown", function(a) {
            a.stopPropagation(),
            a.preventDefault()
        });
        var j = h.getContext("2d")
          , l = i.constants.Constants
          , m = c.redicle.fontName
          , n = "Arial, sans-serif"
          , o = .5
          , p = c.redicle.redicleLine ? .01 : 0
          , q = 0
          , r = 0
          , s = 0
          , t = 7 === c.redicle.progressBar ? 8 : 0
          , u = 6 === c.redicle.progressBar ? 8 : 0
          , v = i.utils.isChrome()
          , w = i.utils.isFirefox()
          , x = i.utils.isTizen()
          , y = null
          , z = c.defaultSpeed
          , A = null
          , B = null
          , C = 0
          , D = null
          , E = 0
          , F = !0
          , G = !1
          , H = e.ready
          , I = 0
          , J = c.redicle.textHighlightPaintColor
          , K = c.redicle.countdownColor
          , L = 0
          , M = 0
          , N = c.redicle.sizeable
          , O = c.redicle.loadFonts
          , P = 0
          , Q = 0
          , R = 0
          , S = 0
          , T = 0
          , U = 0
          , V = 0
          , W = 0
          , X = 0
          , Y = 0
          , Z = 0
          , $ = 0
          , _ = 0
          , aa = 0
          , ba = 0
          , ca = 0
          , da = 0
          , ea = 0
          , fa = 0
          , ga = c.redicle.progressBar ? c.redicle.progressBarWidth : 0
          , ha = ga + (ga ? 1 : 0)
          , ia = null
          , ja = null
          , ka = ""
          , la = ""
          , ma = ""
          , na = ""
          , oa = function() {
            ka = P + "px " + m,
            la = "bold " + ka,
            ma = ka,
            na = la
        }
          , pa = function() {
            if (L = h.width,
            M = h.height,
            j = h.getContext("2d"),
            j.save(),
            j.restore(),
            "devicePixelRatio"in b)
                if (b.devicePixelRatio > 1) {
                    var a = b.devicePixelRatio
                      , e = Math.round(f * a)
                      , k = Math.round(g * a);
                    h.width = e,
                    h.height = k,
                    h.style.width = f + "px",
                    h.style.height = g + "px",
                    console,
                    L = e,
                    M = k,
                    ga = Math.round(ga * a),
                    ha = ga + (ga ? 1 : 0)
                } else
                    console;
            P = Math.round(h.height * o),
            w || x ? (ba = 2,
            ca = 2,
            da = 0) : (ba = 1,
            ca = 3,
            da = -.088 * M),
            ca = ca * M / 60,
            Q = Math.round(.56 * P + .5),
            R = Math.round(.44 * P + .5),
            S = Q + R,
            T = Math.round(M * c.redicle.crossHairHeight),
            U = Math.round(r + (L - r - s) * c.redicle.crossHairHorizontalPosition),
            V = Math.round((M - t - (u + ha)) / 2),
            W = V - Math.round((Q + R) / 2) + da,
            X = 0,
            Y = L,
            Z = Math.round(L * q),
            $ = Math.round(M * p),
            _ = U - r,
            aa = L - s - U,
            ea = $ + T,
            fa = M - t - (u + ha) - 2 * ea,
            j.textBaseline = "top",
            j.textAlign = "left",
            oa();
            var l = 3;
            i.utils.debug(l, d + "dimensions: " + L + "x" + M),
            i.utils.debug(l, d + "fontSizeHeight: " + P),
            i.utils.debug(l, d + "ascent: " + Q),
            i.utils.debug(l, d + "descent: " + R),
            i.utils.debug(l, d + "focus: " + U + "," + V),
            i.utils.debug(l, d + "textY: " + W),
            i.utils.debug(l, d + "fontRealHeight: " + S),
            i.utils.debug(l, d + "textOverflow, top: " + ba + ", bottom: " + ca),
            i.utils.debug(l, d + "textNormalPaint: " + ka),
            i.utils.debug(l, d + "textNormalBoldPaint: " + la)
        }
          , qa = function() {
            var a, b;
            return null === ia ? (a = 0,
            b = y.size()) : (a = ia.startingIndex,
            b = ia.totalCount),
            (a + y.getCurrentIndex() + 1) / b
        }
          , ra = function(a, b, c, d, e, f) {
            j.lineWidth = e,
            j.strokeStyle = f,
            j.beginPath(),
            j.moveTo(a, b),
            j.lineTo(c, d),
            j.stroke(),
            j.closePath()
        }
          , sa = function() {
            var a = r + Z
              , b = h.width - s - Z
              , d = t + $
              , e = h.height - (u + $ + ha);
            c.redicle.redicleLine && (ra(a, d, b, d, c.redicle.redicleLineWidth, c.redicle.redicleLineColor),
            ra(a, e, b, e, c.redicle.redicleLineWidth, c.redicle.redicleLineColor)),
            c.redicle.crossHair && (ra(U, d, U, d + T, c.redicle.crossHairWidth, c.redicle.crossHairColor),
            ra(U, e - T, U, e, c.redicle.crossHairWidth, c.redicle.crossHairColor))
        }
          , ta = function(a) {
            var b;
            b = void 0 === a || null === a ? null === y ? 0 : qa() : a;
            var d = r + Z
              , e = h.width - s - Z
              , f = h.height - u - $ - ga
              , g = d + (e - d) * b
              , i = f + ga / 2;
            ra(d, i, g, i, ga, c.redicle.progressBarColor),
            ra(g, i, e, i, ga, c.redicle.backgroundColor)
        }
          , ua = function(a, b) {
            var c = v ? "" : "," + n;
            return j.font = b + c,
            j.measureText(a).width
        }
          , va = function(a, b, c, d, e) {
            var f = v ? "" : "," + n
              , g = r + Z
              , i = h.width - s - Z
              , k = t + $
              , l = h.height - (u + $ + ha);
            j.save(),
            j.rect(g, k, i, l),
            j.clip(),
            j.font = b + f,
            j.fillStyle = c,
            j.fillText(a, d, e),
            j.restore()
        }
          , wa = function(a, b, c, d, e) {
            j.fillStyle = e,
            j.fillRect(a, b, c, d)
        }
          , xa = function() {
            j.clearRect(r, 0, h.width - s, h.height),
            wa(r, 0, h.width - s, h.height, c.redicle.backgroundColor)
        }
          , ya = function() {
            J = F ? c.redicle.textHighlightPaintColor : c.redicle.textNormalPaintColor
        }
          , za = function() {
            return y
        }
          , Aa = function(a) {
            setTimeout(function() {
                a(!0)
            }, 0)
        }
          , Ba = function(a, b, f) {
            if (H === e.running) {
                Pa();
                var g = a();
                null === g ? (H = e.completed,
                Sa(b, f),
                c.redicle.progressBar === l.PROGRESS_PAUSE && (0 === y.getCurrentIndex() ? ta(0) : ta()),
                A && Aa(A)) : (xa(),
                sa(),
                Na(g.word, g.orp, g.position, g.isBold()),
                D = setTimeout(function() {
                    D = null,
                    Ba(a, b, f)
                }, La(g.isSentenceStart(), g.multiplier)))
            } else
                i.utils.debug(2, d + "displayFastWord interrupted on word # " + za().getCurrentIndex() + " because of state: " + H)
        }
          , Ca = function() {
            if (H === e.running) {
                Pa();
                var a = za().getNextWord();
                if (null === a)
                    Sa(c.placeholderText.endText, c.placeholderText.endTextColor),
                    c.redicle.progressBar == l.PROGRESS_PAUSE && ta(),
                    A && Aa(A);
                else if (c.redicle.paragraphBreaks && a.isParagraphStart())
                    "" === y.getWord(y.getCurrentIndex() - 1).word ? Ia((new Date).getTime(), a.multiplier, y.getWord(y.getCurrentIndex() - 2), a) : Ia((new Date).getTime(), a.multiplier, y.getWord(y.getCurrentIndex() - 1), a);
                else {
                    if (xa(),
                    sa(),
                    c.redicle.paragraphBreaks && "" === a.word && y.hasNextWord() && y.getWord(y.getCurrentIndex() + 1).isParagraphStart()) {
                        var b = y.getWord(y.getCurrentIndex() - 1);
                        Na(b.word, b.orp, b.position, b.isBold())
                    } else
                        Na(a.word, a.orp, a.position, a.isBold());
                    D = setTimeout(function() {
                        D = null,
                        Ca()
                    }, Ka(a.multiplier))
                }
            } else
                i.utils.debug(2, d + "displayNextWord interrupted on word # " + za().getCurrentIndex() + " because of state: " + H)
        }
          , Da = function() {
            E = (new Date).getTime(),
            Ha(this)
        }
          , Ea = function() {
            xa(),
            sa(),
            Ma(),
            D = setTimeout(function() {
                D = null,
                Ca()
            }, Ka(za().getCurrentWord().multiplier))
        }
          , Fa = function() {
            xa(),
            sa(),
            Ma(),
            D = setTimeout(function() {
                D = null,
                Ba(function() {
                    return za().getPreviousWord()
                }, c.placeholderText.manualStartText, c.placeholderText.startTextColor)
            }, La(!1, za().getCurrentWord().multiplier))
        }
          , Ga = function() {
            xa(),
            sa(),
            Ma(),
            D = setTimeout(function() {
                D = null,
                Ba(function() {
                    return za().getNextWord()
                }, c.placeholderText.manualEndText, c.placeholderText.endTextColor)
            }, La(!1, za().getCurrentWord().multiplier))
        }
          , Ha = function() {
            var a = (new Date).getTime() - E
              , b = a / Ta()
              , d = Math.max(_ * b, 0)
              , e = Math.max(aa * b, 0)
              , f = h.height - t - (u + ha)
              , g = h.width - r - s;
            xa(),
            d <= U || e <= h.width - U ? (wa(r + d, t, g - d - e, f, K),
            sa(),
            Ma(),
            D = setTimeout(function() {
                D = null,
                Ha()
            }, c.redicle.countdownSlice)) : (sa(),
            Ma(),
            Ca())
        }
          , Ia = function(a, b, d, e) {
            var f = (new Date).getTime() - a
              , g = f / Ta();
            xa(),
            sa();
            var h = W - g * P * 2;
            Oa(d.word, d.orp, d.position, d.isBold(), h);
            var i = W + (1 - g) * P * 2;
            Oa(e.word, e.orp, e.position, e.isBold(), i),
            g < 1 ? D = setTimeout(function() {
                D = null,
                Ia(a, b, d, e)
            }, c.redicle.countdownSlice) : (xa(),
            sa(),
            Na(e.word, e.orp, e.position, e.isBold()),
            D = setTimeout(function() {
                D = null,
                Ca()
            }, Ka(b)))
        }
          , Ja = function() {
            return z
        }
          , Ka = function(a) {
            return (1 + a / 100) * C
        }
          , La = function(a) {
            return a ? 1e3 + (z < 250 ? 3 * (250 - z) : 0) : 6e4 / ((3 - .5 * Math.log(z / 62.5) / Math.log(2)) * z)
        }
          , Ma = function() {
            var a = y.getCurrentWord();
            Na(a.word, a.orp, a.position, a.isBold())
        }
          , Na = function(a, b, d, e) {
            Oa(a, b, d, e, W),
            c.redicle.progressBar == l.PROGRESS_CONTINUOUS && ta(ja)
        }
          , Oa = function(a, b, d, e, f) {
            if (null !== a && a.length > 0) {
                var g, h, i, j, k, l, m, n, o = a.length;
                e ? (h = la,
                g = na) : (h = ka,
                g = ma),
                0 === b ? (i = null,
                l = 0) : (i = a.substring(0, b),
                l = Math.round(ua(i, h))),
                j = a.substring(b, b + 1),
                m = Math.round(ua(j, g)),
                n = Math.round(m / 2),
                k = b == o - 1 ? null : a.substring(b + 1),
                null !== i && va(i, h, c.redicle.textNormalPaintColor, U - l - n, f),
                va(j, g, J, U - n, f),
                null !== k && va(k, h, c.redicle.textNormalPaintColor, U + n, f)
            }
            G = !0
        }
          , Pa = function() {
            j.fillStyle = c.redicle.backgroundColor,
            j.clearRect(X, ea, Y - X, fa),
            j.fillRect(X, ea, Y - X, fa)
        }
          , Qa = function() {
            var a, b = h.width, c = h.height;
            return b === L && c === M ? (i.utils.debug(3, d + "dimensions unchanged: " + L + "x" + M),
            a = !1) : (i.utils.debug(3, d + "dimensions changed: " + L + "x" + M + " -> " + b + "x" + c),
            h.width = b,
            h.height = c,
            pa(),
            a = !0),
            a
        }
          , Ra = function(a) {
            var b = S
              , c = h.width - (20 + r + s) - 2 * Math.round(h.width * q);
            if (ua(a, ka) > c)
                do {
                    b--,
                    j.font = b + "px " + m + (w ? ", " + n : "")
                } while (j.measureText(a).width > c);
            return b
        }
          , Sa = function(a, b) {
            if (a) {
                Pa(),
                oa();
                var d = Ra(a)
                  , e = d + "px " + m
                  , f = Math.round((h.height - t - (u + ha)) / 2)
                  , g = 0;
                (w || x) && (g = 5);
                var i;
                i = x ? (h.width - ua(a)) / 2 : Math.round(h.width * q) + r;
                var j = ua("M", e) + ua("p", e) / 2
                  , k = f - j / 2 + g
                  , l = b || c.redicle.textNormalPaintColor;
                va(a, e, l, i, k),
                G = !1
            }
        }
          , Ta = function() {
            return z <= 400 ? 750 : z >= 800 ? 350 : 1150 - z
        };
        !function() {
            k(O ? [m] : [], function() {
                pa(),
                j.fillStyle = c.redicle.backgroundColor,
                j.fillRect(0, 0, h.width, h.height),
                sa(),
                y ? Ma() : Sa(c.placeholderText.startText, c.placeholderText.startTextColor)
            })
        }();
        var Ua = function(a) {
            Pa(),
            y = a,
            C = y.computeStandardDelay(z)
        };
        this.getCurrentText = function() {
            return za()
        }
        ,
        this.setCurrentText = function(a) {
            a && (Ua(a),
            H === e.running ? (this.pauseText(),
            Ma()) : H === e.paused ? Ma() : H === e.ready ? Sa(c.placeholderText.startText, c.placeholderText.startTextColor) : H === e.completed && (Pa(),
            Sa(c.placeholderText.endText, c.placeholderText.endTextColor)))
        }
        ,
        this.getCurrentTextSpeed = function() {
            return Ja()
        }
        ,
        this.setCurrentTextSpeed = function(a) {
            z = a,
            null !== y && (C = y.computeStandardDelay(z))
        }
        ,
        this.getCurrentPosition = function() {
            return null != y ? y.getCurrentIndex() : -1
        }
        ,
        this.setCurrentPosition = function(a) {
            null != y && y.setCurrentIndex(a),
            c.redicle.progressBar == l.PROGRESS_PAUSE && ta()
        }
        ,
        this.getCurrentState = function() {
            return H
        }
        ,
        this.setCurrentState = function(a) {
            H = a
        }
        ,
        this.getHighlightBestLetter = function() {
            return F
        }
        ,
        this.setHighlightBestLetter = function(a) {
            F = a,
            ya()
        }
        ,
        this.getOnCompleteCallback = function() {
            return B
        }
        ,
        this.setOnCompleteCallback = function(a) {
            B = a
        }
        ,
        this.setProgressInfo = function(a) {
            ia = a
        }
        ,
        this.isDisplayingWord = function() {
            return G
        }
        ,
        this.isPaused = function() {
            return H === e.paused
        }
        ,
        this.isReady = function() {
            return H === e.ready
        }
        ,
        this.isRunning = function() {
            return H === e.running
        }
        ,
        this.isCompleted = function() {
            return H === e.completed
        }
        ,
        this.displayCurrentWord = function() {
            Qa() && sa(),
            Pa(),
            Ma()
        }
        ,
        this.displayProgress = function(a) {
            ta(H === e.paused && c.redicle.progressBar === l.PROGRESS_PAUSE || c.redicle.progressBar == l.PROGRESS_CONTINUOUS ? a : 0)
        }
        ,
        this.displayWord = function(a, b, c) {
            Na(a, b, 0, c)
        }
        ,
        this.eraseWord = function() {
            Pa()
        }
        ,
        this.displayText = function(a, b, c) {
            if (a)
                if (i.utils.debug(3, d + "Displaying text with " + a.size() + " words in " + z + " words/min"),
                B = b,
                Ua(a),
                y.getCurrentWord())
                    A = B,
                    H = e.running,
                    N && Qa(),
                    ya(),
                    void 0 === c || c ? Da() : Ea();
                else if (null != A) {
                    var f = A;
                    A = null,
                    f()
                }
        }
        ,
        this.displayPlaceholderText = function(a, b) {
            xa.call(this),
            sa.call(this),
            Sa(a, b)
        }
        ,
        this.pauseText = function() {
            H == e.running && (null != D && (clearTimeout(D),
            D = null),
            y.getCurrentIndex() > 0 && y.setCurrentIndex(y.getCurrentIndex())),
            H = e.paused,
            c.redicle.progressBar == l.PROGRESS_PAUSE && ta()
        }
        ,
        this.resumeText = function(a) {
            y ? (A = B,
            y.getCurrentWord() ? (i.utils.debug(3, d + "Resuming text with " + y.size() + " words at word # " + (y.getCurrentIndex() + 1)),
            H = e.running,
            N && Qa(),
            ya(),
            void 0 === a || a ? Da() : Ea()) : i.utils.debug(2, d + "Cannot resume Text because there are no more words")) : i.utils.debug(2, d + "Cannot resume Text because it is null")
        }
        ,
        this.fastBackwardText = function(a) {
            y ? (A = a,
            y.getCurrentIndex() > 0 || G ? (i.utils.debug(3, d + "Fast backwarding text with " + y.size() + " words at word # " + y.getCurrentIndex()),
            H = e.running,
            N && Qa(),
            ya(),
            Fa()) : i.utils.debug(2, d + "Cannot fast backward text because it is already at the beginning")) : i.utils.debug(2, d + "Cannot fast backward text because it is null")
        }
        ,
        this.fastForwardText = function(a) {
            y ? (A = a,
            y.getCurrentWord() ? (i.utils.debug(3, d + "Fast forwarding text with " + y.size() + " words at word # " + y.getCurrentIndex()),
            H = e.running,
            N && Qa(),
            ya(),
            Ga()) : i.utils.debug(2, d + "Cannot fast forward text because it is already at the end")) : i.utils.debug(2, d + "Cannot fast forward text because it is null")
        }
        ,
        this.resetText = function() {
            this.pauseText(),
            y = null,
            H = e.ready,
            I = 0,
            xa.call(this),
            sa.call(this)
        }
        ,
        this.reset = function() {
            xa.call(this),
            sa.call(this),
            y && y.hasNextWord() ? Ma() : y.hasNextWord() || (H = e.completed,
            Sa(c.placeholderText.endText, c.placeholderText.endTextColor)),
            c.redicle.progressBar == l.PROGRESS_PAUSE && ta()
        }
    }
    var i = a;
    i.readyState = "loading",
    i.initState = "uninitialized",
    function() {
        d(),
        e()
    }(),
    c.addEventListener("spritz_loaded_internal", function() {
        var a = function() {
            setTimeout(function() {
                i.spritzerInitState = "complete",
                i.helper.dispatchEvent(c, "spritz_initialized_internal")
            }, 0)
        };
        if ("SpritzSettings"in b && "object" == typeof b.SpritzSettings)
            if (b.SpritzSettings.hasOwnProperty("clientId")) {
                var d = "https://api.spritzinc.com/api-server/v1/"
                  , e = location.href;
                b.SpritzSettings.hasOwnProperty("apiRoot") && (d = b.SpritzSettings.apiRoot),
                b.SpritzSettings.hasOwnProperty("redirectUri") && (e = b.SpritzSettings.redirectUri),
                "object" == typeof i && "object" == typeof i.client && (b.SpritzClient = new i.client.SpritzClient(b.SpritzSettings.clientId,d,e),
                b.SpritzSettings.hasOwnProperty("anonymousEnabled") && "boolean" == typeof b.SpritzSettings.anonymousEnabled && b.SpritzClient.setAnonymousEnabled(b.SpritzSettings.anonymousEnabled),
                "object" == typeof i.spritzinc && ("complete" === c.readyState ? (i.spritzinc.initSpritzers(b.SpritzClient),
                a()) : c.addEventListener("DOMContentLoaded", function() {
                    i.spritzinc.initSpritzers(b.SpritzClient),
                    a()
                })))
            } else
                console,
                a();
        else
            a()
    }),
    i.utils = {},
    i.utils.debugLevel = 0,
    i.utils.setDebugLevel = function(a) {
        i.utils.debugLevel = a
    }
    ,
    i.namespace = function(a) {
        var b, c = a.split("."), d = i;
        for ("SPRITZ" === c[0] && (c = c.slice(1)),
        b = 0; b < c.length; b += 1)
            void 0 === d[c[b]] && (d[c[b]] = {}),
            d = d[c[b]];
        return d
    }
    ,
    i.addToNamespace = function(a, b) {
        var c = b();
        for (var d in c)
            c.hasOwnProperty(d) && (a[d] = c[d])
    }
    ,
    i.utils.supportsCanvas = function() {
        return !!c.createElement("canvas").getContext()
    }
    ,
    i.utils.supportsCanvasText = function() {
        return !!i.utils.supportsCanvas() && "function" == typeof c.createElement("canvas").getContext("2d").fillText
    }
    ,
    i.utils.supportsHtmlStorage = function() {
        try {
            return "localStorage"in b && null !== b.localStorage
        } catch (a) {
            return !1
        }
    }
    ,
    i.utils.getBrowser = function() {
        return i.utils.isOpera() ? "opr" : i.utils.isChrome() ? "chrome" : i.utils.isFirefox() ? "firefox" : i.utils.isMsie() ? "msie" : !!i.utils.isSafari() && "safari"
    }
    ,
    i.utils.isChrome = function() {
        return b.navigator.userAgent.toLowerCase().indexOf("chrome") > -1
    }
    ,
    i.utils.isFirefox = function() {
        return b.navigator.userAgent.toLowerCase().indexOf("firefox") > -1
    }
    ,
    i.utils.isMobileSafari = function() {
        var a = b.navigator.userAgent.toLowerCase();
        return a.indexOf("chrome") < 0 && a.indexOf("safari") > -1 && a.match(/(ipod|iphone|ipad)/)
    }
    ,
    i.utils.isMsie = function() {
        var a = b.navigator.userAgent.toLowerCase();
        return a.indexOf("msie") > -1 || a.indexOf("trident") > -1
    }
    ,
    i.utils.isOpera = function() {
        return b.navigator.userAgent.toLowerCase().indexOf("opr") > -1
    }
    ,
    i.utils.isSafari = function() {
        var a = b.navigator.userAgent.toLowerCase();
        return a.indexOf("chrome") < 0 && a.indexOf("safari") > -1
    }
    ,
    i.utils.isTizen = function() {
        return b.navigator.userAgent.toLowerCase().indexOf("tizen") > -1
    }
    ,
    i.utils.endsWith = function(a, b) {
        return -1 !== a.indexOf(b, a.length - b.length)
    }
    ,
    i.utils.timestampToString = function(a, b) {
        void 0 === b && (b = new Date);
        var c = ""
          , d = Math.round((b.getTime() - a) / 1e3);
        if (d < 60)
            c = d + "s ago";
        else {
            var e = Math.round((b.getTime() - a) / 6e4);
            if (e < 60)
                c = e + "m ago";
            else {
                var f, g, h = new Date(a);
                h.getHours() > 12 ? (f = h.getHours() - 12,
                g = "PM") : (f = h.getHours(),
                g = "AM");
                var i = f + ":";
                h.getMinutes() < 10 && (i += "0"),
                i = i + h.getMinutes() + " " + g,
                c = h.getDate() === b.getDate() && h.getMonth() === b.getMonth() && h.getFullYear() === b.getFullYear() ? i : h.getMonth() + 1 + "/" + h.getDate() + "/" + h.getFullYear().toString().substring(2, 4) + " " + i
            }
        }
        return c
    }
    ,
    i.utils.timeToString = function(a) {
        var b, c = Math.round(a / 1e3), d = c / 60;
        if (d >= 60) {
            var e = Math.floor(d / 60);
            d = Math.round(d % 60),
            b = e + "hr" + (e > 1 ? "s " : " ") + d + "m"
        } else
            d = Math.floor(d),
            c = Math.round(c % 60),
            b = (d > 0 ? d + "m " : "") + c + "s";
        return b
    }
    ,
    i.utils.debug = function(a) {
        var c = [].slice.call(arguments).splice(1, arguments.length - 1);
        if (b.console && console.log) {
            var d;
            switch (a) {
            case 1:
            case 2:
                d = "error";
                break;
            default:
                d = "log"
            }
            if (a <= i.utils.debugLevel) {
                for (var e = "", f = 0; f < c.length; f++)
                    e += c[f] + " ";
                console[d] || (d = "log")
            }
        }
    }
    ;
    var j = j || function() {
        return {
            createDelegate: function(a, b) {
                if ("function" != typeof b)
                    throw new Error("method parameter is not a function [" + typeof b + "]");
                return function() {
                    return b.apply(a, arguments)
                }
            },
            onDocumentReady: function(a) {
                "complete" === c.readyState || "loaded" === c.readyState ? a() : c.addEventListener("DOMContentLoaded", a)
            }
        }
    }();
    i.namespace("SPRITZ.constants"),
    i.addToNamespace(i.constants, function() {
        var a = "spritzer"
          , b = "spritzer-control-"
          , c = {
            ROOT: a,
            SPEED_SELECTOR_TYPE_PREFIX: a + "-speedselect-",
            BTN_CONTAINER: a + "-button-container",
            BTN_BASE: b,
            BTN_PLAY: b + "play",
            BTN_PAUSE: b + "pause",
            BTN_PAUSEPLAY: b + "pauseplay",
            BTN_REWIND: b + "rewind",
            BTN_BACK: b + "back",
            BTN_FORWARD: b + "forward",
            BTN_END: b + "end",
            BTN_DISABLED: b + "disabled",
            BTN_CLOSE: a + "-close",
            BTN_LOGIN: a + "-login-btn",
            BTN_LOGOUT: a + "-logout-btn",
            USER: a + "-user",
            USER_BTN: a + "-user-btn",
            USER_LIST: a + "-user-list",
            USER_TEXT: a + "-user_text",
            LOGGEDIN: a + "-isLoggedin",
            LOGGEDOUT: a + "-isLoggedout",
            LOGO: a + "-logo",
            SPEED_BTN: a + "-speed-btn",
            SPEED_LIST: a + "-speed-list",
            SPEED_CONTAINER: a + "-speed",
            SPEED_TEXT: a + "-speed_text",
            SPEED_INC_BTN: a + "-speed-inc-btn",
            SPEED_DEC_BTN: a + "-speed-dec-btn",
            SPEED_SLIDER: a + "-speed-slider",
            SPEED_LABEL: a + "-speed-label",
            SPEED_ALERT: a + "-speed-alert",
            DROPDOWN_BTN: a + "-dropdown-toggle",
            DROPDOWN_LABEL: a + "-dropdown-label",
            DROPDOWN_CARET: a + "-dropdown-caret",
            DROPDOWN_LIST: a + "-dropdown-menu",
            SELECTED: a + "-selected",
            OPEN: a + "-open",
            SLIDER: a + "-slider",
            SLIDER_TRACK: a + "-slider-track",
            SLIDER_HIGHLIGHT: a + "-slider-highlight",
            SLIDER_DRAGGER: a + "-slider-dragger",
            WHEEL_CONTROL: a + "-wheel-control",
            SPEED_WHEEL: a + "-speed-wheel",
            DISABLED: a + "-disabled",
            CANVAS: a + "-canvas",
            CANVAS_CONTAINER: a + "-canvas-container",
            SPRITZER_CONTAINER: a + "-container",
            LOADING_OVERLAY: a + "-loading-overlay",
            MANUAL_MODE: a + "-manual-mode",
            PLAYING_STATE: a + "-playing-state",
            NON_SELECTABLE: "non-selectable"
        }
          , d = {
            MIN_SPEED: 10,
            MAX_SPEED: 100,
            PROGRESS_OFF: 0,
            PROGRESS_PAUSE: 1,
            PROGRESS_CONTINUOUS: 2
        };
        return Object.freeze(d),
        {
            Constants: d,
            CSSClasses: c
        }
    }),
    i.namespace("SPRITZ.helper"),
    i.addToNamespace(i.helper, function() {
        function a(a, b, c, d) {
            a.onload = function() {
                if (this.status >= 200 && this.status < 400)
                    if ("json" === b)
                        try {
                            c(JSON.parse(this.responseText))
                        } catch (a) {
                            i.utils.debug(3, "JSON parse failed", a.message),
                            d(a.message)
                        }
                    else
                        c(this.responseText);
                else {
                    i.utils.debug(3, "status", this.status + ", [" + this.statusText + "]");
                    var a = f(this);
                    d(a)
                }
            }
            ,
            a.onerror = function() {
                i.utils.debug(3, "status", this.status + ", [" + this.statusText + "]");
                var a = f(this);
                d(a)
            }
            ,
            a.send()
        }
        function d(a, b, c, d, e, h) {
            a.onreadystatechange = function() {
                if (4 == this.readyState)
                    if (this.status >= 200 && this.status < 400)
                        if ("json" === c)
                            try {
                                e(JSON.parse(this.responseText))
                            } catch (a) {
                                i.utils.debug(3, "JSON parse failed", a.message),
                                h(a.message)
                            }
                        else
                            e(this.responseText);
                    else {
                        i.utils.debug(3, "status", this.status + ", [" + this.statusText + "]");
                        var a = f(this);
                        h(a)
                    }
            }
            ,
            null !== d && "object" == typeof d ? (b ? a.setRequestHeader("Content-Type", b) : a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
            a.send(g(d))) : (b && a.setRequestHeader("Content-Type", b),
            a.send(d))
        }
        function e(a, b) {
            for (var c = !1, d = a.parentElement; !c && d; )
                d === b ? c = !0 : d = d.parentElement;
            return c
        }
        function f(a) {
            var b;
            try {
                var c = JSON.parse(a.response);
                b = "object" == typeof c ? c : null
            } catch (a) {
                b = null
            }
            return a.responseJSON = b,
            a
        }
        function g(a) {
            var b = "";
            for (var c in a)
                a.hasOwnProperty(c) && (b += encodeURIComponent(c) + "=" + encodeURIComponent(a[c]),
                b += "&");
            return b.length > 0 ? b.substring(0, b.length - 1) : b
        }
        var h = i.utils.isMsie()
          , j = function(a) {
            var b = c.createElement("BUTTON");
            return s(b, a),
            b.setAttribute("type", "button"),
            b
        }
          , k = function(a, b, d) {
            var e = c.createElement("CANVAS");
            return s(e, a),
            e.width = b,
            e.height = d,
            e
        }
          , l = function(a) {
            var b = c.createElement("DIV");
            return s(b, a),
            b
        }
          , m = function(a, b, d) {
            var e = c.createElement("SPAN");
            return s(e, a),
            e.textContent = b || "",
            d && e.setAttribute("value", d),
            e
        }
          , n = function(a) {
            var b = c.createElement("UL");
            return s(b, a),
            b
        }
          , o = function(a, b, d) {
            var e = c.createElement("LI");
            return s(e, a),
            e.textContent = b || "",
            d && e.setAttribute("value", d),
            e
        }
          , p = function(a, b) {
            a && (a.innerHTML = b || "")
        }
          , q = function(a, b) {
            a && (a.textContent = b || "")
        }
          , r = function(a) {
            var b = c.implementation.createHTMLDocument("");
            return b.body.innerHTML = a,
            b.body.children
        }
          , s = function(a, b) {
            if (null !== a)
                if (a.classList)
                    if (b.constructor === Array)
                        for (var c = 0; c < b.length; c += 1)
                            a.classList.add(b[c]);
                    else
                        a.classList.add(b);
                else if ("[object NodeList]" === a)
                    for (var c = 0; c < a.length; c++)
                        a[c].className += b;
                else
                    a.className += " " + b
        }
          , t = function(a, b) {
            var c;
            if (null !== a)
                if (a.classList)
                    c = a.classList.contains(b);
                else if ("[object NodeList]" == a) {
                    c = !1;
                    for (var d = 0; d < a.length; d++) {
                        c = a[d].className += b;
                        break
                    }
                } else
                    c = new RegExp("(^| )" + b + "( |$)","gi").test(a.className);
            else
                c = !1;
            return c
        }
          , u = function(a, b) {
            if (null !== a)
                if (a.classList)
                    a.classList.remove(b);
                else if ("[object NodeList]" == a)
                    for (var c = 0; c < a.length; c++)
                        a[c].className = a[c].className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)","gi"), " ");
                else
                    a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)","gi"), " ")
        }
          , v = function(a) {
            null !== a && (a.style.display = "none")
        }
          , w = function(a) {
            null !== a && (a.style.display = "block")
        }
          , x = function(a, b) {
            return null !== a ? a.title : null
        }
          , y = function(a, b) {
            null !== a && (a.title = b)
        }
          , z = function(a, d, e, f) {
            var g;
            return e = e || {},
            b.CustomEvent && !h ? g = new CustomEvent(d,{
                bubbles: !0,
                cancelable: !0,
                detail: e
            }) : (g = c.createEvent("CustomEvent"),
            g.initCustomEvent(d, !0, !0, e)),
            f && (g.source = f),
            a.dispatchEvent(g),
            g
        }
          , A = function(a) {
            for (var b = 1; b < arguments.length; b++) {
                var c = arguments[b];
                for (var d in c)
                    c.hasOwnProperty(d) && (null === c[d] ? a[d] = null : "object" == typeof c[d] ? c[d].constructor === Array ? a[d] = c[d].slice(0) : a[d] ? A(a[d], c[d]) : a[d] = A({}, c[d]) : a[d] = c[d])
            }
            return a
        }
          , B = function(b, c, e, f, g, h, j, k, l, m) {
            var n = new XMLHttpRequest;
            if (n.open(b, c, e),
            null !== f && "object" == typeof f)
                for (var o in f)
                    f.hasOwnProperty(o) && (o in n ? n[o] = f[o] : i.utils.debug(3, 'Invalid xhr property "' + o + '", unable to set'));
            for (var o in g)
                g.hasOwnProperty(o) && null !== g[o] && n.setRequestHeader(o, g[o]);
            "GET" === b ? a(n, j, l, m) : d(n, h, j, k, l, m)
        };
        return {
            createButton: j,
            createCanvas: k,
            createDiv: l,
            createSpan: m,
            createUl: n,
            createLi: o,
            setSpanHtml: p,
            setSpanText: q,
            parseHTML: r,
            offset: function(a) {
                var b = a.getBoundingClientRect();
                return {
                    top: b.top + c.body.scrollTop,
                    left: b.left + c.body.scrollLeft
                }
            },
            addClass: s,
            hasClass: t,
            removeClass: u,
            hide: v,
            show: w,
            getTitle: x,
            setTitle: y,
            dispatchEvent: z,
            extend: A,
            ajax: function(a) {
                B(a.type, a.url, a.async, a.xhrFields, a.headers, a.contentType, a.dataType, a.data, a.success, a.error)
            },
            isElementDescendantOf: e
        }
    }),
    i.namespace("SPRITZ.spritzinc"),
    i.addToNamespace(i.spritzinc, function() {
        function a(c, d, e, f, g, h) {
            if (!(this instanceof a))
                return new a(c,d);
            this.parentContainer = c,
            this.onChangeHandler = h,
            b.call(this, d, e, f, g)
        }
        function b(a, b, c, i) {
            this.selectBox = h.call(this, a, b, c, i),
            this.parentContainer.appendChild(this.selectBox),
            this.selectOptions.children.length > 0 && (this.value = this.selectOptions.children[0].getAttribute("value"),
            this.selectValue.innerHTML = this.selectOptions.children[0].innerHTML),
            this.selectBox.addEventListener("click", d.bind(this)),
            this.selectBox.addEventListener("mousedown", e.bind(this)),
            this.selectOptions.addEventListener("click", f.bind(this)),
            this.selectOptions.addEventListener("mousedown", e.bind(this)),
            this.documentClickHandler = g.bind(this)
        }
        function d(a) {
            a.target == this.selectOptions || l.isElementDescendantOf(a.target, this.selectOptions) || ("none" === getComputedStyle(this.selectOptions).display ? (l.show(this.selectOptions),
            c.addEventListener("click", this.documentClickHandler)) : l.hide(this.selectOptions))
        }
        function e(a) {
            a.stopPropagation(),
            a.preventDefault()
        }
        function f(a) {
            var b;
            if (a.target === this.selectOptions)
                b = null;
            else {
                b = null;
                for (var c = a.target; null === b && null !== c; )
                    c.parentElement === this.selectOptions ? b = c : c = c.parentElement
            }
            if (null === b)
                ;
            else if (!l.hasClass(b, k.DISABLED)) {
                l.hide(this.selectOptions);
                var d = b.getAttribute("value");
                d !== this.value && (this.setSelected(d),
                l.setSpanHtml(this.selectValue, this.options[d].innerHTML))
            }
        }
        function g(a) {
            a.target === this.selectBox || l.isElementDescendantOf(a.target, this.selectBox) || j.call(this)
        }
        function h(a, b, c, d) {
            var e = l.createDiv([k.DROPDOWN_BTN, b]);
            this.selectValue = l.createDiv([k.DROPDOWN_LABEL, c]),
            e.appendChild(this.selectValue);
            var f = l.createSpan(k.DROPDOWN_CARET);
            e.appendChild(f),
            this.selectOptions = l.createUl([k.DROPDOWN_LIST, d]),
            l.hide(this.selectOptions),
            e.appendChild(this.selectOptions),
            this.options = {};
            for (var g in a)
                if (a.hasOwnProperty(g)) {
                    var h = l.createLi("selectOption", null, g)
                      , i = l.createSpan("selectOptionLabel", a[g], g);
                    h.appendChild(i),
                    this.options[g] = h,
                    this.selectOptions.appendChild(h)
                }
            return e
        }
        function j() {
            l.hide(this.selectOptions),
            c.removeEventListener("click", this.documentClickHandler)
        }
        var k = i.constants.CSSClasses
          , l = (i.constants.Constants,
        i.helper);
        return a.prototype.addOption = function(a) {
            this.selectOptions.appendChild(a),
            this.options[a.getAttribute("value")] = a
        }
        ,
        a.prototype.getSelected = function() {
            return this.value
        }
        ,
        a.prototype.setSelected = function(a) {
            var b, c = this.options[a];
            if (c) {
                var d = this.options[this.value];
                d && l.removeClass(d, k.SELECTED),
                l.addClass(c, k.SELECTED),
                a !== this.value && (this.value = a,
                this.onChangeHandler && this.onChangeHandler(a)),
                this.selectValue.innerHTML = c.innerHTML,
                b = !0
            } else
                b = !1;
            return b
        }
        ,
        a.prototype.restrict = function(a) {
            var b, c = this.options[a];
            return c ? (l.addClass(c, k.DISABLED),
            b = !0) : b = !1,
            b
        }
        ,
        a.prototype.unrestrict = function(a) {
            var b, c = this.options[a];
            return c ? (l.removeClass(c, k.DISABLED),
            b = !0) : b = !1,
            b
        }
        ,
        {
            DropDownSelect: a
        }
    }),
    i.namespace("SPRITZ.spritzinc"),
    i.addToNamespace(i.spritzinc, function() {
        function a(c, d) {
            if (!(this instanceof a))
                return new a(c,d);
            this.parentContainer = c,
            this.options = d,
            b.call(this)
        }
        function b() {
            if (this.options.speedItems.length > 0) {
                for (var a = c.call(this), b = {}, d = 0, g = a.length; d < g; d += 1)
                    b[a[d].toString()] = a[d] + " wpm";
                this.dropDownSelect = new i.spritzinc.DropDownSelect(this.parentContainer,b,f.SPEED_BTN,f.SPEED_TEXT,f.SPEED_LIST,e.bind(this))
            }
        }
        function c() {
            return this.options.speedItems.sort(function(a, b) {
                return a - b
            })
        }
        function d(a) {
            null != this.parentContainer && h.dispatchEvent(this.parentContainer, "speedChange", {
                speed: a
            })
        }
        function e(a) {
            d.call(this, parseInt(a))
        }
        var f = i.constants.CSSClasses
          , g = i.constants.Constants
          , h = i.helper;
        return a.prototype.getSpeed = function() {
            return this.dropDownSelect ? parseInt(this.dropDownSelect.getSelected()) : void 0
        }
        ,
        a.prototype.setSpeed = function(a) {
            return !!this.dropDownSelect && this.dropDownSelect.setSelected(a.toString())
        }
        ,
        a.prototype.onAttach = function() {}
        ,
        a.prototype.onDetach = function() {}
        ,
        a.prototype.onVisibilityChange = function(a) {}
        ,
        a.prototype.restrict = function() {
            for (var a, b, d = c.call(this), e = 0, f = d.length; e < f; e += 1)
                d[e] < g.MIN_SPEED ? this.dropDownSelect.restrict(d[e]) : (a || (a = d[e]),
                d[e] > g.MAX_SPEED ? this.dropDownSelect.restrict(d[e]) : b = d[e]);
            this.dropDownSelect.getSelected() < g.MIN_SPEED ? this.dropDownSelect.setSelected(a) : this.dropDownSelect.getSelected() > g.MAX_SPEED && this.dropDownSelect.setSelected(b)
        }
        ,
        a.prototype.unrestrict = function() {
            for (var a = c.call(this), b = 0, d = a.length; b < d; b += 1)
                (a[b] < g.MIN_SPEED || a[b] > g.MAX_SPEED) && this.dropDownSelect.unrestrict(a[b])
        }
        ,
        {
            DropDownSpeedSelector: a
        }
    }),
    i.namespace("SPRITZ.spritzinc"),
    i.addToNamespace(i.spritzinc, function() {
        function a(a, i) {
            this.container = a,
            this.options = x.extend({}, y, i),
            this.dragging = !1,
            this.pagePos = 0,
            this.value = null,
            this.valueAttribute = this.container.getAttributeNode("data-value"),
            this._doDragEnd = d.bind(this),
            this._doDraggerDragStart = e.bind(this),
            this._doDragMove = f.bind(this),
            this._doTrackDragStart = h.bind(this),
            this._domDrag = g.bind(this),
            this._nearestValidValue = j.bind(this),
            this._onBodyMousemove = k.bind(this),
            this._onBodyMouseup = l.bind(this),
            this._onBodyTouchend = m.bind(this),
            this._onBodyTouchmove = n.bind(this),
            this._onDraggerMousedown = o.bind(this),
            this._onDraggerTouchstart = p.bind(this),
            this._onNonPropagatingEvent = q.bind(this),
            this._onTrackMousedown = r.bind(this),
            this._onTrackTouchstart = s.bind(this),
            this._ratioToValue = t.bind(this),
            this._valueChanged = u.bind(this),
            this._valueToRatio = v.bind(this),
            null === this.valueAttribute && (this.valueAttribute = c.createAttribute("data-value"),
            this.container.setAttributeNode(this.valueAttribute)),
            this.container.classList.contains(w.SLIDER) || this.container.classList.add(w.SLIDER),
            this.track = b([w.SLIDER_TRACK]),
            this.container.appendChild(this.track),
            this.options.highlight && (this.highlightTrack = b([w.SLIDER_HIGHLIGHT]),
            this.highlightTrack.style.width = "0",
            this.container.appendChild(this.highlightTrack)),
            this.dragger = b([w.SLIDER_DRAGGER]),
            this.container.appendChild(this.dragger),
            this.container.addEventListener("mousedown", this._onNonPropagatingEvent),
            this.container.addEventListener("touchstart", this._onNonPropagatingEvent),
            this.track.addEventListener("mousedown", this._onTrackMousedown),
            this.track.addEventListener("touchstart", this._onTrackTouchstart),
            this.options.highlight && (this.highlightTrack.addEventListener("mousedown", this._onTrackMousedown),
            this.highlightTrack.addEventListener("touchstart", this._onTrackTouchstart)),
            this.dragger.addEventListener("mousedown", this._onDraggerMousedown),
            this.dragger.addEventListener("touchstart", this._onDraggerTouchstart),
            c.body.addEventListener("mousemove", this._onBodyMousemove),
            c.body.addEventListener("mouseup", this._onBodyMouseup),
            c.body.addEventListener("touchmove", this._onBodyTouchmove),
            c.body.addEventListener("touchend", this._onBodyTouchend),
            "" === this.valueAttribute.value ? (this.value = this.getRange().min,
            this.valueAttribute.value = this.value.toString()) : this.value = this._nearestValidValue(this.valueAttribute.value)
        }
        function b(a) {
            var b = x.createDiv(a);
            return b.style.position = "absolute",
            b.style.top = "50%",
            b.style.userSelect = "none",
            b.style.cursor = "pointer",
            b
        }
        function d() {
            var a;
            if (this.dragging) {
                this.dragging = !1,
                this.dragger.classList.remove("dragging");
                var b = {
                    value: this.value
                };
                x.dispatchEvent(this.container, "sliderDragDone", b),
                c.body.style.cursor = "auto",
                a = !0
            } else
                a = !1;
            return a
        }
        function e(a, b, c) {
            if (1 !== a)
                return !1;
            this.dragging = !0,
            this.dragger.classList.add("dragging"),
            this._domDrag(b, c);
            var d = {
                value: this.value
            };
            return x.dispatchEvent(this.container, "sliderDragStart", d),
            !1
        }
        function f(a, b) {
            var d;
            return this.dragging ? (this._domDrag(a, b),
            c.body.style.cursor = "pointer",
            d = !0) : d = !1,
            d
        }
        function g(a, b, c) {
            var d, e, f;
            null == c && (c = !1),
            d = a - x.offset(this.track).left,
            d = Math.min(this.track.offsetWidth, d),
            d = Math.max(0, d);
            var g;
            return this.pagePos === d ? g = !1 : (this.pagePos = d,
            e = d / this.track.offsetWidth,
            f = this._ratioToValue(e),
            this._valueChanged(f, e, "domDrag"),
            g = this.options.snap ? this.setSliderPositionFromValue(f, c) : this.setSliderPosition(d, c)),
            g
        }
        function h(a, b, c) {
            return 1 === a && (this._domDrag(b, c, !0),
            this.dragging = !0,
            !1)
        }
        function j(a) {
            var b, c, d, e;
            return d = this.getRange(),
            a = Math.min(d.max, a),
            a = Math.max(d.min, a),
            this.options.allowedValues ? (b = null,
            $.each(this.options.allowedValues, function() {
                if (null === b || Math.abs(this - a) < Math.abs(b - a))
                    return b = this
            }),
            b) : this.options.step ? (c = (d.max - d.min) / this.options.step,
            e = Math.floor((a - d.min) / this.options.step),
            (a - d.min) % this.options.step > this.options.step / 2 && e < c && (e += 1),
            e * this.options.step + d.min) : a
        }
        function k(a) {
            return this._doDragMove(a.pageX, a.pageY)
        }
        function l(a) {
            return this._doDragEnd()
        }
        function m(a) {
            return this.dragging && a.preventDefault(),
            this._doDragEnd()
        }
        function n(a) {
            return this.dragging && a.preventDefault(),
            this._doDragMove(a.touches[0].pageX, a.touches[0].pageY)
        }
        function o(a) {
            return a.stopPropagation(),
            this._doDraggerDragStart(a.which, a.pageX, a.pageY)
        }
        function p(a) {
            return a.stopPropagation(),
            a.preventDefault(),
            this._doDraggerDragStart(1, a.touches[0].pageX, a.touches[0].pageY)
        }
        function q(a) {
            a.stopPropagation(),
            a.preventDefault()
        }
        function r(a) {
            return a.stopPropagation(),
            this._doTrackDragStart(a.which, a.pageX, a.pageY)
        }
        function s(a) {
            return a.stopPropagation(),
            a.preventDefault(),
            this._doTrackDragStart(1, a.touches[0].pageX, a.touches[0].pageY)
        }
        function t(a) {
            var b, c, d, e, f, g;
            return this.options.equalSteps ? (f = this.options.allowedValues.length,
            e = Math.round(a * f - .5),
            b = Math.min(e, this.options.allowedValues.length - 1),
            g = this.options.allowedValues[b]) : (c = this.getRange(),
            d = a * (c.max - c.min) + c.min,
            g = this._nearestValidValue(d)),
            g
        }
        function u(a, b, c) {
            if (a.toString() !== this.value.toString()) {
                this.value = a,
                this.valueAttribute.value = this.value.toString();
                var d = {
                    value: a,
                    ratio: b,
                    position: b * this.container.offsetWidth,
                    trigger: c,
                    el: this.slider
                };
                return x.dispatchEvent(this.container, "sliderValueChange", d)
            }
        }
        function v(a) {
            var b, c, d, e, f, g, h, i, j;
            if (this.options.equalSteps) {
                for (i = this.options.allowedValues,
                e = g = 0,
                h = i.length; g < h; e = ++g)
                    b = i[e],
                    (void 0 === c || null === c || Math.abs(b - a) < Math.abs(c - a)) && (c = b,
                    d = e);
                j = this.options.snapMid ? (d + .5) / this.options.allowedValues.length : d / (this.options.allowedValues.length - 1)
            } else
                f = this.getRange(),
                j = (a - f.min) / (f.max - f.min);
            return j
        }
        var w = i.constants.CSSClasses
          , x = i.helper
          , y = {
            highlight: !0
        };
        return a.prototype.decrement = function() {
            var a;
            return this.options.step && this.value > this.getRange().min ? (this.setValue(this.value - this.options.step),
            a = !0) : a = !1,
            a
        }
        ,
        a.prototype.increment = function() {
            var a;
            return this.options.step && this.value < this.getRange().max ? (this.setValue(this.value + this.options.step),
            a = !0) : a = !1,
            a
        }
        ,
        a.prototype.getRange = function() {
            return this.options.allowedValues ? {
                min: Math.min.apply(Math, this.options.allowedValues),
                max: Math.max.apply(Math, this.options.allowedValues)
            } : this.options.range ? {
                min: parseFloat(this.options.range[0]),
                max: parseFloat(this.options.range[1])
            } : {
                min: 0,
                max: 1
            }
        }
        ,
        a.prototype.setSliderPosition = function(a, b) {
            if (null == b && (b = !1),
            b && this.options.animate) {
                if (this.dragger.animate({
                    left: a
                }, 200),
                this.options.highlight)
                    return this.highlightTrack.animate({
                        width: a
                    }, 200)
            } else if (this.dragger.style.left = a + this.dragger.offsetWidth / 2 + "px",
            this.options.highlight)
                return this.highlightTrack.style.width = a + "px"
        }
        ,
        a.prototype.setSliderPositionFromValue = function(a, b) {
            var c;
            return null == b && (b = !1),
            c = this._valueToRatio(a),
            this.setSliderPosition(c * this.track.offsetWidth, b)
        }
        ,
        a.prototype.getStep = function() {
            return this.options.step
        }
        ,
        a.prototype.setValue = function(a) {
            var b;
            return a = this._nearestValidValue(a),
            b = this._valueToRatio(a),
            this.setSliderPositionFromValue(a),
            this._valueChanged(a, b, "setValue")
        }
        ,
        a.prototype.updateLayout = function() {
            this.container.style.minHeight = this.dragger.offsetHeight + "px",
            this.container.style.paddingLeft = this.dragger.offsetWidth / 2 + "px",
            this.container.style.paddingRight = this.dragger.offsetWidth / 2 + "px",
            this.track.style.marginTop = this.track.offsetHeight / -2 + "px",
            this.track.style.width = this.container.offsetWidth - this.dragger.offsetWidth + "px",
            this.options.highlight && (this.highlightTrack.style.marginTop = this.track.offsetHeight / -2 + "px"),
            this.dragger.style.marginTop = this.dragger.offsetHeight / -2 + "px",
            this.dragger.style.marginLeft = this.dragger.offsetWidth / -2 + "px",
            this.setSliderPositionFromValue(this.value)
        }
        ,
        {
            SimpleSlider: a
        }
    }),
    i.namespace("SPRITZ.spritzinc"),
    i.addToNamespace(i.spritzinc, function() {
        function a(a, b) {
            this.container = a,
            this.options = b,
            this._pendingHideAlert = null,
            this._fireSpeedChange = c.bind(this),
            this._hideAlert = e.bind(this),
            this._onDecButtonClick = g.bind(this),
            this._onIncButtonClick = h.bind(this),
            this._onIgnoredEvent = f.bind(this),
            this._onSliderDragDone = j.bind(this),
            this._onSliderValueChange = k.bind(this),
            this.decButton = m.createDiv([l.SPEED_DEC_BTN]),
            this.decButton.textContent = "-",
            this.container.appendChild(this.decButton),
            this.slider = m.createDiv([l.SPEED_SLIDER]),
            this.container.appendChild(this.slider),
            this.incButton = m.createDiv([l.SPEED_INC_BTN]),
            this.incButton.textContent = "+",
            this.container.appendChild(this.incButton),
            this.speedLabel = m.createDiv([l.SPEED_LABEL]),
            this.container.appendChild(this.speedLabel),
            this.speedAlert = m.createDiv([l.SPEED_ALERT]),
            this.container.appendChild(this.speedAlert),
            this.sliderCtrl = new i.spritzinc.SimpleSlider(this.slider,{
                highlight: !0,
                range: d.call(this),
                step: b.speedStep
            }),
            this.decButton.addEventListener("click", this._onDecButtonClick),
            this.decButton.addEventListener("mousedown", this._onIgnoredEvent),
            this.incButton.addEventListener("click", this._onIncButtonClick),
            this.incButton.addEventListener("mousedown", this._onIgnoredEvent),
            this.slider.addEventListener("sliderDragDone", this._onSliderDragDone),
            this.slider.addEventListener("sliderValueChange", this._onSliderValueChange)
        }
        function c(a) {
            var c = m.dispatchEvent(this.container, "speedChange", {
                speed: a,
                vetoed: !1,
                vetoMessage: null,
                alternateValue: null
            });
            return c.detail.vetoed ? (null !== this._pendingHideAlert && (b.clearTimeout(this._pendingHideAlert),
            this._pendingHideAlert = null),
            this.speedAlert.style.display = "block",
            this.speedAlert.textContent = c.detail.vetoMessage ? c.detail.vetoMessage : "Invalid speed: " + a,
            this._pendingHideAlert = b.setTimeout(this._hideAlert, 1e3),
            null !== c.detail.alternateValue && this.sliderCtrl.setValue(c.detail.alternateValue)) : (null !== this._pendingHideAlert && (b.clearTimeout(this._pendingHideAlert),
            this._pendingHideAlert = null),
            this.speedAlert.style.display = "none"),
            c
        }
        function d() {
            var a = this.options.speedItems.sort(function(a, b) {
                return a - b
            });
            return [a[0], a[a.length - 1]]
        }
        function e() {
            this.speedAlert.style.display = "none"
        }
        function f(a) {
            a.stopPropagation(),
            a.preventDefault()
        }
        function g(a) {
            this.sliderCtrl.decrement(),
            this._fireSpeedChange(this.sliderCtrl.value)
        }
        function h(a) {
            this.sliderCtrl.increment(),
            this._fireSpeedChange(this.sliderCtrl.value)
        }
        function j(a) {
            this._fireSpeedChange(a.detail.value)
        }
        function k(a) {
            this.speedLabel.textContent = a.detail.value.toString() + " wpm"
        }
        var l = i.constants.CSSClasses
          , m = i.helper;
        return a.prototype.restrict = function() {}
        ,
        a.prototype.getSpeed = function() {
            return this.sliderCtrl.value
        }
        ,
        a.prototype.setSpeed = function(a) {
            this.sliderCtrl.setValue(a),
            this.speedLabel.textContent = a.toString() + " wpm"
        }
        ,
        a.prototype.onAttach = function() {
            this.sliderCtrl.updateLayout()
        }
        ,
        a.prototype.onDetach = function() {}
        ,
        a.prototype.onVisibilityChange = function(a) {
            a && this.sliderCtrl.updateLayout()
        }
        ,
        a.prototype.unrestrict = function() {}
        ,
        {
            SliderSpeedSelector: a
        }
    }),
    i.namespace("SPRITZ.model"),
    i.model.TimedWord = f,
    i.model.TimedWord.FLAG_MASK = 7,
    i.model.TimedWord.FLAG_SENTENCE_START = 1,
    i.model.TimedWord.FLAG_BOLD = 2,
    i.model.TimedWord.FLAG_PARAGRAPH_START = 4,
    f.prototype = {
        isBold: function() {
            return 0 != (this.flags & this.model.TimedWord.FLAG_BOLD)
        },
        isSentenceStart: function() {
            return 0 != (this.flags & this.model.TimedWord.FLAG_SENTENCE_START)
        },
        isParagraphStart: function() {
            return 0 != (this.flags & this.model.TimedWord.FLAG_PARAGRAPH_START)
        },
        toString: function() {
            return '{"' + this.word + '", ' + this.orp + ", " + this.multiplier + ", " + this.position + (this.isParagraphStart() ? ", paragraphStart" : "") + (this.isSentenceStart() ? ", sentenceStart" : "") + (this.isBold() ? ", bold" : "") + "}"
        }
    },
    i.model.TelemetryItem = function(a, b, c, d, e, f, g, h, i, j, k, l) {
        if (this.id = a,
        this.time = g,
        this.user = b,
        this.userType = c,
        this.sessionId = d,
        this.category = "ContentView",
        this.name = h,
        this.data = {
            viewingSessionId: e,
            contentVersionId: f,
            char: i,
            speed: j
        },
        void 0 !== k && (this.data.interrupted = k),
        void 0 !== l)
            for (var m in l)
                l.hasOwnProperty(m) && (this.data[m] = l[m])
    }
    ,
    i.model.TelemetryBatch = function(a, b) {
        this.clientOS = a,
        this.clientEvents = b
    }
    ,
    i.model.IllegalArgumentException = function(a) {
        this.name = "IllegalArgumentException",
        this.message = a
    }
    ,
    i.model.IllegalArgumentException.prototype = new Error,
    i.model.IllegalArgumentException.prototype.constructor = i.model.IllegalArgumentException,
    i.model.ArrayIndexOutOfBoundsException = function(a) {
        this.name = "ArrayIndexOutOfBoundsException",
        this.message = a
    }
    ,
    i.model.ArrayIndexOutOfBoundsException.prototype = new Error,
    i.model.ArrayIndexOutOfBoundsException.prototype.constructor = i.model.ArrayIndexOutOfBoundsException,
    i.namespace("SPRITZ.model"),
    i.model.SpritzText = g,
    g.prototype = {
        applySpeedOverrides: function(a) {
            for (var b = a.split(","), c = 0; c < b.length; c++) {
                var d = null
                  , e = b[c].split(":");
                if (e.length < 2)
                    d = "Invalid speed override value: " + b[c];
                else {
                    var f = parseInt(e[0])
                      , g = parseInt(e[1]);
                    g < 0 && (d = "Invalid speed override value, negative multiplier, falling back to zero: " + b[c],
                    g = 0),
                    f < 0 || f >= this.words.length ? d = "Invalid speed override value, word index out of bounds: " + b[c] : this.words[f].multiplier = g
                }
                null !== d && console && console.log
            }
        },
        getContentVersionId: function() {
            return this.contentVersionId
        },
        setContentVersionId: function(a) {
            this.contentVersionId = a
        },
        getDuration: function() {
            return this.duration
        },
        getWords: function() {
            return this.words
        },
        getLocale: function() {
            return this.locale
        },
        getVersion: function() {
            return this.version
        },
        getWord: function(a) {
            return this.words[a]
        },
        getCurrentWord: function() {
            return this.words[this.index]
        },
        getPreviousWord: function() {
            if (this.words[this.index - 1]) {
                if (this.setCurrentIndex(--this.index),
                this.words[this.index]) {
                    return this.words[this.index]
                }
                return null
            }
            return null
        },
        getNextWord: function() {
            if (this.words[this.index + 1]) {
                if (this.setCurrentIndex(++this.index),
                this.words[this.index]) {
                    return this.words[this.index]
                }
                return null
            }
            return null
        },
        hasNextWord: function() {
            return this.index < this.words.length - 1
        },
        hasPreviousWord: function() {
            return this.index > 0
        },
        getCurrentIndex: function() {
            return this.index
        },
        setCurrentIndex: function(a) {
            var b;
            return this.words[a] ? (this.index = a,
            null != this.progressTracker && this.progressTracker(this.index + 1, this.words.length),
            b = !0) : b = !1,
            b
        },
        size: function() {
            return this.words.length
        },
        getWordCount: function() {
            return this.wordCount
        },
        isLoaded: function() {
            return this.words.length > 0 || this.words.length == this.wordCount
        },
        reset: function() {
            this.setCurrentIndex(0)
        },
        findWordForCharacter: function(a) {
            if (a < 0)
                throw new RangeError("charPosition must be zero or greater");
            var b;
            if (1 === this.words.length)
                b = 0;
            else {
                for (var c = 1; c < this.words.length; c++)
                    if (this.words[c].position > a) {
                        b = c - 1;
                        for (var d = this.words[b].position; b > 0 && this.words[b - 1].position === d; )
                            b--;
                        break
                    }
                if (void 0 === b) {
                    b = this.words.length - 1;
                    for (var d = this.words[b].position; b > 0 && this.words[b - 1].position === d; )
                        b--
                }
            }
            return b
        },
        getPreviousSentenceStart: function(a, b) {
            var c = i.model;
            if (a < 0 || a >= this.words.length)
                throw new c.ArrayIndexOutOfBoundsException(a);
            var d = a;
            if (b > 0)
                for (; d > 0 && (!this.words[d].isSentenceStart() || 0 != --b); d--)
                    ;
            return d
        },
        getNextSentenceStart: function(a, b) {
            var c = i.model;
            if (a < 0 || a > this.words.length)
                throw new c.ArrayIndexOutOfBoundsException(a);
            var d = a;
            if (b > 0)
                for (; d < this.words.length && (!this.words[d].isSentenceStart() || 0 != --b); d++)
                    ;
            return d
        },
        calculateTime: function(a, b) {
            var c = 0 == this.words.length ? this.wordCount : this.words.length;
            return 6e4 * (this.rawWordCount > 0 ? this.rawWordCount : c) / a * (c - b) / c
        },
        computeStandardDelay: function(a) {
            var b = Math.round(this.rawWordCount / a * 60 * 1e3);
            return Math.round(b / this.duration)
        },
        getTotalTime: function(a) {
            return this.calculateTime(a, 0)
        },
        getRemainingTime: function(a) {
            return this.calculateTime(a, this.index)
        },
        getProgressTracker: function() {
            return this.progressTracker
        },
        setProgressTracker: function(a) {
            this.progressTracker = a
        },
        seek: function(a, b) {
            var c;
            return b === this.seekType.ABSOLUTE_CHARACTER ? a >= 0 ? (this.setCurrentIndex(this.findWordForCharacter(a)),
            c = !0) : c = !1 : b === this.seekType.SENTENCE_START ? a >= 0 && a < this.words.length ? (this.setCurrentIndex(this.getPreviousSentenceStart(a, 1)),
            c = !0) : c = !1 : a >= 0 && a < this.words.length ? (this.setCurrentIndex(a),
            c = !0) : c = !1,
            c
        },
        clone: function() {
            var a = new i.model.SpritzText(this.contentVersionId,this.words,this.duration,this.wordCount,this.rawWordCount,this.locale,this.version);
            return a.contentId = this.contentId,
            a.setProgressTracker(this.progressTracker),
            a
        }
    },
    i.model.SpritzText.SeekType = Object.freeze({
        ABSOLUTE: "absolute",
        ABSOLUTE_CHARACTER: "absoluteCharacter",
        SENTENCE_START: "sentenceStart"
    }),
    i.model.SpritzText.autoIdCounter = 0,
    i.model.SpritzText.make = function(a) {
        if ("object" == typeof a) {
            if (a.content) {
                var b = a.content[0];
                return i.model.SpritzText.create(b.id, b.sd0, b.sd1, b.sd2, b.duration, b.rawWordCount)
            }
            return i.model.SpritzText.create(a.plainTextHash, a.sd0, a.sd1, a.sd2, a.duration, a.rawWordCount)
        }
    }
    ,
    i.model.SpritzText.create = function(a, b, c, d, e, f) {
        var g = i.model
          , h = "AAAC"
          , j = l.math.Long.fromInt(1073741823)
          , k = l.math.Long.fromInt(15)
          , m = l.math.Long.fromInt(16383)
          , n = l.math.Long.fromInt(7)
          , o = 1
          , p = 2
          , q = 4;
        if ("V2" !== b)
            throw new Error("Unknown container format");
        if (!("object" == typeof c && c instanceof Array && "object" == typeof d && d instanceof Array))
            throw new Error("Invalid data format: wrong types");
        if (0 == d.length)
            throw new Error("Invalid data format: data2");
        var r = d[0];
        if ("string" != typeof r)
            throw new g.IllegalArgumentException("Invalid preamble");
        var s = r.split(",");
        if (s.length < 4)
            throw new Error("Invalid preamble");
        if (s[0] != h)
            throw new Error("Unrecognized encoding");
        var t = parseInt(s[1])
          , u = []
          , v = 0
          , w = 0;
        if (0 == c.length) {
            if (1 != d.length)
                throw new Error("Invalid data format: Wrong data length")
        } else if (c.length != t || d.length - 1 != t)
            throw new Error("Invalid data format: Wrong data length");
        for (var x = 0; x < c.length; x++) {
            var y = c[x]
              , z = d[x + 1]
              , A = l.math.Long.fromString(z, 16)
              , B = A.and(n).toInt()
              , C = 0;
            0 != (B & o) && (C |= g.TimedWord.FLAG_BOLD),
            0 != (B & p) && (C |= g.TimedWord.FLAG_SENTENCE_START),
            0 != (B & q) && (C |= g.TimedWord.FLAG_PARAGRAPH_START),
            A = A.shiftRight(3);
            var D = A.and(m).getLowBits();
            A = A.shiftRight(14);
            var E = A.and(k).getLowBits();
            A = A.shiftRight(4);
            var F = A.and(j).getLowBits();
            u.push(new g.TimedWord(y,E,D,F,C)),
            v = v + 1 + D / 100,
            "" !== y && w++
        }
        return void 0 !== e && null !== e || (e = v),
        f || (f = w),
        new i.model.SpritzText(a,u,e,t,f,s[2],s[3])
    }
    ,
    i.model.SpritzText.createFromContainerV2 = function(a, b) {
        return "object" == typeof b.sdRaw ? i.model.SpritzText.createFromFlashV1(a, b.sdRaw) : i.model.SpritzText.create(a, b.sd0, b.sd1, b.sd2, null, null)
    }
    ,
    i.model.SpritzText.createFromFlashV1 = function(a, b) {
        for (var c = b.Locale, d = b.EngineVersion, e = new Array(b.Words.length), f = 0, g = 0, h = 0; h < b.Words.length; h++) {
            var j = b.Words[h]
              , k = 0;
            null !== j.Flags && (-1 !== j.Flags.indexOf("bold") && (k |= i.model.TimedWord.FLAG_BOLD),
            -1 !== j.Flags.indexOf("sentenceStart") && (k |= i.model.TimedWord.FLAG_SENTENCE_START),
            -1 !== j.Flags.indexOf("paragraphStart") && (k |= i.model.TimedWord.FLAG_PARAGRAPH_START)),
            "" !== j.Segment && g++,
            e[h] = new i.model.TimedWord(j.Segment,j.ORP,j.Multiplier,j.CharPosition,k),
            f = f + 1 + j.Multiplier / 100
        }
        return new i.model.SpritzText(a,e,f,e.length,g,c,d)
    }
    ,
    i.model.SpritzText.createFromString = function(a) {
        var b, c = JSON.parse(a), d = "spritzText" + i.model.SpritzText.autoIdCounter++;
        if ("string" != typeof c.sd0)
            throw new Error("Unable to parse data, missing container version field");
        if ("V2" === c.sd0)
            b = i.model.SpritzText.createFromContainerV2(d, c);
        else {
            if ("Flash1" !== c.sd0)
                throw new Error("Unable to parse data, unsupported container version: " + c.sd0);
            b = i.model.SpritzText.createFromFlashV1(d, c)
        }
        return b
    }
    ;
    var k = function() {
        function a(a, d) {
            for (var e = 0, f = a.length; e < f; ++e)
                !function(e) {
                    function f() {
                        if (g && g.offsetWidth !== h && (++b,
                        g.parentNode.removeChild(g),
                        g = null),
                        b >= a.length && (i && clearInterval(i),
                        b === a.length))
                            return d(),
                            !0
                    }
                    var g = c.createElement("span");
                    g.innerHTML = "giItT1WQy@!-/#",
                    g.style.position = "absolute",
                    g.style.left = "-10000px",
                    g.style.top = "-10000px",
                    g.style.fontSize = "300px",
                    g.style.fontFamily = "sans-serif",
                    g.style.fontVariant = "normal",
                    g.style.fontStyle = "normal",
                    g.style.fontWeight = "normal",
                    g.style.letterSpacing = "0",
                    c.body.appendChild(g);
                    var h = g.offsetWidth;
                    g.style.fontFamily = e;
                    var i = 0;
                    f() || (i = setInterval(f, 50))
                }(a[e])
        }
        var b = 0;
        return function(c, d) {
            c.length > b ? a(c, d) : d()
        }
    }();
    i.namespace("SPRITZ.client"),
    i.addToNamespace(i.client, function() {
        return {
            VersionInfo: {
                name: "Spritz_JSSDK",
                version: "2.0.17",
                buildDate: "4/16/2019, 11:05:37 AM"
            }
        }
    }),
    i.namespace("SPRITZ.client"),
    i.addToNamespace(i.client, function() {
        function a() {
            return "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && null !== new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent)
        }
        function c(a, b) {
            this.code = a,
            this.message = b
        }
        function d(a) {
            this.url = a,
            this.onSuccess = null,
            this.onError = null,
            this.storageHandler = new i.datastore.StorageHandler
        }
        function e(a) {
            this.url = a,
            this.onSuccess = null,
            this.onError = null,
            this.storageHandler = new i.datastore.StorageHandler
        }
        var f = function(a) {
            "function" == typeof b.removeEventListener ? (b.removeEventListener("message", this.onMessageHandler, !1),
            i.utils.debug(3, "Registered listener via addEventListener")) : b.detachEvent("onmessage", this.onMessageHandler),
            this.storageHandler.remove("authResponse"),
            this.storageHandler.remove("paymentResponse"),
            this.onSuccess && this.onSuccess(a.data),
            this.showing = !1,
            a.source.close()
        };
        return e.prototype.show = function(c, d) {
            this.onSuccess = c,
            this.onError = d,
            i.utils.debug(3, "opening auth popup with URL: ", this.url),
            this.storageHandler.remove("paymentResponse");
            var e = b.open(this.url, "SpritzLogin", "width=400,height=400,location=0,menubar=0,toolbar=0");
            if (e) {
                e.focus(),
                this.showing = !0,
                this.onMessageHandler = j.createDelegate(this, f),
                "function" == typeof b.addEventListener ? (b.addEventListener("message", this.onMessageHandler, !1),
                i.utils.debug(3, "Registered listener via addEventListener")) : b.attachEvent("onmessage", this.onMessageHandler);
                var g = a()
                  , h = this
                  , k = null;
                k = setInterval(function() {
                    var a = h.storageHandler.getString("paymentResponse");
                    if (null !== a && h.onMessageHandler({
                        data: a,
                        source: e
                    }),
                    g)
                        try {
                            e.name && -1 !== e.name.indexOf("#access_token") && h.onMessageHandler({
                                data: e.name,
                                source: e
                            })
                        } catch (a) {
                            i.utils.debug(2, a)
                        }
                    h.showing && e ? e.closed && (clearInterval(k),
                    h.showing = !1,
                    h.onError && h.onError(new Error("Payment aborted"))) : clearInterval(k)
                }, 250)
            } else
                i.utils.debug(1, "SpritzClient: Unable to open payment popup."),
                this.onError && this.onError(new Error("Popup unable to open."))
        }
        ,
        d.prototype.show = function(c, d) {
            this.onSuccess = c,
            this.onError = d,
            i.utils.debug(3, "opening auth popup with URL: ", this.url),
            this.storageHandler.remove("authResponse");
            var e = b.open(this.url, "SpritzLogin", "width=400,height=400,location=0,menubar=0,toolbar=0");
            if (e) {
                e.focus(),
                this.showing = !0,
                this.onMessageHandler = j.createDelegate(this, f),
                "function" == typeof b.addEventListener ? (b.addEventListener("message", this.onMessageHandler, !1),
                i.utils.debug(3, "Registered listener via addEventListener")) : b.attachEvent("onmessage", this.onMessageHandler);
                var g = a()
                  , h = this
                  , k = null;
                k = setInterval(function() {
                    var a = h.storageHandler.getString("authResponse");
                    if (null !== a && h.onMessageHandler({
                        data: a,
                        source: e
                    }),
                    g)
                        try {
                            e.name && -1 !== e.name.indexOf("#access_token") && h.onMessageHandler({
                                data: e.name,
                                source: e
                            })
                        } catch (a) {
                            i.utils.debug(2, a)
                        }
                    h.showing && e ? e.closed && (clearInterval(k),
                    h.showing = !1,
                    h.onError && h.onError(new Error("Login aborted"))) : clearInterval(k)
                }, 250)
            } else
                i.utils.debug(1, "SpritzClient: Unable to open auth popup."),
                this.onError && this.onError(new Error("Popup unable to open."))
        }
        ,
        {
            APIError: c,
            AuthPopup: d,
            PaymentPopup: e
        }
    }),
    i.addToNamespace(i.client, function() {
        function a(a) {
            return "string" == typeof a && '"' === a.charAt(0) && '"' === a.charAt(a.length - 1) && (a = a.substr(1, a.length - 2)),
            a
        }
        function b(a, b, c) {
            this.clientId = a,
            this.apiRoot = b,
            this.redirectUri = c,
            this.initialized = !1,
            this.clientAccessToken = null,
            this.guestAccessToken = null,
            this.userAccessToken = null,
            this.apiHost = null,
            this.anonymousEnabled = !1,
            this.premium = !1,
            this.email = null,
            this.activationTimestamp = null,
            this.loginCallback = null,
            this.logoutCallback = null,
            this.paymentStateChangeCallback = null,
            this.storageHandler = new i.datastore.StorageHandler,
            h.call(this),
            g.call(this),
            this.clientAccessToken = w.call(this, d.CLIENT_TOKEN),
            this.guestId = j.call(this, d.GUEST_ID),
            this.guestAccessToken = w.call(this, d.GUEST_TOKEN),
            this.userId = j.call(this, d.USER_ID),
            this.userName = w.call(this, d.USER_NAME),
            this.userAccessToken = w.call(this, d.USER_TOKEN),
            this.premium = w.call(this, d.PREMIUM),
            this.email = w.call(this, d.EMAIL),
            this.activationTimestamp = w.call(this, d.ACTIVATION_TIMESTAMP),
            this.registry = {
                loginStateChanged: [],
                paymentStateChanged: []
            }
        }
        var c = i.helper
          , d = Object.freeze({
            CLIENT_TOKEN: "clientToken",
            USER_ID: "userId",
            USER_NAME: "userName",
            USER_TOKEN: "userToken",
            GUEST_ID: "guestId",
            GUEST_TOKEN: "guestToken",
            PREMIUM: "premiumResponse",
            EMAIL: "email",
            ACTIVATION_TIMESTAMP: "activationTimestamp"
        })
          , e = function(a) {
            var b = {};
            if (null === a || 0 === a.length)
                return b;
            var c = a.indexOf("#");
            c >= 0 && (a = a.substring(c + 1));
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f, g, h = d[e], i = h.indexOf("=");
                -1 === i ? (f = decodeURIComponent(h),
                g = !0) : (f = decodeURIComponent(h.substring(0, i)),
                g = decodeURIComponent(h.substring(i + 1))),
                b[f] = g
            }
            return b
        }
          , f = function(a, b, c) {
            return c + "." + a + "." + b
        }
          , g = function() {
            var a = this.apiRoot.indexOf("//");
            if (-1 === a)
                this.apiHost = "api.spritzinc.com";
            else {
                var b = this.apiRoot.indexOf("/", a + 2);
                this.apiHost = -1 === b ? this.apiRoot.substring(a + 2) : this.apiRoot.substring(a + 2, b)
            }
        }
          , h = function() {
            "/" === this.apiRoot.substring(this.apiRoot.length - 1) && (this.apiRoot = this.apiRoot.substring(0, this.apiRoot.length - 1))
        }
          , j = function(b) {
            var c = w.call(this, b);
            if (c) {
                var d = a(c);
                c !== d && (v.call(this, b, d),
                c = d)
            }
            return c
        }
          , k = function(a) {
            var b, c;
            return (403 === a.status || 500 === a.status) && "object" == typeof a.responseJSON && a.responseJSON.code && a.responseJSON.message ? (b = a.responseJSON.code,
            c = "[" + a.responseJSON.code + "/" + a.responseJSON.message + "]") : (b = a.status,
            c = "HTTP call failed, status: " + a.status + ", message: " + a.statusText),
            new i.client.APIError(b,c)
        }
          , l = function(a, b) {
            var d = this
              , e = function(c) {
                "access_token"in c && "token_type"in c && "bearer" === c.token_type ? "function" == typeof a && q.call(d, c.access_token, a, b) : "function" == typeof b && b(new Error("Client login failed, invalid response"))
            }
              , f = function(a) {
                var c = k.call(d, a);
                if (403 === c.code && (i.utils.debug(2, "Client ID " + d.clientId + " is not authorized to use anonymous mode"),
                d.anonymousEnabled = !1),
                "function" == typeof b) {
                    var e = new Error("Unable to perform client login: " + c.message);
                    e.cause = c,
                    b(e)
                }
            };
            c.ajax({
                type: "GET",
                url: this.apiRoot + "/oauth/clientToken?clientId=" + encodeURIComponent(this.clientId),
                dataType: "json",
                async: !0,
                success: e,
                error: f
            })
        }
          , m = function(a, b) {
            var d = this
              , e = function(c) {
                "userid"in c && "token"in c ? c.audience === d.clientId ? (z.call(d, c.userid, c.token),
                a()) : "function" == typeof b && b(new Error("clientId mismatch")) : "function" == typeof b && b(new Error("Guest login failed, invalid response"))
            }
              , f = function(a) {
                var c = k.call(d, a);
                if (403 === c.code && (i.utils.debug(1, "Client ID " + d.clientId + " is not authorized to use anonymous mode"),
                d.anonymousEnabled = !1),
                "function" == typeof b) {
                    var e = new Error("Unable to perform guest login: " + c.message);
                    e.cause = c,
                    b(e)
                }
            };
            c.ajax({
                type: "GET",
                url: this.apiRoot + "/oauth/guestToken?clientId=" + encodeURIComponent(this.clientId),
                xhrFields: {
                    withCredentials: !0
                },
                dataType: "json",
                async: !0,
                success: e,
                error: f
            })
        }
          , n = function(a, b, c, d, e) {
            var f = this
              , g = 1
              , h = {
                url: a
            }
              , j = !0;
            void 0 !== b && (h.selector = b,
            h.selectorType = void 0 === c ? "CSS" : c);
            var k = function() {
                f.execute({
                    type: "POST",
                    contentType: "application/json",
                    url: "/content",
                    dataType: "json",
                    async: !0,
                    data: JSON.stringify(h)
                }, j, !0, function(a) {
                    d && d(a)
                }, function(a) {
                    !j && "code"in a && 403 === a.code && 1 === g ? (i.utils.debug(2, "Content retrieval in anonymous failed with 403, retrying with userRequired=true"),
                    g++,
                    j = !0,
                    k()) : "function" == typeof e && e(new Error("Content retrieval failed: " + a.message))
                })
            };
            k()
        }
          , o = function(a, b, c, d, e, f) {
            this.execute({
                type: "GET",
                url: "/contentVersion?includeSpritzableText=" + b + "&includePlainText=" + c + "&sortColumn=createdDate&sortDirection=DESC&pageSize=1&contentId=" + encodeURIComponent(a),
                dataType: "json",
                async: !0
            }, !0, !0, function(g) {
                if (0 === g.content.length)
                    f && f(new Error("No contentVersion returned"));
                else {
                    var h = g.content[0];
                    if (e) {
                        var j, k;
                        if (d) {
                            var l = i.model.SpritzText.make(g);
                            c && (l.plainText = h.plainText),
                            b || (l.contentId = a),
                            j = l,
                            k = g.media
                        } else
                            j = {
                                id: h.id,
                                duration: h.duration,
                                locale: h.locale,
                                sd0: h.sd0,
                                sd1: h.sd1,
                                sd2: h.sd2,
                                sd3: h.sd3,
                                sd4: h.sd4
                            },
                            k = h.media;
                        e(j, k)
                    }
                }
            }, function(b) {
                f && f(new Error("Unable to retrieve contentVersion, contentId=" + a + ": " + b.message))
            })
        }
          , p = function(a, b) {
            var c = null;
            try {
                this.initialized = !0
            } catch (a) {
                c = a
            }
            null === c ? a && a() : "function" == typeof b && b(new Error("Initialization failed: " + c.message))
        }
          , q = function(a, b) {
            x.call(this, a),
            "function" == typeof b && b(a)
        }
          , r = function(a, b, c) {
            var d = e(a);
            d.access_token && d.token_type ? "bearer" === d.token_type ? A.call(this, d.access_token, b, c) : this.onError && this.onError(new Error("Unexpected token type: " + d.token_type)) : this.onError && this.onError(new Error("No token data in response"))
        }
          , s = function(a, b) {
            this.storageHandler.remove("paymentResponse"),
            A.call(this, this.userAccessToken, function() {
                i.utils.debug(3, "Token revalidation success")
            }, function(a) {
                i.utils.debug(1, "Token revalidation failure [" + a + "]")
            }),
            b()
        }
          , t = function(a, b, c, d, e, f, g) {
            y.call(this, a, b, c, d, e, f),
            g && g(f),
            this.loginCallback && this.loginCallback()
        }
          , u = function(a) {
            this.storageHandler.remove(f(this.apiHost, this.clientId, a))
        }
          , v = function(a, b) {
            this.storageHandler.putString(f(this.apiHost, this.clientId, a), b)
        }
          , w = function(a) {
            return this.storageHandler.getString(f(this.apiHost, this.clientId, a))
        }
          , x = function(a) {
            if (this.clientAccessToken = a,
            null === a)
                u.call(this, d.CLIENT_TOKEN);
            else
                try {
                    v.call(this, d.CLIENT_TOKEN, a)
                } catch (a) {
                    i.utils.debug(1, "Error writing to localStorage: ", a)
                }
        }
          , y = function(a, b, c, e, f, g) {
            var h = this;
            if (this.userAccessToken = g,
            null === g)
                this.userId = null,
                this.userName = null,
                this.premium = !1,
                this.email = null,
                this.activationTimestamp = null,
                u.call(this, d.USER_ID),
                u.call(this, d.USER_NAME),
                u.call(this, d.USER_TOKEN),
                u.call(this, d.PREMIUM),
                u.call(this, d.EMAIL),
                u.call(this, d.ACTIVATION_TIMESTAMP),
                h.paymentStateChangeCallback({
                    state: "basic"
                });
            else {
                this.setUserId(a),
                this.setUserName(b),
                this.setPremium(c),
                this.setEmail(e),
                this.setActivationTimestamp(f),
                h.paymentStateChangeCallback({
                    state: h.isUserPremium() ? "premium" : "basic"
                });
                try {
                    v.call(this, d.USER_TOKEN, g)
                } catch (a) {
                    i.utils.debug(1, "Error writing userToken to localStorage: ", a)
                }
            }
        }
          , z = function(a, b) {
            if (null !== this.guestAccessToken && void 0 !== this.guestAccessToken || c.ajax({
                type: "POST",
                url: this.apiRoot + "/user/loggedOutInstallation?access_token=" + encodeURIComponent(b),
                dataType: "json",
                async: !0,
                data: {
                    guest: b
                },
                success: function(a) {},
                error: function(a) {}
            }),
            this.guestAccessToken = b,
            null === b)
                u.call(this, d.GUEST_ID),
                u.call(this, d.GUEST_TOKEN);
            else {
                this.setGuestId(a);
                try {
                    v.call(this, d.GUEST_TOKEN, b)
                } catch (a) {
                    i.utils.debug(1, "Error writing guestToken to localStorage: ", a)
                }
            }
        }
          , A = function(a, b, d) {
            var e = function(a) {
                d && d(new Error("Token validation failed: " + a.message + " Please make sure you are not using Internet Explorer 9 or less, as Spritz is unsupported in those browsers."))
            }
              , f = this;
            c.ajax({
                type: "GET",
                url: this.apiRoot + "/oauth/tokeninfo?access_token=" + encodeURIComponent(a),
                dataType: "json",
                async: !0,
                success: function(c) {
                    c.audience === f.clientId ? t.call(f, c.userid, c.username, c.premium, c.email, c.activation_timestamp, a, b, d) : e(new Error("clientId mismatch"))
                },
                error: e
            })
        };
        b.prototype.buildLoginUrl = function() {
            return this.apiRoot + "/oauth/authorize?c=" + encodeURIComponent(i.client.VersionInfo.name + "_" + i.client.VersionInfo.version) + "&response_type=token&client_id=" + this.clientId + "&redirect_uri=" + encodeURIComponent(this.redirectUri)
        }
        ,
        b.prototype.buildPaymentUrl = function() {
            return this.apiRoot + "/oauth/payment?c=" + encodeURIComponent(i.client.VersionInfo.name + "_" + i.client.VersionInfo.version) + "&response_type=token&client_id=" + this.clientId + "&email=" + encodeURIComponent(this.email) + "&redirect_uri=" + encodeURIComponent(this.redirectUri)
        }
        ,
        b.prototype.execute = function(a, b, d, e, f) {
            var g, h, j = null, n = 1, o = this;
            if (a.url = this.apiRoot + a.url,
            g = function() {
                i.utils.debug(3, "Invoking " + a.type + " " + a.url);
                var b = function(a) {
                    if (401 === a.status && 1 === n)
                        n++,
                        "user" === j ? y.call(o, null, null, null, null, null, null) : "guest" === j ? z.call(o, null, null) : "client" === j && x.call(o, null),
                        h();
                    else {
                        var b = k(a);
                        f ? f(b) : i.utils.debug(1, b.code + ": " + b.message)
                    }
                };
                "user" === j ? a.headers = {
                    Authorization: "Bearer " + o.userAccessToken
                } : "guest" === j ? a.headers = {
                    Authorization: "Bearer " + o.guestAccessToken
                } : "client" === j && (a.headers = {
                    Authorization: "Bearer " + o.clientAccessToken
                }),
                a.success = e,
                a.error = b,
                c.ajax(a)
            }
            ,
            h = function() {
                if (b || null !== o.userAccessToken || null !== o.guestAccessToken)
                    if (b)
                        if (null !== o.userAccessToken)
                            j = "user",
                            g();
                        else if (d)
                            if (j = "guest",
                            null === o.guestAccessToken) {
                                var a = function(a) {
                                    f && f(new Error("API call failed, guest login failed: " + a.message))
                                };
                                m.call(o, g, a)
                            } else
                                g();
                        else
                            f && f(new Error("No user login and no guest allowed"));
                    else
                        j = o.userAccessToken ? "user" : "guest",
                        g();
                else if (j = "client",
                null === o.clientAccessToken) {
                    var c = function(a) {
                        "cause"in a && a.cause instanceof i.client.APIError && 403 === a.cause.code ? (i.utils.debug(2, "Client login failed with status 403, retrying API call with userRequired"),
                        b = !0,
                        h()) : f && f(new Error("API call failed, client login failed: " + a.message))
                    };
                    l.call(o, g, c)
                } else
                    g()
            }
            ,
            o.initialized)
                h();
            else {
                var q = function(a) {
                    f && f(new Error("Execution failed, unable to get accessToken: " + a.message))
                };
                p.call(o, h, q)
            }
        }
        ,
        b.prototype.userLogin = function(a, b) {
            var c = new i.client.AuthPopup(this.buildLoginUrl())
              , d = this
              , e = function() {
                a(),
                B.call(d, "loginStateChanged", {
                    state: "login"
                })
            }
              , f = function(a) {
                r.call(d, a, e, b)
            }
              , g = function(a) {
                "function" == typeof b && b(new Error("Login Failed: " + a.message))
            };
            c.show(f, g)
        }
        ,
        b.prototype.userPayment = function(a, b) {
            var c = new i.client.PaymentPopup(this.buildPaymentUrl())
              , d = this
              , e = function() {
                s.call(d, d.userAccessToken, a),
                d.paymentStateChangeCallback({
                    state: "premium"
                })
            }
              , f = function(a) {
                "function" == typeof b && b(new Error("Payment Failed: " + a.message))
            };
            c.show(e, f)
        }
        ,
        b.prototype.userLogout = function(a) {
            function b() {
                d.logoutCallback && d.logoutCallback();
                try {
                    B.call(d, "loginStateChanged", {
                        state: "logout"
                    })
                } catch (a) {
                    i.utils.debug(1, 'Failed to raise "loginStateChanged" event [' + a.message + "]")
                }
            }
            y.call(this, null, null, null, null, null, null);
            var d = this;
            !0 === a ? c.ajax({
                type: "GET",
                url: this.apiRoot + "/oauth/logout",
                xhrFields: {
                    withCredentials: !0
                },
                dataType: "text",
                async: !0,
                success: function() {
                    i.utils.debug(3, "Call to logout on API server completed successfully"),
                    b()
                },
                error: function(a) {
                    i.utils.debug(1, "Call to logout on API server failed: " + a),
                    b()
                }
            }) : b()
        }
        ,
        b.prototype.fetchContents = function(a, b, c, d, e) {
            var f = this
              , g = function(a) {
                o.call(f, a.id, !0, !1, !0, b, c)
            };
            n.call(this, a, d, e, g, c)
        }
        ,
        b.prototype.fetchContents2 = function(a, b, c, d) {
            var e, f, g, h, i, j = this;
            void 0 === d ? (e = !0,
            f = null,
            g = null,
            h = !1,
            i = !0) : (e = void 0 === d.decode || d.decode,
            f = void 0 === d.selector ? null : d.selector,
            g = void 0 === d.selectorType ? "CSS" : d.selectorType,
            h = void 0 !== d.includePlainText && d.includePlainText,
            i = void 0 === d.includeSpritzableText || d.includeSpritzableText);
            var k = function(a) {
                o.call(j, a.id, i, h, e, b, c)
            };
            n.call(this, a, f, g, k, c)
        }
        ,
        b.prototype.fetchContentsByContentId = function(a, b, c, d) {
            var e, f, g;
            void 0 === d ? (e = !0,
            f = !1,
            g = !0) : (e = void 0 === d.decode || d.decode,
            f = void 0 !== d.includePlainText && d.includePlainText,
            g = void 0 === d.includeSpritzableText || d.includeSpritzableText),
            o.call(this, a, g, f, e, b, c)
        }
        ,
        b.prototype.isUserLoggedIn = function() {
            return "string" == typeof this.userAccessToken && this.userAccessToken.length > 0
        }
        ,
        b.prototype.isUserPremium = function() {
            return "true" === w.call(this, d.PREMIUM)
        }
        ,
        b.prototype.setAuthResponse = function(a, b, c) {
            r.call(this, a, b, c)
        }
        ,
        b.prototype.spritzify = function(a, b, c, d) {
            this.isUserLoggedIn() && !this.isUserPremium() && A.call(this, this.userAccessToken, function() {
                i.utils.debug(3, "Token revalidation success")
            }, function(a) {
                i.utils.debug(1, "Token revalidation failure [" + a + "]")
            }),
            this.execute({
                type: "POST",
                url: "/misc/spritzify",
                dataType: "json",
                async: !0,
                data: {
                    plainText: a,
                    locale: b
                }
            }, !0, !0, function(a) {
                try {
                    var b = i.model.SpritzText.make(a);
                    "function" == typeof c && c(b)
                } catch (a) {
                    "function" == typeof d && d(new Error("Invalid data received: " + a.message))
                }
            }, function(a) {
                if ("function" == typeof d) {
                    var b;
                    b = void 0 !== a.message ? a.message : a.status + " [" + a.statusText + "]",
                    d(new Error("Unable to retrive spritzableText: " + b))
                }
            })
        }
        ,
        b.prototype.sendTelemetry = function(a, b, c) {
            var d = a.clientEvents[0].user
              , e = "g" === a.clientEvents[0].userType ? "guest" : "user"
              , f = "g" === a.clientEvents[0].userType;
            this.execute({
                type: "POST",
                contentType: "application/json",
                url: "/" + e + "/" + d + "/event",
                dataType: "json",
                async: !0,
                data: JSON.stringify(a)
            }, !0, f, function(c) {
                "function" == typeof b && b(a, c)
            }, function(b) {
                if ("function" == typeof c) {
                    var d;
                    d = void 0 !== b.message ? b.message : b.status + " [" + b.statusText + "]",
                    c(a, new Error("Unable to send Telemetry: " + d))
                }
            })
        }
        ,
        b.prototype.setAnonymousEnabled = function(a) {
            this.anonymousEnabled = !0 === a
        }
        ,
        b.prototype.getGuestId = function() {
            return this.guestId
        }
        ,
        b.prototype.setGuestId = function(a) {
            this.guestId = a;
            try {
                v.call(this, d.GUEST_ID, a)
            } catch (a) {
                i.utils.debug(1, "Error writing guestId to localStorage: ", a)
            }
        }
        ,
        b.prototype.getUserId = function() {
            return this.userId
        }
        ,
        b.prototype.setUserId = function(a) {
            this.userId = a;
            try {
                v.call(this, d.USER_ID, a)
            } catch (a) {
                i.utils.debug(1, "Error writing userId to localStorage: ", a)
            }
        }
        ,
        b.prototype.getUserName = function() {
            return this.userName
        }
        ,
        b.prototype.setUserName = function(a) {
            this.userName = a;
            try {
                v.call(this, d.USER_NAME, a)
            } catch (a) {
                i.utils.debug(1, "Error writing userName to localStorage: ", a)
            }
        }
        ,
        b.prototype.setPremium = function(a) {
            this.premium = a;
            try {
                v.call(this, d.PREMIUM, a)
            } catch (a) {
                i.utils.debug(1, "Error writing premium to localStorage: ", a)
            }
        }
        ,
        b.prototype.setEmail = function(a) {
            this.email = a;
            try {
                v.call(this, d.EMAIL, a)
            } catch (a) {
                i.utils.debug(1, "Error writing email to localStorage: ", a)
            }
        }
        ,
        b.prototype.setActivationTimestamp = function(a) {
            this.activationTimestamp = a;
            try {
                v.call(this, d.ACTIVATION_TIMESTAMP, a)
            } catch (a) {
                i.utils.debug(1, "Error writing activation timestamp to localStorage: ", a)
            }
        }
        ,
        b.prototype.registerLoginCallback = function(a) {
            "function" == typeof a && (this.loginCallback = a)
        }
        ,
        b.prototype.registerLogoutCallback = function(a) {
            "function" == typeof a && (this.logoutCallback = a)
        }
        ,
        b.prototype.registerPaymentStateChangeCallback = function(a) {
            "function" == typeof a && (this.paymentStateChangeCallback = a)
        }
        ,
        b.prototype.on = function(a, b) {
            if (void 0 === this.registry[a])
                i.utils.debug(1, "Unsupported event: " + a);
            else {
                var c = this.registry[a];
                -1 === c.indexOf(b) ? c.push(b) : i.utils.debug(1, "Already registered for " + a)
            }
        }
        ,
        b.prototype.off = function(a, b) {
            if (void 0 === this.registry[a])
                i.utils.debug(1, "Unsupported event: " + a);
            else {
                var c = this.registry[a]
                  , d = c.indexOf(b);
                -1 === d ? i.utils.debug(1, "Not registered for " + a) : c.splice(d, 1)
            }
        }
        ;
        var B = function() {
            var a = arguments[0];
            if (!this.registry.hasOwnProperty(a))
                throw new Error("Unsupported event: " + a);
            for (var b = this.registry[a], c = Array.prototype.slice.call(arguments, 1, arguments.length), d = 0; d < b.length; d++)
                b[d].apply(null, c)
        };
        return {
            SpritzClient: b
        }
    }),
    i.namespace("SPRITZ.datastore"),
    i.addToNamespace(i.datastore, function() {
        function a(a) {
            this.prefix = void 0 === a ? "spritz." : a
        }
        a.prototype.bulkUpdate = function(a, f, g) {
            void 0 === f && (f = e);
            for (var h = 0, j = b.call(this, a), k = 0; k < localStorage.length; k++) {
                var l = localStorage.key(k);
                if (0 === l.indexOf(j)) {
                    var m = c(localStorage.getItem(l));
                    f(m) && (g(m),
                    localStorage.setItem(l, d(m)),
                    h++)
                }
            }
            return i.utils.debug(3, "StorageHandler: Bulk updated " + h + " item(s)"),
            h
        }
        ,
        a.prototype.count = function(a, d) {
            void 0 === d && (d = e);
            for (var f = b.call(this, a), g = 0, h = 0; h < localStorage.length; h++) {
                var i = localStorage.key(h);
                if (0 === i.indexOf(f)) {
                    d(c(localStorage.getItem(i))) && g++
                }
            }
            return g
        }
        ,
        a.prototype.get = function(a) {
            var d = localStorage.getItem(b.call(this, a));
            return null == d ? (i.utils.debug(2, "StorageHandler: Item [" + a + "] does not exist"),
            null) : c(d)
        }
        ,
        a.prototype.getDate = function(a) {
            var c = localStorage.getItem(b.call(this, a));
            return null === c || "" === c ? null : new Date(c)
        }
        ,
        a.prototype.getString = function(a) {
            return localStorage.getItem(b.call(this, a))
        }
        ,
        a.prototype.put = function(a, c) {
            localStorage.setItem(b.call(this, a), d(c))
        }
        ,
        a.prototype.putDate = function(a, c) {
            localStorage.setItem(b.call(this, a), null === c ? "" : c.toISOString())
        }
        ,
        a.prototype.putString = function(a, c) {
            localStorage.setItem(b.call(this, a), c)
        }
        ,
        a.prototype.delete = function(a) {
            var c, d = b.call(this, a);
            return null === localStorage.getItem(d) ? c = 0 : (localStorage.removeItem(d),
            c = 1),
            c
        }
        ,
        a.prototype.remove = function(a) {
            for (var c = 0, d = b.call(this, a), e = 0, f = localStorage.length; e < f; e += 1) {
                var g = localStorage.key(e);
                null != g && 0 == g.indexOf(d) && (localStorage.removeItem(g),
                c += 1)
            }
            return c
        }
        ,
        a.prototype.removeItem = function(a) {
            var c, d = b.call(this, a);
            return null === localStorage.getItem(d) ? c = 0 : (localStorage.removeItem(d),
            c = 1),
            c
        }
        ,
        a.prototype.select = function(a, d, f) {
            void 0 === d && (d = e),
            void 0 === f && (f = Number.MAX_VALUE);
            for (var g = 0, h = 0, j = [], k = b.call(this, a); g < localStorage.length && j.length < f; g++) {
                var l = localStorage.key(g);
                if (0 === l.indexOf(k)) {
                    h++;
                    var m = c(localStorage.getItem(l));
                    d(m) && j.push(m)
                }
            }
            return i.utils.debug(3, "StorageHandler: Select returning " + j.length + " item(s) after scanning " + g + " keys and inspecting " + h + " item(s)"),
            j
        }
        ;
        var b = function(a) {
            return this.prefix + a
        }
          , c = function(a) {
            try {
                return JSON.parse(a)
            } catch (b) {
                return i.utils.debug(2, "StorageHandler: Failed to parse item, exception [" + b.name + "] msg[" + b.message + "]"),
                i.utils.debug(2, "StorageHandler: Item is not JSON - returning the raw value: [" + a + "]"),
                a
            }
        }
          , d = function(a) {
            return JSON.stringify(a)
        }
          , e = function(a) {
            return !0
        };
        return {
            StorageHandler: a,
            composeKey: b
        }
    }),
    i.namespace("SPRITZ.display"),
    i.addToNamespace(i.display, function() {
        function a(a, b, c) {
            this.name = "dp" + Math.random(),
            j[this.name] = new h(a,b),
            this.client = c,
            this.telemetryHandler = new i.spritzinc.TelemetryHandler(c),
            this.storageHandler = this.telemetryHandler.storageHandler,
            this.onCompleteCallback = function(a, b) {
                this.telemetryHandler.stop(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()),
                "function" == typeof a && a(b)
            }
        }
        function b(a) {
            return null != j[this.name].getCurrentText() && (this.telemetryHandler.changeSpeed(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed(), a),
            j[this.name].isRunning() && this.telemetryHandler.start(j[this.name].getCurrentText(), a)),
            j[this.name].setCurrentTextSpeed(a),
            a
        }
        function c(a) {
            var b = a.getCurrentIndex();
            return b < a.size() - 1 && (b = a.getNextSentenceStart(b + 1, 1)),
            b
        }
        function d(a) {
            var b = a.getCurrentIndex();
            if (b > 0) {
                var c;
                a.hasNextWord() ? c = 2 : (b--,
                c = 1),
                b = a.getPreviousSentenceStart(b, c),
                "" == a.getWord(b).word && b < a.size() - 1 && (b += 1)
            }
            return b
        }
        function e(a) {
            var b = a.getCurrentIndex();
            return b > 0 && (a.getWord(b).isSentenceStart() && b--,
            b = a.getPreviousSentenceStart(b, 1),
            "" == a.getWord(b).word && b < a.size() - 1 && b++),
            b
        }
        function f() {
            var a = this.storageHandler.get("speedMinMax");
            return (void 0 === a || null === a || "number" != typeof a.min || a.min < 1 || "number" != typeof a.max) && (a = {
                min: k.MIN_SPEED,
                max: k.MAX_SPEED
            }),
            a
        }
        function g() {
            return null === this.client || !(this.client.isUserPremium() || this.client.anonymousEnabled)
        }
        var j = {}
          , k = i.constants.Constants;
        return a.prototype.reloadRedicle = function(a, b) {
            var c = j[this.name]
              , d = c.getCurrentText()
              , e = c.getOnCompleteCallback()
              , f = c.getCurrentTextSpeed()
              , g = c.getHighlightBestLetter()
              , i = c.getCurrentState()
              , k = c.isRunning();
            for (k && c.pauseText(); a.firstChild; )
                a.removeChild(a.firstChild);
            var l = new h(a,b);
            j[this.name] = l,
            l.setOnCompleteCallback(e),
            l.setCurrentTextSpeed(f),
            l.setHighlightBestLetter(g),
            k || l.setCurrentState(i),
            d && l.setCurrentText(d),
            k && l.resumeText(!1)
        }
        ,
        a.prototype.getCurrentText = function() {
            return j[this.name].getCurrentText()
        }
        ,
        a.prototype.setCurrentText = function(a) {
            j[this.name].getCurrentText() && this.telemetryHandler.stop(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()),
            j[this.name].setCurrentText(a),
            this.telemetryHandler.viewStart(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed())
        }
        ,
        a.prototype.getCurrentTextSpeed = function() {
            return j[this.name].getCurrentTextSpeed()
        }
        ,
        a.prototype.setCurrentTextSpeed = function(a) {
            if ("number" != typeof (a = parseInt(a)))
                return i.utils.debug(2, "setSpeed accepts only numbers, you passed in: ", a, typeof a),
                !1;
            if (a % 1 != 0 && (a = Math.round(a)),
            g.call(this)) {
                var c = f.call(this);
                if (a > c.max || a < c.min) {
                    var d = a > c.max ? "faster than maxUnregistered [" + c.max + "]" : "slower than minUnregistered [" + c.min + "]";
                    return i.utils.debug(0, "Attempt to set speed [" + a + "] " + d + " failed"),
                    !1
                }
                return b.call(this, a)
            }
            return a < 1 ? (i.utils.debug(0, "Attempt to set speed [" + a + "] slower than 1 failed"),
            !1) : b.call(this, a)
        }
        ,
        a.prototype.getCurrentPosition = function() {
            return null != this.getCurrentText() ? this.getCurrentText().getCurrentIndex() : -1
        }
        ,
        a.prototype.setCurrentPosition = function(a) {
            null != this.getCurrentText() && (j[this.name].isRunning() && this.telemetryHandler.pause(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()),
            j[this.name].setCurrentPosition(a))
        }
        ,
        a.prototype.getCurrentState = function() {
            return j[this.name].getCurrentState()
        }
        ,
        a.prototype.setCurrentState = function(a) {
            return j[this.name].setCurrentState(a)
        }
        ,
        a.prototype.getHighlightBestLetter = function() {
            return j[this.name].getHighlightBestLetter()
        }
        ,
        a.prototype.setHighlightBestLetter = function(a) {
            j[this.name].setHighlightBestLetter(a)
        }
        ,
        a.prototype.getSpeedMinMax = function() {
            return g.call(this) ? f.call(this) : {
                min: 1,
                max: 5e3
            }
        }
        ,
        a.prototype.getOnCompleteCallback = function() {
            return j[this.name].getOnCompleteCallback()
        }
        ,
        a.prototype.setOnCompleteCallback = function(a) {
            j[this.name].setOnCompleteCallback(this.onCompleteCallback.bind(this, a))
        }
        ,
        a.prototype.setRedicle = function(a) {
            j[this.name] = a
        }
        ,
        a.prototype.displayCurrentWord = function() {
            j[this.name].displayCurrentWord()
        }
        ,
        a.prototype.displayPlaceholderText = function(a, b) {
            j[this.name].displayPlaceholderText(a, b)
        }
        ,
        a.prototype.displayText = function(a, b, c) {
            j[this.name].getCurrentText() && this.telemetryHandler.stop(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()),
            j[this.name].displayText(a, this.onCompleteCallback.bind(this, b), c),
            this.telemetryHandler.viewStart(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()),
            this.telemetryHandler.start(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed())
        }
        ,
        a.prototype.displayWord = function(a, b, c) {
            return j[this.name].displayWord(a, b, c)
        }
        ,
        a.prototype.eraseWord = function() {
            return j[this.name].eraseWord()
        }
        ,
        a.prototype.displayProgress = function(a) {
            j[this.name].displayProgress(a)
        }
        ,
        a.prototype.setProgressInfo = function(a) {
            j[this.name].setProgressInfo(a)
        }
        ,
        a.prototype.goToEnd = function() {
            var a = this.getCurrentText();
            if (a) {
                j[this.name].pauseText(),
                this.telemetryHandler.end(this.getCurrentText(), j[this.name].getCurrentTextSpeed()),
                a.setCurrentIndex(a.size() - 1),
                j[this.name].reset();
                var b = j[this.name].getOnCompleteCallback();
                b && this.onCompleteCallback(b)
            } else
                i.utils.debug(2, "SpritzDisplayProxy: no text loaded")
        }
        ,
        a.prototype.goToFirstWord = function() {
            this.getCurrentText() && (j[this.name].pauseText(),
            this.telemetryHandler.rewind(this.getCurrentText(), j[this.name].getCurrentTextSpeed()),
            this.getCurrentText().reset(),
            j[this.name].reset())
        }
        ,
        a.prototype.goToPreviousSentence = function() {
            this.getCurrentText() && (j[this.name].pauseText(),
            this.telemetryHandler.backup(this.getCurrentText(), j[this.name].getCurrentTextSpeed()),
            this.getCurrentText().setCurrentIndex(d(this.getCurrentText())),
            j[this.name].reset())
        }
        ,
        a.prototype.goBackwardOneWord = function(a) {
            if (this.getCurrentText()) {
                if (j[this.name].pauseText(),
                this.telemetryHandler.pause(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()),
                this.getCurrentText().setCurrentIndex(this.getCurrentText().getCurrentIndex() - 1),
                void 0 !== a && !0 === a)
                    for (; "" === this.getCurrentText().getCurrentWord().word && this.getCurrentText().hasPreviousWord(); )
                        this.getCurrentText().setCurrentIndex(this.getCurrentText().getCurrentIndex() - 1);
                this.telemetryHandler.backwardOneWord(this.getCurrentText(), j[this.name].getCurrentTextSpeed()),
                this.telemetryHandler.start(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()),
                j[this.name].reset()
            }
        }
        ,
        a.prototype.goForwardOneWord = function(a) {
            if (this.getCurrentText()) {
                if (j[this.name].pauseText(),
                this.getCurrentText().setCurrentIndex(this.getCurrentText().getCurrentIndex() + 1),
                void 0 !== a && !0 === a)
                    for (; "" === this.getCurrentText().getCurrentWord().word && this.getCurrentText().hasNextWord(); )
                        this.getCurrentText().setCurrentIndex(this.getCurrentText().getCurrentIndex() + 1);
                if (this.telemetryHandler.forwardOneWord(this.getCurrentText(), j[this.name].getCurrentTextSpeed()),
                j[this.name].reset(),
                !this.getCurrentText().hasNextWord()) {
                    var b = j[this.name].getOnCompleteCallback();
                    b && this.onCompleteCallback(b)
                }
            }
        }
        ,
        a.prototype.goToSentenceStart = function() {
            this.getCurrentText() && (j[this.name].pauseText(),
            this.telemetryHandler.backup(this.getCurrentText(), j[this.name].getCurrentTextSpeed()),
            this.getCurrentText().setCurrentIndex(e(this.getCurrentText())),
            j[this.name].reset())
        }
        ,
        a.prototype.goToNextSentence = function() {
            var a = this.getCurrentText();
            if (a) {
                j[this.name].pauseText(),
                this.telemetryHandler.forward(a, j[this.name].getCurrentTextSpeed());
                if (a.setCurrentIndex(c(a)) || a.setCurrentIndex(a.size() - 1),
                j[this.name].reset(),
                !a.hasNextWord()) {
                    var b = j[this.name].getOnCompleteCallback();
                    b && this.onCompleteCallback(b)
                }
            }
        }
        ,
        a.prototype.isCompleted = function() {
            return j[this.name].isCompleted()
        }
        ,
        a.prototype.isDisplayingWord = function() {
            return j[this.name].isDisplayingWord()
        }
        ,
        a.prototype.isPaused = function() {
            return j[this.name].isPaused()
        }
        ,
        a.prototype.isReady = function() {
            return j[this.name].isReady()
        }
        ,
        a.prototype.isRunning = function() {
            return j[this.name].isRunning()
        }
        ,
        a.prototype.pauseText = function() {
            j[this.name].isRunning() && this.telemetryHandler.pause(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()),
            j[this.name].pauseText()
        }
        ,
        a.prototype.resetDisplay = function() {
            j[this.name].reset()
        }
        ,
        a.prototype.resetText = function() {
            null != j[this.name].getCurrentText() && (j[this.name].pauseText(),
            this.telemetryHandler.stop(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()),
            j[this.name].resetText())
        }
        ,
        a.prototype.resetUser = function() {
            this.pauseText(),
            this.telemetryHandler.resetUser()
        }
        ,
        a.prototype.resumeText = function(a) {
            (j[this.name].isReady() || j[this.name].isPaused()) && this.telemetryHandler.start(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()),
            j[this.name].resumeText(a)
        }
        ,
        a.prototype.startFastBackward = function(a) {
            j[this.name].getCurrentText() && (j[this.name].pauseText(),
            this.telemetryHandler.pause(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()),
            j[this.name].fastBackwardText(this.onCompleteCallback.bind(this, a)),
            this.telemetryHandler.fastBackwardText(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()),
            this.telemetryHandler.start(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()))
        }
        ,
        a.prototype.startFastForward = function(a) {
            j[this.name].getCurrentText() && (j[this.name].pauseText(),
            this.telemetryHandler.pause(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()),
            j[this.name].fastForwardText(this.onCompleteCallback.bind(this, a)),
            this.telemetryHandler.fastForwardText(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()),
            this.telemetryHandler.start(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()))
        }
        ,
        a.prototype.stopFastBackward = function() {
            j[this.name].getCurrentText() && (j[this.name].pauseText(),
            this.telemetryHandler.pause(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()),
            this.telemetryHandler.start(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()))
        }
        ,
        a.prototype.stopFastForward = function() {
            j[this.name].getCurrentText() && (j[this.name].pauseText(),
            this.telemetryHandler.pause(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()),
            this.telemetryHandler.start(j[this.name].getCurrentText(), j[this.name].getCurrentTextSpeed()))
        }
        ,
        a.prototype.seek = function(a, b) {
            var c, d = this.getCurrentText();
            return d ? d.seek(a, b) ? (j[this.name].pauseText(),
            this.telemetryHandler.seek(this.getCurrentText(), j[this.name].getCurrentTextSpeed()),
            j[this.name].reset(),
            c = !0) : (i.utils.debug(2, name + "SpritzText.seek() failed"),
            c = !1) : (i.utils.debug(2, name + "Cannot seek because text is null"),
            c = !1),
            c
        }
        ,
        a.prototype.setProgress = function(a) {
            j[this.name].setProgress(a)
        }
        ,
        a.prototype.getPreviousSentenceStart = function() {
            return e(this.getCurrentText())
        }
        ,
        a.prototype.issueManualModeStart = function() {
            this.telemetryHandler.manualStart(this.getCurrentText(), j[this.name].getCurrentTextSpeed()),
            j[this.name].getCurrentText() && this.telemetryHandler.start(this.getCurrentText(), j[this.name].getCurrentTextSpeed())
        }
        ,
        a.prototype.issueManualModeStop = function() {
            j[this.name].getCurrentText() && this.telemetryHandler.pause(this.getCurrentText(), j[this.name].getCurrentTextSpeed()),
            this.telemetryHandler.manualStop(this.getCurrentText(), j[this.name].getCurrentTextSpeed())
        }
        ,
        {
            SpritzDisplayProxy: a
        }
    }),
    i.namespace("SPRITZ.spritzinc"),
    i.addToNamespace(i.spritzinc, function() {
        function a(a) {
            this.batchDelay = v.BATCH_DELAY,
            this.client = a,
            this.contentVersionId = null,
            this.eventId = 0,
            this.inactivityTimeout = null,
            this.items = [],
            this.sessionId = g(),
            this.started = !1,
            this.startTime = (new Date).getTime(),
            this.storageHandler = new i.datastore.StorageHandler,
            this.viewingSessionId = null,
            this.updateTime = this.startTime,
            this.userId = null,
            this.userAgent = navigator.userAgent,
            this.userType = null,
            k.call(this),
            t.call(this, this.startTime)
        }
        function b() {
            null !== this.inactivityTimeout && (clearTimeout(this.inactivityTimeout),
            this.inactivityTimeout = null)
        }
        function c(a, b) {
            return a.user > b.user ? 1 : a.user < b.user ? -1 : a.sessionId > b.sessionId ? 1 : a.sessionId < b.sessionId ? -1 : a.data.contentVersionId > b.data.contentVersionId ? 1 : a.data.contentVersionId < b.data.contentVersionId ? -1 : a.id > b.id ? 1 : a.id < b.id ? -1 : a.time > b.time ? 1 : a.time < b.time ? -1 : 0
        }
        function d(a, b, c) {
            return v.TELEMETRY_KEY + "." + a + "." + b + "." + c
        }
        function e(a) {
            return (new Date).getTime() - a
        }
        function f(a) {
            for (var b = this.storageHandler.select(v.TELEMETRY_KEY).sort(c), d = b.length - 1; d >= 0; d--) {
                var e = b[d];
                ("Date" == typeof e.time ? e.time : new Date(e.time)).getTime() >= a && b.splice(d, 1)
            }
            return b
        }
        function g() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                var b = 16 * Math.random() | 0;
                return ("x" === a ? b : 3 & b | 8).toString(16)
            })
        }
        function h(a) {
            return void 0 === a ? new Date : a
        }
        function k() {
            this.userType = null,
            null !== this.client && (this.userId = this.client.getUserId(),
            null !== this.userId ? this.userType = "u" : (this.userId = this.client.getGuestId(),
            null !== this.userId && (this.userType = "g")))
        }
        function l() {
            b.call(this),
            r.call(this, this.items),
            this.items = [],
            this.startTime = (new Date).getTime()
        }
        function m() {
            i.utils.debug(3, "Processing inactivity timeout with [" + this.items.length + "] item(s)"),
            this.items.length > 0 && l.call(this)
        }
        function n(a) {
            for (var b = 0, c = a.length; b < c; b += 1) {
                var f = a[b];
                e(new Date(f.time).getTime()) > v.HOLDING_PERIOD && 0 === this.storageHandler.remove(d(f.sessionId, f.data.contentVersionId, f.id)) && i.utils.debug(2, "Failed to remove item [" + f + "]")
            }
        }
        function o(a, b) {
            i.utils.debug(2, "Failed to send batch [" + b.message + "]"),
            n.call(this, a.clientEvents)
        }
        function p(a, b) {
            var c = a.clientEvents[0].sessionId
              , e = a.clientEvents[0].data.contentVersionId;
            b.length < a.clientEvents.length && i.utils.debug(2, "Failed to process [" + (a.clientEvents.length - b.length) + "] item(s)");
            for (var f = 0, g = b.length; f < g; f += 1)
                0 === this.storageHandler.remove(d(c, e, b[f])) && i.utils.debug(2, "Failed to remove item [" + b[f] + "]")
        }
        function q() {
            this.inactivityTimeout = setTimeout(j.createDelegate(this, m), v.BATCH_TIMEOUT)
        }
        function r(a) {
            var b = new i.model.TelemetryBatch(this.userAgent,a);
            this.client.sendTelemetry(b, j.createDelegate(this, p), j.createDelegate(this, o))
        }
        function s(a) {
            var b = a[0];
            b[0].user === this.getUserId() ? r.call(this, b) : n.call(this, b),
            a.length > 1 && (a.splice(0, 1),
            this.batchDelay > 0 ? setTimeout(j.createDelegate(this, function() {
                s.call(this, a)
            }), this.batchDelay) : s.call(this, a))
        }
        function t(a) {
            for (var b = "", c = "", d = "", e = f.call(this, a), g = [], h = [], i = 0, j = e.length; i < j; i += 1) {
                var k = e[i];
                (k.user !== b || k.sessionId !== c || k.data.contentVersionId !== d || h.length >= v.BATCH_SIZE) && (h.length > 0 && (g.push(h),
                h = []),
                b = k.user,
                c = k.sessionId,
                d = k.data.contentVersionId),
                h.push(k)
            }
            h.length > 0 && g.push(h),
            g.length > 0 && s.call(this, g)
        }
        var u = Object.freeze({
            VIEW_START: "SpritzViewStart",
            START: "SpritzStart",
            STOP: "SpritzStop",
            PAUSE: "SpritzPause",
            BACKUP: "SpritzBackup",
            FORWARD: "SpritzForward",
            REWIND: "SpritzRewind",
            SEEK: "SpritzSeek",
            SPEED: "SpritzSpeed",
            GOTOEND: "SpritzEnd",
            BACKWARD_ONE: "SpritzBackwardOne",
            FORWARD_ONE: "SpritzForwardOne",
            FAST_BACKWARD: "SpritzFastBackward",
            FAST_FORWARD: "SpritzFastForward",
            MANUAL_START: "SpritzManualStart",
            MANUAL_STOP: "SpritzManualStop"
        })
          , v = Object.freeze({
            ANONYMOUS: "anonymous",
            TELEMETRY_KEY: "telemetry",
            BATCH_SIZE: 50,
            BATCH_TIMEOUT: 6e4,
            BATCH_DELAY: 1e4,
            HOLDING_PERIOD: 6048e5
        });
        return a.prototype.backup = function(a, b) {
            this.checkPreviousContent(a),
            this.storeEvent(u.BACKUP, a, b),
            this.started = !0
        }
        ,
        a.prototype.backwardOneWord = function(a, b) {
            this.checkPreviousContent(a),
            this.storeEvent(u.BACKWARD_ONE, a, b),
            this.started = !0
        }
        ,
        a.prototype.changeSpeed = function(a, b, c) {
            this.checkPreviousContent(a),
            this.storeEvent(u.SPEED, a, b, void 0, void 0, {
                newSpeed: c
            }),
            this.started = !0
        }
        ,
        a.prototype.checkPreviousContent = function(a) {
            this.items.length > 0 && (null !== this.contentVersionId && this.contentVersionId !== a.getContentVersionId() || e(this.startTime) >= v.BATCH_TIMEOUT) && l.call(this)
        }
        ,
        a.prototype.end = function(a, b) {
            this.checkPreviousContent(a),
            this.storeEvent(u.GOTOEND, a, b),
            this.started = !0
        }
        ,
        a.prototype.forward = function(a, b) {
            this.checkPreviousContent(a),
            this.storeEvent(u.FORWARD, a, b),
            this.started = !0
        }
        ,
        a.prototype.forwardOneWord = function(a, b) {
            this.checkPreviousContent(a),
            this.storeEvent(u.FORWARD_ONE, a, b),
            this.started = !0
        }
        ,
        a.prototype.getUserId = function() {
            return null === this.userId && k.call(this),
            this.userId
        }
        ,
        a.prototype.manualStart = function(a, b) {
            this.checkPreviousContent(a),
            this.storeEvent(u.MANUAL_START, a, b),
            this.started = !0
        }
        ,
        a.prototype.manualStop = function(a, b) {
            this.checkPreviousContent(a),
            this.storeEvent(u.MANUAL_STOP, a, b),
            this.started = !0
        }
        ,
        a.prototype.pause = function(a, b) {
            this.checkPreviousContent(a),
            this.storeEvent(u.PAUSE, a, b),
            this.started = !0
        }
        ,
        a.prototype.resetUser = function() {
            this.items.length > 0 && l.call(this),
            this.userId = null,
            this.userType = null
        }
        ,
        a.prototype.fastBackwardText = function(a, b) {
            this.checkPreviousContent(a),
            this.storeEvent(u.FAST_BACKWARD, a, b),
            this.started = !0
        }
        ,
        a.prototype.fastForwardText = function(a, b) {
            this.checkPreviousContent(a),
            this.storeEvent(u.FAST_FORWARD, a, b),
            this.started = !0
        }
        ,
        a.prototype.rewind = function(a, b) {
            this.checkPreviousContent(a),
            this.storeEvent(u.REWIND, a, b),
            this.started = !0
        }
        ,
        a.prototype.seek = function(a, b) {
            this.checkPreviousContent(a),
            this.storeEvent(u.SEEK, a, b),
            this.started = !0
        }
        ,
        a.prototype.start = function(a, b) {
            this.checkPreviousContent(a),
            this.storeEvent(u.START, a, b),
            this.started = !0
        }
        ,
        a.prototype.stop = function(a, b) {
            this.started && (this.storeEvent(u.STOP, a, b, void 0, a.hasNextWord()),
            this.started = !1),
            this.items.length > 0 && l.call(this)
        }
        ,
        a.prototype.storeEvent = function(a, c, e, f, g, j) {
            if (null !== this.getUserId() && null !== this.client) {
                b.call(this),
                this.eventId += 1;
                var k;
                k = null === c ? -2 : c.hasNextWord() ? c.getCurrentWord().position : -1;
                var m = d(this.sessionId, this.contentVersionId, this.eventId)
                  , n = new i.model.TelemetryItem(this.eventId,this.getUserId(),this.userType,this.sessionId,this.viewingSessionId,this.contentVersionId,h(f),a,k,e,g,j);
                try {
                    this.storageHandler.put(m, n)
                } catch (a) {
                    i.utils.debug(3, "Error writing event to localStorage: ", a)
                }
                this.items.push(n),
                i.utils.debug(3, "Added item: " + JSON.stringify(n)),
                this.updateTime = (new Date).getTime(),
                this.items.length >= v.BATCH_SIZE && l.call(this),
                q.call(this)
            }
        }
        ,
        a.prototype.viewStart = function(a, b) {
            this.checkPreviousContent(a),
            this.viewingSessionId = g(),
            this.contentVersionId = a.getContentVersionId(),
            this.items = [];
            var c = new Date;
            this.startTime = c.getTime(),
            this.storeEvent(u.VIEW_START, a, b, c),
            this.started = !0
        }
        ,
        {
            TelemetryHandler: a,
            batchTimeout: v.BATCH_TIMEOUT,
            batchSize: v.BATCH_SIZE,
            holdingPeriod: v.HOLDING_PERIOD,
            EventTypeEnum: u,
            submitPendingItems: t,
            sendBatchSuccess: p,
            sendBatchFailure: o
        }
    }),
    i.namespace("SPRITZ.template"),
    i.addToNamespace(i.template, function() {
        function a(a) {
            var b = a
              , c = b.match(/{{\s*[\w\.]+\s*}}/g);
            return null === c || c.map(function(a) {
                var c = a.match(/[\w\.]+/)[0];
                f[c] || i.utils.debug(1, "Can't find constant: ", f[c]),
                b = b.replace(new RegExp(a,"g"), f[c])
            }),
            b
        }
        function b(b) {
            var c = "";
            return c += d(b),
            c += a('<div class="{{LOADING_OVERLAY}}"></div>'),
            c += '<div class="spritzer-preloaded spritzer-btn-pause"></div>'
        }
        function c(b) {
            var c = "";
            return c += '<div class="spritzer-controls-container">',
            c += a('<div class="{{SPEED_CONTAINER}}" data-role="' + g[b.speedSelector] + '"></div>'),
            c += e(b),
            c += '<div class="spritzer-force-font" style="font-family:SpritzMedienMedium">.</div>',
            c += "</div>"
        }
        function d(b) {
            var c = '<div class="spritzer-header">';
            return c += '<a class="spritzer-logo" href="http://www.spritzinc.com" target="_blank"></a>',
            b.header.login && (c += a('<a class="{{BTN_LOGIN}} {{LOGGEDIN}}">Login</a>'),
            c += a('<div class="{{USER}}"></div>')),
            b.header.close && (c += '<span class="spritzer-close">&#215</span>'),
            c += "</div>"
        }
        function e(a) {
            var b = "";
            b += '<div class="spritzer-preload spritzer-btn-pause">a</div>',
            b += '<div class="spritzer-button-container spritzer-btns-' + a.controlButtons.length + '">';
            for (var c = 0, d = a.controlButtons.length; c < d; c += 1) {
                var e = a.controlButtons[c];
                b += '<div class="spritzer-control-' + e + '" title="' + a.controlTitles[e] + '"></div>'
            }
            return b += "</div>"
        }
        var f = i.constants.CSSClasses
          , g = (i.constants.Constants,
        {
            DropDown: "select",
            Slider: "slider"
        });
        return {
            SPEED_CONTROL_TYPE_MAP: g,
            buildHtml1: b,
            buildHtml2: c,
            interpolate: a
        }
    }),
    i.namespace("SPRITZ.spritzinc"),
    i.addToNamespace(i.spritzinc, function() {
        function a(a, i) {
            this.container = a,
            this.options = i,
            this.wheel = C.createCanvas([B.WHEEL_CONTROL, B.NON_SELECTABLE], i.width, i.height),
            this.wheel.style.cursor = "pointer",
            this.container.appendChild(this.wheel),
            this._animateScroll = d.bind(this),
            this._animateStep = c.bind(this),
            this._drawBackgroundLandscape = e.bind(this),
            this._drawBackgroundPortrait = f.bind(this),
            this._drawBackgroundLandscape = e.bind(this),
            this._drawRungsLandscape = g.bind(this),
            this._drawRungsPortrait = h.bind(this),
            this._fireDragEnd = j.bind(this),
            this._getStepSize = k.bind(this),
            this._handlePositionChange = l.bind(this),
            this._nearestValidValue = m.bind(this),
            this._redraw = u.bind(this),
            this._valueChanged = A.bind(this),
            this._onMouseDown = n.bind(this),
            this._onMouseMove = o.bind(this),
            this._onMouseOut = p.bind(this),
            this._onMouseUp = q.bind(this),
            this._onTouchEnd = r.bind(this),
            this._onTouchMove = s.bind(this),
            this._onTouchStart = t.bind(this),
            this._registerMouseEvents = v.bind(this),
            this._registerTouchEvents = x.bind(this),
            this._unregisterMouseEvents = y.bind(this),
            this._unregisterTouchEvents = z.bind(this),
            b.call(this, i),
            w.call(this)
        }
        function b(a) {
            this.lastX = 0,
            this.lastDx = 0,
            this.downTime = 0,
            this.range = a.range,
            this.context = this.wheel.getContext("2d"),
            this.layout = a.layout,
            this.width = a.width,
            this.height = a.height,
            this.count = a.count,
            this.sensitivity = a.sensitivity,
            this.stepValue = a.step,
            this.stepDistance = this.width / this.sensitivity;
            var b;
            this.layout === D ? (b = this.width * a.diameter,
            this.radius = b / 2,
            this.alpha = 2 * Math.asin(this.width / b) / (this.count + 1)) : (b = this.height * a.diameter,
            this.radius = b / 2,
            this.alpha = 2 * Math.asin(this.height / b) / (this.count + 1)),
            this.value = Math.round((this.range.min + this.range.max) / 2),
            this._redraw(0)
        }
        function c(a, b) {
            var c = Math.round(this.width / this.count)
              , d = 100 / c;
            this._animateScroll(a, b, c, 0, this.lastDx, d)
        }
        function d(a, b, c, d, e, f) {
            if (c > 0) {
                d += b,
                this._redraw(d + e);
                var g = this;
                setTimeout(function() {
                    g._animateScroll(a, b, c - 1, d, e, f)
                }, f)
            } else
                this.setValue(a)
        }
        function e() {
            var a = this.context.createLinearGradient(0, 0, this.width / 2, 0);
            a.addColorStop(0, G),
            a.addColorStop(1, F),
            this.context.fillStyle = a,
            this.context.fillRect(0, 0, this.width / 2, this.height),
            a = this.context.createLinearGradient(this.width / 2, 0, this.width, 0),
            a.addColorStop(0, F),
            a.addColorStop(1, G),
            this.context.fillStyle = a,
            this.context.fillRect(this.width / 2, 0, this.width, this.height)
        }
        function f() {}
        function g(a) {
            if (a > this.radius)
                for (; a > this.radius; )
                    a -= this.radius;
            else if (a < -this.radius)
                for (; a < -this.radius; )
                    a += this.radius;
            for (var b = Math.asin(a / this.radius), c = b % this.alpha, d = this.count + 2, e = 0; e < d; e++) {
                var f = Math.PI / 2 - this.alpha * (e - (this.count + 1) / 2) - c
                  , g = this.width / 2 + this.radius * Math.cos(f);
                g > 0 && g < this.width && (this.context.beginPath(),
                this.context.moveTo(g, 0),
                this.context.lineTo(g, this.height),
                this.context.strokeStyle = "black",
                this.context.stroke())
            }
            this.lastDx = a
        }
        function h() {}
        function j() {
            var a = {
                value: this.value
            };
            C.dispatchEvent(this.container, "wheelDragDone", a)
        }
        function k(a) {
            for (var b, c = 0; c < this.options.steps.length && (b = this.options.steps[c].step,
            this.options.steps[c].speed && !(a < this.options.steps[c].speed)); c++)
                ;
            return b
        }
        function l(a, b) {
            var c = a - this.lastX;
            if (0 !== c && Math.abs(c) >= this.stepDistance) {
                var d = b - this.lastTime
                  , e = Math.abs(1e3 * c / d)
                  , f = this._getStepSize(e)
                  , g = this.getValue() + f * Math.round(c / this.stepDistance);
                if (f > 1) {
                    var h = g % f;
                    h > 0 && (g -= h,
                    c < 0 && (g += f))
                }
                g > this.range.max ? this.getValue() < this.range.max && (this._valueChanged(this.range.max, E),
                this._redraw(a - this.downX)) : g < this.range.min ? this.getValue() > this.range.min && (this._valueChanged(this.range.min, E),
                this._redraw(a - this.downX)) : (this._valueChanged(g, E),
                this._redraw(a - this.downX)),
                this.lastX = a,
                this.lastTime = b
            }
        }
        function m(a) {
            var b, c, d;
            return a = Math.min(this.range.max, a),
            a = Math.max(this.range.min, a),
            this.options.allowedValues ? (b = null,
            $.each(this.options.allowedValues, function() {
                (null === b || Math.abs(this - a) < Math.abs(b - a)) && (b = this)
            })) : this.options.step ? (c = (this.range.max - this.range.min) / this.options.step,
            d = Math.floor((a - this.range.min) / this.options.step),
            (a - this.range.min) % this.options.step > this.options.step / 2 && d < c && (d += 1),
            b = d * this.options.step + this.range.min) : b = a,
            b
        }
        function n(a) {
            a.stopPropagation(),
            a.preventDefault(),
            a.cancelBubble = !0,
            this.downX = a.screenX,
            this.downTime = a.timeStamp,
            this.lastX = this.downX,
            this.lastTime = this.downTime,
            this.wheel.style.cursor = "ew-resize",
            this._registerMouseEvents()
        }
        function o(a) {
            a.stopPropagation(),
            a.preventDefault(),
            a.cancelBubble = !0,
            this._handlePositionChange(a.screenX, a.timeStamp)
        }
        function p(a) {
            a.stopPropagation(),
            this.wheel.style.cursor = "pointer",
            this._unregisterMouseEvents(),
            this._fireDragEnd()
        }
        function q(a) {
            a.stopPropagation(),
            a.preventDefault(),
            a.cancelBubble = !0,
            this.wheel.style.cursor = "pointer",
            this._unregisterMouseEvents(),
            this._fireDragEnd()
        }
        function r(a) {
            a.stopPropagation(),
            a.preventDefault(),
            a.cancelBubble = !0,
            this._unregisterTouchEvents(),
            this._fireDragEnd()
        }
        function s(a) {
            a.stopPropagation(),
            a.preventDefault(),
            a.cancelBubble = !0,
            this._handlePositionChange(a.touches[0].screenX, a.timeStamp)
        }
        function t(a) {
            a.stopPropagation(),
            a.preventDefault(),
            a.cancelBubble = !0,
            this.downX = a.touches[0].screenX,
            this.downTime = a.timeStamp,
            this.lastX = this.downX,
            this.lastTime = this.downTime,
            this._registerTouchEvents()
        }
        function u(a) {
            var b = this;
            this.layout === D ? requestAnimationFrame(function() {
                b._drawBackgroundLandscape(),
                b._drawRungsLandscape(a)
            }) : requestAnimationFrame(function() {
                b._drawBackgroundPortrait(),
                b._drawRungsPortrait(a)
            })
        }
        function v() {
            this.wheel.addEventListener("mousemove", this._onMouseMove),
            this.wheel.addEventListener("mouseout", this._onMouseOut),
            this.wheel.addEventListener("mouseup", this._onMouseUp)
        }
        function w() {
            this.wheel.addEventListener("mousedown", this._onMouseDown),
            this.wheel.addEventListener("touchstart", this._onTouchStart)
        }
        function x() {
            this.wheel.addEventListener("touchend", this._onTouchEnd),
            this.wheel.addEventListener("touchmove", this._onTouchMove)
        }
        function y() {
            this.wheel.removeEventListener("mousemove", this._onMouseMove),
            this.wheel.removeEventListener("mouseout", this._onMouseOut),
            this.wheel.removeEventListener("mouseup", this._onMouseUp)
        }
        function z() {
            this.wheel.removeEventListener("touchend", this._onTouchEnd),
            this.wheel.removeEventListener("touchmove", this._onTouchMove)
        }
        function A(a, b) {
            var c;
            if (a === this.value)
                c = void 0;
            else {
                this.value = a;
                var d = {
                    value: a,
                    trigger: b,
                    el: this.wheel
                };
                c = C.dispatchEvent(this.container, "wheelValueChange", d)
            }
            return c
        }
        var B = i.constants.CSSClasses
          , C = i.helper
          , D = "landscape"
          , E = "domDrag"
          , F = "#EEEEEE"
          , G = "#666666";
        return a.prototype.decrement = function() {
            var a;
            return this.options.step && this.value > this.range.min ? (this._animateStep(this.value - this.stepValue, -1),
            a = !0) : a = !1,
            a
        }
        ,
        a.prototype.increment = function() {
            var a;
            return this.options.step && this.value < this.range.max ? (this._animateStep(this.value + this.stepValue, 1),
            a = !0) : a = !1,
            a
        }
        ,
        a.prototype.restrict = function() {}
        ,
        a.prototype.setRange = function(a) {
            this.range = a
        }
        ,
        a.prototype.getValue = function() {
            return this.value
        }
        ,
        a.prototype.setValue = function(a) {
            return a = this._nearestValidValue(a),
            this._valueChanged(a, "setValue")
        }
        ,
        a.prototype.updateLayout = function() {}
        ,
        {
            WheelControl: a
        }
    }),
    i.namespace("SPRITZ.spritzinc"),
    i.addToNamespace(i.spritzinc, function() {
        function a(a, b) {
            this.container = a,
            this.options = b,
            this._pendingHideAlert = null,
            this._fireSpeedChange = c.bind(this),
            this._hideAlert = e.bind(this),
            this._onDecButtonDown = f.bind(this),
            this._onDecButtonTouch = g.bind(this),
            this._onIncButtonDown = h.bind(this),
            this._onIncButtonTouch = j.bind(this),
            this._onWheelDragDone = k.bind(this),
            this._onWheelValueChange = l.bind(this),
            this.decButton = n.createDiv([m.SPEED_DEC_BTN, m.NON_SELECTABLE]),
            this.decButton.textContent = "-",
            this.container.appendChild(this.decButton),
            this.wheelContainer = n.createDiv([m.SPEED_WHEEL]),
            this.container.appendChild(this.wheelContainer),
            this.incButton = n.createDiv([m.SPEED_INC_BTN, m.NON_SELECTABLE]),
            this.incButton.textContent = "+",
            this.container.appendChild(this.incButton),
            this.speedLabel = n.createDiv([m.SPEED_LABEL, m.NON_SELECTABLE]),
            this.container.appendChild(this.speedLabel),
            this.speedAlert = n.createDiv([m.SPEED_ALERT]),
            this.container.appendChild(this.speedAlert);
            var o, p = b.wheel.width ? b.wheel.width : 80 * b.redicleWidth / 340;
            if (b.wheel.steps && b.wheel.steps.length > 0)
                o = b.wheel.steps;
            else {
                o = [{
                    step: b.speedStep ? b.speedStep : 1
                }]
            }
            this.wheelCtrl = new i.spritzinc.WheelControl(this.wheelContainer,{
                range: b.wheel.range ? b.wheel.range : d(b),
                layout: b.wheel.layout ? b.wheel.layout : "landscape",
                width: p,
                height: b.wheel.height ? b.wheel.height : 20 * b.redicleHeight / 70,
                diameter: b.wheel.diameter ? b.wheel.diameter : 1.05,
                count: b.wheel.count ? b.wheel.count : Math.round(p / 8),
                sensitivity: b.wheel.sensitivity ? b.wheel.sensitivity : Math.round(p / 2),
                steps: o,
                allowedValues: b.allowedValues
            }),
            this.setSpeed(b.defaultSpeed),
            this.decButton.addEventListener("mousedown", this._onDecButtonDown),
            this.decButton.addEventListener("touchstart", this._onDecButtonTouch),
            this.incButton.addEventListener("mousedown", this._onIncButtonDown),
            this.incButton.addEventListener("touchstart", this._onIncButtonTouch),
            this.wheelContainer.addEventListener("wheelValueChange", this._onWheelValueChange),
            this.wheelContainer.addEventListener("wheelDragDone", this._onWheelDragDone)
        }
        function c(a) {
            var c = n.dispatchEvent(this.container, "speedChange", {
                speed: a,
                vetoed: !1,
                vetoMessage: null,
                alternateValue: null
            });
            return c.detail.vetoed ? (null !== this._pendingHideAlert && (b.clearTimeout(this._pendingHideAlert),
            this._pendingHideAlert = null),
            this.speedAlert.style.display = "block",
            this.speedAlert.textContent = c.detail.vetoMessage ? c.detail.vetoMessage : "Invalid speed: " + a,
            this._pendingHideAlert = b.setTimeout(this._hideAlert, 1e3),
            null !== c.detail.alternateValue && this.wheelCtrl.setValue(c.detail.alternateValue)) : (null !== this._pendingHideAlert && (b.clearTimeout(this._pendingHideAlert),
            this._pendingHideAlert = null),
            this.speedAlert.style.display = "none"),
            c
        }
        function d(a) {
            var b = a.speedItems.sort(function(a, b) {
                return a - b
            });
            return {
                min: b[0],
                max: b[b.length - 1]
            }
        }
        function e() {
            this.speedAlert.style.display = "none"
        }
        function f(a) {
            a.stopPropagation(),
            this.wheelCtrl.decrement()
        }
        function g(a) {
            a.stopPropagation(),
            a.preventDefault(),
            this.wheelCtrl.decrement()
        }
        function h(a) {
            a.stopPropagation(),
            this.wheelCtrl.increment()
        }
        function j(a) {
            a.stopPropagation(),
            a.preventDefault(),
            this.wheelCtrl.increment()
        }
        function k(a) {
            this._fireSpeedChange(a.detail.value)
        }
        function l(a) {
            this.speedLabel.textContent = a.detail.value.toString() + " wpm",
            "domDrag" !== a.detail.trigger && this._fireSpeedChange(a.detail.value)
        }
        var m = i.constants.CSSClasses
          , n = i.helper;
        return a.prototype.restrict = function() {}
        ,
        a.prototype.getSpeed = function() {
            return this.wheelCtrl.value
        }
        ,
        a.prototype.setSpeed = function(a) {
            this.wheelCtrl.setValue(a),
            this.speedLabel.textContent = a.toString() + " wpm"
        }
        ,
        a.prototype.setSpeedRange = function(a) {
            this.wheelCtrl.setRange(a)
        }
        ,
        a.prototype.onAttach = function() {
            this.wheelCtrl.updateLayout()
        }
        ,
        a.prototype.onDetach = function() {}
        ,
        a.prototype.onVisibilityChange = function(a) {
            a && this.wheelCtrl.updateLayout()
        }
        ,
        a.prototype.unrestrict = function() {}
        ,
        {
            WheelSpeedSelector: a
        }
    }),
    i.namespace("SPRITZ.spritzinc"),
    i.addToNamespace(i.spritzinc, function() {
        function a(a, c) {
            this.spritzerController = a,
            this.spritzerParentContainer = a.parentContainer,
            this.touchPad = c,
            b.call(this)
        }
        function b() {
            this.options = this.spritzerController.options,
            this.clickIsValid = !0,
            this.direction = null,
            this.holdTimeout = null,
            this.manualMode = !1,
            this.previousProgressBar = null,
            this.running = !1,
            this.startEvent = null,
            this.keyDown = !1,
            this.keyDownTimeout = null,
            this._onKeyClick = d.bind(this),
            this._onKeyDown = e.bind(this),
            this._onKeyStartHold = f.bind(this),
            this._onKeyUp = g.bind(this),
            this._onMouseClick = n.bind(this),
            this._onMouseDown = o.bind(this),
            this._onMouseStartHold = p.bind(this),
            this._onMouseUp = q.bind(this),
            this._onTouchClick = r.bind(this),
            this._onTouchEnd = s.bind(this),
            this._onTouchStart = t.bind(this),
            this._onTouchStartHold = u.bind(this)
        }
        function d() {
            i.utils.debug(0, "onKeyClick: " + this.startEvent.keyCode),
            this.startEvent.keyCode === Z ? y.call(this) : x.call(this)
        }
        function e(a) {
            i.utils.debug(0, "onKeyDown: " + a.keyCode),
            k(a.keyCode) ? (null !== this.keyDownTimeout && clearTimeout(this.keyDownTimeout),
            this.keyDownTimeout = setTimeout(j.createDelegate(this, h), Y),
            this.keyDown ? i.utils.debug(0, "onKeyDown: key is already down") : (i.utils.debug(0, "onKeyDown: putting key down"),
            this.startEvent = a,
            this.keyDown = !0,
            this.holdTimeout = setTimeout(this._onKeyStartHold, X),
            Q.call(this),
            S.call(this)),
            a.preventDefault(),
            a.stopPropagation()) : this.keyDown && (this.keyDown = !1)
        }
        function f() {
            i.utils.debug(0, "onKeyStartHold: " + this.startEvent.keyCode),
            this.clickIsValid = !1,
            this.running = !0,
            this.startEvent.keyCode === Z ? (i.utils.debug(0, "onKeyStartHold: Start fast backward"),
            this.startFastBackward()) : this.startEvent.altKey ? (i.utils.debug(0, "onKeyStartHold: Start fast forward"),
            this.startFastForward()) : (i.utils.debug(0, "onKeyStartHold: Start spritzing"),
            this.direction = null,
            this.spritzerController.resumeText(!0))
        }
        function g(a) {
            i.utils.debug(0, "onKeyUp: " + +a.keyCode),
            k(a.keyCode) && (this.keyDown && (this.keyDown = !1,
            clearTimeout(this.holdTimeout),
            this.clickIsValid ? this._onKeyClick() : B.call(this),
            this.clickIsValid = !0,
            I.call(this),
            K.call(this)),
            a.preventDefault(),
            a.stopPropagation())
        }
        function h() {
            i.utils.debug(0, "keyDownReset: " + this.keyDown),
            this.keyDown && (B.call(this),
            this.keyDown = !1,
            I.call(this),
            K.call(this)),
            this.keyDownTimeout = null
        }
        function k(a) {
            return a === _ || a === Z || a === $
        }
        function l(a) {
            return C.call(this, a.clientX, a.clientY)
        }
        function m() {
            return D.call(this, this.startEvent.layerX)
        }
        function n() {
            i.utils.debug(0, "onMouseClick: " + m.call(this)),
            m.call(this) ? y.call(this) : x.call(this)
        }
        function o(a) {
            this.startEvent = a,
            i.utils.debug(0, "onMouseDown: " + a.layerX + " " + m.call(this)),
            l.call(this, a) ? i.utils.debug(0, "onMouseDown: event is in the redicle") : (J.call(this),
            this.holdTimeout = setTimeout(this._onMouseStartHold, X),
            P.call(this),
            S.call(this),
            a.preventDefault(),
            a.stopPropagation())
        }
        function p() {
            i.utils.debug(0, "onMouseStartHold: " + m.call(this)),
            this.clickIsValid = !1,
            this.running = !0,
            m.call(this) ? (i.utils.debug(0, "Start fast backward"),
            this.startFastBackward()) : this.startEvent.altKey ? (i.utils.debug(0, "onMouseStartHold: Start fast forward"),
            this.startFastForward()) : (i.utils.debug(0, "onMouseStartHold: Start spritzing"),
            this.direction = null,
            this.spritzerController.resumeText(!0))
        }
        function q(a) {
            i.utils.debug(0, "onMouseUp: " + a.layerX + " " + m.call(this)),
            clearTimeout(this.holdTimeout),
            this.clickIsValid ? this._onMouseClick() : B.call(this),
            this.clickIsValid = !0,
            H.call(this),
            K.call(this),
            R.call(this),
            a.preventDefault(),
            a.stopPropagation()
        }
        function r() {
            i.utils.debug(0, "onTouchClick: " + w.call(this)),
            w.call(this) ? y.call(this) : x.call(this)
        }
        function s(a) {
            i.utils.debug(0, "onTouchEnd: " + w.call(this)),
            clearTimeout(this.holdTimeout),
            this.clickIsValid ? this._onTouchClick() : B.call(this),
            this.clickIsValid = !0,
            H.call(this),
            I.call(this),
            T.call(this),
            a.stopPropagation(),
            a.preventDefault()
        }
        function t(a) {
            this.startEvent = a,
            i.utils.debug(0, "onTouchStart: " + a.touches[0].clientX + " " + w.call(this)),
            v.call(this, a) ? i.utils.debug(0, "onTouchStart: event is in the redicle") : (L.call(this),
            this.holdTimeout = setTimeout(this._onTouchStartHold, X),
            P.call(this),
            Q.call(this),
            a.stopPropagation(),
            a.preventDefault())
        }
        function u() {
            i.utils.debug(0, "onTouchStartHold: " + w.call(this)),
            this.clickIsValid = !1,
            this.running = !0,
            w.call(this) ? this.startFastBackward() : (this.direction = null,
            this.spritzerController.resumeText(!0))
        }
        function v(a) {
            return C.call(this, a.touches[0].clientX, a.touches[0].clientY)
        }
        function w() {
            return D.call(this, this.startEvent.touches[0].clientX - this.touchPad.getBoundingClientRect().left)
        }
        function x() {
            this.spritzerController.spritzPanel.isDisplayingWord() ? this.spritzerController.goForwardOneWord(!0) : 0 === this.spritzerController.spritzPanel.getCurrentText().getCurrentWord().word.length ? this.spritzerController.goForwardOneWord(!0) : this.spritzerController.displayCurrentWord()
        }
        function y() {
            this.spritzerController.spritzPanel.isDisplayingWord() ? this.spritzerController.goBackwardOneWord(!0) : this.spritzerController.spritzPanel.getCurrentText().hasPreviousWord() && (0 === this.spritzerController.spritzPanel.getCurrentText().getCurrentWord().word.length ? this.spritzerController.goBackwardOneWord(!0) : this.spritzerController.displayCurrentWord())
        }
        function z() {
            return this.spritzerController.container.getBoundingClientRect()
        }
        function A() {
            return null === this.spritzerParentContainer && (this.spritzerParentContainer = this.spritzerController.parentContainer),
            this.spritzerParentContainer
        }
        function B() {
            i.utils.debug(0, "holdStopHandler: " + this.spritzerController.spritzPanel.isRunning()),
            this.spritzerController.spritzPanel.isRunning() && (null === this.direction ? this.spritzerController.pauseSpritzing() : this.direction === ba ? (this.spritzerController.stopFastBackward(),
            M.call(this)) : this.direction === aa ? (this.spritzerController.stopFastForward(),
            M.call(this)) : this.spritzerController.pauseSpritzing()),
            this.running = !1
        }
        function C(a, b) {
            var c = z.call(this);
            return a >= c.left && a <= c.right && b >= c.top && b <= c.bottom
        }
        function D(a) {
            return a < this.touchPad.offsetWidth / 2
        }
        function E() {
            var a = A.call(this);
            null != a && W.dispatchEvent(a, "onSpritzManualModeChange", {
                manualMode: this.manualMode
            })
        }
        function F() {
            i.utils.debug(0, "Completed fast backward"),
            this.spritzerController.displayProgress(0),
            M.call(this)
        }
        function G() {
            i.utils.debug(0, "Completed fast forward"),
            this.spritzerController.displayProgress(),
            this.spritzerController.setManualProgressBar.call(this)
        }
        function H() {
            c.addEventListener("keydown", this._onKeyDown),
            c.addEventListener("keyup", this._onKeyUp)
        }
        function I() {
            this.options.manualMode.mouseControlEnabled && (this.touchPad.removeEventListener("mousedown", this._onMouseDown),
            this.touchPad.addEventListener("mousedown", this._onMouseDown))
        }
        function J() {
            this.touchPad.removeEventListener("mouseup", this._onMouseUp),
            this.touchPad.addEventListener("mouseup", this._onMouseUp)
        }
        function K() {
            this.touchPad.addEventListener("touchstart", this._onTouchStart)
        }
        function L() {
            this.touchPad.removeEventListener("touchend", this._onTouchEnd),
            this.touchPad.addEventListener("touchend", this._onTouchEnd)
        }
        function M() {
            this.spritzerController.options.redicle.progressBar = V.PROGRESS_OFF
        }
        function N() {
            this.manualMode = !0,
            this.previousProgressBar = this.spritzerController.options.redicle.progressBar,
            M.call(this),
            this.spritzerController.displayProgress(),
            H.call(this),
            I.call(this),
            K.call(this),
            this.spritzerController.spritzPanel.isRunning() ? this.spritzerController.pauseSpritzing() : null !== this.spritzerController.spritzPanel.getCurrentText() && this.spritzerController.displayCurrentWord(),
            W.addClass(this.spritzerController.container, U.MANUAL_MODE),
            E.call(this),
            this.spritzerController.spritzPanel.issueManualModeStart()
        }
        function O() {
            this.manualMode = !1,
            this.spritzerController.options.redicle.progressBar = this.previousProgressBar,
            this.spritzerController.displayProgress(),
            P.call(this),
            Q.call(this),
            S.call(this),
            W.removeClass(this.spritzerController.container, U.MANUAL_MODE),
            E.call(this),
            this.spritzerController.spritzPanel.issueManualModeStop()
        }
        function P() {
            c.removeEventListener("keydown", this._onKeyDown),
            c.removeEventListener("keyup", this._onKeyUp)
        }
        function Q() {
            this.touchPad.removeEventListener("mousedown", this._onMouseDown)
        }
        function R() {
            this.touchPad.removeEventListener("mouseup", this._onMouseUp)
        }
        function S() {
            this.touchPad.removeEventListener("touchstart", this._onTouchStart)
        }
        function T() {
            this.touchPad.removeEventListener("touchend", this._onTouchEnd)
        }
        var U = i.constants.CSSClasses
          , V = i.constants.Constants
          , W = i.helper
          , X = 500
          , Y = 2e3
          , Z = 37
          , $ = 39
          , _ = 32
          , aa = 1
          , ba = -1;
        return a.prototype.displayTextStart = function() {
            var a = this.options.placeholderText;
            this.spritzerController.displayPlaceholderText(a.manualStartText, a.startTextColor)
        }
        ,
        a.prototype.displayTextEnd = function() {
            var a = this.options.placeholderText;
            this.spritzerController.displayPlaceholderText(a.manualEndText, a.endTextColor)
        }
        ,
        a.prototype.isManualMode = function() {
            return this.manualMode
        }
        ,
        a.prototype.isRunning = function() {
            return this.running
        }
        ,
        a.prototype.setManualMode = function(a) {
            a ? this.manualMode ? M.call(this) : N.call(this) : this.manualMode && O.call(this)
        }
        ,
        a.prototype.startFastBackward = function() {
            this.direction = ba,
            this.spritzerController.options.redicle.progressBar = this.spritzerController.options.manualMode.progressBarRewind,
            this.spritzerController.startFastBackward(F.bind(this))
        }
        ,
        a.prototype.startFastForward = function() {
            this.direction = aa,
            this.spritzerController.options.redicle.progressBar = this.spritzerController.options.manualMode.progressBarRewind,
            this.spritzerController.startFastForward(G.bind(this))
        }
        ,
        {
            ManualModeController: a
        }
    }),
    i.namespace("SPRITZ.spritzinc"),
    i.addToNamespace(i.spritzinc, function() {
        function a(c, e) {
            if (!(this instanceof a))
                return new a(c,e);
            this.spritzClient = e || (b.SpritzClient || null),
            this.loading = !1,
            this.container = null,
            this.parentContainer = null,
            this.spritzPanel = null,
            this.loadingOverlay = null,
            this.backBtn = null,
            this.endBtn = null,
            this.forwardBtn = null,
            this.pausePlayBtn = null,
            this.rewindBtn = null,
            this.pauseTitle = null,
            this.playTitle = null,
            this.progressReporter = null,
            this.seekPosition = null,
            this.seekMode = null,
            this.playOnFetchSuccess = !1,
            this.speedSelector = null,
            this.defaults = ha,
            this.manualModeController = null,
            this._onVisibilityChange = z.bind(this),
            f.call(this, c),
            d.call(this, !0)
        }
        function d(a) {
            var b = this
              , c = this.options;
            this.container = e.call(this, c),
            this.container.querySelector("." + ea.LOGO).addEventListener("mousedown", v.bind(this));
            var d = this.container.querySelector("." + ea.CANVAS_CONTAINER);
            if (c.redicle.clickable && d.addEventListener("redicleClick", j.createDelegate(this, w)),
            null === this.spritzPanel ? this.spritzPanel = new i.display.SpritzDisplayProxy(d,c,this.spritzClient) : this.spritzPanel.reloadRedicle(d, c),
            this.loadingOverlay = this.container.querySelector("." + ea.LOADING_OVERLAY),
            this.pausePlayBtn = this.container.querySelector("." + ea.BTN_PAUSEPLAY),
            this.rewindBtn = this.container.querySelector("." + ea.BTN_REWIND),
            this.backBtn = this.container.querySelector("." + ea.BTN_BACK),
            this.forwardBtn = this.container.querySelector("." + ea.BTN_FORWARD),
            this.endBtn = this.container.querySelector("." + ea.BTN_END),
            c.header.close) {
                this.closeBtn = this.container.querySelector("." + ea.BTN_CLOSE),
                c.header.closeHandler && (c.header.closeHandler = c.header.closeHandler.bind(this));
                var f = c.header.closeHandler || h.bind(this);
                this.closeBtn.addEventListener("touchstart", f),
                this.closeBtn.addEventListener("click", f),
                this.closeBtn.addEventListener("mousedown", v.bind(this))
            }
            var g = {
                pauseplay: m,
                rewind: n,
                back: o,
                forward: p,
                end: q,
                redicle: w
            }
              , k = this.container.querySelector("." + ea.BTN_CONTAINER);
            k.addEventListener("mousedown", v.bind(this));
            for (var l = 0, x = c.controlButtons.length; l < x; l += 1) {
                var z = k.querySelector("." + ea.BTN_BASE + c.controlButtons[l]);
                z.addEventListener("click", g[c.controlButtons[l]].bind(this)),
                z.addEventListener("mousedown", v.bind(this))
            }
            var A = this.container.querySelector("." + ea.SPEED_CONTAINER);
            if ("DropDown" === c.speedSelector ? this.speedSelector = new i.spritzinc.DropDownSpeedSelector(A,c) : "Slider" === c.speedSelector ? this.speedSelector = new i.spritzinc.SliderSpeedSelector(A,c) : "Wheel" === c.speedSelector ? this.speedSelector = new i.spritzinc.WheelSpeedSelector(A,c) : null === c.speedSelector ? i.utils.debug(0, "No speedSelector specified") : i.utils.debug(1, "Invalid speedSelector specified [" + c.speedSelector + "]"),
            this.speedSelector && (X.call(this) || this.speedSelector.restrict(),
            A.addEventListener("speedChange", j.createDelegate(this, y))),
            this.progressReporter = j.createDelegate(this, Y),
            $.call(this, !1),
            Z.call(this),
            T.call(this, !1),
            this.pauseTitle = c.controlTitles.pause,
            this.playTitle = c.controlTitles.play,
            c.header.login) {
                var B = this.container.querySelector("." + ea.BTN_LOGIN);
                B.addEventListener("click", j.createDelegate(this, r)),
                B.addEventListener("mousedown", v.bind(this));
                var C = this.container.querySelector("." + ea.USER)
                  , D = new i.spritzinc.DropDownSelect(C,{},ea.USER_BTN,ea.USER_TEXT,ea.USER_LIST)
                  , E = ga.createLi(ea.BTN_LOGOUT, "Payment")
                  , F = ga.createLi(ea.BTN_LOGOUT, "Logout");
                D.addOption(E),
                D.addOption(F),
                E.addEventListener("click", j.createDelegate(this, t)),
                F.addEventListener("click", j.createDelegate(this, u)),
                E.addEventListener("mousedown", v.bind(this)),
                F.addEventListener("mousedown", v.bind(this)),
                _.call(this, this.spritzClient.isUserLoggedIn())
            }
            b.spritzClient && null !== b.spritzClient && b.spritzClient.on("loginStateChanged", s.bind(this));
            var G;
            G = a ? c.defaultSpeed || (this.speedSelector ? this.speedSelector.getSpeed() : void 0) : this.speedSelector ? this.speedSelector.getSpeed() : c.defaultSpeed || c.defaultSpeed,
            G && this.setSpeed(G),
            c.initCompleted && c.initCompleted()
        }
        function e(a) {
            var b = ga.createDiv([ea.SPRITZER_CONTAINER, ea.SPEED_SELECTOR_TYPE_PREFIX + i.template.SPEED_CONTROL_TYPE_MAP[a.speedSelector]]);
            null !== a.backgroundColor && (b.style.backgroundColor = a.backgroundColor);
            for (var c = ga.parseHTML(i.template.buildHtml1(a)); c.length > 0; )
                b.appendChild(c[0]);
            for (b.appendChild(ga.createDiv(ea.CANVAS_CONTAINER)),
            c = ga.parseHTML(i.template.buildHtml2(a)); c.length > 0; )
                b.appendChild(c[0]);
            return b
        }
        function f(a, b) {
            var c = ga.extend({}, this.defaults);
            return !0 === b && (c = this.getOptions() || this.defaults),
            a && "object" == typeof a ? (this.options = ga.extend({}, c, a),
            i.utils.setDebugLevel(this.options.debugLevel),
            a && a.redicle && (this.options.redicle = ga.extend(c.redicle, a.redicle)),
            a.redicle && (a.redicle.redicleLineWidth && !this.options.redicle.crossHairWidth && (this.options.redicle.crossHairWidth = a.redicle.redicleLineWidth),
            a.redicle.redicleLineColor && !this.options.redicle.crossHairColor && (this.options.redicle.crossHairColor = a.redicle.redicleLineColor)),
            a && a.placeholderText && (this.options.placeholderText = ga.extend(c.placeholderText, a.placeholderText))) : this.options = c,
            this.options
        }
        function g() {
            this.responsiveAttached = !0,
            this.onResize(function(a) {
                console;
                var b = this
                  , c = function(a, c) {
                    console,
                    b.applyOptions({
                        redicleWidth: Math.round(a),
                        redicleHeight: Math.round(c)
                    }, !0)
                }
                  , d = a.containerWidth - a.redicleWidth
                  , e = a.windowWidth - d;
                a.windowWidth <= a.containerWidth ? c(e, e * a.aspectRatio) : a.windowWidth > a.containerWidth && e <= a.originalRedicleWidth && c(e, e * a.aspectRatio)
            }, "resize.spritzInternal")
        }
        function h() {
            C.call(this) || this.hideSpritzer()
        }
        function k(a) {
            if (ga.hide(this.loadingOverlay),
            this.loading = !1,
            ga.removeClass(this.pausePlayBtn, ea.BTN_DISABLED),
            null !== this.seekPosition && a.seek(this.seekPosition, this.seekMode),
            this.playOnFetchSuccess ? this.startSpritzing(a) : this.setSpritzText(a),
            i.utils.isMobileSafari()) {
                var b = this.container.querySelector("." + ea.CANVAS_CONTAINER);
                this.spritzPanel.reloadRedicle(b, this.options)
            }
            this.playOnFetchSuccess = !1
        }
        function l(a) {
            ga.hide(this.loadingOverlay),
            this.loading = !1,
            ga.removeClass(this.pausePlayBtn, ea.BTN_DISABLED),
            this.playOnFetchSuccess = !1,
            i.utils.debug(1, "Unable to spritz: " + a.message)
        }
        function m() {
            var a = W(this.pausePlayBtn);
            if (null === this.spritzPanel.getCurrentText())
                a && da.call(this) && this.loadText(!0);
            else if (a)
                if (this.spritzPanel.isPaused() || this.spritzPanel.isReady()) {
                    var b = this.spritzPanel.getCurrentText();
                    b && 0 === b.getCurrentIndex() && M.call(this),
                    this.resumeSpritzing()
                } else
                    this.spritzPanel.pauseText(),
                    $.call(this, !1),
                    Z.call(this),
                    T.call(this, !1),
                    D.call(this, this.pauseTitle)
        }
        function n() {
            if (W(this.rewindBtn)) {
                this.spritzPanel.isRunning() && D.call(this, this.pauseTitle);
                var a = this.spritzPanel.getCurrentPosition();
                void 0 === this.rewindClickHandler ? this.spritzPanel.goToFirstWord() : this.rewindClickHandler(),
                $.call(this, !1),
                Z.call(this),
                T.call(this, !1),
                E.call(this, a)
            }
        }
        function o() {
            if (W(this.backBtn)) {
                this.spritzPanel.isRunning() && D.call(this, this.pauseTitle);
                var a = this.spritzPanel.getCurrentPosition();
                void 0 === this.backClickHandler ? this.spritzPanel.goToPreviousSentence() : this.backClickHandler(),
                $.call(this, !1),
                Z.call(this),
                T.call(this, !1),
                F.call(this, a)
            }
        }
        function p() {
            if (W(this.forwardBtn)) {
                this.spritzPanel.isRunning() && D.call(this, this.pauseTitle);
                var a = this.spritzPanel.getCurrentPosition();
                void 0 === this.forwardClickHandler ? this.spritzPanel.goToNextSentence() : this.forwardClickHandler(),
                $.call(this, !1),
                Z.call(this),
                T.call(this, !1),
                G.call(this, a)
            }
        }
        function q() {
            if (W(this.endBtn)) {
                this.spritzPanel.isRunning() && D.call(this, this.pauseTitle);
                var a = this.spritzPanel.getCurrentPosition();
                void 0 === this.endClickHandler ? this.spritzPanel.goToEnd() : this.endClickHandler(),
                $.call(this, !1),
                Z.call(this),
                T.call(this, !1),
                J.call(this, a)
            }
        }
        function r() {
            this.spritzPanel.resetUser(),
            this.spritzClient.userLogin(function() {
                i.utils.debug(3, "Login success")
            }, function(a) {
                i.utils.debug(1, "Login failure [" + a + "]")
            })
        }
        function s() {
            _.call(this, this.spritzClient.isUserLoggedIn()),
            $.call(this, !1),
            Z.call(this),
            T.call(this, !1),
            R.call(this, this.spritzClient.isUserLoggedIn() ? "login" : "logout")
        }
        function t() {
            this.spritzPanel.resetUser(),
            this.spritzClient.userPayment(function() {
                i.utils.debug(3, "Payment success")
            }, function(a) {
                i.utils.debug(1, "Payment failure [" + a + "]")
            })
        }
        function u() {
            this.spritzPanel.resetUser(),
            this.spritzClient.userLogout(!0)
        }
        function v(a) {
            a.stopPropagation(),
            a.preventDefault()
        }
        function w() {
            if (null === this.spritzPanel.getCurrentText())
                W(this.pausePlayBtn) && da.call(this) && this.loadText(!0);
            else if (!this.isManualMode())
                if (W(this.pausePlayBtn) && this.spritzPanel.getCurrentText().hasNextWord())
                    if (this.spritzPanel.isPaused() || this.spritzPanel.isReady()) {
                        var a = this.spritzPanel.getCurrentText();
                        a && 0 === a.getCurrentIndex() && M.call(this),
                        this.resumeSpritzing(),
                        $.call(this, !0),
                        Z.call(this, !0)
                    } else
                        this.spritzPanel.pauseText(),
                        $.call(this, !1),
                        Z.call(this),
                        T.call(this, !1),
                        K.call(this, this.pauseTitle);
                else
                    this.spritzPanel.goToFirstWord(),
                    this.resumeSpritzing()
        }
        function x(a) {
            $.call(this, !1),
            Z.call(this),
            T.call(this, !1),
            L.call(this, a)
        }
        function y(a) {
            var b = a.detail.speed;
            if (void 0 !== b)
                if (this.spritzPanel.setCurrentTextSpeed(b))
                    N.call(this);
                else {
                    var c = this.spritzPanel.getSpeedMinMax();
                    b < c.min ? (a.detail.vetoed = !0,
                    a.detail.vetoMessage = "You have to login and subscribe to go below " + c.min + " wpm.",
                    a.detail.alternateValue = c.min) : b > c.max && (a.detail.vetoed = !0,
                    a.detail.vetoMessage = "You have to login and subscribe to go above " + c.max + " wpm.",
                    a.detail.alternateValue = c.max)
                }
        }
        function z(a) {
            this.speedSelector && this.speedSelector.onVisibilityChange(a.detail.visible)
        }
        function A(a, b) {
            var c = {
                position: this.spritzPanel.getCurrentPosition()
            };
            void 0 !== b && (c.pausePosition = b),
            null != this.parentContainer && ga.dispatchEvent(this.parentContainer, "onSpritz" + a, c)
        }
        function B(a, b) {
            var c = {
                position: this.spritzPanel.getCurrentPosition(),
                type: b
            };
            null != this.parentContainer && ga.dispatchEvent(this.parentContainer, "onSpritzFast" + a, c)
        }
        function C() {
            var a = !1;
            if (null != this.parentContainer) {
                a = ga.dispatchEvent(this.parentContainer, "onSpritzClose").defaultPrevented
            }
            return a
        }
        function D(a) {
            A.call(this, a)
        }
        function E(a) {
            A.call(this, "Rewind", a)
        }
        function F(a) {
            A.call(this, "Back", a)
        }
        function G(a) {
            A.call(this, "Forward", a)
        }
        function H(a) {
            A.call(this, "BackOne", a)
        }
        function I(a) {
            A.call(this, "ForwardOne", a)
        }
        function J(a) {
            A.call(this, "GoToEnd", a)
        }
        function K(a) {
            A.call(this, a)
        }
        function L(a) {
            null != this.parentContainer && ga.dispatchEvent(this.parentContainer, "onSpritzComplete", {
                running: a || !1
            })
        }
        function M() {
            null != this.parentContainer && ga.dispatchEvent(this.parentContainer, "onSpritzStart")
        }
        function N() {
            null != this.parentContainer && ga.dispatchEvent(this.parentContainer, "onSpritzSpeedChange", {
                speed: this.spritzPanel.getCurrentTextSpeed()
            })
        }
        function O() {
            null != this.parentContainer && ga.dispatchEvent(this.parentContainer, "onTextBottom")
        }
        function P() {
            null != this.parentContainer && ga.dispatchEvent(this.parentContainer, "onTextTop")
        }
        function Q(a) {
            null != this.parentContainer && ga.dispatchEvent(this.parentContainer, "onSpritzProgressChange", {
                percentComplete: a
            })
        }
        function R(a) {
            null != this.parentContainer && ga.dispatchEvent(this.parentContainer, "onSpritzAuthStateChange", {
                state: a
            }, this.spritzClient)
        }
        function S(a) {
            $.call(this, a),
            Z.call(this, a),
            T.call(this, a)
        }
        function T(a) {
            a ? (ga.removeClass(this.pausePlayBtn, ea.BTN_PLAY),
            ga.addClass(this.pausePlayBtn, ea.BTN_PAUSE),
            ga.setTitle(this.pausePlayBtn, "Pause")) : (ga.removeClass(this.pausePlayBtn, ea.BTN_PAUSE),
            ga.addClass(this.pausePlayBtn, ea.BTN_PLAY),
            ga.setTitle(this.pausePlayBtn, "Play"))
        }
        function U(a) {
            return a.jquery && (a = a[0]),
            a.SpritzerController
        }
        function V(a) {
            var b = c.querySelectorAll('[data-role="spritzer"]');
            Array.prototype.forEach.call(b, function(b) {
                var c = b.getAttribute("data-options");
                if (c)
                    try {
                        c = JSON.parse(c),
                        "object" != typeof c && (c = null)
                    } catch (a) {
                        i.utils.debug(2, "Failed to parse options [" + a.message + "]"),
                        c = null
                    }
                else
                    c = null;
                new i.spritzinc.SpritzerController(c,a).attach(b)
            })
        }
        function W(a) {
            return !ga.hasClass(a, ea.BTN_DISABLED)
        }
        function X() {
            return this.spritzClient ? this.spritzClient.isUserLoggedIn() || this.spritzClient.anonymousEnabled : (i.utils.debug(2, "No SpritzClient defined."),
            !1)
        }
        function Y(a, b) {
            var c, d = 100 * a, e = d / b, f = this.options.redicle.startPercent, g = this.options.redicle.endPercent;
            b <= 100 ? null != this.progressBar ? this.progressBar.setAttribute("style", "width:" + (f + a / b * (g - f)) + "%;") : null != this.timeLeft ? (c = Math.floor(1 * (b - a) / this.spritzPanel.getCurrentTextSpeed()),
            0 === c && (c = "Less than 1"),
            this.timeLeft.innerHTML = c) : null != this.percentTracker ? this.percentTracker.innerHTML = 10 * Math.floor(e / 10) + "%" : this.options.redicle.progressBar >= 4 ? this.spritzPanel.setProgress(e / 100) : Q.call(this, e) : d % b < 100 && (null != this.progressBar ? this.progressBar.setAttribute("style", "width:" + (f + a / b * (g - f)) + "%;") : null != this.timeLeft ? (c = Math.floor(1 * (b - a) / this.spritzPanel.getCurrentTextSpeed()),
            0 === c && (c = "Less than 1"),
            this.timeLeft.innerHTML = c) : null != this.percentTracker ? this.percentTracker.innerHTML = 10 * Math.floor(e / 10) + "%" : this.options.redicle.progressBar >= 4 ? this.spritzPanel.setProgress(e / 100) : Q.call(this, e))
        }
        function Z(a) {
            null == this.spritzPanel.getCurrentText() || 0 == this.spritzPanel.getCurrentText().getWords().length ? (da.call(this) && this.hasSource() ? ga.removeClass(this.pausePlayBtn, ea.BTN_DISABLED) : ga.addClass(this.pausePlayBtn, ea.BTN_DISABLED),
            ga.addClass(this.rewindBtn, ea.BTN_DISABLED),
            ga.addClass(this.backBtn, ea.BTN_DISABLED),
            ga.addClass(this.forwardBtn, ea.BTN_DISABLED),
            ga.addClass(this.endBtn, ea.BTN_DISABLED)) : a || this.spritzPanel.getCurrentPosition() > 0 && this.spritzPanel.getCurrentText().hasNextWord() ? (ga.removeClass(this.pausePlayBtn, ea.BTN_DISABLED),
            ga.removeClass(this.rewindBtn, ea.BTN_DISABLED),
            ga.removeClass(this.backBtn, ea.BTN_DISABLED),
            ga.removeClass(this.forwardBtn, ea.BTN_DISABLED),
            ga.removeClass(this.endBtn, ea.BTN_DISABLED)) : 0 == this.spritzPanel.getCurrentPosition() ? (ga.removeClass(this.pausePlayBtn, ea.BTN_DISABLED),
            ga.addClass(this.rewindBtn, ea.BTN_DISABLED),
            ga.addClass(this.backBtn, ea.BTN_DISABLED),
            ga.removeClass(this.forwardBtn, ea.BTN_DISABLED),
            ga.removeClass(this.endBtn, ea.BTN_DISABLED)) : this.spritzPanel.getCurrentText().hasNextWord() || (ga.addClass(this.pausePlayBtn, ea.BTN_DISABLED),
            ga.removeClass(this.rewindBtn, ea.BTN_DISABLED),
            ga.removeClass(this.backBtn, ea.BTN_DISABLED),
            ga.addClass(this.forwardBtn, ea.BTN_DISABLED),
            ga.addClass(this.endBtn, ea.BTN_DISABLED))
        }
        function $(a) {
            a ? ga.addClass(this.container, ea.PLAYING_STATE) : ga.removeClass(this.container, ea.PLAYING_STATE)
        }
        function _(a) {
            var b = this.container.querySelector("." + ea.BTN_LOGIN)
              , c = this.container.querySelector("." + ea.USER_BTN);
            ga.removeClass(b, a ? ea.LOGGEDOUT : ea.LOGGEDIN),
            ga.addClass(b, a ? ea.LOGGEDIN : ea.LOGGEDOUT),
            ga.removeClass(c, a ? ea.LOGGEDIN : ea.LOGGEDOUT),
            ga.addClass(c, a ? ea.LOGGEDOUT : ea.LOGGEDIN),
            a ? ga.setSpanHtml(this.container.querySelector("." + ea.USER_TEXT), this.spritzClient.isUserPremium() ? this.spritzClient.getUserName() : "Upgrade") : ga.setSpanHtml(this.container.querySelector("." + ea.USER_TEXT), ""),
            aa.call(this)
        }
        function aa() {
            this.speedSelector && (X.call(this) ? this.speedSelector.unrestrict() : this.speedSelector.restrict())
        }
        function ba(a) {
            return this.parentContainer.getAttribute("data-" + a)
        }
        function ca(a, b) {
            return this.parentContainer.setAttribute("data-" + a, b)
        }
        function da() {
            var a;
            return this.parentContainer && (a = "spritzer" === ba.call(this, "role")),
            a
        }
        var ea = i.constants.CSSClasses
          , fa = i.constants.Constants
          , ga = i.helper
          , ha = {
            debugLevel: 1,
            redicleWidth: 340,
            redicleHeight: 70,
            responsive: !1,
            responsiveDebounce: 50,
            defaultSpeed: 100,
            speedItems: [100, 300, 350, 400, 450, 500, 550, 600],
            speedStep: 5,
            backgroundColor: null,
            speedSelector: "DropDown",
            header: {
                login: !0,
                close: !1,
                closeHandler: null
            },
            controlButtons: ["rewind", "back", "pauseplay", "forward"],
            controlTitles: {
                pause: "Pause",
                play: "Play",
                rewind: "Back to Beginning",
                back: "Previous Sentence",
                forward: "Next Sentence",
                end: "Go to End"
            },
            placeholderText: {
                startText: "Click to spritz",
                startTextColor: "#bababa",
                endText: "",
                endTextColor: "#bababa",
                manualStartText: "Beginning of text",
                manualEndText: "End of text"
            },
            redicle: {
                clickable: !0,
                sizeable: !0,
                loadFonts: !0,
                fontName: "SpritzMedienMedium",
                backgroundColor: "#ffffff",
                textNormalPaintColor: "#333",
                textHighlightPaintColor: "#cc0001",
                redicleLine: !0,
                redicleLineColor: "#000",
                redicleLineWidth: 1,
                crossHair: !0,
                crossHairColor: "#000",
                crossHairWidth: 1,
                crossHairHeight: .1,
                crossHairHorizontalPosition: .35,
                countdownTime: 750,
                countdownSlice: 5,
                countdownColor: "rgba(0,0,0,0.1)",
                paragraphBreaks: !1,
                progressBar: fa.PROGRESS_OFF,
                progressBarColor: "#0AB2FB",
                progressBarWidth: 4
            },
            wheel: {
                layout: "landscape",
                width: null,
                height: null,
                diameter: 1.05,
                count: null,
                sensitivity: null,
                steps: [{
                    step: 1,
                    speed: 40
                }, {
                    step: 5,
                    speed: 100
                }, {
                    step: 10
                }]
            },
            manualMode: {
                mouseControlEnabled: !0,
                progressBarRewind: fa.PROGRESS_OFF
            },
            initCompleted: null
        };
        return a.prototype.get = function() {
            return this.spritzPanel.getCurrentText()
        }
        ,
        a.prototype.getSpritzText = function() {
            return this.spritzPanel.getCurrentText()
        }
        ,
        a.prototype.setSpritzText = function(a) {
            null === a ? ($.call(this, !1),
            Z.call(this, !1),
            null != this.spritzClient && this.hasSource() && (T.call(this, !0),
            ga.removeClass(this.pausePlayBtn, ea.BTN_DISABLED))) : (null == a.getProgressTracker() && a.setProgressTracker(this.progressReporter),
            this.spritzPanel.setCurrentText(a),
            this.spritzPanel.setOnCompleteCallback(j.createDelegate(this, x)),
            $.call(this, !1),
            Z.call(this, !1))
        }
        ,
        a.prototype.getUrl = function() {
            return ba.call(this, "url")
        }
        ,
        a.prototype.setUrl = function(a, b, c) {
            if (this.parentContainer) {
                var d = this.getUrl();
                d && d === a || (this.spritzPanel.resetText(),
                ca.call(this, "url", a),
                "number" == typeof b ? (this.seekPosition = b,
                void 0 === c ? this.seekMode = i.model.SpritzText.SeekType.SENTENCE_START : c === i.model.SpritzText.SeekType.SENTENCE_START || c === i.model.SpritzText.SeekType.ABSOLUTE ? this.seekMode = c : this.seekMode = null) : this.seekPosition = null,
                $.call(this, !1),
                Z.call(this, !1),
                this.spritzClient && this.hasSource() && (T.call(this, !1),
                ga.removeClass(this.pausePlayBtn, ea.BTN_DISABLED)))
            } else
                i.utils.debug(1, "setUrl() failed. No parent container set for the controller. Make sure you have attached the controller to an element in the DOM first.")
        }
        ,
        a.prototype.attach = function(a) {
            return a.jquery && (a = a[0]),
            this.parentContainer = a,
            ga.hasClass(a, ea.ROOT) || ga.addClass(a, ea.ROOT),
            a.appendChild(this.container),
            a.SpritzerController = this,
            this.speedSelector && this.speedSelector.onAttach(),
            this.spritzClient && this.hasSource() && da.call(this) && ($.call(this, !1),
            T.call(this, !1),
            ga.removeClass(this.pausePlayBtn, ea.BTN_DISABLED)),
            _.call(this, this.spritzClient.isUserLoggedIn()),
            this.options.responsive && !this.responsiveAttached && (b.removeEventListener("resize.spritzInternal"),
            g.call(this)),
            a.addEventListener("visibilityChange", this._onVisibilityChange),
            this
        }
        ,
        a.prototype.detach = function() {
            var a = this.parentContainer;
            return a.removeEventListener(this._onVisibilityChange),
            a.removeChild(this.container),
            a.SpritzerController = null,
            this.parentContainer = null,
            this.speedSelector.onDetach(),
            a
        }
        ,
        a.prototype.hasSource = function() {
            var a;
            if (null === this.spritzPanel.getCurrentText()) {
                var b = this.getUrl();
                a = null === b || void 0 === b || b.length > 0
            } else
                a = !0;
            return a
        }
        ,
        a.prototype.initializeManualMode = function(a) {
            this.manualModeController = new i.spritzinc.ManualModeController(this,a)
        }
        ,
        a.prototype.isManualMode = function() {
            return this.manualModeController && this.manualModeController.isManualMode()
        }
        ,
        a.prototype.loadText = function(a, b) {
            var c;
            if (!this.spritzClient || this.loading)
                c = !1;
            else {
                this.spritzPanel.isRunning() && this.pauseSpritzing(),
                b || (b = {});
                var d = this.getUrl() || b.url
                  , e = ba.call(this, "selector") || b.selector
                  , f = ba.call(this, "selectortype") || b.selectorType;
                d || (d = location.href),
                0 == d.length ? c = !1 : (this.loading = !0,
                ga.addClass(this.pausePlayBtn, ea.BTN_DISABLED),
                this.playOnFetchSuccess = a,
                ga.show(this.loadingOverlay),
                this.spritzClient.fetchContents(d, k.bind(this), l.bind(this), e, f),
                c = !0)
            }
            return c
        }
        ,
        a.prototype.setManualMode = function(a) {
            this.manualModeController && this.manualModeController.setManualMode(a)
        }
        ,
        a.prototype.resumeText = function(a) {
            this.spritzPanel.pauseText(),
            this.spritzPanel.resumeText(a),
            S.call(this, !0),
            M.call(this)
        }
        ,
        a.prototype.startSpritzing = function(a, b) {
            this.spritzPanel.pauseText(),
            void 0 === a ? b = !0 : "object" == typeof a ? void 0 === b && (b = !0) : (b = a,
            a = void 0),
            !a && this.spritzPanel.getCurrentText() ? this.isManualMode() && !this.manualModeController.isRunning() ? this.displayCurrentWord() : (this.spritzPanel.resumeText(b),
            S.call(this, !0),
            M.call(this)) : a && (null == a.getProgressTracker() && a.setProgressTracker(this.progressReporter),
            this.isManualMode() && !this.manualModeController.isRunning() ? this.displayCurrentWord() : (this.spritzPanel.displayText(a, j.createDelegate(this, x), b),
            S.call(this, !0),
            M.call(this)))
        }
        ,
        a.prototype.stopSpritzing = function() {
            A.call(this, "Stop"),
            this.spritzPanel.resetText(),
            $.call(this, !1),
            Z.call(this),
            T.call(this, !1)
        }
        ,
        a.prototype.pauseSpritzing = function() {
            this.spritzPanel.pauseText(),
            $.call(this, !1),
            T.call(this, !1),
            D.call(this, this.pauseTitle)
        }
        ,
        a.prototype.resumeSpritzing = function() {
            this.isManualMode() || this.spritzPanel.resumeText(),
            S.call(this, !0),
            D.call(this, this.playTitle)
        }
        ,
        a.prototype.startFastBackward = function(a) {
            this.spritzPanel.startFastBackward(j.createDelegate(this, function() {
                "function" == typeof a && (B.call(this, "Backward", "stop"),
                this.spritzPanel.getCurrentText().hasPreviousWord() || P.call(this),
                a(),
                S.call(this, !1))
            })),
            S.call(this, !0),
            B.call(this, "Backward", "start")
        }
        ,
        a.prototype.startFastForward = function(a) {
            this.spritzPanel.startFastForward(j.createDelegate(this, function() {
                "function" == typeof a && (B.call(this, "Forward", "stop"),
                this.spritzPanel.getCurrentText().hasNextWord() || O.call(this),
                a(),
                S.call(this, !1))
            })),
            S.call(this, !0),
            B.call(this, "Forwward", "start")
        }
        ,
        a.prototype.stopFastBackward = function() {
            this.spritzPanel.stopFastBackward(),
            $.call(this, !1),
            T.call(this, !1),
            B.call(this, "Backward", "stop")
        }
        ,
        a.prototype.stopFastForward = function() {
            this.spritzPanel.stopFastForward(),
            $.call(this, !1),
            T.call(this, !1),
            B.call(this, "Forward", "stop")
        }
        ,
        a.prototype.getSpeedMinMax = function() {
            return this.spritzPanel.getSpeedMinMax()
        }
        ,
        a.prototype.getSpeed = function() {
            return this.spritzPanel.getCurrentTextSpeed()
        }
        ,
        a.prototype.setSpeed = function(a) {
            var b;
            if (a === this.spritzPanel.getCurrentTextSpeed())
                b = a;
            else {
                var c = this.spritzPanel.setCurrentTextSpeed(a);
                c && this.speedSelector && this.speedSelector.setSpeed(c),
                b = c
            }
            return b
        }
        ,
        a.prototype.getHighlightBestLetter = function() {
            return this.spritzPanel.getHighlightBestLetter()
        }
        ,
        a.prototype.setHighlightBestLetter = function(a) {
            this.spritzPanel.setHighlightBestLetter(a)
        }
        ,
        a.prototype.getProgressReporter = function() {
            return this.progressReporter
        }
        ,
        a.prototype.setProgressReporter = function(a) {
            this.progressReporter = a
        }
        ,
        a.prototype.seek = function(a, b) {
            var c;
            return this.spritzPanel.seek(a, b) ? (Z.call(this),
            T.call(this, !1),
            c = !0) : c = !1,
            c
        }
        ,
        a.prototype.setButtonState = function(a, b) {
            b ? ga.removeClass(a, ea.BTN_DISABLED) : ga.addClass(a, ea.BTN_DISABLED)
        }
        ,
        a.prototype.adjustButtonStates = function(a) {
            Z.call(this, void 0 === a ? this.spritzPanel.isRunning() : a)
        }
        ,
        a.prototype.adjustPausePlayButton = function(a) {
            T.call(this, void 0 === a ? this.spritzPanel.isRunning() : a)
        }
        ,
        a.prototype.hideSpritzer = function() {
            this.pauseSpritzing(),
            this.container.style.display = "none"
        }
        ,
        a.prototype.applyOptions = function(a, b) {
            var c = this.container
              , e = this.spritzPanel.getCurrentText()
              , g = this.spritzPanel.getOnCompleteCallback()
              , h = this.spritzPanel.getCurrentTextSpeed()
              , i = this.spritzPanel.getHighlightBestLetter()
              , j = this.spritzPanel.getCurrentState()
              , k = this.spritzPanel.isRunning();
            k && this.spritzPanel.pauseText();
            var l = this.parentContainer
              , m = this.getProgressReporter();
            f.call(this, a, b),
            d.call(this),
            this.setProgressReporter(m),
            this.spritzPanel.setOnCompleteCallback(g),
            this.spritzPanel.setCurrentTextSpeed(h),
            this.spritzPanel.setHighlightBestLetter(i),
            this.speedSelector && this.speedSelector.setSpeed(h, !0),
            c.parentNode && c.parentNode.removeChild(c),
            this.attach(l);
            for (var n = 0; n < c.classList.length; n++)
                ga.hasClass(this.container, c.classList[n]) || ga.addClass(this.container, c.classList[n]);
            k || this.spritzPanel.setCurrentState(j),
            e && this.spritzPanel.setCurrentText(e),
            k && this.spritzPanel.resumeText(!1),
            $.call(this, k),
            Z.call(this, k),
            T.call(this, k)
        }
        ,
        a.prototype.getProp = function(a) {
            var b = a.split(".")
              , c = this.options[b[0]];
            return c ? b.length > 1 && (c = this.options[b[0]][b[1]]) : i.utils.debug(2, "SpritzOptions: the " + a + " property does not exist."),
            c
        }
        ,
        a.prototype.getOptions = function() {
            return this.options || i.utils.debug(2, "SpritzOptions: no options initialized yet."),
            this.options
        }
        ,
        a.prototype.onResize = function(a, c) {
            var d = this
              , e = this.options.redicleWidth
              , f = this.options.redicleHeight
              , g = c || "resize.spritz"
              , h = function() {
                return {
                    aspectRatio: d.options.redicleHeight / d.options.redicleWidth,
                    originalRedicleWidth: e,
                    originalRedicleHeight: f,
                    redicleWidth: d.options.redicleWidth,
                    redicleHeight: d.options.redicleHeight,
                    containerWidth: d.parentContainer.width(),
                    containerHeight: d.parentContainer.height(),
                    windowWidth: b.offsetWidth,
                    windowHeight: b.offsetHeight()
                }
            }
              , i = function() {
                var b;
                return function() {
                    b || (b = setTimeout(function() {
                        b = null,
                        a.call(d, h())
                    }, d.options.responsiveDebounce))
                }
            };
            a && "function" == typeof a && (this.parentContainer && a.call(d, h()),
            b.addEventListener(g, i()))
        }
        ,
        a.prototype.displayCurrentWord = function() {
            this.spritzPanel.displayCurrentWord()
        }
        ,
        a.prototype.displayPlaceholderText = function(a, b) {
            this.spritzPanel.displayPlaceholderText(a, b)
        }
        ,
        a.prototype.displayProgress = function(a) {
            this.spritzPanel.displayProgress(a)
        }
        ,
        a.prototype.setProgressInfo = function(a) {
            this.spritzPanel.setProgressInfo(a)
        }
        ,
        a.prototype.goBackwardOneWord = function(a) {
            if (this.spritzPanel.getCurrentText().hasPreviousWord()) {
                this.spritzPanel.goBackwardOneWord(a);
                var b = this.spritzPanel.getCurrentPosition();
                H.call(this, b)
            } else
                P.call(this)
        }
        ,
        a.prototype.goForwardOneWord = function(a) {
            if (this.spritzPanel.getCurrentText().hasNextWord()) {
                this.spritzPanel.goForwardOneWord(a);
                var b = this.spritzPanel.getCurrentPosition();
                I.call(this, b)
            } else
                O.call(this)
        }
        ,
        a.prototype.showSpritzer = function() {
            this.container.style.display = ""
        }
        ,
        {
            SpritzerController: a,
            initSpritzers: V,
            adjustPausePlayButton: T,
            setButtonStates: Z,
            getSpritzerController: U,
            init: d
        }
    }),
    i.namespace("SPRITZ.bookmark"),
    i.addToNamespace(i.bookmark, function() {
        function a(a, c) {
            this.spritzerController = a,
            this.bookStores = null,
            this.currentBookStore = null,
            this.currentChapterName = null,
            this.options = null,
            b.call(this, c)
        }
        function b(a) {
            this.options = F(a),
            this.bookStores = d.call(this, this.spritzerController)
        }
        function d(a) {
            for (var b = {}, d = c.querySelectorAll(this.options.book), f = 0, k = d.length; f < k; f += 1) {
                var l = d[f]
                  , m = l.querySelector(this.options.bookTitle)
                  , s = h(m.querySelector(this.options.bookName))
                  , u = m.querySelector(this.options.totalTime)
                  , v = m.querySelector(this.options.remainingTime)
                  , w = new i.bookmark.BookStore(s,g(u, v));
                b[s] = w,
                e.call(this, l, w);
                var x = a.parentContainer;
                x.addEventListener("onSpritzPause", j.createDelegate(this, n)),
                x.addEventListener("onSpritzRewind", j.createDelegate(this, q)),
                x.addEventListener("onSpritzBack", j.createDelegate(this, o)),
                x.addEventListener("onSpritzForward", j.createDelegate(this, p)),
                x.addEventListener("onSpritzComplete", j.createDelegate(this, r)),
                x.addEventListener("onSpritzSpeedChange", j.createDelegate(this, t))
            }
            return b
        }
        function e(a, b) {
            for (var d = c.querySelectorAll(this.options.bookChapter), e = 0, i = d.length; e < i; e += 1) {
                var j = d[e]
                  , l = j.getAttribute("data-url")
                  , m = j.getAttribute("data-selector")
                  , n = j.querySelector(this.options.statusImage)
                  , o = j.querySelector(this.options.chapterName)
                  , p = h(o)
                  , q = j.querySelector(this.options.totalTime)
                  , r = j.querySelector(this.options.remainingTime)
                  , s = f(l, m)
                  , t = g(q, r, n, o);
                b.addChapter(p, s, t),
                k.call(this, b, p, s, t),
                n.addEventListener("click", u.bind(this, b, p)),
                o.addEventListener("click", v.bind(this, b, p))
            }
        }
        function f(a, b) {
            return {
                url: a,
                selector: b
            }
        }
        function g(a, b, c, d) {
            return {
                totalTime: a,
                remainingTime: b,
                bookmarkElement: c,
                chapterElement: d
            }
        }
        function h(a) {
            var b = a.getAttribute("data-name");
            return void 0 !== b && null !== b && "" !== b || (b = a.textContent),
            b
        }
        function k(a, b, c) {
            var d = this
              , e = function(e) {
                i.utils.debug(3, "BookController.onFetchInfoSuccess: " + e.getWordCount() + ", " + e.getDuration()),
                c.text = e,
                y.call(d, a, b)
            }
              , f = function(a) {
                i.utils.debug(1, "BookController.onFetchInfoError: " + a.message)
            };
            SpritzClient.fetchContents2(c.url, e, f, {
                selector: c.selector,
                selectorType: "CSS",
                includePlainText: !1,
                includeSpritzableText: !1
            })
        }
        function l(a, b, c) {
            var d = function(d) {
                i.utils.debug(3, "BookController.fetchTextAndStartSpritzing"),
                c.text = d,
                m.call(this, a, b, c)
            }
              , e = function(a) {
                i.utils.debug(1, "BookController.fetchTextAndStartSpritzing: " + a.message)
            };
            SpritzClient.fetchContentsByContentId(c.text.contentId, j.createDelegate(this, d), e)
        }
        function m(a, b, c) {
            null != this.currentBookStore && null != this.currentChapterName && G.removeClass(this.currentBookStore.getControls(this.currentChapterName).chapterElement, this.options.textHighlighter),
            G.addClass(a.getControls(b).chapterElement, this.options.textHighlighter),
            this.currentBookStore = a,
            this.currentChapterName = b;
            var d = c.text.clone()
              , e = a.getPosition(b);
            null !== e && d.setCurrentIndex(e),
            d.hasNextWord() ? this.spritzerController.startSpritzing(d) : this.spritzerController.setSpritzText(d)
        }
        function n(a) {
            s.call(this, a.detail.position)
        }
        function o(a) {
            s.call(this, a.detail.position)
        }
        function p(a) {
            s.call(this, a.detail.position)
        }
        function q(a) {
            s.call(this, a.detail.position)
        }
        function r(a) {
            this.currentBookStore.setCompleted(this.currentChapterName),
            y.call(this, this.currentBookStore, this.currentChapterName)
        }
        function s(a) {
            var b = this.spritzerController.getSpritzText().getPreviousSentenceStart(a, 1);
            this.currentBookStore.setPosition(this.currentChapterName, b),
            y.call(this, this.currentBookStore, this.currentChapterName)
        }
        function t(a) {
            i.utils.debug(3, "BookController.onSpeedChange");
            var b = a.detail.speed;
            for (var c in this.bookStores)
                if (this.bookStores.hasOwnProperty(c)) {
                    var d = this.bookStores[c];
                    z(this.bookStores[c], b);
                    for (var e in d.getChapters())
                        A(d, e, b)
                }
        }
        function u(a, b) {
            i.utils.debug(3, "BookController.onBookmarkClick"),
            w.call(this, a, b, a.getContent(b))
        }
        function v(a, b) {
            i.utils.debug(3, "BookController.onChapterClick");
            w.call(this, a, b, a.getContent(b))
        }
        function w(a, b, c) {
            i.utils.debug(3, "BookController.handleContentClick");
            var d = this;
            if (void 0 === c.text) {
                var e = function(e) {
                    i.utils.debug(4, "BookController.handleContentClick"),
                    c.text = e,
                    y.call(d, a, b)
                }
                  , f = function(a) {
                    i.utils.debug(3, "BookController.handleContentClick: " + a.message)
                };
                SpritzClient.fetchContents(c.url, e, f, c.selector)
            } else
                c.text.isLoaded() ? m.call(this, a, b, c) : l.call(this, a, b, c)
        }
        function x() {
            var a = this.spritzerController.getSpeed();
            return a <= 0 && (a = 250),
            a
        }
        function y(a, b) {
            var c = x.call(this);
            z(a, c),
            A(a, b, c),
            D.call(this, a, b),
            E.call(this, a, b)
        }
        function z(a, b) {
            B(a.controls.totalTime, i.utils.timeToString(a.getTotalTotalTime(b))),
            B(a.controls.remainingTime, i.utils.timeToString(a.getTotalRemainingTime(b)))
        }
        function A(a, b, c) {
            var d = a.getControls(b)
              , e = i.utils.timeToString(a.getTotalTime(b, c));
            B(d.totalTime, e),
            C(d.chapterElement, "Total Time: " + e);
            var f = i.utils.timeToString(a.getRemainingTime(b, c));
            B(d.remainingTime, f),
            C(d.bookmarkElement, "Remaining Time: " + f)
        }
        function B(a, b) {
            null !== a && (a.textContent = b)
        }
        function C(a, b) {
            null !== a && (a.title = b)
        }
        function D(a, b) {
            a.hasBookmark(b) ? G.addClass(a.getControls(b).bookmarkElement, this.options.bookmarkImage) : G.removeClass(a.getControls(b).bookmarkElement, this.options.bookmarkImage)
        }
        function E(a, b) {
            var c = a.getControls(b);
            a.isCompleted(b) ? (G.addClass(c.bookmarkElement, this.options.checkmarkImage),
            G.addClass(c.chapterElement, this.options.chapterCompleted),
            G.addClass(c.totalTime, this.options.chapterCompleted),
            G.addClass(c.remainingTime, this.options.chapterCompleted)) : (G.removeClass(c.bookmarkElement, this.options.checkmarkImage),
            G.removeClass(c.chapterElement, this.options.chapterCompleted),
            G.removeClass(c.totalTime, this.options.chapterCompleted),
            G.removeClass(c.remainingTime, this.options.chapterCompleted))
        }
        function F(a) {
            var b = {
                book: ".spritz-book",
                bookTitle: ".book-title",
                bookChapter: ".book-chapter",
                bookName: ".book-name",
                totalTime: ".total-time",
                remainingTime: ".remaining-time",
                statusImage: ".status-image",
                chapterName: ".chapter-name",
                bookmarkImage: "bookmark-image",
                checkmarkImage: "checkmark-image",
                chapterCompleted: "chapter-completed",
                textHighlighter: "text-highlighter"
            };
            return "object" == typeof a ? G.extend({}, b, a) : b
        }
        var G = i.helper;
        return {
            BookController: a
        }
    }),
    i.addToNamespace(i.bookmark, function() {
        function a() {
            var a = localStorage.getItem(this.storageKey);
            this.bookmarkData = null !== a && void 0 !== a ? JSON.parse(a) : null
        }
        function b() {
            localStorage.setItem(this.storageKey, JSON.stringify(this.bookmarkData))
        }
        function c() {
            var a = {};
            return a.createTime = (new Date).getTime(),
            a.updateTime = null,
            a.chapterPositions = {},
            a
        }
        var d = function(b, c) {
            this.bookmarkData = null,
            this.controls = c,
            this.storageKey = "spritz.bookmark." + b,
            this.chapters = {},
            a.call(this)
        };
        return d.prototype.addChapter = function(a, b, c) {
            this.chapters[a] = {
                content: b,
                controls: c
            }
        }
        ,
        d.prototype.getChapters = function() {
            return this.chapters
        }
        ,
        d.prototype.getContent = function(a) {
            return this.chapters[a].content
        }
        ,
        d.prototype.getControls = function(a) {
            return this.chapters[a].controls
        }
        ,
        d.prototype.getPosition = function(a) {
            var b = null;
            return null != this.bookmarkData && void 0 === (b = this.bookmarkData.chapterPositions[a]) && (b = 0),
            b
        }
        ,
        d.prototype.setPosition = function(a, d) {
            null == this.bookmarkData && (this.bookmarkData = c()),
            this.bookmarkData.updateTime = (new Date).getTime(),
            this.bookmarkData.chapterPositions[a] = d,
            b.call(this)
        }
        ,
        d.prototype.isCompleted = function(a) {
            var b = this.getContent(a).text;
            return null !== b && b.getWordCount() > 0 && this.getPosition(a) >= b.getWordCount()
        }
        ,
        d.prototype.setCompleted = function(a) {
            this.setPosition(a, this.getContent(a).text.getWordCount())
        }
        ,
        d.prototype.hasBookmark = function(a) {
            var b = this.getPosition(a)
              , c = this.getContent(a);
            return b > 0 && b < c.text.getWordCount()
        }
        ,
        d.prototype.getTotalTime = function(a, b) {
            var c = 0
              , d = this.getContent(a);
            if (null !== d) {
                var e = d.text;
                null !== e && void 0 !== e && (c = e.getTotalTime(b))
            }
            return c
        }
        ,
        d.prototype.getTotalTotalTime = function(a) {
            var b = 0;
            for (var c in this.chapters)
                this.chapters.hasOwnProperty(c) && (b += this.getTotalTime(c, a));
            return b
        }
        ,
        d.prototype.getRemainingTime = function(a, b) {
            var c = 0
              , d = this.getContent(a);
            if (null !== d) {
                var e = d.text;
                null !== e && void 0 !== e && (c = this.isCompleted(a) ? 0 : e.calculateTime(b, this.getPosition(a)))
            }
            return c
        }
        ,
        d.prototype.getTotalRemainingTime = function(a) {
            var b = 0;
            for (var c in this.chapters)
                this.chapters.hasOwnProperty(c) && (b += this.getRemainingTime(c, a));
            return b
        }
        ,
        {
            BookStore: d
        }
    });
    var l = {};
    l.math = {},
    l.math.Long = function(a, b) {
        this.low_ = 0 | a,
        this.high_ = 0 | b
    }
    ,
    l.math.Long.IntCache_ = {},
    l.math.Long.fromInt = function(a) {
        if (-128 <= a && a < 128) {
            var b = l.math.Long.IntCache_[a];
            if (b)
                return b
        }
        var c = new l.math.Long(0 | a,a < 0 ? -1 : 0);
        return -128 <= a && a < 128 && (l.math.Long.IntCache_[a] = c),
        c
    }
    ,
    l.math.Long.fromNumber = function(a) {
        return isNaN(a) || !isFinite(a) ? l.math.Long.ZERO : a <= -l.math.Long.TWO_PWR_63_DBL_ ? l.math.Long.MIN_VALUE : a + 1 >= l.math.Long.TWO_PWR_63_DBL_ ? l.math.Long.MAX_VALUE : a < 0 ? l.math.Long.fromNumber(-a).negate() : new l.math.Long(a % l.math.Long.TWO_PWR_32_DBL_ | 0,a / l.math.Long.TWO_PWR_32_DBL_ | 0)
    }
    ,
    l.math.Long.fromBits = function(a, b) {
        return new l.math.Long(a,b)
    }
    ,
    l.math.Long.fromString = function(a, b) {
        if (0 == a.length)
            throw Error("number format error: empty string");
        var c = b || 10;
        if (c < 2 || 36 < c)
            throw Error("radix out of range: " + c);
        if ("-" == a.charAt(0))
            return l.math.Long.fromString(a.substring(1), c).negate();
        if (a.indexOf("-") >= 0)
            throw Error('number format error: interior "-" character: ' + a);
        for (var d = l.math.Long.fromNumber(Math.pow(c, 8)), e = l.math.Long.ZERO, f = 0; f < a.length; f += 8) {
            var g = Math.min(8, a.length - f)
              , h = parseInt(a.substring(f, f + g), c);
            if (g < 8) {
                var i = l.math.Long.fromNumber(Math.pow(c, g));
                e = e.multiply(i).add(l.math.Long.fromNumber(h))
            } else
                e = e.multiply(d),
                e = e.add(l.math.Long.fromNumber(h))
        }
        return e
    }
    ,
    l.math.Long.TWO_PWR_16_DBL_ = 65536,
    l.math.Long.TWO_PWR_24_DBL_ = 1 << 24,
    l.math.Long.TWO_PWR_32_DBL_ = l.math.Long.TWO_PWR_16_DBL_ * l.math.Long.TWO_PWR_16_DBL_,
    l.math.Long.TWO_PWR_31_DBL_ = l.math.Long.TWO_PWR_32_DBL_ / 2,
    l.math.Long.TWO_PWR_48_DBL_ = l.math.Long.TWO_PWR_32_DBL_ * l.math.Long.TWO_PWR_16_DBL_,
    l.math.Long.TWO_PWR_64_DBL_ = l.math.Long.TWO_PWR_32_DBL_ * l.math.Long.TWO_PWR_32_DBL_,
    l.math.Long.TWO_PWR_63_DBL_ = l.math.Long.TWO_PWR_64_DBL_ / 2,
    l.math.Long.ZERO = l.math.Long.fromInt(0),
    l.math.Long.ONE = l.math.Long.fromInt(1),
    l.math.Long.NEG_ONE = l.math.Long.fromInt(-1),
    l.math.Long.MAX_VALUE = l.math.Long.fromBits(-1, 2147483647),
    l.math.Long.MIN_VALUE = l.math.Long.fromBits(0, -2147483648),
    l.math.Long.TWO_PWR_24_ = l.math.Long.fromInt(1 << 24),
    l.math.Long.prototype.toInt = function() {
        return this.low_
    }
    ,
    l.math.Long.prototype.toNumber = function() {
        return this.high_ * l.math.Long.TWO_PWR_32_DBL_ + this.getLowBitsUnsigned()
    }
    ,
    l.math.Long.prototype.toString = function(a) {
        var b = a || 10;
        if (b < 2 || 36 < b)
            throw Error("radix out of range: " + b);
        if (this.isZero())
            return "0";
        if (this.isNegative()) {
            if (this.equals(l.math.Long.MIN_VALUE)) {
                var c = l.math.Long.fromNumber(b)
                  , d = this.div(c)
                  , e = d.multiply(c).subtract(this);
                return d.toString(b) + e.toInt().toString(b)
            }
            return "-" + this.negate().toString(b)
        }
        for (var f = l.math.Long.fromNumber(Math.pow(b, 6)), e = this, g = ""; ; ) {
            var h = e.div(f)
              , i = e.subtract(h.multiply(f)).toInt()
              , j = i.toString(b);
            if (e = h,
            e.isZero())
                return j + g;
            for (; j.length < 6; )
                j = "0" + j;
            g = "" + j + g
        }
    }
    ,
    l.math.Long.prototype.getHighBits = function() {
        return this.high_
    }
    ,
    l.math.Long.prototype.getLowBits = function() {
        return this.low_
    }
    ,
    l.math.Long.prototype.getLowBitsUnsigned = function() {
        return this.low_ >= 0 ? this.low_ : l.math.Long.TWO_PWR_32_DBL_ + this.low_
    }
    ,
    l.math.Long.prototype.getNumBitsAbs = function() {
        if (this.isNegative())
            return this.equals(l.math.Long.MIN_VALUE) ? 64 : this.negate().getNumBitsAbs();
        for (var a = 0 != this.high_ ? this.high_ : this.low_, b = 31; b > 0 && 0 == (a & 1 << b); b--)
            ;
        return 0 != this.high_ ? b + 33 : b + 1
    }
    ,
    l.math.Long.prototype.isZero = function() {
        return 0 == this.high_ && 0 == this.low_
    }
    ,
    l.math.Long.prototype.isNegative = function() {
        return this.high_ < 0
    }
    ,
    l.math.Long.prototype.isOdd = function() {
        return 1 == (1 & this.low_)
    }
    ,
    l.math.Long.prototype.equals = function(a) {
        return this.high_ == a.high_ && this.low_ == a.low_
    }
    ,
    l.math.Long.prototype.notEquals = function(a) {
        return this.high_ != a.high_ || this.low_ != a.low_
    }
    ,
    l.math.Long.prototype.lessThan = function(a) {
        return this.compare(a) < 0
    }
    ,
    l.math.Long.prototype.lessThanOrEqual = function(a) {
        return this.compare(a) <= 0
    }
    ,
    l.math.Long.prototype.greaterThan = function(a) {
        return this.compare(a) > 0
    }
    ,
    l.math.Long.prototype.greaterThanOrEqual = function(a) {
        return this.compare(a) >= 0
    }
    ,
    l.math.Long.prototype.compare = function(a) {
        if (this.equals(a))
            return 0;
        var b = this.isNegative()
          , c = a.isNegative();
        return b && !c ? -1 : !b && c ? 1 : this.subtract(a).isNegative() ? -1 : 1
    }
    ,
    l.math.Long.prototype.negate = function() {
        return this.equals(l.math.Long.MIN_VALUE) ? l.math.Long.MIN_VALUE : this.not().add(l.math.Long.ONE)
    }
    ,
    l.math.Long.prototype.add = function(a) {
        var b = this.high_ >>> 16
          , c = 65535 & this.high_
          , d = this.low_ >>> 16
          , e = 65535 & this.low_
          , f = a.high_ >>> 16
          , g = 65535 & a.high_
          , h = a.low_ >>> 16
          , i = 65535 & a.low_
          , j = 0
          , k = 0
          , m = 0
          , n = 0;
        return n += e + i,
        m += n >>> 16,
        n &= 65535,
        m += d + h,
        k += m >>> 16,
        m &= 65535,
        k += c + g,
        j += k >>> 16,
        k &= 65535,
        j += b + f,
        j &= 65535,
        l.math.Long.fromBits(m << 16 | n, j << 16 | k)
    }
    ,
    l.math.Long.prototype.subtract = function(a) {
        return this.add(a.negate())
    }
    ,
    l.math.Long.prototype.multiply = function(a) {
        if (this.isZero())
            return l.math.Long.ZERO;
        if (a.isZero())
            return l.math.Long.ZERO;
        if (this.equals(l.math.Long.MIN_VALUE))
            return a.isOdd() ? l.math.Long.MIN_VALUE : l.math.Long.ZERO;
        if (a.equals(l.math.Long.MIN_VALUE))
            return this.isOdd() ? l.math.Long.MIN_VALUE : l.math.Long.ZERO;
        if (this.isNegative())
            return a.isNegative() ? this.negate().multiply(a.negate()) : this.negate().multiply(a).negate();
        if (a.isNegative())
            return this.multiply(a.negate()).negate();
        if (this.lessThan(l.math.Long.TWO_PWR_24_) && a.lessThan(l.math.Long.TWO_PWR_24_))
            return l.math.Long.fromNumber(this.toNumber() * a.toNumber());
        var b = this.high_ >>> 16
          , c = 65535 & this.high_
          , d = this.low_ >>> 16
          , e = 65535 & this.low_
          , f = a.high_ >>> 16
          , g = 65535 & a.high_
          , h = a.low_ >>> 16
          , i = 65535 & a.low_
          , j = 0
          , k = 0
          , m = 0
          , n = 0;
        return n += e * i,
        m += n >>> 16,
        n &= 65535,
        m += d * i,
        k += m >>> 16,
        m &= 65535,
        m += e * h,
        k += m >>> 16,
        m &= 65535,
        k += c * i,
        j += k >>> 16,
        k &= 65535,
        k += d * h,
        j += k >>> 16,
        k &= 65535,
        k += e * g,
        j += k >>> 16,
        k &= 65535,
        j += b * i + c * h + d * g + e * f,
        j &= 65535,
        l.math.Long.fromBits(m << 16 | n, j << 16 | k)
    }
    ,
    l.math.Long.prototype.div = function(a) {
        if (a.isZero())
            throw Error("division by zero");
        if (this.isZero())
            return l.math.Long.ZERO;
        if (this.equals(l.math.Long.MIN_VALUE)) {
            if (a.equals(l.math.Long.ONE) || a.equals(l.math.Long.NEG_ONE))
                return l.math.Long.MIN_VALUE;
            if (a.equals(l.math.Long.MIN_VALUE))
                return l.math.Long.ONE;
            var b = this.shiftRight(1)
              , c = b.div(a).shiftLeft(1);
            if (c.equals(l.math.Long.ZERO))
                return a.isNegative() ? l.math.Long.ONE : l.math.Long.NEG_ONE;
            var d = this.subtract(a.multiply(c));
            return c.add(d.div(a))
        }
        if (a.equals(l.math.Long.MIN_VALUE))
            return l.math.Long.ZERO;
        if (this.isNegative())
            return a.isNegative() ? this.negate().div(a.negate()) : this.negate().div(a).negate();
        if (a.isNegative())
            return this.div(a.negate()).negate();
        for (var e = l.math.Long.ZERO, d = this; d.greaterThanOrEqual(a); ) {
            for (var c = Math.max(1, Math.floor(d.toNumber() / a.toNumber())), f = Math.ceil(Math.log(c) / Math.LN2), g = f <= 48 ? 1 : Math.pow(2, f - 48), h = l.math.Long.fromNumber(c), i = h.multiply(a); i.isNegative() || i.greaterThan(d); )
                c -= g,
                h = l.math.Long.fromNumber(c),
                i = h.multiply(a);
            h.isZero() && (h = l.math.Long.ONE),
            e = e.add(h),
            d = d.subtract(i)
        }
        return e
    }
    ,
    l.math.Long.prototype.modulo = function(a) {
        return this.subtract(this.div(a).multiply(a))
    }
    ,
    l.math.Long.prototype.not = function() {
        return l.math.Long.fromBits(~this.low_, ~this.high_)
    }
    ,
    l.math.Long.prototype.and = function(a) {
        return l.math.Long.fromBits(this.low_ & a.low_, this.high_ & a.high_)
    }
    ,
    l.math.Long.prototype.or = function(a) {
        return l.math.Long.fromBits(this.low_ | a.low_, this.high_ | a.high_)
    }
    ,
    l.math.Long.prototype.xor = function(a) {
        return l.math.Long.fromBits(this.low_ ^ a.low_, this.high_ ^ a.high_)
    }
    ,
    l.math.Long.prototype.shiftLeft = function(a) {
        if (0 == (a &= 63))
            return this;
        var b = this.low_;
        if (a < 32) {
            var c = this.high_;
            return l.math.Long.fromBits(b << a, c << a | b >>> 32 - a)
        }
        return l.math.Long.fromBits(0, b << a - 32)
    }
    ,
    l.math.Long.prototype.shiftRight = function(a) {
        if (0 == (a &= 63))
            return this;
        var b = this.high_;
        if (a < 32) {
            var c = this.low_;
            return l.math.Long.fromBits(c >>> a | b << 32 - a, b >> a)
        }
        return l.math.Long.fromBits(b >> a - 32, b >= 0 ? 0 : -1)
    }
    ,
    l.math.Long.prototype.shiftRightUnsigned = function(a) {
        if (0 == (a &= 63))
            return this;
        var b = this.high_;
        if (a < 32) {
            var c = this.low_;
            return l.math.Long.fromBits(c >>> a | b << 32 - a, b >>> a)
        }
        return 32 == a ? l.math.Long.fromBits(b, 0) : l.math.Long.fromBits(b >>> a - 32, 0)
    }
    ,
    i.helper.dispatchEvent(c, "spritz_loaded_internal"),
    i.readyState = "loaded",
    i.helper.dispatchEvent(c, "spritz_loaded"),
    "complete" === i.initState ? (i.readyState = "complete",
    i.helper.dispatchEvent(c, "spritz_ready")) : c.addEventListener("spritz_initialized_internal", function() {
        i.readyState = "complete",
        i.helper.dispatchEvent(c, "spritz_ready")
    })
}(window.SPRITZ = window.SPRITZ || {}, window, document);
