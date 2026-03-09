import { redirect } from "next/navigation";

// Root redirects into the (app) route group shell.
export default function RootPage() {
  redirect("/home");
}
