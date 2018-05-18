import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//routing 
import { CarrinhoRouting } from './carrinho-routing.module';

//Service
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Component
import { CarrinhoComponent } from './carrinho.component';
import { ProdutoModule } from '../produto/produto.module';


@NgModule({
  declarations: [
    //Componentes
    CarrinhoComponent
  ],
  imports: [
    // angular
    HttpModule,
    RouterModule,
    CommonModule,

    // Routing
    CarrinhoRouting,

    //Form
    FormsModule,
    ReactiveFormsModule,
    ProdutoModule
  ],


})
export class CarrinhoModule { }