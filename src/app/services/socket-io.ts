import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import Socket = SocketIOClient.Socket;
import Manager = SocketIOClient.Manager;
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SocketIOService {
  socket: Socket;
  constructor() {
    this.socket = io(environment.serverURL);
  }

  getSocket(): Socket {
    return this.socket;
  }
}
