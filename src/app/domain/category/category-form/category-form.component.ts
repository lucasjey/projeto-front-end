import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'category-form',
    templateUrl: './category-form.component.html',
    styleUrls: ['./category-form.component.css']
})

export class CategoryFormCompoment implements OnInit {
    form: FormGroup;
    category: Category;

    constructor(
        private categoryService: CategoryService,
        private router: Router, 
        private route: ActivatedRoute,
        private builder: FormBuilder,

    ) { }

    ngOnInit() {
        //validações de campos

        this.form = this.builder.group({
            id: [],
            nome: ['', [Validators.required]],
        }, {})

        let category: Category = new Category();

        category.id = this.route.snapshot.params['id'];


        if (category != null){
            this.categoryService.findOne(category.id)
            .subscribe(category => {
                this.form.patchValue(category);
            });
            
        }

   
}
// Salva a categoria e retorna a lista de categorias
    save(category : Category) {
        if(category.id == null) {
            this.categoryService.save(category).subscribe(data => {
                this.router.navigate(['/category/list']);
                console.log('ta salvando');
            })
        } else {
            this.categoryService.update(category).subscribe(
                () => this.router.navigate(['/category/list'])
            )
        }

    }

     private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err)
    }
}

