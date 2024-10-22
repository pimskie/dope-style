import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((item) => item !== "");

  const items = segments.map((item, index) => {
    const href = `${segments.slice(0, index + 1).join("/")}`;
    const label = item || "Home";

    return {
      href,
      label,
    };
  });

  return (
    <div>
      {items.map((item) => {
        return (
          <div className="item" key={item.label}>
            <Link
              className={`block px-2 py-3 ${
                pathname === item.href ? "active" : ""
              }`}
              href={item.href}
            >
              {item.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
