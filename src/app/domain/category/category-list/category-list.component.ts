import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
    selector: 'category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})

export class CategoryListCompoment implements OnInit {
    categories: Category[]

    constructor(private service: CategoryService) { }

    ngOnInit() {
        this.service.findAll().subscribe(
            response => {
                this.categories = [];
                response.content.forEach(element => {
                    this.categories.push(element);
                });
            }
        );
    }

    delete(id: number, index: number){
        this.service.delete(id)
        .subscribe(Response=>{
            if (Response == true){
                this.categories.splice(index, 1)
            }
        })
    }

    
}
