import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ClientKafka } from '@nestjs/microservices';
import { CustomerModel } from './models/customer.model';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CustomerService {
  constructor(@Inject('CUSTOMER_SERVICE') private client: ClientKafka){}

  async create(createCustomerDto: CreateCustomerDto): Promise<CustomerModel> {
    //let response: CustomerModel = {};
    const $cmd = this.client.send('create_customer', JSON.stringify(createCustomerDto)) ;
    const $promise = await lastValueFrom($cmd);
    console.log($promise);
    // this.client
    //   .send('create_customer', JSON.stringify(createCustomerDto)) 
    //   .subscribe((user: any) => {
    //     console.log(
    //       //`process payment for user ${user.name} - amount: ${amount}`
    //       user
    //     );
    //    response.id = $promise._id,
    //    response.fulll_name = `${$promise.first_name} ${$promise.second_name} ${$promise.last_name}`
    //   });
      //console.log(response)
      return {
        id: String($promise._id),
        fulll_name: `${$promise.first_name} ${$promise.second_name} ${$promise.last_name}`
      };
  }

  findAll() {
    return `This action returns all customer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }

  onModuleInit() {
    this.client.subscribeToResponseOf('create_customer');
  }
}
