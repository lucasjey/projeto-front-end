import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  private subscription: Subscription;

  carrinho: any

  constructor() { }

  ngOnInit() {

    this.carrinho = localStorage.getItem("carrinho") ?
      JSON.parse(localStorage.getItem("carrinho")) :
      [];

  }

  excluirItem(index) {
    this.carrinho = this.carrinho.filter(p => p.index !== index);
    let carrinho = this.carrinho;

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }
}
