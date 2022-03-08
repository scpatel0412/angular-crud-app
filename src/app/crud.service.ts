import { Injectable } from '@angular/core';
import { Crud } from './crud';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  selectedCrud:Crud;
  cruds1:Crud[] =[];
  constructor(private http:HttpClient) {
    this.selectedCrud = new Crud()
   }
   getCrud(){
     return this.http.get(`http://localhost:8000/api/task`)
   }
   postCrud(crud:Crud){
    return this.http.post(`http://localhost:8000/api/task`,crud)
   }
   putCrud(crud:Crud){
    return this.http.put(`http://localhost:8000/api/task/${crud._id}`,crud)
   }
   deleteCrud(_id:string){
    return this.http.delete(`http://localhost:8000/api/task/${_id}`)
   }
}
