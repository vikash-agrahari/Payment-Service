import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {WebhookService } from './webhook.service';
import { EntityModule } from 'src/entity/entity.module';
import { GuardModule } from 'src/guards/guards.module';
import { GuardService } from 'src/guards/guards.service';
import { HttpResponse } from 'src/common/httpResponse';
import { WebhookController } from './webhook.controller';
import { TransactionService } from '../transaction/transaction.service';



@Module({
  imports: [ConfigModule.forRoot(),EntityModule, GuardModule],
  controllers: [WebhookController],
  providers: [WebhookService,TransactionService, GuardService, HttpResponse],
})
export class WebhookModule {}
