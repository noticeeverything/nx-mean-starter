import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import {
	ButtonsModule,
	WavesModule,
	MDBModalService,
	MDBModalRef,
	ModalOptions,
	ModalModule,
	CardsModule,
	CheckboxModule,
	InputsModule
} from 'angular-bootstrap-md';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@NgModule({
	declarations: [TodosComponent, TodoFormComponent],
	imports: [
		CommonModule,
		TodosRoutingModule,
		ButtonsModule,
		WavesModule,
		ModalModule.forRoot(),
		CardsModule,
		CheckboxModule,
		FormsModule,
		ReactiveFormsModule,
		InputsModule,
		BsDatepickerModule.forRoot()
	],
	providers: [TodoService, MDBModalService, MDBModalRef, ModalOptions, BsDatepickerConfig],
	entryComponents: [TodoFormComponent]
})
export class TodosModule {}
