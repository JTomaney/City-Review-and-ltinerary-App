const CityView = function (container) {
    this.container = container
}

CityView.prototype.render = function (city) {
    const cityContainer = document.createElement('div')
    cityContainer.addClass = 'city'
    
    const name = this.createHeading(city.name)
    cityContainer.appendChild(name)

    const form = document.createElement('form');
    form.id = 'rating-review-form';

    const rating1 = document.createElement('input');
    rating1.setAttribute('type', 'radio');
    rating1.id = '1-star';
    rating1.setAttribute('name', 'rating');
    rating1.setAttribute('maxlength', '1-star');
    
    const rating2 = document.createElement('input');
    rating2.setAttribute('type', 'radio');
    rating2.id = '2-star';
    rating2.setAttribute('name', 'rating');
    rating2.setAttribute('maxlength', '2-star');

    const rating3 = document.createElement('input');
    rating3.setAttribute('type', 'radio');
    rating3.id = '3-star';
    rating3.setAttribute('name', 'rating');
    rating3.setAttribute('vaule', '3-star');

    const rating4 = document.createElement('input');
    rating4.setAttribute('type', 'radio');
    rating4.id = '4-star';
    rating4.setAttribute('name', 'rating');
    rating4.setAttribute('maxlength', '4-star');

    const rating5 = document.createElement('input');
    rating5.setAttribute('type', 'radio');
    rating5.id = '5-star';
    rating5.setAttribute('name', 'rating');
    rating5.setAttribute('maxlength', '5-star');


    form.appendChild(rating1);
    form.appendChild(rating2);
    form.appendChild(rating3);
    form.appendChild(rating4);
    form.appendChild(rating5);

    const review = document.createElement('textarea');
    review.setAttribute('maxlength', 1000);
    review.id = `review`;

    form.appendChild(review);

    cityContainer.appendChild(form);
    

    this.container.appendChild(cityContainer)


}

CityView.prototype.createHeading = function(textContent) {
    const heading = document.createElement('h3')
    heading.textContent = textContent
    return heading
}

module.exports = CityView;
