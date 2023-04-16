import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './etudiant/list/list.component';
import { AddComponent } from './etudiant/add/add.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  {path:'etudiants',component:ListComponent},
  {path:'etudiants/add',component:AddComponent},
  // {
  //   path: '',
  //   component: AppComponent,
  //   children: [
  //     {
  //       path: 'etudiants',
  //       component: ListComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
