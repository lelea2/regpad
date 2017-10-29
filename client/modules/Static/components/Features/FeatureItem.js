import React, { PropTypes } from 'react';

function FeatureItem(props) {
  const {
    feature,
  } = props;
  return (
    <div>
      <div className="left">
        <h3>{feature.title}</h3>
        <p>{feature.subtitle}</p>
      </div>
      <div className="name">
        {feature.description}
      </div>
    </div>
  );
}

FeatureItem.propTypes = {
  feature: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeatureItem;
