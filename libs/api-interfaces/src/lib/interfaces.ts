import { Document } from 'mongoose';

export interface Todo
{
	_id:any;
	createdAt:Date;
	description?:string;
	done:boolean;
	due:Date;
	title:string;
	updatedAt:Date;
}

export interface TodoDocument extends Todo, Document {}

export interface ApiResponse
{
	data?:any;
	message?:string;
	success:boolean;
}
