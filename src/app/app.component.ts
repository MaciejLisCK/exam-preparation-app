import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionsBuilderService } from './questions-builder.service';
import { questions as rawQuestions } from '../../public/questions';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, NavbarComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  questionsBuilder = inject(QuestionsBuilderService);
  
  title = 'ExamPreparationApp';

  constructor() {
    const questions = this.questionsBuilder.build(rawQuestions); 
  
    
  }
}
