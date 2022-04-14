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
import { UserPageComponent } from './view/admin/user-page/user-page.component';
import { UpdateUserPageComponent } from './view/admin/update-user-page/update-user-page.component';
import { ProjectPageComponent } from './view/admin/project-page/project-page.component';
import { ProjectAddPageComponent } from './view/admin/project-add-page/project-add-page.component';
import { SchoolPageComponent } from './view/admin/school-page/school-page.component';
import { SchoolAddPageComponent } from './view/admin/school-add-page/school-add-page.component';
import { AdminPageComponent } from './view/admin/admin-page/admin-page.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeAdminPageComponent,
    SkillPageComponent,
    ActionSkillComponent,
    ShowValidateComponent,
    UserPageComponent,
    UpdateUserPageComponent,
    ProjectPageComponent,
    ProjectAddPageComponent,
    SchoolPageComponent,
    SchoolAddPageComponent,
    AdminPageComponent,


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
