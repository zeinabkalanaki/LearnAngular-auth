import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./home/home.component";

import { HiararcyListComponent } from "./hiararcy-list/hiararcy-list.component";
import { HiararcyListItemComponent } from "./hiararcy-list-item/hiararcy-list-item.component";

import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./shared/auth-gaurd.service";

const myAppRout: Routes = [
    { path: '', canActivate: [AuthGuard],component: HomeComponent },
    { path: 'home', canActivate: [AuthGuard], component: HomeComponent },

    {
        //path: 'hiararcylist', canActivate: [AuthGuard], component: HiararcyListComponent, //--> root and child need authenticate
        path: 'hiararcylist', canActivateChild: [AuthGuard], component: HiararcyListComponent,//--> just child need authenticate
        children: [
            { path: ':id', component: HiararcyListItemComponent },// --> hiararcylist/:id
        ]
    },
    { path: 'login', component: LoginComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(myAppRout)], // -->  برای همه پروژه
    exports: [RouterModule],

})

export class appRoutingModule {

}