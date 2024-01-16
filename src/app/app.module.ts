import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent, TodoModule],
})
export class AppModule {}
