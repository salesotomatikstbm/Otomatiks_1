import { useEffect } from 'react';
import PageTitle from '@/components/sections/pageTitle'
const Shop = () => {
  useEffect(() => {
    const loadShopifyScript = () => {
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
        const client = window.ShopifyBuy.buildClient({
          domain: '56668b-06.myshopify.com',
          storefrontAccessToken: 'c85e3d0b3395d0296a30323fe4582046',
        });

        window.ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '8875331518719',
            node: document.getElementById('product-component-1726142554035'),
            moneyFormat: 'Rs.%20%7B%7Bamount%7D%7D',
            options: {
              product: {
                styles: {
                  product: {
                    '@media (min-width: 601px)': {
                      'max-width': 'calc(25% - 20px)',
                      'margin-left': '20px',
                      'margin-bottom': '50px',
                    },
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
                      'margin-left': '-20px',
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
              option: {},
              cart: {
                text: {
                  total: 'Subtotal',
                  button: 'Checkout',
                },
              },
              toggle: {},
            },
          });
        });
      }
    };

    loadShopifyScript();
  }, []);

  return (
    <div>
         <PageTitle pageName={"Shop"} breadcrumbCurrent={"Shop"} />
      <div id="product-component-1726142554035"></div>
    </div>
  );
};

export default Shop;
