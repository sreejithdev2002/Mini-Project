import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductPage from "../../ProductPage/ProductPage";
import { featuredProducts } from "../../../../Services/UserApi";
import Loader from "../../Loader/Loader";

function FeaturedProducts() {
  const [featuredData, setFeaturedData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await featuredProducts();
      if (data.status) {
        setFeaturedData(data.FeaturedProducts);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="store-section store-featured">
      <div className="store-section__heading">
        <h2>Featured footwear</h2>
        <Link className="store-button store-button--light" to="/latestarrival">Browse new arrivals</Link>
      </div>
      {loading && <Loader />}
      {!loading && featuredData.length > 0 && <ProductPage products={featuredData} />}
      {!loading && featuredData.length === 0 && (
        <p className="store-featured__empty">Featured footwear is unavailable right now.</p>
      )}
    </section>
  );
}

export default FeaturedProducts;
