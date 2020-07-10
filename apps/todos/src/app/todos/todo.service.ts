import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { Todo, ApiResponse, TodoDto } from '@nx-mean-starter/api-interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class TodoService
{
	api = `${ environment.api }/todos`;

	options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

	todos$ = new BehaviorSubject<TodoDto[]>(null);

	private _updateSubject = tap((r:ApiResponse) =>
	{
		if (r.success) this.Get();
	});

	constructor(private readonly http:HttpClient) { }

	Add(todo:Todo):Observable<ApiResponse>
	{
		return this.http.post<ApiResponse>(this.api, JSON.stringify(todo), this.options).pipe(this._updateSubject);
	}

	Delete(id:string):Observable<ApiResponse>
	{
		return this.http.delete<ApiResponse>(`${ this.api }/${ id }`, this.options).pipe(this._updateSubject);
	}

	Get():Subscription
	{
		return this.http.get<ApiResponse>(this.api).subscribe(
			res =>
			{
				this.todos$.next(
					res.success ? (res as any).data.map(t => new TodoDto(t)) : []);
			},
			() => this.todos$.next([])
		);
	}

	Update(todo:Todo):Observable<ApiResponse>
	{
		return this.http.put<ApiResponse>(`${ this.api }/${ todo._id }`, JSON.stringify(todo), this.options)
			.pipe(this._updateSubject);
	}
}
