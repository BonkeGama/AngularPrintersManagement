import { NgModule,Injectable } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot } from '@angular/router';


import {DesignationsComponent} from './designations/designations.component';
import {UsersComponent} from './users/users.component';
import {PrinterMakeComponent} from './printer-make/printer-make.component';
import {PrintersComponent} from './printers/printers.component';
import { LoginComponent } from './login/login.component';


@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private router:Router) {}
 
    canActivate(
     route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
    ): boolean {
        if (sessionStorage.getItem("UserName")!=null){
          return true;
        }
        else {
          this.router.navigate(['/login']);
          return false;
        }
    }
}


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'designations',component:DesignationsComponent},
  {path:'users',component:UsersComponent},
  {path:'printer-make',component:PrinterMakeComponent},
  {path:'printers',component:PrintersComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
