import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  discount?: number;
}

@Component({
  selector: 'app-card',
  standalone: false,
  
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Smartphone Pro X',
      description: 'Teléfono inteligente de última generación con cámara de 108MP',
      price: 599.99,
      imageUrl: 'assets/smartphone.jpg',
      category: 'Electrónica',
      discount: 10
    },
    {
      id: 2,
      name: 'Laptop WorkStation',
      description: 'Portátil de alto rendimiento para profesionales',
      price: 1299.99,
      imageUrl: 'assets/laptop.jpg',
      category: 'Computadoras'
    },
    {
      id: 3,
      name: 'Auriculares Inalámbricos',
      description: 'Sonido de alta fidelidad con cancelación de ruido',
      price: 199.99,
      imageUrl: 'assets/headphones.jpg',
      category: 'Accesorios'
    },
    {
      id: 4,
      name: 'Smartwatch Fitness',
      description: 'Seguimiento de salud y actividad física',
      price: 149.99,
      imageUrl: 'assets/smartwatch.jpg',
      category: 'Electrónica',
      discount: 15
    }
  ];

  categories: string[] = [];
  selectedCategory: string = 'Todos';

  constructor() {
    this.categories = [...new Set(this.products.map(p => p.category))];
    this.categories.unshift('Todos');
  }

  getFilteredProducts(): Product[] {
    return this.selectedCategory === 'Todos' 
      ? this.products 
      : this.products.filter(p => p.category === this.selectedCategory);
  }

  calculateDiscountedPrice(product: Product): number {
    return product.discount 
      ? product.price * (1 - product.discount / 100) 
      : product.price;
  }

  addToCart(product: Product) {
    // Implementación de lógica de carrito (proximamente)
    console.log(`Producto añadido: ${product.name}`);
  }
}
