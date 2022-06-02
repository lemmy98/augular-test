import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AuthComponent } from './auth/auth.component';
import { EditEmployeeDetailsComponent } from './edit-employee-details/edit-employee-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AuthComponent
  },
  {
    path: 'auth', component: AuthComponent
  },
  {
    path: 'edit-employee-details', component: EditEmployeeDetailsComponent
  },
  {
    path: 'employee-details', component: EmployeeDetailsComponent
  },
  {
    path: 'add-employee', component: AddEmployeeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
