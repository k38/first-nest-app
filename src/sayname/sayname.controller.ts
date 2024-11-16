import { Controller, Body, Post } from '@nestjs/common';
import { SaynameDto } from 'src/dto/sayname.dto';
import { SaynameService } from './sayname.service';

@Controller('sayname')
export class SaynameController {
    constructor(
        private readonly saynameService: SaynameService
    ) {}
    @Post()
    sayMyName(@Body() sayname: SaynameDto) {
        console.log(sayname);
        return this.saynameService.sayMyName(sayname.name, sayname.age);
    }
}
