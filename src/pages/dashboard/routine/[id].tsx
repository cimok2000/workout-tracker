import type { NextPage } from "next";
import { useRouter } from "next/router";

const RoutineID: NextPage = (props) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Routine {id}</h1>
    </div>
  );
};

export default RoutineID;
