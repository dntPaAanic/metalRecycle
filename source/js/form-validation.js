jQuery(document).ready(function($) {

    // Добавляем маску для поля с номера телефона
    $('.callback__input--tel').mask('+7 (999) 999-99-99');

    // // Проверяет отмечен ли чекбокс согласия
    // // с обработкой персональных данных
    // $('#check').on('click', function() {
    //     if ($("#check").prop("checked")) {
    //         $('#button').attr('disabled', false);
    //     } else {
    //         $('#button').attr('disabled', true);
    //     }
    // });

    // Отправляет данные из формы на сервер и получает ответ
    $('.form__form').on('submit', function(event) {

        event.preventDefault();

        var form = $('.form__form'),
            button = $('.button--submit'),
            answer = $('#answer'),
            loader = $('#loader');

        $.ajax({
            url: 'handler.php',
            type: 'POST',
            data: form.serialize(),
            beforeSend: function() {
                answer.empty();
                button.attr('disabled', true).css('margin-bottom', '20px');
                loader.fadeIn();
            },
            success: function(result) {
                loader.fadeOut(300, function() {
                    answer.text(result);
                });
                form.find('.callback__input').val('');
                button.attr('disabled', false);
            },
            error: function() {
                loader.fadeOut(300, function() {
                    answer.text('Произошла ошибка! Попробуйте позже.');
                });
                button.attr('disabled', false);
            }
        });

    });

});
