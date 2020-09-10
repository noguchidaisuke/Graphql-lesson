let users = [{
    id: "1",
    name: "Jamie",
    age: 12,
    posts: ['1', '2'],
    comments: ['102', '103', '104']
  },
  {
    id: "2",
    name: "Andrew",
    age: 27,
    posts: ['3'],
    comments: ['103']
  },
  {
    id: "3",
    name: "Katie",
    age: 1,
    posts: [],
    comments: ['104']
}]

let posts = [{
  id: '1',
  title: 'One',
  body: 'this is book',
  published: true,
  author: '1',
  comments: ['102', '103']
},{
  id: '2',
  title: 'Two',
  body: 'this is two or one',
  published: true,
  author: '1',
  comments: ['104']
},{
  id: '3',
  title: 'Three',
  body: 'this is third',
  published: false,
  author: '2',
  comments: ['105']
}]

let comments = [{
  id: '102',
  text: 'this worked well',
  author: '1',
  post: '1'
},{
  id: '103',
  text: 'yes',
  author: '1',
  post: '1'
},{
  id: '104',
  text: 'soso',
  author: '1',
  post: '2'
},{
  id: '105',
  text: 'No!',
  author: '3',
  post: '3'
},]

const db = {
  users,
  posts,
  comments
}

export { db as default }