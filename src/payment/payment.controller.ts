import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PaginateQuery, Paginated, Paginate } from 'nestjs-paginate';
import { PaymentService } from './payment.service';
import { Payment } from './payment.entity';

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) { }

    @Get()
    getPayments(@Paginate(['amount']) query: PaginateQuery): Promise<Paginated<Payment>> {
        return this.paymentService.findPayments(query);
    }

    @Get('id/:id')
    getPaymentById(@Param('id', ParseIntPipe) id: number) {
        return this.paymentService.findPaymentById(id);
    }
}
