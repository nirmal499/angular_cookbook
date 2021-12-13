import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-vc-logs1",
  template: `
    <h5>Latest Version = {{ vName }}</h5>
    <div>
      <div *ngFor="let log of logs">
        {{ log }}
      </div>
    </div>
  `,
  styles: [],
})
export class VcLogs1Component implements OnInit, OnChanges {
  @Input() vName!: string;
  logs: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  /* ngOnChanges is one of the many life cycle hooks Angular provides out of the box. It
    triggers even before the ngOnInit hook. So, you get the initial values in the first call
    and the updated values later on.
    When we update the value of the vName input in the parent, ngOnChanges gets called with the updated value
    */
  ngOnChanges(changes: SimpleChanges) {
    const currValue = changes.vName.currentValue;
    if (changes.vName.isFirstChange()) {
      this.logs.push(`initial version is ${currValue.trim()}`);
    } else {
      this.logs.push(`version changed to ${currValue.trim()}`);
    }
  }
}
