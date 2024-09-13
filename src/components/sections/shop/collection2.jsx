import { useEffect } from 'react';

const Collection2 = () => {
  useEffect(() => {
    setTimeout(() => {
      const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        const script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        document.head.appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        const client = ShopifyBuy.buildClient({
          domain: '56668b-06.myshopify.com',
          storefrontAccessToken: 'c85e3d0b3395d0296a30323fe4582046',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('collection', {
            id: '439236493567', // Collection ID for Collection2
            node: document.getElementById('collection-component-1726212488690'),
            moneyFormat: 'Rs.%20%7B%7Bamount%7D%7D',
            options: {
              product: {
                styles: {
                  product: {
                    '@media (min-width: 601px)': {
                      'max-width': 'calc(25% - 20px)', // 4 products per row
                      'margin-left': '20px', // Margin for centering
                      'margin-bottom': '50px',
                      width: 'calc(25% - 20px)', // Equal width
                      height: '400px', // Fixed height for all products
                    },
                  },
                  img: {
                    height: '250px', // Fixed height for product images
                    objectFit: 'cover', // Cover the space while maintaining aspect ratio
                  },
                },
                text: {
                  button: 'Add to cart',
                },
              },
              productSet: {
                styles: {
                  products: {
                    '@media (min-width: 601px)': {
                      'margin-left': '-20px', // Adjust margins to fit 4 products per row
                    },
                  },
                },
              },
              modalProduct: {
                contents: {
                  img: false,
                  imgWithCarousel: true,
                  button: false,
                  buttonWithQuantity: true,
                },
                styles: {
                  product: {
                    '@media (min-width: 601px)': {
                      'max-width': '100%',
                      'margin-left': '0px',
                      'margin-bottom': '0px',
                    },
                  },
                },
                text: {
                  button: 'Add to cart',
                },
              },
              cart: {
                text: {
                  total: 'Subtotal',
                  button: 'Checkout',
                },
              },
            },
          });
        });
      }
    }, 0);
  }, []);

  return (
    <main>
      <div id="collection-component-1726212488690" className="collection-container my-8 mx-auto"></div>
    </main>
  );
};

export default Collection2;
