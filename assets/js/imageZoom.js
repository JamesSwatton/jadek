$(document).ready(function() {
    $('p img').each(function(el) {
        $(this).attr('data-zoomable', '');
    })
    mediumZoom($('[data-zoomable]').toArray(), {
    });
})
