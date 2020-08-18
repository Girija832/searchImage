import { Component, OnInit, Inject } from '@angular/core';
import { SearchService } from '../search.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";



@Component({
  selector: 'app-add-favourite',
  templateUrl: './add-favourite.component.html',
  styleUrls: ['./add-favourite.component.css']
})
export class AddFavouriteComponent implements OnInit {
  listName: any = "";
  list: string = "";
  data: any;
  link: String;
  favImages: any;
  pageUrl: any;
  imageName: any;
  val1: any;
  display: boolean;
  list1: any;
  listValues: any = [];
  list2: any;
  lists = [];
  object: { name: any; imageUrl: any; };
  showInput: boolean;
  favList: boolean;
  favLists: any[];
  constructor(private searchService: SearchService, public snackBar: MatSnackBar, private dialogRef: MatDialogRef<AddFavouriteComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.data = data;
    //this.link = data.pageURL
    this.pageUrl = data.user.name
    this.imageName = data.alt_description;


    console.log(data);
  }

  ngOnInit(): void {
    this.lists = this.searchService.receiveData();
    if (this.lists.length != 0) {
      this.favList = true;
      this.favLists = [...new Set(this.lists.map(x => x.name))]
    }
    console.log(this.lists);
  }
  addSelected() {
    this.searchService.sendData(this.data)

  }

  onRadioBtnClick(list) {
    this.val1 = list;
  }
  addToFavourities(listName) {
    this.object = { "name": this.listName, "imageUrl": this.data.urls.small }
    this.searchService.sendData(this.object);
  }
  addToExisting(listName) {
    console.log(listName)
    this.object = { "name": listName, "imageUrl": this.data.urls.small }
    this.searchService.sendData(this.object);
  }
  addNewList() {
    this.showInput = true
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }

}
