$(document).ready(() => {
  $('#btSearch').click(() => {
    var text = $('#tbSearch').val();
    $.getJSON(url(text)).done(printImg);
  });

  function url(t) {
    return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + t + '&format=json&jsoncallback=?';
  }

  function printImg(data) {

    $('#photos').html(data.items.map((flickr) => {
      return '<img src="' + flickr.media.m + '"></img>';
    }));
  }

});
