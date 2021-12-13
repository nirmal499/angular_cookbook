import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "../core/services/user.service";
import { IUser } from "../core/interfaces/user.interface";
import { ActivatedRoute } from "@angular/router";
import { mergeMap, takeWhile } from "rxjs/operators";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: [],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user?: IUser | null;
  similarUsers!: IUser[] | null;
  user$!: Observable<IUser | undefined>;
  similarUsers$!: Observable<IUser[]>;
  isComponentAlive!: boolean;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  /* In order to fix the issue that our similar users can be loaded before our main user,
    we'll have to sequentially load the data and show the appropriate content respectively,
    and while the content is loading, we'll show a loader. */
  ngOnInit() {
    // this.isComponentAlive = true;
    // this.route.paramMap
    //   .pipe(takeWhile(() => !!this.isComponentAlive))
    //   .subscribe((params) => {
    //     const userId = params.get("uuid");
    //     if (userId != null) {
    //       this.similarUsers$ = this.userService.getSimilarUsers(userId);
    //       this.user$ = this.userService.getUser(userId);
    //     }
    //   });

    this.isComponentAlive = true;
    this.route.paramMap
      .pipe(
        takeWhile(() => !!this.isComponentAlive),
        mergeMap((params) => {
          this.user = null;
          this.similarUsers = null;
          const userId = params.get("uuid");
          return this.userService.getUser(userId ?? "").pipe(
            mergeMap((user: IUser | undefined) => {
              this.user = user;
              return this.userService.getSimilarUsers(userId ?? "");
            })
          );
        })
      )
      .subscribe((similarUsers: IUser[]) => {
        this.similarUsers = similarUsers;
      });
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }
}
