import { Card } from "@nextui-org/react";
import { useRouter } from "next/router";

type HomeCardProps = {
  children: React.ReactNode;
  title: string;
  image: string;
  isPressable?: boolean;
  isHoverable?: boolean;
  href: string;
};

const HomeCardLink = (props: HomeCardProps) => {
  const router = useRouter();
  const gotoPage = (page: string) => {
    router
      .push(page)
      .then(() => console.log("Page Changed"))
      .catch((err) => console.log(err));
  };

  return (
    <Card
      variant="bordered"
      isPressable={props.isPressable}
      isHoverable={props.isHoverable}
      onPress={() => gotoPage(props.href)}
    >
      <Card.Header className="z-1 absolute top-1">{props.children}</Card.Header>
      <Card.Image
        src={props.image}
        objectFit="cover"
        width="100%"
        height="100%"
        alt={props.title}
      />
    </Card>
  );
};

export default HomeCardLink;
