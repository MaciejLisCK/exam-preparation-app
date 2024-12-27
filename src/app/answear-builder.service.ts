import { Injectable } from '@angular/core';
import { Answear } from './answear';

@Injectable({
  providedIn: 'root'
})
export class AnswearBuilderService {
  build(rawAnswear: any): Answear {
    const answear = new Answear();

    answear.text = rawAnswear.text;
    answear.isCorrect = rawAnswear.isCorrect;

    return answear;
  }
}
