import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Exemplo1Component } from './components/exemplo1/exemplo1.component';
import { DevFlexLayoutRoutingModule } from './dev-flex-layout-routing.module';

@NgModule({
  declarations: [Exemplo1Component],
  imports: [CommonModule, FlexLayoutModule, DevFlexLayoutRoutingModule],
})
export class DevFlexLayoutModule {}
