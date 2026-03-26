import { FaCode, FaDesktop, FaDatabase, FaServer, FaReact, FaSchool } from 'react-icons/fa6'
import profileImg from '../assets/profile.avif'
import { FaProjectDiagram } from 'react-icons/fa'

export const assets = {
    profileImg,
}

export const navMenu = ['Home', 'Work', 'Skills', 'About', 'Contact']


// Skills Section
export const skillsData = [
    {
        icon: FaReact,
        title: 'Frontend',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
        icon: FaServer,
        title: 'Backend',
        technologies: ['Node.js', 'Express.js', 'REST API']
    },
    {
        icon: FaDatabase,
        title: 'Database',
        technologies: ['MongoDB', 'Mongoose']
    },
    {
        icon: FaDesktop,
        title: 'Tools',
        technologies: ['Git', 'GitHub', 'Postman', 'VS Code']
    },
    {
        icon: FaCode,
        title: 'Other',
        technologies: ['JWT Authentication', 'API Integration', 'MVC Structure']
    },
]



// Projects Section
export const projectData = [
    {
        title: 'E-Commerce Backend API',
        description: 'Complete backend for e-commerce including authentication, product management and order APIs.',
        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500',
        tech: ['Node.js', 'Express.js', 'MongoDB']
    },
    {
        title: 'Authentication System',
        description: 'User authentication system with register, login, JWT token and protected routes.',
        image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=500',
        tech: ['Node.js', 'Express.js', 'JWT']
    },
    {
        title: 'Task Management System',
        description: 'Admin assigns tasks to managers and managers assign tasks to employees.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500',
        tech: ['React', 'Node.js', 'Express']
    },
    {
        title: 'Portfolio Website',
        description: 'Personal developer portfolio showcasing skills and projects.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500',
        tech: ['React', 'CSS']
    }
]



// About / Profile Section
export const profileData = [
    {
        icon: FaCode,
        title: 'Languages & Technologies',
        technologies: ['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB']
    },
    {
        icon: FaSchool,
        title: 'Education',
        technologies: ['Student (Computer Science)']
    },
    {
        icon: FaProjectDiagram,
        title: 'Projects',
        technologies: ['Built MERN Stack Projects']
    },
]