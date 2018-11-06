import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

	allowNewServer = false;
	serverCreationStatus = 'No Server was created';
	serverName = 'Testserver';
	severCreated = false;


  constructor() {
  	setTimeout(() => {
  		this.allowNewServer = true;
  	}, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
  	this.severCreated = true;
  	this.serverCreationStatus = 'Server was Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
  	this.serverName = (<HTMLInputElement>event.target).value;
  }

}
