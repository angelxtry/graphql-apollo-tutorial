import querySchema from './modules/querySchema';
import mutationSchema from './modules/mutationSchema';
import { userSchema } from './modules/user';
import { postSchema } from './modules/post';
import { commentSchema } from './modules/comment';

const schemas = [
  querySchema,
  mutationSchema,
  userSchema,
  postSchema,
  commentSchema,
];

export default schemas;
