import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getallapprove() {
    return this.http.get("http://localhost:3000/api/approve/getall"); //for local
    // return this.http.get('/api/approve/getall');  //for heroku
  }

  postApprd(data: any) {
    return this.http.post("http://localhost:3000/api/approve/posted", data);//for local
    // return this.http.post('/api/approve/post', data);  //for heroku
  }

  deletesAppr(_id: any) {
    return this.http.delete(`http://localhost:3000/api/approve/delete/${_id}`);//for local
    // return this.http.delete(`/api/approve/delete/${_id}`);  //for heroku
  }

  
  getbyidappr(_id: any) {
    return this.http.get(`http://localhost:3000/api/approve/getsingle/${_id}`);//for local
    //  return this.http.get(`/api/approve/getsingle/${_id}`);  //for heroku
  }
  updateappr(data: any, _id: any) {
    // return this.http.put('/api/approve/update', { data, _id });  //for heroku

    return this.http.put('http://localhost:3000/api/approve/update', { data, _id }); //for local

  }




  
  myid:any;
}
