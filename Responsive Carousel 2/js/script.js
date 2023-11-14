(function($) {
    // Define the slide function that creates the image slider
    var slide = function(ele, options) {
        // Get the jQuery element
        var $ele = $(ele);

        // Default settings for the slider
        var setting = {
            speed: 1000,    // Animation speed
            interval: 2000, // Auto-play interval
        };

        // Merge the default settings with user-defined options
        $.extend(true, setting, options);

        // Array of states representing image positions and styles
        var states = [
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 134, $opacity: 0.2 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 0, $opacity: 0.4 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 110, $opacity: 0.7 },
            { $zIndex: 4, width: 224, height: 288, top: 0, left: 263, $opacity: 1 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 470, $opacity: 0.7 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 620, $opacity: 0.4 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 }
        ];

        // Select all list items within the slider container
        var $lis = $ele.find('li');
        var timer = null;

        // Event listener for the "Next" button
        $ele.find('.hi-next').on('click', function() {
            next();
        });

        // Event listener for the "Previous" button
        $ele.find('.hi-prev').on('click', function() {
            // Shift the states array by pushing the first item to the end
            states.push(states.shift());
            move();
        });

        // Event listeners for mouse hover and mouse leave to pause/resume auto-play
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        // Initialize the slider by calling the move and autoPlay functions
        move();
        autoPlay();

        // Function to animate the slider's state
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                // Animate the state properties for each list item
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        // Function to move to the next state
        function next() {
            // Shift the states array by pushing the last item to the beginning
            states.unshift(states.pop());
            move();
        }

        // Function to auto-play the slider
        function autoPlay() {
            // Set an interval to call the next function at a specified interval
            timer = setInterval(next, setting.interval);
        }
    }

    // Create a jQuery plugin called "hiSlide"
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            // Initialize the image slider for each selected element
            slide(ele, options);
        });
        return this;
    }
})(jQuery);
