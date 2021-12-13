import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-home",
  template: `
    <div class="home">
      <div class="review-container">
        <h3 class="review-container__heading">Submit Review</h3>
        <form
          class="input-container"
          [formGroup]="reviewForm"
          (ngSubmit)="submitReview(reviewForm)"
        >
          <div class="mb-3">
            <label for="ratingInput" class="form-label">Rating</label>
            <app-rating formControlName="rating"> </app-rating>
            <!-- <input
              formControlName="rating"
              type="number"
              class="form-control"
              id="ratingInput"
            /> -->
            <div
              *ngIf="
                reviewForm.get('rating')!.getError('min') ||
                reviewForm.get('rating')!.getError('max')
              "
              class="alert alert-danger"
              id="ratingError"
            >
              Rating should be between 1 and 5
            </div>
          </div>
          <div class="mb-3">
            <label for="commentInput" class="form-label">Comment</label>
            <textarea
              formControlName="comment"
              class="form-control"
              id="commentInput"
              rows="3"
            ></textarea>
          </div>
          <button
            id="submitBtn"
            [disabled]="reviewForm.invalid"
            class="btn btn-dark"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  reviewForm = new FormGroup({
    comment: new FormControl("", []),
    rating: new FormControl("", [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
  });
  constructor() {}

  submitReview(form: FormGroup) {
    console.log(form.value);
  }
  ngOnInit(): void {}
}
