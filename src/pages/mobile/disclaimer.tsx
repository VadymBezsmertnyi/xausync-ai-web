import Disclaimer from "../disclaimer";

// types
import { NextPageWithLayout } from "../_app";

// components
import LayoutMobile from "@/components/LayoutMobile/LayoutMobile";

export default Disclaimer;

(Disclaimer as NextPageWithLayout).getLayout = function getLayout(page) {
  return <LayoutMobile>{page}</LayoutMobile>;
};
