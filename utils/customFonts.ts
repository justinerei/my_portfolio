import localFont from "next/font/local";

const Inter = localFont({
  src: [
    {
      path: "../app/fonts/Inter_18pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

const PlusJakartaSans = localFont({
  src: [
    {
      path: "../app/fonts/PlusJakartaSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../app/fonts/PlusJakartaSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-plus-jakarta-sans",
});

export { Inter, PlusJakartaSans };
