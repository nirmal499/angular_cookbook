import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-book-details",
  template: `
    <p>book-details works!</p>
    <p>Id = {{ id }}</p>
    <p>AuthorId = {{ authorId }}</p>
  `,
  styles: [],
})
export class BookDetailsComponent implements OnInit {
  public id: number = 0;
  authorId: number = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //console.log(this.route);
    this.route.params.subscribe((param) => {
      //console.log(param);
      this.id = param.id;
      this.authorId = param["authorId"];
    });
  }
}
