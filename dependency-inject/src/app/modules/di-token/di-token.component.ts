import { Component, OnInit } from "@angular/core";
import { Greeter } from "./classes/greeter.class";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-di-token",
  template: `
    <!-- Toolbar -->

    <h4>Configuring an Injector with DI token</h4>

    <div class="content" role="main">
      <h2 class="text-content">
        {{ user.greet() }}
      </h2>
    </div>
  `,
  styles: [],
})
export class DiTokenComponent implements OnInit {
  user!: Greeter;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }
}
