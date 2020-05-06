import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  ioInstance: any;

  constructor() {
    this.ioInstance = io(environment.serverURL);
    console.log(this.ioInstance);
  }

  getIoInstance(): any {
    return this.ioInstance;
  }
}
