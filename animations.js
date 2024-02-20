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

    $(document).ready(function() {
        var isAnimating = false; // Flag to check animation status
    
        $(document).on('keydown', function(event) {
            // If an animation is in progress, ignore the input
            if (isAnimating) {
                return;
            }
    
            var currentPosition = $('.book').scrollTop();
            var newPosition;
    
            // Small scroll backward (W or ArrowUp)
            if (event.key === 'w' || event.key === 'ArrowUp') {
                newPosition = currentPosition - smallScrollAmount * lineHeight;
                $('.book').scrollTop(newPosition);
                event.preventDefault();
            }
            // Small scroll forward (S or ArrowDown)
            else if (event.key === 's' || event.key === 'ArrowDown') {
                newPosition = currentPosition + smallScrollAmount * lineHeight;
                $('.book').scrollTop(newPosition);
                event.preventDefault();
            }
            // Big scroll backward (A or ArrowLeft)
            else if ((event.key === 'a' || event.key === 'ArrowLeft') && !isAnimating) {
                newPosition = currentPosition - $('.book').height() + bigScrollAmount * lineHeight;
                isAnimating = true;
                $('.book').animate({ scrollTop: newPosition }, animationDuration, function() {
                    isAnimating = false;
                });
                event.preventDefault();
            }
            // Big Scroll forward (D or ArrowRight)
            else if ((event.key === 'd' || event.key === 'ArrowRight') && !isAnimating) {
                newPosition = currentPosition + $('.book').height() - bigScrollAmount * lineHeight;
                isAnimating = true;
                $('.book').animate({ scrollTop: newPosition }, animationDuration, function() {
                    isAnimating = false;
                });
                event.preventDefault();
            }
        });
    });
    


});