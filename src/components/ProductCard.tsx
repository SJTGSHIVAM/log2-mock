import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  deleteUserWishlistProduct,
  postUserCart,
  postUserWishlist,
} from 'apis';
import {
  BASE_IMG_URL,
  SVG_IMG,
} from 'consts';
import { useLogin } from 'hooks';
import { ProductProp } from 'interfaces';
import throttle from 'lodash.throttle';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [isInWishlistLocalState, setIsInWishlistLocalState] =
    useState(isInWishlist);
  const addToCart = async (id: string, encodedToken: string) => {
    try {
      await postUserCart(id, { authorinzation: encodedToken });
    } catch (error) {
      // will add alerts in actual cart branch
    }
  };
  const wishlistToggle = async (
    isInWishlistLocalState: boolean,
    id: string,
    encodedToken: string
  ) => {
    if (isInWishlistLocalState) {
      setIsInWishlistLocalState(false);
      try {
        await deleteUserWishlistProduct(id, { authorinzation: encodedToken });
      } catch (error) {
        setIsInWishlistLocalState(true);
      }
    } else {
      setIsInWishlistLocalState(true);
      try {
        await postUserWishlist(id, { authorinzation: encodedToken });
      } catch (error) {
        setIsInWishlistLocalState(false);
      }
    }
  };
  const wishlistToggleThrottled = useCallback(
    throttle(wishlistToggle, 1000),
    []
  );
  const addToCartThrottled = useCallback(throttle(addToCart, 1000), []);

  useEffect(() => {
    setIsInWishlistLocalState(isInWishlist);
  }, [isInWishlist]);
  return (
    <div className="tui__card tui__flex--col tui__pos--rel  tui__flex--row-space-between tui_card--shadow">
      {" "}
      <button
        className="tui__btn--icon-br-xl tui__card--top-btn-r"
        onClick={() =>
          isAuth()
            ? wishlistToggleThrottled(isInWishlistLocalState, id, encodedToken)
            : navigate("/user/login")
        }
      >
        <img
          className="tui__svg--icon-font"
          src={`${BASE_IMG_URL}/${SVG_IMG}/${
            isInWishlistLocalState ? "redheart.svg" : "hollowheart.svg"
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
            {discount > 0 && (
              <span className="tui__text-sm tui__b-3 tui__text--strike tui__m-r-xs">
                ₹ {price}
              </span>
            )}

            <span className="tui__text-sm tui__b-3 ">₹ {discountPrice}</span>
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
        <button
          className="tui__btn--link-br-none tui__child--strech"
          onClick={() =>
            isAuth()
              ? addToCartThrottled(id, encodedToken)
              : navigate("/user/login")
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
