export class Sections {
  id?: number;            // 节ID
  chapterId?: number; // 章id
  section?: number;       // 第几节
  name: string;          // 节名
  time?: string;          // 节时长
  learnedSections?: number; // 是否学习
  learningHalfs?: number;  // 学至一半
  newLearn?: number;      // 最近学习
  video?: string;
}
