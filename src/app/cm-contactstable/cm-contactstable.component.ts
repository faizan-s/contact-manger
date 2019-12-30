import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cm-contactstable',
  templateUrl: './cm-contactstable.component.html',
  styleUrls: ['./cm-contactstable.component.css']
})
export class CmContactstableComponent implements OnInit {
  @Input() contactsList;
  @Input() showAction = false;
  @Output() rowClickEmitter = null;
  @Output() actionEmitter = null;
  constructor() {
    this.rowClickEmitter = new EventEmitter<object>();
    this.actionEmitter = new EventEmitter<object>();
  }

  ngOnInit() {
  }
  onRowClick($event) {
    this.rowClickEmitter.emit($event);
  }
  onActionEvent($event) {
    this.actionEmitter.emit($event);
  }
}
