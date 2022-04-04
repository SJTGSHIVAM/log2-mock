import './wishlist.css';

import {
  useEffect,
  useState,
} from 'react';

import { getUserWishlist } from 'apis';
import { WishlistCard } from 'components';
import { useLogin } from 'hooks';
import { Product } from 'interfaces';

export const Wishlist = () => {
  const [userWishlist, setUserWishlist] = useState<Array<Product>>([]);
  const [invalidateToggle, setInvalidateToggle] = useState(true);
  const {
    loginUser: { encodedToken },
    isAuth,
  } = useLogin();
  useEffect(() => {
    (async () => {
      if (isAuth()) {
        const response = await getUserWishlist({
          authorization: encodedToken,
        });

        setUserWishlist(response.data.wishlist);
      }
    })();
  }, [invalidateToggle]);

  return (
    <>
      {" "}
      {userWishlist.length > 0 ? (
        <div className="lg2__products--grid">
          {userWishlist.map((product, e) => (
            <>
              <WishlistCard
                product={product}
                isInWishlist={
                  isAuth()
                    ? userWishlist.some((p) => p.id === product.id)
                    : false
                }
                invalidate={() => {
                  setInvalidateToggle((p) => !p);
                }}
                key={e}
              />
            </>
          ))}
        </div>
      ) : (
        <h2 className="tui__flex--center tui__h-2">Your wishlist is empty.</h2>
      )}
    </>
  );
};
