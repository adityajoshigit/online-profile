import { createApp } from "https://unpkg.com/petite-vue?module";

createApp({
  navbarBrandHeader: "Aditya Joshi",
  get fullName() {
    return (
      this.personalInfo.firstName +
      " " +
      this.personalInfo.lastName
    );
  },
  get emailLink() {
    return "mailto:" + this.personalInfo.email;
  },
  personalInfo: {
    firstName: "Aditya",
    lastName: "Joshi",
    phoneNumber: "+1(438)866-8552",
    email: "adityajoshi.sfdc@gmail.com",
  },
  socialMediaInfo: {
    github: "https://github.com/adityajoshigit",
    linkedIn: "https://www.linkedin.com/in/adityasjoshi96/",
  },
  leadModule: {
    name: "",
    email: "",
    msg: "",
  },
  educationalInfo: {
    schooling: [
      {
        instituteName:
          "P.E.S. Modern College of Engineering",
        location: {
          city: "Pune",
          country: "India",
        },
        fromYear: 2014,
        toYear: 2018,
        degreeDetails: {
          fullName: "Bachelor of Engineering",
          shorthand: "B.E. (Computer)",
          major: "Computer Engineering",
          score: 79,
          unit: "%",
        },
        courses: [
          {
            title: "Data Structures and Algorithms",
          },
          {
            title: "Introduction to Cyber Security",
          },
          {
            title:
              "Object Oriented & Multicore Programming",
          },
          {
            title: "Operating Systems",
          },
          {
            title: "Data Mining",
          },
          {
            title: "Business Intelligence & Analytics",
          },
        ],
      },
      {
        instituteName: "Concordia University",
        location: {
          city: "Montreal",
          country: "Canada",
        },
        fromYear: 2022,
        toYear: 2023,
        isOngoing: true,
        degreeDetails: {
          fullName: "Master of Engineering",
          shorthand: "MEng",
          major: "Software Engineering",
          score: 3.7,
          unit: "CGPA",
        },
        courses: [
          {
            title: "Advanced Programming Practices",
          },
          {
            title: "Software Comprehension & Maintenance",
          },
          {
            title: "Software Engineering Processes",
          },
          {
            title: "Software Design Methodologies",
          },
          {
            title: "Systems Requirements & Specifications",
          },
          {
            title: "Software Refactoring",
          },
          {
            title: "Software Project Management",
          },
        ],
      },
    ],
  },
  awards: [
    {
      title: "HotStepper Award",
      authority: "Eternus Solutions Private Limited",
      year: 2019,
      month: 10,
      url: "",
    },
  ],
  certifiations: [
    {
      title: "Certification of Excellence",
      authority: "Eternus Solutions Private Limited",
      year: 2019,
      month: 10,
      url: "",
    },
    {
      title: "Completion Certification",
      authority: "Udemy",
      year: 2022,
      month: 10,
      url: "",
    },
    {
      title: "Completion Certification",
      authority: "Udemy",
      year: 2023,
      month: 2,
      url: "",
    },
  ],
  skillSet: [
    {
      domain: "Salesforce CRM",
      skillItems: [
        { label: "Apex" },
        { label: "Visualforce" },
        { label: "Lightning Aura" },
        { label: "LWC" },
        { label: "Community" },
        { label: "Email Templates" },
        { label: "Process Automation" },
        { label: "Flows" },
        { label: "Deployment" },
        { label: "Users & Profiles" },
      ],
      description:
        "I worked on Salesforce ecosystem as a developer and consultant. The projects I worked on involved a range of features including Customization, Configuration, Website building, Third-party System Integration using REST, Automatic Email Notification etc.",
      experienceYears: 3,
      experienceLevel: "Intermediate",
    },
    {
      domain: "Frontend Development",
      skillItems: [
        { label: "HTML5" },
        { label: "CSS3" },
        { label: "JavaScript" },
        { label: "Bootstrap5" },
        { label: "ReactJS" },
        { label: "Vue.js" },
        { label: "Node.js" },
      ],
      description:
        "As a Frontend Web Development, I work on technologies and frameworks such as HTML5, CSS3, JavaScript, Bootstrap 5, ES6+, ReactJS, Vue.js, node.js and many more. I've always been keen to learn new frameworks and technologies.",
      experienceYears: 2,
      experienceLevel: "Intermediate",
    },
    {
      domain: "Backend Development",
      skillItems: [
        { label: "Java 8+" },
        { label: "Python" },
        { label: "Play Framework" },
        { label: "Akka Library" },
        { label: "Express.js" },
      ],
      description:
        "Have worked on Java using its latest features such as Streams, Lambda functions etc and Akka library for Actor-based programming. Recently, I have started learning Node.js and Express.js to write API services in JavaScript. I have also used Python in one of my academic projects.",
      experienceYears: 2,
      experienceLevel: "Beginner",
    },
  ],
}).mount("#pageBody");
