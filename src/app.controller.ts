import { Controller, Get, Post, Body, Param, Query, Req, Res, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto';
import { SumServiceService } from './sum-service/sum-service.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sumService: SumServiceService
    ) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  getHello(@Req() req, @Res() res) {
    // return this.appService.getHello();
    console.log(req);
    res.status(200).json({
      res: this.appService.getHello()
    });
  }

  @Get('/sum')
  getSum(
    @Query('sum1') a,
    @Query('sum2') b
  ) {
    return this.sumService.getSum(a, b);
  }
  
  // @Get()
  // getQueryStrings(
  //   @Query('name') username,
  //   @Query('age') age,
  //   ): string {
  //   return `${username}, ${age}`;
  // }

  @Get('/askquestion')
  askQuestion() {
    return 'How are you?';
  }

  @Post('/answer')
  answer(@Body() getAnswerDto: AnswerDto,
  @Req() req,
  @Res() res) {
    let response;
    let status;
    if(req.body.answer === 'yes') {
      response = "It is yes";
      status = 200;
    } else {
      throw new BadRequestException();
      // response = "It is no";
      // status = 400;
    }

    res.status(status).json({
      res: response
    })
    // return getAnswerDto.answer;
  }

  @Get(':id')
  getRouteParam(@Param('id') userId): string {
    return `${userId}`;
  }
}
