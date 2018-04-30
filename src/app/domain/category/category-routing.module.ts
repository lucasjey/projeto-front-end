import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CategoryListCompoment } from './category-list/category-list.component';
import { CategoryFormCompoment } from './category-form/category-form.component';
import { CategoryViewCompoment } from './category-view/category-view.component';
import { CategorySobreCompoment } from './category-sobre/category-sobre.component';


const CategoryRoutes: Routes = [
    {path: 'list', component: CategoryListCompoment},
    {path: 'form/:id', component: CategoryFormCompoment},
    {path: 'form', component: CategoryFormCompoment},
    {path: 'view/:id', component: CategoryViewCompoment},
    {path: 'sobre', component: CategorySobreCompoment}

];

@NgModule({
    imports: [RouterModule.forChild(CategoryRoutes)],
    exports: [RouterModule]
})

export class CategoryRouting {

}