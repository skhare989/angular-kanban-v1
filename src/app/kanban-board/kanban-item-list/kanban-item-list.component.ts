import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban-item-list',
  templateUrl: './kanban-item-list.component.html',
  styleUrls: ['./kanban-item-list.component.scss'],
})
export class KanbanItemListComponent implements OnInit {
  @Input() listName: string = '';
  @Input() kanbanItems: Array<Component> = [];

  constructor() {}

  ngOnInit(): void {}
}
