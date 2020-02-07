
$('.candy-list-item').on('click', function() {

var candyurl = $(this).attr('candy-picture')

console.log(candyurl)

  $('#candy-photo').empty()

  $('#candy-photo').css('background-image', `url(${candyurl})`)
})
