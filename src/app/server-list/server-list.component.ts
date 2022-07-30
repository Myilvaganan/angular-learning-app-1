import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {
  @Input() element: {type: string,name: string,content: string};
  constructor() { }

  ngOnInit(): void {
  }

}
