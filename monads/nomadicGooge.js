var sys = require('sys'),
   http = require('http');

googleClient = function(path) {
    return new MonadGoogleClient(path);
}


MonadGoogleClient = function(path) {
    this.path = path
    this.callbacks = []
    this.errbacks = []
    return this
}

MonadGoogleClient.prototype = {

    addCallback: function(cb) {
        this.callbacks.push(cb)
        return this
    },

    addErrback: function(cb) {
        this.errbacks.push(cb)
        return this
    },

    sendReq: function() {
        var self = this

        var google = http.createClient(80, 'www.google.com');

        var request = google.request('GET', this.path);
        request.addListener('response', function(response) {
            var status = response.statusCode
            if(status == 302 || status == 200)
                self.callbacks.forEach(function(cb) {
                    cb(response)
                })
            else
                self.errbacks.forEach(function(cb) {
                    cb(response)
                })
        })
        request.end()

        return this
    }
    
}


googleClient('/').
    addCallback(function(response) {
        sys.puts('Successful request done!')
        sys.puts('HEADERS: ' + JSON.stringify(response.headers));
    }).
    addErrback(function(response) {
        sys.puts('Unsuccessful request done?')
        sys.puts('HEADERS: ' + JSON.stringify(response.headers));
    }).
    sendReq()
