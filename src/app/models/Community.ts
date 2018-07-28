import {Answer} from './Answer';

export class Community {
  id: number; // 获取提问者id
  img: string;   // 分类头像
  classify: string;  // 类型
  quesImg: string;  // 获取提问者头像
  quesName: string; // 获取提问者姓名
  title: string;   // 题目
  content: string; // 题目具体内容,ape组件无需展示
  answer: Answer[]; // 回答
  answerNum: number; // 回答数目
  lookNum: number;   // 浏览数
  time: string;  // 发布时间
  attentionNum: number; // 关注数
}
