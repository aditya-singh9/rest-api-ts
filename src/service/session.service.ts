import SessionModel from "../models/session.model";

//SERVICE TO CREATE A SESSION
export async function createSession(userId: String, userAgent: String) {
  const session = await SessionModel.create({ user: userId, userAgent });

  return session.toJSON();
}
