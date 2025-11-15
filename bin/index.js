#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const gradient = require('gradient-string');

// ASCII Art Banner (raw, will be centered)
const bannerRaw = `
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║        ██╗  ██╗ █████╗ ██████╗ ███████╗██╗  ██╗       ║
║        ██║  ██║██╔══██╗██╔══██╗██╔════╝██║  ██║       ║
║        ███████║███████║██████╔╝███████╗███████║       ║
║        ██╔══██║██╔══██║██╔══██╗╚════██║██╔══██║       ║
║        ██║  ██║██║  ██║██║  ██║███████║██║  ██║       ║
║        ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝       ║
║                                                       ║
║          Software Engineer & Tech Enthusiast          ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
`;

// Function to center banner based on terminal width
function getCenteredBanner() {
  const terminalWidth = process.stdout.columns || 80;
  const bannerLines = bannerRaw.trim().split('\n');
  const bannerWidth = Math.max(...bannerLines.map(line => line.length));
  const padding = Math.max(0, Math.floor((terminalWidth - bannerWidth) / 2));
  const spaces = ' '.repeat(padding);
  
  return bannerLines.map(line => spaces + line).join('\n');
}

// Function to center card output based on terminal width
function getCenteredCard(cardOutput) {
  const terminalWidth = process.stdout.columns || 80;
  const cardLines = cardOutput.split('\n');
  // Find the widest line (excluding empty lines for calculation)
  const cardWidth = Math.max(...cardLines.filter(line => line.trim().length > 0).map(line => {
    // Remove ANSI codes for width calculation
    const cleanLine = line.replace(/\x1b\[[0-9;]*m/g, '');
    return cleanLine.length;
  }));
  const padding = Math.max(0, Math.floor((terminalWidth - cardWidth) / 2));
  const spaces = ' '.repeat(padding);
  
  return cardLines.map(line => spaces + line).join('\n');
}

// Personal Information
const info = {
  name: chalk.bold.cyan('Harsh Anand'),
  handle: chalk.gray('@devHarsh01'),
  work: chalk.white('Software Engineer at Info Edge (Naukri)'),
  location: chalk.white('📍 Noida, India'),
  email: chalk.gray('itsmeharsh.nitp@gmail.com'),
  resume: chalk.gray('https://drive.google.com/drive/folders/1SYFLyxlmzjUuRMiUayyWzMxr_Z167C8_?usp=sharing'),
  website: chalk.cyan('http://devharshnitp.vercel.app'),
  github: chalk.gray('https://github.com/its-me-Harsh-Anand'),
  linkedin: chalk.gray('https://www.linkedin.com/in/devHarsh01'),
  stackoverflow: chalk.gray('https://stackoverflow.com/users/17401920/harsh-anand'),
  bio: chalk.white('Engineering elegant solutions in a world full of messy problems.'),
  education: {
    degree: 'B.Tech, Electronics and Communication Engineering',
    institution: 'National Institute of Technology Patna',
    cgpa: '8.33',
    period: 'June 2020 - June 2024'
  },
  experience: [
    {
      company: 'Info Edge (Naukri)',
      role: 'Software Engineer',
      period: 'Dec 2024 - Present',
      location: 'Noida',
      highlights: [
        'Revamped Naukri Campus Resdex search for 30L+ profiles; improved query performance by 40%',
        'Owned FN services (Resdex, Campus) end-to-end development, testing, and deployment',
        'Built Jobseeker Data Coherence Service with anomaly detection systems',
        'Delivered NG Resdex tagging with Elasticsearch cluster and Kafka pipeline',
        'Developed Kubernetes tooling (5000+ uses) boosting operational productivity'
      ]
    },
    {
      company: 'o9 Solutions',
      role: 'Technical Consultant Intern + FTE',
      period: 'Jan 2024 - Nov 2024',
      location: 'Bangalore',
      highlights: [
        'Collaborated with clients (Barry Callebaut, Pepsico, Natura & Co., Loreal)',
        'Increased planning efficiency by 20% via custom Python and JavaScript plugins',
        'Worked on 5 key initiatives with end-to-end testing and 30+ test cases'
      ]
    },
    {
      company: 'Texas Instruments',
      role: 'Application Developer Intern',
      period: 'May 2023 - July 2023',
      location: 'Bangalore',
      highlights: [
        'Led automation initiatives serving 100K+ customers, reducing manual requests by 40%',
        'Fortified system security, reducing server bandwidth by 25%',
        'Designed 5+ Splunk alerts and automated 3 scripts through Jenkins'
      ]
    }
  ],
  projects: [
    {
      name: 'NITP Web',
      description: 'Led full-stack development of NIT Patna\'s official website (4,000+ daily users)',
      tech: 'Next.js, Gatsby.js, Node.js, SQL, GraphQL, GOCD',
      achievement: 'Received Institute Day Gratitude (2023) award'
    },
    {
      name: 'Loan Website',
      description: 'Full-stack loan management platform with OTP authentication and automated PDF generation',
      tech: 'React, Node.js, MongoDB, Twilio API, Nodemailer'
    },
    {
      name: 'Open Source Contributions',
      description: 'Contributed to 4+ major repositories (Codedamn, Eduhub, Octokit Lite)',
      tech: 'React, Node.js, Git, REST APIs',
      achievement: 'Built guided projects for 150+ learners'
    }
  ],
  achievements: [
    {
      title: 'NPTEL - Joy of Computing using Python',
      detail: 'Gold + Elite (95%), Top 2% among 10,000+ applicants (June 2023)'
    },
    {
      title: 'HacktoberFest Contributor (2022)',
      detail: 'Contributed to Codedamn, Eduhub, Octokit Lite, AirQo projects'
    },
    {
      title: 'NPTEL - Programming in Modern C++',
      detail: 'Silver + Elite (87%), Top 13 among 12,000+ applicants (June 2022)'
    },
    {
      title: 'GWOC Contributor (2021)',
      detail: 'Specialized in JavaScript, Frontend Development, and Open Source'
    },
    {
      title: 'Problem Solving',
      detail: 'LeetCode: 600+ problems (Top 10%) | GFG: 300+ problems'
    }
  ],
  skills: {
    languages: ['Java', 'JavaScript (ES6+)', 'Python', 'C/C++'],
    frameworks: ['NodeJS', 'ExpressJS', 'React', 'Next.JS'],
    databases: ['Elasticsearch', 'MongoDB', 'MySQL'],
    tools: ['Kibana', 'Postman', 'SQL Workbench', 'VS Code', 'IntelliJ IDEA'],
    infrastructure: ['Docker', 'Kubernetes', 'NGINX', 'Linux']
  },
  interests: [
    '🚀 Open Source',
    '💻 Full Stack Development',
    '🔍 Search & Suggester Systems',
    '☁️ Cloud & Infrastructure',
    '📊 Data Engineering',
    '🛠️ System Design'
  ]
};

// Function to create main card (simplified - only basics)
function createMainCard() {
  const cardContent = [
    `${info.name} ${info.handle}`,
    '',
    `${chalk.bold('Bio:')}  ${chalk.white('Engineering elegant solutions in a world full of messy problems.')}`,
    '',
    `${chalk.bold('📧 Email:')}  ${info.email}`,
    `${chalk.bold('📄 Resume:')}  ${info.resume}`,
    `${chalk.bold('🌐 Website:')}  ${info.website}`,
    `${chalk.bold('💻 GitHub:')}  ${info.github}`,
    `${chalk.bold('💼 LinkedIn:')}  ${info.linkedin}`,
    '',
    `${chalk.gray('Run')} ${chalk.cyan('npx devharsh01 --help')} ${chalk.gray('for more options')}`
  ];
  
  // Use a fixed width to prevent re-rendering issues on terminal resize
  // Capture width once at execution time and lock it
  const terminalWidth = (process.stdout.columns || 80);
  const fixedWidth = Math.min(Math.max(terminalWidth - 6, 60), 75); // Fixed between 60-75 chars for simpler card
  
  return boxen(
    cardContent.join('\n'),
    {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'cyan',
      backgroundColor: '#1a1a1a',
      width: fixedWidth
    }
  );
}

// Handle command line arguments
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  const helpCard = boxen(
    [
      `${chalk.bold.cyan('Available Commands:')}`,
      '',
      `  ${chalk.cyan('npx devharsh01')}           Show main card`,
      `  ${chalk.cyan('npx devharsh01 --help')}     Show this help message`,
      `  ${chalk.cyan('npx devharsh01 --skills')}   Show detailed skills`,
      `  ${chalk.cyan('npx devharsh01 --experience')} Show work experience`,
      `  ${chalk.cyan('npx devharsh01 --projects')} Show projects`,
      `  ${chalk.cyan('npx devharsh01 --achievements')} Show achievements`,
      `  ${chalk.cyan('npx devharsh01 --education')} Show education details`,
      `  ${chalk.cyan('npx devharsh01 --links')}    Show all links`,
      '',
      `${chalk.gray('For more info, visit:')} ${chalk.cyan(info.website)}`
    ].join('\n'),
    {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'green'
    }
  );
  console.log(helpCard);
} else if (args.includes('--skills')) {
  const skillsCard = boxen(
    [
      `${chalk.bold.cyan('Technical Skills')}`,
      '',
      `${chalk.bold.yellow('Languages:')}`,
      `  • ${info.skills.languages.join(', ')}`,
      '',
      `${chalk.bold.blue('Frameworks & Libraries:')}`,
      `  • ${info.skills.frameworks.join(', ')}`,
      '',
      `${chalk.bold.green('Databases & Search:')}`,
      `  • ${info.skills.databases.join(', ')}`,
      '',
      `${chalk.bold.magenta('Developer Tools:')}`,
      `  • ${info.skills.tools.join(', ')}`,
      '',
      `${chalk.bold.cyan('Infrastructure & DevOps:')}`,
      `  • ${info.skills.infrastructure.join(', ')}`,
      '',
      `${chalk.bold.white('Problem Solving:')}`,
      `  • ${chalk.yellow('LeetCode: 600+ problems (Top 10%)')}`,
      `  • ${chalk.cyan('GFG: 300+ problems')}`
    ].join('\n'),
    {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'yellow'
    }
  );
  console.log(skillsCard);
} else if (args.includes('--experience') || args.includes('--exp')) {
  let experienceText = [`${chalk.bold.cyan('Work Experience')}`, ''];
  
  info.experience.forEach((exp, index) => {
    experienceText.push(`${chalk.bold.yellow(`${index + 1}. ${exp.company}`)}`);
    experienceText.push(`   ${chalk.white(exp.role)} | ${chalk.gray(exp.period)} | ${chalk.gray(exp.location)}`);
    experienceText.push('');
    experienceText.push(`${chalk.bold('Key Contributions:')}`);
    exp.highlights.forEach(highlight => {
      experienceText.push(`   ${chalk.green('•')} ${chalk.white(highlight)}`);
    });
    if (index < info.experience.length - 1) experienceText.push('');
  });
  
  const experienceCard = boxen(
    experienceText.join('\n'),
    {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'blue'
    }
  );
  console.log(experienceCard);
} else if (args.includes('--projects') || args.includes('--proj')) {
  let projectsText = [`${chalk.bold.cyan('Projects & Open Source')}`, ''];
  
  info.projects.forEach((project, index) => {
    projectsText.push(`${chalk.bold.yellow(`${index + 1}. ${project.name}`)}`);
    projectsText.push(`   ${chalk.white(project.description)}`);
    projectsText.push(`   ${chalk.bold('Tech:')} ${chalk.gray(project.tech)}`);
    if (project.achievement) {
      projectsText.push(`   ${chalk.green('🏆 ' + project.achievement)}`);
    }
    if (index < info.projects.length - 1) projectsText.push('');
  });
  
  const projectsCard = boxen(
    projectsText.join('\n'),
    {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'magenta'
    }
  );
  console.log(projectsCard);
} else if (args.includes('--achievements') || args.includes('--ach')) {
  let achievementsText = [`${chalk.bold.cyan('Achievements & Certifications')}`, ''];
  
  info.achievements.forEach((achievement, index) => {
    achievementsText.push(`${chalk.bold.yellow(`${index + 1}. ${achievement.title}`)}`);
    achievementsText.push(`   ${chalk.white(achievement.detail)}`);
    if (index < info.achievements.length - 1) achievementsText.push('');
  });
  
  const achievementsCard = boxen(
    achievementsText.join('\n'),
    {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'green'
    }
  );
  console.log(achievementsCard);
} else if (args.includes('--education') || args.includes('--edu')) {
  const educationCard = boxen(
    [
      `${chalk.bold.cyan('Education')}`,
      '',
      `${chalk.bold('Degree:')} ${info.education.degree}`,
      `${chalk.bold('Institution:')} ${info.education.institution}`,
      `${chalk.bold('CGPA:')} ${chalk.yellow(info.education.cgpa)}`,
      `${chalk.bold('Period:')} ${info.education.period}`,
      '',
      `${chalk.gray('Graduated from one of India\'s premier technical institutes')}`
    ].join('\n'),
    {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'cyan'
    }
  );
  console.log(educationCard);
} else if (args.includes('--links')) {
  const linksCard = boxen(
    [
      `${chalk.bold.cyan('Connect with me:')}`,
      '',
      `${chalk.bold('📧 Email:')}        ${info.email}`,
      `${chalk.bold('📱 Phone:')}        ${info.phone}`,
      `${chalk.bold('🌐 Website:')}      ${info.website}`,
      `${chalk.bold('💼 LinkedIn:')}     ${info.linkedin}`,
      `${chalk.bold('💻 GitHub:')}       ${info.github}`,
      `${chalk.bold('📚 Stack Overflow:')} ${info.stackoverflow}`,
      `${chalk.bold('📄 Resume:')}       ${info.resume}`,
      '',
      `${chalk.gray('Feel free to reach out!')}`
    ].join('\n'),
    {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'magenta'
    }
  );
  console.log(linksCard);
} else {
  // Display the banner with gradient and main card
  // Create output once and output atomically to prevent duplication on terminal resize
  const centeredBanner = getCenteredBanner();
  const bannerOutput = gradient.rainbow(centeredBanner);
  const cardOutput = createMainCard();
  const centeredCard = getCenteredCard(cardOutput);
  
  // Output everything at once to prevent terminal re-rendering issues
  process.stdout.write(bannerOutput + '\n' + centeredCard + '\n');
}