import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  private Url = "https://mocki.io/v1/b8d69ada-908f-4d70-97a9-c7dba1b99126";

  
  public getData(){
    return this.http.get(this. Url);
  }
}
