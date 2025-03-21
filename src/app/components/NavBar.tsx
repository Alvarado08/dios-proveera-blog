import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import logo from "../../../public/logo.png";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center max-w-4xl mx-auto p-4">
      <a href="/">
        <Image
          src={logo}
          width={100}
          height={100}
          alt="Iglesia Dios Proveera Logo"
        />
      </a>
      <ModeToggle />
    </nav>
  );
}
