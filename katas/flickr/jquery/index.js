function img(url) {
  return $('<img />', {
    src: url
  });
}

function url(t) {
  return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + t + '&format=json&jsoncallback=?';
}

function printImg(data) {
  $('#photos').html(data.items.map((flickr) => {
    return img(flickr.media.m);
  }));
}

$(document).ready(() => {
  $('#btSearch').click(() => {
    var text = $('#tbSearch').val();
    $.getJSON(url(text)).done(printImg);
  });
});
