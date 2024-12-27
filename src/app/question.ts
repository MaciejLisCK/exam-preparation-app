import { Answear } from "./answear";

export class Question {
  id!: string;
  text!: string;
  answears!: Answear[];
  correctAnsewarsCount!: number;
  isMultipleChoice!: boolean;
}
