type Index = {
  id: number;
  label: string;
  current: number;
  netChange: {
    positive: boolean;
    value: number;
    percentageValue: number;
  };
};

type HeroLeftSideSectionLatestNews = {
  id: number;
  category: string;
  title: string;
  path: string;
  time: {
    value: string;
    grayed: boolean;
  };
};

type HeroLeftSideSectionTableData = {
  id: number;
  country: string;
  tableValues: number[];
};

type HeroLeftSideSectionData = {
  latest: HeroLeftSideSectionLatestNews[];
  table: {
    title: string;
    tableData: HeroLeftSideSectionTableData[];
  };
};

type HeroRightHandSectionOpinionData = {
  id: number;
  reporter: string;
  title: string;
  path: string;
};

type HeroRightSideSectionData = {
  opinions: HeroRightHandSectionOpinionData[];
};

type NewsArticle = {
  id: number;
  image: { src: string; alt: string } | null;
  category: string;
  title: string;
  main?: boolean;
  subcategories: { id: number; text: string; path: string }[] | null;
};

type HeroMainSectionData = NewsArticle[];
