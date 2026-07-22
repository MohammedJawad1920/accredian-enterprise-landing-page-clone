import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true,
  ...props
}) => {
  const hoverStyles = hover
    ? "transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-neutral-300"
    : "";

  return (
    <div
      className={`rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs ${hoverStyles} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
