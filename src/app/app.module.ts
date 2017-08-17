import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { WelcomeComponent } from './home/welcome/welcome.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { RetriveUserComponent } from './user/retrive-user/retrive-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WelcomeComponent,
    CreateUserComponent,
    ListUserComponent,
    RetriveUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'createUser', component: CreateUserComponent},
      {path: 'retriveUser', component: RetriveUserComponent},
      {path: 'updateUser', component: UpdateUserComponent},
      {path: 'deleteUser', component: DeleteUserComponent},
      {path: 'listUser', component: ListUserComponent},
      {path: 'welcome', component: WelcomeComponent, pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
