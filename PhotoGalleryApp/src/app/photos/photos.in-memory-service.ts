import { Photo } from './photo';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class PhotosInMemoryService implements InMemoryDbService {
    createDb() {
        const photos = [
            { id: 1, Title: 'Chrysanthemum', ImageUrl: '/assets/Images/Chrysanthemum.jpg', DateCreated: new Date() },
            { id: 2, Title: 'Desert', ImageUrl: '/assets/Images/Desert.jpg', DateCreated: new Date() },
            { id: 3, Title: 'Koala', ImageUrl: '/assets/Images/Koala.jpg', DateCreated: new Date() },
            { id: 4, Title: 'Hydrangeas', ImageUrl: '/assets/Images/Hydrangeas.jpg', DateCreated: new Date() },
            { id: 5, Title: 'Rocky', ImageUrl: '/assets/Images/Rocky.jpg', DateCreated: new Date(), Description: 'Adrian!!!!!!!!!!' },
            { id: 6, Title: 'Lighthouse', ImageUrl: '/assets/Images/Lighthouse.jpg', DateCreated: new Date() }
        ];

        return { photos };
    }
}