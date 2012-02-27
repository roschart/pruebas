(function ($) {
    var methods = {
        init: function (workflow) {
            return this.each(function () {
                var $this = $(this);
                $.each(workflow.stages, function (stage) {
                    $("#stageTemplate").tmpl(workflow.stages).appendTo($this);

                });


            });
        },
        show: function () {
            // IS
        },
        hide: function () {
            // GOOD
        },
        update: function (content) {
            // !!! 
        }
    };

    $.fn.workFlow = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.tooltip');
        }

    };


})(jQuery);