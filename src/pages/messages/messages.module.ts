import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagesPage } from './messages';
import { MomentModule } from "angular2-moment";
import { AgmCoreModule } from "@agm/core";
@NgModule({
  declarations: [
    MessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagesPage),
    MomentModule,
    AgmCoreModule
  ],
  exports: [
    MessagesPage
  ]
})
export class MessagesPageModule {}
