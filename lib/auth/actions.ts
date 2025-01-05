import { signIn, signOut } from "@/auth";
export const handleLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
  // await signOut({redirectTo:"url"})
  //Default Behavior: The user is redirected to the current page after signing out if no options are provided.
};
