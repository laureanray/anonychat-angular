import { Injectable } from '@angular/core';
import * as SocketIO from 'socket.io-client';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  socket: SocketIOClient.Socket;

  constructor() {
    this.socket = SocketIO(environment.serverURL);
  }

  getSocket(): SocketIOClient.Socket {
    return this.socket;
  }
}
