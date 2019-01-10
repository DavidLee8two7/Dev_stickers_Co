import React from "react";
import Link from "next/link";

const Category = () => {
  return (
    <ItemStyles>
      {item.image && <img src={item.image} alt={item.title} />}
      <Title>
        <Link
          href={{
            pathname: "/item",
            query: { id: item.id }
          }}
        >
          <a>{item.title}</a>
        </Link>
      </Title>
      <PriceTag>{formatMoney(item.price)}</PriceTag>
      <p>{item.description}</p>
      <div className="buttonList">
        <Link
          href={{
            pathname: "/update",
            query: { id: item.id }
          }}
        >
          <a>Edit ✏️</a>
        </Link>
        <AddToCart id={item.id} />
        <DeleteItem id={item.id}>Delete This Item</DeleteItem>
      </div>
    </ItemStyles>
  );
};

export default Category;
