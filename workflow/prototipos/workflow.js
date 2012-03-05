
(function ($) {
    var methods = {
        init: function (workflow) {
            var $this = $(this);
            $this.on("click", ".task_actions", function (event) {
                methods.taskDone($(this).parent());
            });
            return this.each(function () {
                $("#stageTemplate").tmpl(workflow.stages).appendTo($this);
            });
        },

        taskDone: function ($task) {
            //Chech if is a real task 
            if (!$task.hasClass('task')) {
                alert("Error de programación: No se a utilizado un $task válido para el método taskDone");
            }
            var $nextStage = $task.closest(".stage").next();

            if ($nextStage.length) {
                $nextStage.append($task);
            } else {
                $task.remove();
            };
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