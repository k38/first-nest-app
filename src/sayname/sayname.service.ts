import { Injectable } from '@nestjs/common';

@Injectable()
export class SaynameService {
    sayMyName(name: string, age?: number) {
        return `My name is ${name} ${age ? `age is ${age}`: ""}`;
    }
}
