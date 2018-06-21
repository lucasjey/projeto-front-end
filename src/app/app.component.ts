import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
tamanho: number = 0;
constructor(){}

  ngOnInit() {
    this.atualizarNumero();
  }
  atualizarNumero(){
    let produtoStorage = JSON.parse(localStorage.getItem("carrinho")).length;
    this.tamanho = produtoStorage;
  }
}
