import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionSkillComponent } from './view/admin/action-skill/action-skill.component';
import { AdminPageComponent } from './view/admin/admin-page/admin-page.component';
import { HomeAdminPageComponent } from './view/admin/home-admin-page/home-admin-page.component';
import { ProjectAddPageComponent } from './view/admin/project-add-page/project-add-page.component';
import { ProjectPageComponent } from './view/admin/project-page/project-page.component';
import { SchoolAddPageComponent } from './view/admin/school-add-page/school-add-page.component';
import { SchoolPageComponent } from './view/admin/school-page/school-page.component';
import { SkillPageComponent } from './view/admin/skill/skill.component';
import { UpdateUserPageComponent } from './view/admin/update-user-page/update-user-page.component';
import { UserPageComponent } from './view/admin/user-page/user-page.component';
import { HomePageComponent } from './view/client/home-page/home-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    children: [
      {
        path: "",
        component: HomePageComponent,
      },
    ]
  },
  {
    path: "admin",
    component: HomeAdminPageComponent,
    children: [
      {
        path: "",
        redirectTo: 'admin-page',
        pathMatch: 'full'
      },
      {
        path: 'admin-page',
        component: AdminPageComponent
      },
      {
        path: 'skill',
        component: SkillPageComponent
      },
      {
        path: 'skill/create',
        component: ActionSkillComponent
      },
      {
        path: 'skill/:id/edit',
        component: ActionSkillComponent
      },
      {
        path: 'user',
        component: UserPageComponent
      },
      {
        path: 'user/:id/edit',
        component: UpdateUserPageComponent
      },
      {
        path: 'project',
        component: ProjectPageComponent
      },
      {
        path: 'project/create',
        component: ProjectAddPageComponent
      },
      {
        path: 'project/:id/edit',
        component: ProjectAddPageComponent
      },
      {
        path: 'school',
        component: SchoolPageComponent
      },
      {
        path: 'school/create',
        component: SchoolAddPageComponent
      },
      {
        path: 'school/:id/edit',
        component: SchoolAddPageComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
