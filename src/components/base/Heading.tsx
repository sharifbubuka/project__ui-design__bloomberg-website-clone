import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Heading: FC<Props> = ({ className, children, ...props }: Props) => {
  return <h1 className={className}>{children}</h1>;
};

export default Heading;
