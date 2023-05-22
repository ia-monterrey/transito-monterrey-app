import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReglamentoComponent } from './reglamento/reglamento.component';
import { TransitoComponent } from './transito/transito.component';
import { AppComponent } from './app.component';

const ROUTES: Routes = [
  { path: '', component: TransitoComponent},
  { path: 'reglamento', component: ReglamentoComponent },
  { path: 'transito', component: TransitoComponent},
  { path: '**',   redirectTo: '', pathMatch: 'full' }, // redirect to `first-component`
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
