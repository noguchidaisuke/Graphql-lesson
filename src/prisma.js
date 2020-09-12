import { Prisma } from 'prisma-binding'
import { fragmentReplacements } from './resolvers/index'

const prisma = new Prisma({
  typeDefs:  'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
  secret: 'secrettext',
  fragmentReplacements
})

export { prisma as default }

// const UID = "ckep61gqm00t00833vnii885u"
// const PID = "ckep9b921019f0833866d43ny"

// const dummyPostData = {
//   title: "dummy data",
//   body: "from Create Post For User",
//   published: true
// }

// prisma.exists.User({
//   id: "ckep4r5hk00it0833wn99fm1m",
// }).then(exists => console.log(exists))

// const createPostForUser = async (authorId, data)  => {
//   const userExists = await prisma.exists.User({
//     id: authorId
//   })

//   if (!userExists) throw new Error('User not found')

//   const post = await prisma.mutation.createPost({
//     data: {
//       ...data,
//       author: {
//         connect: {
//           id: authorId
//         }
//       }
//     }
//   }, '{ author { id name email posts { id title published } } }')

//   return post.author
// }

// const updatePostForUser = async (postId, data) => {
//   const postExists = await prisma.exists.Post({
//     id: postId
//   })

//   if (!postExists) throw new Error('Post not found')

//   const post = await prisma.mutation.updatePost({
//     where: {
//       id: postId
//     },
//     data
//   }, '{ author { id name email posts { id title published } } }')

//   return post.author
// }

// updatePostForUser(PID, { published: false })
//   .then(user => console.log(JSON.stringify(user, null, 2)))
//   .catch(err => console.log(err))

// prisma.query.users(null, '{ id name posts { id title }}').then(data => {
//   console.log(JSON.stringify(data, undefined, 2));
// })

// prisma.query.posts(null, '{ id title }').then(data => {
//   console.log(data);
// })

// prisma.mutation.createPost({
//   data: {
//     title: "My new post",
//     body: "from vscode",
//     published: true,
//     author: {
//       connect: {
//         id: "ckep4r5hk00it0833wn99fm1m"
//       }
//     }
//   }
// }, '{ id title body published }').then(data => {
//   console.log(JSON.stringify(data, undefined, 2));
//   return prisma.query.users(null, '{ id name posts { id title } }')
// }).then(data => {
//   console.log(JSON.stringify(data, undefined, 2));
// })

// prisma.mutation.updatePost({
//   where: {
//     id: "ckep770qh00vp0833pq9xxrw6"
//   },
//   data: {
//     body: "this is changed",
//     published: true
//   }
// }, '{ id title body published }').then(data => {
//   console.log(JSON.stringify(data, null, 2));
// })
