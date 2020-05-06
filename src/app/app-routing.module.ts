import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {ChatRoomComponent} from './components/chat-room/chat-room.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'chat', component: ChatRoomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
