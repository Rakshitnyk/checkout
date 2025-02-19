import React from 'react';
import PropTypes from 'prop-types';
import { FaWifi, FaBed, FaCocktail, FaStar, FaShieldAlt, FaVolumeMute } from 'react-icons/fa';
import { MdBalcony } from 'react-icons/md';

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
  description,
}) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={imageUrl} alt="Suite" style={styles.image} />
        <button style={styles.tourButton}>Take a 360° tour of the suite.</button>
      </div>
      <div style={styles.content}>
        <div style={styles.headerRow}>
          <h2 style={styles.title}>Suite</h2>
          <div style={styles.priceBlock}>
            <span style={styles.price}>{price}</span>
            <span style={styles.season}>{season}</span>
          </div>
        </div>
        <p style={styles.location}>{location}</p>
        <p style={styles.details}>
          {guests} Guests · {beds} Beds · {bathrooms} Bathroom · {size}
        </p>
        <div style={styles.rating}>
          <FaStar color="#F4C150" />
          <span>{rating}</span>
        </div>

        <div style={styles.accommodations}>
          <div style={styles.iconText}>
            <FaWifi /> Wi-Fi
          </div>
          <div style={styles.iconText}>
            <FaBed /> King size bed 2x2m
          </div>
          <div style={styles.iconText}>
            <FaCocktail /> Minibar
          </div>
          <div style={styles.iconText}>
            <MdBalcony /> Sea side balcony
          </div>
          <div style={styles.iconText}>
            <FaShieldAlt /> Digital safe
          </div>
          <div style={styles.iconText}>
            <FaVolumeMute /> Soundproof windows
          </div>
        </div>

        <p style={styles.description}>{description}</p>
        <button style={styles.bookButton}>Book the room</button>
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
  description: PropTypes.string.isRequired,
};

const styles = {
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: '15px',
    overflow: 'hidden',
    width: '360px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  imageContainer: {
    position: 'relative',
    height: '200px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  tourButton: {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    backgroundColor: '#2D6A4F',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
  },
  content: {
    padding: '16px',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  priceBlock: {
    textAlign: 'right',
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  season: {
    fontSize: '12px',
    color: '#777',
  },
  location: {
    color: '#666',
    marginTop: '4px',
  },
  details: {
    margin: '8px 0',
    fontSize: '14px',
    color: '#444',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    marginBottom: '8px',
  },
  accommodations: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
    marginBottom: '12px',
  },
  iconText: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
  },
  description: {
    fontSize: '13px',
    color: '#333',
    marginBottom: '12px',
  },
  bookButton: {
    backgroundColor: '#D4A373',
    color: 'black',
    padding: '12px',
    border: 'none',
    borderRadius: '25px',
    width: '100%',
    cursor: 'pointer',
  },
};

export default SuiteCard;