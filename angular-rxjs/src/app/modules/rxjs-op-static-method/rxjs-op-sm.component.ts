import { Component, OnInit } from "@angular/core";
import { Subscription, interval, partition, merge } from "rxjs";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "app-rxjs-op-sm",
  template: `
    <h4>Working with RxJs operators using static methods</h4>

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
          <div
            class="input-stream__item"
            *ngFor="let item of combinedStreamData"
          >
            Title: {{ item.title }}, Type: {{ item.type }}
          </div>
        </div>
        <hr />
        <div class="output-stream">
          <h4>Merged</h4>
          <div class="input-stream__item" *ngFor="let item of outputStreamData">
            Title: {{ item.title }}, Type: {{ item.type }}
          </div>
        </div>
        <hr />
        <div class="output-stream">
          <h4>Movies</h4>
          <div class="input-stream__item" *ngFor="let movie of movies">
            {{ movie }}
          </div>
        </div>
        <hr />
        <div class="output-stream">
          <h4>Cartoons</h4>
          <div class="input-stream__item" *ngFor="let cartoon of cartoons">
            {{ cartoon }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class RxjsOpSmComponent implements OnInit {
  subscription: Subscription | null = null;
  combinedStreamData = [
    {
      type: "movie",
      title: "john wick",
    },
    {
      type: "cartoon",
      title: "Thunder Cats",
    },
    {
      type: "movie",
      title: "inception",
    },
    {
      type: "cartoon",
      title: "Dragon Ball Z",
    },
    {
      type: "cartoon",
      title: "Ninja Turtles",
    },
    {
      type: "movie",
      title: "interstellar",
    },
  ];
  outputStreamData: { type: string; title: string }[] = [];
  movies: string[] = [];
  cartoons: string[] = [];
  ngOnInit() {}

  startStream() {
    const streamSource = interval(1500).pipe(
      map((input) => {
        const index = input % this.combinedStreamData.length;
        return this.combinedStreamData[index];
      })
    );

    const [movieStream, cartoonStream] = partition(
      streamSource,
      (item) => item.type === "movie"
    );

    this.subscription = merge(
      movieStream.pipe(
        tap((movie) => {
          this.movies.push(movie.title);
        })
      ),
      cartoonStream.pipe(
        tap((cartoon) => {
          this.cartoons.push(cartoon.title);
        })
      )
    ).subscribe((input) => {
      this.outputStreamData.push(input);
    });
  }

  stopStream() {
    this.subscription?.unsubscribe();
    this.subscription = null;
  }
}
