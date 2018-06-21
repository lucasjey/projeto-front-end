import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Produto } from '../produto/produto';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  private subscription: Subscription;

  carrinho: any
  valorTotal: Number = 0;


  constructor(public appComponent: AppComponent) { }

  ngOnInit() {

    this.listar();
    this.precoTotal();

  }

  listar() {
    return localStorage.getItem("carrinho") ?
      JSON.parse(localStorage.getItem("carrinho")) :
      [];
  }

  excluirItem(i) {
  
    let carrinho = localStorage.getItem("carrinho") ?
      JSON.parse(localStorage.getItem("carrinho")) :
      [];

    carrinho = carrinho.filter(p => p.index !== i);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    this.listar();
    this.appComponent.atualizarNumero();
    this.precoTotal();
  }

  atualizarItem(produto, valor) {
    let carrinho = localStorage.getItem("carrinho") ?
            JSON.parse(localStorage.getItem("carrinho")) :
            [];
    for (let i = 0; i < carrinho.length; i++) {
      if (carrinho[i].produto.id == produto.id) {
        if (carrinho[i].quantity > 1 || valor == 1) {
          if (valor == 0) {
            carrinho[i].produto.preco = carrinho[i].produto.preco - (carrinho[i].produto.preco / carrinho[i].quantity);
            carrinho[i].quantity = carrinho[i].quantity - 1;
          } else {
            carrinho[i].produto.preco = carrinho[i].produto.preco + (carrinho[i].produto.preco / carrinho[i].quantity);
            carrinho[i].quantity = carrinho[i].quantity + 1;
          }
          localStorage.setItem("carrinho", JSON.stringify(carrinho));
        } else {
          break;
        }
      }
      this.appComponent.atualizarNumero();
      this.precoTotal();
    }
  }

  precoTotal() {
    let carrinho = localStorage.getItem("carrinho") ?
      JSON.parse(localStorage.getItem("carrinho")) :
      [];

    let valorTotalAux = 0;

    for (let i = 0; i < carrinho.length; i++) {
      valorTotalAux = valorTotalAux + carrinho[i].produto.preco;
    }

    this.valorTotal = valorTotalAux;
  }

}


// this.total = this.quante*localStorage.produto.preco;