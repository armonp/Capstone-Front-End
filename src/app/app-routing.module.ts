import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersDetailComponent } from './users/users-detail/users-detail.component';
import { UsersCreateComponent } from './users/users-create/users-create.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';


const routes: Routes = [
  { path: "", redirectTo: "/users/list", pathMatch: "full" },
  { path: "users/list", component: UsersListComponent },
  { path: "users/detail/:id", component: UsersDetailComponent},
  { path: "users/create", component: UsersCreateComponent },
  { path: "users/edit/:id", component: UsersEditComponent },
  { path: "vendor/list", component: VendorListComponent },
  { path: "vendor/detail/:id", component: VendorDetailComponent },
  { path: "vendor/create", component: VendorCreateComponent},
  { path: "vendor/edit/:id", component: VendorEditComponent },
  { path: "**", component: UsersListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
