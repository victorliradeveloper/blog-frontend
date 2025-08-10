export type IHeaderProps = {
  scrollIntoView: () => void;
  className: string;
  onOpenSearchModal?: () => void;
  onResetSearch?: () => void;
  openMobileMenu: boolean;
  setOpenMobileMenu: (a: boolean) => void
};

export type UrlParams = {
  page: string;
  category: string;
};
