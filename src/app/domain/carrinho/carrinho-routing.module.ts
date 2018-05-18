import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CarrinhoComponent } from './carrinho.component';

const CarrinhoRoutes: Routes = [
    {path: 'carrinho', component: CarrinhoComponent},
];

@NgModule({
    imports: [RouterModule.forChild(CarrinhoRoutes)],
    exports: [RouterModule]
})
export class CarrinhoRouting {

}