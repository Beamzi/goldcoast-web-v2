import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { webDevelopmentContent } from "@/content/services/web-development/web-development";

import NavSpacer from "@/components/ui/NavSpacer";

export default function WebDevelopment() {
  return (
    <>
      <StickyScroll
        stickyScrollContent={webDevelopmentContent.stickyScrollContent}
        navSpacer={<NavSpacer />}
      ></StickyScroll>
    </>
  );
}
