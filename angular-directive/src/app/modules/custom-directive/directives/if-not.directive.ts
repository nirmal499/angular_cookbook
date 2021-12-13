import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appIfNot]",
})
export class IfNotDirective {
  @Input() set appIfNot(value: boolean) {
    console.log(`appIfNot value is ${value}`);
    /* based on the value provided to the directive as input, we decide whether to add the magical
        ng-template to the view or clear the ViewContainerRef service to remove
        anything inside it */
    if (value === false) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
  /* We use the TemplateRef service to access the <ng-template> directive that Angular 
      creates for us behind the scenes,containing the host element on which our appIfNot directive is applied. */
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
