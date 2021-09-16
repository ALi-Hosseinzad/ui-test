import React, { memo, Suspense } from "react";
import { Switch as RSwitch } from "react-router-dom";

function Switch({ children,fallback, ...others }) {
  return (
    <Suspense fallback={<h3>Loading ...</h3>}>
      <RSwitch {...others}>{children}</RSwitch>
    </Suspense>
  );
}

export default memo(Switch);
