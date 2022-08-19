import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";

const Shop = () => {
  const [Products, setProducts] = useState([]);
  
  const [Productscat, setProductscat] = useState([]);
  const [filtered,setfiltered]=useState('');
  useEffect(() => {
    console.log(" ");

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
      fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>{
                // console.log(json);
                setProductscat(json);
            });
  }, []);

const filterBycategories=(cat)=>{
    console.log(cat)

if(cat){

    fetch(`https://fakestoreapi.com/products/category/${cat}`)
    .then(res=>res.json())
    .then(json=>{

        setProducts(json)
    })
}else{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>   setProducts(json))

}

}
const searchProduct=()=>{
    const newArray = Products.filter((item) => {
        return item.title.toLowerCase().match(filtered);
      });

      setProducts(newArray)
}


  return (
    <>
      <div className="banner">
        <div className="col1">


<img src="/asset/shape.svg" className="img1" alt="" srcset="" />
<img src="/asset/shape.svg" className="img2" alt="" srcset="" />
<img src="/asset/circle.svg" className="img3" alt="" srcset="" />
<img src="/asset/circle.svg" className="img4" alt="" srcset="" />

        </div>
        <div className="col2">
          <h2>
            Home Shopping,<br></br> Your Choice!
          </h2>
          <p className="shortdesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </div>

      <div className="productlistcomponent">
        <div className="sidefilter">

<div className="searchbar">

    <input type="text" placeholder="Search products" onChange={e=>{
        setfiltered(

            e.target.value
        )
        }} />

        <button onClick={()=>{
searchProduct()

        }}><img src="/asset/search.svg" alt="" srcset="" /></button>

</div>

<div className="productcategories">
<div className="title">Product Categories</div>
<p  onClick={()=>{filterBycategories('')}}>All products <span>-</span></p>
{
    Productscat.map(cat=>{

        return <p key={cat} onClick={()=>{filterBycategories(cat)}}>{cat} <span>-</span></p>
    })
}


</div>

        </div>
        <div className="cardcontainer">
          {Products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>

      <div className="newsletters">
        <h2>Join Our News Letters</h2>
        <p>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews.<br></br> Iterative approaches to corporate strategy foster{" "}
        </p>
        <input type="text"className="searchbarbottom"  placeholder="Insert your mail here"/>
      </div>
    </>
  );
};

export default Shop;
