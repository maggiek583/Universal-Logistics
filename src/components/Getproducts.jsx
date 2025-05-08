import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import ImageCarousel from "./Carousel";

const Getproducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const navigate = useNavigate();
  const img_url = "https://maggiek.pythonanywhere.com/static/images/";

  const getproducts = async () => {
    setLoading("Please wait, We are retrieving the products ..");
    try {
      const response = await axios.get("https://maggiek.pythonanywhere.com/api/getproducts");
      setProducts(response.data);
      setLoading("");
    } catch (error) {
      setLoading("");
      setError("There was an Error");
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  // Filter products
  const filtered_products = products.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase()) ||
    item.product_description.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination calculations
  const totalPages = Math.ceil(filtered_products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filtered_products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Optional: scroll to top on page change
  };
 const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // 🔔 Notify other components that cart was updated
    window.dispatchEvent(new Event("cartUpdated"));

    alert(`Added "${product.product_name}" to cart.`);
  };

  return (
    <div className="row">
      <ImageCarousel />

      <h3 className="mt-1 text-danger">Available trucks</h3>

      <div className="row justify-content-center mt-3 mb-3">
        <input
          className="form-control w-50"
          type="search"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // Reset to page 1 on search
          }}
        />
      </div>

      {loading}
      {error}

      {/* Display current page products */}
      {currentProducts.map((product) => (
        <div className="col-md-3 justify-content-center mb-3" key={product.id}>
          <div className="card shadow card-margin">
            <img
              className="product_img mt-4"
              src={img_url + product.product_photo}
              alt="missing"
            />
            <div className="card-body">
              <h5 className="mt-2">{product.product_name}</h5>
              <p className="text-muted">{product.product_description.slice(0, 65)}</p>
              <b className="text-warning">{product.product_cost} KES</b>
              <br />
              <button
                    className="btn btn-outline-danger mt-2 w-100 fw-semibold"
                    onClick={() => addToCart(product)}
                  >
                    <i className="bi bi-cart-plus me-2"></i>Add to Cart
                  </button>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center my-4">
          <nav>
            <ul className="pagination">
              {[...Array(totalPages)].map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                >
                  <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Getproducts;
