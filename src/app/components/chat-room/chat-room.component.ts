import { Component, OnInit } from '@angular/core';
import {SocketIOService} from '../../services/socket-io';
import {User} from '../../interfaces/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.sass']
})
export class ChatRoomComponent implements OnInit {
  room: string;
  id: string;
  numberOfUsers = 0;
  user: User;
  constructor(private userService: UserService,
              private socketIOService: SocketIOService) { }

  ngOnInit(): void {
    const user = this.userService.getUser();
    this.room = user.room;
    this.user = user;
    this.socketIOService.getSocket().on('user_join', (data) => {
      console.log('user_join');
    });
  }
}
