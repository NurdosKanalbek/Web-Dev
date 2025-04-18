import { bootstrapApplication } from '@angular/platform-browser';
import { ProductsComponent } from './app/products/products.component';
import { NavigationComponent } from './app/navigation/navigation.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { ProductItemComponent } from './app/product-item/product-item.component';
import { ProductListComponent } from './app/product-list/product-list.component';
import { AppComponent } from './app/app.component';
bootstrapApplication(ProductsComponent);
bootstrapApplication(AppComponent);
bootstrapApplication(NavigationComponent);
bootstrapApplication(ProductItemComponent);
bootstrapApplication(ProductListComponent);
