import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import * as moment from "moment";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chat } from "api/models";
import { Chats, Messages } from "api/collections";

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage implements OnInit {

  chats;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

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


  removeChat(chat: Chat): void {
    Chats.remove({ _id: chat._id }).subscribe(() => {

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }

}
