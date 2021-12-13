import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-vc-logs",
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
export class VcLogsComponent implements OnInit {
  // @Input() vName!: string;
  _vName?: string;

  @Input()
  get vName() {
    return this._vName;
  }

  set vName(name: string | undefined) {
    /* Checking if given name is undefined */
    if (!name) return;
    if (!this._vName) {
      /* _vName is undefined */
      this.logs.push(`initial version is ${name.trim()}`);
    } else {
      /* _vName has some value */
      this.logs.push(`version changed to ${name.trim()}`);
    }
    this._vName = name;
  }

  logs: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
