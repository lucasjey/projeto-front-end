import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ProdutoListCompoment } from './produto-list/produto-list.component';
import { ProdutoFormCompoment } from './produto-form/produto-form.component';

const ProdutoRoutes: Routes = [
    {path: 'list', component: ProdutoListCompoment},
    {path: 'form', component: ProdutoFormCompoment},

];

@NgModule({
    imports: [RouterModule.forChild(ProdutoRoutes)],
    exports: [RouterModule]
})

export class ProdutoRouting {

}