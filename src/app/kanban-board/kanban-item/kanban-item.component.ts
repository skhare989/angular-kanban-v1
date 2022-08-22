import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { KanbanItem } from '../kanban-board.component';

@Component({
  selector: 'app-kanban-item',
  templateUrl: './kanban-item.component.html',
  styleUrls: ['./kanban-item.component.scss'],
})
export class KanbanItemComponent implements OnInit {
  @Input() itemDetails: KanbanItem = {
    itemId: null,
    itemTitle: '',
    itemCurrentState: '',
  };
  itemForm = this.fb.group({
    title: [this.itemDetails.itemTitle],
    status: [this.itemDetails.itemCurrentState],
  });

  @Output() itemChangeEvent = new EventEmitter();
  @Output() deleteItemEvent = new EventEmitter();

  editingModeState: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.itemForm.setValue({
      title: this.itemDetails.itemTitle,
      status: this.itemDetails.itemCurrentState,
    });
  }
  editingModeOn() {
    this.editingModeState = true;
  }
  deleteItem() {
    this.deleteItemEvent.emit(this.itemDetails.itemId);
  }
  isEditingModeOn() {
    return this.editingModeState;
  }
  saveChanges() {
    this.itemDetails.itemTitle = this.itemForm.value.title;
    this.itemDetails.itemCurrentState = this.itemForm.value.status;
    this.itemChangeEvent.emit(this.itemDetails);
    this.editingModeState = false;
  }
  cancelChanges() {
    this.itemForm.setValue({
      title: this.itemDetails.itemTitle,
      status: this.itemDetails.itemCurrentState,
    });
    this.editingModeState = false;
  }
}
