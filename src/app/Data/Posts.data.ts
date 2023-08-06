import {Post} from "../main-page/components/posts/components/post/interfaces/post.interface";

export const PostsData: Post[] = [
  {
    postCategory: 'Angular',
    postTitle: 'Angular',
    postText: 'Angular is a development platform, built on TypeScript.<br><br> As a platform, Angular includes:' +
      '<br>- A component-based framework for building scalable web applications' +
      '<br>- A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more' +
      '<br>- A suite of developer tools to help you develop, build, test, and update your code' +
      '<br><br>With Angular, you\'re taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Angular is designed to make ' +
      'updating as straightforward as possible, so take advantage of the latest developments with minimal effort. Best of all, the Angular ecosystem consists of a diverse ' +
      'group of over 1.7 million developers, library authors, and content creators.',
    postImg: 'https://www.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png',
    postComments: [
      {
        commentText: 'Angular is cool!!!',
        commentId: 1,
      },
    ],
    postId: 2536,
  },
  {
    postCategory: 'React',
    postTitle: 'React',
    postText: 'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. ' +
      'It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.<br><br>' +
      'React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user ' +
      'interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.',
    postImg: 'https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg',
    postComments: [
      {
        commentText: 'React is cool!!!',
        commentId: 1,
      },
    ],
    postId: 2878,
  },
  {
    postCategory: 'Vue',
    postTitle: 'Vue',
    postText: 'Vue.js (commonly referred to as Vue) is an open-source model–view–viewmodel front end JavaScript library for building user interfaces and single-page ' +
      'applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.<br><br>' +
      'Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition. The core library is focused on the ' +
      'view layer only. Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained ' +
      'supporting libraries and packages.<br><br>' +
      'Vue.js allows for extending HTML with HTML attributes called directives. The directives offer functionality to HTML applications, and come as either built-in ' +
      'or user defined directives.',
    postImg: 'https://res.cloudinary.com/practicaldev/image/fetch/s--I4FWon9Y--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ll22z8mea106b4vjdjy7.jpeg',
    postComments: [
      {
        commentText: 'Vue is cool!!!',
        commentId: 1,
      },
    ],
    postId: 3233,
  },
];
