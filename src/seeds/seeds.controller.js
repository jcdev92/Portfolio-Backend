const Users = require('../db/models/users.models');
const Skills = require('../db/models/skills.models');
const SocialMedia = require('../db/models/socialMedia.models');
const Projects = require('../db/models/projects.models');
const uuid = require('uuid');
const seedData = require('./data/data.json');
const { hashPassword } = require("../utils/crypto");
const config = require("../config");
const { passwordSeeder } = config;

const { firstName, lastName, email, phone, birthDay, gender, country, aboutMe, profileImg, jobTitle, biography, bioImage, role } = seedData[0];
const skillsArr = seedData[0].Skills;
const socialMediaArr = seedData[0].SocialMedia;
const projectsArr = seedData[0].Projects;
    
const seedUser = async () => {
    const existingUser = await Users.findOne({ where: { email } });
    if (existingUser) {
        console.log('User already exists');
    } else {
        await Users.create({
            id: uuid.v4(),
            firstName,
            lastName,
            password: hashPassword(passwordSeeder),
            email,
            phone,
            birthDay,
            gender,
            country,
            aboutMe,
            profileImg,
            jobTitle,
            biography,
            bioImage,
            role
        });
        console.log('User created');
    }
}

const seedSkills = async () => {
    const profile = await Users.findOne({ where: { email } });
    const existingSkills = await Skills.findAll({ where: { userId: profile.id } });
    if (existingSkills.length > 0) {
        console.log('Skills already exist');
    } else {
        const createdSkills = await Promise.all(skillsArr.map(async skill => {
            return await Skills.create({
                id: uuid.v4(),
                title: skill.title,
                icon: skill.icon,
                userId: profile.id // Asignar el ID del nuevo usuario
            });
        }));
        console.log('Skills created:', createdSkills);
    }
}

const seedSocialMedia = async () => {
    const profile = await Users.findOne({ where: { email } });
    const existingSocialMedia = await SocialMedia.findAll({ where: { userId: profile.id } });
    if (existingSocialMedia.length > 0) {
        console.log('Social media already exist');
    } else {
        const createdSocialMedia = await Promise.all(socialMediaArr.map(async socialMedia => {
            return await SocialMedia.create({
                id: uuid.v4(),
                title: socialMedia.title,
                icon: socialMedia.icon,
                url: socialMedia.url,
                userId: profile.id // Asignar el ID del nuevo usuario
            });
        }));
        console.log('Social media created:', createdSocialMedia);
    }
}


const seedProjects = async () => {
    const profile = await Users.findOne({ where: { email } });
    const existingProjects = await Projects.findAll({ where: { userId: profile.id } });
    if (existingProjects.length > 0) {
        console.log('Projects already exist');
    } else {
        const createdProjects = await Promise.all(projectsArr.map(async project => {
            return await Projects.create({
                id: uuid.v4(),
                title: project.title,
                description: project.description,
                image: project.image,
                url: project.url,
                userId: profile.id // Asignar el ID del nuevo usuario
            });
        }));
        console.log('Projects created:', createdProjects);
    }
}

const seedDatabase = async () => {
    await seedUser();
    await seedSkills();
    await seedSocialMedia();
    await seedProjects();
}


module.exports = {
    seedDatabase
}
