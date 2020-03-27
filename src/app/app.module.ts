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

@NgModule({
  declarations: [
    AppComponent, UsersListComponent, UsersCreateComponent, UsersEditComponent, UsersSearchPipe, UsersDetailComponent,
    MenuComponent, 
    UsersListComponent,
    UsersDetailComponent,
    UsersEditComponent,
    UsersCreateComponent,
    UsersSearchPipe
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
