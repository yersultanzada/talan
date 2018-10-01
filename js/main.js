$(document).ready(function () {
    /***** Менюшка на главной со сдвигом вниз ****/
    $("#dropdownMenuLink").click(function () {

        if($('#dropdownMenuLink').parent().hasClass('_show')){
            $('#dropdownMenuLink').parent().removeClass('_show');
        }else{
            $('#dropdownMenuLink').parent().addClass('_show');
        }

        $('.mobile_dropdown_menu').slideToggle('fast');
        if($('.mobile_dropdown_menu').hasClass('_show')){
            $('.mobile_dropdown_menu').removeClass('_show');
        }else{
            $('.mobile_dropdown_menu').addClass('_show');
        }
    });

    $(".mobile_dropdown_item").click(function () {
        if($(this).hasClass('_activated')){
            $(this).removeClass('_activated');
        }else{
            $(this).addClass('_activated');
        }

        $(this).next().slideToggle('fast');
        if($(this).next().hasClass('_visible')){
            $(this).next().removeClass('_visible');
        }else{
            $(this).next().addClass('_visible');
        }
    });

    /***** Указатели для слайдера ****/
    $('#myCarousel').Carousel3d('prev');
    $('#myCarousel').Carousel3d('next');

    /***** Маска для телефона ****/
    $('#tel').mask('+7 (999) 999-99-99');

    /***** Плавный скролл по id ****/
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

});
