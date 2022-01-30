import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const UserAuth: FC<Props> = (props) => {
  return (
    <section>
      <div>User Auth UI</div>
    </section>
  );
};

export default UserAuth;