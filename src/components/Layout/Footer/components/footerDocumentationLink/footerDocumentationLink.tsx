import clsx from "clsx";

// -------------------------------------------------------------------------------

import style from "@/components/Layout/Footer/components/footerDocumentationLink/footer_buttom_left.module.scss";
import { Footer_documentation_link_type } from "@/types/typesFooter/index";
import LinkDirectin from "@/components/Layout/Footer/components/linkDirection";

// -------------------------------------------------------------------------------

type PrpsType = {
  data: Footer_documentation_link_type;
};

// -------------------------------------------------------------------------------

function FooterDocumentationLink(props: PrpsType) {
  const { data } = props;

  return (
    <div className={clsx(style.footer_buttom_left)}>
      <ul className={clsx(style.footer_buttom_left_ul)}>
        {data.map((doc) => {
          return (
            <li key={doc.id}>
              <LinkDirectin id={doc.id} name={doc.name} url={doc.url} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterDocumentationLink;
