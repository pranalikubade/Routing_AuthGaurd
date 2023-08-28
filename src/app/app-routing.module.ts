
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ForgotPassswordComponent } from './components/forgot-passsword/forgot-passsword.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
//import { authGuard } from './gaurds/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'forgot-password',component:ForgotPassswordComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},

  {path: 'admin',
  canActivate:[authGuard],
  loadChildren:() => import('./modules/admin/admin.module').then((m)=> m.AdminModule)},

  
  {path:'**',component:NotFoundComponent}
  // {path:'admin',
  // canActivate:[authGuard],
  // loadChildren:()=>import('./modules/admin/admin.module').then((m)=>m.AdminModule)},
  // {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
