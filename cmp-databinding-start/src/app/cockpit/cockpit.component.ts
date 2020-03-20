import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() newServerName = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') newServerContent = new EventEmitter<{serverName: string, serverContent: string}>();
  serverCreated = '';
  blueprintCreated = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({
    serverName: this.newServerName, 
    serverContent: this.newServerContent
  });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
    serverName: this.newServerName, 
    serverContent: this.newServerContent
  });
  }



}
