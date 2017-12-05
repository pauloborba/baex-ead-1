import { NgModule }from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsRegisteringComponent } from './students-registering/students-registering.component'
import { StudentsListComponent }    from './students-list/students-list.component'

const routes: Routes = [
    {path: 'cadastro-de-alunos', component: StudentsRegisteringComponent},
    {path: 'lista-de-alunos', component: StudentsListComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
