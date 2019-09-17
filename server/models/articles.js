/* eslint-disable linebreak-style */
const articles = [
  {
    id: 1,
    created_on: '10/09/2019',
    title: 'Today',
    article: 'Hello My Best Friends ! Today I Just Want Share With You This Nice Quote!:Self-Belief And Hard Work Will Always Earn You Success.',
    authorId: 1,
    comments: [
      {
        commentId: 1,
        authorId: 1,
        comment: 'This is my comment on this post',
      },
      {
        commentId: 2,
        authorId: 1,
        comment: 'This is my second comment on this post',
      },
    ],
  },
  {
    id: 2,
    created_on: '15/09/2019',
    title: 'Love this day',
    article: 'Hello My Best Friends ! Today I Just Want Share With You This Nice Quote!:Self-Belief And Hard Work Will Always Earn You Success.',
    authorId: 2,
    comments: [
      {
        commentId: 1,
        authorId: 2,
        comment: 'I really love this post',
      },
      {
        commentId: 2,
        authorId: 1,
        comment: 'My name is patrick and this is my comment on this post',
      },
    ],
  },
  {
    id: 3,
    created_on: '08/09/2019',
    title: 'Hey Guys!',
    article: 'Hello My Best Friends ! Today I Just Want Share With You This Nice Quote!:Self-Belief And Hard Work Will Always Earn You Success.',
    authorId: 3,
    comments: [
      {
        commentId: 1,
        authorId: 3,
        comment: 'wow! this is a great post ever',
      },
      {
        commentId: 2,
        authorId: 1,
        comment: 'My name is patrick, i like this post',
      },
    ],
  },
];

module.exports = articles;
