import {
  useEffect,
  useState,
} from 'react';

import {
  deleteUserWishlistProduct,
  postUserWishlist,
} from 'apis';
import {
  BASE_IMG_URL,
  SVG_IMG,
} from 'consts';
import { useLogin } from 'hooks';
import { ProductProp } from 'interfaces';
import { v4 as uuid } from 'uuid';

export const ProductCard = ({
  product: {
    id,
    tags,
    publisher,
    name,
    author,
    image,
    imgAlt,
    description,
    discountPrice,
    price,
    discount,
    inStock,
    rating,
    sellerId,
  },
  isInWishlist,
}: ProductProp) => {
  const {
    isAuth,
    loginUser: { encodedToken },
  } = useLogin();

  const [isInWishlistLoaclState, setIsInWishlistLoaclState] =
    useState(isInWishlist);

  const wishlistToggle = async () => {
    if (isInWishlistLoaclState) {
      setIsInWishlistLoaclState(false);
      try {
        await deleteUserWishlistProduct(id, { authorinzation: encodedToken });
      } catch (error) {
        setIsInWishlistLoaclState(true);
      }
    } else {
      setIsInWishlistLoaclState(true);
      try {
        await postUserWishlist(id, { authorinzation: encodedToken });
      } catch (error) {
        setIsInWishlistLoaclState(false);
      }
    }
  };
  useEffect(() => {
    setIsInWishlistLoaclState(isInWishlist);
  }, [isInWishlist]);
  console.log(isInWishlist, isInWishlistLoaclState);
  return (
    <div
      className="tui__card tui__flex--col tui__pos--rel  tui__flex--row-space-between tui_card--shadow"
      key={uuid()}
    >
      {" "}
      <button
        className="tui__btn--icon-br-xl tui__card--top-btn-r"
        onClick={wishlistToggle}
      >
        <img
          className="tui__svg--icon-font"
          src={`${BASE_IMG_URL}/${SVG_IMG}/${
            isInWishlistLoaclState ? "redheart.svg" : "hollowheart.svg"
          }`}
          alt="like"
        />
      </button>
      <div className="tui__card--img">
        <img className="tui__image--center-cover" src={image} alt={imgAlt} />
      </div>
      <div className="tui__card--header tui__pd-xs">
        <h4 className="tui__h-4">{name}</h4>
        <h5 className="tui__h-5">{author}</h5>
      </div>
      <div className="tui__card--body tui__pd-xs">
        <div className="tui__flex--row-space-between">
          <p>
            <span className="tui__text-sm tui__b-3 tui__text--strike tui__m-r-xs">
              ₹ {price}
            </span>

            {discount > 0 && (
              <span className="tui__text-sm tui__b-3 ">₹ {discountPrice}</span>
            )}
          </p>
          <p>
            <span className="tui__text-sm">Rating: {rating}</span>
          </p>
        </div>
        {discount > 0 && (
          <div>
            <p>{discount}% Discount</p>
          </div>
        )}
      </div>
      <div className="tui__card--footer tui__m-sm">
        <button className="tui__btn--link-br-none tui__child--strech">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
