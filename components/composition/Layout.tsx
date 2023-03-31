import React from "react";

// add main layout styles
// consider other composition classes -- differing page layouts, etc

function Layout(children: React.ReactNode) {
  return <div className="layout">{children}</div>;
}

export default Layout;
