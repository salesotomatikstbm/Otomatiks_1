import { useEffect } from 'react';

const Collection1 = () => {
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
            id: '439233020159',
            node: document.getElementById('collection-component-1726202890885'),
            moneyFormat: 'Rs.%20%7B%7Bamount%7D%7D',
            options: {
              product: {
                styles: {
                  product: {
                    '@media (min-width: 500px)': {
                      'max-width': 'calc(50% - 40px)', 
                      'margin-left': '20px', 
                      'margin-bottom': '50px',
                      width: 'calc(50% - 40px)',
                      height: '400px',
                    },
                  },
                  img: {
                    height: '250px',
                    objectFit: 'cover',
                  },
                },
                buttonDestination: 'modal',
                contents: {
                  options: false,
                },
                text: {
                  button: 'View product',
                },
              },
              productSet: {
                styles: {
                  products: {
                    display: 'grid',
                    'grid-template-columns': 'repeat(3, 1fr)',
                    'grid-gap': '20px',
                    justifyContent: 'center',
                    '@media (min-width: 601px)': {
                      'grid-template-columns': 'repeat(3, 1fr)',
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
      <div id="collection-component-1726202890885" className="aline-center"></div>
    </main>
  );
};

export default Collection1;
