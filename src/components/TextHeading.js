function MakeTextBase(classNameDefault, $asDefault) {
  return ({ $as = null, children, className }) => {
    const AsComponent = $as || $asDefault;

    return (
      <AsComponent className={`${classNameDefault} ${className}`}>
        {children}
      </AsComponent>
    );
  };
}

export const TextHeading1 = MakeTextBase("text-heading1", "h1");
export const TextHeading2 = MakeTextBase("text-heading2", "h2");
export const TextHeading3 = MakeTextBase("text-heading3", "h3");
export const TextHeading4 = MakeTextBase("text-heading4", "h4");
export const TextHeading5 = MakeTextBase("text-heading5", "h5");
export const TextHeading6 = MakeTextBase("text-heading6", "h6");
export const TextParagraph1 = MakeTextBase("text-paragraph1", "p");
export const TextOverline = MakeTextBase("segment-topbar__overline", "span");
