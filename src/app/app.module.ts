import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ImageBannerComponent } from './components/image-banner/image-banner.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { FinalizePurchaseComponent } from './components/finalize-purchase/finalize-purchase.component';
import { PurchaseFormComponent } from './components/purchase-form/purchase-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ItemCardComponent,
    ImageBannerComponent,
    FeaturedComponent,
    CategoryCardComponent,
    CategoryListComponent,
    ItemDetailComponent,
    CartComponent,
    CartItemComponent,
    FinalizePurchaseComponent,
    PurchaseFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
