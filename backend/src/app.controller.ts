import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RegistrationDto } from './app.dto';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Post('register')
	register(@Body() registrationDTO: RegistrationDto) {
		try {
			return this.appService.register(registrationDTO);
		} catch (error) {
			return error.messgae;
		}
	}
}	
