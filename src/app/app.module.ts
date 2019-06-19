import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HiararcyListComponent } from './hiararcy-list/hiararcy-list.component';
import { HiararcyListItemComponent } from './hiararcy-list-item/hiararcy-list-item.component';
import { AuthGuard } from './shared/auth-gaurd.service';
import { AuthService } from './shared/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HiararcyListComponent,
    HiararcyListItemComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
