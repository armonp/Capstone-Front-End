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
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';


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
  { path: "product/list", component: ProductListComponent },
  { path: "product/detail/:id", component: ProductDetailComponent },
  { path: "product/create", component: ProductCreateComponent},
  { path: "product/edit/:id", component: ProductEditComponent },
  { path: "**", component: UsersListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
