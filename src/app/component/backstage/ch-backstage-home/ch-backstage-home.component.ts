import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ch-backstage-home',
  templateUrl: './ch-backstage-home.component.html',
  styleUrls: ['./ch-backstage-home.component.css']
})
export class ChBackstageHomeComponent implements OnInit {

  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  constructor() { }

  ngOnInit() {
  }

}
