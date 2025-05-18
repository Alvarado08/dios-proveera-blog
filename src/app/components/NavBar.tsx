import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center max-w-4xl mx-auto p-4">
      <Link href="/">
        <Image
          src={logo}
          width={60}
          height={60}
          alt="Iglesia Dios Proveera Logo"
          priority
          style={{ width: "auto", height: "auto" }}
        />
      </Link>
      <ModeToggle />
    </nav>
  );
}
