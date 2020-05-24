import { Module, HttpModule } from '@nestjs/common';
import { ChampRotationResolver } from './champrotation.resolver';

@Module({
    imports: [
        HttpModule
    ],
    providers: [ChampRotationResolver]
})
export class ChamprotationModule {}
