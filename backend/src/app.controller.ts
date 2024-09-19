import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { RegistrationDto } from './app.dto';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Post('register')
	@UsePipes(new ValidationPipe({ transform: true }))
	async register(@Body() registrationDTO: RegistrationDto) {
		try {
			return await this.appService.register(registrationDTO);
		} catch (error) {
			return error.messgae;
		}
	}

	@Get('registration-info')
	async getAllRegistrationInfo() {
		try {
			return await this.appService.getAllRegistrationInfo();
		} catch (error) {
			return error.message;
		}
	}
}	
