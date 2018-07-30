import {Chapter} from './Chapter';

export class CourseChapter {
  id?: number; // 课程id
  name?: string; // 课程名
  difficulty?: string; // 课程难度
  level?: number;
  expand?: boolean;
  uploadTime?: string;
  intro?: string;         // 课程简介
  chapters: Chapter[];     // 第几章
}
