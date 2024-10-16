import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/providers/theme-provider";

import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>{children}</ClerkProvider>
  );
};

export default Layout;
