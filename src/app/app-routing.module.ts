import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionSkillComponent } from './view/admin/action-skill/action-skill.component';
import { HomeAdminPageComponent } from './view/admin/home-admin-page/home-admin-page.component';
import { SkillPageComponent } from './view/admin/skill/skill.component';
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
        redirectTo: 'home-admin',
        pathMatch: 'full'
      },
      {
        path: 'home-admin',
        component: HomeAdminPageComponent
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
