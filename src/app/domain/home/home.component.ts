import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto';
import { ProdutoService } from '../produto/produto.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeCompoment implements OnInit{
    produto: Produto[];
    
    constructor(
         public produtoService: ProdutoService,
    ){}

    ngOnInit(){
        this.produtoService.findAll()
        .subscribe(produtos => {
          this.produto = produtos;
          console.log(this.produto);
        });
    }
}
