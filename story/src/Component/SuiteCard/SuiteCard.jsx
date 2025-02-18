import React from 'react';
import PropTypes from 'prop-types';

const SuiteCard = ({
  imageUrl,
  price,
  season,
  location,
  guests,
  beds,
  bathrooms,
  size,
  rating,
  accommodations,
  description,
}) => {
  return (
    <div className="suite-card" style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={imageUrl} alt="Suite" style={styles.image} />
      </div>
      <div style={styles.content}>
        <h2 style={styles.title}>Suite</h2>
        <p style={styles.location}>{location}</p>
        <div style={styles.priceSeason}>
          <span style={styles.price}>{price}</span>
          <span style={styles.season}>{season}</span>
        </div>
        <p style={styles.details}>
          {guests} Guests · {beds} Beds · {bathrooms} Bathroom · {size}
        </p>
        <p style={styles.rating}>Rating: {rating} ★</p>
        <h4>Accommodations:</h4>
        <ul style={styles.list}>
          {accommodations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p style={styles.description}>{description}</p>
        <button style={styles.button}>Book the room</button>
      </div>
    </div>
  );
};

SuiteCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  guests: PropTypes.number.isRequired,
  beds: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  accommodations: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '12px',
    overflow: 'hidden',
    width: '320px',
    fontFamily: 'Arial, sans-serif',
  },
  imageContainer: {
    height: '150px',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    padding: '16px',
  },
  title: {
    fontSize: '24px',
    margin: '0 0 8px',
  },
  location: {
    color: '#666',
    marginBottom: '8px',
  },
  priceSeason: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  season: {
    color: '#888',
  },
  details: {
    fontSize: '14px',
    marginBottom: '8px',
  },
  rating: {
    fontSize: '14px',
    marginBottom: '8px',
    color: '#FFD700',
  },
  list: {
    paddingLeft: '16px',
    marginBottom: '8px',
  },
  description: {
    fontSize: '14px',
    color: '#333',
    marginBottom: '16px',
  },
  button: {
    backgroundColor: '#D4AF37',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '100%',
  },
};

export default SuiteCard;