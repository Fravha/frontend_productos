import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  standalone: false,
})
export class ProductoComponent implements OnInit {
  productos: any[] = [];
  nuevoProducto = { nombre: '', descripcion: '', precio: 0, codigo_barras: '', stock: 0 };

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  agregarProducto(): void {
    this.productoService.createProducto(this.nuevoProducto).subscribe(() => {
      this.obtenerProductos();
      this.nuevoProducto = { nombre: '', descripcion: '', precio: 0, codigo_barras: '', stock: 0 };
    });
  }

  actualizarProducto(producto: any): void {
    console.log('Producto a actualizar:', producto);
    console.log('ID enviado:', producto.id || producto.producto_id);
    const id = producto.id || producto.producto_id; // Verifica y ajusta si es necesario
    this.productoService.updateProducto(id, producto).subscribe(() => {
      this.obtenerProductos();
    });
  }

  eliminarProducto(id: number): void {
    this.productoService.deleteProducto(id).subscribe(() => {
      this.obtenerProductos();
    });
  }
}