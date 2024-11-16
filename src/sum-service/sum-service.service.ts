import { Injectable } from '@nestjs/common';

@Injectable()
export class SumServiceService {
    getSum(a, b) {
        return parseInt(a, 10) + parseInt(b, 10);
    }
}
