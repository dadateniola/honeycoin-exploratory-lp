// Types
import type { FeaturesData } from "./types";

// Images
import { CardsIcon, CoinsIcon, CreditCardIcon, WalletIcon } from "../svg/svg";

// Constants
export const FEATURES_DATA: FeaturesData[] = [
  {
    icon: <WalletIcon />,
    color: "#44CFCB",
    textColor: "#134e64",
    title: "Wallets and Payments",
    description:
      "Open multi-currency fiat wallets, send and receive money instantly, and make seamless global transactions — all in one place.",
  },
  {
    icon: <CoinsIcon />,
    color: "#E6789F",
    title: "Investments",
    description:
      "Put idle funds to work. Earn attractive yields with flexible access, so your cash grows without losing liquidity.",
  },
  {
    icon: <CardsIcon />,
    color: "#8066CC",
    title: "Virtual accounts",
    description:
      "Open multi-currency fiat wallets, send and receive money instantly, and make seamless global transactions — all in one place.",
  },
  {
    icon: <CreditCardIcon />,
    color: "#F8A720",
    title: "Virtual cards",
    description:
      "Open multi-currency fiat wallets, send and receive money instantly, and make seamless global transactions — all in one place.",
  },
];
