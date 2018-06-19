import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { APP_SECRET } from '../../config';
import { validateUser } from '../../utils/util';

async function signup(_, { input }, ctx, info) {
  //validate the user email and password
  const { value, error } = validateUser(input);
  if (error) {
    throw new Error(error.message);
  }
  const password = await bcrypt.hash(value.password, 10);
  const user = await ctx.models.user.create({
    email: value.email,
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
