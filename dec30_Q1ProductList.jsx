function ProductList({ products, onSelect }) {
  console.log("ProductList rendered");

  return (
    <div>
      <h3>Product List</h3>
      {products.slice(0, 10).map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            padding: "8px",
            marginBottom: "6px"
          }}
        >
          <p>{product.name}</p>
          <p>₹{product.price}</p>
          <button onClick={() => onSelect(product)}>
            Select
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
