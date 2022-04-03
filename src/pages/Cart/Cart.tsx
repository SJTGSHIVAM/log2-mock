import './cart.css';

import {
  useEffect,
  useState,
} from 'react';

import {
  getUserCart,
  getUserWishlist,
} from 'apis';
import { CartCard } from 'components';
import { useLogin } from 'hooks';
import { Product } from 'interfaces';

export const Cart = () => {
  const [userCart, setUserCart] = useState<Array<Product>>([]);
  const [userWishlist, setUserWishlist] = useState<Array<Product>>([]);
  const {
    loginUser: { encodedToken },
    isAuth,
  } = useLogin();
  useEffect(() => {
    (async () => {
      const response = await getUserCart({
        authorinzation: encodedToken,
      });
      setUserCart(response.data.cart);
      if (isAuth()) {
        const response = await getUserWishlist({
          authorinzation: encodedToken,
        });

        setUserWishlist(response.data.wishlist);
      }
    })();
  }, []);

  return (
    <>
      <h1 className="tui__h-1 tui__m-b-xxxl tui__text--center">My Cart</h1>
      <div className="lg2__main--content">
        <div className="lg2__card--cart tui__card tui__pos--rel tui__flex--center  tui_card--shadow tui__pd-md  tui__m-auto tui__m-tb-md">
          <div className="tui__w--100">
            <div className="tui__card--img  "></div>
            <div className="tui__card--header tui__pd-xs">
              <h4 className="tui__h-4 tui__b-1">Price Details</h4>
            </div>

            <div className="tui__card--body tui__pd-xs">
              <hr className="tui__text--center lg2__hr" />
              <ul className="">
                <li className="lg2__cart--justify">
                  <div>Price</div>
                  <div>₹ 4000</div>
                </li>
                <li className="lg2__cart--justify">
                  <div>Discount</div>
                  <div>₹ -100</div>
                </li>
                <li className="lg2__cart--justify">
                  <div>Delivery charges</div>
                  <div>₹ 100</div>
                </li>
                <hr className="tui__text--center lg2__hr" />

                <li className="lg2__cart--justify tui__b-3">
                  <div>Total</div>
                  <div>₹ 3900</div>
                </li>
              </ul>

              <hr className="tui__text--center lg2__hr" />
              <p className="tui__text-sm tui__text--center">
                You will save 100 on this.
              </p>
            </div>

            <div className="tui__card--footer tui__flex--center tui__pd-md">
              <a href="/checkout" className="tui__width--80">
                <button className="tui__btn--link-br-none tui__width--100">
                  {" "}
                  Place order{" "}
                </button>
              </a>
            </div>
          </div>
        </div>

        {userCart.length > 0 ? (
          userCart.map((product, e) => (
            <CartCard
              product={product}
              isInWishlist={
                isAuth() ? userWishlist.some((p) => p.id === product.id) : false
              }
              key={e}
            />
          ))
        ) : (
          <h2 className="tui__m-in-xxl tui__h-2">Your Cart is empty</h2>
        )}
      </div>
    </>
  );
};
