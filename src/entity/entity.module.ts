import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/providers/database/db.module';
import { schemaProviders } from 'src/schema/schema.provider';
import { TransactionEntity } from './transaction.entity';

@Module({
  imports: [DatabaseModule],
  providers: [...schemaProviders, TransactionEntity],
  exports: [TransactionEntity],
})
export class EntityModule {}
