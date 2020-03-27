import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersDetailComponent } from './users/users-detail/users-detail.component';
import { UsersCreateComponent } from './users/users-create/users-create.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';


const routes: Routes = [
  { path: "", redirectTo: "/users/list", pathMatch: "full" },
  { path: "users/list", component: UsersListComponent },
  { path: "users/detail/:id", component: UsersDetailComponent},
  { path: "users/create", component: UsersCreateComponent },
  { path: "users/edit/:id", component: UsersEditComponent },
  /*{ path: "vendors/list", component:  },
  { path: "vendors/detail/:id", component:  },
  { path: "vendors/create", component: },
  { path: "vendors/edit/:id", component: }, */
  { path: "**", component: UsersListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
