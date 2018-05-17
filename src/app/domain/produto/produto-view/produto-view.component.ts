import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../../category/category';
import { CategoryService } from '../../category/category.service';

@Component({
    selector: 'produto-view',
    templateUrl: './produto-view.component.html',
    styleUrls: ['./produto-view.component.css']
})

export class ProdutoViewCompoment implements OnInit {
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

        this.produto = new Produto();

        this.categoryService.findAll()
        .subscribe(categories => {
          this.categories = categories;
        });


        this.form = this.builder.group({
            id: [],
            nome: ['', [Validators.required]],
            marca:['', [Validators.required]],
            descricao:['', [Validators.required]],
            preco:['', [Validators.required]],
            category:this.builder.control('', [Validators.required])
        }, {})
        

        

        // produto = this.route.snapshot.params['id'];

        this.form.disable();

        if (this.produto.id != null){
            this.produtoService.findOne(this.produto.id)
            .subscribe(produto => {
                this.form = this.builder.group(produto, {});
            });
        }


}

teste() {
    console.log('teste')
}

}

