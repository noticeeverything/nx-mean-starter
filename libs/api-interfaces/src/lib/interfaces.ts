import { Document } from 'mongoose';

export interface Todo
{
	description?:string;
	done?:boolean;
	due:Date|string;
	title:string;
}

export interface TodoDocument extends Todo, Document
{
	_id:any;
	createdAt:Date;
	updatedAt:Date;
}

export interface ApiResponse
{
	data?:any;
	message?:string;
	success:boolean;
}
