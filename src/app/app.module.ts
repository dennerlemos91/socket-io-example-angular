import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

const config: SocketIoConfig = {
  url: "http://localhost:8080",
  options: {
    path: "/api/websocket",
    origins: "*",
    extraHeaders: {
      Authorization: "Bearer authorization_token_here"
    }
  }
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
