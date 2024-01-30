// Books: Script to import books as .book
src = "https://code.jquery.com/jquery-3.6.0.min.js"

$(document).ready(function () {
    var smallScrollAmount = 1;      // Number of lines to scroll for small movements
    var bigScrollAmount = 2;       // Number of lines to scroll for big jumps
    var lineHeight = 24;           // Height of each line in pixels
    var animationDuration = 800;   // Duration of the animation in milliseconds (for small movements)
    var isScrolling = false;
    var lastScrollTime = 0;

    // Get the element that will be scrolled
    const scrollElement = $('.book');

    // Add the event listener for the 'wheel' event
    scrollElement.on('wheel', function (event) {
        var currentTime = new Date().getTime();

        // Check if the user is trying to scroll horizontally
        if (Math.abs(event.originalEvent.deltaX) > Math.abs(event.originalEvent.deltaY)) {
            // Horizontal scrolling detected
            if (!isScrolling && currentTime - lastScrollTime > animationDuration) {
                isScrolling = true;
                lastScrollTime = currentTime;

                //UPDATE:
                //adding WASD keys
                // Trigger the corresponding action for WASD keys
                if (event.originalEvent.deltaX > 0) {
                    // Scrolling to the right, trigger action for ArrowRight
                    $(document).trigger($.Event('keydown', { key: 'd' }));
                } else {
                    // Scrolling to the left, trigger action for ArrowLeft
                    $(document).trigger($.Event('keydown', { key: 'a' }));
                }

                setTimeout(function () {
                    isScrolling = false;
                }, animationDuration);
            }
        } else {
            // Vertical scrolling detected, reset the lastScrollTime to avoid immediate triggering of horizontal scroll after vertical scroll
            lastScrollTime = currentTime;
        }
    });

    $(document).on('keydown', function (event) {
        // Small scroll backward
        if (event.key === 'ArrowUp') {
            var currentPosition = $('.book').scrollTop();
            var newPosition = currentPosition - smallScrollAmount * lineHeight;
            $('.book').scrollTop(newPosition);
            event.preventDefault();

            // Small scroll forward
        } else if (event.key === 'ArrowDown') {
            var currentPosition = $('.book').scrollTop();
            var newPosition = currentPosition + smallScrollAmount * lineHeight;
            $('.book').scrollTop(newPosition);
            event.preventDefault();

            // Big scroll backward
        } else if (event.key === 'ArrowLeft') {
            var currentPosition = $('.book').scrollTop();
            var newPosition = currentPosition - $('.book').height() + bigScrollAmount * lineHeight;
            $('.book').animate({ scrollTop: newPosition }, animationDuration); // smooth scroll for big moves
            event.preventDefault();

            // Big Scroll forward
        } else if (event.key === 'ArrowRight') {
            var currentPosition = $('.book').scrollTop();
            var newPosition = currentPosition + $('.book').height() - bigScrollAmount * lineHeight;
            $('.book').animate({ scrollTop: newPosition }, animationDuration);
            event.preventDefault();
        }
    });

    //UPDATE:
    //adding WASD keys
    $(document).on('keydown', function (event) {
        // Small scroll backward
        if (event.key === 'w') {
            var currentPosition = $('.book').scrollTop();
            var newPosition = currentPosition - smallScrollAmount * lineHeight;
            $('.book').scrollTop(newPosition);
            event.preventDefault();

            // Small scroll forward
        } else if (event.key === 's') {
            var currentPosition = $('.book').scrollTop();
            var newPosition = currentPosition + smallScrollAmount * lineHeight;
            $('.book').scrollTop(newPosition);
            event.preventDefault();

            // Big scroll backward
        } else if (event.key === 'a') {
            var currentPosition = $('.book').scrollTop();
            var newPosition = currentPosition - $('.book').height() + bigScrollAmount * lineHeight;
            $('.book').animate({ scrollTop: newPosition }, animationDuration); // smooth scroll for big moves
            event.preventDefault();

            // Big Scroll forward
        } else if (event.key === 'd') {
            var currentPosition = $('.book').scrollTop();
            var newPosition = currentPosition + $('.book').height() - bigScrollAmount * lineHeight;
            $('.book').animate({ scrollTop: newPosition }, animationDuration);
            event.preventDefault();
        }
    });
});