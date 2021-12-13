import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-delete-book",
  template: `
    <p>delete-book works!</p>
    <p>Delete Book of User {{ userId }}</p>
  `,
  styles: [],
})
export class DeleteBookComponent implements OnInit {
  userId: string = "";
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    /* Child accessing params data from parent */
    this.route.parent?.params.subscribe((param) => {
      this.userId = param.userId;
    });
  }
}
