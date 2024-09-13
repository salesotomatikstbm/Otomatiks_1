import { useEffect } from 'react';
import PageTitle from '@/components/sections/pageTitle';

const Shop = () => {
  useEffect(() => {
    // Use setTimeout to defer the script loading after the page content has loaded
    setTimeout(() => {
      const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

      // Check if the ShopifyBuy object already exists
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      // Function to load the Shopify Buy Button script
      function loadScript() {
        const script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        document.head.appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      // Initialize the Shopify Buy Button
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
                    '@media (min-width: 601px)': {
                      'max-width': 'calc(33.33% - 20px)', // 3 products per row
                      'margin-left': '20px',
                      'margin-bottom': '50px',
                      width: 'calc(33.33% - 20px)',
                    },
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
                    display: 'grid', // Use grid to align products
                    'grid-template-columns': 'repeat(3, 1fr)', // 3 items per row
                    'grid-gap': '20px', // Space between products
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
    }, 0); // Delay to ensure page load first
  }, []);

  return (
    <div>
      <PageTitle pageName="Shop" breadcrumbCurrent="Shop" />
      {/* Shopify collection container */}
      <div id="collection-component-1726202890885" className="my-8 mx-auto"></div>
    </div>
  );
};

export default Shop;
