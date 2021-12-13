import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-public",
  template: `
    <div><h3>Public Header</h3></div>
    <div>
      <ul>
        <li>
          <a routerLink="book-details/{{ bookId1 }}/author/{{ authorId1 }}"
            >Book {{ bookId1 }} Detail</a
          >
        </li>
        <li>
          <a [routerLink]="['book-details', bookId2, 'author', authorId2]"
            >Book {{ bookId2 }} Detail</a
          >
        </li>
        <li>
          <a [routerLink]="['book-details', '99', 'author', '999']"
            >Book 99 Detail</a
          >
        </li>
      </ul>
    </div>
    <router-outlet></router-outlet>
    <div><h3>Public Footer</h3></div>
    <div>
      <p>Public '/public' Details</p>
      <p>Parent is accessing params value from child</p>
      <div *ngFor="let item of details | keyvalue">
        <p>{{ item.key }} : {{ item.value }}</p>
      </div>
    </div>
  `,
  styles: [],
})
export class PublicComponent implements OnInit {
  bookId1: number = 12;
  authorId1: number = 1;

  bookId2: number = 40;
  authorId2: number = 2;

  details: { bookId: number; authorId: number } = {
    bookId: 0,
    authorId: 0,
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    /* Parent is accessing params value from child 
      Since ngOnInit is used so, at the first initialization of the PublicComponent
      'details' get its data. After that it does not change
    */
    this.route.firstChild?.params.subscribe((param) => {
      this.details.bookId = param.id;
      this.details.authorId = param.authorId;
    });
  }
}
