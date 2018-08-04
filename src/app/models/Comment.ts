export class Comment {
  userId: number; // 用户ID
  sectionId: number; // 节ID
  img?: string;
  name?: string;
  content: string; // 评论内容
  chapter?: number;
  section?: number;
  sectionName?: string;
  agreeNum?: number;
  time: string; // 上传时间
}
