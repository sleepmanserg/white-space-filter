
if ( $('#slider').length > 0 ) {
  noUiSlider.create(slider, {
    start: 3600,
    step: 1,
    range: {
      'min': [3600],
      'max': [10000]
    },
    format: wNumb({ prefix: '~ ', decimals: 0 })
  });
}

var inputFormat = document.getElementById('input-number');

slider.noUiSlider.on('update', function( values, handle ) {
  inputFormat.value = values[handle];
});

inputFormat.addEventListener('change', function(){
  slider.noUiSlider.set(this.value);

});

$('.showAll').on('click', function(e) {
  	$(this).parents('.with-hidden').toggleClass("is-show");
  	e.preventDefault();
});

$('.my-btn').on('click', function(e) {
	$('.fields').toggleClass('fields-active');
	$('.click').show();
	e.preventDefault();
});

$('.click').on('click', function(x) {
	$('.fields').toggleClass('fields-active');
	$('.click').hide();
	x.preventDefault();
});













