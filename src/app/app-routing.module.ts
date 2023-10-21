import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicRowAddComponent } from './components/dynamic-row-add/dynamic-row-add.component';
import { DynamicScrollComponent } from './components/dynamic-scroll/dynamic-scroll.component';

const routes: Routes = [
  { path: 'dynamic-row-add', component: DynamicRowAddComponent },
  { path: 'dynamic-scroll', component: DynamicScrollComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}
