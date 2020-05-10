export class User {
  socketId: string;
  username: string;
  room: string;

  constructor(options) {
    this.socketId = options.socketId;
    this.username = options.username;
    this.room = options.room;
  }
}
