import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import {motion} from "framer-motion";

function ProductPage() {
  const [tag, setTag] = useState("all");
  const [data, setData] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [loading, setloading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      const results = await axios.get("https://fakestoreapi.com/products");
      console.log(results.data);
      if (componentMounted) {
        setData(results.data);
        tag === "all"
          ? setFilteredImages(data)
          : setFilteredImages(
              data.filter((product) => product.category === tag)
            );
        setloading(false);
      }
    };
    fetchData();
  }, []);

  const StyledProductsPage = styled.div`
    margin: 32rem 0 0 0;
  `;
  const Loading = () => {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  };

  const ShowProducts = () => {
    const StyledShowProducts = styled.div`
      .buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;

        .btn {
          border: .7px solid orangered;
          padding: 7px 7px;
          cursor: pointer;
          border-radius: 5px;
          margin-bottom: 2rem;
          width: calc(fit-content + 4px);

          &:hover,
          .active {
            background-color: orangered;
            color: white;
          }
        }
      }

      .grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        width: 90vw;
        margin: auto;
  
      }
      .card{
        width: 100%;
        border: 1px solid #333;
        padding: 6px;
        height: 50vh;
        border-radius: 20px;
        background-color: white;

        & img{
          width: 100%;
          height: 60%;
        }

        .card-body{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          h5,p,a{
            margin-top: 5px
          }

          a{
            background-color: #333;
            color: white;
            font-size: 11px;
            padding: 6px;
            border-radius: 10px;
          }
        }
        
      }
    `;
    return (
      <StyledShowProducts>
        <div className="buttons">
          <a href="#" className="btn btn-1">
            All
          </a>
          <a href="#" className="btn btn-1">
            Men's clothing
          </a>
          <a href="#" className="btn btn-1">
            Women's clothing
          </a>
          <a href="#" className="btn btn-1">
            Jeweleries
          </a>
          <a href="#" className="btn btn-1">
            Electronics
          </a>
        </div>
        <div className="grid">
          {data.map((product) => (
            <motion.div key={product.id} whileHover={{scale: 1.04}}  class="card">
                <img
                  class="card-img"
                  src={product.image}
                  alt={product.title}
                />
                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <p class="card-text">
                  GH₵{product.price}
                  </p>
                  <a href="#" class="btn btn-warning btn-sm">
                    Add to Cart
                  </a>
                </div>
              </motion.div>
          ))}
        </div>
      </StyledShowProducts>
    );
  };
  return (
    <StyledProductsPage>
      <h2 style={{ textAlign: "center", padding: "2.5rem 0" }}>
        {" "}
        Latest Product
      </h2>
      <div>{loading ? <Loading /> : <ShowProducts />}</div>
    </StyledProductsPage>
  );
}

export default ProductPage;
