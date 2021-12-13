import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login",
  template: `
    <p>login works!</p>
    <p>Query Parameter Given is:</p>
    <p>Name: {{ name ?? "Default Name" }}</p>
    <p>Email: {{ email ?? "Default Email" }}</p>

    <button (click)="goToSignup()">Sign Up</button>

    <button (click)="goToBookDetails(767, 87)">Book Details</button>
  `,
  styles: [],
})
export class LoginComponent implements OnInit {
  name?: string;
  email?: string;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    /* Its work for this url http://localhost:4200/auth/login?name=Nirmal&email=abc@mail.com */
    this.route.queryParams.subscribe((queryParam) => {
      this.name = queryParam.name;
      this.email = queryParam.email;
    });
  }

  goToSignup(): void {
    this.router.navigate(["/auth/signup"]);
  }
  goToBookDetails(id: number, authorId: number): void {
    this.router.navigate(["/public/book-details", id, "author", authorId], {
      queryParams: { name: "Nirmal" },
    });
  }
}
