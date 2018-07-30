import {Answer} from './Answer';

export class Question {
  img: string;   // 用户头像
  title: string;  // 题目
  answer: Answer[]; // 回答
  answerNum: number; // 回答数目
  agreeNum: number;  // 赞同数
  opposeNum: number;  // 反对数
  lookNum: number;   // 浏览数
  chapter: number;  // 第几章
  section: number; // 第几节
  sectionName: string; // 节名字
  time: string;  // 发布时间
}
