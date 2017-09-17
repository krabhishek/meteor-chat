import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagesAttachmentsPage } from './messages-attachments';
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [
    MessagesAttachmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagesAttachmentsPage),
    AgmCoreModule
  ],
})
export class MessagesAttachmentsPageModule {}
