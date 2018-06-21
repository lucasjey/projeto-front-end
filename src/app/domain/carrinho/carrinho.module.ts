import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

//routing 
import { CarrinhoRouting } from './carrinho-routing.module';

//Service
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Component

import { ProdutoModule } from '../produto/produto.module';
import { CarrinhoComponent } from './carrinho-list/carrinho.component';
import { FecharCarrinhoComponent } from './fecharCarrinho/fecharCarrinho.component';
import { CarrinhoService } from './carrinho.service';


@NgModule({
  declarations: [
    //Componentes
    CarrinhoComponent,
    FecharCarrinhoComponent
  ],
  imports: [
    // angular
    HttpModule,
    RouterModule,
    CommonModule,
    SharedModule,

    // Routing
    CarrinhoRouting,

    //Form
    FormsModule,
    ReactiveFormsModule,
    ProdutoModule
  ],

  providers: [
    // services
    CarrinhoService
  ]


})
export class CarrinhoModule { }