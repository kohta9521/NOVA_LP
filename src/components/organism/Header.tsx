import React from "react";

// components
import Logo from "@/components/atoms/Logo";
// import ListItem from "../atoms/ListItem";
import ListBlockItem from "../atoms/ListBlockItem";
import ListItem from "../atoms/ListItem";

// icons
import { MdOutlinePerson } from "react-icons/md";
import { FaRegStickyNote } from "react-icons/fa";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full h-16 py-3 sm:h-20 sm:py-5 bg-white/12 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md border border-white/30">
        <div className="w-11/12 sm:w-11/12 h-10 mx-auto flex justify-between items-center">
          <Logo id="logo" link="/" size="medium" />
          <div className="hidden sm:w-auto sm:flex sm:items-center sm:justify-between gap-1.5">
            <ListItem
              id="about"
              title="サービス"
              link="/service"
              subItems={[
                {
                  id: "profile-group",
                  title: "構築",
                  items: [
                    {
                      id: "about-me",
                      icon: <MdOutlinePerson className="w-5 h-5" />,
                      name: "デザイン",
                      desc: "ロゴから名刺制作まで幅広く",
                      link: "/about/me",
                    },
                    {
                      id: "skills",
                      icon: <MdOutlinePerson className="w-4 h-4" />,
                      name: "スキル",
                      desc: "スキル",
                      link: "/about/skills",
                    },
                  ],
                },
                {
                  id: "work-group",
                  title: "運用",
                  items: [
                    {
                      id: "portfolio",
                      icon: <FaRegStickyNote className="w-4 h-4" />,
                      name: "ポートフォリオ",
                      desc: "ポートフォリオ",
                      link: "/about/portfolio",
                    },
                    {
                      id: "experience",
                      icon: <FaRegStickyNote className="w-4 h-4" />,
                      name: "経歴",
                      desc: "経歴",
                      link: "/about/experience",
                    },
                  ],
                },
                {
                  id: "work-group",
                  title: "事例ごと",
                  items: [
                    {
                      id: "portfolio",
                      icon: <FaRegStickyNote className="w-4 h-4" />,
                      name: "ポートフォリオサイト",
                      desc: "個人事業主の方など向け",
                      link: "/about/portfolio",
                    },
                    {
                      id: "experience",
                      icon: <FaRegStickyNote className="w-4 h-4" />,
                      name: "経歴",
                      desc: "経歴",
                      link: "/about/experience",
                    },
                  ],
                },
              ]}
            />
          </div>
          <div className="hidden sm:flex sm:w-auto gap-4">
            <ListBlockItem id="download" link="/download" text="資料DL" />
            <ListBlockItem id="contact" link="/contact" text="お問い合わせ" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
