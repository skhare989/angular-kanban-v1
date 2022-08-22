import { Component, OnInit } from '@angular/core';
import { KanbanItemComponent } from './kanban-item/kanban-item.component';

export interface KanbanBoard {
  itemListName: string;
  itemList: Array<KanbanItem>;
}

export interface KanbanItem {
  itemId: number | undefined | null;
  itemTitle: string | undefined | null;
  itemCurrentState: string | undefined | null;
}

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss'],
})
export class KanbanBoardComponent implements OnInit {
  id: number = 0;

  itemIdGenerator(): number {
    return this.id++;
  }

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
    let todoComponent: KanbanItem = {
      itemId: this.itemIdGenerator(),
      itemTitle: '',
      itemCurrentState: 'toDo',
    };
    this.listTypes[0].itemList.push(todoComponent);
  }
  itemListChangeEvent(item: any) {
    this.deleteItemWithId(item.itemId);
    switch (item.itemCurrentState) {
      case 'toDo':
        this.listTypes[0].itemList.push(item);
        break;
      case 'inProgress':
        this.listTypes[1].itemList.push(item);
        break;
      case 'completed':
        this.listTypes[2].itemList.push(item);
        break;
    }
  }
  deleteItemWithId(itemId: any) {
    this.listTypes.forEach((e) => {
      e.itemList.forEach((listItem) => {
        if (listItem.itemId === itemId) {
          e.itemList.splice(e.itemList.indexOf(listItem), 1);
        }
      });
    });
  }
}
