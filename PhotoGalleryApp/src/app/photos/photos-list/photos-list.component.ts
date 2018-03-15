import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Photo } from '../photo';
import { PhotosService } from '../photos.service';

@Component({
  //selector: 'photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})

export class PhotosListComponent implements OnInit {
  public title = 'app';
  public photos = new Array<Photo>();
  public listFilter: string;

  @ViewChild('filterList') filterListRef: ElementRef;

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.photosService.getPhotos().subscribe(p => {
      this.photos = p;
    });
  }

  ngAfterViewInit(): void {
    if (this.filterListRef.nativeElement) {
      this.filterListRef.nativeElement.focus();
    }
  }

  public removePhoto(photo: Photo): void {
    var c = confirm('Are u sure?');
    if (c) {
      this.photosService.removePhoto(photo.id).subscribe(p => {
        var _index = this.photos.indexOf(photo);
        this.photos.splice(_index, 1);
      });
    }
  }
}
