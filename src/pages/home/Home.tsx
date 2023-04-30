import { Typography, Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Widget from "../../components/widgets/widget";
import Pill from "../../components/pill/Pill";
import TableList from "../../components/Table/TableList";
import { BiWallet } from "react-icons/bi";
const header = ["Today", "This Month"];
const options = header.map((option) => ({ label: option, value: option }));
const COLORS = ["primary", "secondary", "error", "info", "success", "warning"];

const COLORS2 = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const widgetdata = [
  {
    title: "Net worth ",
    number: " $400,012,040",
    icon: "BsBriefcaseFill",
  },
  {
    title: "Total rewards",
    number: "$0",
    icon: "BsFillPeopleFill",
  },
  {
    title: "Total coins",
    number: "$5000",
    icon: "BsBriefcaseFill",
  },
  {
    title: "Total debts",
    number: "$121",
    icon: "BsFillPeopleFill",
  },
];
const Coins = [
  {
    imageUrl: "",
    name: "All",
  },
  {
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    name: "Bitcoin",
  },
  {
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    name: "Ethereum",
  },
  {
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png",
    name: "Litecoin",
  },
  {
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/6528.png",
    name: "Ripple",
  },
  {
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
    name: "Cardano",
  },
  {
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
    name: "Dogecoin",
  },
  {
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png",
    name: "Binance Coin",
  },
  {
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png",
    name: "Polkadot",
  },
  {
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
    name: "Chainlink",
  },
  {
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
    name: "Solana",
  },
];
function Home() {
  const { Title } = Typography;
  let time = new Date();
  // const homedata=useLoaderData()
  const [greeting, setGreeting] = useState<string>("");
  let hours = time.getHours();
  const [variant, setVariant] = useState<"filled" | "outlined">("outlined");

  const onClick = (clickedCoin: any) => {
    const updatedCoins = Coins.map((coin) => {
      if (coin.name === clickedCoin.name) {
        // Update variant of clicked coin
        return { ...coin, variant: "filled" };
      } else {
        // Keep variant of other coins
        return coin;
      }
    });
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    hours < 12
      ? setGreeting("GoodMorning")
      : hours <= 18 && hours >= 12
      ? setGreeting("GoodAfternoon")
      : setGreeting("GoodEvening");
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-5 flex-wrap">
        {Coins.map((coin, i) => {
          return (
            <div className="md:px-[1px] py-[4px] " key={i}>
              <Pill
                image={coin.imageUrl}
                text={coin.name}
                size="medium"
                color={COLORS[i % COLORS.length]}
                onClick={() => onClick(coin)}
                variant={variant}
              />
            </div>
          );
        })}
      </div>
      <div></div>
      <div className="flex w-full mb-5 md:items-center p-0 md:p-2 justify-around md:justify-between flex-wrap">
        {widgetdata.map((data, i) => {
          return (
            <Widget
              key={i}
              text={data.title}
              number={data.number}
              color={COLORS2[i % COLORS.length]}
              icon={data.icon}
            />
          );
        })}
      </div>
      <div className="bg-[#141414] shadow-md border p-2 mb-4 flex justify-between rounded border-gray-100  items-center">
        <div className="flex items-center justify-center gap-3">
          <BiWallet size={isMobile?24:30} color="white" />
          <span className="text-base md:text-xl text-white font-mono font-bold">Wallets</span>
        </div>

        <div>
          <p className="text-base md:text-xl font-bold font-mono text-white">$456,789,987</p>
        </div>
      </div>
      <TableList />
    </div>
  );
}

export default Home;

// export const homeLoader=async()=>{
//     const res =await fetch("")
//     return res.json()

// }
