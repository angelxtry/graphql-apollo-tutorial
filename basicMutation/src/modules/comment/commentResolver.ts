import uuidv4 from 'uuid/v4';
import { ApolloError } from 'apollo-server';
import { comments, users, posts } from '../../fakeData';

const commentResolvers = {
  Query: {
    comment: (_: any, args: any) =>
      comments.find((comment) => comment.id === args.id),
    comments: () => comments,
  },
  Comment: {
    author: (comment: any) => users.find((user) => user.id === comment.author),
    post: (comment: any) => posts.find((post) => post.id === comment.post),
  },
  Mutation: {
    createComment: (_: any, args: any) => {
      const isExistUser = users.some((user) => user.id === args.data.author);
      if (!isExistUser) {
        throw new ApolloError('User not exist', 'USER_NOT_EXIST');
      }
      // const comment = {
      //   id: uuidv4(),
      //   text: args.text,
      //   author: args.author,
      //   post: args.post,
      // };
      const comment = {
        id: uuidv4(),
        ...args.data,
      };
      comments.push(comment);
      return comment;
    },
  },
};

export { commentResolvers };
