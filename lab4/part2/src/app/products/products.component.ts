import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Product {
  name: string;
  description: string;
  imageUrls: string[];
  rating: number;
  link: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'iPhone 15',
      description: '128GB, Black',
      imageUrls: [
        'https://images.example.com/iphone15-1.jpg',
        'https://images.example.com/iphone15-2.jpg',
        'https://images.example.com/iphone15-3.jpg',
      ],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/iphone-15-128gb-black-123456/',
    },
    {
      name: 'Samsung Galaxy S23',
      description: '256GB, Phantom Black',
      imageUrls: [
        'https://images.example.com/s23-1.jpg',
        'https://images.example.com/s23-2.jpg',
        'https://images.example.com/s23-3.jpg',
      ],
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-phantom-black-654321/',
    },
    {
      name: 'MacBook Air M2',
      description: '13-inch, 256GB SSD, Silver',
      imageUrls: [
        'https://images.example.com/macbook-air-m2-1.jpg',
        'https://images.example.com/macbook-air-m2-2.jpg',
        'https://images.example.com/macbook-air-m2-3.jpg',
      ],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/macbook-air-m2-13inch-256gb-silver-789012/',
    },
    {
      name: 'PlayStation 5',
      description: 'Disc Edition, White',
      imageUrls: [
        'https://images.example.com/ps5-1.jpg',
        'https://images.example.com/ps5-2.jpg',
        'https://images.example.com/ps5-3.jpg',
      ],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/playstation-5-disc-987654/',
    },
    {
      name: 'AirPods Pro 2',
      description: 'Active Noise Cancellation',
      imageUrls: [
        'https://images.example.com/airpods-pro-1.jpg',
        'https://images.example.com/airpods-pro-2.jpg',
        'https://images.example.com/airpods-pro-3.jpg',
      ],
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/airpods-pro-2-234567/',
    },
    {
      name: 'Xiaomi Redmi Note 12',
      description: '128GB, Blue',
      imageUrls: [
        'https://images.example.com/redmi-note-12-1.jpg',
        'https://images.example.com/redmi-note-12-2.jpg',
        'https://images.example.com/redmi-note-12-3.jpg',
      ],
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/redmi-note-12-128gb-blue-345678/',
    },
  ];

  share(product: Product, platform: 'whatsapp' | 'telegram') {
    let url = '';
    const message = encodeURIComponent(
      `Check out this product: ${product.name} - ${product.link}`
    );

    if (platform === 'whatsapp') {
      url = `https://wa.me/?text=${message}`;
    } else if (platform === 'telegram') {
      url = `https://t.me/share/url?url=${product.link}&text=${message}`;
    }

    window.open(url, '_blank');
  }
}
