import clsx from "clsx";

// -------------------------------------------------------------------------------

import { Footer_links_page_type } from "@/types/typesFooter/index";
import style from "@/components/Layout/Footer/components/footerLinksPage/footer_left.module.scss";
import LinkDirectin from "@/components/Layout/Footer/components/linkDirection";

// -------------------------------------------------------------------------------

type PropsType = {
  data: Footer_links_page_type;
};

// -------------------------------------------------------------------------------

function FooterLinksPage(props: PropsType) {
  const { data } = props;
  console.log(data, "logg");

  return (
    <div className={clsx(style.footer_left)}>
      {data.map((e) => {
        return (
          <div className={clsx(style.footer_left_box)}>
            <h3>{e.categories}</h3>
            <ul className={clsx(style.footer_left_box_ul)}>
              {e.data.map((li) => {
                return (
                  <li key={li.id}>
                    <LinkDirectin id={li.id} name={li.name} url={li.url} />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default FooterLinksPage;
