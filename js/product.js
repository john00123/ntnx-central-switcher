const switcher = $('.switcher')
const section = $('label')
const input = $('.search')
const searchButton = $('.search-button')
const filterButton = $('.filter-button')
const instance = $('.instance-trigger')
const instance2 = $('.instance-trigger-2')

function viewToggle() { $('.products').toggleClass('expanded')}
function sectionToggle() {
  $(this).next().slideToggle('fast')
  $(this).parent().toggleClass('app-group-collapsed')
}
function filter(){
  let searchValue =  $('.search').val().toLowerCase();

  if (searchValue === '' ) {
    $('.app, .app-group').show();
  }
  else {
    console.log(searchValue)
    $('.app').hide();
    $(`.app:contains(${searchValue})`).show();

    // removes section when empty
    $(".app-group").each(function() {
      $(this).show()
      if(!($(this).find(".app").is(':visible'))){ $(this).hide()}
    })
  }
}
function filterToggle() {
  $('.app-group').find('label').toggle()
  $('.app-group').toggleClass('app-group-gone')
  $('.product-detail').toggleClass('pd-gone');
}
function instanceToggle() {
  $('.instance-group').slideToggle()
}

function inputToggle(){
  input.toggleClass('input-collapsed');
  input.val('')
  filter()
  input.hasClass('input-collapsed') ? input.blur(): input.focus();
}
$('.inst').click(function () {
  let text = $(this).text()
  $('.inst-name').text(text);
  $('.instance-group').slideToggle()
})

function filter2(){
  let searchValue =  $('#inst-filter').val().toLowerCase();

  if (searchValue === '' ) {
    $('.instance-viewer').show();
  }
  else {
    console.log(searchValue)
    $('.instance-viewer').hide();
    $(`.instance-viewer:contains(${searchValue})`).show();
  }
}

switcher.click(viewToggle)
section.click(sectionToggle)
// searchButton.click(inputToggle)
filterButton.click(filterToggle)
instance.click(instanceToggle)
instance2.click(instanceToggle)
//



$('.sub-inst').hide()

switcher.click()
filterButton.click()
instance.click()
$('.overlay').hide()


//versions
//2

$('.alpha').click(function () {
  $('.instance-trigger').removeClass('ver2-instance')
  instance2.hide()
  input.addClass('input-collapsed');
  instance.show()
  $('#page-title').html('Prism-Central')
  $('.search').removeClass('fw');
  $('.search').parent('div').removeClass('correction')
  $('.product-detail').removeClass('ver2-prod')
  $('input, button').removeClass('ver2-assets')
  $('.product-detail').find('div.grid').removeClass('ver2-grid');
})
$('.beta').click(function(){
  //
  $('.alpha').click()
  $('.instance-trigger').toggleClass('ver2-instance')
  instance2.show()
  $('.product-detail').find('div.grid').addClass('ver2-grid');
})
$('.cappa').click(function(){
  $('.alpha').click()
  instance.hide()
  input.removeClass('input-collapsed');
  $('.search').addClass('fw');
  $('.search').parent('div').addClass('correction')
  $('.product-detail').addClass('ver2-prod')
  $('.search, button').addClass('ver2-assets')
  $('#page-title').html('PC · &nbsp; <kbd> Prism-EMEA</kbd>')
})


//popup
$('.instance-viewer, .close').click(function () {
  $('.overlay').hide()
})
$('.prism').click(function(){
  $('.sub-inst').toggle()
  $(this).toggleClass('clicked')
})
