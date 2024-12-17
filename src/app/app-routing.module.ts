import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { compileOpaqueAsyncClassMetadata } from '@angular/compiler';
import { AcercadeComponent } from './pages/acercade/acercade.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'acerca', component: AcercadeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
