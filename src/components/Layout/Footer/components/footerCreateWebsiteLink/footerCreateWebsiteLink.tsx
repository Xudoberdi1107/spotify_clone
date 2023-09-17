import clsx from "clsx";

// -------------------------------------------------------------------------------

import { Footer_create_website_link } from "@/types/typesFooter/index";
import style from "@/components/Layout/Footer/components/footerCreateWebsiteLink/footer_buttom_right.module.scss";
import LinkDirectin from "@/components/Layout/Footer/components/linkDirection";

// -------------------------------------------------------------------------------

type PropsType = {
  data: Footer_create_website_link;
};

// -------------------------------------------------------------------------------

function FooterCreateWebsiteLink(props: PropsType) {
  const { data } = props;

  return (
    <div className={clsx(style.footer_buttom_right)}>
      <ol>
        {data.map((li) => {
          return (
            <li key={li.id}>
              <LinkDirectin
                id={li.id}
                name={li.name}
                url={"https://www.albison.uz/"}
                target="_blank"
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default FooterCreateWebsiteLink;
