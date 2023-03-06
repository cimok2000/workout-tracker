import { type NextPage } from "next";
// import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

// import { api } from "../utils/api";
import Header from "../components/Header";
import { Button, Card, Grid, Text } from "@nextui-org/react";

const Home: NextPage = (props) => {
  const { data: sessionData } = useSession();
  // const userQuery = api.user.getById.useQuery("cldxv28870000ux2gubm9mtzt");
  const router = useRouter();
  const gotoPage = (page: string) => {
    router
      .push(page)
      .then(() => console.log("Page Changed"))
      .catch((err) => console.log(err));
  };
  // let profilePicture =
  //   "https://cdn.discordapp.com/attachments/743171804096364646/1081068865448063056/blank-profile-picture-973460_1280.png";
  // profilePicture = userQuery.data?.image
  //   ? userQuery.data?.image?.toString()
  //   : profilePicture;

  return (
    <div className="flex h-screen w-screen flex-col">
      <Header title="Workout Tracker" sessionData={sessionData} />
      <main className="flex flex-col items-center justify-center p-1">
        {/* <User
          src={profilePicture}
          name={userQuery.data?.name?.toString()}
          size="xl"
          description=""
        /> */}
        <Text h1 weight="bold" color="white">
          Welcome Back
        </Text>
        <Button onClick={() => void signIn()}>
          {sessionData ? "Sign Out" : "Sign In"}
        </Button>
        <Grid.Container justify="center">
          <Grid xl={8} md={10} sm={8}>
            <Card
              isPressable
              isHoverable
              variant="bordered"
              onPress={() => gotoPage("/dashboard/workout")}
            >
              <Card.Header className="z-1 absolute top-1">
                <Text h2 weight="bold" color="white">
                  Workout
                </Text>
              </Card.Header>
              <Card.Image
                src="https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png"
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Workout Image"
              />
            </Card>
            <Card
              isPressable
              isHoverable
              variant="bordered"
              onPress={() => gotoPage("/dashboard")}
            >
              <Card.Header className="z-1 absolute top-1">
                <Text h2 weight="bold" color="white">
                  Dashboard
                </Text>
              </Card.Header>
              <Card.Image
                src="https://cdn.discordapp.com/attachments/743171804096364646/1082418989952663623/pexels-victor-freitas-2261477.jpg"
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Workout Image"
              />
            </Card>
          </Grid>
        </Grid.Container>
      </main>
    </div>
  );
};

export default Home;
