var changeFontSize = function (increaseFont) {
    var fontTargets = new Array('html', 'p', 'a', 'h1', 'h2', 'h3', 'li', 'td', 'th', 'div');

    fontTargets.forEach(function (element) {
        var $element = $(element);
        var newFontSize;
        var currentFontSize = $element.css('font-size');
        var currentFontSizeNum = parseFloat(currentFontSize, 10);

        if (increaseFont) {
            $element.css('font-size', 0);
            newFontSize = currentFontSizeNum * 1.1;
        } else {
            newFontSize = currentFontSizeNum * 0.9;
        }

        $element.css('font-size', newFontSize);
    });
};

$(document).ready(function () {
    // Reset Font Size
    var originalFontSize = $('html').css('font-size');

    $(".resetFont").click(function () {
        $('html').css('font-size', originalFontSize);
    });
    // Increase Font Size
    $(".increaseFont").on('click', function () {
        changeFontSize(true);
    });
    // Decrease Font Size
    $(".decreaseFont").on('click', function () {
        changeFontSize(false);
    });
});