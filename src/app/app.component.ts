import { Component, OnInit } from "@angular/core";
import { SocketIoService } from './socket-io/socket-io.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "socket-io-example";

  constructor(private socketIoService: SocketIoService) { }
  ngOnInit() { }
}
