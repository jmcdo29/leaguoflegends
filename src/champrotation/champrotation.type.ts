import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType('ChampRotation')
export class ChampRotationType {
    // @Field(type => ID)
    // id: string;
    
    @Field(type => [String])
    freeChampionIds: string[]
    
    @Field(type => [String])
    freeChampionIdsForNewPlayers: string[]
    
    @Field()
    maxNewPlayerLevel: number
}