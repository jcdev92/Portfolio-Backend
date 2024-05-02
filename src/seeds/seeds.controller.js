const UsersModel = require('../db/models/users.models');
const SkillsModel = require('../db/models/skills.models');
const SocialMediaModel = require('../db/models/socialMedia.models');
const ProjectsModel = require('../db/models/projects.models');
const ProjectsSkillsModel = require('../db/models/projects_skills.models');
const uuid = require('uuid');
const seedData = require('./data/data.json');
const { hashPassword } = require("../utils/crypto");
const config = require("../config");
const { passwordSeeder } = config;

const { firstName, lastName, email, phone, birthDay, gender, country, aboutMe, profileImg, jobTitle, biography, bioImage, role } = seedData.data[0];
const skillsArr = seedData.data[0].Skills;
const socialMediaArr = seedData.data[0].SocialMedia;
const projectsArr = seedData.data[0].Projects;
    
const seedUser = async () => {
    const existingUser = await UsersModel.findOne({ where: { email } });
    if (existingUser) {
        console.log('User already exists');
    } else {
        await UsersModel.create({
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
    const profile = await UsersModel.findOne({ where: { email } });
    const existingSkills = await SkillsModel.findAll({ where: { userId: profile.id } });
    if (existingSkills.length > 0) {
        console.log('Skills already exist');
    } else {
        const createdSkills = await Promise.all(skillsArr.map(async skill => {
            return await SkillsModel.create({
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
    const profile = await UsersModel.findOne({ where: { email } });
    const existingSocialMedia = await SocialMediaModel.findAll({ where: { userId: profile.id } });
    if (existingSocialMedia.length > 0) {
        console.log('Social media already exist');
    } else {
        const createdSocialMedia = await Promise.all(socialMediaArr.map(async socialMedia => {
            return await SocialMediaModel.create({
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
    const profile = await UsersModel.findOne({ where: { email } });
    const existingProjects = await ProjectsModel.findAll({ where: { userId: profile.id } });
    if (existingProjects.length > 0) {
        console.log('Projects already exist');
    } else {
        const createdProjects = await Promise.all(projectsArr.map(async project => {
            return await ProjectsModel.create({
                id: uuid.v4(),
                title: project.title,
                description: project.description,
                image: project.image,
                url: project.url,
                github: project.github,
                userId: profile.id // Asignar el ID del nuevo usuario
            });
        }));
        console.log('Projects created:', createdProjects);
    }
}

const seedRelateProjectSkills = async () => {
    const { Projects } = seedData.data[0];
    await Promise.all(
        Projects.map(async project => {
            const projectFound = await ProjectsModel.findOne({ where: { title: project.title } });
            const skillsFound = await Promise.all(project.ProjectsSkills.map(async ps => {
                return await SkillsModel.findOne({ where: { title: ps.Skill.title } });
            }));
            await Promise.all(skillsFound.map(async skill => {
                await ProjectsSkillsModel.create({
                    id: uuid.v4(),
                    projectId: projectFound.id,
                    skillId: skill.id
                });
            }));
            
        })
    );
    return 'Relations created';
}

const seedDatabase = async () => {
    await seedUser();
    await seedSkills();
    await seedSocialMedia();
    await seedProjects();
    await seedRelateProjectSkills();
}


module.exports = {
    seedDatabase
}
