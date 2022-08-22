import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { KanbanItem } from '../kanban-board.component';

@Component({
  selector: 'app-kanban-item-list',
  templateUrl: './kanban-item-list.component.html',
  styleUrls: ['./kanban-item-list.component.scss'],
})
export class KanbanItemListComponent implements OnInit {
  @Input() listName: string = '';
  @Input() kanbanItems: Array<KanbanItem> = [];
  @Output() itemListChangeEvent = new EventEmitter();
  @Output() deleteItemWithIdEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  itemListChange(item: any) {
    this.itemListChangeEvent.emit(item);
  }
  deleteId(itemId: any) {
    this.deleteItemWithIdEvent.emit(itemId);
  }
}
