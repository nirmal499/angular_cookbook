import { Component, OnInit } from "@angular/core";
import { Subscription, interval } from "rxjs";
import { takeWhile } from "rxjs/operators";

@Component({
  selector: "app-home",
  template: `
    <div class="home">
      <div class="buttons-container">
        <button
          [disabled]="!!subscription"
          class="btn btn-primary"
          (click)="startStream()"
        >
          Start Stream
        </button>
        <button
          [disabled]="!subscription"
          class="btn btn-dark"
          (click)="stopStream()"
        >
          Stop Stream
        </button>
      </div>
      <div class="cards-container">
        <div class="input-stream">
          <div class="input-stream__item" *ngFor="let item of inputStreamData">
            {{ item }}
          </div>
        </div>
        <div class="output-stream">
          <div class="input-stream__item" *ngFor="let item of outputStreamData">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  subscription: Subscription | null = null;
  inputStreamData = ["john wick", "inception", "interstellar"];
  outputStreamData: number[] = [];

  isComponentAlive!: boolean;

  constructor() {}

  ngOnInit() {
    this.isComponentAlive = true;
  }

  ngOnDestroy() {
    this.stopStream();
  }

  startStream() {
    this.isComponentAlive = true;
    const streamSource = interval(1500);
    const secondStreamSource = interval(3000);
    const fastestStreamSource = interval(500);

    /* use the takeWhile operator with each of our streams to make
        them work only when the isComponentAlive property is set to true. Since
        takeWhile takes a predicate method */
    this.subscription = streamSource
      .pipe(takeWhile(() => !!this.isComponentAlive))
      .subscribe((input) => {
        this.outputStreamData.push(input);
        console.log("stream output", input);
      });

    secondStreamSource
      .pipe(takeWhile(() => !!this.isComponentAlive))
      .subscribe((input) => {
        this.outputStreamData.push(input);
        console.log("second stream output", input);
      });

    fastestStreamSource
      .pipe(takeWhile(() => !!this.isComponentAlive))
      .subscribe((input) => {
        this.outputStreamData.push(input);
        console.log("fastest stream output", input);
      });
  }

  stopStream() {
    // this.subscription?.unsubscribe();
    // this.subscription = null;

    /* To unsubscribe all streams at once, we'll set the value of isComponentAlive to
      false in the stopStream method */
    this.isComponentAlive = false;
  }
}
