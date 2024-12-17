import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';


import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoService } from './services/producto.service';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    FooterComponent,
    NavbarComponent,
    CardComponent,
    InicioComponent,
    AcercadeComponent
  ],
  imports: [
    BrowserModule, // Necesario para una aplicación web en Angular
    FormsModule, // Para el uso de formularios en Angular
    HttpClientModule, // Para realizar peticiones HTTP
    AppRoutingModule // Para la configuración de las rutas
  ],
  providers: [ProductoService], // El servicio ProductoService estará disponible en toda la aplicación
  bootstrap: [AppComponent] // Componente raíz
})
export class AppModule {
}
