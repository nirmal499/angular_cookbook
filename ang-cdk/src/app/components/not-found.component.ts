import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-not-found",
  template: ` <div><h3>404 Page Not Found</h3></div> `,
  styles: [],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
