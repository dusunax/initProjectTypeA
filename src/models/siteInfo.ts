export type SiteInfoModel = {
  title: string;
  description: string;
  image: string;
  path: string;
  url: string;
};

export interface SiteInfoProps {
  [siteInfo: string]: SiteInfoModel;
}
