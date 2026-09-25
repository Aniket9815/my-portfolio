"use server";

import { cookies } from "next/headers";
import { sanityFetch } from "@/sanity/lib/client";
import { PROJECT_PASSWORD_QUERY } from "@/sanity/lib/queries";

export async function verifyProjectPassword(slug: string, enteredPassword: string) {
  try {
    const projectAuth = (await sanityFetch({
      query: PROJECT_PASSWORD_QUERY,
      params: { slug },
      tags: [`project-${slug}`],
      revalidate: 0,
    })) as {
      is_protected: boolean;
      password?: string;
    } | null;

    if (!projectAuth) {
      return { success: false, error: "Project not found." };
    }

    if (!projectAuth.is_protected) {
      return { success: true };
    }

    if (!projectAuth.password || projectAuth.password === enteredPassword.trim()) {
      const cookieStore = await cookies();
      cookieStore.set(`unlocked_project_${slug}`, "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });

      return { success: true };
    }

    return { success: false, error: "Incorrect password. Please try again." };
  } catch (error) {
    console.error("Error verifying project password:", error);
    return { success: false, error: "An error occurred while verifying password." };
  }
}

export async function isProjectUnlocked(slug: string): Promise<boolean> {
  const cookieStore = await cookies();
  const unlocked = cookieStore.get(`unlocked_project_${slug}`);
  return unlocked?.value === "true";
}
