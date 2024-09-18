import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const education_level = async () => {
	await prisma.educationLevel.createMany({
		data: [
			{ name: "Niveau baccalauréat" },
			{ name: "Bac +2" },
			{ name: "Bac +3" },
			{ name: "Bac +5" },
			{ name: "Autre" }
		]
	})
}

const empty_education_level = async () => {
	await prisma.educationLevel.deleteMany({})
}

const empty_formation = async () => {
	await prisma.formation.deleteMany({})
}

const formation = async () => {
	await prisma.formation.createMany({
		data: [
			{ name: "GRH" },
			{ name: "GCF" },
			{ name: "GCM" },
		]
	})
}

(async () => {
	await prisma.$connect();
	await empty_education_level();
	await empty_formation();
	await education_level();
	await formation();
	await prisma.$disconnect();
})()