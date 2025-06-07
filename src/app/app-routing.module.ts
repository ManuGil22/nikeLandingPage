import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'featured',
        pathMatch: 'full'
    },
    {
        path: 'featured',
        component: HomeComponent
    },
    {
        path: ':category',
        component: CategoryListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
