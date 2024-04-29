import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75">
        <Image src="/logo.png" width={40} height={40} alt="Logo" />
      </div>
    </Link>
  );
};

export default Logo;
