import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CarrinhoComponent } from './carrinho-list/carrinho.component';
import { FecharCarrinhoComponent } from './fecharCarrinho/fecharCarrinho.component';


const CarrinhoRoutes: Routes = [
    {path: 'list', component: CarrinhoComponent},
    {path: 'fecharcarrinho', component: FecharCarrinhoComponent},
];

@NgModule({
    imports: [RouterModule.forChild(CarrinhoRoutes)],
    exports: [RouterModule]
})
export class CarrinhoRouting {

}