import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import Images from '../interface/Images';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/photos'
  constructor(private http: HttpClient) { }

  getPhotos():Observable<Images[]>{
    return this.http.get<Images[]>(this.apiUrl);
  }
}
