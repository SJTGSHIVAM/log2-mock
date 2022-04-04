import './cart.css';

import {
  useEffect,
  useState,
} from 'react';

import { getUserCart } from 'apis';
import { CartCard } from 'components';
import { useLogin } from 'hooks';
import { CartProduct } from 'interfaces';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const [userCart, setUserCart] = useState<Array<CartProduct>>([]);
  const [invalidateToggle, setInvalidateToggle] = useState(true);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [deliveryCharges, setDeliveryCharges] = useState(0);
  const {
    loginUser: { encodedToken },
  } = useLogin();
  useEffect(() => {
    (async () => {
      const {
        data: { cart },
      } = await getUserCart({
        authorinzation: encodedToken,
      });
      const price: number = cart.reduce((a, c) => a + c.price * c.qty, 0);
      let total: number = cart.reduce((a, c) => a + c.discountPrice * c.qty, 0);
      const deliveryCharges = total > 2500 || total <= 0 ? 0 : 50;
      const discount = price - total;
      if (deliveryCharges > 0) total += deliveryCharges;
      setPrice(price);
      setDiscount(discount);
      setTotal(total);
      setDeliveryCharges(deliveryCharges);
      setUserCart(cart);
    })();
  }, [invalidateToggle]);

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
                  <div>₹ {price}</div>
                </li>
                <li className="lg2__cart--justify">
                  <div>Discount</div>
                  <div>₹ {discount}</div>
                </li>
                <li className="lg2__cart--justify">
                  <div>Delivery charges</div>
                  <div>₹ {deliveryCharges}</div>
                </li>
                <hr className="tui__text--center lg2__hr" />

                <li className="lg2__cart--justify tui__b-3">
                  <div>Total</div>
                  <div>₹ {total}</div>
                </li>
              </ul>

              <hr className="tui__text--center lg2__hr" />
            </div>

            <div className="tui__card--footer tui__flex--center tui__pd-md">
              <Link to="/checkout" className="tui__width--80">
                <button className="tui__btn--link-br-none tui__width--100">
                  {" "}
                  Place order{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>

        {userCart.length > 0 ? (
          userCart.map((product, e) => (
            <CartCard
              product={product}
              isInWishlist={false}
              invalidate={() => {
                setInvalidateToggle((p) => !p);
              }}
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
