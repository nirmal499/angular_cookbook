import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gallery2",
  template: `
    <div>
      <div *ngFor="let pic of pictures">
        <ul>
          <li>{{ pic }}</li>
        </ul>
      </div>
    </div>
  `,
  styles: [],
})
export class Gallery2Component implements OnInit {
  pictures: number[] = [];
  constructor() {}

  ngOnInit(): void {
    this.pictures = new Array(5).fill(0).map(this.generateNum);
  }

  generateNum() {
    return Math.random() * 30 + 1;
  }
}
