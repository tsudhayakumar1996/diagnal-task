import RootContainer from "@/app/container/rootContainer";
import NavBar from "@/app/uIComponents/navBar";
import PaginatedUI from "@/app/uIComponents/paginatedUI";
import PosterView from "@/app/uIComponents/posterView";

export default function Home() {
  return (
    <RootContainer>
      <NavBar />
      <PosterView />
      <PaginatedUI />
    </RootContainer>
  );
}
