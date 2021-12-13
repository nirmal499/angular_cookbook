import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserType } from "src/app/constants/user-type";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: [],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    const userType = this.auth.loggedInUserType;
    this.naviageToUserRoute(userType);
  }

  naviageToUserRoute(userType: string | null) {
    if (userType != null) {
      switch (userType) {
        case UserType.Admin:
          this.router.navigate(["/admin"]);
          break;
        case UserType.Employee:
          this.router.navigate(["/employee"]);
      }
    }
  }

  loginAsAdmin() {
    const userType = UserType.Admin;
    this.auth.login(userType);
    this.naviageToUserRoute(userType);
  }

  loginAsEmployee() {
    const userType = UserType.Employee;
    this.auth.login(userType);
    this.naviageToUserRoute(userType);
  }
}
