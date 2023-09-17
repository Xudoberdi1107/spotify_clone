import clsx from "clsx";

// -------------------------------------------------------------------------------

import {
  FooterCreateWebsiteLink,
  FooterDocumentationLink,
  FooterNetLinks,
  FooterLinksPage,
} from "@/components/Layout/Footer/components";
import style from "@/components/Layout/Footer/sass/style.module.scss";
import footerRouteData from "@/components/Layout/Footer/footerRouteData";

// -------------------------------------------------------------------------------

function Footer() {
  console.log(footerRouteData);

  return (
    <div className={clsx(style.footer)}>
      <div className={clsx(style.footer_left)}>
        <FooterLinksPage data={footerRouteData.Footer_links_page} />
      </div>

      <div className={clsx(style.footer_right)}>
        <FooterNetLinks data={footerRouteData.Footer_net_links} />
      </div>

      <hr className={clsx(style.footer_midle_line)} />

      <div className={clsx(style.footer_buttom_left)}>
        <FooterDocumentationLink
          data={footerRouteData.Footer_documentation_link}
        />
      </div>

      <div className={clsx(style.footer_buttom_right)}>
        <FooterCreateWebsiteLink
          data={footerRouteData.Footer_create_website_link}
        />
      </div>
    </div>
  );
}

export default Footer;
