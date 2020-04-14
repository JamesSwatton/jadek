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


    // toggle class for carousel accordian
        $('.info .title, .info .more').click(function() {
            $(this).parent().find('img').toggleClass('active');
            $(this).parent().parent().find('.text').toggleClass('active');
            $(this).parent().toggleClass('active');
            $(this).parent().parent().find('.excerpt').toggleClass('active');
            console.log($(this).parent().parent())
            console.log('hello')
        })
})
