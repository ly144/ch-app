export class Answer {
  userId: number; // 用户id
  questionId?: number; // 问答id
  communityId?: number; // 猿问问题id
  img?: string; // 回答者用户头像
  name?: string; // 回答者姓名
  content: string;  // 回答内容
  time: string;   // 回答时间
  agreeNum?: number;  // 赞同数
  opposeNum?: number; // 反对数
  storey?: number; // 楼层数
  answerNum?: number; // 回复数
}
