import Categories from "../Categories/Categories";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import WelcomePage from "./WelcomePage/WelcomePage";

function HomePage() {
  return (
    <main>
      <WelcomePage />
      <Categories embedded />
      <FeaturedProducts />
    </main>
  );
}

export default HomePage;
