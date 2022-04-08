import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HomeAdminPageComponent } from './view/admin/home-admin-page/home-admin-page.component';
import { HomePageComponent } from './view/client/home-page/home-page.component';
import { SkillPageComponent } from './view/admin/skill/skill.component';
import { ActionSkillComponent } from './view/admin/action-skill/action-skill.component';
import { ShowValidateComponent } from './show-validate/show-validate.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeAdminPageComponent,
    SkillPageComponent,
    ActionSkillComponent,
    ShowValidateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
