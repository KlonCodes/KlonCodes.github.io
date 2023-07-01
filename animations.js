// Books: Script to import books as .book

$(document).ready(function () {
    var smallScrollAmount = 1;      // Number of lines to scroll for small movements
    var bigScrollAmount = 4;       // Number of lines to scroll for big jumps
    var lineHeight = 24;            // Height of each line in pixels
    var animationDuration = 800;    // Duration of the animation in milliseconds (for small movements)

    $(document).on('keydown', function (event) {

        // Small scroll backward
        if (event.key === 'ArrowUp') {
            var currentPosition = $('.book').scrollTop();
            var newPosition = currentPosition - smallScrollAmount * lineHeight;
            $('.book').scrollTop(newPosition);
            event.preventDefault();

            // Small scroll foreward
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

            // Big Scroll foreward 
        } else if (event.key === 'ArrowRight') {
            var currentPosition = $('.book').scrollTop();
            var newPosition = currentPosition + $('.book').height() - bigScrollAmount * lineHeight;
            $('.book').animate({ scrollTop: newPosition }, animationDuration);
            event.preventDefault();
        }

    });
});