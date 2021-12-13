import { InjectionToken } from "@angular/core";
import { User } from "../interfaces/user.interface";

export class Greeter implements User {
  firstName;
  lastName;

  constructor(user: User) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }

  greet() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

/* Notice that we're using providedIn: 'root' within the token definition. This means that there
will be only one instance of the class in the entire application */
export const GREETER = new InjectionToken("Greeter", {
  providedIn: "root",

  factory: () => Greeter,
});

/* creating an InjectionToken for our Greeter class, which is a regular TypeScript
class, and then we'll inject it into our service */
