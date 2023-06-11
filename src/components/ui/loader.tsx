import { ColorRing } from "react-loader-spinner";

const Loader = () => (
  <ColorRing
    visible
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperClass="blocks-wrapper"
    colors={["#4158D0", "#4158D0", "#C850C0", "#FFCC70", "#FFCC70"]}
  />
);

export default Loader;
