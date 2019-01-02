import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cm-sidebar',
  templateUrl: './cm-sidebar.component.html',
  styleUrls: ['./cm-sidebar.component.css']
})
export class CmSidebarComponent implements OnInit {
  togggle = true;
  ngOnInit() {
  }
  onToggle = () => {
    this.togggle = !this.togggle;
  }
}
