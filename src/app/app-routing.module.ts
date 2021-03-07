import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'exemplo1',
    loadChildren: () =>
      import('./modules/dev-flex-layout/dev-flex-layout.module').then(
        (m) => m.DevFlexLayoutModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
