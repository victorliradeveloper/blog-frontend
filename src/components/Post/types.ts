import { Post } from "@/presenters/Post";


export interface IProps extends Post {
  aos_delay?: string;
  aos_type?: string;
  style?: React.CSSProperties;
  hover_animation?: number;
  onDisplayLoginAlert?: () => void;
  onUpdateFavoritSource: string;
}
