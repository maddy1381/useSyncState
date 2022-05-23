import React from "react";

function useSyncState(initialVal) {
  const [value, setValue] = React.useState(initialVal);
  const setter = (val) =>
    new Promise((resolve) => {
      setValue(val);
      resolve(val);
    });
  return [value, setter];
}

module.exports = useSyncState;
