import { Component, OnInit } from '@angular/core';
import { KanbanItemComponent } from './kanban-item/kanban-item.component';

export interface KanbanBoard {
  itemListName: string;
  itemList: Array<any>;
}

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss'],
})
export class KanbanBoardComponent implements OnInit {
  listTypes: Array<KanbanBoard> = [
    {
      itemListName: 'TO-DO',
      itemList: [],
    },
    {
      itemListName: 'IN-PROGRESS',
      itemList: [],
    },
    {
      itemListName: 'COMPLETE',
      itemList: [],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addTaskToTodoList() {
    let todoComponent = '';

    this.listTypes[0].itemList.push(todoComponent);
  }
}
