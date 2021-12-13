import { Component, forwardRef, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-rating",
  template: `
    <style>
      .rating {
        display: flex;
        margin-bottom: 10px;
      }
      .rating__star {
        cursor: pointer;
        color: grey;
        padding: 0 6px;
      }
      .rating__star:first-child {
        padding-left: 0;
      }
      .rating__star:last-child {
        padding-right: 0;
      }
      .rating__star--active {
        color: orange;
      }
    </style>
    <div class="rating">
      <!-- we are using an [ngClass] directive on each of the star
      elements to add the rating__star--active class conditionally -->
      <!--  The isMouseOver variable becomes true as soon as we mouse over any star and is turned back to false
          when we move away from the star. This means that it is only true when we're
          hovering over a star. hoveredRating tells us which star we're hovering over at the
          moment and is assigned the star's value, in other words, a value from 1 to 5. So, this
          condition is only true when we're doing a mouseover, and the hovered star's rating
          is greater than the value of the current star. So, if we're hovering over the fourth
          star, all the stars from value 1 to 4 will be highlighted as they'll have the rating__
          star--active class conditionally assigned to them -->
      <!-- This condition relies on the isMouseOver variable that we discussed previously and the value variable.
            The value variable holds the value of the selected rating, which is updated when
            we click on a star. So, this condition is applied when we're not doing a mouseover
            and we have the value of the value variable greater than the current star. This is
            especially beneficial when you have a greater value assigned to the value variable
            and try to hover over a star with a lesser value, in which case, all the stars with
            values greater than the hovered star will not be highlighted -->
      <div
        class="rating__star"
        [ngClass]="{
          'rating__star--active':
            (!isMouseOver && value >= star) ||
            (isMouseOver && (hoveredRating ? hoveredRating >= star : null))
        }"
        (mouseenter)="onRatingMouseEnter(star)"
        (mouseleave)="onRatingMouseLeave()"
        (click)="selectRating(star)"
        *ngFor="let star of [1, 2, 3, 4, 5]; let i = index"
      >
        <i class="fa fa-star"></i>
      </div>
    </div>
  `,
  styles: [],
  /* we wanted Angular to know that this RatingComponent class has
      a value accessor. This is so that we can use the Reactive forms API, specifically, the
      formControlName attribute with the <app-rating> selector, and use it as a form
      control. To do that, we provide our RatingComponent class as a provider to its
      @Component definition decorator using the NG_VALUE_ACCESSOR injection token
      as follows: */
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true,
    },
  ],
  /* Note that we're using the useExisting property with the forwardRef() method
      providing our RatingComponent class in it. We need to provide multi: true
      because Angular itself registers some value accessors using the NG_VALUE_ACCESSOR
      injection token, and there may also be third-party form controls */
})
export class RatingComponent implements OnInit, ControlValueAccessor {
  value = 2;
  hoveredRating: number | null = 2;
  isMouseOver = false;
  @Input() disabled = false;
  /* We need to use the disabled property to prevent any UI changes when it is true.
    The value of the value variable shouldn't be updated either */
  constructor() {}

  /* Then we used three events on each star: mouseenter, mouseleave, and click,
      and then used our onRatingMouseEnter, onRatingMouseLeave, and
      selectRating methods, respectively, for these events. All of this was designed to
      ensure that the entire UI is fluent and has a good user experience.  */
  onRatingMouseEnter(rating: number) {
    if (this.disabled) return;
    this.hoveredRating = rating;
    this.isMouseOver = true;
  }
  onRatingMouseLeave() {
    this.hoveredRating = null;
    this.isMouseOver = false;
  }
  selectRating(rating: number) {
    if (this.disabled) return;
    this.value = rating;
    this.onChange(rating);
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit(): void {}

  /* We registered these functions{onChange,onTouched} because whenever we do a change in our component and
      want to let ControlValueAccessor know that the value has changed, we need to call
      the onChange method ourselves. We do that in the selectRating method as follows,
      which makes sure that when we select a rating, we set the form control's value to the value
      of the selected rating */
  /* IMP */
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  /* IMP */
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  /* What if we don't want the user to provide a value for the rating? In other words, we want
      the rating form control to be disabled. For this, we did two things. First, we used the
      disabled property as an @Input(), so we can pass and control it from the parent
      component when needed. Secondly, we used the setDisabledState method from the
      ControlValueAccessor interface, so whenever the form control's disabled state is
      changed, apart from @Input(), we set the disabled property ourselves. */
  /* IMP */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /* The other way around is when we need to know when the form control's value is
      changed from outside the component. In this case, we need to assign the updated
      value to the value variable */
  /* IMP */
  writeValue(value: number) {
    this.value = value;
  }
}
