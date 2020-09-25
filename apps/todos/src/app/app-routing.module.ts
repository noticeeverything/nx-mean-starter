import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./home/home.module').then((m) => m.HomeModule),
	},
	{
		path: 'todos',
		loadChildren: () =>
			import('./todos/todos.module').then((m) => m.TodosModule),
	},
	{ path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
