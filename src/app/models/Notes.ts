export class Notes {
  userId: number; // 用户id
  sectionId: number; // 节id
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
