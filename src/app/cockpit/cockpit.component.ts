import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  
  @Output('srCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('blCreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(newServerName: HTMLInputElement, newServerContent: HTMLInputElement) {
    if (newServerName.value) {
      this.serverCreated.emit({
        serverName: newServerName.value,
        serverContent: newServerContent.value
      })
    }
  }

  onAddBlueprint(newServerName: HTMLInputElement, newServerContent: HTMLInputElement) {
    if (newServerName.value) {
      this.bluePrintCreated.emit({
        serverName: newServerName.value,
        serverContent: newServerContent.value
      })
    }
  }
}
