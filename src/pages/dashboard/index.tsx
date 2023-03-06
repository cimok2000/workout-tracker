import { Button, Tooltip } from "@nextui-org/react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import ButtonWithTooltip from "../../components/ButtonWithTooltip";
import Header from "../../components/Header";

const Workout: NextPage = (props) => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  return (
    <div className="flex h-screen w-screen flex-col">
      <Header title="Workout Dashboard" sessionData={sessionData} />
      <main className="flex flex-col items-center justify-center p-1">
        <h1>Dashboard</h1>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-3 lg:grid-cols-4">
          <ButtonWithTooltip
            content="Create or view your workouts."
            onClick={() => void router.push("/dashboard/workout")}
          >
            Workout
          </ButtonWithTooltip>
          <ButtonWithTooltip content="Weight Tracker" disabled>
            Weight Tracker
          </ButtonWithTooltip>
          <ButtonWithTooltip content="Calorie Tracker" disabled>
            Calorie Tracker
          </ButtonWithTooltip>
          <ButtonWithTooltip content="Step Tracker" disabled>
            Step Tracker
          </ButtonWithTooltip>
          <ButtonWithTooltip content="Sleep" disabled>
            Sleep
          </ButtonWithTooltip>
          <ButtonWithTooltip content="Points & Badges" disabled>
            Points & Badges
          </ButtonWithTooltip>
          <ButtonWithTooltip content="Meal Plans" disabled>
            Meal Plans
          </ButtonWithTooltip>
          <ButtonWithTooltip content="Current Streak" disabled>
            Current Streak
          </ButtonWithTooltip>
        </div>
      </main>
    </div>
  );
};

export default Workout;
