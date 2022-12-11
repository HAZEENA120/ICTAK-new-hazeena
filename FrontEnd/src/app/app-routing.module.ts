import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCrudComponent } from './pages/admin-crud/admin-crud.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { EditFormComponent } from './pages/edit-form/edit-form.component';

const routes: Routes = [
{path:"",component:AdminLoginComponent},

// {path:"",component:AdminCrudComponent} ,

{path:"crud",component:AdminCrudComponent},
{path:"editreq",component:EditFormComponent,
children:[{path:"crud",component:AdminCrudComponent}]} 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
