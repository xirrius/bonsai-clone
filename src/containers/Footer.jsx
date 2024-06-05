import { FooterLinks } from "../constants";

const Footer = () => {
  return (
    <div className="flex ss:justify-center mx-12 sm:mx-16 lg:mx-40 flex-wrap gap-6 sm:gap-16 md:gap-24 ss:flex-row flex-col mb-16 border-t-2 pt-5">
      {FooterLinks.map((item) => (
        <div key={item.id} className="">
          <h1 className=" font-semibold pb-2">{item.name}</h1>
          <ul>
            {item.links.map((link) => (
              <p
                key={link.id}
                className="font-light cursor-pointer text-sm py-1"
              >
                {link}
              </p>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Footer;
