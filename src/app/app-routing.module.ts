import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { compileOpaqueAsyncClassMetadata } from '@angular/compiler';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { GraficosComponent } from './pages/graficos/graficos.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'acerca', component: AcercadeComponent},
  { path: 'catalogo', component: CatalogoComponent},
  { path: 'graficos', component: GraficosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
