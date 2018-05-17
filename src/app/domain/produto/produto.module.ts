import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Component

import { ProdutoListCompoment } from './produto-list/produto-list.component';
import { ProdutoFormCompoment } from './produto-form/produto-form.component';

//routing 
import {ProdutoRouting} from './produto-routing.module';

//Service
import {ProdutoService} from './produto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from '../category/category.service';
import { ProdutoViewCompoment } from './produto-view/produto-view.component';

@NgModule({
    declarations: [
        //Componentes
        ProdutoListCompoment,
        ProdutoFormCompoment,
        ProdutoViewCompoment,

    ],
    imports: [
      // angular
      HttpModule,
      RouterModule,
      CommonModule,

      // Routing
      ProdutoRouting,

      //Form
      FormsModule,
      ReactiveFormsModule
    ],
    
    providers: [
      // services
      ProdutoService,
      CategoryService
    ]
  })
  export class ProdutoModule { }