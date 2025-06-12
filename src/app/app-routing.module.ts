import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

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
        path: 'shoe/:shoeId',
        component: ItemDetailComponent
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
