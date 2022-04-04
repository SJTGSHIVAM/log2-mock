import "./productList.css";

import { useEffect, useState } from "react";

import { getProducts, getUserWishlist } from "apis";
import { ProductCard } from "components/ProductCard";
import { useLogin } from "hooks";
import { Product } from "interfaces";
import { useSearchParams } from "react-router-dom";

import { FilterActionType } from "./reducer/actionTypes";
import { useFilterReducer } from "./reducer/reducer";

export const ProductList = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [filterValues, dispatchFilterValues] = useFilterReducer();
  const [products, setProducts] = useState<Array<Product>>([]);
  const [userWishlist, setUserWishlist] = useState<Array<Product>>([]);
  const {
    loginUser: { encodedToken },
    isAuth,
  } = useLogin();
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    (async () => {
      const category = searchParams.get("category");
      switch (category) {
        case "DSA":
          dispatchFilterValues({
            type: FilterActionType.CATEGORYDSA,
            payload: true,
          });
          break;
        case "AI":
          dispatchFilterValues({
            type: FilterActionType.CATEGORYAI,
            payload: true,
          });
          break;
        case "DBMS":
          dispatchFilterValues({
            type: FilterActionType.CATEGORYDBMS,
            payload: true,
          });
          break;
        case "System Design":
          dispatchFilterValues({
            type: FilterActionType.CATEGORYSYSTEMDESIGN,
            payload: true,
          });
          break;
        case "Web Dev":
          dispatchFilterValues({
            type: FilterActionType.CATEGORYWEBDEV,
            payload: true,
          });
          break;
        case "Discrete Maths":
          dispatchFilterValues({
            type: FilterActionType.CATEGORYDISCRETEMATHS,
            payload: true,
          });
          break;
      }
      setSearchParams("");
      const response = await getProducts();
      setProducts(response.data.products);
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
      <aside className="lg2__aside--left tui__flex--column tui__m-b-sm tui__z--1">
        <div
          className="tui__pd-sm tui__cursor--pointer"
          onClick={() => setIsFilterVisible((p) => !p)}
        >
          {isFilterVisible ? "Hide Filter" : "Show Filter"}
        </div>
        {isFilterVisible && (
          <ul className="lg2__aside--left-li tui__pd-in-md tui__pd-b-md ">
            <li className="lg2__aside--head tui__flex--row-space-between tui__width--strech">
              <h4 className="tui__h-4">Filter</h4>
              <p
                className="tui__text-sm tui__cursor--pointer"
                onClick={(e) =>
                  dispatchFilterValues({
                    type: FilterActionType.CLEAR,
                  })
                }
              >
                Clear
              </p>
            </li>

            <li>
              <h4 className="tui__h-4">Price</h4>
              <div className="tui__flex--row-space-between">
                <span className="tui__slider--box">
                  <label htmlFor="price">below:</label>
                  <span className="tui__text-sm">
                    {" "}
                    {filterValues.highestPriceAmount}
                  </span>
                  <input
                    type="range"
                    className="tui__slider tui__slider--pri-col tui__slider--xxxs"
                    name="price"
                    min={500}
                    max={10000}
                    value={filterValues.highestPriceAmount}
                    onChange={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.PRICE,
                        payload: Number(e.currentTarget.value),
                      })
                    }
                  />
                </span>
              </div>
            </li>

            <li>
              <h4 className="tui__h-4">Category</h4>
              <div className="tui__flex--col">
                <span>
                  <input
                    type="checkbox"
                    name="DBMS"
                    checked={filterValues.categoryDbms}
                    onChange={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.CATEGORYDBMS,
                        payload: e.currentTarget.checked,
                      })
                    }
                  />
                  <label htmlFor="DBMS">DBMS</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="AI"
                    checked={filterValues.categoryAi}
                    onChange={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.CATEGORYAI,
                        payload: e.currentTarget.checked,
                      })
                    }
                  />
                  <label htmlFor="AI">AI</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="DiscreteMaths"
                    checked={filterValues.categoryDiscreteMaths}
                    onChange={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.CATEGORYDISCRETEMATHS,
                        payload: e.currentTarget.checked,
                      })
                    }
                  />
                  <label htmlFor="DiscreteMaths">Discrete Maths</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="SystemDesign"
                    checked={filterValues.categorySystemDesign}
                    onChange={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.CATEGORYSYSTEMDESIGN,
                        payload: e.currentTarget.checked,
                      })
                    }
                  />
                  <label htmlFor="SystemDesign">System Design</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="DSA"
                    checked={filterValues.categoryDSA}
                    onChange={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.CATEGORYDSA,
                        payload: e.currentTarget.checked,
                      })
                    }
                  />
                  <label htmlFor="DSA">DSA</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="WebDev"
                    checked={filterValues.categoryWebDev}
                    onChange={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.CATEGORYWEBDEV,
                        payload: e.currentTarget.checked,
                      })
                    }
                  />
                  <label htmlFor="WebDev">Web Dev</label>
                </span>
              </div>
            </li>

            <li>
              <h4 className="tui__h-4">Rating:</h4>
              <div className="lg2__rating">
                <fieldset className="tui__rating lg2__rating--size">
                  <input
                    type="radio"
                    id="star5"
                    name="rating"
                    checked={filterValues.rating === 5}
                    onClick={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.RATING,
                        payload: 5,
                      })
                    }
                  />
                  <label
                    htmlFor="star5"
                    className="full"
                    title="Awesome"
                  ></label>
                  <input
                    type="radio"
                    id="star4.5"
                    name="rating"
                    checked={filterValues.rating === 4.5}
                    onClick={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.RATING,
                        payload: 4.5,
                      })
                    }
                  />
                  <label htmlFor="star4.5" className="half"></label>
                  <input
                    type="radio"
                    id="star4"
                    name="rating"
                    checked={filterValues.rating === 4}
                    onClick={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.RATING,
                        payload: 4,
                      })
                    }
                  />
                  <label htmlFor="star4" className="full"></label>
                  <input
                    type="radio"
                    id="star3.5"
                    name="rating"
                    checked={filterValues.rating === 3.5}
                    onClick={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.RATING,
                        payload: 3.5,
                      })
                    }
                  />
                  <label htmlFor="star3.5" className="half"></label>
                  <input
                    type="radio"
                    id="star3"
                    name="rating"
                    checked={filterValues.rating === 3}
                    onClick={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.RATING,
                        payload: 3,
                      })
                    }
                  />
                  <label htmlFor="star3" className="full"></label>
                  <input
                    type="radio"
                    id="star2.5"
                    name="rating"
                    checked={filterValues.rating === 2.5}
                    onClick={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.RATING,
                        payload: 2.5,
                      })
                    }
                  />
                  <label htmlFor="star2.5" className="half"></label>
                  <input
                    type="radio"
                    id="star2"
                    name="rating"
                    checked={filterValues.rating === 2}
                    onClick={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.RATING,
                        payload: 2,
                      })
                    }
                  />
                  <label htmlFor="star2" className="full"></label>
                  <input
                    type="radio"
                    id="star1.5"
                    name="rating"
                    checked={filterValues.rating === 1.5}
                    onClick={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.RATING,
                        payload: 1.5,
                      })
                    }
                  />
                  <label htmlFor="star1.5" className="half"></label>
                  <input
                    type="radio"
                    id="star1"
                    name="rating"
                    checked={filterValues.rating === 1}
                    onClick={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.RATING,
                        payload: 1,
                      })
                    }
                  />
                  <label htmlFor="star1" className="full"></label>
                  <input
                    type="radio"
                    id="star0.5"
                    name="rating"
                    checked={filterValues.rating === 0.5}
                    onClick={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.RATING,
                        payload: 0.5,
                      })
                    }
                  />
                  <label htmlFor="star0.5" className="half"></label>
                </fieldset>
              </div>
            </li>

            <li>
              <h4 className="tui__h-4">Sort</h4>
              <div className="tui__flex--col">
                <span>
                  <input
                    type="radio"
                    name="price"
                    checked={filterValues.sortByPrice === "LOW"}
                    onChange={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.SORTBYPRICE,
                        payload: "LOW",
                      })
                    }
                  />
                  <label htmlFor="DBMS">Price: low to high</label>
                </span>
                <span>
                  <input
                    type="radio"
                    name="price"
                    checked={filterValues.sortByPrice === "HIGH"}
                    onChange={(e) =>
                      dispatchFilterValues({
                        type: FilterActionType.SORTBYPRICE,
                        payload: "HIGH",
                      })
                    }
                  />
                  <label htmlFor="DSA">Price: high to low</label>
                </span>
              </div>
            </li>
          </ul>
        )}
      </aside>
      <div className="lg2__products--grid tui__m-t-md                                                                                                                                                                                                                                                                                                           ">
        {products.length > 0 &&
          [...products]
            .sort((a, b) =>
              filterValues.sortByPrice === "HIGH"
                ? b.discountPrice - a.discountPrice
                : filterValues.sortByPrice === "LOW"
                ? a.discountPrice - b.discountPrice
                : 0
            )
            .filter(
              (product) =>
                product.discountPrice <= filterValues.highestPriceAmount &&
                product.inStock &&
                product.rating >= filterValues.rating &&
                (!(
                  filterValues.categoryAi ||
                  filterValues.categoryDSA ||
                  filterValues.categoryDbms ||
                  filterValues.categoryDiscreteMaths ||
                  filterValues.categorySystemDesign ||
                  filterValues.categoryWebDev
                )
                  ? true
                  : (filterValues.categoryAi
                      ? product.tags.some((i) => i === "AI")
                      : false) ||
                    (filterValues.categoryDSA
                      ? product.tags.some((i) => i === "DSA")
                      : false) ||
                    (filterValues.categoryDbms
                      ? product.tags.some((i) => i === "DBMS")
                      : false) ||
                    (filterValues.categoryDiscreteMaths
                      ? product.tags.some((i) => i === "Discrete Maths")
                      : false) ||
                    (filterValues.categorySystemDesign
                      ? product.tags.some((i) => i === "System Design")
                      : false) ||
                    (filterValues.categoryWebDev
                      ? product.tags.some((i) => i === "Web Dev")
                      : false))
            )
            .map((product, e) => (
              <ProductCard
                product={product}
                isInWishlist={
                  isAuth()
                    ? userWishlist.some((p) => p.id === product.id)
                    : false
                }
                key={e}
              />
            ))}
      </div>
    </>
  );
};
