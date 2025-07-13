export type IProps = {
  date: string;
  style?: React.CSSProperties;
  postImage: string;
  title: string;
  content: string;
  author: string;
  id: number;
  category: string;
  metaTagTitle: string;
  metaTagDescription: string;
  className?: string;
  aos_delay: string;
  aos_type: string;
  hover_animation: number;
  onUpdateFavoritSource: string;
  onDisplayLoginAlert?: () => void;
};
