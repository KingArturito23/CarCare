/*global Sly */
jQuery(function ($) {
	'use strict';

	// Detect IE.
	// Feature detection of "transform-style: preserve-3d" doesn't work, so this
	// is the only way how to fall back to a 2D front page in IE that
	// doesn't have a full support of 3D transforms across the board.
	document.getElementsByTagName('html')[0].className += ' ' +
		(~window.navigator.userAgent.indexOf('MSIE') ? 'ie' : 'no-ie');

	// ==========================================================================
	//   Header screenshots
	// ==========================================================================
	var $image = $('.image-container-screenshots');
	var $frame = $image.find('.frame'); 

    $frame.sly({
        horizontal: 1,
        itemNav: 'forceCentered',
        activateMiddle: 1,
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 10,
        scrollBar: $image.find('.scrollbar'),
        scrollBy: 1,
        pagesBar: $image.find('.pages'),
        activatePageOn: 'click',
        speed: 200,
        moveBy: 600,
        elasticBounds: 1,
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,

        // Buttons
        forward: $image.find('.forward'),
        backward: $image.find('.backward'),
        prev: $image.find('.prev'),
        next: $image.find('.next'),
        prevPage: $image.find('.prevPage'),
        nextPage: $image.find('.nextPage')
    });

	// Method calling buttons
	$image.on('click', 'button[data-action]', function () {
		var action = $(this).data('action');

		switch (action) {
			case 'add':
                $frame.sly.add('<li>' + sly.items.length + '</li>');
				break;
			case 'remove':
                $frame.sly.remove(-1);
				break;
			default:
                $frame.sly(action);
		}
	});
});