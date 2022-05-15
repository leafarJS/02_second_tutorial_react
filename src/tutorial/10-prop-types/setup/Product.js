import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';
const Product = ({ image, name, price }) => {
  const url = image && image.url;
  return (
    <article className='product'>
      <h4>Single Products</h4>

      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name || 'default name'}</h4>
      <p>${price || 'out of stock'}</p>
    </article>
  );
};
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
// Product.defaultProps = {
//   name: 'default name',
//   price: 0.99,
//   image: defaultImage,
// };
export default Product;
