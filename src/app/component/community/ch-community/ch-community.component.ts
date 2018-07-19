import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ch-community',
  templateUrl: './ch-community.component.html',
  styleUrls: ['./ch-community.component.css']
})
export class ChCommunityComponent implements OnInit {

  isONFocusClass = false;

  onFocusClass(s: string) {
    if (s === 'on') {
      this.isONFocusClass = true;
    } else if (s === 'off') {
      this.isONFocusClass = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
