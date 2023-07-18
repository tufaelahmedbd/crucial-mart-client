import Link from "next/link";

const Navbar = () => {
  return (
    <header className="h-20 fixed top-0 left-0 right-0 border-b border-dark-10 bg-light/90 backdrop:blur-lg z-[100]">
      <div className=" wrapper w-full h-full flex justify-between items-center">
        {/* nav left */}
        <nav>
          <Link href="/" className=" text-xl font-semibold link-item">
            Crucial Mart
          </Link>
        </nav>
        {/* nav mid */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/" className="link-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="link-item">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-item">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-item">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* nav right */}
        <nav>
          <Link
            href="/login"
            className=" bg-accent1 text-light px-6 py-3 rounded-xl hover:bg-accent1/90 duration-300"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
