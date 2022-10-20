import { AuthGuard } from './services/auth.guard';
import { ListComponent } from './components/list/list.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'chat', canActivate : [AuthGuard], component : ChatComponent},
  {path : 'liste', component : ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
