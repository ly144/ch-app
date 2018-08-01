import {Component, OnInit} from '@angular/core';
import {Community} from '../../../models/Community';
import {ApeService} from '../../../service/ape.service';

@Component({
  selector: 'app-ch-community',
  templateUrl: './ch-community.component.html',
  styleUrls: ['./ch-community.component.css']
})
export class ChCommunityComponent implements OnInit {
   // 我要回答
  showAskBtn = true;
  showAsk = false;

  community: Community;

  isONFocusClass = false;

  onFocusClass(s: string) {
    if (s === 'on') {
      this.isONFocusClass = true;
    } else if (s === 'off') {
      this.isONFocusClass = false;
    }
  }

  init() {
    this.apeService.getApeCommunity(1).subscribe((community: Community) => {
      console.log(community);
      this.community = community;
    });
  }

  // 我要回答框
  show() {
    this.showAskBtn = false;
    this.showAsk = true;
  }

  constructor(private apeService: ApeService) {
  }

  ngOnInit() {
    this.init();
  }

}
