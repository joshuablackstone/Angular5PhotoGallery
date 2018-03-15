import { Injectable } from '@angular/core';
import { Photo } from './photo';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { PHOTOS } from './mock-photos';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PhotosService {
    private serviceUrl = 'api/photos';  // URL to web api

    constructor(private http: HttpClient) { }

    getPhotos(): Observable<Photo[]> {
        //return of(PHOTOS);
        return this.http.get<Photo[]>(this.serviceUrl);
    }

    getPhoto(id: number): Observable<Photo> {
        const url = `${this.serviceUrl}/${id}`;
        return this.http.get<Photo>(url);
        // var _photo = PHOTOS.filter(function (p) {
        //     return p.id == id;
        // })[0];

        // return of(_photo);
    }

    addPhoto(photo: Photo): Observable<Photo> {
        // PHOTOS.push(photo);
        // return of(photo);
        return this.http.post<Photo>(this.serviceUrl, photo, httpOptions);
    }

    updatePhoto(photo: Photo): Observable<Photo> {
        //return of(photo);
        return this.http.put<Photo>(this.serviceUrl, photo, httpOptions);
    }

    removePhoto(id: number): Observable<Photo> {
        //     var _photo = PHOTOS.filter(function (p) {
        //         return p.id == id;
        //     })[0];

        //    return of(_photo);
        const url = `${this.serviceUrl}/${id}`;
        return this.http.delete<Photo>(url, httpOptions)
    }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}

// @Injectable()
// export class PhotosService {
//     private serviceUrl = 'api/photos';  // URL to web api

//     constructor(private http: HttpClient) { }

//     getPhotos(): Observable<Photo[]> {
//        // return of(PHOTOS);
//        return this.http.get<Photo[]>(this.serviceUrl);
//     }

//     getPhoto(id: number): Observable<Photo> {
//         const url = `${this.serviceUrl}/${id}`;
//         return this.http.get<Photo>(url);
//         // var _photo = PHOTOS.filter(function (p) {
//         //     return p.Id == id;
//         // })[0];

//         // return of(_photo);
//     }

//     addPhoto(photo: Photo): Observable<Photo>{
//         return this.http.post<Photo>(this.serviceUrl, photo, httpOptions);
//     }

//     updatePhoto(photo: Photo): Observable<any>{
//         return this.http.put(this.serviceUrl, photo, httpOptions);
//     }

//     removePhoto(id: number): Observable<Photo> {
//         const url = `${this.serviceUrl}/${id}`;
//         return this.http.delete<Photo>(url, httpOptions);
//     }

//       /**
//    * Handle Http operation that failed.
//    * Let the app continue.
//    * @param operation - name of the operation that failed
//    * @param result - optional value to return as the observable result
//    */
//   private handleError<T> (operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {

//       // TODO: send the error to remote logging infrastructure
//       console.error(error); // log to console instead

//       // Let the app keep running by returning an empty result.
//       return of(result as T);
//     };
//   }
// }