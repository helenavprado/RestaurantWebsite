import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map((businessParam) => {
          return <Business key={businessParam.id} business={businessParam} />;
        })}
      </div>
    );
  }
}

export default BusinessList;
