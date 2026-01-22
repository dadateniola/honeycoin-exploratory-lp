// Types
import type { FeaturesData } from "./types";

// Images
import { CardsIcon, CoinsIcon, CreditCardIcon, WalletIcon } from "../svg/svg";

// Constants
export const FEATURES_DATA: FeaturesData[] = [
  {
    icon: <WalletIcon />,
    color: "#44CFCB",
    artboard: "Bento 7",
    textColor: "#134e64",
    title: "Wallets and Payments",
    description:
      "Open multi-currency fiat wallets, send and receive money instantly, and make seamless global transactions — all in one place.",
  },
  {
    icon: <CoinsIcon />,
    color: "#E6789F",
    artboard: "Bento 8",
    title: "Investments",
    description:
      "Put idle funds to work. Earn attractive yields with flexible access, so your cash grows without losing liquidity.",
  },
  {
    icon: <CardsIcon />,
    color: "#8066CC",
    artboard: "Bento 9",
    title: "Virtual accounts",
    description:
      "Open multi-currency fiat wallets, send and receive money instantly, and make seamless global transactions — all in one place.",
  },
  {
    icon: <CreditCardIcon />,
    color: "#F8A720",
    artboard: "Bento 10",
    title: "Virtual cards",
    description:
      "Open multi-currency fiat wallets, send and receive money instantly, and make seamless global transactions — all in one place.",
  },
];
