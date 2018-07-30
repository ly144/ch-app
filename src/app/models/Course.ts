export class Course {
  id?: number;          // 课程编号
  typeId: number;      // 类型编号
  name: string;        // 课程名称
  userId: number;      // 教师ID
  shortIntro: string;  // 课程简短介绍
  intro: string;       // 课程简介
  difficulty: string;  // 课程难度
  time: string;        // 课程时长
  people?: number;      // 学习人数
  img: string;         // 课程图像
  uploadTime: string;  // 课程上传时间
  know: string;        // 课程须知
  learnWhat: string;   // 学到什么
}
