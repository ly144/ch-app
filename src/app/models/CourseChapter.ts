export class CourseChapter {
  intro: string;         // 课程简介
  chapters: Chapter[];     // 第几章
}

export class Chapter {
  id: number;
  chapter: number;       // 第几章
  name: string;          // 章节名
  summary: string;       // 章节简介
  sections: Sections[];    // 第几节
}

export class Sections {
  id: number;            // 节ID
  section: number;       // 第几节
  name: string;          // 节名
  time: string;          // 节时长
  learnedSections: number; // 是否学习
  learningHalfs: number;  // 学至一半
  newLearn: number;      // 最近学习
}
