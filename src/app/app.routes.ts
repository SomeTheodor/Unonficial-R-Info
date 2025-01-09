import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DocPageComponent } from './components/doc-page/doc-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Ruta para la página principal
  { path: 'doc', component: DocPageComponent }   // Ruta para la documentación
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}



