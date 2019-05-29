const PubSub = require('../helpers/pubsub.js')

const CityView = function (container) {
    this.container = container
}

CityView.prototype.render = function (city) {
    const cityContainer = document.createElement('div')
    cityContainer.addClass = 'city'
    cityContainer.id = `${city.name}-container`

    const name = this.createHeading(city.name)
    cityContainer.appendChild(name)

    const reviewRatingForm = this.createForm(city, cityContainer)
    cityContainer.appendChild(reviewRatingForm);

    const itineraryButton = this.createItineraryButton(city)
    cityContainer.appendChild(itineraryButton)

    this.container.appendChild(cityContainer)

}

CityView.prototype.createHeading = function(textContent) {
    const heading = document.createElement('h3')
    heading.textContent = textContent
    return heading
}

CityView.prototype.createItineraryButton = function(city){
  const itineraryButton = document.createElement('button')
  itineraryButton.id = 'itinerary-buttton'
  itineraryButton.textContent = 'Add to Itinerary'

  itineraryButton.addEventListener('click', (event) => {
    
    const newItineraryItem = this.createItineraryItem(city)
    PubSub.publish('CityView:itinerary-item-submitted', newItineraryItem)
    // cityContainer.innerHTML = `Added to Itinerary`
  })
  return itineraryButton;
}

CityView.prototype.createForm = function(city, container){
    const form = document.createElement('form');
    form.id = 'form';

    const rating1 = document.createElement('input');
    rating1.setAttribute('type', 'radio');
    rating1.id = '1-star';
    rating1.setAttribute('name', 'rating');
    rating1.setAttribute('value', '1-star');

    const rating2 = document.createElement('input');
    rating2.setAttribute('type', 'radio');
    rating2.id = '2-star';
    rating2.setAttribute('name', 'rating');
    rating2.setAttribute('value', '2-star');

    const rating3 = document.createElement('input');
    rating3.setAttribute('type', 'radio');
    rating3.id = '3-star';
    rating3.setAttribute('name', 'rating');
    rating3.setAttribute('value', '3-star');

    const rating4 = document.createElement('input');
    rating4.setAttribute('type', 'radio');
    rating4.id = '4-star';
    rating4.setAttribute('name', 'rating');
    rating4.setAttribute('value', '4-star');

    const rating5 = document.createElement('input');
    rating5.setAttribute('type', 'radio');
    rating5.id = '5-star';
    rating5.setAttribute('name', 'rating');
    rating5.setAttribute('value', '5-star');

    form.appendChild(rating1);
    form.appendChild(rating2);
    form.appendChild(rating3);
    form.appendChild(rating4);
    form.appendChild(rating5);

    const review = document.createElement('textarea');
    review.setAttribute('maxlength', 1000);
    review.id = `review`;

    const name = document.createElement('input')
    name.style.display = 'none'
    name.setAttribute('name', 'name')
    name.value = city.name

    const latitude = document.createElement('input')
    latitude.style.display = 'none'
    latitude.setAttribute('name', 'latitude')
    latitude.value = city.latitude

    const longitude = document.createElement('input')
    longitude.style.display = 'none'
    longitude.setAttribute('name', 'longitude')
    longitude.value = city.longitude

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit')
    submit.setAttribute('value', 'Submit Review')

    form.appendChild(review);
    form.appendChild(submit);
    form.appendChild(name);
    form.appendChild(latitude);
    form.appendChild(longitude);

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const newReview = this.createReview(event.target)
      PubSub.publish('CityView:review-submitted', newReview)
      container.innerHTML = ``
    })

    return form;
}

CityView.prototype.createReview = function (form) {
  const newReview = {
    name: form.name.value,
    latitude: form.latitude.value,
    longitude: form.longitude.value,
    rating: form.rating.value,
    review: form.review.value,
  }
  return newReview
}

CityView.prototype.createItineraryItem = function (city) {
    const newItineraryItem = {
        name: city.name,
        latitude: city.latitude,
        longitude: city.longitude,
    }
  return newItineraryItem;
}


module.exports = CityView;
