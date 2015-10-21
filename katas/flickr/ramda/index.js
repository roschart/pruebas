function url(t) {
  return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + t + '&format=json&jsoncallback=?';
}


var img = function(url) {
  return $('<img />', {
    src: url
  });
};

var mediaUrl = R.compose(R.prop('m'), R.prop('media'));
var srcs = R.compose(R.map(mediaUrl), R.prop('items'));
var images = R.compose(R.map(img), srcs);


var Impure = {
  getJSON: R.curry(function(callback, url) {
    $.getJSON(url).done(callback);
  }),

  setHtml: R.curry(function(sel, html) {
    $(sel).html(html);
  })
};

var renderImages = R.compose(Impure.setHtml('#photos'), images);
var searchAndPrint = R.compose(Impure.getJSON(renderImages), url);

$(document).ready(() => {
  $('#btSearch').click(() => {
    var link = $('#tbSearch').val();
    searchAndPrint(link);
  });
});
