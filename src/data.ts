import _ from "lodash";

export interface projectInterface {
  title: string;
  description: string;
  details: string;
  frameworks: string[];
  libraries: string[];
  repository: string;
  url: string;
}

const projects = [
  {
    title: "BigBox Company Profile",
    description:
      "Discover BigBox through our dynamic Company Profile, a gateway to explore innovative products with seamless payments, SSR, real-time notifications, SEO, captivating animations, and multi-language support.",
    details:
      "Immerse yourself in the world of BigBox with the BigBox Company Profile. This company profile is more than just an informational hub. <br/><br/> it's a dynamic gateway to explore BigBox's products. Featuring seamless payment gateways, server-side rendering (SSR), real-time notifications, search engine optimization (SEO)",
    frameworks: ["NextJS", "React"],
    libraries: [
      "@mui/icons-material",
      "@mui/material",
      "@testing-library/react",
      "animejs",
      "axios",
      "gsap",
      "highcharts",
      "Jest",
      "LegionUI",
      "lodash",
      "moment",
      "next-translate",
      "prop-types",
      "react-hook form",
      "redux-persist",
      "redux",
      "storybook",
      "typescript",
    ],
    repository: "",
    url: "https://bigbox.co.id",
  },
  {
    title: "BE for BigBox Company Profile",
    description:
      "The backend of the BigBox Company Profile is engineered for security, performance, and scalability. Using ExpressJS as the backbone, it integrates a range of powerful tools and libraries to deliver seamless functionality.",
    details:
      "The backend of the BigBox Company Profile is meticulously engineered for optimal security, performance, and scalability. Built on the robust ExpressJS framework, it integrates an array of powerful tools and libraries to ensure seamless and efficient functionality. This comprehensive setup guarantees a smooth, secure, and reliable user experience, enabling BigBox to deliver its innovative products with unmatched efficiency and reliability.",
    frameworks: ["ExpressJS"],
    libraries: [
      "axios",
      "bcryptjs",
      "crypto-js",
      "joi",
      "jsonwebtoken",
      "morgan",
      "multer",
      "nodemailer",
      "postgresql",
      "sequelize",
      "telegraf",
      "winston",
      "xss-clean",
    ],
    repository: "",
    url: "https://bigbox.co.id",
  },
  {
    title: "BigBox Products Documentation",
    description:
      "Explore the comprehensive guide to navigating BigBox products with ease. Using React and Docusaurus, BigBox Documentation provides users with clear, concise instructions and resources, ensuring a seamless user experience.",
    details:
      "Dive into the ultimate guide for navigating BigBox products effortlessly with BigBox Documentation. Crafted with React and Docusaurus, this comprehensive resource hub offers clear, concise instructions and a wealth of resources to ensure an unparalleled user experience. Whether you're a seasoned professional or new to BigBox, our documentation is designed to make your journey as smooth and informative as possible. Explore detailed tutorials, step-by-step guides, and insightful tips that empower you to maximize the potential of BigBox products. With a focus on user-friendliness and accessibility, BigBox Documentation is your go-to source for mastering everything BigBox has to offer. Experience the power of well-crafted documentation and unlock the full capabilities of BigBox products today!",
    frameworks: ["React"],
    libraries: ["Docusaurus"],
    repository: "",
    url: "https://docs.bigbox.co.id",
  },
  {
    title: "SEMAR MRANTASI",
    description:
      "Stay ahead with Semar-Mrantasi, a real-time monitoring platform for food stock and prices in Semarang.",
    details:
      "Stay ahead of the curve with Semar-Mrantasi, an innovative real-time monitoring platform designed to keep you informed about food stock and prices. Harnessing the power of cutting-edge technologies like VueJS, Highcharts, ExpressJS, ReactJS, and Pinia, Semar-Mrantasi offers comprehensive insights into market trends and dynamics.<br/><br/>With Semar-Mrantasi, you gain access to up-to-the-minute data on food stocks and price fluctuations, empowering you to make informed decisions with ease. The intuitive and responsive user interface, built with VueJS and ReactJS, ensures a seamless and engaging user experience, while Highcharts delivers visually stunning and interactive data visualizations. ExpressJS ensures robust and efficient backend performance, and Pinia provides state management for a smooth, real-time data flow.<br/><br/>Whether you are a market analyst, a business owner, or simply someone interested in market trends, Semar-Mrantasi is your go-to platform for staying updated and making strategic decisions. Explore the dynamic world of food market trends with Semar-Mrantasi, where real-time data meets user-friendly design to keep you ahead of the competition.",
    frameworks: ["VUE", "React"],
    libraries: [
      "Highcharts",
      "Pinia",
      "Quasar",
      "Tailwind",
      "Typescript",
      "Leaflet",
    ],
    url: "https://semarmrantasi.semarangkota.go.id/",
  },
  {
    title: "BigStyle",
    description:
      "Introducing BigStyle, a cutting-edge React UI library crafted to elevate your web development experience.",
    details:
      "Introducing BigStyle, a cutting-edge React UI library crafted to elevate your web development experience. Built with React, CSS, and Storybook, BigStyle offers a rich collection of reusable and customizable components designed to streamline your workflow and enhance the visual appeal of your projects. <br/><br/>Each component in BigStyle is meticulously styled with CSS, ensuring a consistent and polished look across your applications. With Storybook integration, you can easily explore, test, and document components in an interactive and isolated environment, making BigStyle an invaluable tool for developers seeking efficiency and excellence in UI design.<br/><br/>Experience the power of seamless UI development with BigStyle, your go-to library for modern, responsive, and beautiful web interfaces.",
    frameworks: ["React"],
    libraries: ["CSS", "Storybook"],
    repository: "",
    url: "https://bigstyle.bigbox.co.id",
  },
  {
    title: "BigSocial",
    description:
      "Discover BigSocial, a powerful social media monitoring platform built with Next.js. It delivers real-time insights and analytics with fast performance and an intuitive interface, helping you stay ahead of trends and make informed decisions.",
    details:
      "Introducing BigSocial, your ultimate solution for real-time social media monitoring and analysis, powered by Next.js. BigSocial offers a comprehensive platform to track, analyze, and engage with the latest social media trends and conversations. With Next.js at its core, the platform delivers seamless server-side rendering (SSR), ensuring lightning-fast performance and an optimized user experience. Dive deep into social media metrics with BigSocial's intuitive dashboard, which provides actionable insights into audience sentiments, trending topics, and engagement patterns. Whether you’re managing a brand, monitoring competitors, or simply staying ahead of industry trends, BigSocial equips you with the tools needed to make informed, data-driven decisions. Experience the future of social media monitoring with BigSocial",
    frameworks: ["NextJS", "React"],
    libraries: ["CSS", "Storybook"],
    repository: "",
    url: "https://bigsocial.bigbox.co.id",
  },
  {
    title: "BigBox Innovation Center",
    description:
      "Welcome to the Innovation Center BigBox, your gateway to exploring the full capabilities and use cases of BigBox products. ",
    details:
      "Welcome to the Innovation Center BigBox, your comprehensive gateway to exploring the full spectrum of BigBox products' capabilities and use cases. At the Innovation Center, we showcase the innovative solutions and cutting-edge technologies that BigBox brings to the table, highlighting their ability to address a wide array of industry challenges.<br /><br />Our platform is designed to provide you with in-depth insights into the features and functionalities of BigBox products. Through detailed product showcases, you can explore how our solutions are engineered to meet the demands of modern businesses. We emphasize real-world applications and success stories, demonstrating how BigBox products have been effectively implemented across various sectors to drive innovation and achieve impactful results.<br /><br />Dive into our extensive collection of resources, including case studies, white papers, and interactive demos, to see firsthand how BigBox is transforming industries. Whether you are looking to enhance operational efficiency, improve customer experiences, or leverage data for strategic decision-making, the Innovation Center BigBox offers the information and inspiration you need.<br /><br />Join us in discovering the future of technology and innovation with BigBox, where every product is designed to push the boundaries of what's possible and deliver solutions that make a difference. Explore the Innovation Center BigBox today and see how we are shaping the future, one innovative solution at a time.",
    frameworks: ["NextJS", "React"],
    libraries: ["AnimeJS", "Axios", "Material-UI", "SASS", "SocketIO"],
    repository: "",
    url: "https://ic.bigbox.co.id",
  },
  {
    title: "Portal Satu Data Papua Barat",
    description:
      "Welcome to Satu Data Indonesia, the official data portal for Pemkot Papua Barat.",
    details:
      "Welcome to Satu Data Indonesia, the official data portal for Pemkot Papua Barat. This comprehensive platform is designed to centralize and streamline access to vital data resources, empowering local governments, researchers, and the public with the information they need to drive informed decision-making and foster transparency.<br/><br/>Satu Data Indonesia offers an extensive collection of datasets, encompassing areas such as economic development, environmental management, public health, and education. Our user-friendly interface and robust search capabilities ensure that users can easily discover and access the data they require. Furthermore, the platform supports advanced data visualization and analysis tools, enabling users to transform raw data into actionable insights.<br/><br/By centralizing data resources, Satu Data Indonesia enhances collaboration and innovation within the community, helping to address local challenges and improve public services. Explore our platform today and see how open data can drive progress and development in [specific government entity]. Join us in harnessing the power of data for a better, more transparent future.",
    frameworks: ["Flask"],
    libraries: ["Jinja", "Tailwind"],
    repository: "",
    url: "https://sidassken.bigbox.co.id",
  },
  {
    title: "Portal Satu Data Halmahera Tengah",
    description:
      "Welcome to Satu Data Indonesia, the official data portal for Pemkot Halmahera Tengah.",
    details:
      "Welcome to Satu Data Indonesia, the official data portal for Pemkot Halmahera Tengah. This comprehensive platform is designed to centralize and streamline access to vital data resources, empowering local governments, researchers, and the public with the information they need to drive informed decision-making and foster transparency.<br/><br/>Satu Data Indonesia offers an extensive collection of datasets, encompassing areas such as economic development, environmental management, public health, and education. Our user-friendly interface and robust search capabilities ensure that users can easily discover and access the data they require. Furthermore, the platform supports advanced data visualization and analysis tools, enabling users to transform raw data into actionable insights.<br/><br/By centralizing data resources, Satu Data Indonesia enhances collaboration and innovation within the community, helping to address local challenges and improve public services. Explore our platform today and see how open data can drive progress and development in [specific government entity]. Join us in harnessing the power of data for a better, more transparent future.",
    frameworks: ["Flask"],
    libraries: ["Jinja", "Tailwind"],
    repository: "",
    url: "https://halteng.bigbox.co.id",
  },
  {
    title: "Portal Satu Data Palu",
    description:
      "Welcome to Satu Data Indonesia, the official data portal for Pemkot Palu.",
    details:
      "Welcome to Satu Data Indonesia, the official data portal for Pemkot Palu. This comprehensive platform is designed to centralize and streamline access to vital data resources, empowering local governments, researchers, and the public with the information they need to drive informed decision-making and foster transparency.<br/><br/>Satu Data Indonesia offers an extensive collection of datasets, encompassing areas such as economic development, environmental management, public health, and education. Our user-friendly interface and robust search capabilities ensure that users can easily discover and access the data they require. Furthermore, the platform supports advanced data visualization and analysis tools, enabling users to transform raw data into actionable insights.<br/><br/By centralizing data resources, Satu Data Indonesia enhances collaboration and innovation within the community, helping to address local challenges and improve public services. Explore our platform today and see how open data can drive progress and development in [specific government entity]. Join us in harnessing the power of data for a better, more transparent future.",
    frameworks: ["Flask"],
    libraries: ["Jinja", "Tailwind"],
    repository: "",
    url: "https://kotapalu.bigbox.co.id",
  },
  {
    title: "GO - Elevate My Golang Skills with Gin",
    description:
      "I am embarking on an exciting journey to enhance my Golang skills by mastering the Gin framework.",
    details:
      "I am embarking on an enriching journey to enhance my Golang expertise by mastering the Gin framework. Known for its speed and efficiency, Gin is a robust tool for creating high-performance web applications and microservices. This project is crafted to deepen my understanding and proficiency in web development with Gin, providing a comprehensive learning experience that covers everything from foundational concepts to advanced techniques.<br/><br/><h3 className='text-2xl font-bold'>Why Focus on Gin?</h3> Gin is celebrated in the tech community for its lightweight architecture and exceptional performance. By dedicating myself to mastering Gin, I am positioning myself to excel in building scalable, efficient, and robust web applications. This framework is a key asset in my professional toolkit, ensuring that I stay ahead in a competitive industry.",
    frameworks: ["GO"],
    libraries: ["Gin", "Bootstrap"],
    repository: "https://github.com/SeanardK/GO-Learn_GIN",
  },
  {
    title: "GO - Enhance My Golang Skills with Mux",
    description:
      "I am diving into a focused project to enhance my Golang expertise by mastering the Mux router, a key tool for building efficient and scalable web applications",
    details:
      "<h2 className='text-xl font-bold'>Overview</h2> I am diving into a focused project to enhance my Golang expertise by mastering the Mux router, a key tool for building efficient and scalable web applications. Mux, known for its flexibility and powerful routing capabilities, is an essential component in developing high-performance web services with Go. This project is tailored to deepen my understanding of Mux and elevate my skills in Golang through hands-on experience and practical application. <br/> <br/> <h2 className='text-xl font-bold'> Why Focus on Mux?</h2>Mux is renowned for its ability to handle complex routing scenarios with ease, making it a valuable tool for creating robust web applications. By dedicating myself to learning Mux, I aim to build a solid foundation in web development with Go, leveraging its advanced routing features to create dynamic and scalable applications.",
    frameworks: ["GO"],
    libraries: ["MUX", "GORM", "MySQL"],
    repository: "https://github.com/SeanardK/GO-Learn_REST",
  },
  {
    title: "GYMShark",
    description:
      "GYMShark is a modern marketplace for gym equipment and apparel, built using CodeIgniter 4 and Tailwind CSS.",
    details:
      "GYMShark is a cutting-edge marketplace tailored specifically for gym enthusiasts, fitness professionals, and anyone passionate about maintaining an active lifestyle. This platform offers a comprehensive range of gym equipment and apparel, designed to cater to diverse fitness needs.<br/><br/>Developed using the powerful CodeIgniter 4 framework, GYMShark ensures a robust and efficient backend capable of handling complex e-commerce transactions with ease. The use of Tailwind CSS enhances the user experience by providing a sleek, modern, and fully responsive design that adapts seamlessly to any device, from desktop computers to mobile phones. The marketplace features a user-friendly interface that facilitates effortless navigation, allowing customers to explore a wide array of products, read detailed descriptions, and view high-resolution images.<br/><br/>The streamlined checkout process, supported by secure payment options, ensures a smooth shopping experience. Additionally, GYMShark’s intuitive design not only makes shopping enjoyable but also ensures that users can easily find and purchase the equipment and apparel they need. The platform’s backend, powered by CodeIgniter 4, provides a comprehensive admin dashboard for efficient product and order management, making it a reliable and scalable solution for the growing fitness market.",
    frameworks: ["Code Igniter"],
    libraries: ["Tailwind"],
    repository: "https://github.com/SeanardK/GO-Learn_REST",
  },
  {
    title: "RUNO Blog - A Dynamic Blogging Platform",
    description:
      "Welcome to RUNO Blog, a modern and sophisticated blogging platform designed to deliver an exceptional reading and writing experience. This application leverages the combined power of Flask, Solr, and Tailwind CSS to offer a feature-rich and highly interactive environment for both bloggers and readers.",
    details:
      "Welcome to RUNO Blog, a modern and sophisticated blogging platform designed to deliver an exceptional reading and writing experience. This application leverages the combined power of Flask, Solr, and Tailwind CSS to offer a feature-rich and highly interactive environment for both bloggers and readers.<br/><br/>At the heart of RUNO Blog is Flask, a flexible and lightweight Python web framework that ensures a robust backend capable of handling everything from user authentication to content management. Flask’s simplicity and scalability allow for a seamless and efficient operation, making it the ideal choice for managing diverse blog functionalities.<br/><br/>The search functionality in RUNO Blog is powered by Solr, an advanced open-source search platform renowned for its speed and accuracy. Solr's powerful indexing capabilities enable users to swiftly find relevant articles, topics, or tags, ensuring a smooth and intuitive search experience.<br/><br/>For a visually appealing and responsive design, RUNO Blog utilizes Tailwind CSS. This utility-first framework enables a modern and customizable interface that adapts flawlessly to any device, from desktops to mobile phones. Tailwind CSS ensures that the blog is not only aesthetically pleasing but also highly functional and user-friendly.<br/<br/Combining these technologies, RUNO Blog provides a comprehensive and engaging platform where users can easily browse, search, and interact with a wealth of content. Whether you are a content creator looking to share your insights or a reader seeking engaging articles, RUNO Blog delivers a top-notch experience through its powerful backend, efficient search capabilities, and elegant design.",
    frameworks: ["Flask"],
    libraries: ["Tailwind", "Solr"],
    repository: "https://github.com/SeanardK/learn-flask",
  },
  {
    title: "Printindo - A Modern Company Profile with Laravel and Inertia",
    description:
      "Printindo is a cutting-edge company profile platform designed to showcase the dynamic capabilities and offerings of a modern printing company. Utilizing the powerful Laravel framework in conjunction with Inertia.js, this project delivers a seamless and interactive user experience while ensuring robust backend performance.",
    details:
      "Printindo is built with Laravel, a leading PHP framework known for its elegant syntax and comprehensive feature set. Laravel handles all backend functionalities, including routing, data management, and authentication, providing a solid and scalable foundation for the application. To create a rich, interactive frontend experience, Inertia.js is employed, allowing for the development of single-page applications (SPAs) with a modern, reactive interface.<br /><br/>Printindo leverages the strengths of Laravel and Inertia.js to deliver a high-performance company profile platform that is both aesthetically pleasing and functionally robust. By combining Laravel’s backend prowess with Inertia.js’s modern frontend capabilities, the project creates a cohesive and engaging user experience. This project not only showcases Printindo’s capabilities effectively but also demonstrates a sophisticated approach to web development, making it a valuable asset for the company’s online presence.",
    frameworks: ["Laravel", "VUE"],
    libraries: ["VUE", "Inertia"],
    repository: "https://github.com/SeanardK/printindo",
  },
  {
    title: "Panda Coffee - Your Ultimate Coffee Experience",
    description:
      "Panda Coffee is a beautifully crafted website designed to bring the essence of your favorite coffee shop right to your screen.",
    details:
      "Panda Coffee is a beautifully crafted website designed to bring the essence of your favorite coffee shop right to your screen. With a modern, engaging design and user-friendly features, Panda Coffee offers a comprehensive digital experience that showcases the unique offerings and inviting atmosphere of the coffee shop.<br/></br/>Panda Coffee combines elegance and functionality to deliver an exceptional online presence. The website features a sleek, responsive design that adapts seamlessly to any device, from desktops to mobile phones. It highlights the shop’s diverse menu, cozy ambiance, and special promotions, creating an engaging platform for coffee lovers.<br/></br/>The Panda Coffee website serves as a digital gateway to the coffee shop’s unique experience, blending visual appeal with functional features to enhance customer engagement. By providing a comprehensive view of the menu, streamlining the ordering process, and showcasing the shop’s ambiance, the website strengthens Panda Coffee’s online presence and fosters a deeper connection with patrons. Whether you’re a coffee aficionado or a casual visitor, Panda Coffee’s website offers an enjoyable and convenient way to explore, order, and interact with your favorite coffee shop.",
    frameworks: ["NextJS", "React"],
    libraries: ["Bootstrap", "Redux"],
    repository: "https://github.com/justrinoo/pandaCoffee-frontend",
    url: "https://panda-coffee.vercel.app/",
  },
  {
    title: "BE for Panda Coffee - Your Ultimate Coffee Experience",
    description:
      "Panda Coffee is a beautifully crafted website designed to bring the essence of your favorite coffee shop right to your screen.",
    details:
      "The backend of Panda Coffee is engineered to provide a robust, efficient, and scalable foundation for managing the coffee shop’s online operations. Utilizing MySQL, Express, and Redis, this backend architecture ensures seamless functionality, performance, and reliability.<br/></br/>Project Overview<br/></br/>Panda Coffee’s backend is built using Express, a powerful and flexible Node.js framework known for its simplicity and performance. Express handles the server-side logic, routing, and API endpoints, facilitating smooth interactions between the frontend and the database. The integration of MySQL and Redis enhances data management and caching, respectively, to deliver a high-quality user experience.<br/></br/>Key Features<br/></br/>MySQL Database: MySQL serves as the relational database management system for storing and managing all critical data, including menu items, customer orders, reviews, and loyalty program details. Its robust querying capabilities ensure efficient data retrieval and integrity, supporting the dynamic needs of the Panda Coffee website.<br/>Express Framework: Express provides a streamlined and scalable backend solution, handling HTTP requests, routing, and middleware functionalities. It enables the creation of RESTful APIs that facilitate smooth communication between the frontend interface and backend services, ensuring a seamless user experience.</br/>Redis Caching: Redis is used for caching frequently accessed data, such as popular menu items and promotional information. By storing this data in-memory, Redis significantly reduces response times and server load, enhancing overall performance and ensuring that users receive quick and responsive interactions.</br/>Session Management: Redis also manages user sessions and authentication tokens, providing a secure and efficient way to handle user logins and session states. This ensures that user interactions, such as online ordering and loyalty rewards, are handled seamlessly and securely.</br/>Data Synchronization: The backend efficiently synchronizes data between MySQL and Redis, ensuring that cached information is consistently updated with the latest changes from the database. This synchronization supports accurate and real-time updates across the website.</br/>Scalable Architecture: The combination of Express, MySQL, and Redis provides a scalable and maintainable backend architecture that can handle growing traffic and expanding features. This setup ensures that Panda Coffee’s website remains responsive and reliable as the user base and data volume increase.</br/></br/>Why This Backend Matters</br/></br/>The backend architecture of Panda Coffee is designed to deliver a high-performance and reliable digital experience. By leveraging MySQL, Express, and Redis, the backend ensures efficient data management, rapid response times, and scalable performance. This robust foundation supports the website’s interactive features, such as online ordering and real-time updates, creating a seamless and engaging experience for users.",
    frameworks: ["ExpressJS"],
    libraries: ["MySQL", "Redis"],
    repository: "https://github.com/justrinoo/pandaCoffee-frontend",
    url: "https://panda-coffee.vercel.app/",
  },
];

const frameworkList = () => {
  const flattenData = _.flatten(projects.map((v) => v.frameworks));

  return _.sortBy(
    _.uniq(flattenData).map((v) => ({ label: v, value: v })),
    ["label"]
  );
};

const data = {
  projects,
  frameworkList,
};

export default data;
