import { Answear } from "./answear";

export class Question {
  text!: string;
  answears!: Answear[];
  correctAnsewarsCount!: number;
  isMultipleChoice!: boolean;
}
