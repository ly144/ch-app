import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';

@Component({
  selector: 'app-ch-backstage-add-course',
  templateUrl: './ch-backstage-add-course.component.html',
  styleUrls: ['./ch-backstage-add-course.component.css']
})
export class ChBackstageAddCourseComponent implements OnInit {

  // 模态框
  isVisible = false;

  // 树分类选择框
  expandKeys = [];
  value: string;
  nodes = [
    new NzTreeNode({
      title: '前沿技术',
      key: '1001',
      disabled: true,
      children: [
        {
          title: '微服务',
          key: '10011',
          isLeaf: true,
        },
        {
          title: '区块链',
          key: '10012',
          isLeaf: true,
        }
      ]
    }),
    new NzTreeNode({
      title: '前端开发',
      key: '1002',
      disabled: true,
      children: [
        {
          title: 'HTML/CSS',
          key: '10021',
          isLeaf: true,
        },
        {
          title: 'JavaScript',
          key: '10022',
          isLeaf: true,
        }
      ]
    }),
    new NzTreeNode({
      title: '后端开发',
      key: '1003',
      disabled: true,
      children: [
        {
          title: 'Java',
          key: '10031',
          isLeaf: true,
        },
        {
          title: 'SpringBoot',
          key: '10032',
          isLeaf: true,
        }
      ]
    })
  ];

  // 树难度选择框
  nodesDiffcult = [
    new NzTreeNode({
      title: '初级',
      key: '1001',
      isLeaf: true,
    }),
    new NzTreeNode({
      title: '中级',
      key: '1002',
      isLeaf: true,
    }),
    new NzTreeNode({
      title: '高级',
      key: '1003',
      isLeaf: true,
    })
  ];

  onChange($event: NzTreeNode): void {
    console.log($event);
  }


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
