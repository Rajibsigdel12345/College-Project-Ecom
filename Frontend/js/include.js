$(function () {
  let includes = $('[data-include]')
  $.each(includes, function () {
    let file ='templates/'+$(this).data('include') + '.html'
    $(this).load(file)
  })
})


