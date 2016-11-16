// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});


var compliment_yes = false;
var compliment_no = false;

$(document).ready(function () {
    
     $('.plot').click(function() {
          var id = $(this).attr('data-attr');
        var flag = $(this).attr('data-flag');

        console.log(id, flag);

        $.ajax({
            type: 'GET',
            url: 'https://dl.dropboxusercontent.com/u/20367844/TRXmas/data.json',
            data: data,
            dataType: 'json',
            success: function (data) {
                console.log(data);
            },
            error: function(error) {}
        });
         
     });

});