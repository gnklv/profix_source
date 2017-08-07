// Товары одинаковой высоты
// function setEqualHeight(columns){
// 	var tallestcolumn = 0;
// 	columns.each(
// 		function(){
// 			currentHeight = $(this).height();
// 			if(currentHeight > tallestcolumn){
// 				tallestcolumn = currentHeight;
// 			}
// 		}
// 	);
// 	columns.height(tallestcolumn);
// }
// $(document).ready(function() {
// 	setEqualHeight($(".products > li"));
// });
// Кнопка вверх
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() >= 700) {
			$('#go_top').addClass('gt_show');
		} else {
			$('#go_top').removeClass('gt_show');
		}
	});
	$('#go_top').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});

$('body').on('click','.achl_show span',function(){
	$('.ach_content').slideToggle('300');
	$('.achl_show').slideToggle('300');
	$('.achl_hide').slideToggle('300');
});

$('body').on('click','.achl_hide span',function(){
	$('.ach_content').slideToggle('300');
	$('.achl_hide').slideToggle('300');
	$('.achl_show').slideToggle('300');
});

$('body').on('click','.yc_close_link',function(){
	$('.your_city').slideToggle('300');
});

$('body').on('click','.hbl_button_menu',function(){
	$('.cloud_window').fadeOut('300');
	$('.h_bottom_line').toggleClass('hblm_active');
	$('.hbl_menu').fadeToggle('300');
	$('body').toggleClass('overflow');
	return false;
});

$('body').on('click', function(event){
  if (!$(event.target).closest('.hbl_menu_block').length) {
    $('.h_bottom_line').removeClass('hblm_active')
  }
});


$('body').on('click','.hblm_link_mobile',function(){
	$(this).siblings('ul').stop().slideToggle('300');
	$(this).parent('li').toggleClass('hblm_mobile_current');
});

$('body').on('click','.pig_menu li',function(){
	$('.pig_menu li').removeClass('pigm_current');
	$(this).addClass('pigm_current');
});

$('body').on('click','.p_like',function(){
	$(this).toggleClass('pl_current');
});

$('body').on('click','.cloud_link',function(){
	$(this).siblings('.cloud_window').fadeToggle('300');
	return false;
});

$('body').on('click', function(event){
  if (!$(event.target).closest('.cloud_window').length) {
		$('.cloud_window').fadeOut('300');
  }
});

$('body').on('click','.clb_delete',function(){
	$(this).closest('.cart_line').replaceWith('<span class="cart_line"><span class="cl_return"><span class="clr_position"><i>Товар удален из корзины</i><span class="clr_button">Восстановить</span></span></span></span>');
});

$('body').on('click','.cloud_close',function(){
	$(this).closest('.cloud_window').fadeToggle('300');
});

$('body').on('click','.go_city_modal',function(){
	$('.city_modal').fadeIn('300');
});

$('body').on('click','.amclose',function(){
	$(this).closest('.all_modal').fadeOut('300');
});

$('body').on('click', function(amwcs_list){
  if (!$(event.target).closest('.amwcs_list').length) {
		$('.amwcs_list').fadeOut('300');
		$('.amwc_clossest').removeClass('city_list');
  }
});
$('body').on('click','.amwcs_list>ul>li',function(){
	$('.amwcs_list').fadeOut('300');
	$('.amwc_clossest').removeClass('city_list');
});

$('body').on('click','.ew_tabs li',function(){
	$('.ew_tabs li').removeClass('ewt_current');
	$(this).addClass('ewt_current');
});

$('body').on('click','.ewt_log',function(){
	$('.ewc_reg').slideUp('300');
	$('.ewc_login').slideDown('300');
});
$('body').on('click','.ewt_reg',function(){
	$('.ewc_login').slideUp('300');
	$('.ewc_reg').slideDown('300');
});

$('body').on('click','.hm_link',function(){
	$(this).toggleClass('hml_active');
	$(this).closest('.hide_map').children('.map').slideToggle('300');
});


function resizeMenu() {
    var dinamycWidth = $(document).width();
    if (dinamycWidth > 650) {
		$('.hbl_menu>li>ul').hide();
		$('.cloud_window').hide();
		var $menu = $(".h_bottom_line");
		$(window).scroll(function(){
			if ( $(this).scrollTop() > 400 && $menu.hasClass("hbl_default") ){
				$menu.addClass("hbl_static");
				$('.hbl_clone').addClass('hblc_block');
			} else if($(this).scrollTop() <= 400 && $menu.hasClass("hbl_static")) {
				$menu.removeClass("hbl_static");
				$('.hbl_clone').removeClass('hblc_block');
			}
			if ( $(this).scrollTop() > 450 && $menu.hasClass("hbl_default") ){
				$menu.removeClass("hbl_default").addClass("hbl_fixed");
			} else if($(this).scrollTop() <= 450 && $menu.hasClass("hbl_fixed")) {
				$menu.removeClass("hbl_fixed").addClass("hbl_default");
			}
		});
    } else {
    }
    if (dinamycWidth > 1200) {
		$('.hbl_menu>li>ul').show();
		$('.hbl_menu').removeAttr('style');
    } else {
    }
}
$(function(){
    $(window).resize(function() {
        resizeMenu()
    });
    resizeMenu();
});


