import { Injectable } from '@nestjs/common';
import { RegistrationDto } from './app.dto';
import { PrismaService } from './prisma/prisma.service';
import { ECourseHours as PrismaECourseHours } from '@prisma/client';
import { ECourseHours } from './types/request-types';

@Injectable()
export class AppService {
	
	constructor(private readonly prisma: PrismaService) { }

	async register(registrationDTO: RegistrationDto) {

		const courseHourMap = {
			[ECourseHours.DAY]: PrismaECourseHours.JOURNEE,
			[ECourseHours.EVENING]: PrismaECourseHours.SOIR,
			[ECourseHours.WEEKEND]: PrismaECourseHours.WEEKEND,
		};

		const courseHour = courseHourMap[registrationDTO.courseHours];

		const results = await this.prisma.user.create({
			data: {
				sureName: registrationDTO.sureName,
				lastName: registrationDTO.lastName,
				profession: registrationDTO.profession,
				courseHours: courseHour,
				age: registrationDTO.age,
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

	async getAllRegistrationInfo() {

		const formations = await this.prisma.formation.findMany({
			select: {
				id: true,
				name: true
			}
		});
		const educationLevels = await this.prisma.educationLevel.findMany({
			select: {
				id: true,
				name: true
			}
		});

		return {
			formations,
			educationLevels,
			educationHours: Object.values(ECourseHours)
		}

	}
}
