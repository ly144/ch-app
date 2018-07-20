import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ch-backstage-add-chapter',
  templateUrl: './ch-backstage-add-chapter.component.html',
  styleUrls: ['./ch-backstage-add-chapter.component.css']
})
export class ChBackstageAddChapterComponent implements OnInit {

  value: string;

  // 模态框
  isVisible = false;

  // 模态框
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


  constructor() { }

  ngOnInit() {
  }

}
