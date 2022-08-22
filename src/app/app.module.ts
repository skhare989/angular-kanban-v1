import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { KanbanItemListComponent } from './kanban-board/kanban-item-list/kanban-item-list.component';
import { KanbanItemComponent } from './kanban-board/kanban-item/kanban-item.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbanBoardComponent,
    KanbanItemListComponent,
    KanbanItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
