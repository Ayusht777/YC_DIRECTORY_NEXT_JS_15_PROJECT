import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import { handleLogout, handleLogin } from "@/lib/auth/actions";

const Navbar = async () => {
  const userSession = await auth();

  return (
    <header className="px-5 py-3 shadow-sm font-work-sans bg-white">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src={"/logo.png"} alt="Site Logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {userSession?.user ? (
            <>
              <Link href="/startup/create" className="">
                Create
              </Link>
              <button onClick={handleLogout} type="submit" className="">
                Logout
              </button>
              <Link href={`/user/${userSession.user.id}`} className="">
                {userSession?.user?.name}
              </Link>
            </>
          ) : (
            <form action={handleLogin}>
              <button type="submit" className="">
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
