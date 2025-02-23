import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../app/product-list/product-list.component';
import { Product, Category } from '../app/models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
    <div>
      <h1>Categories</h1>
      <ul>
        <li
          *ngFor="let category of categories"
          (click)="selectCategory(category)"
        >
          {{ category.name }}
        </li>
      </ul>
      <app-product-list
        *ngIf="selectedCategory"
        [products]="selectedCategory.products"
        (remove)="removeProduct($event)"
      >
      </app-product-list>
    </div>
  `,
  styles: [
    `
      li {
        cursor: pointer;
        margin: 5px 0;
      }
      li:hover {
        font-weight: bold;
      }
    `,
  ],
})
export class AppComponent {
  categories: Category[] = [
    { name: 'Electronics', products: this.generateProducts('Electronics') },
    { name: 'Books', products: this.generateProducts('Books') },
    { name: 'Clothing', products: this.generateProducts('Clothing') },
    { name: 'Toys', products: this.generateProducts('Toys') },
  ];

  selectedCategory: Category | null = null;

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  removeProduct(productId: number) {
    if (this.selectedCategory) {
      this.selectedCategory.products = this.selectedCategory.products.filter(
        (p) => p.id !== productId
      );
    }
  }

  private generateProducts(category: string): Product[] {
    return Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      name: `${category} Product ${i + 1}`,
      likes: 0,
    }));
  }
}
