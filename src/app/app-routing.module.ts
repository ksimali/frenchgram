import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerbConjugationComponent } from './verb-conjugation/verb-conjugation.component';
import { AuthGuard } from './guards/auth.guard';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'', component:SearchComponent, canActivate: [AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  //{path:'verbconjugation', component:VerbConjugationComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
