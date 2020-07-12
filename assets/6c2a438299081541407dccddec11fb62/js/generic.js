(function ($) {
    $.Kilgore = $.Kilgore || {};

    $.Kilgore.FUNNEL = {
        funnel_id: null,
        title: null,
        lang: null,
        settings: null,
        settings_json: null,
        referrer: null,
        remote_address: null,
        room_id: null,
        demo_id: null,
        partner_id: null,
        tracking_id: null,
        username: null,
        password: null
    };

    $.Kilgore.PROXY = {
        baseURI: (typeof postal !== 'undefined' && postal.hasOwnProperty('base_uri')) ? postal.base_uri : '/postal/ajax/',

        ServiceRequest: function (action, data, callback) {
            let url = this.baseURI + action;
            $.ajax({
                type: 'POST',
                url: url,
                data: data,
                success: function (response) {
                    if (response && callback) {
                        callback(typeof(response) === 'object' ? response : $.parseJSON(response));
                    }
                }
            });
        },

        createNewEvent: function (eventName) {
            var event;
            if (typeof (Event) === 'function') {
                event = new Event(eventName);
            } else {
                event = document.createEvent('Event');
                event.initEvent(eventName, true, true);
            }

            return event;
        },

        getFunnelInfo: function (callback) {
            let url = this.baseURI + 'funnel-info' + window.location.search;
            $.ajax({
                type: "POST",
                url: url,
                success: function (response) {
                    if (response && callback) {
                        callback(response);
                    }
                },
            });
        },

        sendTrackingPixel: function (callback) {
            let action = 'trackingPixel';
            let data   = {
                'url' : document.location.href
            };

            this.ServiceRequest(action, data, callback);
        },

        startImpressionLog: function (callback) {
            if (!$.Kilgore.isAuthed) {
                document.addEventListener('funnelAuthed', function(e) {
                    $.Kilgore.PROXY.startImpressionLog();
                });
                return;
            }
            let action = 'startImpression';
            let data   = {
                'url' : document.location.href,
                'referer' : document.referrer
            };

            this.ServiceRequest(action, data, callback);
        },

        redirectWithToken: function (action, token) {
            const form = $('<form></form>')
                .attr({
                    method: 'POST',
                    action: action
                })
                .hide()
                .append('<input type="hidden" name="token" value="' + token + '">');

            $('body').append(form);
            form.submit();
        }
    };

})(jQuery);
