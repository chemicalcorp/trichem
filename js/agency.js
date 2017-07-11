/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    // $('a.page-scroll').bind('click', function(event) {     var $anchor = $(this);
    //     $('html, body').stop().animate({         scrollTop:
    // $($anchor.attr('href')).offset().top     }, 1500, 'easeInOutExpo');
    // event.preventDefault(); });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({target: '.navbar-fixed-top'})

// // Closes the Responsive Menu on Menu Item Click $('.navbar-collapse ul li
// a').click(function() {     $('.navbar-toggle:visible').click(); });

$('div.modal').on('show.bs.modal', function () {
    var modal = this;
    var hash = modal.id;
    window.location.hash = hash;
    window.onhashchange = function () {
        if (!location.hash) {
            $(modal).modal('hide');
        }
    }
});

// The function actually applying the offset
function offsetAnchor() {
    if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 120);
    }
}

$(document)
    .on('ready', function () {
        // Captures click events of all a elements with href starting with #
        $(document)
            .on('click', 'a[href^="#"]', function (event) {
                // Click events are captured before hashchanges. Timeout causes offsetAnchor to
                // be called after the page jump.
                window
                    .setTimeout(function () {
                        offsetAnchor();
                    }, 0);
            });

        // Set the offset when entering page with hash present in the url
        window.setTimeout(offsetAnchor, 0);

    });
