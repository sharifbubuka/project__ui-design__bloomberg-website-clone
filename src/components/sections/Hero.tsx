import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  heroLeftSideSectionData,
  heroRightSideSectionData,
  heroMainSectionData,
} from "../../data/hero.data";

type Props = {};

type LeftSectionProps = {
  className?: string;
  data: HeroLeftSideSectionData;
};

type MainSectionProps = {
  className?: string;
  data: HeroMainSectionData;
};

type RightSectionProps = {
  className?: string;
  data: HeroRightSideSectionData;
};

const LeftSideSection: FC<LeftSectionProps> = ({
  className,
  data,
}: LeftSectionProps) => {
  return (
    <section className={className}>
      <div>
        <h2 className="text-2xl border-t border-b border-black py-1 text-red-500">
          LATEST
        </h2>
        {data.latest.map((item) => (
          <article
            key={item.id}
            className={`border-black border-dotted py-3 pt-2 flex flex-col gap-1 ${
              item.id !== data.latest.length && "border-b"
            }`}
          >
            <h3>{item.category}</h3>
            <Link href={item.path} passHref>
              <h4 className="font-bold text-base leading-4 cursor-pointer hover:underline">
                {item.title}
              </h4>
            </Link>
            <p
              className={`${
                item.time.grayed ? "text-gray-500" : "text-red-500"
              } text-sm`}
            >
              {item.time.value}
            </p>
          </article>
        ))}
      </div>
      <article className="flex flex-col gap-3">
        <h2 className="border-t border-b border-black py-1 text-2xl uppercase font-semibold">
          {data.table.title}
        </h2>
        <section className="flex flex-col gap-4">
          <div>
            <div></div>
            <div className="">
              {data.table.tableData.map((row) => (
                <div
                  key={row.id}
                  className={`flex border-black border-dotted ${
                    row.id !== data.table.tableData.length && "border-b"
                  }`}
                >
                  <div className="w-10 pl-1 pr-2">{row.country}</div>
                  {row.tableValues.map((value, index) => (
                    <div key={index} className="flex-1 text-right">
                      {value}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <Link href="/" passHref>
            <button className="bg-yellow-500 hover:bg-yellow-400 py-2 w-full rounded-full flex items-center justify-center gap-4">
              View more
              <Image
                src="/icons/arrow-right.svg"
                alt="Arrow Right"
                width={10}
                height={10}
              />
            </button>
          </Link>
        </section>
      </article>
    </section>
  );
};

const MainSection: FC<MainSectionProps> = ({
  className,
  data,
}: MainSectionProps) => {
  return (
    <section className={className}>
      <div className="flex flex-col gap-2 md:gap-4">
        <h2 className="text-2xl md:text-4xl font-bold">Weekends</h2>
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          {data.slice(0, 9).map((article) => (
            <div
              key={article.id}
              className={`col-span-12 gap-6 order-${article.id} ${
                article.main ? "grid grid-cols-12" : "md:col-span-3"
              }`}
            >
              {article.image && article.main && (
                <div className="col-span-12 md:col-span-6 h-80 md:h-64 bg-green-500 relative">
                  <Image
                    src={article.image.src}
                    alt={article.image.alt}
                    layout="fill"
                  />
                </div>
              )}
              <div
                className={`${
                  article.main
                    ? "col-span-12 md:col-span-6 md:h-64"
                    : "border-b border-black border-dotted h-40 md:h-48"
                }`}
              >
                <p className={`${!article.main && "hidden md:block"} hover:underline cursor-pointer tracking-tighter`}>
                  {article.category}
                </p>
                <h3
                  className={`${
                    article.main
                      ? "text-2xl leading-6 pb-6 border-b border-black border-dotted"
                      : "text-lg"
                  } cursor-pointer hover:underline font-bold leading-5`}
                >
                  {article.title}
                </h3>
                {article.subcategories && (
                  <div className="">
                    {article.subcategories.map((subCategory) => (
                      <div
                        key={subCategory.id}
                        className="border-b border-black border-dotted leading-4 py-2"
                      >
                        <Link href={subCategory.path} passHref>
                          <span className="tracking-tighter cursor-pointer hover:underline">
                            {subCategory.text}
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="md:h-72 grid grid-cols-12 md:gap-x-8">
          <div className="col-span-4 h-full bg-black cursor-pointer">c</div>
          {data.slice(10, 12).map((article) => (
            <div key={article.id} className="col-span-4 flex flex-col gap-1 border-b border-black border-dotted">
              {article.image && (
                <div className="relative h-40">
                  <Image
                    src={article.image?.src}
                    alt={article.image.alt}
                    layout="fill"
                  />
                </div>
              )}
              <p className="hidden tracking-tighter hover:underline cursor-pointer md:block">{article.category}</p>
              <h3 className="cursor-pointer hover:underline font-bold leading-5 text-lg">
                {article.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RightSideSection: FC<RightSectionProps> = ({
  className,
  data,
}: RightSectionProps) => {
  return (
    <section className={className}>
      <div className="flex flex-col gap-6">
        <div className="w-full h-56 bg-yellow-400 relative">
          <Image
            src="/images/hero/right-section/main.jpg"
            alt="Header Image"
            layout="fill"
          />
        </div>
        <div className="">
          <h2 className="text-2xl font-bold border-t border-b border-black py-2">
            Bloomberg <span className="text-blue-500">Opinion</span>
          </h2>
          <div className="">
            {data.opinions.map((opinion) => (
              <article
                key={opinion.id}
                className={`border-black border-dotted py-2 pb-3 ${
                  opinion.id !== data.opinions.length && "border-b"
                }`}
              >
                <p className="text-blue-500 font-bold">{opinion.reporter}</p>
                <Link href={opinion.path} passHref>
                  <h3 className="font-bold text-base leading-5 cursor-pointer hover:underline">
                    {opinion.title}
                  </h3>
                </Link>
              </article>
            ))}
          </div>
          <div className="border-b border-t border-black border-dotted py-2 flex justify-between items-center">
            <Link href="/" passHref>
              <span className="text-xs uppercase cursor-pointer hover:underline">
                More from opinion
              </span>
            </Link>
            <Image
              src="/icons/arrow-right.svg"
              alt="Arrow Right"
              width={12}
              height={10}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-bold">Next Africa</h4>
          <p className="leading-4">
            A weekly newsletter that shows where Africa is heading next. Sign up
            here.
          </p>
          <form className="flex items-center gap-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border-b border-gray-600 pb-1 w-1/2"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                return;
              }}
              type="submit"
              className="border border-black hover:text-gray-500 hover:border-gray-400 transition duration-300 py-2 w-1/2 font-semibold text-sm"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Hero: FC<Props> = () => {
  return (
    <section className="my-4 md:my-8 grid grid-cols-12 md:gap-12">
      <LeftSideSection
        data={heroLeftSideSectionData}
        className="hidden md:inline-block md:col-span-2"
      />

      <MainSection
        data={heroMainSectionData}
        className="col-span-12 md:col-span-7 p-4 pt-0"
      />

      <RightSideSection
        data={heroRightSideSectionData}
        className="hidden md:inline-block md:col-span-3"
      />
    </section>
  );
};

export default Hero;
