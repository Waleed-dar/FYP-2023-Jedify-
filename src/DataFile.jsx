import cyber from './Images/cyber.jpeg'
import A1 from './Images/A2.jpeg'
import fsd1 from './Images/fsd1.jpeg'
import network from './Images/network.jpeg'
import m1 from './Images/m1.jpeg'
import m2 from './Images/m2.jpeg'
import m3 from './Images/m3.jpeg'
import m4 from './Images/m4.jpeg'

export const Score1=[
    {
        key: '1',
        value: '2K+',
        label: 'Running students',
      },
      {
        key: '2',
        value: '30+',
        label: 'Mentors',
      },
      {
        key: '3',
        value: '1K+',
        label: 'Got Hired',
      },
      {
        key: '4',
        label: 'Courses',
        value: '20+',
      }
]
export const Courses=[
  {
    key: '1',
    name: 'Cyber Security',
    price: ' RS 20,000',
    description: 'Learn About Cyber Security and its roles and operation',
    image: cyber
    
  },

  {
    key: '2',
    name: 'Full Stack Development',
    price: ' RS 35,000',
    description: 'Learn About Development and its roles and operation ',
    image: fsd1

  },
  {
    key: '3',
    name: 'Artificial Intelligence',
    price: ' RS 45,000',
    description: 'Learn about new AI models and its roles and operation',
    image: A1

  },
  {
    key: '4',
    name: 'Networking',
    price: ' RS 50,000',
    description: 'Learn about Networking models and its roles and operation',
    image: network

  }
]
export const SideItems={
  Students:"Students",
  Teacher: "Teacher",
  Tech: "Tech HR",
  University: "University Admins"
}
export const SideItemsData=[
  {
    key: 'Students',
    p1:'A platform where students can enhance their skills and can be guided to the right career path. ',
    p2:'Students can enroll in different courses.',
    p3:'Students can get career opportunities.'
  },
  {
    key: 'Teacher',
    p1:'Teacher can create course and enroll students.',
    p2:'Teachers can get career opportunities.',
    p3:'Teachers can post on forums.'
  },
  {
    key: 'Tech HR',
    p1:'Tech HRs can access relevant resources from this.',
    p2:'Tech HRs can share industry insights. ',
    p3:'Tech HRs can post about in-demand fields.'
  },
  {
    key: 'University Admins',
    p1:'University admins can hire lecturers from the platform.',
    p2:'University admins can post on forums.',
    p3:' University admins can rate the course '
  } 
]
export const Mentorsdata=[
  {
    key: '1',
    name: 'Kashif Saleem',
    Domain: ' Application support Analyst',
    description: 'Former co-founder of opendoor and early staff memebrs of Spotify',
    image: m1
  },
  {
    key: '2',
  name: 'Aziz Asif',
  Domain: ' backend Developer',
  description: 'Backend developer at facebook and early members of snapchat',
  image: m2
},
{
  key: '3',
    name: 'Ali Harris',
    Domain: ' Teacher',
    description: 'Currently Lectuere at Umt lahore have experties in web development',
    image: m3
},
{
  key: '4',
    name: 'Waleed',
    Domain: ' front-end developer',
    description: 'Being Part of startups and looking for oppornities that can add value',
    image: m4
}
]
