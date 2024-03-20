import { Connection } from 'mongoose';
import { TransactionSchema } from './transaction.schema';
import { ENUM } from 'src/common/enum';

export const schemaProviders = [
  {
    provide: 'TRANSACTION_MODEL',
    useFactory: (connection: Connection) => connection.model(ENUM.COLLECTIONS.TRANSACTION, TransactionSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
