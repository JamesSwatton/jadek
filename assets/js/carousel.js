$(document).ready(function() {
    var carousels = $('.carousel-container').toArray();
    carousels.forEach(car => {
        const $carousel = $(`#${car.id} .carousel`).flickity();
        const numOfImages = $(`#${car.id} .carousel-cell`).length;
        let index = 1;

        $(`#${car.id} .previous`).on('click', function() {
            if (index > 1) {
                index--;
                $carousel.flickity('previous');
        $(`#${car.id} .image-num`).text(`${index}/${numOfImages}`); 
            }
        })
        $(`#${car.id} .next`).on('click', function() {
            if (index < numOfImages) {
                index++;
                $carousel.flickity('next');
        $(`#${car.id} .image-num`).text(`${index}/${numOfImages}`); 
            }
        })
        $(`#${car.id} .image-num`).text(`${index}/${numOfImages}`); 
    })


    $(document).ready(function() {
        $('.plus img').click(function() {
            $(this).toggleClass('active');
        })
    })
})
