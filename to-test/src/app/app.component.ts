import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div><h2>Home Header</h2></div>
    <div>
      <ul>
        <!-- Using href here will make browser to load page by refreshing. But by using routerLink 
            it does not refreshes and just load the page. That's SPA
        -->
        <li><a routerLink="/about-us">About Us</a></li>
        <li><a routerLink="/how-it-works">How it Works</a></li>
        <li><a routerLink="/auth">Authorization</a></li>
        <li><a routerLink="/public/home">Public Home</a></li>
        <li><a routerLink="/user/{{ userId }}">User</a></li>
      </ul>
    </div>
    <!-- This <router-outlet></router-outlet> will be replaced by the particular component define by the route(url) specified in the browser -->
    <router-outlet></router-outlet>
    <div><h2>Home Footer</h2></div>
  `,
  styles: [],
})
export class AppComponent {
  userId: number = 4;
  title = "to-test";
}
