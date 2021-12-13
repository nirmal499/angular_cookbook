import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <!-- Header containg all links-->
    <app-header></app-header>
    <!-- routes get injected here -->
    <router-outlet></router-outlet>
    <!-- Footer -->
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  title = "angular-directive";
}
