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

var counter = 0;
var carkiss = true;
var greetingfail = false;
var antonia_path = false;
var clothes_change = false;
var compliment = false;
var sam_story = false;
var lara_dress = false;

$(document).ready(function () {

    $(document).on('click', '.plot', function(e) {
        e.preventDefault();
        var dec = $(this).attr('data-id');
        var flag = $(this).attr('data-flag');

        counter++;
        ajaxCall(dec, flag, counter);
        removeBtns(dec, flag);

    });


    function ajaxCall (dec, flag, counter) {

        $.ajax({
            type: 'GET',
            url: 'https://dl.dropboxusercontent.com/u/20367844/TRXmas/data.json',
            dataType: 'json',
            success: function (data) {
                var text;
                var imagesrc;
                var storyflag;
                var notifyMsg;
                var notifyThumb;


                if ( flag == 'yes') {
                    text = data[dec].yes.text;
                    imagesrc = data[dec].yes.image;
                    storyflag = data[dec].yes.flag;
                    notifyMsg = data[dec].yes.popup.content;
                    notifyThumb = data[dec].yes.popup.thumb;

                    var html = 
                        '<hr class="col-lg-12 col-md-12 col-sm-12 col-xs-12 trenner'+counter+'"/>' +
                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 wrapper">' +
                        '<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">' +
                        '<img class="img-responsive" src="'+imagesrc+'" />' +
                        '</div>' +
                        '<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">' +
                        '<p>'+text+'</p>' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">' +
                        '<button class="btn btn-default btn-lg plot" data-id="'+ data[dec].btndec1.id +'" data-flag="'+ data[dec].btndec1.dec +'">'+ data[dec].btndec1.content +'</button>'+
                        '<button class="btn btn-default btn-lg plot" data-id="'+ data[dec].btndec2.id +'" data-flag="'+ data[dec].btndec2.dec +'">'+ data[dec].btndec2.content +'</button>'+
                        '</div>';
                }
                else if ( flag == 'no') {
                    text = data[dec].no.text;
                    imagesrc = data[dec].no.image;
                    storyflag = data[dec].no.flag;
                    notifyMsg = data[dec].no.popup.content;
                    notifyThumb = data[dec].no.popup.thumb;

                    var html = 
                        '<hr class="col-lg-12 col-md-12 col-sm-12 col-xs-12 trenner'+counter+'"/>' +
                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 wrapper">' +
                        '<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">' +
                        '<p>'+text+'</p>' +
                        '</div>' +
                        '<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">' +
                        '<img class="img-responsive" src="'+imagesrc+'" />' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">' +
                        '<button class="btn btn-default btn-lg plot" data-id="'+ data[dec].btndec1.id +'" data-flag="'+ data[dec].btndec1.dec +'">'+ data[dec].btndec1.content +'</button>'+
                        '<button class="btn btn-default btn-lg plot" data-id="'+ data[dec].btndec2.id +'" data-flag="'+ data[dec].btndec2.dec +'">'+ data[dec].btndec2.content +'</button>'+
                        '</div>';
                }
                else {

                    if (greetingfail) {
                       console.log("flag set: " + greetingfail);
                        text = data[dec].alttext;
                    }
                    else {
                        console.log("flag not set: " + greetingfail);
                        text = data[dec].text;
                    }

                    imagesrc = data[dec].image;
                    storyflag = data[dec].flag;
                    notifyMsg = data[dec].popup.content;
                    notifyThumb = data[dec].popup.thumb;

                    var html = 
                        '<hr class="col-lg-12 col-md-12 col-sm-12 col-xs-12 trenner'+counter+'"/>' +
                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 wrapper">' +
                        '<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">' +
                        '<img class="img-responsive" src="'+imagesrc+'" />' +
                        '</div>' +
                        '<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">' +
                        '<p>'+text+'</p>' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">' +
                        '<button class="btn btn-default btn-lg plot" data-id="'+ data[dec].btndec1.id +'" data-flag="'+ data[dec].btndec1.dec +'">'+ data[dec].btndec1.content +'</button>'+
                        '<button class="btn btn-default btn-lg plot" data-id="'+ data[dec].btndec2.id +'" data-flag="'+ data[dec].btndec2.dec +'">'+ data[dec].btndec2.content +'</button>'+
                        '</div>';
                }

                //dec = true;
                //greetingfail = true;
                //console.log(greetingfail);
                $('#box').append(html);

                notify(notifyThumb, notifyMsg);
                setFlag(storyflag);

                $('html, body').stop().animate({
                    scrollTop: $('.trenner' + counter).offset().top
                }, 1500, 'easeInOutExpo');

            },
            error: function(error) {
            }
        });



    };


    function setFlag(flag) {
        console.log("flag before: " + flag);
        flag = !flag;
        console.log("flag after: " + flag);
    };


    function notify (thumb, msg) {

        $.notify({
            icon: thumb,
            message: msg
        },{
            type: 'minimalist',
            delay: 5000,
            icon_type: 'image',
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
            '<img data-notify="icon" class="img-circle pull-left">' +
            '<span data-notify="title">{1}</span>' +
            '<span data-notify="message">{2}</span>' +
            '</div>'
        });

    };

    function removeBtns (dec, flag) {
        if(flag == "main") {
            $('button[data-flag='+flag+']').fadeOut(500, function() {
                $(this).remove();
            });
        }
        else {
            $('button[data-id='+dec+']').fadeOut(500, function() {
                $(this).remove();
            });
        }
    };

});