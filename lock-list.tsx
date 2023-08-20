import DashboardLayout from "Layouts/DashboardLayout";
import LockTable from "components/Tables/LockTable";
import SearchIcon from "icons/SearchIcon";
import SettingsIcon from "icons/SettingsIcon";
import React, { useEffect, useState } from "react";

import { chainInfo } from "../../../constant/constants";
import TOKENTIMELOCK_ABI from "../../../constant/tokentimelock_abi.json";
import TOKEN_ABI from "../../../constant/token-abi.json";
import { useAppContext } from "context/AppContext";
import { CircularProgress } from "@mui/material";
import { ScaleLoader } from "react-spinners";
import { axiosClient } from "services/axios.config";
import Head from "next/head";

const LockToken = () => {
  const [activeTab, setActiveTab] = useState("All Locks");
  const app = useAppContext();

  const [lockedTokens, setLockedTokens] = useState([]);
  const [lockedUserTokens, setLockedUserTokens] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getAllTokensContract = async () => {
    setLoading(true);
    try {
      const { data } = await axiosClient.get(`/token-lock?search=${search}`);

      setLockedTokens(data.data);
      setLoading(false);
    } catch (e) {
      console.log("Error", e);
      setLoading(false);
    }
  };

  const getAllTokensUser = async () => {
    setLoading(true);
    try {

      const { data } = await axiosClient.get(
        `/token-lock?search=${search}&ownersAddress=${app.accountAddress}`
      );

      setLockedUserTokens(data.data);
      setLoading(false);
    } catch (e) {
      console.log("Error", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab.toLowerCase().includes("my")) {
      getAllTokensUser();
      return;
    }
    getAllTokensContract();
  }, [app, activeTab, search]);

  return (
    <DashboardLayout title="Exxpad" subTitle="Locked Tokens">
      <div className="font-inter px-5">
        <div className="sm:flex justify-between items-center mb-[26px]">
          <h1 className="  text-[24px] leading-[28px] md:text-[30px] md:leading-[38px] text-[#18181B] mb-4 md:mb-0">
            Lock List
          </h1>

          <div className="h-[48px] bg-white rounded-[24px] border border-[#D1D1D6] lg:w-[320px] flex items-center px-4 gap-x-2">
            <SearchIcon />
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              className=" h-[42px] w-full font-inter placeholder:text-[#B9B8BC] placeholder:text-[16px] placeholder:leading-[19px] text-[16px] leading-[19px]"
              placeholder="Search"
            />
          </div>

          {/* <div className="relative">
            <input
              type="text"
              placeholder="Search anything"
              className="w-full sm:max-w-[400px] placeholder:text-[#B9B8BC] border border-[#D1D1D6] pl-[38px] pr-4 py-3 rounded-[24px]"
            />
            <div className="absolute top-3.5 left-3">
              <SearchIcon />
            </div>
          </div> */}
        </div>

        <div className="sm:flex justify-between items-center mb-[64px]">
          <div className="grid grid-cols-2">
            <TabButton
              title="All Locks"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabButton
              title="My Locks"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>

        {loading ? (
          <div className="w-full h-[60vh] flex justify-center items-center">
            <ScaleLoader color="#DCD6FF" />
          </div>
        ) : (
          <div className="">
            {activeTab.toLowerCase().includes("all") ? (
              <LockTable lockedToken={lockedTokens} />
            ) : (
              <LockTable lockedToken={lockedUserTokens} />
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default LockToken;

export const TabButton = ({ title, activeTab, setActiveTab }) => {
  const isActive = activeTab.toLowerCase() === title.toLowerCase();

  return (
    <div
      onClick={() => setActiveTab(title)}
      className={`cursor-pointer px-[14px] py-[10px] h-full flex justify-center items-center w-full transition-all delay-75 ease-in-out ${
        isActive ? "bg-white rounded-[24px]" : "bg-transparent"
      }`}
    >
      <h1
        className={`  m-0 text-sm md:text-base whitespace-nowrap transition-colors delay-75 ease-in-out ${
          isActive ? "text-[#26272B]" : "text-[#70707B]"
        }`}
      >
        {title}
      </h1>
    </div>
  );
};
