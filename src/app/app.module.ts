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

@NgModule({
  declarations: [
    AppComponent, UsersListComponent, UsersCreateComponent, UsersEditComponent, UsersSearchPipe, UsersDetailComponent,
    MenuComponent, SortPipe,
    UsersListComponent,
    UsersDetailComponent,
    UsersEditComponent,
    UsersCreateComponent,
    UsersSearchPipe,
    VendorSearchPipe,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent
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
