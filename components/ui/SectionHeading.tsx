import React from "react";

export interface SectionHeadingProps {
  title: React.ReactNode;
  eyebrow?: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center" | "right";
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  eyebrow,
  subtitle,
  align = "center",
  as: Component = "h2",
  className = "",
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto max-w-3xl",
    right: "text-right items-end ml-auto max-w-3xl",
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} ${className}`.trim()}>
      {eyebrow && (
        <span className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <Component className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900">
        {title}
      </Component>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