var owl = $('.general_slider');
owl.owlCarousel({
	margin: 0,
	items: 1,
    loop: true,
    nav: true,
    dots: true,
    smartSpeed: 2000
})

var owl = $('.bf_slider');
owl.owlCarousel({
	margin: 0,
	items: 1,
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 1000,
	responsive : {
	    650 : {
    		nav: true
	    }
	}
})

var owl = $('.bc_slider');
owl.owlCarousel({
	margin: 0,
	items: 2.50,
    loop: true,
    nav: true,
    dots: false,
	responsive : {
	    650 : {
		    items: 6,
	    }
	}
})

function resizeSliders() {
    var dinamycWidth = $(window).width();
    if (dinamycWidth < 634) {
		var owl = $('.products_carusel');
		owl.owlCarousel({
			responsive : {
			    0 : {
					margin: 10,
				    items: 1.25,
				    stagePadding: 10,
				    loop: true,
				    nav: false,
				    dots: false
			    }
			}
		})
		var owl = $('.recommend_carusel');
		owl.owlCarousel({
			responsive : {
			    0 : {
					margin: 20,
				    items: 1.25,
				    stagePadding: 10,
				    loop: true,
				    nav: false,
				    dots: false
			    }
			}
		})
		var owl = $('.blog_carusel');
		owl.owlCarousel({
			responsive : {
			    0 : {
					margin: 20,
				    items: 1.25,
				    stagePadding: 10,
				    loop: true,
				    nav: false,
				    dots: false
			    }
			}
		})
		var owl = $('.stocks_carusel');
		owl.owlCarousel({
			responsive : {
			    0 : {
					margin: 20,
				    items: 1.25,
				    stagePadding: 10,
				    loop: true,
				    nav: false,
				    dots: false
			    }
			}
		})
	} else {
		$('.products_carusel').trigger('destroy.owl.carousel');
		$('.recommend_carusel').trigger('destroy.owl.carousel');
		$('.blog_carusel').trigger('destroy.owl.carousel');
		$('.stocks_carusel').trigger('destroy.owl.carousel');
	}
}
$(function(){
    $(window).resize(function() {
        resizeSliders()
    });
    resizeSliders();
});

$(document).ready(function() {
    $('.clq_minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.clq_plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

$('body').on('click','.show_password',function(){
    var type = $(this).siblings('input').attr('type') == "password" ? "text" : 'password';
    $(this).siblings('input').prop('type', type);
    $(this).toggleClass('hide_password');
});

$('.hblms_input').keyup(function() {
	if ($(this).val().length > 0) {
		$(this).siblings('.cloud_window').fadeIn('300');
		$(this).siblings('.clear_input').fadeIn('300');
	} else {
		$(this).siblings('.cloud_window').fadeOut('300');
		$(this).siblings('.clear_input').fadeOut('300');
	}
});

$('.city_name').keyup(function() {
	if ($(this).val().length > 0) {
		$(this).closest('.amwc_clossest').addClass('city_list');
		$(this).siblings('.amwcs_send').removeAttr('disabled');
		$(this).siblings('.clear_input').fadeIn('300');
		$('.amwcs_list').fadeIn('300');
	} else {
		$(this).closest('.amwc_clossest').removeClass('city_list');
		$(this).siblings('.amwcs_send').attr({'disabled': 'disabled',});
		$(this).siblings('.clear_input').fadeOut('300');
		$('.amwcs_list').fadeOut('300');
	}
});

$('body').on('click','.clear_input',function(){
	$(this).siblings('.ci_no').val('');
	$(this).fadeOut('300');
});

/*--- tabs for personal area ---*/

$('.pers-area-navigation__link').on('click', function(event) {
	var el = $('.pers-area-navigation__link'),
			currentAttr = $(this).attr('href');

	event.preventDefault();

	el.removeClass('active');
	$(this).addClass('active');

	$('.pers-area-content__item').fadeOut();
	console.log(currentAttr);
	$('#'+ currentAttr).fadeIn();
});

/*---/---*/

/*--- generate days for month ---*/

$('#pers-years').styler('destroy');
$('#pers-months').styler('destroy');
$('#pers-days').styler('destroy');

var monthNames = [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ], i;

$('#pers-years').append($('<option />').attr({'selected': true, 'disabled': true}).html('год'));
for (i = new Date().getFullYear(); i > 1900; i--) {
    $('#pers-years').append($('<option />').val(i).html(i));
}

$('#pers-months').append($('<option />').attr({'selected': true, 'disabled': true}).html('месяц'));
for (i = 0; i < 12; i++){
    $('#pers-months').append($('<option />').val(i+1).html(monthNames[i]));
}
 updateNumberOfDays(); 
    
$('#pers-years, #pers-months').on("change", function(){
    updateNumberOfDays(); 
});

function updateNumberOfDays(){
    $('#pers-days').html('');
    $('#pers-days').append($('<option />').attr({'selected': true, 'disabled': true}).html('день'));
    var month = $('#pers-months').val(),
        year = $('#pers-years').val(),
        days = daysInMonth(month, year);

    for(i = 1; i < days+1 ; i++){
            $('#pers-days').append($('<option />').val(i).html(i));
    }
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

/*---/---*/