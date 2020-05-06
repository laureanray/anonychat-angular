import { Component, OnInit } from '@angular/core';
import {SocketIoService} from '../../services/socket-io.service';
import {Update} from '../../interfaces/update';

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

  constructor(private socketIoService: SocketIoService) {  }

  ngOnInit(): void {
    this.socketIoService.getIoInstance().on('update', (update: Update) => {
      this.connectedUsers = update.connectedClients;
    });
  }

  onInputChange($event) {
    this.isButtonDisabled = !(this.enterAs && this.room);
    if ($event.key === 'Enter' && !this.isButtonDisabled) {
      this.onEnter();
    }
  }

  onEnter() {
    console.log(this.enterAs, this.room);
  }
}
