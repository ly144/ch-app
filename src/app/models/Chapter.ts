import {Sections} from './Sections';

export class Chapter {
  id?: number;
  courseId?: number; // 课程ID
  chapter?: number; // 第几章
  name: string; // 章节名
  summary: string; // 章节简介
  level?: number;
  expand?: boolean;
  sections?: Sections[]; // 第几节
}
