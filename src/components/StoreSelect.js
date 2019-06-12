import React from "react";

function StoreSelect(props) {
  const stores = props.stores.map(store => {
    return (
      <option key={store} value={store}>
        {store}
      </option>
    );
  });
  return (
    <div className="search-brand">
      <label htmlFor="brand-dropdown">Which Store?</label>
      <select id="brand-dropdown" onChange={props.onChange} multiple>
        {stores}
      </select>
    </div>
  );
}

export default StoreSelect;
