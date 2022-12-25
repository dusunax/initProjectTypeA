import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { siteInfo } from "../../seo/siteInfo";
import { SiteInfoModel } from "../../models/siteInfo";

function Header() {
  const naivgate = useNavigate();

  // 메뉴 init
  const menu = [];
  for (let key in siteInfo) {
    const eachObj: SiteInfoModel = siteInfo[key as keyof typeof siteInfo];

    menu.push(
      <li key={eachObj.title} data-path={eachObj.path}>
        <a href={eachObj.path} rel={eachObj.url} className="site-gnb-link">
          {eachObj.title}
        </a>
      </li>
    );
  }

  const handleMenuClick = (event: any) => {
    event.preventDefault();
    if (!event.target.classList.contains("site-gnb-link")) return;

    const currentPage = event.target.closest("li").dataset.path;
    if (currentPage) {
      naivgate(currentPage);
    }
  };

  return (
    <Wrap>
      <GNB onClick={handleMenuClick}>
        <ul>{menu}</ul>
      </GNB>
    </Wrap>
  );
}

export default Header;

const Wrap = styled.header`
  width: 100%;
`;

const GNB = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
