$(document).ready(function() {
    // rating star
    var star = $('li.star');

    $('#product__rating__stars li').on('mouseover', function() {
        var onStar = star.index(this) + 1;
        $(this).parent().children(star).each(function(e) {
            if (e < onStar) {
                $(this).addClass('hover');
            } else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function() {
        $(this).parent().children(star).each(function(e) {
            $(this).removeClass('hover');
        });
    });

    $('#product__rating__stars li').on('click', function() {
        var onStar = (star.index(this) + 1);
        var stars = $(this).parent().children('li.star');
        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('rated');
        }
        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('rated');
        }
    });

    var color = $('li.product-color__variant');
    $('.product-color ul li, .product-size ul li').on('click', function() {
        var variants = $(this).parent().children('li.product-color__variant, li.product-size__variant');

        for (i = 0; i < variants.length; i++) {
            $(variants[i]).removeClass('selected');
        }
        for (i = 0; i < color.length; i++) {
            $(this).addClass('selected');
            switch ((color.index(this))) {
                case 0:
                    $("#img-product").attr('src', "images/product.png");
                    break;
                case 1:
                    $("#img-product").attr('src', "images/green.png");
                    break;
                case 2:
                    $("#img-product").attr('src', "images/pinks.png");
                    break;
                case 3:
                    $("#img-product").attr('src', "images/violets.png");
                    break;
                default:
            }
        }
    });

    // modal

    var socialsModal = $('.socials'),
        share = $('.product__share'),
        close = $('.close-modal');

    share.on('click', function() {
        $(socialsModal).css("display", 'block');
    });
    close.on('click', function() {
        $(socialsModal).css("display", 'none');
    });

    //slider 

    var slideIndex = 1,
        slides = document.querySelectorAll('.similar-product'),
        prev = document.querySelector('.slider-btns__prev'),
        next = document.querySelector('.slider-btns__next');

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    prev.addEventListener('click', function() {
        plusSlides(-1);
    });
    next.addEventListener('click', function() {
        plusSlides(1);
    });
});