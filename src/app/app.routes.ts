import { Routes } from '@angular/router';
import { LearnComponent } from './learn/learn.component';
import { MaterialsComponent } from './materials/materials.component';

export const routes: Routes = [
    {
        path: '',
        component: LearnComponent,
    },
    {
        path: 'learn',
        component: LearnComponent,
    },
    {
        path: 'materials',
        component: MaterialsComponent,
    }
];
