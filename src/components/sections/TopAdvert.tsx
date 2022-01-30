import { FC } from "react";
import Image from "next/image";

import { mainTopAds } from "../../data/ads.data";
import Link from "next/link";

type Props = {};

const TopAdvert: FC<Props> = () => {
  return (
    <section className="h-72 xl:h-80 2xl:h-96 bg-gray-200 flex justify-center items-center">
      <Link href={mainTopAds[0].path} passHref>
        <div className="h-3/5 w-3/5 relative cursor-pointer">
          <Image
            src={mainTopAds[0].src}
            alt={mainTopAds[0].alt}
            layout="fill"
            priority
          />
        </div>
      </Link>
    </section>
  );
};

export default TopAdvert;
