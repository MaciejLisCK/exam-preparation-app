import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Store } from '@ngxs/store';
import { LoadQuestionsAction } from './questions/questions.actions';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, NavbarComponent, PdfViewerModule ],
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
