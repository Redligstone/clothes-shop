import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={325}
    height={450}
    viewBox="0 0 325 520"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="1" rx="0" ry="0" width="325" height="400" /> 
    <rect x="60" y="440" rx="0" ry="0" width="200" height="30" /> 
    <rect x="110" y="500" rx="0" ry="0" width="100" height="25" />
  </ContentLoader>
)

export default Skeleton