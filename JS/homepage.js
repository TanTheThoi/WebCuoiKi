$(document).ready(function(){
    var chat = document.querySelector('.chat');
    var chat_box = document.querySelector('.chat-box');
    var close_box = document.querySelector('#close');
    chat.onclick = function(){
        chat_box.style.display = 'block';
        chat.style.display = 'none';
    }

    close_box.onclick = function(){
        chat_box.style.display = 'none';
        chat.style.display = 'block';
    }

    $(document).ready(function(){
        $('.filtering').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000
            });

            var filtered = false;

            $('.js-filter').on('click', function(){
            if (filtered === false) {
                $('.filtering').slick('slickFilter',':even');
                $(this).text('Unfilter Slides');
                filtered = true;
            } else {
                $('.filtering').slick('slickUnfilter');
                $(this).text('Filter Slides');
                filtered = false;
            }
            });
    })
   })