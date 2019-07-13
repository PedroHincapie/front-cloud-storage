import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const enpoint = 'https://reqres.in/api/users?page=2';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    return res || {};
  }

  listarEmpleados(): Observable<any> {
    return this.http.get(enpoint).pipe(map(this.extractData));
    }
}
