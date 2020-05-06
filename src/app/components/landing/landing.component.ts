import { Component, OnInit } from '@angular/core';
import {SocketIoService} from '../../services/socket-io.service';
import {Update} from '../../interfaces/update';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {
  enterAs: string;
  room: string;
  connectedUsers = 0;
  isButtonDisabled = true;
  socket: SocketIOClient.Socket;

  constructor(private socketIoService: SocketIoService,
              private router: Router) {
    this.socket = socketIoService.getSocket();
  }

  ngOnInit(): void {
    this.socket.on('update', (update: Update) => {
      this.connectedUsers = update.connectedClients;
    });

    this.socket.on('connect', () => {
      console.log(this.socket.id);
    });
  }

  onInputChange($event) {
    this.isButtonDisabled = !(this.enterAs && this.room);
    if ($event.key === 'Enter' && !this.isButtonDisabled) {
      this.onEnter();
    }
  }

  onEnter() {
    this.router.navigate(['/chat-room']);
  }
}
