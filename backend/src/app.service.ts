import { Injectable } from '@nestjs/common';
import { RegistrationDto } from './app.dto';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
	
	constructor(private readonly prisma: PrismaService) { }

	async register(registrationDTO: RegistrationDto) {
		const results = await this.prisma.user.create({
			data: {
				name: registrationDTO.name,
				email: registrationDTO.email,
				phone: registrationDTO.phone,
				educationLevelId: registrationDTO.education_level_id,
				UserFormation: {
					create: {
						formationId: registrationDTO.formation_id
					}
				}
			}
		})
		return results;
	}
}
