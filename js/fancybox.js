(jQuery),
function(t, e, n, i) {
    "use strict";

    function o(t) {
        var e = n(t.currentTarget),
            i = t.data ? t.data.options : {},
            o = e.attr("data-fancybox") || "",
            r = 0,
            a = [];
        t.isDefaultPrevented() || (t.preventDefault(), o ? (r = (a = (a = i.selector ? n(i.selector) : t.data ? t.data.items : []).length ? a.filter('[data-fancybox="' + o + '"]') : n('[data-fancybox="' + o + '"]')).index(e)) < 0 && (r = 0) : a = [e], n.fancybox.open(a, i, r))
    }
    if (n) {
        if (n.fn.fancybox) return void("console" in t && console.log("fancyBox already initialized"));
        var r = { loop: !1, margin: [44, 0], gutter: 50, keyboard: !0, arrows: !0, infobar: !0, toolbar: !0, buttons: ["slideShow", "fullScreen", "thumbs", "share", "close"], idleTime: 3, smallBtn: "auto", protect: !1, modal: !1, image: { preload: "auto" }, ajax: { settings: { data: { fancybox: !0 } } }, iframe: { tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>', preload: !0, css: {}, attr: { scrolling: "auto" } }, defaultType: "image", animationEffect: "zoom", animationDuration: 500, zoomOpacity: "auto", transitionEffect: "fade", transitionDuration: 366, slideClass: "", baseClass: "", baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>', spinnerTpl: '<div class="fancybox-loading"></div>', errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>', btnTpl: { download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>', zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>', close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>', smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>', arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>', arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>' }, parentEl: "body", autoFocus: !1, backFocus: !0, trapFocus: !0, fullScreen: { autoStart: !1 }, touch: { vertical: !0, momentum: !0 }, hash: null, media: {}, slideShow: { autoStart: !1, speed: 4e3 }, thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" }, wheel: "auto", onInit: n.noop, beforeLoad: n.noop, afterLoad: n.noop, beforeShow: n.noop, afterShow: n.noop, beforeClose: n.noop, afterClose: n.noop, onActivate: n.noop, onDeactivate: n.noop, clickContent: function(t, e) { return "image" === t.type && "zoom" }, clickSlide: "close", clickOutside: "close", dblclickContent: !1, dblclickSlide: !1, dblclickOutside: !1, mobile: { idleTime: !1, margin: 0, clickContent: function(t, e) { return "image" === t.type && "toggleControls" }, clickSlide: function(t, e) { return "image" === t.type ? "toggleControls" : "close" }, dblclickContent: function(t, e) { return "image" === t.type && "zoom" }, dblclickSlide: function(t, e) { return "image" === t.type && "zoom" } }, lang: "en", i18n: { en: { CLOSE: "Close", NEXT: "Next", PREV: "Previous", ERROR: "The requested content cannot be loaded. <br/> Please try again later.", PLAY_START: "Start slideshow", PLAY_STOP: "Pause slideshow", FULL_SCREEN: "Full screen", THUMBS: "Thumbnails", DOWNLOAD: "Download", SHARE: "Share", ZOOM: "Zoom" }, de: { CLOSE: "Schliessen", NEXT: "Weiter", PREV: "Zur\xfcck", ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp\xe4ter nochmal.", PLAY_START: "Diaschau starten", PLAY_STOP: "Diaschau beenden", FULL_SCREEN: "Vollbild", THUMBS: "Vorschaubilder", DOWNLOAD: "Herunterladen", SHARE: "Teilen", ZOOM: "Ma\xdfstab" } } },
            a = n(t),
            s = n(e),
            l = 0,
            c = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) { return t.setTimeout(e, 1e3 / 60) },
            d = function() {
                var t, n = e.createElement("fakeelement"),
                    o = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
                for (t in o)
                    if (n.style[t] !== i) return o[t];
                return "transitionend"
            }(),
            u = function(t) { return t && t.length && t[0].offsetHeight },
            h = function(t, i, o) {
                var r = this;
                r.opts = n.extend(!0, { index: o }, n.fancybox.defaults, i || {}), n.fancybox.isMobile && (r.opts = n.extend(!0, {}, r.opts, r.opts.mobile)), i && n.isArray(i.buttons) && (r.opts.buttons = i.buttons), r.id = r.opts.id || ++l, r.group = [], r.currIndex = parseInt(r.opts.index, 10) || 0, r.prevIndex = null, r.prevPos = null, r.currPos = 0, r.firstRun = null, r.createGroup(t), r.group.length && (r.$lastFocus = n(e.activeElement).blur(), r.slides = {}, r.init())
            };
        n.extend(h.prototype, {
            init: function() {
                var o, r, a, l = this,
                    c = l.group[l.currIndex],
                    d = c.opts,
                    u = n.fancybox.scrollbarWidth;
                l.scrollTop = s.scrollTop(), l.scrollLeft = s.scrollLeft(), n.fancybox.getInstance() || (n("body").addClass("fancybox-active"), /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream ? "image" !== c.type && n("body").css("top", -1 * n("body").scrollTop()).addClass("fancybox-iosfix") : !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (u === i && (o = n('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"), u = n.fancybox.scrollbarWidth = o[0].offsetWidth - o[0].clientWidth, o.remove()), n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + u + "px; }</style>"), n("body").addClass("compensate-for-scrollbar"))), a = "", n.each(d.buttons, function(t, e) { a += d.btnTpl[e] || "" }), r = n(l.translate(l, d.baseTpl.replace("{{buttons}}", a).replace("{{arrows}}", d.btnTpl.arrowLeft + d.btnTpl.arrowRight))).attr("id", "fancybox-container-" + l.id).addClass("fancybox-is-hidden").addClass(d.baseClass).data("FancyBox", l).appendTo(d.parentEl), l.$refs = { container: r }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) { l.$refs[t] = r.find(".fancybox-" + t) }), l.trigger("onInit"), l.activate(), l.jumpTo(l.currIndex)
            },
            translate: function(t, e) { var n = t.opts.i18n[t.opts.lang]; return e.replace(/\{\{(\w+)\}\}/g, function(t, e) { var o = n[e]; return o === i ? t : o }) },
            createGroup: function(t) {
                var e = this,
                    o = n.makeArray(t);
                n.each(o, function(t, o) {
                    var r, a, s, l, c, d = {},
                        u = {};
                    n.isPlainObject(o) ? (d = o, u = o.opts || o) : "object" === n.type(o) && n(o).length ? (u = (r = n(o)).data(), (u = n.extend({}, u, u.options || {})).$orig = r, d.src = u.src || r.attr("href"), d.type || d.src || (d.type = "inline", d.src = o)) : d = { type: "html", src: o + "" }, d.opts = n.extend(!0, {}, e.opts, u), n.isArray(u.buttons) && (d.opts.buttons = u.buttons), a = d.type || d.opts.type, l = d.src || "", !a && l && (l.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : l.match(/\.(pdf)((\?|#).*)?$/i) ? a = "pdf" : (s = l.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)) ? (a = "video", d.opts.videoFormat || (d.opts.videoFormat = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : "#" === l.charAt(0) && (a = "inline")), a ? d.type = a : e.trigger("objectNeedsType", d), d.index = e.group.length, d.opts.$orig && !d.opts.$orig.length && delete d.opts.$orig, !d.opts.$thumb && d.opts.$orig && (d.opts.$thumb = d.opts.$orig.find("img:first")), d.opts.$thumb && !d.opts.$thumb.length && delete d.opts.$thumb, "function" === n.type(d.opts.caption) && (d.opts.caption = d.opts.caption.apply(o, [e, d])), "function" === n.type(e.opts.caption) && (d.opts.caption = e.opts.caption.apply(o, [e, d])), d.opts.caption instanceof n || (d.opts.caption = d.opts.caption === i ? "" : d.opts.caption + ""), "ajax" === a && (c = l.split(/\s+/, 2)).length > 1 && (d.src = c.shift(), d.opts.filter = c.shift()), "auto" == d.opts.smallBtn && (n.inArray(a, ["html", "inline", "ajax"]) > -1 ? (d.opts.toolbar = !1, d.opts.smallBtn = !0) : d.opts.smallBtn = !1), "pdf" === a && (d.type = "iframe", d.opts.iframe.preload = !1), d.opts.modal && (d.opts = n.extend(!0, d.opts, { infobar: 0, toolbar: 0, smallBtn: 0, keyboard: 0, slideShow: 0, fullScreen: 0, thumbs: 0, touch: 0, clickContent: !1, clickSlide: !1, clickOutside: !1, dblclickContent: !1, dblclickSlide: !1, dblclickOutside: !1 })), e.group.push(d)
                })
            },
            addEvents: function() {
                var i = this;
                i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) { t.stopPropagation(), t.preventDefault(), i.close(t) }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(t) { t.stopPropagation(), t.preventDefault(), i.previous() }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(t) { t.stopPropagation(), t.preventDefault(), i.next() }).on("click.fb", "[data-fancybox-zoom]", function(t) { i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]() }), a.on("orientationchange.fb resize.fb", function(t) { t && t.originalEvent && "resize" === t.originalEvent.type ? c(function() { i.update() }) : (i.$refs.stage.hide(), setTimeout(function() { i.$refs.stage.show(), i.update() }, 600)) }), s.on("focusin.fb", function(t) {
                    var o = n.fancybox ? n.fancybox.getInstance() : null;
                    o.isClosing || !o.current || !o.current.opts.trapFocus || n(t.target).hasClass("fancybox-container") || n(t.target).is(e) || o && "fixed" !== n(t.target).css("position") && !o.$refs.container.has(t.target).length && (t.stopPropagation(), o.focus(), a.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))
                }), s.on("keydown.fb", function(t) {
                    var e = i.current,
                        o = t.keyCode || t.which;
                    if (e && e.opts.keyboard && !n(t.target).is("input") && !n(t.target).is("textarea")) return 8 === o || 27 === o ? (t.preventDefault(), void i.close(t)) : 37 === o || 38 === o ? (t.preventDefault(), void i.previous()) : 39 === o || 40 === o ? (t.preventDefault(), void i.next()) : void i.trigger("afterKeydown", t, o)
                }), i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0, s.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) { i.idleSecondsCounter = 0, i.isIdle && i.showControls(), i.isIdle = !1 }), i.idleInterval = t.setInterval(function() { i.idleSecondsCounter++, i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && !i.isDragging && (i.isIdle = !0, i.idleSecondsCounter = 0, i.hideControls()) }, 1e3))
            },
            removeEvents: function() {
                var e = this;
                a.off("orientationchange.fb resize.fb"), s.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
            },
            previous: function(t) { return this.jumpTo(this.currPos - 1, t) },
            next: function(t) { return this.jumpTo(this.currPos + 1, t) },
            jumpTo: function(t, e, o) {
                var r, a, s, l, c, d, h, p = this,
                    f = p.group.length;
                if (!(p.isDragging || p.isClosing || p.isAnimating && p.firstRun)) {
                    if (t = parseInt(t, 10), !(a = p.current ? p.current.opts.loop : p.opts.loop) && (t < 0 || t >= f)) return !1;
                    if (r = p.firstRun = null === p.firstRun, !(f < 2 && !r && p.isDragging)) {
                        if (l = p.current, p.prevIndex = p.currIndex, p.prevPos = p.currPos, s = p.createSlide(t), f > 1 && ((a || s.index > 0) && p.createSlide(t - 1), (a || s.index < f - 1) && p.createSlide(t + 1)), p.current = s, p.currIndex = s.index, p.currPos = s.pos, p.trigger("beforeShow", r), p.updateControls(), d = n.fancybox.getTranslate(s.$slide), s.isMoved = (0 !== d.left || 0 !== d.top) && !s.$slide.hasClass("fancybox-animated"), s.forcedDuration = i, n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[r ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), r) return s.opts.animationEffect && e && p.$refs.container.css("transition-duration", e + "ms"), p.$refs.container.removeClass("fancybox-is-hidden"), u(p.$refs.container), p.$refs.container.addClass("fancybox-is-open"), s.$slide.addClass("fancybox-slide--current"), p.loadSlide(s), void p.preload("image");
                        n.each(p.slides, function(t, e) { n.fancybox.stop(e.$slide) }), s.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), s.isMoved ? (c = Math.round(s.$slide.width()), n.each(p.slides, function(t, i) {
                            var o = i.pos - s.pos;
                            n.fancybox.animate(i.$slide, { top: 0, left: o * c + o * i.opts.gutter }, e, function() { i.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), i.pos === p.currPos && (s.isMoved = !1, p.complete()) })
                        })) : p.$refs.stage.children().removeAttr("style"), s.isLoaded ? p.revealContent(s) : p.loadSlide(s), p.preload("image"), l.pos !== s.pos && (h = "fancybox-slide--" + (l.pos > s.pos ? "next" : "previous"), l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), l.isComplete = !1, e && (s.isMoved || s.opts.transitionEffect) && (s.isMoved ? l.$slide.addClass(h) : n.fancybox.animate(l.$slide, h = "fancybox-animated " + h + " fancybox-fx-" + s.opts.transitionEffect, e, function() { l.$slide.removeClass(h).removeAttr("style") })))
                    }
                }
            },
            createSlide: function(t) { var e, i, o = this; return i = (i = t % o.group.length) < 0 ? o.group.length + i : i, !o.slides[t] && o.group[i] && (e = n('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage), o.slides[t] = n.extend(!0, {}, o.group[i], { pos: t, $slide: e, isLoaded: !1 }), o.updateSlide(o.slides[t])), o.slides[t] },
            scaleToActual: function(t, e, o) {
                var r, a, s, l, c, d = this,
                    u = d.current,
                    h = u.$content,
                    p = parseInt(u.$slide.width(), 10),
                    f = parseInt(u.$slide.height(), 10),
                    g = u.width,
                    m = u.height;
                "image" != u.type || u.hasError || !h || d.isAnimating || (n.fancybox.stop(h), d.isAnimating = !0, t = t === i ? .5 * p : t, e = e === i ? .5 * f : e, l = g / (r = n.fancybox.getTranslate(h)).width, c = m / r.height, a = .5 * p - .5 * g, s = .5 * f - .5 * m, g > p && ((a = r.left * l - (t * l - t)) > 0 && (a = 0), a < p - g && (a = p - g)), m > f && ((s = r.top * c - (e * c - e)) > 0 && (s = 0), s < f - m && (s = f - m)), d.updateCursor(g, m), n.fancybox.animate(h, { top: s, left: a, scaleX: l, scaleY: c }, o || 330, function() { d.isAnimating = !1 }), d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop())
            },
            scaleToFit: function(t) {
                var e, i = this,
                    o = i.current,
                    r = o.$content;
                "image" != o.type || o.hasError || !r || i.isAnimating || (n.fancybox.stop(r), i.isAnimating = !0, e = i.getFitPos(o), i.updateCursor(e.width, e.height), n.fancybox.animate(r, { top: e.top, left: e.left, scaleX: e.width / r.width(), scaleY: e.height / r.height() }, t || 330, function() { i.isAnimating = !1 }))
            },
            getFitPos: function(t) {
                var e, i, o, r, a, s = t.$content,
                    l = t.width,
                    c = t.height,
                    d = t.opts.margin;
                return !(!s || !s.length || !l && !c) && ("number" === n.type(d) && (d = [d, d]), 2 == d.length && (d = [d[0], d[1], d[0], d[1]]), e = parseInt(this.$refs.stage.width(), 10) - (d[1] + d[3]), i = parseInt(this.$refs.stage.height(), 10) - (d[0] + d[2]), o = Math.min(1, e / l, i / c), r = Math.floor(o * l), a = Math.floor(o * c), { top: Math.floor(.5 * (i - a)) + d[0], left: Math.floor(.5 * (e - r)) + d[3], width: r, height: a })
            },
            update: function() {
                var t = this;
                n.each(t.slides, function(e, n) { t.updateSlide(n) })
            },
            updateSlide: function(t, e) {
                var i = this,
                    o = t && t.$content;
                o && (t.width || t.height) && (i.isAnimating = !1, n.fancybox.stop(o), n.fancybox.setTranslate(o, i.getFitPos(t)), t.pos === i.currPos && i.updateCursor()), t.$slide.trigger("refresh"), i.trigger("onUpdate", t)
            },
            centerSlide: function(t, e) {
                var o, r;
                this.current && (o = Math.round(t.$slide.width()), n.fancybox.animate(t.$slide, { top: 0, left: (r = t.pos - this.current.pos) * o + r * t.opts.gutter, opacity: 1 }, e === i ? 0 : e, null, !1))
            },
            updateCursor: function(t, e) {
                var n, o = this,
                    r = o.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                o.current && !o.isClosing && (o.isZoomable() ? (r.addClass("fancybox-is-zoomable"), n = t !== i && e !== i ? t < o.current.width && e < o.current.height : o.isScaledDown(), r.addClass(n ? "fancybox-can-zoomIn" : o.current.opts.touch ? "fancybox-can-drag" : "fancybox-can-zoomOut")) : o.current.opts.touch && r.addClass("fancybox-can-drag"))
            },
            isZoomable: function() {
                var t, e = this,
                    i = e.current;
                if (i && !e.isClosing) return !!("image" === i.type && i.isLoaded && !i.hasError && ("zoom" === i.opts.clickContent || n.isFunction(i.opts.clickContent) && "zoom" === i.opts.clickContent(i)) && (t = e.getFitPos(i), i.width > t.width || i.height > t.height))
            },
            isScaledDown: function() {
                var t = this.current,
                    e = t.$content,
                    i = !1;
                return e && (i = (i = n.fancybox.getTranslate(e)).width < t.width || i.height < t.height), i
            },
            canPan: function() {
                var t = this.current,
                    e = t.$content,
                    n = !1;
                return e && (n = this.getFitPos(t), n = Math.abs(e.width() - n.width) > 1 || Math.abs(e.height() - n.height) > 1), n
            },
            loadSlide: function(t) {
                var e, i, o, r = this;
                if (!t.isLoading && !t.isLoaded) {
                    switch (t.isLoading = !0, r.trigger("beforeLoad", t), e = t.type, (i = t.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(t.opts.slideClass), e) {
                        case "image":
                            r.setImage(t);
                            break;
                        case "iframe":
                            r.setIframe(t);
                            break;
                        case "html":
                            r.setContent(t, t.src || t.content);
                            break;
                        case "inline":
                            n(t.src).length ? r.setContent(t, n(t.src)) : r.setError(t);
                            break;
                        case "ajax":
                            r.showLoading(t), o = n.ajax(n.extend({}, t.opts.ajax.settings, { url: t.src, success: function(e, n) { "success" === n && r.setContent(t, e) }, error: function(e, n) { e && "abort" !== n && r.setError(t) } })), i.one("onReset", function() { o.abort() });
                            break;
                        case "video":
                            r.setContent(t, '<video controls><source src="' + t.src + '" type="' + t.opts.videoFormat + "\">Your browser doesn't support HTML5 video</video>");
                            break;
                        default:
                            r.setError(t)
                    }
                    return !0
                }
            },
            setImage: function(e) {
                var i, o, r, a, s = this,
                    l = e.opts.srcset || e.opts.image.srcset;
                if (l) { a = t.innerWidth * (r = t.devicePixelRatio || 1), (o = l.split(",").map(function(t) { var e = {}; return t.trim().split(/\s+/).forEach(function(t, n) { var i = parseInt(t.substring(0, t.length - 1), 10); return 0 === n ? e.url = t : void(i && (e.value = i, e.postfix = t[t.length - 1])) }), e })).sort(function(t, e) { return t.value - e.value }); for (var c = 0; c < o.length; c++) { var d = o[c]; if ("w" === d.postfix && d.value >= a || "x" === d.postfix && d.value >= r) { i = d; break } }!i && o.length && (i = o[o.length - 1]), i && (e.src = i.url, e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value, e.width = i.value)) }
                e.$content = n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide), !1 !== e.opts.preload && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = n("<img />").one("error", function() { n(this).remove(), e.$ghost = null, s.setBigImage(e) }).one("load", function() { s.afterLoad(e), s.setBigImage(e) }).addClass("fancybox-image").appendTo(e.$content).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : s.setBigImage(e)
            },
            setBigImage: function(t) {
                var e = this,
                    i = n("<img />");
                t.$image = i.one("error", function() { e.setError(t) }).one("load", function() { clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = t.opts.width || this.naturalWidth, t.height = t.opts.height || this.naturalHeight, t.opts.image.srcset && i.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.hideLoading(t), t.$ghost ? t.timouts = setTimeout(function() { t.timouts = null, t.$ghost.hide() }, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t)) }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i[0].complete || "complete" == i[0].readyState) && i[0].naturalWidth && i[0].naturalHeight ? i.trigger("load") : i[0].error ? i.trigger("error") : t.timouts = setTimeout(function() { i[0].complete || t.hasError || e.showLoading(t) }, 100)
            },
            setIframe: function(t) {
                var e, o = this,
                    r = t.opts.iframe,
                    a = t.$slide;
                t.$content = n('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>').css(r.css).appendTo(a), e = n(r.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(r.attr).appendTo(t.$content), r.preload ? (o.showLoading(t), e.on("load.fb error.fb", function(e) { this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t) }), a.on("refresh.fb", function() {
                    var n, o, a = t.$content,
                        s = r.css.width,
                        l = r.css.height;
                    if (1 === e[0].isReady) {
                        try { o = e.contents().find("body") } catch (t) {}
                        o && o.length && (s === i && (n = e[0].contentWindow.document.documentElement.scrollWidth, s = Math.ceil(o.outerWidth(!0) + (a.width() - n)), s += a.outerWidth() - a.innerWidth()), l === i && (l = Math.ceil(o.outerHeight(!0)), l += a.outerHeight() - a.innerHeight()), s && a.width(s), l && a.height(l)), a.removeClass("fancybox-is-hidden")
                    }
                })) : this.afterLoad(t), e.attr("src", t.src), !0 === t.opts.smallBtn && t.$content.prepend(o.translate(t, t.opts.btnTpl.smallBtn)), a.one("onReset", function() {
                    try { n(this).find("iframe").hide().attr("src", "//about:blank") } catch (t) {}
                    n(this).empty(), t.isLoaded = !1
                })
            },
            setContent: function(t, e) { this.isClosing || (this.hideLoading(t), t.$slide.empty(), e && e.hasOwnProperty && e instanceof n && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"), t.$placeholder = n("<div></div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && 3 === (e = n("<div>").append(n.trim(e)).contents())[0].nodeType && (e = n("<div>").html(e)), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() { n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1) }), t.$content = n(e).appendTo(t.$slide), this.afterLoad(t)) },
            setError: function(t) { t.hasError = !0, t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl)) },
            showLoading: function(t) {
                (t = t || this.current) && !t.$spinner && (t.$spinner = n(this.opts.spinnerTpl).appendTo(t.$slide))
            },
            hideLoading: function(t) {
                (t = t || this.current) && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
            },
            afterLoad: function(t) {
                var e = this;
                e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div,form").first())), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) { return 2 == t.button && t.preventDefault(), !0 }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t))
            },
            revealContent: function(t) {
                var e, o, r, a, s, l = this,
                    c = t.$slide,
                    d = !1;
                return e = t.opts[l.firstRun ? "animationEffect" : "transitionEffect"], r = t.opts[l.firstRun ? "animationDuration" : "transitionDuration"], r = parseInt(t.forcedDuration === i ? r : t.forcedDuration, 10), !t.isMoved && t.pos === l.currPos && r || (e = !1), "zoom" !== e || t.pos === l.currPos && r && "image" === t.type && !t.hasError && (d = l.getThumbPos(t)) || (e = "fade"), "zoom" === e ? ((s = l.getFitPos(t)).scaleX = s.width / d.width, s.scaleY = s.height / d.height, delete s.width, delete s.height, "auto" == (a = t.opts.zoomOpacity) && (a = Math.abs(t.width / t.height - d.width / d.height) > .1), a && (d.opacity = .1, s.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), d), u(t.$content), void n.fancybox.animate(t.$content, s, r, function() { l.complete() })) : (l.updateSlide(t), e ? (n.fancybox.stop(c), o = "fancybox-animated fancybox-slide--" + (t.pos >= l.prevPos ? "next" : "previous") + " fancybox-fx-" + e, c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(o), t.$content.removeClass("fancybox-is-hidden"), u(c), void n.fancybox.animate(c, "fancybox-slide--current", r, function(e) { c.removeClass(o).removeAttr("style"), t.pos === l.currPos && l.complete() }, !0)) : (u(c), t.$content.removeClass("fancybox-is-hidden"), void(t.pos === l.currPos && l.complete())))
            },
            getThumbPos: function(i) {
                var o, r = !1,
                    a = i.opts.$thumb,
                    s = a ? a.offset() : 0;
                return s && a[0].ownerDocument === e && function(e) {
                    for (var i = a[0], o = i.getBoundingClientRect(), r = []; null !== i.parentElement;) "hidden" !== n(i.parentElement).css("overflow") && "auto" !== n(i.parentElement).css("overflow") || r.push(i.parentElement.getBoundingClientRect()), i = i.parentElement;
                    return r.every(function(t) {
                        var e = Math.min(o.right, t.right) - Math.max(o.left, t.left),
                            n = Math.min(o.bottom, t.bottom) - Math.max(o.top, t.top);
                        return e > 0 && n > 0
                    }) && o.bottom > 0 && o.right > 0 && o.left < n(t).width() && o.top < n(t).height()
                }() && (o = this.$refs.stage.offset(), r = { top: s.top - o.top + parseFloat(a.css("border-top-width") || 0), left: s.left - o.left + parseFloat(a.css("border-left-width") || 0), width: a.width(), height: a.height(), scaleX: 1, scaleY: 1 }), r
            },
            complete: function() {
                var t = this,
                    i = t.current,
                    o = {};
                i.isMoved || !i.isLoaded || i.isComplete || (i.isComplete = !0, i.$slide.siblings().trigger("onReset"), t.preload("inline"), u(i.$slide), i.$slide.addClass("fancybox-slide--complete"), n.each(t.slides, function(e, i) { i.pos >= t.currPos - 1 && i.pos <= t.currPos + 1 ? o[i.pos] = i : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove()) }), t.slides = o, t.updateCursor(), t.trigger("afterShow"), i.$slide.find("video,audio").first().trigger("play"), (n(e.activeElement).is("[disabled]") || i.opts.autoFocus && "image" != i.type && "iframe" !== i.type) && t.focus())
            },
            preload: function(t) {
                var e = this,
                    n = e.slides[e.currPos + 1],
                    i = e.slides[e.currPos - 1];
                n && n.type === t && e.loadSlide(n), i && i.type === t && e.loadSlide(i)
            },
            focus: function() {
                var t, e = this.current;
                this.isClosing || (e && e.isComplete && ((t = e.$slide.find("input[autofocus]:enabled:visible:first")).length || (t = e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))), (t = t && t.length ? t : this.$refs.container).focus())
            },
            activate: function() {
                var t = this;
                n(".fancybox-container").each(function() {
                    var e = n(this).data("FancyBox");
                    e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
            },
            close: function(t, e) {
                var i, o, r, a, s, l, h = this,
                    p = h.current,
                    f = function() { h.cleanUp(t) };
                return !(h.isClosing || (h.isClosing = !0, !1 === h.trigger("beforeClose", t) ? (h.isClosing = !1, c(function() { h.update() }), 1) : (h.removeEvents(), p.timouts && clearTimeout(p.timouts), r = p.$content, i = p.opts.animationEffect, o = n.isNumeric(e) ? e : i ? p.opts.animationDuration : 0, p.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), p.$slide.siblings().trigger("onReset").remove(), o && h.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), h.hideLoading(p), h.hideControls(), h.updateCursor(), "zoom" !== i || !0 !== t && r && o && "image" === p.type && !p.hasError && (l = h.getThumbPos(p)) || (i = "fade"), "zoom" === i ? (n.fancybox.stop(r), s = n.fancybox.getTranslate(r), s.width = s.width * s.scaleX, s.height = s.height * s.scaleY, a = p.opts.zoomOpacity, "auto" == a && (a = Math.abs(p.width / p.height - l.width / l.height) > .1), a && (l.opacity = 0), s.scaleX = s.width / l.width, s.scaleY = s.height / l.height, s.width = l.width, s.height = l.height, n.fancybox.setTranslate(p.$content, s), u(p.$content), n.fancybox.animate(p.$content, l, o, f), 0) : (i && o ? !0 === t ? setTimeout(f, o) : n.fancybox.animate(p.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + i, o, f) : f(), 0))))
            },
            cleanUp: function(t) {
                var i, o, r = this,
                    s = n("body");
                r.current.$slide.trigger("onReset"), r.$refs.container.empty().remove(), r.trigger("afterClose", t), r.$lastFocus && r.current.opts.backFocus && r.$lastFocus.focus(), r.current = null, (i = n.fancybox.getInstance()) ? i.activate() : (a.scrollTop(r.scrollTop).scrollLeft(r.scrollLeft), s.removeClass("fancybox-active compensate-for-scrollbar"), s.hasClass("fancybox-iosfix") && (o = parseInt(e.body.style.top, 10), s.removeClass("fancybox-iosfix").css("top", "").scrollTop(-1 * o)), n("#fancybox-style-noscroll").remove())
            },
            trigger: function(t, e) {
                var i, o = Array.prototype.slice.call(arguments, 1),
                    r = this,
                    a = e && e.opts ? e : r.current;
                return a ? o.unshift(a) : a = r, o.unshift(r), n.isFunction(a.opts[t]) && (i = a.opts[t].apply(a, o)), !1 === i ? i : void("afterClose" !== t && r.$refs ? r.$refs.container.trigger(t + ".fb", o) : s.trigger(t + ".fb", o))
            },
            updateControls: function(t) {
                var e = this,
                    n = e.current,
                    i = n.index,
                    o = n.opts.caption,
                    r = e.$refs.container,
                    a = e.$refs.caption;
                n.$slide.trigger("refresh"), e.$caption = o && o.length ? a.html(o) : null, e.isHiddenControls || e.isIdle || e.showControls(), r.find("[data-fancybox-count]").html(e.group.length), r.find("[data-fancybox-index]").html(i + 1), r.find("[data-fancybox-prev]").prop("disabled", !n.opts.loop && i <= 0), r.find("[data-fancybox-next]").prop("disabled", !n.opts.loop && i >= e.group.length - 1), "image" === n.type ? r.find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : r.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
            },
            hideControls: function() { this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav") },
            showControls: function() {
                var t = this,
                    e = t.current ? t.current.opts : t.opts,
                    n = t.$refs.container;
                t.isHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
            },
            toggleControls: function() { this.isHiddenControls ? this.showControls() : this.hideControls() }
        }), n.fancybox = {
            version: "3.2.10",
            defaults: r,
            getInstance: function(t) {
                var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                    i = Array.prototype.slice.call(arguments, 1);
                return e instanceof h && ("string" === n.type(t) ? e[t].apply(e, i) : "function" === n.type(t) && t.apply(e, i), e)
            },
            open: function(t, e, n) { return new h(t, e, n) },
            close: function(t) {
                var e = this.getInstance();
                e && (e.close(), !0 === t && this.close())
            },
            destroy: function() { this.close(!0), s.off("click.fb-start") },
            isMobile: e.createTouch !== i && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: function() { var n = e.createElement("div"); return t.getComputedStyle && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11) }(),
            getTranslate: function(t) {
                var e;
                if (!t || !t.length) return !1;
                if ((e = (e = t.eq(0).css("transform")) && -1 !== e.indexOf("matrix") ? (e = (e = e.split("(")[1]).split(")")[0]).split(",") : []).length) e = (e = e.length > 10 ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]]).map(parseFloat);
                else {
                    e = [0, 0, 1, 1];
                    var n = /\.*translate\((.*)px,(.*)px\)/i.exec(t.eq(0).attr("style"));
                    n && (e[0] = parseFloat(n[2]), e[1] = parseFloat(n[1]))
                }
                return { top: e[0], left: e[1], scaleX: e[2], scaleY: e[3], opacity: parseFloat(t.css("opacity")), width: t.width(), height: t.height() }
            },
            setTranslate: function(t, e) {
                var n = "",
                    o = {};
                if (t && e) return e.left === i && e.top === i || (n = (e.left === i ? t.position().left : e.left) + "px, " + (e.top === i ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== i && e.scaleY !== i && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (o.transform = n), e.opacity !== i && (o.opacity = e.opacity), e.width !== i && (o.width = e.width), e.height !== i && (o.height = e.height), t.css(o)
            },
            animate: function(t, e, o, r, a) {
                n.isFunction(o) && (r = o, o = null), n.isPlainObject(e) || t.removeAttr("style"), t.on(d, function(o) {
                    (!o || !o.originalEvent || t.is(o.originalEvent.target) && "z-index" != o.originalEvent.propertyName) && (n.fancybox.stop(t), n.isPlainObject(e) ? (e.scaleX !== i && e.scaleY !== i && (t.css("transition-duration", ""), e.width = Math.round(t.width() * e.scaleX), e.height = Math.round(t.height() * e.scaleY), e.scaleX = 1, e.scaleY = 1, n.fancybox.setTranslate(t, e)), !1 === a && t.removeAttr("style")) : !0 !== a && t.removeClass(e), n.isFunction(r) && r(o))
                }), n.isNumeric(o) && t.css("transition-duration", o + "ms"), n.isPlainObject(e) ? n.fancybox.setTranslate(t, e) : t.addClass(e), e.scaleX && t.hasClass("fancybox-image-wrap") && t.parent().addClass("fancybox-is-scaling"), t.data("timer", setTimeout(function() { t.trigger("transitionend") }, o + 16))
            },
            stop: function(t) { clearTimeout(t.data("timer")), t.off("transitionend").css("transition-duration", ""), t.hasClass("fancybox-image-wrap") && t.parent().removeClass("fancybox-is-scaling") }
        }, n.fn.fancybox = function(t) { var e; return (e = (t = t || {}).selector || !1) ? n("body").off("click.fb-start", e).on("click.fb-start", e, { options: t }, o) : this.off("click.fb-start").on("click.fb-start", { items: this, options: t }, o), this }, s.on("click.fb-start", "[data-fancybox]", o)
    }
}(window, document, window.jQuery || jQuery),
function(t) {
    "use strict";
    var e = function(e, n, i) { if (e) return "object" === t.type(i = i || "") && (i = t.param(i, !0)), t.each(n, function(t, n) { e = e.replace("$" + t, n || "") }), i.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + i), e },
        n = { youtube: { matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i, params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 }, paramPlace: 8, type: "iframe", url: "//www.youtube.com/embed/$4", thumb: "//img.youtube.com/vi/$4/hqdefault.jpg" }, vimeo: { matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1, api: 1 }, paramPlace: 3, type: "iframe", url: "//player.vimeo.com/video/$2" }, metacafe: { matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/, type: "iframe", url: "//www.metacafe.com/embed/$1/?ap=1" }, dailymotion: { matcher: /dailymotion.com\/video\/(.*)\/?(.*)/, params: { additionalInfos: 0, autoStart: 1 }, type: "iframe", url: "//www.dailymotion.com/embed/video/$1" }, vine: { matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/, type: "iframe", url: "//vine.co/v/$1/embed/simple" }, instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" }, gmap_place: { matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i, type: "iframe", url: function(t) { return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed") } }, gmap_search: { matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i, type: "iframe", url: function(t) { return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed" } } };
    t(document).on("objectNeedsType.fb", function(i, o, r) {
        var a, s, l, c, d, u, h = r.src || "",
            p = !1;
        a = t.extend(!0, {}, n, r.opts.media), t.each(a, function(n, i) {
            if (l = h.match(i.matcher)) {
                if (p = i.type, u = {}, i.paramPlace && l[i.paramPlace]) {
                    "?" == (d = l[i.paramPlace])[0] && (d = d.substring(1)), d = d.split("&");
                    for (var o = 0; o < d.length; ++o) {
                        var a = d[o].split("=", 2);
                        2 == a.length && (u[a[0]] = decodeURIComponent(a[1].replace(/\+/g, " ")))
                    }
                }
                return c = t.extend(!0, {}, i.params, r.opts[n], u), h = "function" === t.type(i.url) ? i.url.call(this, l, c, r) : e(i.url, l, c), s = "function" === t.type(i.thumb) ? i.thumb.call(this, l, c, r) : e(i.thumb, l), "vimeo" === n && (h = h.replace("&%23", "#")), !1
            }
        }), p ? (r.src = h, r.type = p, r.opts.thumb || r.opts.$thumb && r.opts.$thumb.length || (r.opts.thumb = s), "iframe" === p && (t.extend(!0, r.opts, { iframe: { preload: !1, attr: { scrolling: "no" } } }), r.contentProvider = void 0, r.opts.slideClass += " fancybox-slide--video")) : h && (r.type = r.opts.defaultType)
    })
}(window.jQuery || jQuery),
function(t, e, n) {
    "use strict";
    var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) { return t.setTimeout(e, 1e3 / 60) },
        o = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) { t.clearTimeout(e) },
        r = function(e) { var n = []; for (var i in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[i].pageX ? n.push({ x: e[i].pageX, y: e[i].pageY }) : e[i].clientX && n.push({ x: e[i].clientX, y: e[i].clientY }); return n },
        a = function(t, e, n) { return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0 },
        s = function(t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
            for (var e = 0, i = t[0].attributes, o = i.length; e < o; e++)
                if ("data-fancybox-" === i[e].nodeName.substr(0, 14)) return !0;
            return !1
        },
        l = function(e) {
            var n = t.getComputedStyle(e)["overflow-y"],
                i = t.getComputedStyle(e)["overflow-x"];
            return ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight || ("scroll" === i || "auto" === i) && e.scrollWidth > e.clientWidth
        },
        c = function(t) { for (var e = !1; !(e = l(t.get(0))) && (t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body");); return e },
        d = function(t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
        };
    d.prototype.destroy = function() { this.$container.off(".fb.touch") }, d.prototype.ontouchstart = function(i) {
        var o = this,
            l = n(i.target),
            d = o.instance,
            u = d.current,
            h = u.$content,
            p = "touchstart" == i.type;
        if (p && o.$container.off("mousedown.fb.touch"), (!i.originalEvent || 2 != i.originalEvent.button) && l.length && !s(l) && !s(l.parent()) && (l.is("img") || !(i.originalEvent.clientX > l[0].clientWidth + l.offset().left))) {
            if (!u || o.instance.isAnimating || o.instance.isClosing) return i.stopPropagation(), void i.preventDefault();
            if (o.realPoints = o.startPoints = r(i), o.startPoints) {
                if (i.stopPropagation(), o.startEvent = i, o.canTap = !0, o.$target = l, o.$content = h, o.opts = u.opts.touch, o.isPanning = !1, o.isSwiping = !1, o.isZooming = !1, o.isScrolling = !1, o.sliderStartPos = o.sliderLastPos || { top: 0, left: 0 }, o.contentStartPos = n.fancybox.getTranslate(o.$content), o.contentLastPos = null, o.startTime = (new Date).getTime(), o.distanceX = o.distanceY = o.distance = 0, o.canvasWidth = Math.round(u.$slide[0].clientWidth), o.canvasHeight = Math.round(u.$slide[0].clientHeight), n(e).off(".fb.touch").on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(o, "ontouchend")).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(o, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", o.onscroll, !0), !o.opts && !d.canPan() || !l.is(o.$stage) && !o.$stage.find(l).length) return void(l.is("img") && i.preventDefault());
                n.fancybox.isMobile && (c(l) || c(l.parent())) || i.preventDefault(), 1 === o.startPoints.length && ("image" === u.type && (o.contentStartPos.width > o.canvasWidth + 1 || o.contentStartPos.height > o.canvasHeight + 1) ? (n.fancybox.stop(o.$content), o.$content.css("transition-duration", ""), o.isPanning = !0) : o.isSwiping = !0, o.$container.addClass("fancybox-controls--isGrabbing")), 2 !== o.startPoints.length || d.isAnimating || u.hasError || "image" !== u.type || !u.isLoaded && !u.$ghost || (o.canTap = !1, o.isSwiping = !1, o.isPanning = !1, o.isZooming = !0, n.fancybox.stop(o.$content), o.$content.css("transition-duration", ""), o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - n(t).scrollLeft(), o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - n(t).scrollTop(), o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width, o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height, o.startDistanceBetweenFingers = a(o.startPoints[0], o.startPoints[1]))
            }
        }
    }, d.prototype.onscroll = function(t) { self.isScrolling = !0 }, d.prototype.ontouchmove = function(t) {
        var e = this,
            i = n(t.target);
        return e.isScrolling || !i.is(e.$stage) && !e.$stage.find(i).length ? void(e.canTap = !1) : (e.newPoints = r(t), void((e.opts || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = a(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = a(e.newPoints[0], e.startPoints[0], "y"), e.distance = a(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }, d.prototype.onSwipe = function(e) {
        var r, a = this,
            s = a.isSwiping,
            l = a.sliderStartPos.left || 0;
        if (!0 !== s) "x" == s && (a.distanceX > 0 && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? l += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? l -= Math.pow(-a.distanceX, .8) : l += a.distanceX), a.sliderLastPos = { top: "x" == s ? 0 : a.sliderStartPos.top + a.distanceY, left: l }, a.requestId && (o(a.requestId), a.requestId = null), a.requestId = i(function() {
            a.sliderLastPos && (n.each(a.instance.slides, function(t, e) {
                var i = e.pos - a.instance.currPos;
                n.fancybox.setTranslate(e.$slide, { top: a.sliderLastPos.top, left: a.sliderLastPos.left + i * a.canvasWidth + i * e.opts.gutter })
            }), a.$container.addClass("fancybox-is-sliding"))
        });
        else if (Math.abs(a.distance) > 10) {
            if (a.canTap = !1, a.instance.group.length < 2 && a.opts.vertical ? a.isSwiping = "y" : a.instance.isDragging || !1 === a.opts.vertical || "auto" === a.opts.vertical && n(t).width() > 800 ? a.isSwiping = "x" : (r = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI), a.isSwiping = r > 45 && r < 135 ? "y" : "x"), a.canTap = !1, "y" === a.isSwiping && n.fancybox.isMobile && (c(a.$target) || c(a.$target.parent()))) return void(a.isScrolling = !0);
            a.instance.isDragging = a.isSwiping, a.startPoints = a.newPoints, n.each(a.instance.slides, function(t, e) { n.fancybox.stop(e.$slide), e.$slide.css("transition-duration", ""), e.inTransition = !1, e.pos === a.instance.current.pos && (a.sliderStartPos.left = n.fancybox.getTranslate(e.$slide).left) }), a.instance.SlideShow && a.instance.SlideShow.isActive && a.instance.SlideShow.stop()
        }
    }, d.prototype.onPan = function() { var t = this; return a(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? void(t.startPoints = t.newPoints) : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && (o(t.requestId), t.requestId = null), void(t.requestId = i(function() { n.fancybox.setTranslate(t.$content, t.contentLastPos) }))) }, d.prototype.limitMovement = function() {
        var t, e, n, i, o, r, a = this,
            s = a.canvasWidth,
            l = a.canvasHeight,
            c = a.distanceX,
            d = a.distanceY,
            u = a.contentStartPos,
            h = u.left,
            p = u.top,
            f = u.width,
            g = u.height;
        return o = f > s ? h + c : h, r = p + d, t = Math.max(0, .5 * s - .5 * f), e = Math.max(0, .5 * l - .5 * g), n = Math.min(s - f, .5 * s - .5 * f), i = Math.min(l - g, .5 * l - .5 * g), f > s && (c > 0 && o > t && (o = t - 1 + Math.pow(-t + h + c, .8) || 0), c < 0 && o < n && (o = n + 1 - Math.pow(n - h - c, .8) || 0)), g > l && (d > 0 && r > e && (r = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && r < i && (r = i + 1 - Math.pow(i - p - d, .8) || 0)), { top: r, left: o, scaleX: u.scaleX, scaleY: u.scaleY }
    }, d.prototype.limitPosition = function(t, e, n, i) {
        var o = this.canvasWidth,
            r = this.canvasHeight;
        return t = n > o ? (t = t > 0 ? 0 : t) < o - n ? o - n : t : Math.max(0, o / 2 - n / 2), { top: e = i > r ? (e = e > 0 ? 0 : e) < r - i ? r - i : e : Math.max(0, r / 2 - i / 2), left: t }
    }, d.prototype.onZoom = function() {
        var e = this,
            r = e.contentStartPos.width,
            s = e.contentStartPos.height,
            l = e.contentStartPos.left,
            c = e.contentStartPos.top,
            d = a(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
            u = Math.floor(r * d),
            h = Math.floor(s * d),
            p = (r - u) * e.percentageOfImageAtPinchPointX,
            f = (s - h) * e.percentageOfImageAtPinchPointY,
            g = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            m = { top: c + (f + ((e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop() - e.centerPointStartY)), left: l + (p + (g - e.centerPointStartX)), scaleX: e.contentStartPos.scaleX * d, scaleY: e.contentStartPos.scaleY * d };
        e.canTap = !1, e.newWidth = u, e.newHeight = h, e.contentLastPos = m, e.requestId && (o(e.requestId), e.requestId = null), e.requestId = i(function() { n.fancybox.setTranslate(e.$content, e.contentLastPos) })
    }, d.prototype.ontouchend = function(t) {
        var i = this,
            a = Math.max((new Date).getTime() - i.startTime, 1),
            s = i.isSwiping,
            l = i.isPanning,
            c = i.isZooming,
            d = i.isScrolling;
        return i.endPoints = r(t), i.$container.removeClass("fancybox-controls--isGrabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", i.onscroll, !0), i.requestId && (o(i.requestId), i.requestId = null), i.isSwiping = !1, i.isPanning = !1, i.isZooming = !1, i.isScrolling = !1, i.instance.isDragging = !1, i.canTap ? i.onTap(t) : (i.speed = 366, i.velocityX = i.distanceX / a * .5, i.velocityY = i.distanceY / a * .5, i.speedX = Math.max(.5 * i.speed, Math.min(1.5 * i.speed, 1 / Math.abs(i.velocityX) * i.speed)), void(l ? i.endPanning() : c ? i.endZooming() : i.endSwiping(s, d)))
    }, d.prototype.endSwiping = function(t, e) {
        var i = this,
            o = !1,
            r = i.instance.group.length;
        i.sliderLastPos = null, "y" == t && !e && Math.abs(i.distanceY) > 50 ? (n.fancybox.animate(i.instance.current.$slide, { top: i.sliderStartPos.top + i.distanceY + 150 * i.velocityY, opacity: 0 }, 150), o = i.instance.close(!0, 300)) : "x" == t && i.distanceX > 50 && r > 1 ? o = i.instance.previous(i.speedX) : "x" == t && i.distanceX < -50 && r > 1 && (o = i.instance.next(i.speedX)), !1 !== o || "x" != t && "y" != t || (e || r < 2 ? i.instance.centerSlide(i.instance.current, 150) : i.instance.jumpTo(i.instance.current.index)), i.$container.removeClass("fancybox-is-sliding")
    }, d.prototype.endPanning = function() {
        var t, e, i, o = this;
        o.contentLastPos && (!1 === o.opts.momentum ? (t = o.contentLastPos.left, e = o.contentLastPos.top) : (t = o.contentLastPos.left + o.velocityX * o.speed, e = o.contentLastPos.top + o.velocityY * o.speed), (i = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height)).width = o.contentStartPos.width, i.height = o.contentStartPos.height, n.fancybox.animate(o.$content, i, 330))
    }, d.prototype.endZooming = function() {
        var t, e, i, o = this,
            r = o.instance.current,
            a = o.newWidth,
            s = o.newHeight;
        o.contentLastPos && (n.fancybox.setTranslate(o.$content, { top: e = o.contentLastPos.top, left: t = o.contentLastPos.left, width: a, height: s, scaleX: 1, scaleY: 1 }), a < o.canvasWidth && s < o.canvasHeight ? o.instance.scaleToFit(150) : a > r.width || s > r.height ? o.instance.scaleToActual(o.centerPointStartX, o.centerPointStartY, 150) : (i = o.limitPosition(t, e, a, s), n.fancybox.setTranslate(o.content, n.fancybox.getTranslate(o.$content)), n.fancybox.animate(o.$content, i, 150)))
    }, d.prototype.onTap = function(t) {
        var e, i = this,
            o = n(t.target),
            a = i.instance,
            s = a.current,
            l = t && r(t) || i.startPoints,
            c = l[0] ? l[0].x - i.$stage.offset().left : 0,
            d = l[0] ? l[0].y - i.$stage.offset().top : 0,
            u = function(e) {
                var o = s.opts[e];
                if (n.isFunction(o) && (o = o.apply(a, [s, t])), o) switch (o) {
                    case "close":
                        a.close(i.startEvent);
                        break;
                    case "toggleControls":
                        a.toggleControls(!0);
                        break;
                    case "next":
                        a.next();
                        break;
                    case "nextOrClose":
                        a.group.length > 1 ? a.next() : a.close(i.startEvent);
                        break;
                    case "zoom":
                        "image" == s.type && (s.isLoaded || s.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(c, d) : a.group.length < 2 && a.close(i.startEvent))
                }
            };
        if ((!t.originalEvent || 2 != t.originalEvent.button) && (o.is("img") || !(c > o[0].clientWidth + o.offset().left))) {
            if (o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) e = "Outside";
            else if (o.is(".fancybox-slide")) e = "Slide";
            else {
                if (!a.current.$content || !a.current.$content.find(o).addBack().filter(o).length) return;
                e = "Content"
            }
            if (i.tapped) {
                if (clearTimeout(i.tapped), i.tapped = null, Math.abs(c - i.tapX) > 50 || Math.abs(d - i.tapY) > 50) return this;
                u("dblclick" + e)
            } else i.tapX = c, i.tapY = d, s.opts["dblclick" + e] && s.opts["dblclick" + e] !== s.opts["click" + e] ? i.tapped = setTimeout(function() { i.tapped = null, u("click" + e) }, 500) : u("click" + e);
            return this
        }
    }, n(e).on("onActivate.fb", function(t, e) { e && !e.Guestures && (e.Guestures = new d(e)) })
}(window, document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, { btnTpl: { slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>' }, slideShow: { autoStart: !1, speed: 3e3 } });
    var n = function(t) { this.instance = t, this.init() };
    e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var t = this;
            t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() { t.toggle() }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
        },
        set: function(t) {
            var e = this;
            e.instance && e.instance.current && (!0 === t || e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function() { e.isActive && e.instance.jumpTo((e.instance.currIndex + 1) % e.instance.group.length) }, e.instance.current.opts.slideShow.speed) : (e.stop(), e.instance.idleSecondsCounter = 0, e.instance.showControls())
        },
        clear: function() { clearTimeout(this.timer), this.timer = null },
        start: function() {
            var t = this,
                e = t.instance.current;
            e && (t.isActive = !0, t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.set(!0))
        },
        stop: function() {
            var t = this,
                e = t.instance.current;
            t.clear(), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1
        },
        toggle: function() {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }), e(t).on({
        "onInit.fb": function(t, e) { e && !e.SlideShow && (e.SlideShow = new n(e)) },
        "beforeShow.fb": function(t, e, n, i) {
            var o = e && e.SlideShow;
            i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
        },
        "afterShow.fb": function(t, e, n) {
            var i = e && e.SlideShow;
            i && i.isActive && i.set()
        },
        "afterKeydown.fb": function(n, i, o, r, a) { var s = i && i.SlideShow;!s || !o.opts.slideShow || 80 !== a && 32 !== a || e(t.activeElement).is("button,a,input") || (r.preventDefault(), s.toggle()) },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }), e(t).on("visibilitychange", function() {
        var n = e.fancybox.getInstance(),
            i = n && n.SlideShow;
        i && i.isActive && (t.hidden ? i.clear() : i.set())
    })
}(document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    var n = function() {
        var e, n, i, o = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ],
            r = {};
        for (n = 0; n < o.length; n++)
            if ((e = o[n]) && e[1] in t) { for (i = 0; i < e.length; i++) r[o[0][i]] = e[i]; return r }
        return !1
    }();
    if (n) {
        var i = {
            request: function(e) {
                (e = e || t.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() { t[n.exitFullscreen]() },
            toggle: function(e) { e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e) },
            isFullscreen: function() { return Boolean(t[n.fullscreenElement]) },
            enabled: function() { return Boolean(t[n.fullscreenEnabled]) }
        };
        e.extend(!0, e.fancybox.defaults, { btnTpl: { fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>' }, fullScreen: { autoStart: !1 } }), e(t).on({
            "onInit.fb": function(t, e) {
                var n;
                e && e.group[e.currIndex].opts.fullScreen ? ((n = e.$refs.container).on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) { t.stopPropagation(), t.preventDefault(), i.toggle(n[0]) }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && i.request(n[0]), e.FullScreen = i) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
            },
            "afterKeydown.fb": function(t, e, n, i, o) { e && e.FullScreen && 70 === o && (i.preventDefault(), e.FullScreen.toggle(e.$refs.container[0])) },
            "beforeClose.fb": function(t) { t && t.FullScreen && i.exit() }
        }), e(t).on(n.fullscreenchange, function() {
            var t = i.isFullscreen(),
                n = e.fancybox.getInstance();
            n && (n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"), n.isAnimating = !1, n.update(!0, !0, 0)), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t))
        })
    } else e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1)
}(document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    e.fancybox.defaults = e.extend(!0, { btnTpl: { thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>' }, thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" } }, e.fancybox.defaults);
    var n = function(t) { this.init(t) };
    e.extend(n.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(t) {
            var e = this;
            e.instance = t, t.Thumbs = e;
            var n = t.group[0],
                i = t.group[1];
            e.opts = t.group[t.currIndex].opts.thumbs, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"), e.opts && n && i && ("image" == n.type || n.opts.thumb || n.opts.$thumb) && ("image" == i.type || i.opts.thumb || i.opts.$thumb) ? (e.$button.show().on("click", function() { e.toggle() }), e.isActive = !0) : e.$button.hide()
        },
        create: function() {
            var t, n, i = this,
                o = i.instance,
                r = i.opts.parentEl;
            i.$grid = e('<div class="fancybox-thumbs fancybox-thumbs-' + i.opts.axis + '"></div>').appendTo(o.$refs.container.find(r).addBack().filter(r)), t = "<ul>", e.each(o.group, function(e, i) {
                (n = i.opts.thumb || (i.opts.$thumb ? i.opts.$thumb.attr("src") : null)) || "image" !== i.type || (n = i.src), n && n.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>')
            }), i.$list = e(t += "</ul>").appendTo(i.$grid).on("click", "li", function() { o.jumpTo(e(this).data("index")) }), i.$list.find("img").hide().one("load", function() {
                var t, n, i, o, r = e(this).parent().removeClass("fancybox-thumbs-loading"),
                    a = r.outerWidth(),
                    s = r.outerHeight();
                t = this.naturalWidth || this.width, o = (n = this.naturalHeight || this.height) / s, (i = t / a) >= 1 && o >= 1 && (i > o ? (t /= o, n = s) : (t = a, n /= i)), e(this).css({ width: Math.floor(t), height: Math.floor(n), "margin-top": n > s ? Math.floor(.3 * s - .3 * n) : Math.floor(.5 * s - .5 * n), "margin-left": Math.floor(.5 * a - .5 * t) }).show()
            }).each(function() { this.src = e(this).data("src") }), "x" === i.opts.axis && i.$list.width(parseInt(i.$grid.css("padding-right")) + o.group.length * i.$list.children().eq(0).outerWidth(!0) + "px")
        },
        focus: function(t) {
            var e, n, i = this,
                o = i.$list;
            i.instance.current && (n = (e = o.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + i.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === i.opts.axis && (n.top < 0 || n.top > o.height() - e.outerHeight()) ? o.stop().animate({ scrollTop: o.scrollTop() + n.top }, t) : "x" === i.opts.axis && (n.left < o.parent().scrollLeft() || n.left > o.parent().scrollLeft() + (o.parent().width() - e.outerWidth())) && o.parent().stop().animate({ scrollLeft: n.left }, t))
        },
        update: function() { this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update() },
        hide: function() { this.isVisible = !1, this.update() },
        show: function() { this.isVisible = !0, this.update() },
        toggle: function() { this.isVisible = !this.isVisible, this.update() }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            var i;
            e && !e.Thumbs && (i = new n(e)).isActive && !0 === i.opts.autoStart && i.show()
        },
        "beforeShow.fb": function(t, e, n, i) {
            var o = e && e.Thumbs;
            o && o.isVisible && o.focus(i ? 0 : 250)
        },
        "afterKeydown.fb": function(t, e, n, i, o) {
            var r = e && e.Thumbs;
            r && r.isActive && 71 === o && (i.preventDefault(), r.toggle())
        },
        "beforeClose.fb": function(t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
    })
}(document, window.jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, { btnTpl: { share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>' }, share: { tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p class="fancybox-share__links"><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>' } }), e(t).on("click", "[data-fancybox-share]", function() {
        var t, n, i = e.fancybox.getInstance();
        i && (t = !1 === i.current.opts.hash ? i.current.src : window.location, n = i.current.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === i.current.type ? encodeURIComponent(i.current.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, function(t) { var e = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" }; return String(t).replace(/[&<>"'`=\/]/g, function(t) { return e[t] }) }(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({ src: i.translate(i, n), type: "html", opts: { animationEffect: "fade", animationDuration: 250, afterLoad: function(t, e) { e.$content.find(".fancybox-share__links a").click(function() { return window.open(this.href, "Share", "width=550, height=450"), !1 }) } } }))
    })
}(document, window.jQuery || jQuery),
function(t, e, n) {
    "use strict";

    function i() {
        var t = e.location.hash.substr(1),
            n = t.split("-"),
            i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10) || 1,
            o = n.join("-");
        return i < 1 && (i = 1), { hash: t, index: i, gallery: o }
    }

    function o(t) { var e; "" !== t.gallery && ((e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1)).length || (e = n("#" + n.escapeSelector(t.gallery))), e.length && (a = !1, e.trigger("click"))) }

    function r(t) { var e; return !!t && ((e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") : "")) }
    n.escapeSelector || (n.escapeSelector = function(t) { return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) { return e ? "\0" === t ? "\ufffd" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t }) });
    var a = !0,
        s = null,
        l = null;
    n(function() {
        !1 !== n.fancybox.defaults.hash && (n(t).on({
            "onInit.fb": function(t, e) { var n, o;!1 !== e.group[e.currIndex].opts.hash && (n = i(), (o = r(e)) && n.gallery && o == n.gallery && (e.currIndex = n.index - 1)) },
            "beforeShow.fb": function(n, i, o) {
                var c;
                o && !1 !== o.opts.hash && (c = r(i)) && "" !== c && (e.location.hash.indexOf(c) < 0 && (i.opts.origHash = e.location.hash), s = c + (i.group.length > 1 ? "-" + (o.index + 1) : ""), "replaceState" in e.history ? (l && clearTimeout(l), l = setTimeout(function() { e.history[a ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + s), l = null, a = !1 }, 300)) : e.location.hash = s)
            },
            "beforeClose.fb": function(i, o, a) {
                var c, d;
                l && clearTimeout(l), !1 !== a.opts.hash && (c = r(o), d = o && o.opts.origHash ? o.opts.origHash : "", c && "" !== c && ("replaceState" in history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + d) : (e.location.hash = d, n(e).scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))), s = null)
            }
        }), n(e).on("hashchange.fb", function() {
            var t = i();
            n.fancybox.getInstance() ? !s || s === t.gallery + "-" + t.index || 1 === t.index && s == t.gallery || (s = null, n.fancybox.close()) : "" !== t.gallery && o(t)
        }), setTimeout(function() { o(i()) }, 50))
    })
}(document, window, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    var n = (new Date).getTime();
    e(t).on({
        "onInit.fb": function(t, e, i) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                var i = e.current,
                    o = (new Date).getTime();
                e.group.length < 1 || !1 === i.opts.wheel || "auto" === i.opts.wheel && "image" !== i.type || (t.preventDefault(), t.stopPropagation(), i.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, o - n < 250 || (n = o, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}