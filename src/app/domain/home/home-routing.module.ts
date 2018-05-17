import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeCompoment } from './home.component';

const HomeRoutes: Routes = [
    {path: 'home', component: HomeCompoment},
];

@NgModule({
    imports: [RouterModule.forChild(HomeRoutes)],
    exports: [RouterModule]
})
export class HomeRouting {

}