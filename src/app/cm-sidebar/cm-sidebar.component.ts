import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-cm-sidebar',
  templateUrl: './cm-sidebar.component.html',
  styleUrls: ['./cm-sidebar.component.css']
})
export class CmSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onToggle = (e) => {
     $('#sidebar').toggleClass('active');
  };
}
