import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { copyright, footerSections } from "../../data/footer.data";

type Props = {};

const Footer: FC<Props> = () => {
  return (
    <footer className="flex flex-col md:flex-row md:justify-center py-5 border-t border-gray-500">
      <div className=" w-full  max-w-6xl flex flex-col gap-1 items-center md:flex-row md:justify-between md:items-start text-xs text-gray-500">
        <div className="flex flex-col md:flex-col gap-1">
          <ul className="flex gap-x-3 md:max-w-sm flex-wrap">
            {footerSections[0].map((link) => (
              <li key={link.id} className="hover:underline cursor-pointer">
                <Link href={String(link.path)} passHref>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-center md:text-left">{copyright}</p>
        </div>
        <ul className="flex gap-2 md:gap-4">
          {footerSections[1].map((link) => (
            <li key={link.id} className="hover:underline cursor-pointer">
              <Link href={String(link.path)} passHref>
                <span>
                  <span className={`${link.adIcon && "mr-1"}`}>{link.label}</span>
                  {link.adIcon && (
                    <Image
                      src="/images/utils/ad-choice.png"
                      alt="Advertiseent icon"
                      width={12}
                      height={12}
                    />
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
