import { Component, OnInit } from '@angular/core';
import {Update} from '../../interfaces/update';
import {Router} from '@angular/router';
import { User } from '../../interfaces/user';
import {SocketIOService} from '../../services/socket-io';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {
  username: string;
  room: string;
  isButtonDisabled = true;
  id: string;
  user: User;

  constructor(public userService: UserService,
              private socketIoService: SocketIOService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    if (this.user) {
      if (this.user.username) {
        this.username = this.user.username;
      }
      if (this.user.room) {
        this.router.navigate(['/chat']);
      }
    }
  }


  onInputChange($event) {
    this.isButtonDisabled = !(this.username && this.room);
    if ($event.key === 'Enter' && !this.isButtonDisabled) {
      this.onEnter();
    }
  }

  onEnter() {
    const user = new User({
      username: this.username,
      room: this.room
    });
    this.userService.updateUser(user);
    this.socketIoService.getSocket().emit('join', this.room);
    this.router.navigate(['/chat']) ;
  }
}
