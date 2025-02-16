import { bootstrapApplication } from '@angular/platform-browser';
import { ProductsComponent } from './app/products/products.component';

bootstrapApplication(ProductsComponent).catch((err) => console.error(err));
