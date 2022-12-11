import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule ,Routes } from '@angular/router';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminCrudComponent } from './pages/admin-crud/admin-crud.component';
import { EditFormComponent } from './pages/edit-form/edit-form.component';
import { ServiceComponent } from './pages/services/service.component';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { FacultyViewComponent } from './pages/faculty-view/faculty-view.component';
// import { ServiceComponent } from './pages/service/service.component' ;

const appRoutes=[{path:"",component:HomeComponent},
                  {path:"adminlogin",component:AdminLoginComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminCrudComponent,
    EditFormComponent,
    ServiceComponent,
    AdminViewComponent,
    FacultyViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }