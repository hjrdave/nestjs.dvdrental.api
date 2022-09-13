import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginateQuery, paginate, Paginated } from 'nestjs-paginate';
import { Payment } from './payment.entity';

@Injectable()
export class PaymentService {
    constructor(
        @InjectRepository(Payment)
        private readonly paymentRepository: Repository<Payment>,
    ) { };

    findPayments(query: PaginateQuery): Promise<Paginated<Payment>> {
        return paginate(query, this.paymentRepository, {
            sortableColumns: ['id'],
            defaultSortBy: [['id', 'ASC']],
            nullSort: 'last',
            defaultLimit: 50,
            maxLimit: 14596
        });
    }

    findPaymentById(id: number) {
        return this.paymentRepository.findOne({ where: { id: id } });
    }
}
