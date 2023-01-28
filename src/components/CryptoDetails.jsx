import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Row, Col, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  FundOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useGetCryptoDetailsQuery } from "../services/cryptoAPI";

const { Text,Title } = Typography;
const { Option } = Select

const CryptoDetails = () => {
  const { coinId } = useParams()
  const [ timePeriod, settimePeriod ] = useState("7d")
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
  return <div>CryptoDetails</div>;
};

export default CryptoDetails;
