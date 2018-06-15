import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { APP_SECRET } from '../../config';

async function signup(_, { input }, ctx, info) {
  const password = await bcrypt.hash(input.password, 10);
  const user = await ctx.models.user.create({
    email: input.email,
    password
  });
  const token = jwt.sign({ userId: user._id }, APP_SECRET);
  return {
    token,
    user: {
      _id: user._id,
      email: user.email
    }
  };
}
export default {
  Mutation: {
    signup
  }
};
