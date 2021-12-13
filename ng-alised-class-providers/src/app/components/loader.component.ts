import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loader",
  template: `
    <style>
      .loading {
        height: 0;
        width: 0;
        padding: 15px;
        border: 6px solid #ccc;
        border-right-color: #888;
        border-radius: 22px;
        -webkit-animation: rotate 1s infinite linear;
        /* left, top and position just for the demo! */
        position: absolute;
        left: 50%;
        top: 50%;
      }

      @-webkit-keyframes rotate {
        /* 100% keyframe for  clockwise. 
     use 0% instead for anticlockwise */
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
    </style>

    <div>
      <div class="loading"></div>
    </div>
  `,
  styles: [],
})
export class LoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
