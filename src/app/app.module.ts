import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersDetailComponent } from './users/users-detail/users-detail.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { UsersCreateComponent } from './users/users-create/users-create.component';
import { UsersSearchPipe } from './users/users-search.pipe';
import { SortPipe } from './sort.pipe';
import { VendorSearchPipe } from './vendor/vendor-search.pipe';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { ProductSearchPipe } from './product/product-search.pipe';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestSearchPipe } from './request/request-search.pipe';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { ReqlineEditComponent } from './reqline/reqline-edit/reqline-edit.component';
import { ReqlineListComponent } from './reqline/reqline-list/reqline-list.component';
import { ReqlineDetailComponent } from './reqline/reqline-detail/reqline-detail.component';
import { ReqlineCreateComponent } from './reqline/reqline-create/reqline-create.component';
import { ReqlineSearchPipe } from './reqline/reqline-search.pipe';
import { UserLoginComponent } from './users/user-login/user-login.component';
//import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent, UsersListComponent, UsersCreateComponent, UsersEditComponent, UsersSearchPipe, UsersDetailComponent,
    MenuComponent, SortPipe, UserLoginComponent,
    UsersListComponent,
    //CurrencyPipe,
    UsersDetailComponent,
    UsersEditComponent,
    UsersCreateComponent,
    UsersSearchPipe,
    VendorSearchPipe,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    ProductSearchPipe,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductCreateComponent,
    RequestListComponent,
    RequestSearchPipe,
    RequestDetailComponent,
    RequestCreateComponent,
    RequestEditComponent,
    ReqlineEditComponent,
    ReqlineListComponent,
    ReqlineDetailComponent,
    ReqlineCreateComponent,
    ReqlineSearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
