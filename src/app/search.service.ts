import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  storeArray = [];
  storeImage: any;
  constructor(private http: HttpClient) { }

  getSearchResult(data: string) {
    return this.http.get("https://api.unsplash.com/search/photos?query=" + data + "&client_id=sbBsGrbZ5dCT1jmiVOXRh5aulWC20_qfWM-s2L5mJ-U");


  }
  sendData(obj: any) {
    this.storeArray.push(obj)
    this.storeImage = this.storeArray;
  }

  receiveData(): any {
    return this.storeImage;
  }
}

