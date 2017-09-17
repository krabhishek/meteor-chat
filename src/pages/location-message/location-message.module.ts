import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationMessagePage } from './location-message';
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [
    LocationMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(LocationMessagePage),
    AgmCoreModule
  ],
})
export class LocationMessagePageModule {}
