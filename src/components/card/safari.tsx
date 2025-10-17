import { Safari } from "@/components/ui/safari";
import imgsa from "@/../public/gptgreen.png";
export function SafariDemo() {
  return (
    <div className="w-[683px] mt-12">
      <Safari url="magicui.design" imageSrc={imgsa} />
    </div>
  );
}
