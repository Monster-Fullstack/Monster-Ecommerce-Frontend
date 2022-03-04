export interface Button {
  onClick?: () => void;
  width?: string;
  title?: string;
  className?: string;
  background?: string;
}

export interface BigButtonModel extends Button {
  secondText: string;
}
