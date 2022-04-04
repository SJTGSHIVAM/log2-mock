import {
  useCallback,
  useEffect,
} from 'react';

import {
  deleteUserCartProduct,
  postUserWishlist,
  updateUserCartProduct,
} from 'apis';
import { useLogin } from 'hooks';
import { CartProductInvalidatorProp } from 'interfaces';
import throttle from 'lodash.throttle';
import { useNavigate } from 'react-router-dom';
import { CartAction } from 'types';
import { toastError } from 'utils';

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
    qty,
  },
  isInWishlist,
  invalidate,
}: CartProductInvalidatorProp) => {
  const {
    isAuth,
    loginUser: { encodedToken },
  } = useLogin();
  const navigate = useNavigate();

  const updateQty = async (
    id: string,
    action: CartAction,
    payload: number,
    encodedToken: string,
    invalidate: () => void
  ) => {
    try {
      await updateUserCartProduct(id, action, payload, {
        authorization: encodedToken,
      });
      invalidate();
    } catch (error) {
      toastError();
    }
  };

  const removeFromCart = async (
    id: string,
    encodedToken: string,
    invalidate: () => void
  ) => {
    try {
      await deleteUserCartProduct(id, { authorization: encodedToken });

      invalidate();
    } catch (error) {
      toastError();
    }
  };
  const wishlistToggle = async (
    id: string,
    encodedToken: string,
    invalidate: () => void
  ) => {
    try {
      postUserWishlist(id, { authorization: encodedToken });
      await removeFromCartThrottled(id, encodedToken, invalidate);
    } catch (error) {
      toastError();
    }
  };
  const wishlistToggleThrottled = useCallback(
    throttle(wishlistToggle, 1000),
    []
  );
  const removeFromCartThrottled = useCallback(
    throttle(removeFromCart, 1000),
    []
  );
  const updateQtyThrottled = useCallback(throttle(updateQty, 270), []);

  useEffect(() => {}, [isInWishlist]);
  return (
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

          <div className="tui__flex--row tui__m-tb-xxs">
            <p className="tui__text-sm tui__b-3 tui__m-in-xs">Quantity </p>
            <button
              className="tui__btn--icon-br-xl tui__flex--center tui__m-in-xs"
              onClick={() => {
                updateQtyThrottled(id, "DEC", 1, encodedToken, invalidate);
              }}
            >
              -
            </button>
            <p className="tui__text-sm">{qty}</p>
            <button
              className="tui__btn--icon-br-xl tui__flex--center tui__m-in-xs"
              onClick={() => {
                updateQtyThrottled(id, "INCR", 1, encodedToken, invalidate);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="tui__card--footer tui__pd-md">
          <button
            className="tui__btn--link-br-none tui__child--strech tui__m-tb-xs"
            onClick={() =>
              wishlistToggleThrottled(id, encodedToken, invalidate)
            }
          >
            Move To Wishlist
          </button>
          <button
            className="tui__btn--link-br-none tui__child--strech "
            onClick={() => {
              removeFromCartThrottled(id, encodedToken, invalidate);
            }}
          >
            {" "}
            Remove From Cart{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
