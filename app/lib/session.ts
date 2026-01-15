import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

type SessionPayload = {
  userId: string;
  role?: "admin" | "teacher" | "student";
};

if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET is not set");
}

const encodedKey = new TextEncoder().encode(process.env.SESSION_SECRET);

/**
 * Create JWT
 */
export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

/**
 * Verify JWT
 */
export async function decrypt(token: string | undefined) {
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, encodedKey);
    return payload as SessionPayload;
  } catch {
    return null;
  }
}

/**
 * Create session cookie
 */
export async function createSession(
  userId: string,
  role?: "admin" | "teacher" | "student"
) {
  const token = await encrypt({ userId, role });

  const expiresAt = new Date(
    Date.now() + 7 * 24 * 60 * 60 * 1000
  );

  const cookieStore = await cookies();
  cookieStore.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
}

/**
 * Delete session
 */
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}



















































































































// import { cookies } from 'next/headers'
// import { db } from '@/app/lib/db'
// import { encrypt } from '@/app/lib/session'
 
// export async function createSession(id: number) {
//   const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
 
//   // 1. Create a session in the database
//   const data = await db
//     .insert(sessions)
//     .values({
//       userId: id,
//       expiresAt,
//     })
//     // Return the session ID
//     .returning({ id: sessions.id })
 
//   const sessionId = data[0].id
 
//   // 2. Encrypt the session ID
//   const session = await encrypt({ sessionId, expiresAt })
 
//   // 3. Store the session in cookies for optimistic auth checks
//   const cookieStore = await cookies()
//   cookieStore.set('session', session, {
//     httpOnly: true,
//     secure: true,
//     expires: expiresAt,
//     sameSite: 'lax',
//     path: '/',
//   })
// }






// /**
//  * Create session cookie
//  */
// // export async function createSession(
// //   userId: string,
// //   role?: "admin" | "teacher" | "student"
// // ) {
// //   const token = await encrypt({ userId, role });

// //   const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

// //    // 1. Create a session in the database
// //   const data = await db
// //     .insert(sessions)
// //     .values({
// //       userId: id,
// //       expiresAt,
// //     })
// //     // Return the session ID
// //     .returning({ id: sessions.id })
 
// //   const sessionId = data[0].id

// //     // 2. Encrypt the session ID
// //   const session = await encrypt({ sessionId, expiresAt })


// //   const cookieStore = await cookies();
// //   cookieStore.set("session", token, {
// //     httpOnly: true,
// //     secure: process.env.NODE_ENV === "production",
// //     sameSite: "lax",
// //     path: "/",
// //     expires: expiresAt,
// //   });
// // }

// // /**
// //  * Delete session
// //  */
// // export async function deleteSession() {
// //   const cookieStore = await cookies();
// //   cookieStore.delete("session");
// // }





























