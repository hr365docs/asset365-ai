import * as React from "react";

function FeatureCommon(props) {
  
  return (
    <>
      {props.Features?.map((item) => {
        return (
          <div>
            <h2>
              {item.MainHeading}
            </h2>
            <p>
              {item.MainDescription}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default FeatureCommon;
