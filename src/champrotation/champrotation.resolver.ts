import { ChampRotationService } from './champrotation.service';
import { Resolver, Query } from "@nestjs/graphql";
import { ChampRotationType } from "./champrotation.type";

@Resolver(of => ChampRotationType)
export class ChampRotationResolver {
    constructor(
        private champRotationService: ChampRotationService
    ) {}

    @Query(returns => ChampRotationType)
    async getChamprotation() {
        return await this.champRotationService.getchampionrotation();
    }

}