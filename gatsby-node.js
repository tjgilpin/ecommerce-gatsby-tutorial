/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query AllProducts {
      allStripePrice {
        nodes {
          id
          product {
            images
            name
            url
            description
          }
          unit_amount
          active
        }        
      }
    }
  `);

  const productTemplate = path.resolve(`src/templates/product.js`);
  queryResults.data.allStripePrice.nodes.forEach(node => {
    createPage({
      path: `/products/${node.product.url}`,
      component: productTemplate,
      context: {
        // This time the entire product is passed down as context
        product: node
      }
    });
  });
};
