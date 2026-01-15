"use server";

import bcrypt from "bcryptjs";
import { FormState, SignupFormSchema } from "../lib/definitions";
import { db } from "../lib/db";
import { users } from "../lib/schema";
import { eq } from "drizzle-orm";
// import { eq } from "drizzle-orm";

export async function signup(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  // ✅ Check if email already exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email));

  if (existingUser.length > 0) {
    return {
      message: "Email already exists",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const data = await db
    .insert(users)
    .values({
      name,
      email,
      password: hashedPassword,
    })
    .returning({ id: users.id });

  if (!data[0]) {
    return {
      message: "Failed to create account",
    };
  }

  return { success: true };
}
