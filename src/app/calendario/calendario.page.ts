import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  eventSource = [];
  calendar = {
    mode: 'week',
    currentDate: new Date(),
    locale: 'pt-BR'
  };
  constructor() { }
  ngOnInit() {
  }
  onEventSelected() {
  }
  onViewTitleChanged() {
  }
  onTimeSelected() {
  }

}
