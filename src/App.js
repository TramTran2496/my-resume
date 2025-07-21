import React from 'react';
import './App.css';
import Header from './Header/Header';
import BasicInfo from './BasicInfo/BasicInfo';
import Background from './Background/Background';
import unimelb from './img/unimelb.png';
import bku from './img/bku.png';
import sea from './img/sea.png';
import vng from './img/vng.png';
import smartdatics from './img/smartdatics.png';
import {
  GithubFilled,
  LinkedinFilled,
  FacebookFilled,
  InstagramFilled,
  MailOutlined,
  PhoneOutlined
} from '@ant-design/icons';

const App = () => {
  const headerData = {
    name: { first: 'Tram', last: 'Tran Thi Ngoc' },
    career: 'AI Engineer'
  };
  const basicData = {
    social: [
      { icon: <GithubFilled />, link: 'https://github.com/TramTran2496' },
      {
        icon: <LinkedinFilled />,
        link: 'https://vn.linkedin.com/in/ng%E1%BB%8Dc-tr%C3%A2m-tr%E1%BA%A7n-th%E1%BB%8B-7a61a8376'
      }
      // {
      //   icon: <FacebookFilled />,
      //   link: 'https://www.facebook.com/tram.tranthingoc.2496'
      // },
      // {
      //   icon: <InstagramFilled />,
      //   link: 'https://www.instagram.com/eve.tran.24'
      // }
    ],
    contact: [
      { icon: <MailOutlined />, contact: 'ttntram2496@gmail.com', type: 'mailto:' },
      { icon: <PhoneOutlined />, contact: '+84384490137', type: 'tel:' }
    ],
    information: [
      { title: 'Birthday', value: '02 Apr 1996' },
      { title: 'Gender', value: 'female' }
    ],
    objective:
      'To obtain a position where I can leverage my problem-solving skills and strong analytical rigor, while further advancing my expertise in the field of Computer Science.',
    language: [
      { title: 'Vietnamese', value: 'native' },
      { title: 'English', value: 'fluent' }
    ]
  };
  const background = [
    {
      title: 'EDUCATION',
      list: [
        {
          title: 'The University of Melbourne',
          subtitle: 'Doctor of Philosophy - Engineering and IT',
          daterange: 'December 2022 - present',
          description: [],
          logo: unimelb
        },
        {
          title: 'The University of Melbourne',
          subtitle: 'Master of Computer Science',
          daterange: 'March 2021 - November 2022',
          description: ['With Distinction'],
          logo: unimelb
        },
        {
          title: 'Ho Chi Minh University of Technology',
          subtitle: 'Computer Science',
          daterange: 'Sep 2014 - Jun 2018',
          description: ['Honor Program'],
          logo: bku
        }
      ]
    },
    {
      title: 'WORK EXPERIENCE',
      list: [
        {
          title: 'SEA Ltd',
          subtitle: 'Front-end Developer',
          daterange: 'Nov 2018 - February 2021',
          description: [
            'At SEA, I was responsible for developing internal tools for Shopee as well as co-branded websites for its partners. As a front-end developer, I contributed to both UI/UX design and the implementation of user-requested features.',
            'Use: Javascript, Html, Sass, React, NodeJS, Webpack'
          ],
          logo: sea
        },
        {
          title: 'VNG Corporation',
          subtitle: 'Front-end Developer',
          daterange: 'Aug 2017 - Oct 2018',
          description: [
            'At Zalo Team, I primarily focused on front-end development while also gaining experience in back-end tasks. During this time, I learned about server-side rendering for web applications.',
            'Use: Java, Javascript, Html, CSS, Angular JS'
          ],
          logo: vng
        },
        {
          title: 'Smartdatics',
          subtitle: 'Front-end Development Internship',
          daterange: 'Jun 2017 - Aug 2017',
          description: [
            'At Smartdatics, I participated in various outsourcing projects related to study abroad services, cryptocurrency, and e-commerce. This was also where I completed my internship and gained foundational knowledge of React.',
            'Use: Typescript, React, Redux, Html, CSS'
          ],
          logo: smartdatics
        }
      ]
    },
    {
      title: 'PROJECTS',
      list: [
        {
          title: 'Graph representation of urban traffic flow',
          subtitle: 'The University of Melbourne',
          daterange: 'December 2022 - present',
          description: [
            'The aim of this project is to apply Graph Neural Networks (GNNs) to model online traffic data.',
            'Video prediction techniques using diffusion and other generative models were also explored and implemented.',
            'Use: Python'
          ],
        },
        {
          title: 'Anomaly detection for time-series data and evaluation without labels',
          subtitle: 'The University of Melbourne',
          daterange: 'March 2022 - October 2022',
          description: [
            'The objective of this study is to detect anomoly in time-series data without ground truth.',
            'In this study, I applied analytical techniques to preprocess a malaria dataset collected in Brazil and employed unsupervized learning models to detect point anomalies across both temporal and spatial dimensions.',
            'Use: R, Python'
          ],
        },
        {
          title: 'Zalo Official Account',
          subtitle: 'Zalo',
          daterange: 'Aug 2017 - Oct 2018',
          description: [
            'Zalo Official Account is a solution for reaching Zalo huge amount of users. With ZOA, user can turn Zalo account into a news page, a shop or customer service.',
            'Use: Java, Javascript, Html, CSS, Angular JS'
          ],
          link: 'https://oa.zalo.me/home'
        },
        {
          title: 'Saola.me',
          subtitle: 'Smartdatics',
          daterange: 'Jun 2017 - Aug 2017',
          description: [
            'Saola.me is a website about studying abroad, connecting people having the same concerns, providing them a place for sharing experience.',
            'Use: Typescript, React, Redux, Html, CSS'
          ]
        },
        {
          title: 'Music Genre Recognition',
          subtitle: 'Ho Chi Minh University of Technology',
          daterange: 'Oct 2017 - Jun 2018',
          description: [
            'My thesis focuses on music genre classification on audio input.',
            'To accomplish this, we explored Artificial Neural Networks (ANN), Convolutional Neural Networks (CNN), spectrogram analysis, and music feature extraction techniques.',
            'We implemented both ANN and CNN models, and combining their outputs using ensembling methods.'
          ]
        },
        {
          title: 'BKOOL',
          subtitle: 'Ho Chi Minh University of Technology',
          daterange: 'Oct 2016 - Dec 2016',
          description: [
            'BKOOL is a simple programming language providing some basic operations.',
            'Through developing the BKOOL compiler, I gained a deeper understanding of how programming languages function and are implemented.',
            'Use: Scala'
          ]
        }
      ]
    },
    {
      title: 'ACTIVITIES',
      list: [
        {
          title: 'CSE Job Fair 2017',
          subtitle: 'Volunteers',
          daterange: 'Nov 2017',
          description: [
            'Helping the companies prepare booth and brochures, guiding visitors.'
          ]
        },
        {
          title: 'Tiếp sức mùa thi 2016',
          subtitle: 'Volunteers',
          daterange: 'Jun 2016',
          description: [
            'Instructing examinees in registering profiles and designing media publications.'
          ]
        },
        {
          title: 'CSE Job Fair 2015',
          subtitle: 'Volunteers',
          daterange: 'Dec 2015',
          description: [
            'Helping the companies prepare booth and brochures, guiding visitors.'
          ]
        },
        {
          title: 'Tư vấn tuyển sinh Về trường 2015',
          subtitle: 'Volunteers',
          daterange: 'Jan 2015',
          description: [
            'Going back to high school to introduce about Ho Chi Minh University of Technology.'
          ]
        },
        {
          title: 'International Friendship Day 2014',
          subtitle: 'Volunteers',
          daterange: 'Dec 2014',
          description: [
            'Supporting in organizing coordinating festival activities.'
          ]
        }
      ]
    },
    {
      title: 'HONORS & AWARDS',
      list: [
        {
          title: 'Melbourne Research Scholarship',
          daterange: '2022 - 2026',
          link: 'https://scholarships.unimelb.edu.au/awards/graduate-research-scholarships'
        },
        {
          title: 'Melbourne Graduate Scholarship',
          daterange: '2022'
        },
        {
          title: 'Melbourne School of Engineering Scholarship',
          daterange: '2021 - 2022'
        },
        {
          title: 'Vingroup Science and Technology Scholarship Program for Overseas Study',
          daterange: '2021 - 2022',
          link: 'https://scholarships.vinuni.edu.vn/'
        },
        {
          title: 'Microsoft Youthspark Scholarship',
          daterange: '2016 - 2018',
          link: 'https://en.hocbongnusinh.com/microsoft-youthspark-scholarship-for-women-in-technologies-2018-2019.html'
        }
      ]
    },
    {
      title: 'CERTIFICATIONS',
      list: [
        {
          title: 'IELTS Certificate with overall band 6.5',
          subtitle: 'issued by IDP',
          daterange: 'Nov 2019'
        },
        {
          title: 'TOEIC Certificate with score 690',
          subtitle: 'issued by ETS',
          daterange: 'Jan 2016'
        },
        {
          title: 'Agile Software Development with Scrum',
          subtitle: 'issued by Axon Active Vietnam',
          daterange: 'Nov 2017'
        }
      ]
    },
    {
      title: 'INTERESTS',
      list: [
        {
          description: [
            'Music is my greatest passion, I enjoy various genres, Pop, Slow, Latin, Boléro, etc. and I play keyboards as a hobby.',
            'I\'m an avid sports fan, particularly of football, and I never miss any World Cup or the Olympics.',
            'Reading is part of my daily routine. My collection spans autobiographies, novels, science, and detective fiction.',
            'I love traveling, as it allows me to explore and appreciate the wonders of the world.',
            'While sports aren’t my strength, I often go swimming in my free time.'
          ]
        }
      ]
    }
  ];
  const skills = [
    { title: 'Python', percent: 4.5 },
    { title: 'SQL', percent: 3 },
    { title: 'R', percent: 2.5},
    { title: 'C/C++', percent: 3 },
    { title: 'C#', percent: 3 },
    { title: 'Html/CSS', percent: 4 },
    { title: 'Javascript', percent: 4 },
    { title: 'Java', percent: 2.5 },
    { title: 'Haskell', percent: 1 },
    { title: 'Prolog', percent: 1 },
    { title: 'Self-learning', percent: 5 },
    { title: 'Teamwork', percent: 4.5 }
  ];

  return (
    <>
      <Header data={headerData} />
      <div className='body-info'>
        <BasicInfo data={basicData} skills={skills} />
        <Background data={background} />
      </div>
    </>
  );
};

export default App;
