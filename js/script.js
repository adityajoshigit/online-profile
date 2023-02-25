// import { sendEmail } from "../js/emailUtil";
import { createApp } from "https://unpkg.com/petite-vue?module";

createApp({
  leadEmailId: "",
  leadNameValue: "",
  leadMessageToMe: "",
  navbarBrandHeader: "Aditya Joshi",
  SERVICE_ID: "service_iu6lm5r",
  TEMPLATE_ID: "template_91lq7uj",
  PUBLIC_KEY: "eSiKRxI75N8U__SNG",
  sendEmail: function () {
    emailjs
      .send(
        "service_iu6lm5r",
        "template_91lq7uj",
        {
          from_name: this.leadNameValue,
          reply_to: this.leadEmailId,
          message: this.leadMessageToMe,
        },
        "eSiKRxI75N8U__SNG"
      )
      .then()
      .catch()
      .finally(() => {
        this.leadEmailId = "";
        this.leadNameValue = "";
        this.leadMessageToMe = "";
      });
  },
  onContactMeClick: function () {
    console.log(this.leadNameValue);
    console.log(this.leadEmailId);
    console.log(this.leadMessageToMe);
    this.sendEmail();
  },
  get fullName() {
    return (
      this.personalInfo.firstName +
      " " +
      this.personalInfo.lastName
    );
  },
  get isValidForm() {
    return (
      this.leadNameValue &&
      this.leadEmailId &&
      this.leadMessageToMe
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
    profileHeadline:
      "I am a passionate Software Developer, inclined towards learning and implementing new techniologies. I love web development and I'm a Salesforce Enthusiast. Client service has been my motivation throughout my journey as a developer. Looking forward to hearing from you!",
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
      experienceYears: 1,
      experienceLevel: "Beginner",
    },
  ],
  projectsInfo: {
    projects: [
      {
        title: "Online Portfolio Website",
        technologies: [
          "HTML5",
          "CSS3",
          "Vue.js",
          "Bootstrap 5",
        ],
        repoURL:
          "https://github.com/adityajoshigit/online-profile",
        showcaseImageURL: "./img/pro-ss.PNG",
        projectURL: "https://adityaj-profile.netlify.app/",
        numberOfStars: 1,
        description:
          "Own Online Portfolio showcasing my profile details.",
      },
      {
        title: "Feedback App",
        technologies: ["ReactJS", "CSS3"],
        repoURL:
          "https://github.com/adityajoshigit/feedback-app-react",
        showcaseImageURL: "./img/fa-ss.PNG",
        projectURL:
          "https://feedback-app-web-app.netlify.app/",
        numberOfStars: 1,
        description:
          "Web app allowing users to give feedback in form of a rating and related text description. ",
      },
      {
        title: "Task Tracker App",
        technologies: ["ReactJS", "CSS3", "Bootstrap 5"],
        repoURL:
          "https://github.com/adityajoshigit/task-tracker",
        showcaseImageURL: "./img/tt-ss.PNG",
        projectURL:
          "https://daily-task-tracker.vercel.app/",
        numberOfStars: 1,
        description:
          "A tiny web app that helps us track our daily tasks list by acting as a rough checklist. Also lets us set reminders for tasks at specific times.",
      },
    ],
  },
}).mount("#pageBody");
