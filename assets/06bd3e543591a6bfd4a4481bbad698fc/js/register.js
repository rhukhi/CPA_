(function ($) {

    'use strict';

    const register = {
        randomInteger: function (min, max) {
            return Math.floor(min + Math.random() * (max + 1 - min));
        },
        replaceAt: function (string, index, replace) {
            return string.substring(0, index) + replace + string.substring(index + 1);
        },
        generateRandomString: function (length) {
            let result = '';
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let charactersLength = characters.length;

            for (let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
        },
        generateRandomPass: function (length) {
            let password = this.generateRandomString(length);
            let index;
            let indexes = [];

            if (!/[A-Z]/.test(password)) {
                index = this.randomInteger(0, length - 1);
                while(password[index].toUpperCase() == password[index] || indexes.includes(index)) {
                    index = this.randomInteger(0, length - 1);
                }
                indexes.push(index);
                password = this.replaceAt(password, index, password[index].toUpperCase());
            }

            if (!/[a-z]/.test(password)) {
                index = this.randomInteger(0, length - 1);
                while(password[index].toLowerCase() == password[index] || indexes.includes(index)) {
                    index = this.randomInteger(0, length - 1);
                }
                indexes.push(index);
                password = this.replaceAt(password, index, password[index].toLowerCase());
            }

            if (!/[0-9]/.test(password)) {
                index = this.randomInteger(0, length - 1);
                while(indexes.includes(index)) {
                    index = this.randomInteger(0, length - 1);
                }
                indexes.push(index);
                password = this.replaceAt(password, index, this.randomInteger(0, 9));
            }

            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,12}$/.test(password)) {
                return this.generateRandomPass(length);
            }

            return password;
        },
        serializeAllArray: function (form) {
            let obj = {};

            $('input, select', form).each(function () {
                obj[this.name] = $(this).val();
            });

            return $.param(obj);
        },
        sendRequest: function (type, url, data) {
            $.ajax({
                type: type,
                url: url,
                data: data,
                beforeSend: function () {
                    $.LoadingOverlay('show');
                },
                complete: function (e) {
                    $.LoadingOverlay('hide');

                    if (e.status === 200) {
                        if (e.responseJSON.status) {
                            if (e.responseJSON.data && e.responseJSON.data.hasOwnProperty('token')) {
                                $.Kilgore.PROXY.redirectWithToken(e.responseJSON.data.redirect_url, e.responseJSON.data.token);
                            }
                        } else {
                            $.SwalError.showErrors(e.responseJSON.errors);
                        }
                    }
                }
            })
        }
    };

    $('.registerForm').on('beforeSubmit', function () {
        const form = $(this);
        register.sendRequest(form.attr('method'), form.attr('action'), register.serializeAllArray(form));
        return false;
    });

    $('.generate-pass').on('click', function () {
        const password = $(this).closest('.form-group').find('.Password');
        password.val(register.generateRandomPass(10)).blur();
    });
})(jQuery);