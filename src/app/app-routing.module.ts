import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { EmployeesPageModule } from './pages/employees.page-module';
import { HomePageModule } from './pages/home.page-module';
import { ContactUsPageModule } from './pages/contact-us.page-module';

const routes: Routes = [
  { 
        path: 'o-nas', 
        loadChildren: () => AboutUsPageModule,

        
        
      },
      { 
        path: 'pracownicy', 
        loadChildren: () => EmployeesPageModule,

        
        
      },
  { 
        path: 'kontakt', 
        loadChildren: () => ContactUsPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePageModule, AboutUsPageModule,EmployeesPageModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
