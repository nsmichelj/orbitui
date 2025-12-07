import { cva } from "class-variance-authority";

const baseClass =
  "inline-flex items-stretch w-fit *:focus:relative *:focus:z-10 has-[>[data-button-group]]:gap-2";
const buttonGroupVariants = cva(baseClass, {
  variants: {
    orientation: {
      vertical: [
        "flex-row",
        "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0",
        "[&>*:not(:last-child):not(:has(+_script:last-child))]:rounded-r-none",
        "[&>*:not(:first-child)>select]:rounded-l-none [&>*:not(:first-child)>select]:border-l-0",
        "[&>*:not(:last-child):not(:has(+_script:last-child))>select]:rounded-r-none",
        "[&>*:not(:first-child)>[data-trigger]]:rounded-l-none [&>*:not(:first-child)>[data-trigger]]:border-l-0",
        "[&>*:not(:last-child):not(:has(+_script:last-child))>[data-trigger]]:rounded-r-none",
      ],

      horizontal: [
        "flex-col",
        "[&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0",
        "[&>*:not(:last-child):not(:has(+_script:last-child))]:rounded-b-none",
        "[&>*:not(:first-child)>select]:rounded-t-none [&>*:not(:first-child)>select]:border-t-0",
        "[&>*:not(:last-child):not(:has(+_script:last-child))>select]:rounded-b-none",
        "[&>*:not(:first-child)>[data-trigger]]:rounded-t-none [&>*:not(:first-child)>[data-trigger]]:border-t-0",
        "[&>*:not(:last-child):not(:has(+_script:last-child))>[data-trigger]]:rounded-b-none",
      ],
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

export { buttonGroupVariants };
