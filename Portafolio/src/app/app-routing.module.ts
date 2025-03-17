// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';

export const routes: Routes = [
  // { path: 'certificaciones', component: CertificacionesComponent },
  {
    path: 'navbar',
    loadChildren: () =>
      import('./navbar/navbar.module').then((m) => m.NavbarModule),
  },
  { path: 'certificaciones', loadChildren: () => import('./certificaciones/certificaciones.module').then(m => m.CertificacionesModule) },

  { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  // Aquí irán las rutas de tu aplicación
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
