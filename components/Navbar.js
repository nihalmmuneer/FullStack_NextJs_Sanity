// components/Navbar.js

import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth"; // Import from auth.js

const Navbar = async () => {
  // Fetch the session data using getSession
  const session = await auth();

  return (
    <header className="bg-black/80 px-5 py-3 shadow-sm font-work-sans">
      <nav className="flex items-center justify-between">
        <Link href={"/"} className="object-fit w-20 h-20 flex rounded-full">
          <Image
            src="/logo.png"
            alt="my-logo"
            width={250}
            height={250}
            className="rounded-full"
          />
        </Link>
        <div className="flex items-center gap-5 text-white">
          {session && session.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" }); // Sign out the user
                }}
              >
                <button type="submit">
                  <span>Logout</span>
                </button>
              </form>
              <Link href={`/user/${session.id}`}>{session.user.name}</Link>
            </>
          ) : (
            <>
              <form
                action={async () => {
                  "use server";
                  await signIn("github"); // Sign in with GitHub
                }}
              >
                <button type="submit">Login</button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
