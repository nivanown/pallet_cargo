/*- phone-select -*/
$('.phone-select__top-panel').click(function(){
  $(this).siblings('.phone-select__dropdown').slideToggle();
  $(this).find('.phone-select__arrow').toggleClass('open')
})

$('.phone-select__item').click(function(){
  $(this).parent().slideToggle();
  $(this).parent().prev('.phone-select__top-panel').find('.phone-select__arrow').toggleClass('open');
  SelectedFilter($(this));
})

function SelectedFilter(el) { 
  el.siblings().removeClass("selected"); 
  el.addClass("selected"); 
  var filter_html = el.html(); 
  el.closest(".phone-select").find(".phone-select__text").html(filter_html); 
}

$(document).ready(function() {
  $('.phone-select__dropdown').hide();
  $('.phone-select__dropdown').each(function () {
    SelectedFilter($(this).children().first());
  });
});

/*- phone -*/
$.mask.definitions['9'] = false;
$.mask.definitions['0'] = "[0-9]";
$(".phone-input").mask('8(000) 000-00-00');

/*- modal -*/
const myModal = new HystModal({
  closeOnEsc: true,
  backscroll: true,
  afterClose: function(modal){
    let videoframe = modal.openedWindow.querySelector('iframe');
    if(videoframe){
      videoframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    }
  },        
});