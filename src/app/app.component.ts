import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Crud } from './crud';
import {CrudService} from './crud.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CrudService]
})
export class AppComponent {
  title="crud-app";
  constructor(public crudService:CrudService){}
  ngOnInit(){
    this.getCrud()
  }
  getCrud(){
    this.crudService.getCrud()
    .subscribe((res) => {
      this.crudService.cruds1 = res as Crud[];
    })
  }
  postCrud(form:NgForm){
    if(form.value._id){
      this.crudService.putCrud(form.value).subscribe((res) => {
        this.getCrud()
        this.crudService.selectedCrud = new Crud()
      })
    }
    else{
    this.crudService.postCrud(form.value).subscribe((res) => {
      this.getCrud()
      this.crudService.selectedCrud = new Crud()
    })
  }
  }

  putCrud(crud:Crud){
   this.crudService.selectedCrud = crud
  }

  deleteCrud(_id:string){
    this.crudService.deleteCrud(_id).subscribe((res) => {
      this.getCrud()
      this.crudService.selectedCrud = new Crud()
    })
  }
}