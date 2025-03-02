import React from "react";

// components
import Logo from "@/components/atoms/Logo";
import ListItem from "../atoms/ListItem";
import ListBlockItem from "../atoms/ListBlockItem";

const Header = () => {
  return (
    <div className="w-full h-16 py-3 sm:h-20 sm:py-5">
      <div className="w-11/12 sm:w-10/12 h-10 mx-auto flex justify-between items-center">
        <Logo id="logo" link="/" size="medium" />
        <div className="hidden sm:w-auto sm:flex sm:items-center sm:justify-between gap-1.5">
          <ListItem
            id="about"
            title="初めての方へ"
            link="/about"
            subItems={[
              {
                id: "about-us",
                name: "私たちについて",
                link: "/about/us",
              },
              {
                id: "team",
                name: "チーム紹介",
                link: "/about/team",
              },
              {
                id: "faq",
                name: "よくあるご質問",
                link: "/about/faq",
              },
              {
                id: "flow",
                name: "制作の流れ",
                link: "/about/flow",
              },
            ]}
          />
          <ListItem
            id="plan"
            title="プラン・料金"
            link="/plans"
            subItems={[
              {
                id: "plans-list",
                name: "プラン一覧",
                link: "/plans",
              },
              {
                id: "website",
                name: "ホームページ制作",
                link: "/plans/website",
              },
              {
                id: "photo-package",
                name: "写真撮影 + HP制作パッケージ",
                link: "/plans/photo-package",
              },
              {
                id: "logo-package",
                name: "ロゴデザイン + HP制作パッケージ",
                link: "/plans/logo-package",
              },
              {
                id: "redesign",
                name: "HPデザインリニューアル",
                link: "/plans/redesign",
              },
              {
                id: "maintenance",
                name: "ホームページ運用・更新代行",
                link: "/plans/maintenance",
              },
              {
                id: "landing-page",
                name: "ランディングページ制作",
                link: "/plans/landing-page",
              },
            ]}
          />
          <ListItem id="works" title="実績紹介" link="/works" />
          <ListItem id="testimonials" title="お客様の声" link="/testimonials" />
          <ListItem id="blog" title="ブログ" link="/blog" />
          <ListItem id="news" title="お知らせ" link="/news" />
        </div>
        <div className="hidden sm:flex sm:w-auto gap-4">
          <ListBlockItem id="download" link="/download" text="資料DL" />
          <ListBlockItem id="contact" link="/contact" text="お問い合わせ" />
        </div>
      </div>
    </div>
  );
};

export default Header;
