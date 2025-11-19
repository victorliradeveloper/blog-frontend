import { StyledMainPage } from './MainPage.styled';
import { MainPageProps } from './types';

const MainPage = function (props: MainPageProps) {
  return <StyledMainPage>{props.children}</StyledMainPage>;
};

export default MainPage;
