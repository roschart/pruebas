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


var button = document.getElementById('btSearch');

var source = Rx.Observable.fromEvent(button, 'click');

// var throttledInput = $('#textInput')
//   .keyupAsObservable()
//   .map(function(ev) {
//     return $(ev.target).val();
//   });

function searchInUlr(url) {
  return $.ajaxAsObservable({
    url: url,
    dataType: 'jsonp'
  });
}

source.subscribe(function() {
  var text = $('#tbSearch').val();
  var url_search = url(text);
  console.log(url_search);
  searchInUlr(url_search).subscribe((xhs) => {
    printImg(xhs.data);
  });
});


//
// $(document).ready(() => {
//   $('#btSearch').click(() => {
//     var text = $('#tbSearch').val();
//     $.getJSON(url(text)).done(printImg);
//   });
// });
