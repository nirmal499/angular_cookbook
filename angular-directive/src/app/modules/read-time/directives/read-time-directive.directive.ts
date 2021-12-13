import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";

export interface ReadTimeConfig {
  wordsPerMinute: number;
}

@Directive({
  selector: "[appReadTimeDirective]",
})
export class ReadTimeDirectiveDirective {
  @Input() configuration: ReadTimeConfig = {
    wordsPerMinute: 200,
  };

  /* let's add an @Output() to the directive so that we can get the read time in
    the parent component and display it on the UI.  */
  @Output() readTimeCalculated = new EventEmitter<string>();
  constructor(private el: ElementRef) {}

  ngOnInit() {
    const text = this.el.nativeElement.textContent;
    //console.log(text);

    const time = this.calculateReadTime(text);

    const timeStr = this.createTimeString(time);
    //console.log(timeStr);
    this.readTimeCalculated.emit(timeStr);
  }

  calculateReadTime(text: string) {
    /* we count the total words in the text content. Then, we divide the word
      count by the wordsPerMinute value we have in the configuration to calculate how
      many minutes it would take to read the entire text. */
    const wordsCount = text.split(/\s+/g).length;

    const minutes = wordsCount / this.configuration.wordsPerMinute;
    //console.log(minutes);

    return Math.ceil(minutes);
  }

  createTimeString(timeInMinutes: number) {
    if (timeInMinutes === 1) {
      return "1 minute";
    } else if (timeInMinutes < 1) {
      return "< 1 minute";
    } else {
      return `${timeInMinutes} minutes`;
    }
  }
}
