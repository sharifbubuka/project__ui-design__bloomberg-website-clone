import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

import { banner as bannerLinks } from "../../data/header.data";

type Props = {};

const Banner: FC<Props> = () => {
  const [bannerIsOpen, setBannerIsOpen] = useState(false);

  return (
    <section className="bg-black text-gray-200 lg:justify-center h-max hidden lg:flex">
      <div className="w-full max-w-6xl">
        <div className="flex items-center py-2">
          {bannerLinks.map((link) => (
            <span key={link.id} className={`divider-x text-xs font-semibold pr-2 group border-gray-200 cursor-pointer ${link.id > 1 && "pl-2"} ${link.id < bannerLinks.length ? "border-r" : "border-none"} ${link.iconSrc && "text-yellow-500"}`}>
              <Link href={link.path} passHref>
                <span className="flex items-center gap-1">
                {link.iconSrc && link.iconAltText && (
                    <span className="bg-green-200 flex justify-start items-center">
                        <Image src={link.iconSrc} alt={link.iconAltText} width={20} height={20}/>
                    </span>
                )}
                {link.label}
                {link.id === 1 && (
                    <span className="flex items-end h-full group-hover:stroke-white">
                        <Image src="/icons/caret-down.svg" alt="caret" width={10} height={10} />
                    </span>
                )}
                </span>
              </Link>
            </span>
          ))}
        </div>

        <div className={`${bannerIsOpen ? "h-max" : "h-0"}`}>
            weewew
        </div>
      </div>
    </section>
  );
};

export default Banner;
