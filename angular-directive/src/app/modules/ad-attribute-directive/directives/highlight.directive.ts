import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective implements OnChanges {
  @Input() highlightText = "";
  @Input() highlightColor = "yellow";
  originalInnerHTML = "";
  /* With the ElementRef service we can get access to the template element on which our directive is applied */
  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.highlightText.firstChange) {
      /* Check whether the new value is the first value which is "" assigned */
      this.originalInnerHTML = this.el.nativeElement.innerHTML;
      //console.log(this.originalInnerHTML);
      return;
    }

    const { currentValue } = changes.highlightText;
    // console.log(currentValue);

    if (currentValue) {
      /*  g (global match) : Find all matches rather than stopping after the first match.
          i (ignore case): If u flag is also enabled, use Unicode case folding.
      */
      const regExp = new RegExp(`(${currentValue})`, "gi");
      this.el.nativeElement.innerHTML = this.originalInnerHTML.replace(
        regExp,
        `<span style="background-color:${this.highlightColor}">\$1</span>`
      );
      /* Above I am escaping $ with \ : we want to write $1 */
      /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_a_parameter */
      //console.log(this.el.nativeElement.innerHTML);
    } else {
      /* logic to reset everything back to the originalInnerHTML
          property when we remove our search query (when the search text is empty). */
      this.el.nativeElement.innerHTML = this.originalInnerHTML;
    }
  }
}
