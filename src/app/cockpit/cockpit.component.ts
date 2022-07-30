import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output('srCreated') serverCreated = new EventEmitter<{serverName: string,serverContent: string}>();
  @Output('blCreated') bluePrintCreated = new EventEmitter<{serverName: string,serverContent: string}>();;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    if (this.newServerName) {
        this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
    }
  }

  onAddBlueprint() {
    if (this.newServerName) {
      this.bluePrintCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent
      })
    }
  }
}
