import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'category-view',
    templateUrl: './category-view.component.html',
    styleUrls: ['./category-view.component.css']
})

export class CategoryViewCompoment implements OnInit{
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

        this.category = new Category();
        
        this.form = this.builder.group({
            id: [],
            nome: ['', [Validators.required]],
        }, {})

        let category: Category = new Category();

        category.id = this.route.snapshot.params['id'];

        this.form.disable();


        if (category != null){
            this.categoryService.findOne(category.id)
            .subscribe(category => {
                this.form = this.builder.group(category, {});
            });
            
        }

   
}
}