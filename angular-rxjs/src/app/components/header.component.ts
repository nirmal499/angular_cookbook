import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <div>
      <h2>Components communication</h2>
    </div>
    <div>
      <ul>
        <li>
          <a routerLink="/rxjs-operator-instance-methods"
            >Working with RxJS operators using instance methods</a
          >
        </li>
        <li>
          <a routerLink="rxjs-operator-static-methods"
            >Working with RxJS operators using static methods</a
          >
        </li>
        <li>
          <a routerLink="unsubscribing-streams"
            >Unsubscribing streams to avoid memory leaks</a
          >
        </li>
        <li>
          <a routerLink="using-combineLatest"
            >Using combineLatest to subscribe to multiple streams together</a
          >
        </li>
      </ul>
    </div>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
