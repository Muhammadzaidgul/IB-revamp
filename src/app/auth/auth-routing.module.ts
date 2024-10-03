import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { RegistrationComponent } from './onboarding/registration/registration.component';
import { RelationshipComponent } from './onboarding/relationship/relationship.component';


const routes: Routes = [

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'relationship-setup',
    component:RelationshipComponent
  }

  // {
  //   path:'',
  //   component:LoginComponent,
  //   children:[
  //     {
  //       path:'login',
  //       component:LoginComponent
  //     },
  //     {
  //       path:'onboarding',
  //       component:OnboardingComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
