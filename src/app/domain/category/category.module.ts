import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Component

import { CategoryListCompoment } from './category-list/category-list.component';
import { CategoryFormCompoment } from './category-form/category-form.component';
import { CategoryViewCompoment } from './category-view/category-view.component';
import { CategorySobreCompoment } from './category-sobre/category-sobre.component';

//routing 
import {CategoryRouting} from './category-routing.module';

//Service
import {CategoryService} from './category.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        //Componentes
        CategoryListCompoment,
        CategoryFormCompoment,
        CategoryViewCompoment,
        CategorySobreCompoment

    ],
    imports: [
      // angular
      HttpModule,
      RouterModule,
      CommonModule,

      // Routing
      CategoryRouting,

      //Form
      FormsModule,
      ReactiveFormsModule
    ],
    
    providers: [
      // services
      CategoryService
    ]
  })
  export class CategoryModule { }