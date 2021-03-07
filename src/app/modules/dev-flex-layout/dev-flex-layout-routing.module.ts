import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exemplo1Component } from './components/exemplo1/exemplo1.component';

const routes: Routes = [
  {
    path: '',
    component: Exemplo1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevFlexLayoutRoutingModule {}
