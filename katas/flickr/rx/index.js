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

function searchInUlr(url) {
  return $.ajaxAsObservable({
    url: url,
    dataType: 'jsonp'
  });
}

var buttonSource = Rx.Observable.fromEvent(document.getElementById('btSearch'), 'click');


var urlSource = buttonSource.flatMap(function() {
  var text = $('#tbSearch').val();
  var url_search = url(text);
  return Rx.Observable.just(url_search);
});

var images=urlSource.flatMap((url)=>searchInUlr(url));

images.subscribe((xhs) => {
  printImg(xhs.data);
});
