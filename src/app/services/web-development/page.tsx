import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { webDevelopmentContent } from "@/content/services/web-development/web-development";
export default function WebDevelopment() {
  return (
    <>
      <StickyScroll
        stickyScrollContent={webDevelopmentContent.stickyScrollContent}
      ></StickyScroll>
    </>
  );
}
