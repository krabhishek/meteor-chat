import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import * as moment from "moment";
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { Chat } from "api/models";
import { Chats, Messages } from "api/collections";

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage implements OnInit {

  chats;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    this.chats = Chats
      .find({})
      .mergeMap((chats: Chat[]) => 
        Observable.combineLatest(
          ...chats.map((chat: Chat) => Messages
            .find({ chatId: chat._id })
            .startWith(null)
            .map(messages => {
              if(messages) chat.lastMessage = messages[0]
              return chat;
            })
          )
        )
      ).zone();
  }

  showMessages(chat): void {
    this.navCtrl.push('MessagesPage', {chat});
  }

  showOptions(): void {
    
    /* @krabhishek - creating popover as a page because of this bug: https://github.com/ionic-team/ionic/issues/11111 */
    
    const popover = this.popoverCtrl.create('ChatsOptionsPage', {}, {
      cssClass: 'options-popover chats-options-popover'
    });
 
    popover.present();
  }


  removeChat(chat: Chat): void {
    Chats.remove({ _id: chat._id }).subscribe(() => {

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }

}
