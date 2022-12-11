import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonnelPagebleListModel } from '../models/personnel-pageble-list-model';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  apiurl= 'http://localhost:5110/api/Personnels?Page=0&PageSize=10'
  constructor(private httpClient: HttpClient) { }

  getPageblePersonnelList(): Observable<PersonnelPagebleListModel> {
    return this.httpClient.get<PersonnelPagebleListModel>(this.apiurl);
  }
}
