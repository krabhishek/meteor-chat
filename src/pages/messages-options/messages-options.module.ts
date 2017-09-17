import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagesOptionsPage } from './messages-options';

@NgModule({
  declarations: [
    MessagesOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagesOptionsPage),
  ],
})
export class MessagesOptionsPageModule {}
