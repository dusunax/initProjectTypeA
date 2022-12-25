import { Helmet, HelmetProvider } from "react-helmet-async";
import { SiteInfoProps } from "../models/siteInfo";

export const HelmetComponent = ({ siteInfo }: SiteInfoProps) => {
  const { title, description, image, url } = siteInfo;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={url} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />

        <meta property="og:site_name" content="프로젝트A" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
      </Helmet>
    </HelmetProvider>
  );
};
