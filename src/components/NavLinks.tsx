export default function NavLinks() {
    const navLinks = [
      { name: "الرئيسية", link: "#" },
      { name: "حول", link: "#" },
      { name: "خدماتنا", link: "#" },
      { name: "تواصل معنا", link: "#" },
    ];
  
    return (
      <ul className="text-title flex flex-col md:flex-row-reverse gap-4 md:gap-8 text-right w-full items-center">
        {navLinks.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="text-title hover:text-blue1 hover:text-lg hover:shadow- duration-300 block py-2"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    );
  }
  