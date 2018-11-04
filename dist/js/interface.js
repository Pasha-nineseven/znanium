$(document).ready(function() {
	flexibility(document.documentElement);

	$("body").on("click", ".sidebar__link", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).parents('.sidebar__item').find('.sidebar-submenu').slideToggle();
	});


	//POPUP-VIDEO
    $('.js-play__btn').magnificPopup({
        type: 'iframe',
        removalDelay: 500,
        closeBtnInside: false,
        fixedContentPos: false,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            },
            open: function(){
                $('body').addClass('noscroll');
            },
            close: function() {
                 $('body').removeClass('noscroll');
            }
        },

        //midClick: true,
    });


    //MENU-MOBILE
    $('body').on('click','.js-menu-btn', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.menu-mobile').toggleClass('active');
        $('.menu-mobile__bg').fadeToggle();
        $('body').toggleClass('fixed');
    });

    $('body').on('click','.menu-mobile__bg', function(e){
        e.preventDefault();
        $('.menu-btn').removeClass('active');
        $('.menu-mobile').removeClass('active');
        $(this).fadeOut();
        $('body').removeClass('fixed');
    });
    $('body').on('click','.menu-mobile__close', function(e){
        e.preventDefault();
        $('.menu-btn').removeClass('active');
        $('.menu-mobile').removeClass('active');
        $('.menu-mobile__bg').fadeOut();
        $('body').removeClass('fixed');
    });

    //SEARCH
    $('body').on('click','.js-search-link', function(e){
        e.preventDefault();
        $('.search-form').toggleClass('active');
        $('.search__bg').fadeToggle();
        $('body').toggleClass('fixed');
    });

    $('body').on('click','.search__bg', function(e){
        e.preventDefault();
        $('.search-form').removeClass('active');
        $(this).fadeOut();
        $('body').removeClass('fixed');
    });
    $('body').on('click','.search__close', function(e){
        e.preventDefault();
        $('.search-form').removeClass('active');
        $('.search__bg').fadeOut();
        $('body').removeClass('fixed');
    });
});




$(window).resize(function () {

});

// $(window).load(function(){

// });

// functions


// links pages
// $('body').append(
// 	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
// 		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
// 	<style> \
// 		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
// 		#pages a { text-decoration: none; } \
// 		#pages li { margin: 5px 0; } \
// 	</style> \
// 	<ol id="pages"> \
// 		<li><a href="about.html">About</a></li> \
// 		<li><a href="index.html">Index</a></li> \
// 	</ol> \
// </div>');
