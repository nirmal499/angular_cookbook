import { Component, OnInit } from "@angular/core";
import { Subscription, interval, merge } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-rxjs-op-im",
  template: `
    <h4>Working with RxJs operators using instance methods</h4>

    <div class="content" role="main">
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
        <hr />
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
export class RxjsOpImComponent implements OnInit {
  subscription: Subscription | null = null;
  inputStreamData = ["john wick", "inception", "interstellar"];
  cartoonsStreamData = ["thunder cats", "Dragon Ball Z", "Ninja Turtles"];
  outputStreamData: string[] = [];

  ngOnInit() {}

  startStream() {
    const streamSource = interval(1500);

    const cartoonStreamSource = interval(1000).pipe(
      map((output) => output % this.cartoonsStreamData.length),
      map((index) => this.cartoonsStreamData[index])
    );
    const inputStreamSource = streamSource.pipe(
      map((output) => output % this.inputStreamData.length),
      map((index) => this.inputStreamData[index])
    );

    /* https://www.learnrxjs.io/learn-rxjs/operators/combination/merge */
    this.subscription = merge(inputStreamSource, cartoonStreamSource).subscribe(
      (element) => this.outputStreamData.push(element)
    );
    // this.subscription = streamSource.subscribe((input) => {
    //   this.outputStreamData.push(input);
    // });
  }

  stopStream() {
    this.subscription?.unsubscribe();
    this.subscription = null;
  }
}
