import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'CUSTOMER_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'customer',// comments
          brokers: ['localhost:9092'],
        },
        //producerOnlyMode: true,
        consumer: {
          groupId: 'register-consumer',
        },
      },
    },
  ]),],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
