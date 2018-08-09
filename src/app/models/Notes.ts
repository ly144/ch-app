export class Notes {
  id?: number;
  userId: number; // 用户id
  sectionId: number; // 节id
  courseName?: string;
  courseId?: number;
  img?: string;
  name?: string;
  chapter?: number;
  section?: number;
  sectionName?: string;
  content: string; // 笔记内容
  agreeNum?: number;
  gatherNum?: number;
  time: string; // 发表时间
}
