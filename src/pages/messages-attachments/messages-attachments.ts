import { Component } from '@angular/core';
import { IonicPage, AlertController, Platform, ModalController, ViewController } from 'ionic-angular';
import { MessageType } from 'api/models';
/**
 * Generated class for the MessagesAttachmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages-attachments',
  templateUrl: 'messages-attachments.html',
})
export class MessagesAttachmentsPage {

  constructor(
    private alertCtrl: AlertController,
    private platform: Platform,
    private viewCtrl: ViewController,
    private modelCtrl: ModalController
  ) { }


  sendLocation(): void {
    const locationModal = this.modelCtrl.create('LocationMessagePage');
    locationModal.onDidDismiss((location) => {
      if (!location) {
        this.viewCtrl.dismiss();

        return;
      }

      this.viewCtrl.dismiss({
        messageType: MessageType.LOCATION,
        selectedLocation: location
      });
    });

    locationModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesAttachmentsPage');
  }

}
