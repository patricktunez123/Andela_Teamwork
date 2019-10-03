const mockData = {
  userPayload: {
    id: 2,
    first_name: 'Patrick',
    last_name: 'Tunezerwane',
    email: 'tp3@gmail.com',
    password: '$2b$10$Atnw/KEDHvmcSdNTRWfMfOZIOOQFOIynwjiYqGGZx3xtemaF6NGe6',
    gender: 'Male',
    jobRole: 'Manager',
    department: 'ICT',
    address: 'Kigali',
    is_admin: false,
  },
  adminPayload: {
    id: 1,
    first_name: 'tunez',
    last_name: 'pat',
    email: 'tunez@gmail.com',
    address: 'Kigali',
    is_admin: true,
  },
  ableToLogin: {
    email: 'tp@gmail.com',
    password: 'kgl12345',
  },
  incEmail: {
    email: 'patrick@gmail.com',
    password: 'kgl12345',
  },
  incPassword: {
    email: 'tp@gmail.com',
    password: 'kgl',
  },
  incEmailAndPwd: {
    email: 'patrick10@gmail.com',
    password: 'kgl',
  },
  ableToSignUp: {
    first_name: 'Patrick',
    last_name: 'Tunezerwane',
    email: 'tp1@gmail.com',
    password: 'kgl12345',
    gender: 'Male',
    jobRole: 'Manager',
    department: 'ICT',
    address: 'Kigali',
    is_admin: false,
  },
  missingField: {
    first_name: '',
    last_name: 'Tunezerwane',
    email: 'tp1@gmail.com',
    password: 'kgl12345',
    gender: 'Male',
    jobRole: 'Manager',
    department: 'ICT',
    address: 'Kigali',
    is_admin: false,
  },
  usedEmail: {
    first_name: 'Patrick',
    last_name: 'Tunezerwane',
    email: 'tp@gmail.com',
    password: 'kgl12345',
    gender: 'Male',
    jobRole: 'Manager',
    department: 'ICT',
    address: 'Kigali',
    is_admin: false,
  },
  noTokenForCmt: {
    comment: 'This is my comment on this post1',
  },
  errorInInputsCmt: {
    comment: ' ',
  },
  notFoundCmt: {
    comment: 'This is my comment on this post2',
  },
  shouldHvIdCmt: {
    commentId: 1,
    comment: 'This is my comment on this post3',
  },
  flaggedId: {
    flagId: 1,
  },
};

export default mockData;
