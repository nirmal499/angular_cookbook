import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "../core/services/user.service";
import { IUser } from "../core/interfaces/user.interface";
import { FormControl, FormGroup } from "@angular/forms";
import { takeWhile, switchMap, debounceTime } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: [],
})
export class HomeComponent implements OnInit {
  users$!: Observable<IUser[]>;
  users!: IUser[];
  searchForm!: FormGroup;
  componentAlive!: boolean;
  constructor(private userService: UserService) {}

  // ngOnInit() {
  //   this.users$ = this.userService.getSimilarUsers("");
  // }

  ngOnInit() {
    this.componentAlive = true;
    this.searchForm = new FormGroup({
      username: new FormControl("", []),
    });

    this.searchUsers();
    /* The switchMap operator cancels the previous (inner) subscription and subscribes to
        a new Observable instead. That's why it cancels all the HTTP calls sent before in our
        example and just subscribes to the last one. This was the intended behavior for our app. */
    // this.searchForm
    //   .get("username")!
    //   .valueChanges.pipe(
    //     takeWhile(() => !!this.componentAlive),
    //     switchMap((query) => this.userService.searchUsers(query))
    //   )
    //   .subscribe((users) => {
    //     this.users = users;
    //   });

    /* In the previous recipe, we learned how to use the switchMap operator to cancel previous
      HTTP calls if a new HTTP call comes. This is fine, but why even send multiple calls when
      we can use a technique to wait a while before we send an HTTP call? Ideally, we'll just
      keep listening to duplicate requests for a period of time and will then proceed with the
      latest request. In this recipe, we'll be using the debounceTime operator to make sure
      we're only sending the HTTP call when the user stops typing for a while */

    this.searchForm
      .get("username")!
      .valueChanges.pipe(
        takeWhile(() => !!this.componentAlive),
        debounceTime(400)
      )
      .subscribe(() => {
        this.searchUsers();
      });

    /* The debounceTime operator waits for a particular time before emitting a value from
        the source Observable, and that too only when there's no more source emission at hand.
        This allows us to use the operator on the input's valueChanges Observable. When you
        type something in the input, the debounceTime operator waits for 300ms to see if you're
        still typing. And if you've not typed for those 300ms, it moves forward with the emission,
        causing the HTTP call at the end */

    /* Since we're using it within the .pipe() operator before
    the .subscribe() method, every time we change the value of the input, either by
    entering a value or by pressing the backspace key, it waits for 300ms according to the
    searchDebounceTime property and then calls the searchUsers() method */
  }

  searchUsers() {
    const query = this.searchForm.get("username")?.value;
    console.log("Hello World");
    console.log(query);
    this.userService.searchUsers(query).subscribe((users) => {
      this.users = users;
    });
  }

  ngOnDestroy() {}
}
