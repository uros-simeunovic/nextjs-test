import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/finance"]);

export default clerkMiddleware(
  (auth, req) => {
    if (isProtectedRoute(req)) {
      auth().protect();
    }
  },
  { signInUrl: "/sign-in", signUpUrl: "/sign-up" }
);

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
