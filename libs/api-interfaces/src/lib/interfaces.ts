import { Document } from 'mongoose';

export interface BaseDocument
{
	__v?:number;
	_id:any;
	createdAt?:Date;
	updatedAt?:Date;
}

export interface Todo extends BaseDocument
{
	description?:string;
	done?:boolean;
	due:Date|string;
	title:string;
}

export interface TodoDocument extends Todo, Document {}

export interface ApiResponse
{
	data?:any;
	message?:string;
	success:boolean;
}
