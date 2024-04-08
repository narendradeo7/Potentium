import React from 'react';
import cn from "clsx";
import styles from "./Typography.module.css"

const Typography = ({ variant = "bodymd", weight = "medium", className, children }) => {
    const componentsMap = {
      display1: "div",
      display2: "div",
      heading1: "h1",
      heading1_1: "h1",
      heading2: "h2",
      heading3: "h3",
      heading4: "h4",
      heading5: "h5",
      heading6: "h6",
      bodyxl: "div",
      bodylg: "div",
      bodylg_mlh: "div",
      bodymd: "label",
      bodysm: "span",
    };
  
    const fontWeightMap = {
      100: "font-thin",
      200: "font-extralight",
      300: "font-light",
      400: "font-normal",
      500: "font-medium",
      600: "font-semibold",
      700: "font-bold",
      800: "font-extrabold",
    };
  
    const typographyStylesMap = {
      display1: styles.display1,
      display2: styles.display2,
      heading1: styles.heading1,
      heading1_1: styles.heading1_1,
      heading2: styles.heading2,
      heading3: styles.heading3,
      heading4: styles.heading4,
      heading5: styles.heading5,
      heading6: styles.heading6,
      bodyxl: styles.bodyxl,
      bodylg: styles.bodylg,
      bodylg_mlh: styles.bodylg_mlh,
      bodymd: styles.bodymd,
      bodysm: styles.bodysm,
    };
  
    const rootClassName = cn(className, {
      [fontWeightMap[weight]]: fontWeightMap.hasOwnProperty(weight),
      [typographyStylesMap[variant]]: typographyStylesMap.hasOwnProperty(variant),
    });
  
    const Component = componentsMap[variant];
  
    return <Component className={rootClassName}>{children}</Component>;
  };

export default Typography
