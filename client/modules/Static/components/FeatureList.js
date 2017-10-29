import * as React from 'react';
import featureConfig from './Features/translations';
// Import Components
import FeatureItem from './Features/FeatureItem';

function FeatureList() {
  const products = featureConfig.products;
  // console.log(products);
  return (
    <div className="listView">
      {
        products.items.map((item, i) => (
          <FeatureItem key={i} feature={item} />
        ))
      }
    </div>
  );
}

export default FeatureList;
