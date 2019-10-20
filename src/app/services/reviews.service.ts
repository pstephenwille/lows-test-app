import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private reviews = [];

  constructor() {
  }

  getReviews() {
    return {
      summary: {
        rating: {
          text: 'Good',
          digits: [3.6, 5]
        },
        verifiedReviews: 7919
      },
      criteria: [{
        name: 'Cleanliness',
        rating: {
          text: '',
          digits: [3.9, 5]
        }
      },
        {
          name: 'Service and Staff',
          rating: {
            text: '',
            digits: [3.9, 5]
          }
        },
        {
          name: 'Ammenities',
          rating: {
            text: '',
            digits: [3.9, 5]
          }
        }],
      travelerType: {
        title: 'Traveler type',
        types: [{
          text: 'Couples',
          state: false
        },
          {
            text: 'Solo travelers',
            state: false
          }, {
            text: 'Business travelers',
            state: false
          }]
      },
      guestReviews: {
        review: [
          {
            rating: {
              text: 'Excellent',
              digits: [5, 5]
            },
            title: 'Verified traveler',
            data: 'Oct 17, 2019',
            text: 'This traveler didn’t leave comments with their review'
          }, {
            rating: {
              text: 'Excellent',
              digits: [5, 5]
            },
            title: 'Verified traveler',
            data: 'Oct 17, 2019',
            text: 'This traveler didn’t leave comments with their review'
          }, {
            rating: {
              text: 'Excellent',
              digits: [5, 5]
            },
            title: 'Verified traveler',
            data: 'Oct 17, 2019',
            text: 'This traveler didn’t leave comments with their review'
          },
        ]
      }
    }
  }
}
