$(document).ready(() => {
  $('#btSearch').click(() => {
    var text = $('#tbSearch').val();
    $.getJSON(url(text)).done(printImg);
  });

  function url(t) {
    return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + t + '&format=json&jsoncallback=?';
  }

  function printImg(data) {
    $('#photos').empty();
    data.items.forEach((flickr) => {
      var html = '<img src="' + flickr.media.m + '"></img>';
      $('#photos').append($(html));
    });
  }

});
