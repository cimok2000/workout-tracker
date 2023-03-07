import { type NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Header from "../components/Header";
import { Button, Grid, Text } from "@nextui-org/react";
import HomeCardLink from "../components/HomeCardLink";

const Home: NextPage = (props) => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex h-screen w-screen flex-col">
      <Header title="Workout Tracker" sessionData={sessionData} />
      <main className="flex flex-col items-center justify-center p-1">
        <Text h1 weight="bold" color="white">
          Welcome Back
        </Text>
        <Button onClick={() => void signIn()}>
          {sessionData ? "Sign Out" : "Sign In"}
        </Button>
        <Grid.Container justify="center">
          <Grid xl={8} md={10} sm={8}>
            <HomeCardLink
              title="Workout"
              image="https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png"
              href="/dashboard/workout"
            >
              <Text h2 weight="bold" color="white">
                Workout
              </Text>
            </HomeCardLink>
            <HomeCardLink
              title="Dashboard"
              image="https://cdn.discordapp.com/attachments/743171804096364646/1082418989952663623/pexels-victor-freitas-2261477.jpg"
              href="/dashboard"
            >
              <Text h2 weight="bold" color="white">
                Dashboard
              </Text>
            </HomeCardLink>
          </Grid>
        </Grid.Container>
      </main>
    </div>
  );
};

export default Home;
