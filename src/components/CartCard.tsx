import {
  useCallback,
  useEffect,
} from 'react';

import {
  deleteUserWishlistProduct,
  postUserCart,
} from 'apis';
import { useLogin } from 'hooks';
import { ProductProp } from 'interfaces';
import throttle from 'lodash.throttle';
import { useNavigate } from 'react-router-dom';

export const CartCard = ({
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
  invalidate,
}: ProductProp) => {
  const {
    isAuth,
    loginUser: { encodedToken },
  } = useLogin();
  const navigate = useNavigate();

  const addToCart = async (id: string, encodedToken: string) => {
    try {
      await postUserCart(id, { authorinzation: encodedToken });
    } catch (error) {
      // will add alerts in actual cart branch
    }
  };
  const wishlistToggle = async (
    id: string,
    encodedToken: string,
    invalidate: () => void
  ) => {
    try {
      await deleteUserWishlistProduct(id, { authorinzation: encodedToken });
      invalidate();
    } catch (error) {
      //do something
    }
  };
  const wishlistToggleThrottled = useCallback(
    throttle(wishlistToggle, 1000),
    []
  );
  const addToCartThrottled = useCallback(throttle(addToCart, 1000), []);

  useEffect(() => {}, [isInWishlist]);
  return (
    <>
      {/* <div className="tui__card tui__flex--col tui__pos--rel  tui__flex--row-space-between tui_card--shadow">
        {" "}
        <button
          className="tui__btn--icon-br-xl tui__card--top-btn-r"
          onClick={() =>
            isAuth()
              ? invalidate &&
                wishlistToggleThrottled(id, encodedToken, invalidate)
              : navigate("/user/login")
          }
        >
          <img
            className="tui__svg--icon-font"
            src={`${BASE_IMG_URL}/${SVG_IMG}/redheart.svg`}
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
      </div> */}
      <div className="lg2__card--cart-item tui__m-auto tui__m-tb-md">
        <div className="tui__card  tui__card--hor lg2__card--hor tui_card--shadow tui__br-sm tui__overflow--hidden">
          <div className="tui__card--img">
            <img className="" src={image} alt={imgAlt} />
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

                <span className="tui__text-sm tui__b-3 ">
                  ₹ {discountPrice}
                </span>
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

            <div className="tui__flex--row tui__m-tb-xxs">
              <p className="tui__text-sm tui__b-3 tui__m-in-xs">Quantity </p>
              <button className="tui__btn--icon-br-xl tui__flex--center tui__m-in-xs">
                -
              </button>
              <p className="tui__text-sm">1</p>
              <button className="tui__btn--icon-br-xl tui__flex--center tui__m-in-xs">
                +
              </button>
            </div>
          </div>
          <div className="tui__card--footer tui__pd-md">
            <button className="tui__btn--link-br-none tui__child--strech tui__m-tb-xs">
              Move To Wishlist
            </button>
            <button className="tui__btn--link-br-none tui__child--strech ">
              {" "}
              Remove From Cart{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
