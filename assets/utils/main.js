jQuery(document)
    .ready(function ($) {
        $('#myCarousel')
            .on('slid.bs.carousel', function () {
                if ($('.item.active').hasClass('car-item-1')) {
                    $('.carousel-desc_title').text('1111111111');
                    $('.carousel-desc_content').text('1111111111');
                }
                if ($('.item.active').hasClass('car-item-2')) {
                    $('.carousel-desc_title').text('22222222');
                    $('.carousel-desc_content').text('22222222');
                }
                if ($('.item.active').hasClass('car-item-3')) {
                    $('.carousel-desc_title').text('33333333');
                    $('.carousel-desc_content').text('33333333');
                }

            })
    });