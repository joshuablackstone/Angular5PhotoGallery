import { Routes } from "@angular/router";
import { PhotosComponent } from "./photos/photos.component";
import { PhotosListComponent } from "./photos/photos-list/photos-list.component";
import { PhotoEditComponent } from "./photos/photo/photo.component";

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home', component: PhotosComponent, data: {
            nav: 1,
            title: 'Home'
        }
    },
    {
        path: 'list', component: PhotosListComponent, data: {
            nav: 2,
            title: 'Photos'
        }
    },
    { path: 'edit/:id', component: PhotoEditComponent },
    { path: 'create', component: PhotoEditComponent }
];

export const routingComponents = [PhotosComponent, PhotosListComponent, PhotoEditComponent];