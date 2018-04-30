import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
    selector: 'produto-list',
    templateUrl: './produto-list.component.html',
    styleUrls: ['./produto-list.component.css']
})

export class ProdutoListCompoment implements OnInit {
    produtos: Produto[]

    constructor(private service: ProdutoService) { }

    ngOnInit() {
        this.service.findAll().subscribe(
            response => {
                this.produtos = [];
                response.content.forEach(element => {
                    this.produtos.push(element);
                });
            }
        );
    }

    delete(id: number, index: number){
        this.service.delete(id)
        .subscribe(Response=>{
            if (Response == true){
                this.produtos.splice(index, 1)
            }
        })
    }

    
}
