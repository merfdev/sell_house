import { compare, hash } from "bcryptjs";

async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}
async function verifyPassword(password, hashedPassword) {
  const isMatch = await compare(password, hashedPassword);
  return isMatch;
}

export { hashPassword, verifyPassword };
