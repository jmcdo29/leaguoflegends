import { ChampRotationType } from './champrotation.type';
import { Injectable, HttpService} from '@nestjs/common';
import { Observable } from 'apollo-link';
import { AxiosResponse } from 'axios';

@Injectable()
export class ChampRotationService {
    constructor(
        private http: HttpService
    ) { }

    getchampionrotation(): Observable<AxiosResponse<ChampRotationType[]>> {
        let response = this.http.get<any[]>('https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-7c5078ff-4ab6-436e-9ea7-a89a1e4aade8')
        return response;
    }
    
}