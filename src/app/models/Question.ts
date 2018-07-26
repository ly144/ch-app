export class Question {
  img: string;
  title: string;
  answer: Answer[];
  answerNum: number;
  agreeNum: number;
  opposeNum: number;
  lookNum: number;
  chapter: number;
  section: number;
  sectionName: string;
  time: string;
}

 export class Answer {
  img: string;
  name: string;
  content: string;
  time: string;
  agreeNum: number;
  opposeNum: number;
  storey: number;
  answerNum: number;
 }
