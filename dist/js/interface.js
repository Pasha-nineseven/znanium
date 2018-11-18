$(document).ready(function() {
	flexibility(document.documentElement);

    //SIDEBAR-ACCORDEON
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


    //ACCORDEON
    $("body").on("click", ".accordeon__toggle", function(e){
        e.preventDefault();
        //$(this).toggleClass('active');
        $(this).parents('.accordeon__item').toggleClass('active').find('.accordeon__content').slideToggle();
    });


    //SHOW-CODE
    $("body").on("click", ".js-enter-code__link", function(e){
        e.preventDefault();
        $(this).next('.enter-code__form').fadeIn();
    });
    $(document).click(function (e){
        var div = $(".enter-code");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('.enter-code__form').fadeOut();
        }
    });


    //SHELVES-SCROLL
    $("body").on("click", ".js-alphabet-item", function(e){
        e.preventDefault();
        goToByScroll($(this).attr("data-letter")); 
    });

    //LIST-MOBILE-TOGGLE
    $("body").on("click", ".shelves-list__title", function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next('.shelves-list-mobile-wrap').slideToggle(5);
    });
});




$(window).resize(function () {

});

// $(window).load(function(){

// });

// functions

//SHELVES-SCROLL
function goToByScroll(dataId){
    dataId = dataId.replace("letter-", "");
    $('html,body').animate({
        scrollTop: $('[data-id='+dataId+']').first().offset().top},
        'slow');
}


// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="book.html">Книга</a></li> \
		<li><a href="index.html">Текстовая</a></li> \
        <li><a href="search.html">Поиск</a></li> \
        <li><a href="shelves.html">Полки</a></li> \
        <li><a href="list.html">Список книг</a></li> \
        <li><a href="vebinars.html">Вебинары</a></li> \
        <li><a href="vebinar.html">Вебинар</a></li> \
	</ol> \
</div>');
