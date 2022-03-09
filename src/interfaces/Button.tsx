export interface Button {
  onClick?: () => void;
  width?: string;
  title?: string;
  className?: string;
  background?: string;
  type?: "submit" | "button";
}

export interface BigButtonModel extends Button {
  secondText: string;
}
