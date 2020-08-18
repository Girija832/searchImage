import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-saved-images',
  templateUrl: './saved-images.component.html',
  styleUrls: ['./saved-images.component.css']
})
export class SavedImagesComponent implements OnInit {
  favImage: any;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.favImage = this.searchService.receiveData()
    this.favImage = [...new Set(this.favImage)]
  }
  
  downloadFav(i) {
    this.toDataURL(this.favImage[i].imageUrl, function (dataUrl) {
      console.log(dataUrl)
      var a = document.createElement("a"); //Create <a>
      a.href = dataUrl; //Image Base64 Goes here
      a.download = "Image.png"; //File name Here
      a.click();
    })
  }
  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }



}
