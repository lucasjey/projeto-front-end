import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../../category/category';
import { CategoryService } from '../../category/category.service';


@Component({
    selector: 'produto-form',
    templateUrl: './produto-form.component.html',
    styleUrls: ['./produto-form.component.css']
})

export class ProdutoFormCompoment implements OnInit {
    form: FormGroup;
    produto: Produto;
    categories: Category[];

    constructor(
        private produtoService: ProdutoService,
        private router: Router,
        private route: ActivatedRoute,
        private builder: FormBuilder,
        public categoryService: CategoryService,


    ) { }

    ngOnInit() {
        //validações de campos
        this.categoryService.findAll()
            .subscribe(categories => {
                this.categories = categories;
            });


        this.form = this.builder.group({
            id: [],
            nome: ['', [Validators.required]],
            marca: [],
            descricao: [],
            preco: [],
            category: []
        }, {})



        let produto: Produto = new Produto();

        produto = this.route.snapshot.params['id'];

        // if (produto != null){
        //     this.produtoService.findOne(produto.id)
        //     .subscribe(produto => {
        //         this.form.patchValue(produto);
        //     });
        // }


    }

    // Salva a produto e retorna a lista de produtos
    save(produto: Produto) {
        if (produto.id == null) {
            this.produtoService.save(produto).subscribe(data => {
                this.router.navigate(['/produto/list']);
                console.log('ta salvando');
            })
        } else {
            this.produtoService.update(produto).subscribe(
                () => this.router.navigate(['/produto/list'])
            )
        }

    }
    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err)
    }
}

