import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatsOptionsPage } from './chats-options';

@NgModule({
  declarations: [
    ChatsOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatsOptionsPage),
  ],
  exports: [
    ChatsOptionsPage
  ]
})
export class ChatsOptionsPageModule {}
