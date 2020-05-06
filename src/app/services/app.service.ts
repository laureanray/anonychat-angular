import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private socketID: BehaviorSubject<string>;
  constructor() { }

  updateSocketID(socketId: string) {
    this.socketID.next(socketId);
  }

  getSocketId(): Observable<string> {
    return this.socketID.asObservable();
  }
}
