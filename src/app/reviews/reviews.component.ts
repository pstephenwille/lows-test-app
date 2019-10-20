import {Component, OnInit} from '@angular/core';
import {ReviewsService} from "../services/reviews.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  providers: [ReviewsService]
})
export class ReviewsComponent implements OnInit {

  private reviews: object;

  constructor(private reviewService: ReviewsService) {
  }

  ngOnInit() {
    this.reviews = this.reviewService.getReviews();
  }

}
