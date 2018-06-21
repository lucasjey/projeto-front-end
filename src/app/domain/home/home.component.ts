import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto';
import { ProdutoService } from '../produto/produto.service';
import { AppComponent } from '../../app.component';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeCompoment implements OnInit {
    produt: Produto[];
    dtTrigger: Subject<Produto> = new Subject();

    constructor(
        public produtoService: ProdutoService,
        public appComponent: AppComponent,
    ) { }

    ngOnInit() {
        this.produtoService.findAll()
            .subscribe(produtos => {
                this.produt = produtos;
                console.log(this.produt);
            });
        return localStorage.getItem("produt") ?
      JSON.parse(localStorage.getItem("produt")) :
      [];
    }

    incluirProdutoNoCarrinho(produto) {
        let carrinho = localStorage.getItem("carrinho") ?
            JSON.parse(localStorage.getItem("carrinho")) :
            [];

        let itemCarrinho = {
            produto: produto,
            index: carrinho.length + 1,
            quantity: 1,
            valorUnitario: 0
        }
        var vari = true;

        for (let i = 0; i < carrinho.length; i++) {
            if (carrinho[i].produto.id == itemCarrinho.produto.id) {
                carrinho[i].produto.preco = carrinho[i].produto.preco + itemCarrinho.produto.preco;
                carrinho[i].quantity = carrinho[i].quantity + 1;
                localStorage.setItem("carrinho", JSON.stringify(carrinho));
                vari = false;
            }
        }
        
        itemCarrinho.valorUnitario = produto.preco;

        if (vari) {
            carrinho.push(itemCarrinho);
        }

        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        this.appComponent.atualizarNumero();

        // carrinho.push(itemCarrinho);
        // localStorage.setItem("carrinho", JSON.stringify(carrinho));
        // this.appComponent.atualizarNumero();
    }

}
