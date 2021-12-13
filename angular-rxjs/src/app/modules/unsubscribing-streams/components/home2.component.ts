import { Component, OnInit } from "@angular/core";
import { Subscription, interval, Observable, merge } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

@Component({
  selector: "app-home2",
  template: `
    <div class="home">
      <div class="cards-container">
        <div class="input-stream">
          <div class="input-stream__item" *ngFor="let item of inputStreamData">
            {{ item }}
          </div>
        </div>
        <div class="output-stream">
          <!-- Fun fact—streams don't emit any value unless they're subscribed to. "But Ahsan, we didn't
              subscribe to the stream, we just merged and mapped the data. Where's the subscription?"
              Glad you asked. Angular's async pipe subscribes to the stream itself, which triggers our
              console.log -->
          <div
            class="input-stream__item"
            *ngFor="let item of streamOutput$ | async"
          >
            {{ item }}
          </div>
        </div>
        <!-- The async pipe has a limitation, which is that you cannot stop the
              subscription until the component is destroyed. In such cases, you'd want to go
              for in-component subscriptions using something such as the takeWhile/
              takeUntil operator or doing a regular .unsubscribe method yourself
              when the component is destroyed -->
      </div>
    </div>
  `,
  styles: [],
})
export class Home2Component implements OnInit {
  //subscription: Subscription | null = null;
  inputStreamData = ["john wick", "inception", "interstellar"];
  outputStreamData: number[] = [];

  isComponentAlive!: boolean;

  streamOutput$?: Observable<number[]>;

  constructor() {}

  ngOnInit() {
    this.isComponentAlive = true;
    this.startStream();
  }

  // ngOnDestroy() {
  //   this.stopStream();
  // }

  startStream() {
    this.isComponentAlive = true;
    const streamSource = interval(1500);
    const secondStreamSource = interval(3000);
    const fastestStreamSource = interval(500);

    /* Angular's async pipe automatically destroys/unsubscribes the subscription as soon as
      the component destroys */
    this.streamOutput$ = merge(
      streamSource,
      secondStreamSource,
      fastestStreamSource
    ).pipe(
      takeWhile(() => !!this.isComponentAlive),
      map((output) => {
        console.log(output);

        this.outputStreamData = [...this.outputStreamData, output];
        return this.outputStreamData;
      })
    );

    /* use the takeWhile operator with each of our streams to make
        them work only when the isComponentAlive property is set to true. Since
        takeWhile takes a predicate method */
    // this.subscription = streamSource
    //   .pipe(takeWhile(() => !!this.isComponentAlive))
    //   .subscribe((input) => {
    //     this.outputStreamData.push(input);
    //     console.log("stream output", input);
    //   });

    // secondStreamSource
    //   .pipe(takeWhile(() => !!this.isComponentAlive))
    //   .subscribe((input) => {
    //     this.outputStreamData.push(input);
    //     console.log("second stream output", input);
    //   });

    // fastestStreamSource
    //   .pipe(takeWhile(() => !!this.isComponentAlive))
    //   .subscribe((input) => {
    //     this.outputStreamData.push(input);
    //     console.log("fastest stream output", input);
    //   });
  }

  stopStream() {
    // this.subscription?.unsubscribe();
    // this.subscription = null;

    /* To unsubscribe all streams at once, we'll set the value of isComponentAlive to
      false in the stopStream method */
    this.isComponentAlive = false;
  }
}
