jQuery(document)
    .ready(function ($) {
        $('#myCarousel')
            .on('slid.bs.carousel', function () {
                if ($('.item.active').hasClass('car-item-1')) {
                    $('.carousel-desc_title').text('Supply Chain Finance');
                    $('.carousel-desc_content').text('Promoting partnerships and collaborations among entities, private or public usin' +
                            'g the FISCO BCOS platform.');
                }
                if ($('.item.active').hasClass('car-item-2')) {
                    $('.carousel-desc_title').text('Points alliance');
                    $('.carousel-desc_content').text('An alliance is a relationship among people, groups, or states that have joined t' +
                            'ogether for mutual benefit');
                }
                if ($('.item.active').hasClass('car-item-3')) {
                    $('.carousel-desc_title').text('Judicial services');
                    $('.carousel-desc_content').text('Guangzhou Arbitration Commission, WeBank, and Hangzhou Yibi the "arbitration blo' +
                            'ckchain"');
                }

            })
    });