import { Component, OnInit, ViewChild } from "@angular/core";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { Gallery2Component } from "./components/gallery2/gallery2.component";

@Component({
  selector: "app-cc-template-vars",
  template: `
    <div>
      <div>
        <h3>
          Use Angular template reference variables to access a child component
          into a parent component's template
        </h3>
        <div>
          <button (click)="addNewPicture1(gallery)">Add Picture</button><br />
          <button (click)="removeFirstPicture1(gallery)">Remove First</button>
        </div>
        <app-gallery #gallery></app-gallery>
      </div>
      <br />
      <br />
      <div>
        <h3>
          Use the ViewChild decorator to access a child component in a parent
          component's class.
        </h3>
        <div>
          <button (click)="addNewPicture2()">Add Picture</button><br />
          <button (click)="removeFirstPicture2()">Remove First</button>
        </div>
        <app-gallery2 #gallery></app-gallery2>
      </div>
    </div>
  `,
  styles: [],
})
export class CcTemplateVarsComponent implements OnInit {
  @ViewChild(Gallery2Component) gallery!: Gallery2Component;
  constructor() {}

  addNewPicture1(gallery: GalleryComponent) {
    //console.log("added new picture");
    gallery.pictures.unshift(gallery.generateNum());
  }

  removeFirstPicture1(gallery: GalleryComponent) {
    //console.log("removed first picture");
    gallery.pictures.shift();
  }

  addNewPicture2() {
    //console.log("added new picture");
    this.gallery.pictures.unshift(this.gallery.generateNum());
  }

  removeFirstPicture2() {
    //console.log("removed first picture");
    this.gallery.pictures.shift();
  }

  ngOnInit(): void {}
}
