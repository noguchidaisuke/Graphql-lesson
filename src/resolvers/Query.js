import getUserId from '../utils/getUserId'

const Query = {
  users(parent, args, { db, prisma }, info) {
    const opArgs = {}

    if (args.query) {
      opArgs.where = {
        OR: [{
          name_contains: args.query
        }, {
          email_contains: args.query
        }]
      }
    }

    return prisma.query.users(opArgs, info)
    // if (!args.query) {
    //   return db.users
    // }

    // return db.users.filter((user) => {
    //   return user.name.toLowerCase().includes(args.query.toLowerCase())
    // })
  },
  myPosts(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)
    const opArgs = {
      where: {
        author: {
          id: userId
        }
      }
    }

    if (args.query) {
      opArgs.where.OR = [{
        title_contains: args.query
      }, {
        body_contains: args.query
      }]
    }

    return prisma.query.posts(opArgs, info)

  },
  posts(parent, args, { db, prisma }, info) {
    const opArgs = {
      where: {
        published: true
      }
    }

    if (args.query) {
      opArgs.where.OR= [{
          title_contains: args.query
        },{
          body_contains: args.query
        }]
    }

    return prisma.query.posts(opArgs, info)

    // if (!args.query) {
    //   return db.posts
    // }
    // return db.posts.filter((post) => {
    //   const titleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
    //   const bodyMatch  = post.body.toLowerCase().includes(args.query.toLowerCase())

    //   return titleMatch || bodyMatch
    // })
  },
  comments(parent, args, { db, prisma }, info) {
    return prisma.query.comments(null, info)
  },
  async post(parent, args, { prisma, request }, info) {
    const userId = getUserId(request, false)

    const posts = await prisma.query.posts({
      where: {
        id: args.id,
        OR: [{
          published: true
        }, {
          author: {
            id: userId
          }
        }]
      }
    }, info)
    if (posts.length === 0) throw new Error('post is not found')

    return posts[0]
  },
}

export { Query as default }