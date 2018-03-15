import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotosService } from '../photos.service';
import { Observable } from 'rxjs/Observable';

@Component({
  //selector: 'photo-edit',
  templateUrl: './photo.component.html',
  styleUrls: []
})

export class PhotoEditComponent implements OnInit {
  public model: Photo = new Photo();
  private editMode: boolean = false;
  private url: string = "";

  constructor(private router: Router, private route: ActivatedRoute, private photosService: PhotosService) { }

  ngOnInit() {
    var id = this.route.snapshot.params['id'];
    if (id) {
      this.photosService.getPhoto(id).subscribe(p => this.model = p);
      this.editMode = true;
    }
  }

  public savePhoto(form: NgForm) {
    if (!form.form.valid) return false;

    if (this.editMode) {
      this.model.DateModified = new Date();
      this.photosService.updatePhoto(this.model).subscribe(p => {
        console.log('Updated: ' + JSON.stringify(this.model));
        this.router.navigate(['/list']);
      });
    }
    else {
      this.photosService.addPhoto(this.model).subscribe(p => {
        console.log('Created: ' + JSON.stringify(this.model));
        this.router.navigate(['/list']);
      });
    }
  }

  public disableSave(form: NgForm) {
    if (!form.form.valid) return true;

    if (!this.editMode) {
      return !this.model.File;
    }

    return false;
  }

  public fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.model.File = file;

      let _model = this.model;
      let formData: FormData = new FormData();
      var reader = new FileReader();

      reader.onload = function (readerEvent) {
        _model.ImageUrl = readerEvent.target["result"];
        console.log(_model);
      };

      reader.readAsDataURL(file);
    }

  }
}
