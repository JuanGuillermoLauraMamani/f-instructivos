import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { Instructivo } from '../models/instructivos';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  instructivo: Instructivo[]=[];
  seleccionado = new BehaviorSubject<Instructivo|null>(null);
  url: string ="";

  private apiUrl = 'http://127.0.0.1:5000/api/instructivos'; // Reemplaza esto con tu URL

  
  constructor(private http: HttpClient) { }

  getData(): Observable<Instructivo[]> {
    return this.http.get<Instructivo[]>(this.apiUrl).pipe(map((data:any)=> {
      return this.instructivo = data.instructivos;} ));
  }
  getInstructivo(id: number): Observable<Instructivo> {
    return this.http.get<Instructivo>(`${this.apiUrl}/${id}`).pipe();
  }

  enviarInstructivoSeleccionado(instructivo: Instructivo) {
    return this.seleccionado.next(instructivo);
  }

  obtenerInstructivoSeleccionado(id:number): Observable<Instructivo> {
    //return this.seleccionado.asObservable();
    return of(this.instructivo.find(instructivo => instructivo.id_instructivo === id) as Instructivo);
  }
  
  /*
  getPDF(url:string): Observable<ArrayBuffer> {
   return this.http.get(url, {responseType: 'arraybuffer'});
  }*/

}
