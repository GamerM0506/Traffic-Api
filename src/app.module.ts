import { Module } from '@nestjs/common';
import { AuthModule } from './infrastructure/module/auth.module';
import { PersistenceModule } from './infrastructure/persistence/persistence.module';

@Module({
    imports: [
        PersistenceModule,
        AuthModule,
    ],
})
export class AppModule { }