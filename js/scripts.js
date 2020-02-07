
$('.candy-list-item').on('click', function() {

var candyurl = $(this).attr('candy-picture')

console.log(candyurl)

  $('#candy-photo').empty()

  $('#candy-photo').css('background-image', `url(${candyurl})`)
})

// data-types

// loops can run code several times

var timestorun = 10

for(var i=0; i< timestorun; i++)
{
//code will run until the clause is no longer true
}
