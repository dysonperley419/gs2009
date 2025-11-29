function N(h, k, r) {
var u = "on" + k;
    if (h.addEventListener) {
        h.addEventListener(k, r, false)
    } else if (h.attachEvent) {
        h.attachEvent(u, r)
    } else {
        var M = h[u];
        h[u] = function() {
            var x = M.apply(this, arguments),
                t = r.apply(this, arguments);
            return x == undefined ? t : (t == undefined ? x : t && x)
            }
        }
    };
    window.google.ac = {};
    (function() {
        var h = window,
            k = document,
            r = h.google.ac,
            u, M, x, t, o, fa, ha = "",
            I = null,
            A = null,
            v = null,
            E = -1,
            O, f, p, w, C = null,
            q = null,
            s, J, ia = {},
            l = null,
            P, K, F = 0,
            L = 0,
            Q = 0,
            B = null,
            R, G = false,
            S = false,
            X = navigator.userAgent.toLowerCase(),
            ja = X.indexOf("opera") != -1,
            Y = X.indexOf("msie") != -1 && !ja,
            ka = false; {
            var Z = / applewebkit\/(\d+)/.exec(X);
            if (Z) ka = Z.length > 1 && Z[1] < 500
        }
        var T = null;
        r.InstallAC = function(a, b, c, e, d, g, i, j, D) {
            u = d || "en";
            r.install(a, b, e, D, null)
        };
        r.install = function(a, b, c, e, d) {
            O = a;
            f = b;
            c = c || "search";
            M = e;
            T = d;
            x = wa() == null && !M;
            u = u || h.google.kHL;
            R = /^(zh-(CN|TW)|ja|ko)$/.test(u);
            K = "/complete/" + c;
            P = K + "?hl=" + ua(u) + "&client=suggest";
            if (x) {
                ea("qu", "", 0, K, null, null)
            }
            O.onsubmit = ta;
            f.autocomplete = "off";
            N(f, "blur", ya);
            N(f, "beforedeactivate", za);
            if (f.addEventListener) {
                f.onkeypress = ma;
                f.onkeyup = na
            } else {
                N(f, Y ? "keydown" : "keypress", ma);
                N(f, "keyup", na)
            }
            o = (fa = (t = f.value));
            p = n("table");
            p.id = "completeTable";
            p.cellSpacing = (p.cellPadding = "0");
            w = p.style;
            y(p, "mAutoComplete");
            H();
            m(k.body, p);
            if (Y) {
                C = n("iframe");
                q = C.style;
                C.id = "completeIFrame";
                q.zIndex = "1";
                q.position = "absolute";
                q.display = "block";
                q.borderWidth = 0;
                m(k.body, C)
            }
            U();
            sa("", [], []);
            xa();
            if (x) {
                var g = n("div"),
                    i = g.style;
                i.visibility = "hidden";
                i.position = "absolute";
                i.left = "0";
                i.top = "-10000";
                i.width = (i.height = "0");
                var j = n("iframe");
                j.name = "completionFrame";
                j.id = "completionFrame";
                j.src = P;
                m(g, j);
                m(k.body, g)
            }
            N(h, "resize", function() {
                U()
            });
            if (R) {
                h.setInterval(Fa, 10)
            }
            s = la("aq");
            J = la("oq");
            ca()
        };

        function xa() {
            var a = k.body.dir == "rtl",
                b = a ? "right" : "left",
                c = a ? "left" : "right",
                e = k.getElementsByTagName("head")[0],
                d = function(g, i) {
                    if (!k.styleSheets || ka) {
                        var j = n("style"),
                            D = k.createTextNode(g + " { " + i + " }");
                        m(j, D);
                        m(e, j)
                    } else {
                        if (k.styleSheets.length == 0) {
                            var j = n("style");
                            m(e, j)
                        }
                        var z = k.styleSheets[0];
                        if (z.insertRule) {
                            z.insertRule(g + " { " + i + " }", z.cssRules.length)
                        } else if (z.addRule) {
                            z.addRule(g, i)
                        }
                    }
                };
            d(".mAutoComplete", "font-size:13px;font-family:arial,sans-serif;cursor:default;line-height:17px;border:1px solid black;z-index:99;position:absolute;background-color:white;margin:0;");
            d(".aAutoComplete", "background-color:white;");
            d(".bAutoComplete", "background-color:#3366cc;color:white;");
            d(".cAutoComplete", "white-space:nowrap;overflow:hidden;text-align:" + b + ";padding-" + b + ":3px;" + (ja ? "padding-bottom:1px;" : ""));
            d(".dAutoComplete", "white-space:nowrap;overflow:hidden;font-size:10px;text-align:" + c + ";color:green;padding-" + b + ":3px;padding-" + c + ":3px;");
            d(".bAutoComplete td", "color:white;");
            d(".eAutoComplete td", "padding:0 3px 2px;text-align:" + c + ";font-size:10px;line-height:15px;");
            d(".eAutoComplete span", "color:blue;text-decoration:underline;cursor:pointer;")
        }

        function U() {
            if (p) {
                w.left = va(f, "offsetLeft") + "px";
                w.top = va(f, "offsetTop") + f.offsetHeight - 1 + "px";
                w.width = f.offsetWidth + "px";
                if (C) {
                    q.left = w.left;
                    q.top = w.top;
                    q.width = w.width;
                    q.height = p.offsetHeight + "px"
                }
            }
        }

        function n(a) {
            return k.createElement(a)
        }

        function m(a, b) {
            a.appendChild(b)
        }

        function la(a) {
            var b = n("input");
            b.type = "hidden";
            b.name = a;
            b.value = null;
            b.disabled = true;
            m(O, b);
            return b
        }

        function ya(a) {
            if (!G) {
                H()
            }
            G = false
        }

        function za(a) {
            if (G) {
                h.event.cancelBubble = true;
                h.event.returnValue = false
            }
            G = false
        }

        function ma(a) {
            var b = a.keyCode;
            if (!aa(b)) {
                return true
            }
            Q++;
            if (Q % 3 == 1) $(b);
            return false
        }

        function na(a) {
            var b = a.keyCode;
            if (!(R && aa(b)) && Q == 0) {
                $(b)
            }
            Q = 0;
            return false
        }

        function $(a) {
            if (R && aa(a)) Ga();
            if (f.value != t || a == 39) {
                o = f.value;
                if (a != 39) J.value = o
            }
            if (pa(a)) {
                ra(E + 1)
            } else if (oa(a)) {
                ra(E - 1)
            }
            U();
            if (ha != o && !B) {
                B = h.setTimeout(H, 500)
            }
            t = f.value;
            if (t == "" && !I) ca()
        }

        function oa(a) {
            return a == 38 || a == 63232
        }

        function pa(a) {
            return a == 40 || a == 63233
        }

        function aa(a) {
            return oa(a) || pa(a)
        }

        function Aa() {
            f.blur();
            s.value = "t";
            W(this.completeString);
            if (ta()) O.submit()
        }

        function qa() {
            if (S) return;
            if (v) y(v, "aAutoComplete");
            y(this, "bAutoComplete");
            v = this;
            for (var a = 0; a < A.length; a++) {
                if (A[a] == v) {
                    E = a;
                    break
                }
            }
        }

        function Ba() {
            if (S) {
                S = false;
                qa.call(this)
            }
        }

        function ra(a) {
            if (o != ha || !I) return;
            s.value = "t";
            if (!A || A.length <= 0) return;
            var b = A.length;
            if (T) b -= 1;
            ba();
            if (v) y(v, "aAutoComplete");
            if (a == b || a == -1) {
                E = -1;
                W(o);
                da();
                return
            } else if (a > b) {
                a = 0
            } else if (a < -1) {
                a = b - 1
            }
            E = a;
            v = A.item(a);
            y(v, "bAutoComplete");
            W(v.completeString)
        }

        function H() {
            if (B) {
                h.clearTimeout(B);
                B = null
            }
            w.visibility = "hidden";
            if (C) q.visibility = "hidden"
        }

        function ba() {
            w.visibility = "visible";
            if (C) q.visibility = "visible";
            U();
            S = true
        }
        r.Suggest_apply = function(a, b, c) {
            if (c.length == 0 || c[0] < 2) return;
            var e = [],
                d = [],
                g = c[0],
                i = Math.floor((c.length - 1) / g);
            for (var j = 0; j < i; j++) {
                e.push(c[j * g + 1]);
                d.push(c[j * g + 2])
            }
            V(a, b, e, d)
        };

        function V(a, b, c, e) {
            if (F > 0) F--;
            sa(b, c, e);
            if (b != o) return;
            if (B) {
                h.clearTimeout(B);
                B = null
            }
            ha = b;
            Da(p, c, e);
            E = -1;
            A = p.rows;
            if (A.length > 0) {
                ba()
            } else {
                H()
            }
        }
        r.sendRPCDone = V;
        r.jsonRPCDone = function(a) {
            var b;
            a.unshift(b);
            if (a.length >= 3) {
                if (a.length < 4) a.push([])
            }
            V.apply(null, a)
        };

        function sa(a, b, c) {
            ia[a] = [b, c]
        }

        function ta() {
            if (x) {
                ea("qu", "", 0, K, null, null)
            }
            H();
            s.disabled = (J.disabled = true);
            if (J.value != f.value) {
                s.value = "t";
                s.disabled = false;
                J.disabled = false
            } else if (s.value) {
                s.disabled = false
            } else if (L >= 3 || F >= 10) {
                s.value = "o";
                s.disabled = false
            }
            return true
        }

        function ca() {
            if (L >= 3) return false;
            if (fa != o) {
                var a = ua(o),
                    b = ia[o];
                if (b) {
                    V(null, o, b[0], b[1])
                } else {
                    F++;
                    if (M) {
                        var c = n("script");
                        c.setAttribute("type", "text/javascript");
                        c.setAttribute("charset", "utf-8");
                        c.setAttribute("id", "jsonpACScriptTag");
                        c.setAttribute("src", "/int/pull_autocomplete" + P + "&json=t&jsonp=window.google.ac.jsonRPCDone&hl=" + u + "&q=" + a);
                        var e = k.getElementById("jsonpACScriptTag"),
                            d = k.getElementsByTagName("head")[0];
                        if (e) d.removeChild(e);
                        m(d, c)
                    } else if (x) {
                        ea("qu", a, null, K, null, null);
                        h.frames.completionFrame.document.location.reload(true)
                    } else {
                        Ea(a)
                    }
                }
                da()
            }
            fa = o;
            var g = 100;
            for (var i = 1; i <= (F - 2) / 2; ++i) {
                g *= 2
            }
            g += 50;
            I = h.setTimeout(ca, g);
            return true
        }

        function ua(a) {
            if (encodeURIComponent) return encodeURIComponent(a);
            if (escape) return escape(a)
        }

        function W(a) {
            f.value = a;
            t = a
        }
        r.setFieldValue = W;

        function da() {
            f.focus()
        }

        function va(a, b) {
            var c = 0;
            while (a) {
                c += a[b];
                a = a.offsetParent
            }
            return c
        }

        function ea(a, b, c, e, d, g) {
            k.cookie = a + "=" + b + (c ? "; expires=" + c.toGMTString() : "") + (e ? "; path=" + e : "") + (d ? "; domain=" + d : "") + (g ? "; secure" : "")
        }

        function y(a, b) {
            a.className = b
        }

        function Ca(a) {
            var b = new RegExp("^[\\s\\u1100-\\u11FF\\u3040-\\u30FF\\u3130-\\u318F\\u31F0-\\u31FF\\u3400-\\u4DBF\\u4E00-\\u9FFF\\uAC00-\\uD7A3\\uF900-\\uFAFF\\uFF65-\\uFFDC]+$");
            return b.test(a)
        }

        function Da(a, b, c) {
            while (a.rows.length > 0) a.deleteRow(-1);
            for (var e = 0; e < b.length; ++e) {
                var d = a.insertRow(-1);
                d.onmousedown = Aa;
                d.onmouseover = qa;
                d.onmousemove = Ba;
                d.completeString = b[e];
                y(d, "aAutoComplete");
                var g = n("td");
                g.innerHTML = b[e];
                y(g, "cAutoComplete");
                if (Y && Ca(b[e])) {
                    g.style.paddingTop = "2px"
                }
                m(d, g);
                var i = n("td");
                i.innerHTML = c[e];
                y(i, "dAutoComplete");
                m(d, i)
            }
            if (T && b.length > 0) {
                var j = a.insertRow(-1);
                j.onmousedown = function(ga) {
                    if (ga && ga.stopPropagation) {
                        ga.stopPropagation();
                        ba();
                        f.focus()
                    } else {
                        G = true
                    }
                    return false
                };
                var D = n("td");
                D.colSpan = 2;
                y(j, "eAutoComplete");
                var z = n("span");
                m(j, D);
                m(D, z);
                z.innerHTML = T;
                z.onclick = function() {
                    H();
                    h.clearTimeout(I);
                    I = null;
                    s.value = "x"
                }
            }
        }

        function wa() {
            var a = null;
            try {
                a = new ActiveXObject("Msxml2.XMLHTTP")
            } catch (b) {
                try {
                    a = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (c) {
                    a = null
                }
            }
            if (!a && typeof XMLHttpRequest != "undefined") {
                a = new XMLHttpRequest
            }
            return a
        }

        function Ea(a) {
            if (l && l.readyState != 0 && l.readyState != 4) {
                l.abort()
            }
            l = wa();
            if (l) {
                l.open("GET", P + "&js=true&q=" + a, true);
                l.onreadystatechange = function() {
                    if (l.readyState == 4 && l.responseText) {
                        switch (l.status) {
                            case 403:
                                L = 1000;
                                break;
                            case 302:
                            case 500:
                            case 502:
                            case 503:
                                L++;
                                break;
                            case 200:
                                var b = l.responseText;
                                if (b.charAt(0) != "<" && (b.indexOf("sendRPCDone") != -1 || b.indexOf("Suggest_apply") != -1)) {
                                    if (b.match(/^\s*(sendRPCDone|Suggest_apply)/)) {
                                        b = "window.google.ac." + b.replace(/^\s+/, "")
                                    }
                                    eval(b)
                                } else {
                                    F--
                                }
                                default:
                                    L = 0;
                                break
                        }
                    }
                };
                l.send(null)
            }
        }

        function Fa() {
            var a = f.value;
            if (a != t) {
                $(0)
            }
            t = a
        }

    function Ga() {
        G = true;
        f.blur();
        h.setTimeout(da, 10)
    }
})();