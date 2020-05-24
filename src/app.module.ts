import { Module, HttpModule } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import { ChamprotationModule } from './champrotation/champrotation.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    ChamprotationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
