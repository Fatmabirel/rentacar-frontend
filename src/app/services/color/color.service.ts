import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../models/listResponseModel';
import { Color } from '../../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44322/api/Colors/GetAll";

  constructor(private httpClient:HttpClient) { }

  getColors() : Observable<ListResponseModel<Color>>{
   return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
  }
}
