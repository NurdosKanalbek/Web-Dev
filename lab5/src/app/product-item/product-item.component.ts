import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product1 } from '../models'; // ✅ Импортируем Product

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product!: Product1;
  @Output() remove = new EventEmitter<number>();

  likeProduct() {
    this.product.likes++;
  }
}
