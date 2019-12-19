import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowedNewServer:boolean = false;
  serverName:string = "Test server";
  serverStatus:string = "Online";
  serverCreationStatus = "The server is not created.";
  servers = ['Test server 1', 'Test server 2'];
  constructor() { 
    setTimeout(() => {
      this.allowedNewServer = true;
      this.serverStatus = "Offline";
    } ,3000);
  }


  ngOnInit() {
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'The server has been created successfully.';
  }

}
