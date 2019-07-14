import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io('http://localhost:8080', {
      path: "/api/websocket", transportOptions: {
        polling: {
          extraHeaders: {
            'Authorization': 'abc'
          }
        }
      }
    });
  }

  // HANDLER
  listen(topic: string) {
    return new Observable<any>(observer => {
      this.socket.on(topic, data => {
        observer.next(data);
      });
    });
  }

}
