import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Store } from '@ngxs/store';
import { LoadQuestionsAction } from './questions/questions.actions';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, NavbarComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  store = inject(Store);

  title = 'sep-g1-exam-preparation';

  constructor() {
    this.store.dispatch(new LoadQuestionsAction());
  }
}
