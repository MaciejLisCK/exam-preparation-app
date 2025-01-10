import { Routes } from '@angular/router';
import { LearnComponent } from './learn/learn.component';
import { MaterialsComponent } from './materials/materials.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
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
