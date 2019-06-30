import { Injectable } from "@angular/core";
import * as io from "socket.io-client";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WebSocketService {
  socket: any;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  listen(eventName: string) {
    return new Observable(subscribe => {
      this.socket.on(eventName, data => {
        subscribe.next(data);
      });
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
}
