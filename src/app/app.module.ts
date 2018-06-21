import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routes';
// import {CarrinhoComponent} from './domain/carrinho/carrinho.component';


@NgModule({
  declarations: [
    AppComponent,
    // CarrinhoComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
