import svgPaths from "./svg-7brrwytxdk";
import imgEllipse50 from "figma:asset/0411360e037b0097b4b3cf9d88634ecf80470462.png";
import imgImage from "figma:asset/018d197bc43b37de8d99871baf7864962c8cede7.png";
import imgImage1 from "figma:asset/6d8338622c2712618fa1dedeaeeb4f39330e4dd8.png";
import { useState, useRef, useEffect } from "react";
import SideNavProposalDesktopNew from "./SideNavProposalDesktop";

function ScrollableCarousel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 100);
    }
  };

  return (
    <div className="relative w-full">
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className={`overflow-x-auto overflow-y-hidden scrollbar-hide ${className}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>
    </div>
  );
}

function Component24LogoDoordash() {
  return (
    <div className="absolute inset-[26.71%_8.33%_26.62%_8.33%]" data-name=".24/_/logo/doordash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6204 14.9074">
        <g id=".24/_/logo/doordash">
          <path d={svgPaths.p26267780} fill="var(--fill-0, #EB1700)" id="Logo" />
        </g>
      </svg>
    </div>
  );
}

function Logo24LogoDoordash() {
  return (
    <div className="relative shrink-0 size-[31.944px]" data-name="logo/24-logo-doordash">
      <Component24LogoDoordash />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-[188px]">
      <Logo24LogoDoordash />
      <p className="css-ew64yg font-['TT_Norms-Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#eb1700] text-[14.931px] tracking-[0.7466px]">DOORDASH</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex font-['DD_Norms-Medium',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[#191919] text-center text-ellipsis tracking-[-0.01px]">
      <div className="css-g0mm18 flex flex-col justify-center overflow-hidden relative shrink-0 text-[14px]">
        <p className="css-ew64yg leading-[20px] overflow-hidden">{`Now `}</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center overflow-hidden relative shrink-0 text-[16px]">
        <p className="css-ew64yg leading-[20px] overflow-hidden">·</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center overflow-hidden relative shrink-0 text-[14px]">
        <p className="css-ew64yg leading-[20px] overflow-hidden">Current location</p>
      </div>
    </div>
  );
}

function Component16ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/chevron-down">
          <path d={svgPaths.p605ad00} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ButtonToggle() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Button Toggle">
      <Frame16 />
      <Component16ChevronDown />
    </div>
  );
}

function IconLead() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Lead.">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Lead.">
          <path clipRule="evenodd" d={svgPaths.p3768ee00} fill="var(--fill-0, #191919)" fillRule="evenodd" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-[#f7f7f7] h-[32px] relative rounded-[16px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
          <IconLead />
          <p className="css-g0mm18 flex-[1_0_0] font-['TT_Norms-Medium',sans-serif] h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#606060] text-[14px] text-ellipsis">Search DoorDash</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f7f7f7] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Field1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[420px]" data-name="Field">
      <Field />
    </div>
  );
}

function FieldContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[32px] items-center min-h-px min-w-px relative" data-name="Field Container">
      <Field1 />
    </div>
  );
}

function Component16NotifyLine() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/notify-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/notify-line">
          <path clipRule="evenodd" d={svgPaths.p20c6e400} fill="var(--fill-0, #191919)" fillRule="evenodd" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex items-center justify-center p-[8px] relative rounded-[200px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#f1f1f1] border-solid inset-0 pointer-events-none rounded-[200px]" />
      <Component16NotifyLine />
    </div>
  );
}

function Component16PersonUserLine() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/person-user-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/person-user-line">
          <g id="Primary">
            <path clipRule="evenodd" d={svgPaths.pfc72c30} fill="var(--fill-0, #191919)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p35fa3700} fill="var(--fill-0, #191919)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex items-center justify-center p-[8px] relative rounded-[200px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#f1f1f1] border-solid inset-0 pointer-events-none rounded-[200px]" />
      <Component16PersonUserLine />
    </div>
  );
}

function Component16CartLine() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/cart-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.0002">
        <g id="16/cart-line">
          <g id="Primary">
            <path d={svgPaths.p3e580800} fill="var(--fill-0, #191919)" />
            <path d={svgPaths.p1339ad00} fill="var(--fill-0, #191919)" />
            <path clipRule="evenodd" d={svgPaths.p2111e80} fill="var(--fill-0, #191919)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton2({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-[#f1f1f1] content-stretch flex items-center justify-center p-[8px] relative rounded-[200px] shrink-0 cursor-pointer hover:bg-[#e7e7e7] transition-colors" 
      data-name="Icon Button"
    >
      <div aria-hidden="true" className="absolute border border-[#f1f1f1] border-solid inset-0 pointer-events-none rounded-[200px]" />
      <Component16CartLine />
    </div>
  );
}

function Frame15({ onCartClick }: { onCartClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame6 />
      <ButtonToggle />
      <FieldContainer />
      <IconButton />
      <IconButton1 />
      <IconButton2 onClick={onCartClick} />
    </div>
  );
}

function TopNavigation({ onCartClick }: { onCartClick?: () => void }) {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start justify-center left-0 right-0 pl-[20px] pr-[16px] py-[12px] top-0 z-20" data-name="Top Navigation">
      <Frame15 onCartClick={onCartClick} />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e7e7e7]" />
    </div>
  );
}

function Component24HomeLineFillAlt() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="24/home-line/fill-alt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="24/home-line/fill-alt">
          <g id="Vector 292"></g>
          <path clipRule="evenodd" d={svgPaths.p1dd97400} fill="var(--fill-0, #191919)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[3]" data-name="Icon Container">
      <Component24HomeLineFillAlt />
    </div>
  );
}

function NavCellCoreV() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-full" data-name="Nav Cell Core v3">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center justify-center px-[16px] py-[4px] relative size-full">
          <IconContainer />
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Home">
      <NavCellCoreV />
    </div>
  );
}

function Component24GroceryLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="24/grocery-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="24/grocery-line">
          <g id="Primary">
            <path clipRule="evenodd" d={svgPaths.p3dec9530} fill="var(--fill-0, #191919)" fillRule="evenodd" />
            <path d={svgPaths.p1fd62a00} fill="var(--fill-0, #191919)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[3]" data-name="Icon Container">
      <Component24GroceryLine />
    </div>
  );
}

function SubLabelDescContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sub. + Label + Desc. Container">
      <p className="css-g0mm18 font-['TT_Norms-Medium',sans-serif] leading-[20px] not-italic opacity-0 overflow-hidden relative shrink-0 text-[#191919] text-[14px] text-ellipsis w-full">{`Vertical `}</p>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Content Container">
      <SubLabelDescContainer />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-[32px] min-w-px relative z-[2]" data-name="Body">
      <ContentContainer />
    </div>
  );
}

function NavCellCoreV1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[8px] shrink-0 w-full" data-name="Nav Cell Core v3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[4px] relative w-full">
          <IconContainer1 />
          <Body />
        </div>
      </div>
    </div>
  );
}

function Grocery() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[56px]" data-name="Grocery">
      <NavCellCoreV1 />
    </div>
  );
}

function Component24RetailLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="24/retail-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="24/retail-line">
          <g id="Primary">
            <path d={svgPaths.p7333d00} fill="var(--fill-0, #191919)" />
            <path clipRule="evenodd" d={svgPaths.p262f0c80} fill="var(--fill-0, #191919)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[3]" data-name="Icon Container">
      <Component24RetailLine />
    </div>
  );
}

function SubLabelDescContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sub. + Label + Desc. Container">
      <p className="css-g0mm18 font-['TT_Norms-Medium',sans-serif] leading-[20px] not-italic opacity-0 overflow-hidden relative shrink-0 text-[#191919] text-[14px] text-ellipsis w-full">Vertical</p>
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Content Container">
      <SubLabelDescContainer1 />
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-[32px] min-w-px relative z-[2]" data-name="Body">
      <ContentContainer1 />
    </div>
  );
}

function NavCellCoreV2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[8px] shrink-0 w-full" data-name="Nav Cell Core v3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[4px] relative w-full">
          <IconContainer2 />
          <Body1 />
        </div>
      </div>
    </div>
  );
}

function Retail() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[56px]" data-name="Retail">
      <NavCellCoreV2 />
    </div>
  );
}

function Component24PetsLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="24/pets-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="24/pets-line">
          <g id="Primary">
            <path clipRule="evenodd" d={svgPaths.p1b1fd680} fill="#191919" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p20d73000} fill="#191919" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p6925c80} fill="#191919" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2be98000} fill="#191919" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p26707380} fill="#191919" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[3]" data-name="Icon Container">
      <Component24PetsLine />
    </div>
  );
}

function SubLabelDescContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sub. + Label + Desc. Container">
      <p className="css-g0mm18 font-['TT_Norms-Medium',sans-serif] leading-[20px] not-italic opacity-0 overflow-hidden relative shrink-0 text-[#191919] text-[14px] text-ellipsis w-full">Vertical</p>
    </div>
  );
}

function ContentContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Content Container">
      <SubLabelDescContainer2 />
    </div>
  );
}

function Body2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-[32px] min-w-px relative z-[2]" data-name="Body">
      <ContentContainer2 />
    </div>
  );
}

function NavCellCoreV3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[8px] shrink-0 w-full" data-name="Nav Cell Core v3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[4px] relative w-full">
          <IconContainer3 />
          <Body2 />
        </div>
      </div>
    </div>
  );
}

function DynamicSlot() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[56px]" data-name="Dynamic Slot 6">
      <NavCellCoreV3 />
    </div>
  );
}

function Component24DealsLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="24/deals-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="24/deals-line">
          <g id="Primary">
            <path clipRule="evenodd" d={svgPaths.p18bacd00} fill="#191919" fillRule="evenodd" />
            <path d={svgPaths.p1be65580} fill="#191919" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[3]" data-name="Icon Container">
      <Component24DealsLine />
    </div>
  );
}

function SubLabelDescContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sub. + Label + Desc. Container">
      <p className="css-g0mm18 font-['TT_Norms-Medium',sans-serif] leading-[20px] not-italic opacity-0 overflow-hidden relative shrink-0 text-[#191919] text-[14px] text-ellipsis w-full">Vertical</p>
    </div>
  );
}

function ContentContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Content Container">
      <SubLabelDescContainer3 />
    </div>
  );
}

function Body3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-[32px] min-w-px relative z-[2]" data-name="Body">
      <ContentContainer3 />
    </div>
  );
}

function NavCellCoreV4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[8px] shrink-0 w-full" data-name="Nav Cell Core v3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[4px] relative w-full">
          <IconContainer4 />
          <Body3 />
        </div>
      </div>
    </div>
  );
}

function DynamicSlot1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[56px]" data-name="Dynamic Slot 7">
      <NavCellCoreV4 />
    </div>
  );
}

function Component24FlowerLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="24/flower-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="24/flower-line">
          <path clipRule="evenodd" d={svgPaths.p29e74900} fill="var(--fill-0, #191919)" fillRule="evenodd" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[3]" data-name="Icon Container">
      <Component24FlowerLine />
    </div>
  );
}

function SubLabelDescContainer4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sub. + Label + Desc. Container">
      <p className="css-g0mm18 font-['TT_Norms-Medium',sans-serif] leading-[20px] not-italic opacity-0 overflow-hidden relative shrink-0 text-[#191919] text-[14px] text-ellipsis w-full">Vertical</p>
    </div>
  );
}

function ContentContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Content Container">
      <SubLabelDescContainer4 />
    </div>
  );
}

function Body4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-[32px] min-w-px relative z-[2]" data-name="Body">
      <ContentContainer4 />
    </div>
  );
}

function NavCellCoreV5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[8px] shrink-0 w-full" data-name="Nav Cell Core v3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[4px] relative w-full">
          <IconContainer5 />
          <Body4 />
        </div>
      </div>
    </div>
  );
}

function DynamicSlot2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[56px]" data-name="Dynamic Slot 8">
      <NavCellCoreV5 />
    </div>
  );
}

function Component24PharmacyLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="24/pharmacy-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="24/pharmacy-line">
          <path clipRule="evenodd" d={svgPaths.p2a021a00} fill="var(--fill-0, #191919)" fillRule="evenodd" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[3]" data-name="Icon Container">
      <Component24PharmacyLine />
    </div>
  );
}

function SubLabelDescContainer5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sub. + Label + Desc. Container">
      <p className="css-g0mm18 font-['TT_Norms-Medium',sans-serif] leading-[20px] not-italic opacity-0 overflow-hidden relative shrink-0 text-[#191919] text-[14px] text-ellipsis w-full">Vertical</p>
    </div>
  );
}

function ContentContainer5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Content Container">
      <SubLabelDescContainer5 />
    </div>
  );
}

function Body5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-[32px] min-w-px relative z-[2]" data-name="Body">
      <ContentContainer5 />
    </div>
  );
}

function NavCellCoreV6() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[8px] shrink-0 w-full" data-name="Nav Cell Core v3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[4px] relative w-full">
          <IconContainer6 />
          <Body5 />
        </div>
      </div>
    </div>
  );
}

function DynamicSlot3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[56px]" data-name="Dynamic Slot 9">
      <NavCellCoreV6 />
    </div>
  );
}

function Component24PharmacyLine1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="24/pharmacy-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="24/pharmacy-line">
          <path clipRule="evenodd" d={svgPaths.p2a021a00} fill="var(--fill-0, #191919)" fillRule="evenodd" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[3]" data-name="Icon Container">
      <Component24PharmacyLine1 />
    </div>
  );
}

function SubLabelDescContainer6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sub. + Label + Desc. Container">
      <p className="css-g0mm18 font-['TT_Norms-Medium',sans-serif] leading-[20px] not-italic opacity-0 overflow-hidden relative shrink-0 text-[#191919] text-[14px] text-ellipsis w-full">Vertical</p>
    </div>
  );
}

function ContentContainer6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Content Container">
      <SubLabelDescContainer6 />
    </div>
  );
}

function Body6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-[32px] min-w-px relative z-[2]" data-name="Body">
      <ContentContainer6 />
    </div>
  );
}

function NavCellCoreV7() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[8px] shrink-0 w-full" data-name="Nav Cell Core v3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[4px] relative w-full">
          <IconContainer7 />
          <Body6 />
        </div>
      </div>
    </div>
  );
}

function DynamicSlot4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[56px]" data-name="Dynamic Slot 10">
      <NavCellCoreV7 />
    </div>
  );
}

function Component24PharmacyLine2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="24/pharmacy-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="24/pharmacy-line">
          <path clipRule="evenodd" d={svgPaths.p2a021a00} fill="var(--fill-0, #191919)" fillRule="evenodd" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[3]" data-name="Icon Container">
      <Component24PharmacyLine2 />
    </div>
  );
}

function SubLabelDescContainer7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sub. + Label + Desc. Container">
      <p className="css-g0mm18 font-['TT_Norms-Medium',sans-serif] leading-[20px] not-italic opacity-0 overflow-hidden relative shrink-0 text-[#191919] text-[14px] text-ellipsis w-full">Vertical</p>
    </div>
  );
}

function ContentContainer7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Content Container">
      <SubLabelDescContainer7 />
    </div>
  );
}

function Body7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-[32px] min-w-px relative z-[2]" data-name="Body">
      <ContentContainer7 />
    </div>
  );
}

function NavCellCoreV8() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[8px] shrink-0 w-full" data-name="Nav Cell Core v3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[4px] relative w-full">
          <IconContainer8 />
          <Body7 />
        </div>
      </div>
    </div>
  );
}

function DynamicSlot5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[56px]" data-name="Dynamic Slot 11">
      <NavCellCoreV8 />
    </div>
  );
}

function Component24PharmacyLine3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="24/pharmacy-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="24/pharmacy-line">
          <path clipRule="evenodd" d={svgPaths.p2a021a00} fill="var(--fill-0, #191919)" fillRule="evenodd" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[3]" data-name="Icon Container">
      <Component24PharmacyLine3 />
    </div>
  );
}

function SubLabelDescContainer8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sub. + Label + Desc. Container">
      <p className="css-g0mm18 font-['TT_Norms-Medium',sans-serif] leading-[20px] not-italic opacity-0 overflow-hidden relative shrink-0 text-[#191919] text-[14px] text-ellipsis w-full">Vertical</p>
    </div>
  );
}

function ContentContainer8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Content Container">
      <SubLabelDescContainer8 />
    </div>
  );
}

function Body8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-[32px] min-w-px relative z-[2]" data-name="Body">
      <ContentContainer8 />
    </div>
  );
}

function NavCellCoreV9() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[8px] shrink-0 w-full" data-name="Nav Cell Core v3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[4px] relative w-full">
          <IconContainer9 />
          <Body8 />
        </div>
      </div>
    </div>
  );
}

function DynamicSlot6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[56px]" data-name="Dynamic Slot 12">
      <NavCellCoreV9 />
    </div>
  );
}

function Account() {
  return <div className="content-stretch flex flex-col items-start shrink-0 w-full" data-name="Account" />;
}

function PrimarySlot() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px overflow-clip py-[12px] relative w-full" data-name="Primary Slot">
      <Home />
      <Grocery />
      <Retail />
      <DynamicSlot />
      <DynamicSlot1 />
      <DynamicSlot2 />
      <DynamicSlot3 />
      <DynamicSlot4 />
      <DynamicSlot5 />
      <DynamicSlot6 />
      <Account />
      <div className="absolute bg-white h-[40px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[12.06px] w-[4px]" />
    </div>
  );
}

function MobileTopNav() {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 h-[56px] bg-white z-10 flex items-center px-[16px] gap-[16px] border-b border-[#e7e7e7]">
      <button className="flex items-center justify-center size-[24px]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 12H21" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 6H21" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 18H21" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <svg width="138" height="24" viewBox="0 0 188 32" fill="none">
        <path d="M27.8857 12.0954C26.7248 9.90544 24.4557 8.55981 22.0019 8.55981H3.29534C2.95234 8.55981 2.66211 8.85005 2.66211 9.21943C2.66211 9.37774 2.74126 9.53605 2.8468 9.66798L6.91001 13.7576C7.27939 14.127 7.75432 14.3381 8.25562 14.3117H21.4215C22.3713 14.3117 23.1365 15.0505 23.1365 16.0003C23.1365 16.9502 22.3977 17.7153 21.4479 17.7153H12.398C12.055 17.7153 11.7648 18.0056 11.7648 18.375C11.7648 18.5333 11.8439 18.6916 11.9494 18.8235L16.0127 22.9131C16.382 23.2825 16.857 23.4672 17.3847 23.4672H21.5006C26.8303 23.4672 30.8671 17.7681 27.8857 12.0954Z" fill="#EB1700"/>
        <path d="M45.2881 11.5482H49.1702C52.2311 11.5482 54.5454 13.8625 54.5454 16.7741C54.5454 19.6857 52.2311 22 49.1702 22H45.2881V11.5482ZM49.1702 13.5639H47.5278V19.9843H49.1702C50.8873 19.9843 52.3058 18.5658 52.3058 16.7741C52.3058 14.9824 50.962 13.5639 49.1702 13.5639ZM59.0959 16.7741C59.0959 18.7152 60.589 20.2083 62.4554 20.2083C64.3218 20.2083 65.8149 18.7152 65.8149 16.7741C65.8149 14.8331 64.3218 13.34 62.4554 13.34C60.589 13.34 59.0959 14.8331 59.0959 16.7741ZM56.7816 16.7741C56.7816 13.7879 59.2452 11.3243 62.4554 11.3243C65.6656 11.3243 68.1292 13.7879 68.1292 16.7741C68.1292 19.7603 65.6656 22.224 62.4554 22.224C59.2452 22.224 56.7816 19.7603 56.7816 16.7741ZM72.6885 16.7741C72.6885 18.7152 74.1816 20.2083 76.048 20.2083C77.9144 20.2083 79.4075 18.7152 79.4075 16.7741C79.4075 14.8331 77.9144 13.34 76.048 13.34C74.1816 13.34 72.6885 14.8331 72.6885 16.7741ZM70.3742 16.7741C70.3742 13.7879 72.8378 11.3243 76.048 11.3243C79.2582 11.3243 81.7218 13.7879 81.7218 16.7741C81.7218 19.7603 79.2582 22.224 76.048 22.224C72.8378 22.224 70.3742 19.7603 70.3742 16.7741ZM84.564 22V11.5482H89.1926C91.283 11.5482 92.7761 13.0712 92.7761 14.9824C92.7761 17.222 90.9097 18.0433 90.9097 18.0433L93.1494 22H90.7604L88.7447 18.3419H86.8036V22H84.564ZM90.5364 14.9824C90.5364 14.1612 89.9392 13.5639 89.118 13.5639H86.8036V16.3262H89.118C89.9392 16.3262 90.5364 15.7289 90.5364 14.9824ZM95.911 11.5482H99.7931C102.854 11.5482 105.168 13.8625 105.168 16.7741C105.168 19.6857 102.854 22 99.7931 22H95.911V11.5482ZM99.7931 13.5639H98.1507V19.9843H99.7931C101.51 19.9843 102.929 18.5658 102.929 16.7741C102.929 14.9824 101.585 13.5639 99.7931 13.5639ZM112.779 17.5953L111.51 14.1612L110.241 17.5953H112.779ZM113.526 19.5364H109.494L108.598 22H106.209L110.315 11.5482H112.704L116.811 22H114.422L113.526 19.5364ZM123.611 18.9391C123.611 16.9981 118.46 18.1179 118.46 14.3851C118.46 12.7427 119.878 11.3243 122.118 11.3243C124.432 11.3243 125.552 12.7427 125.552 12.7427L124.208 14.1612C124.208 14.1612 123.462 13.2653 122.267 13.2653C121.372 13.2653 120.849 13.7879 120.849 14.3851C120.849 16.3262 126 15.2063 126 18.9391C126 20.8055 124.582 22.224 122.043 22.224C119.43 22.224 118.087 20.5069 118.087 20.5069L119.43 19.1631C119.43 19.1631 120.326 20.2829 121.894 20.2829C123.014 20.2829 123.611 19.6857 123.611 18.9391ZM137.715 11.5482V22H135.476V17.7446H130.996V22H128.757V11.5482H130.996V15.7289H135.476V11.5482H137.715Z" fill="#EB1700"/>
      </svg>
    </div>
  );
}

function SideNavProposalDesktop() {
  return (
    <div className="bg-white fixed left-0 top-[56px] bottom-0 shrink-0 w-[80px] z-[31] hidden md:block">
      <SideNavProposalDesktopNew />
    </div>
  );
}

function Bike() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Bike">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Bike">
          <g id="Vector">
            <path d={svgPaths.p2e1d8200} fill="var(--fill-0, #202125)" />
            <path d={svgPaths.p399a4d00} fill="var(--fill-0, #202125)" />
            <path d={svgPaths.p12cd8bb0} fill="var(--fill-0, #202125)" />
            <path d={svgPaths.p13b24900} fill="var(--fill-0, #202125)" />
            <path d={svgPaths.p3f875100} fill="var(--fill-0, #202125)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['DD_Norms-Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191919] text-[14px] text-center tracking-[-0.1px]">Delivery 20-30 min</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Bike />
      <Frame25 />
    </div>
  );
}

function Component16ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/chevron-down">
          <path d={svgPaths.p605ad00} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame26 />
      <Component16ChevronDown1 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[9999px] shadow-[0px_4px_12px_0px_rgba(25,25,25,0.2)]" data-name="Section">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-[12px] relative size-full">
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function Walk() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Walk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Walk">
          <g id="Vector">
            <path d={svgPaths.p353bb800} fill="var(--fill-0, black)" />
            <path d={svgPaths.p391d8f00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p174dbe00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2c7cc300} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[4px] py-[12px] relative rounded-[20px] shrink-0 size-[32px]" data-name="Section">
      <Walk />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex gap-[7px] h-[28px] items-center justify-center overflow-clip px-[3.5px] py-[10.5px] relative rounded-[17.5px] shrink-0" data-name="Section">
      <div className="h-[12.25px] relative shrink-0 w-[20.125px]" data-name="Primary">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1254 12.2503">
            <g id="Primary">
              <path d={svgPaths.p31d6b280} fill="var(--fill-0, black)" />
              <path clipRule="evenodd" d={svgPaths.p39671f00} fill="var(--fill-0, black)" fillRule="evenodd" />
              <path d={svgPaths.p24dd0700} fill="var(--fill-0, black)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Scheduling() {
  return (
    <div className="bg-[#f6f6f6] flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[20px]" data-name="Scheduling">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-[2px] pr-[8px] py-[2px] relative size-full">
          <Section />
          <Section1 />
          <Section2 />
        </div>
      </div>
    </div>
  );
}

function Component16PeopleAddLine() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/people-add-line">
      <div className="absolute inset-[0_-0.02%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0049 16">
          <g id="16/people-add-line">
            <g id="Primary">
              <path clipRule="evenodd" d={svgPaths.p2bc7380} fill="var(--fill-0, black)" fillRule="evenodd" />
              <path d={svgPaths.p140ea3f0} fill="var(--fill-0, black)" />
              <path clipRule="evenodd" d={svgPaths.p1e7733a0} fill="var(--fill-0, black)" fillRule="evenodd" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[24px] shrink-0 size-[40px]" data-name="Button">
      <Component16PeopleAddLine />
    </div>
  );
}

function Modes() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[calc(100%+23px)] top-[408px] w-[413px]" data-name="Modes">
      <Scheduling />
      <Button />
    </div>
  );
}

function Component16ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/chevron-right">
          <path d={svgPaths.p153f9c80} fill="var(--fill-0, #606060)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="css-ew64yg font-['TT_Norms-Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[20px] text-black">Picked for you</p>
      <Component16ChevronRight />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Title">
      <Frame />
    </div>
  );
}

function Component16ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/arrow-left" opacity="0.4">
          <path d={svgPaths.p8b28b00} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Component16ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/arrow-right">
          <path d={svgPaths.p1ee5dd80} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function CarouselControl() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Carousel control">
      <Component16ArrowLeft />
      <Component16ArrowRight />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full" data-name="Title">
      <Title />
      <CarouselControl />
    </div>
  );
}

function Component16Add() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="16/add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="16/add">
          <path d={svgPaths.p1232df00} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function QuantityStepperFloating() {
  return (
    <div className="absolute bg-white bottom-[12px] content-stretch flex items-center justify-center py-[4px] right-[12px] rounded-[9999px] shadow-[0px_1px_4px_0px_rgba(25,25,25,0.2)] size-[32px]" data-name="Quantity Stepper Floating">
      <Component16Add />
    </div>
  );
}

function ItemImage({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`bg-[#f7f7f7] content-stretch flex items-center overflow-clip relative rounded-[16px] shrink-0 transition-all duration-500 ${isCartOpen ? 'size-[117px]' : 'size-[167px]'}`} data-name="Item Image">
      <QuantityStepperFloating />
    </div>
  );
}

function Symbol() {
  return (
    <div className="content-stretch flex flex-col h-full items-start pt-[2px] relative shrink-0" data-name="✏️ Symbol">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] tracking-[-0.01px]">
        <p className="css-ew64yg leading-[18px]">$</p>
      </div>
    </div>
  );
}

function Currency() {
  return (
    <div className="content-stretch flex gap-px items-center justify-center relative shrink-0" data-name="↪️ Currency">
      <div className="flex flex-row items-center self-stretch">
        <Symbol />
      </div>
    </div>
  );
}

function Cent() {
  return (
    <div className="content-stretch flex flex-col items-start pt-px relative self-stretch shrink-0" data-name="✏️ Cent">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] tracking-[-0.01px]">
        <p className="css-ew64yg leading-[20px]">99</p>
      </div>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex gap-px items-start justify-center relative shrink-0" data-name="↪️ Price 1">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.01px]">
        <p className="css-ew64yg leading-[24px]">6</p>
      </div>
      <Cent />
    </div>
  );
}

function ItemPrice() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-full" data-name="↪️ Item Price">
      <Currency />
      <Price />
    </div>
  );
}

function ItemInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Item Info">
      <ItemPrice />
    </div>
  );
}

function ItemInfo1({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`content-stretch flex flex-col gap-[2px] items-start relative shrink-0 transition-all duration-500 ${isCartOpen ? 'w-[117px]' : 'w-[167px]'}`} data-name="Item Info">
      <ItemInfo />
      <div className="font-['DD_Norms-Medium',sans-serif] h-[40px] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[14px] text-ellipsis tracking-[-0.01px] w-full">
        <p className="css-4hzbpn mb-0">{`Jiffy-Foil Roaster Baker Pan & Lid`}</p>
        <p className="css-4hzbpn">&nbsp;</p>
      </div>
      <div className="flex flex-col font-['TT_Norms-Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.01px] w-full">
        <p className="css-4hzbpn leading-[18px]">32 min • Safeway</p>
      </div>
    </div>
  );
}

function RetailItemCard({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start relative rounded-[8px] shrink-0" data-name="Retail Item Card">
      <ItemImage isCartOpen={isCartOpen} />
      <ItemInfo1 isCartOpen={isCartOpen} />
    </div>
  );
}

function Component16Add1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="16/add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="16/add">
          <path d={svgPaths.p1232df00} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function QuantityStepperFloating1() {
  return (
    <div className="absolute bg-white bottom-[12px] content-stretch flex items-center justify-center py-[4px] right-[12px] rounded-[9999px] shadow-[0px_1px_4px_0px_rgba(25,25,25,0.2)] size-[32px]" data-name="Quantity Stepper Floating">
      <Component16Add1 />
    </div>
  );
}

function ItemImage1({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`bg-[#f7f7f7] content-stretch flex items-center overflow-clip relative rounded-[16px] shrink-0 transition-all duration-500 ${isCartOpen ? 'size-[117px]' : 'size-[167px]'}`} data-name="Item Image">
      <QuantityStepperFloating1 />
    </div>
  );
}

function Symbol1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start pt-[2px] relative shrink-0" data-name="✏️ Symbol">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] tracking-[-0.01px]">
        <p className="css-ew64yg leading-[18px]">$</p>
      </div>
    </div>
  );
}

function Currency1() {
  return (
    <div className="content-stretch flex gap-px items-center justify-center relative shrink-0" data-name="↪️ Currency">
      <div className="flex flex-row items-center self-stretch">
        <Symbol1 />
      </div>
    </div>
  );
}

function Cent1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-px relative self-stretch shrink-0" data-name="✏️ Cent">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] tracking-[-0.01px]">
        <p className="css-ew64yg leading-[20px]">99</p>
      </div>
    </div>
  );
}

function Price1() {
  return (
    <div className="content-stretch flex gap-px items-start justify-center relative shrink-0" data-name="↪️ Price 1">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.01px]">
        <p className="css-ew64yg leading-[24px]">6</p>
      </div>
      <Cent1 />
    </div>
  );
}

function ItemPrice1() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-full" data-name="↪️ Item Price">
      <Currency1 />
      <Price1 />
    </div>
  );
}

function ItemInfo2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Item Info">
      <ItemPrice1 />
    </div>
  );
}

function ItemInfo3({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`content-stretch flex flex-col gap-[2px] items-start relative shrink-0 transition-all duration-500 ${isCartOpen ? 'w-[117px]' : 'w-[167px]'}`} data-name="Item Info">
      <ItemInfo2 />
      <div className="font-['DD_Norms-Medium',sans-serif] h-[40px] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[14px] text-ellipsis tracking-[-0.01px] w-full">
        <p className="css-4hzbpn mb-0">{`Jiffy-Foil Roaster Baker Pan & Lid`}</p>
        <p className="css-4hzbpn">&nbsp;</p>
      </div>
      <div className="flex flex-col font-['TT_Norms-Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.01px] w-full">
        <p className="css-4hzbpn leading-[18px]">32 min • Safeway</p>
      </div>
    </div>
  );
}

function RetailItemCard1({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start relative rounded-[8px] shrink-0" data-name="Retail Item Card">
      <ItemImage1 isCartOpen={isCartOpen} />
      <ItemInfo3 isCartOpen={isCartOpen} />
    </div>
  );
}

function Carousel({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Carousel">
      {[...Array(5).keys()].map((_, i) => (
        <RetailItemCard key={i} isCartOpen={isCartOpen} />
      ))}
      <RetailItemCard1 isCartOpen={isCartOpen} />
    </div>
  );
}

function MealPrepMadeEasy({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(100%+12px)] top-[16px] w-[820px] min-h-[290px]" data-name="Meal prep made easy">
      <Title1 />
      <Carousel isCartOpen={isCartOpen} />
      <div className="absolute bg-gradient-to-r bottom-px from-[rgba(255,255,255,0)] h-[227px] md:right-[-24px] right-0 to-white w-[188px] z-[5]" data-name="Fade" />
    </div>
  );
}

function Content({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className="bg-white flex-1 h-full min-w-0 overflow-clip relative pointer-events-none" data-name="Content">
      <Modes />
      <MealPrepMadeEasy isCartOpen={isCartOpen} />
    </div>
  );
}

function Breadcrumbs() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0 z-10 px-[40px] py-[32px]" data-name="Breadcrumbs">
      <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center min-h-[32px] py-[4px] relative rounded-[9999px] shrink-0">
        <div className="content-stretch flex items-center justify-center relative shrink-0">
          <div className="flex flex-col font-['DD_Norms-Bold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[14px] text-center text-ellipsis tracking-[-0.01px] whitespace-nowrap">
            <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] overflow-hidden underline">Home</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0">
        <div className="flex flex-col font-['DD_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b2b2b2] text-[14px] text-center tracking-[-0.01px] whitespace-nowrap">
          <p className="leading-[20px]">/</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center min-h-[32px] py-[4px] relative rounded-[9999px] shrink-0">
        <div className="content-stretch flex items-center justify-center relative shrink-0">
          <div className="flex flex-col font-['DD_Norms-Bold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[14px] text-center text-ellipsis tracking-[-0.01px] whitespace-nowrap">
            <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] overflow-hidden underline">Search results</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0">
        <div className="flex flex-col font-['DD_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b2b2b2] text-[14px] text-center tracking-[-0.01px] whitespace-nowrap">
          <p className="leading-[20px]">/</p>
        </div>
      </div>
      <div className="content-stretch flex h-[32px] items-center relative shrink-0">
        <div className="flex flex-col font-['DD_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[14px] text-center tracking-[-0.01px] whitespace-nowrap">
          <p className="leading-[20px]">Store name</p>
        </div>
      </div>
    </div>
  );
}

function Page({ isCartOpen, onCartClose, onCartClick }: { isCartOpen?: boolean; onCartClose?: () => void; onCartClick?: () => void }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showOffersPill, setShowOffersPill] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const dealsEl = scrollContainer.querySelector('[data-name="Deals"]');
      if (!dealsEl) return;
      const dealsRect = dealsEl.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();
      setShowOffersPill(dealsRect.bottom < containerRect.top);
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute content-stretch flex flex-col h-full items-start left-0 right-0 top-0" data-name="Page">
      <MobileTopNav />
      {/* Top Nav Bar — logo · location · search · notification · cart */}
      <div className="fixed top-[56px] md:top-0 left-0 right-0 z-[32] flex items-center gap-[12px] pl-[20px] pr-[16px] py-[12px] bg-white shadow-[inset_0px_-1px_0px_0px_#e7e7e7]">
        {/* Logo — desktop only (mobile has MobileTopNav) */}
        <div className="hidden md:flex shrink-0">
          <Frame6 />
        </div>
        {/* Location picker — desktop only */}
        <div className="hidden md:flex shrink-0">
          <ButtonToggle />
        </div>
        {/* Search bar — always visible, fills remaining space */}
        <FieldContainer />
        {/* Notification — desktop only */}
        <div className="hidden md:flex shrink-0">
          <IconButton />
        </div>
        {/* Cart — always visible */}
        <IconButton2 onClick={onCartClick} />
      </div>
      <div className="flex flex-1 w-full overflow-hidden mt-[112px] md:mt-[56px]">
        <SideNavProposalDesktop />
        <div className="flex-1 h-full ml-0 md:ml-[80px] overflow-hidden relative flex">
          <div ref={scrollContainerRef} className="flex-1 min-w-0 overflow-auto relative scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {/* Store Header - Now scrollable */}
            <div className="relative w-full h-[325px] flex-shrink-0">
              <div className="bg-[#f7f7f7] absolute inset-0 w-full px-[32px] py-[20px]">
                <Breadcrumbs />
                
                {/* Store Info positioned like Figma reference */}
                <div className="absolute left-[32px] top-[163px] flex flex-col gap-[24px]">
                  <div className="flex items-start gap-[16px]">
                    {/* Logo */}
                    <div className="bg-white rounded-[12px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.12),0px_4px_12px_0px_rgba(0,0,0,0.12)] size-[80px] flex-shrink-0" />
                    
                    {/* Store Info */}
                    <div className="flex flex-col gap-[8px]">
                      {/* Store Name */}
                      <h1 className="font-['TT_Norms-ExtraBold',sans-serif] text-[32px] leading-[40px] text-black tracking-[-0.01px]">
                        Rx Store name
                      </h1>
                      
                      {/* Delivery Info */}
                      <div className="flex gap-[4px] items-center">
                        <Frame17 />
                        <div className="flex flex-col font-['DD_Norms-Medium',sans-serif] justify-center leading-[0] not-italic text-[14px] text-black tracking-[-0.01px]">
                          <p className="leading-[20px]">$0 delivery on $12+</p>
                        </div>
                        <div className="flex flex-col font-['TT_Norms-Medium',sans-serif] justify-center leading-[0] not-italic text-[14px] text-black tracking-[-0.01px]">
                          <p className="leading-[20px]">·</p>
                        </div>
                        <div className="flex flex-col font-['DD_Norms-Medium',sans-serif] justify-center leading-[0] not-italic text-[14px] text-black tracking-[-0.01px] underline cursor-pointer">
                          <p className="leading-[20px]">Pricing & fees</p>
                        </div>
                        <div className="relative shrink-0 size-[11px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                            <path clipRule="evenodd" d={svgPaths.p1d364500} fill="var(--fill-0, black)" fillRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex flex-col font-['TT_Norms-Medium',sans-serif] justify-center leading-[0] not-italic text-[14px] text-black tracking-[-0.01px]">
                          <p className="leading-[20px]">·</p>
                        </div>
                        <div className="flex flex-col font-['DD_Norms-Medium',sans-serif] justify-center leading-[0] not-italic text-[14px] text-black tracking-[-0.01px]">
                          <p className="leading-[20px]">4.2 miles</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Badges Row */}
                  <div className="flex gap-[8px] items-center">
                    <Reviews />
                    <CustomerPhotos />
                    <CustomerPhotos1 />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="content-stretch flex flex-col md:flex-row gap-[24px] md:gap-[48px] items-start pt-[24px] px-[16px] md:px-[32px] relative shrink-0 w-full">
              {/* Mobile: delivery/pickup picker shown above content */}
              <div className="w-full md:hidden">
                <Frame52 />
              </div>
              <Lhs />
              <Rhs isCartOpen={isCartOpen} />
            </div>
            {/* Right edge white gradient when cart is open */}
            <div
              className={`absolute right-0 top-0 bottom-0 w-[80px] pointer-events-none z-10 transition-opacity duration-500 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
              style={{ background: 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.85) 40%, rgba(255,255,255,1))' }}
            />
          </div>
          <aside
            className={`h-full bg-white border-l border-[#e7e7e7] transition-all duration-500 ease-in-out flex-shrink-0 z-[31] ${isCartOpen ? 'w-[400px] opacity-100' : 'w-0 opacity-0 overflow-hidden pointer-events-none'}`}
          >
            <div className="w-[400px] h-full">
              <CartPanel isOpen={isCartOpen} onClose={onCartClose || (() => {})} />
            </div>
          </aside>
        </div>
      </div>
      
      {/* Floating Offers Pill */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 z-30 transition-all duration-300 ${showOffersPill ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[8px] pointer-events-none'}`}
        style={{ bottom: '48px' }}
      >
        <button className="bg-white rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.15)] flex items-center px-[16px] h-[40px] gap-[4px] cursor-pointer hover:bg-[#f7f7f7] transition-colors">
          <span className="font-['DD_Norms-Bold',sans-serif] text-[14px] text-[#e23744] leading-[20px]">3 offers available</span>
          <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
            <path d="M6 12L10 8L6 4" stroke="#e23744" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

    </div>
  );
}

function Component16ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/chevron-right">
          <path d={svgPaths.p153f9c80} fill="var(--fill-0, white)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="css-ew64yg font-['TT_Norms-Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[20px] text-black">{`Deals & Benefits`}</p>
      <Component16ChevronRight1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Title">
      <Frame1 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex h-[44px] items-center py-[12px] relative shrink-0 w-full" data-name="Title">
      <Title2 />
    </div>
  );
}

function Component24DealsLine1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="24/deals-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="24/deals-line">
          <g id="Primary">
            <path d={svgPaths.p1b1e5080} fill="var(--fill-0, #D91400)" />
            <path d={svgPaths.p20c4b500} fill="var(--fill-0, #D91400)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeadContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 z-[4]" data-name="Lead. Container">
      <Component24DealsLine1 />
    </div>
  );
}

function SubLabelDescContainer9() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full" data-name="Sub. + Label + Desc. Container">
      <p className="css-4hzbpn font-['TT_Norms-Bold',sans-serif] leading-[20px] relative shrink-0 text-[#d91400] text-[14px] w-full">20% off, up to $5</p>
      <div className="flex flex-col font-['TT_Norms-Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#606060] text-[12px] tracking-[-0.1px] w-full">
        <p className="css-4hzbpn leading-[18px]">Add 2 items to apply</p>
      </div>
    </div>
  );
}

function BodyContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-[32px] min-w-px relative z-[3]" data-name="Body Container">
      <SubLabelDescContainer9 />
    </div>
  );
}

function Component16ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/chevron-right" opacity="0.75">
          <path d={svgPaths.p153f9c80} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function IconButton3() {
  return (
    <div className="bg-[rgba(25,25,25,0)] content-stretch flex h-[32px] items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 w-[17px] z-[1]" data-name="Icon Button">
      <Component16ChevronRight2 />
    </div>
  );
}

function ListCell() {
  return (
    <div className="bg-[rgba(25,25,25,0)] flex-[1_0_0] min-h-[40px] min-w-px relative" data-name="List Cell">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center min-h-[inherit] px-[16px] py-[4px] relative w-full">
          <LeadContainer />
          <BodyContainer />
          <IconButton3 />
        </div>
      </div>
    </div>
  );
}

function UsiExpanded({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`bg-white h-[60px] relative rounded-[16px] flex-shrink-0 transition-all duration-500 ${isCartOpen ? 'min-w-[210px]' : 'min-w-[300px]'}`} data-name="USI/Expanded">
      <div className="content-stretch flex items-center overflow-clip py-[2px] relative rounded-[inherit] size-full">
        <ListCell />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Component24DealsLine2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="24/deals-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="24/deals-line">
          <g id="Primary">
            <path d={svgPaths.p1b1e5080} fill="var(--fill-0, #D91400)" />
            <path d={svgPaths.p20c4b500} fill="var(--fill-0, #D91400)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeadContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 z-[4]" data-name="Lead. Container">
      <Component24DealsLine2 />
    </div>
  );
}

function SubLabelDescContainer10() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full" data-name="Sub. + Label + Desc. Container">
      <p className="css-4hzbpn font-['TT_Norms-Bold',sans-serif] leading-[20px] relative shrink-0 text-[#d91400] text-[14px] w-full">- 15% orders over $30</p>
      <p className="css-4hzbpn font-['TT_Norms-Medium',sans-serif] leading-[18px] opacity-75 relative shrink-0 text-[#606060] text-[12px] tracking-[-0.01px] w-full">Use code: SAVE15</p>
    </div>
  );
}

function BodyContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-[32px] min-w-px relative z-[3]" data-name="Body Container">
      <SubLabelDescContainer10 />
    </div>
  );
}

function Component16ChevronRight3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/chevron-right" opacity="0.75">
          <path d={svgPaths.p153f9c80} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function IconButton4() {
  return (
    <div className="bg-[rgba(25,25,25,0)] content-stretch flex h-[32px] items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 w-[17px] z-[1]" data-name="Icon Button">
      <Component16ChevronRight3 />
    </div>
  );
}

function ListCell1() {
  return (
    <div className="bg-[rgba(25,25,25,0)] flex-[1_0_0] min-h-[40px] min-w-px relative" data-name="List Cell">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center min-h-[inherit] px-[16px] py-[4px] relative w-full">
          <LeadContainer1 />
          <BodyContainer1 />
          <IconButton4 />
        </div>
      </div>
    </div>
  );
}

function UsiExpanded1({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`bg-white h-[60px] relative rounded-[16px] flex-shrink-0 transition-all duration-500 ${isCartOpen ? 'min-w-[210px]' : 'min-w-[300px]'}`} data-name="USI/Expanded">
      <div className="content-stretch flex items-center overflow-clip py-[2px] relative rounded-[inherit] size-full">
        <ListCell1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Component24DealsLine3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="24/deals-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="24/deals-line">
          <g id="Primary">
            <path d={svgPaths.p1b1e5080} fill="var(--fill-0, #D91400)" />
            <path d={svgPaths.p20c4b500} fill="var(--fill-0, #D91400)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeadContainer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 z-[4]" data-name="Lead. Container">
      <Component24DealsLine3 />
    </div>
  );
}

function SubLabelDescContainer11() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full" data-name="Sub. + Label + Desc. Container">
      <p className="css-4hzbpn font-['TT_Norms-Bold',sans-serif] leading-[20px] relative shrink-0 text-[#d91400] text-[14px] w-full">Buy one, get one 50% off</p>
      <p className="css-4hzbpn font-['TT_Norms-Medium',sans-serif] leading-[18px] opacity-75 relative shrink-0 text-[#606060] text-[12px] tracking-[-0.01px] w-full">Mix and match eligible items</p>
    </div>
  );
}

function BodyContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-[32px] min-w-px relative z-[3]" data-name="Body Container">
      <SubLabelDescContainer11 />
    </div>
  );
}

function Component16ChevronRight4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/chevron-right" opacity="0.75">
          <path d={svgPaths.p153f9c80} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function IconButton5() {
  return (
    <div className="bg-[rgba(25,25,25,0)] content-stretch flex h-[32px] items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 w-[17px] z-[1]" data-name="Icon Button">
      <Component16ChevronRight4 />
    </div>
  );
}

function ListCell2() {
  return (
    <div className="bg-[rgba(25,25,25,0)] flex-[1_0_0] min-h-[40px] min-w-px relative" data-name="List Cell">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center min-h-[inherit] px-[16px] py-[4px] relative w-full">
          <LeadContainer2 />
          <BodyContainer2 />
          <IconButton5 />
        </div>
      </div>
    </div>
  );
}

function UsiExpanded2({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`bg-white h-[60px] relative rounded-[16px] flex-shrink-0 transition-all duration-500 ${isCartOpen ? 'min-w-[210px]' : 'min-w-[300px]'}`} data-name="USI/Expanded">
      <div className="content-stretch flex items-center overflow-clip py-[2px] relative rounded-[inherit] size-full">
        <ListCell2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function PromosInLine({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <ScrollableCarousel>
      <div className="flex gap-[12px] relative" data-name="Promos in-line">
        <UsiExpanded isCartOpen={isCartOpen} />
        <UsiExpanded1 isCartOpen={isCartOpen} />
        <UsiExpanded2 isCartOpen={isCartOpen} />
      </div>
    </ScrollableCarousel>
  );
}

function Deals({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-name="Deals">
      <Title3 />
      <PromosInLine isCartOpen={isCartOpen} />
    </div>
  );
}

function Component16ChevronRight5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/chevron-right">
          <path d={svgPaths.p153f9c80} fill="var(--fill-0, white)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="css-ew64yg font-['TT_Norms-Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[20px] text-black">Picked for you</p>
      <Component16ChevronRight5 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Title">
      <Frame2 />
    </div>
  );
}

function Component16ArrowLeft1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/arrow-left" opacity="0.4">
          <path d={svgPaths.p8b28b00} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Component16ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/arrow-right">
          <path d={svgPaths.p1ee5dd80} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function CarouselControl1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Carousel control">
      <Component16ArrowLeft1 />
      <Component16ArrowRight1 />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full" data-name="Title">
      <Title4 />
      <CarouselControl1 />
    </div>
  );
}

function Component16Add2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="16/add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="16/add">
          <path d={svgPaths.p1232df00} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function QuantityStepperFloating2() {
  return (
    <div className="absolute bg-white bottom-[12px] content-stretch flex items-center justify-center py-[4px] right-[12px] rounded-[9999px] shadow-[0px_1px_4px_0px_rgba(25,25,25,0.2)] size-[32px]" data-name="Quantity Stepper Floating">
      <Component16Add2 />
    </div>
  );
}

function ItemImage2({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`bg-[#f7f7f7] content-stretch flex h-[167px] items-center overflow-clip relative rounded-[16px] shrink-0 transition-all duration-500 ${isCartOpen ? 'w-[203px]' : 'w-[290px]'}`} data-name="Item Image">
      <QuantityStepperFloating2 />
    </div>
  );
}

function Symbol2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start pt-[2px] relative shrink-0" data-name="✏️ Symbol">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.01px]">
        <p className="css-ew64yg leading-[18px]">$</p>
      </div>
    </div>
  );
}

function Currency2() {
  return (
    <div className="content-stretch flex gap-px items-center justify-center relative shrink-0" data-name="↪️ Currency">
      <div className="flex flex-row items-center self-stretch">
        <Symbol2 />
      </div>
    </div>
  );
}

function Cent2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="✏️ Cent">
      <p className="css-ew64yg font-['TT_Norms-Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#606060] text-[14px]">.99</p>
    </div>
  );
}

function Price2() {
  return (
    <div className="content-stretch flex gap-px items-start justify-center relative shrink-0" data-name="↪️ Price 1">
      <p className="css-ew64yg font-['TT_Norms-Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#606060] text-[14px]">6</p>
      <Cent2 />
    </div>
  );
}

function ItemPrice2() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-full" data-name="↪️ Item Price">
      <Currency2 />
      <Price2 />
    </div>
  );
}

function ItemInfo4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Item Info">
      <ItemPrice2 />
    </div>
  );
}

function ItemInfo5({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`content-stretch flex flex-col gap-[2px] items-start relative shrink-0 transition-all duration-500 ${isCartOpen ? 'w-[203px]' : 'w-[290px]'}`} data-name="Item Info">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis tracking-[-0.01px] w-full">
        <p className="css-g0mm18 leading-[20px] overflow-hidden">{`Sausage, Cheddar & Egg Sandwich`}</p>
      </div>
      <ItemInfo4 />
    </div>
  );
}

function RetailItemCard2({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start relative rounded-[8px] shrink-0" data-name="Retail Item Card">
      <ItemImage2 isCartOpen={isCartOpen} />
      <ItemInfo5 isCartOpen={isCartOpen} />
    </div>
  );
}

function Component16Add3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="16/add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="16/add">
          <path d={svgPaths.p1232df00} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function QuantityStepperFloating3() {
  return (
    <div className="absolute bg-white bottom-[12px] content-stretch flex items-center justify-center py-[4px] right-[12px] rounded-[9999px] shadow-[0px_1px_4px_0px_rgba(25,25,25,0.2)] size-[32px]" data-name="Quantity Stepper Floating">
      <Component16Add3 />
    </div>
  );
}

function ItemImage3({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`bg-[#f7f7f7] content-stretch flex h-[167px] items-center overflow-clip relative rounded-[16px] shrink-0 transition-all duration-500 ${isCartOpen ? 'w-[211px]' : 'w-[302px]'}`} data-name="Item Image">
      <QuantityStepperFloating3 />
    </div>
  );
}

function Symbol3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start pt-[2px] relative shrink-0" data-name="✏️ Symbol">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.01px]">
        <p className="css-ew64yg leading-[18px]">$</p>
      </div>
    </div>
  );
}

function Currency3() {
  return (
    <div className="content-stretch flex gap-px items-center justify-center relative shrink-0" data-name="↪️ Currency">
      <div className="flex flex-row items-center self-stretch">
        <Symbol3 />
      </div>
    </div>
  );
}

function Cent3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="✏️ Cent">
      <p className="css-ew64yg font-['TT_Norms-Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#606060] text-[14px]">.99</p>
    </div>
  );
}

function Price3() {
  return (
    <div className="content-stretch flex gap-px items-start justify-center relative shrink-0" data-name="↪️ Price 1">
      <p className="css-ew64yg font-['TT_Norms-Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#606060] text-[14px]">6</p>
      <Cent3 />
    </div>
  );
}

function ItemPrice3() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-full" data-name="↪️ Item Price">
      <Currency3 />
      <Price3 />
    </div>
  );
}

function ItemInfo6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Item Info">
      <ItemPrice3 />
    </div>
  );
}

function ItemInfo7({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`content-stretch flex flex-col gap-[2px] items-start relative shrink-0 transition-all duration-500 ${isCartOpen ? 'w-[211px]' : 'w-[302px]'}`} data-name="Item Info">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis tracking-[-0.01px] w-full">
        <p className="css-g0mm18 leading-[20px] overflow-hidden">{`Sausage, Cheddar & Egg Sandwich`}</p>
      </div>
      <ItemInfo6 />
    </div>
  );
}

function RetailItemCard3({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start relative rounded-[8px] shrink-0" data-name="Retail Item Card">
      <ItemImage3 isCartOpen={isCartOpen} />
      <ItemInfo7 isCartOpen={isCartOpen} />
    </div>
  );
}

function Carousel1({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <ScrollableCarousel className="pb-[12px]">
      <div className="flex gap-[16px] relative" data-name="Carousel">
        {[...Array(3).keys()].map((_, i) => (
          <RetailItemCard2 key={i} isCartOpen={isCartOpen} />
        ))}
        {[...Array(2).keys()].map((_, i) => (
          <RetailItemCard3 key={i} isCartOpen={isCartOpen} />
        ))}
      </div>
    </ScrollableCarousel>
  );
}

function Component16Add4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="16/add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="16/add">
          <path d={svgPaths.p1232df00} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function QuantityStepperFloating4() {
  return (
    <div className="absolute bg-white bottom-[12px] content-stretch flex items-center justify-center py-[4px] right-[12px] rounded-[9999px] shadow-[0px_1px_4px_0px_rgba(25,25,25,0.2)] size-[32px]" data-name="Quantity Stepper Floating">
      <Component16Add4 />
    </div>
  );
}

function ItemImage4({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`bg-[#f7f7f7] content-stretch flex h-[167px] items-center overflow-clip relative rounded-[16px] shrink-0 transition-all duration-500 ${isCartOpen ? 'w-[203px]' : 'w-[290px]'}`} data-name="Item Image">
      <QuantityStepperFloating4 />
    </div>
  );
}

function Symbol4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start pt-[2px] relative shrink-0" data-name="✏️ Symbol">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.01px]">
        <p className="css-ew64yg leading-[18px]">$</p>
      </div>
    </div>
  );
}

function Currency4() {
  return (
    <div className="content-stretch flex gap-px items-center justify-center relative shrink-0" data-name="↪️ Currency">
      <div className="flex flex-row items-center self-stretch">
        <Symbol4 />
      </div>
    </div>
  );
}

function Cent4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="✏️ Cent">
      <p className="css-ew64yg font-['TT_Norms-Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#606060] text-[14px]">.99</p>
    </div>
  );
}

function Price4() {
  return (
    <div className="content-stretch flex gap-px items-start justify-center relative shrink-0" data-name="↪️ Price 1">
      <p className="css-ew64yg font-['TT_Norms-Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#606060] text-[14px]">6</p>
      <Cent4 />
    </div>
  );
}

function ItemPrice4() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-full" data-name="↪️ Item Price">
      <Currency4 />
      <Price4 />
    </div>
  );
}

function ItemInfo8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Item Info">
      <ItemPrice4 />
    </div>
  );
}

function ItemInfo9({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`content-stretch flex flex-col gap-[2px] items-start relative shrink-0 transition-all duration-500 ${isCartOpen ? 'w-[203px]' : 'w-[290px]'}`} data-name="Item Info">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis tracking-[-0.01px] w-full">
        <p className="css-g0mm18 leading-[20px] overflow-hidden">{`Sausage, Cheddar & Egg Sandwich`}</p>
      </div>
      <ItemInfo8 />
    </div>
  );
}

function RetailItemCard4({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start relative rounded-[8px] shrink-0" data-name="Retail Item Card">
      <ItemImage4 isCartOpen={isCartOpen} />
      <ItemInfo9 isCartOpen={isCartOpen} />
    </div>
  );
}

function Carousel2({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <ScrollableCarousel>
      <div className="flex gap-[16px] relative" data-name="Carousel">
        {[...Array(3).keys()].map((_, i) => (
          <RetailItemCard4 key={i} isCartOpen={isCartOpen} />
        ))}
      </div>
    </ScrollableCarousel>
  );
}

function MealPrepMadeEasy1({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full min-h-[460px]" data-name="Meal prep made easy">
      <Title5 />
      <Carousel1 isCartOpen={isCartOpen} />
      <Carousel2 isCartOpen={isCartOpen} />
      <div className="absolute bg-gradient-to-r bottom-[5px] from-[rgba(255,255,255,0)] h-[381px] md:right-[-24px] right-0 to-white w-[188px] z-[5]" data-name="Fade" />
    </div>
  );
}

function Component16ChevronRight6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/chevron-right">
          <path d={svgPaths.p153f9c80} fill="var(--fill-0, white)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="css-ew64yg font-['TT_Norms-Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[20px] text-black">{`Ratings & Reviews`}</p>
      <Component16ChevronRight6 />
    </div>
  );
}

function Component16StarFill() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/star-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/star-fill">
          <path d={svgPaths.p33289f00} fill="var(--fill-0, #606060)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <Component16StarFill />
      <p className="css-ew64yg font-['TT_Norms-Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#606060] text-[14px]">
        <span className="font-['TT_Norms-Bold',sans-serif] leading-[20px]">4.8</span>
        <span className="leading-[20px]">{` (1k+)`}</span>
      </p>
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Title">
      <Frame3 />
      <Frame8 />
    </div>
  );
}

function Component16ArrowLeft2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/arrow-left" opacity="0.4">
          <path d={svgPaths.p8b28b00} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Component16ArrowRight2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/arrow-right">
          <path d={svgPaths.p1ee5dd80} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function CarouselControl2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Carousel control">
      <Component16ArrowLeft2 />
      <Component16ArrowRight2 />
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full" data-name="Title">
      <Title6 />
      <CarouselControl2 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[#202125] tracking-[-0.01px] w-full">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[16px]">
        <p className="css-ew64yg leading-[normal]">Customers say</p>
      </div>
      <p className="css-4hzbpn font-['TT_Norms-Medium',sans-serif] h-[80px] leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-ellipsis w-full">Customers praise the flavorful beverages, especially the Mocha Frappucino and Hot Latte. While the majority of food items are a hit, some note that the food can arrive cold due to poor packaging.</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[256px]">
      <div className="flex flex-col font-['TT_Norms-Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#767676] text-[14px] tracking-[-0.01px] w-[203px]">
        <p className="css-4hzbpn leading-[18px]">Summarized by AI</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame40 />
      <Frame13 />
    </div>
  );
}

function Frame34({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`bg-[#f7f7f7] content-stretch flex flex-col h-[161px] items-start p-[16px] relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 transition-all duration-500 ${isCartOpen ? 'w-[203px]' : 'w-[290px]'}`}>
      <Frame41 />
    </div>
  );
}

function Frame35({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`content-stretch flex flex-col items-start justify-center relative shrink-0 transition-all duration-500 ${isCartOpen ? 'w-[203px]' : 'w-[290px]'}`}>
      <Frame34 isCartOpen={isCartOpen} />
      <div className="h-[16px] relative shrink-0 w-[17px]">
        <div className="absolute inset-[0_0_16.41%_0]" style={{ "--fill-0": "rgba(246, 249, 249, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 13.3751">
            <path d={svgPaths.p5814270} fill="var(--fill-0, #F6F9F9)" id="Rectangle 693" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[38px]">
        <img alt="" className="block max-w-none size-full" height="38" src={imgEllipse50} width="38" />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] tracking-[-0.01px]">
        <p className="css-ew64yg leading-[normal]">Shali N.</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[203px]">
      <Frame12 />
      <div className="flex flex-col font-['TT_Norms-Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#767676] text-[12px] tracking-[-0.01px] w-[203px]">
        <p className="css-4hzbpn leading-[18px]">24 Reviews</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[251px]">
      <Group />
      <Frame9 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame10 />
      <p className="css-4hzbpn font-['TT_Norms-Medium',sans-serif] h-[84px] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[14px] text-ellipsis tracking-[-0.1px] w-full">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
    </div>
  );
}

function Star16StarFill() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star/16-star-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="star/16-star-fill">
          <path d={svgPaths.p28044180} fill="var(--fill-0, #191919)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Star16StarFill1() {
  return (
    <div className="h-[15.979px] relative shrink-0 w-[16px]" data-name="star/16-star-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15.9793">
        <g id="star/16-star-fill">
          <path d={svgPaths.p3fd1700} fill="var(--fill-0, #191919)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Star16StarFill />
      {[...Array(4).keys()].map((_, i) => (
        <Star16StarFill1 key={i} />
      ))}
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[256px]">
      <Frame11 />
    </div>
  );
}

function Frame36({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`bg-[#f7f7f7] relative rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 transition-all duration-500 ${isCartOpen ? 'w-[203px]' : 'w-[290px]'}`}>
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative w-full">
          <Frame42 />
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Frame37({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`content-stretch flex flex-col items-start justify-center relative shrink-0 transition-all duration-500 ${isCartOpen ? 'w-[203px]' : 'w-[290px]'}`}>
      <Frame36 isCartOpen={isCartOpen} />
      <div className="h-[16px] relative shrink-0 w-[17px]">
        <div className="absolute inset-[0_0_16.41%_0]" style={{ "--fill-0": "rgba(246, 249, 249, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 13.3751">
            <path d={svgPaths.p5814270} fill="var(--fill-0, #F6F9F9)" id="Rectangle 693" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame38({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <ScrollableCarousel>
      <div className="flex gap-[16px] relative">
        <Frame35 isCartOpen={isCartOpen} />
        {[...Array(2).keys()].map((_, i) => (
          <Frame37 key={i} isCartOpen={isCartOpen} />
        ))}
      </div>
    </ScrollableCarousel>
  );
}

function Frame39({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full min-h-[240px]">
      <Title7 />
      <Frame38 isCartOpen={isCartOpen} />
      <div className="absolute bg-gradient-to-r bottom-[-13px] from-[rgba(255,255,255,0)] h-[207px] md:right-[-24px] right-0 to-white w-[188px] z-[5]" data-name="Fade" />
    </div>
  );
}

function Component16ChevronRight7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/chevron-right">
          <path d={svgPaths.p153f9c80} fill="var(--fill-0, #606060)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="css-ew64yg font-['TT_Norms-Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[20px] text-black">Category name</p>
      <Component16ChevronRight7 />
    </div>
  );
}

function Title8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Title">
      <Frame4 />
    </div>
  );
}

function Component16ArrowLeft3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/arrow-left" opacity="0.4">
          <path d={svgPaths.p8b28b00} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Component16ArrowRight3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/arrow-right">
          <path d={svgPaths.p1ee5dd80} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function CarouselControl3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Carousel control">
      <Component16ArrowLeft3 />
      <Component16ArrowRight3 />
    </div>
  );
}

function Title9() {
  return (
    <div className="content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full" data-name="Title">
      <Title8 />
      <CarouselControl3 />
    </div>
  );
}

function Component16Add5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="16/add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="16/add">
          <path d={svgPaths.p1232df00} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function QuantityStepperFloating5() {
  return (
    <div className="absolute bg-white bottom-[12px] content-stretch flex items-center justify-center py-[4px] right-[12px] rounded-[9999px] shadow-[0px_1px_4px_0px_rgba(25,25,25,0.2)] size-[32px]" data-name="Quantity Stepper Floating">
      <Component16Add5 />
    </div>
  );
}

function ItemImage5({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`bg-[#f7f7f7] content-stretch flex items-center overflow-clip relative rounded-[16px] shrink-0 transition-all duration-500 ${isCartOpen ? 'size-[117px]' : 'size-[167px]'}`} data-name="Item Image">
      <QuantityStepperFloating5 />
    </div>
  );
}

function Symbol5() {
  return (
    <div className="content-stretch flex flex-col h-full items-start pt-[2px] relative shrink-0" data-name="✏️ Symbol">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] tracking-[-0.01px]">
        <p className="css-ew64yg leading-[18px]">$</p>
      </div>
    </div>
  );
}

function Currency5() {
  return (
    <div className="content-stretch flex gap-px items-center justify-center relative shrink-0" data-name="↪️ Currency">
      <div className="flex flex-row items-center self-stretch">
        <Symbol5 />
      </div>
    </div>
  );
}

function Cent5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-px relative self-stretch shrink-0" data-name="✏️ Cent">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] tracking-[-0.01px]">
        <p className="css-ew64yg leading-[20px]">99</p>
      </div>
    </div>
  );
}

function Price5() {
  return (
    <div className="content-stretch flex gap-px items-start justify-center relative shrink-0" data-name="↪️ Price 1">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.01px]">
        <p className="css-ew64yg leading-[24px]">6</p>
      </div>
      <Cent5 />
    </div>
  );
}

function ItemPrice5() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-full" data-name="↪️ Item Price">
      <Currency5 />
      <Price5 />
    </div>
  );
}

function ItemInfo10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Item Info">
      <ItemPrice5 />
    </div>
  );
}

function ItemInfo11({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className={`content-stretch flex flex-col gap-[2px] items-start relative shrink-0 transition-all duration-500 ${isCartOpen ? 'w-[117px]' : 'w-[167px]'}`} data-name="Item Info">
      <ItemInfo10 />
      <div className="font-['DD_Norms-Medium',sans-serif] h-[40px] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#191919] text-[14px] text-ellipsis tracking-[-0.01px] w-full">
        <p className="css-4hzbpn mb-0">{`Jiffy-Foil Roaster Baker Pan & Lid`}</p>
        <p className="css-4hzbpn">&nbsp;</p>
      </div>
      <div className="flex flex-col font-['TT_Norms-Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.01px] w-full">
        <p className="css-4hzbpn leading-[18px]">32 min • Safeway</p>
      </div>
    </div>
  );
}

function RetailItemCard5({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start relative rounded-[8px] shrink-0" data-name="Retail Item Card">
      <ItemImage5 isCartOpen={isCartOpen} />
      <ItemInfo11 isCartOpen={isCartOpen} />
    </div>
  );
}

function Carousel3({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <ScrollableCarousel>
      <div className="flex gap-[16px] relative" data-name="Carousel">
        {[...Array(6).keys()].map((_, i) => (
          <RetailItemCard5 key={i} isCartOpen={isCartOpen} />
        ))}
      </div>
    </ScrollableCarousel>
  );
}

function MealPrepMadeEasy2({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full min-h-[290px]" data-name="Meal prep made easy">
      <Title9 />
      <Carousel3 isCartOpen={isCartOpen} />
      <div className="absolute bg-gradient-to-r bottom-px from-[rgba(255,255,255,0)] h-[227px] md:right-[-24px] right-0 to-white w-[188px] z-[5]" data-name="Fade" />
    </div>
  );
}

function Menu({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Menu">
      <MealPrepMadeEasy1 isCartOpen={isCartOpen} />
      <Frame39 isCartOpen={isCartOpen} />
      {[...Array(2).keys()].map((_, i) => (
        <MealPrepMadeEasy2 key={i} isCartOpen={isCartOpen} />
      ))}
    </div>
  );
}

function Rhs({ isCartOpen }: { isCartOpen?: boolean }) {
  return (
    <div className="static md:absolute content-stretch flex flex-col gap-[29px] items-start md:left-[397px] px-0 md:px-[24px] py-[20px] md:top-0 md:right-0 pb-[100px] w-full overflow-visible" data-name="RHS">
      <Deals isCartOpen={isCartOpen} />
      <Menu isCartOpen={isCartOpen} />
    </div>
  );
}

function Logo() {
  return <div className="bg-white rounded-[12px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.12),0px_4px_12px_0px_rgba(0,0,0,0.12)] size-[46px]" data-name="logo" />;
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="css-4hzbpn font-['TT_Norms-ExtraBold',sans-serif] leading-[normal] max-w-[265px] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.01px] w-full">Store name</p>
    </div>
  );
}

function Copy() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Copy">
      <Frame18 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Logo />
        </div>
      </div>
      <Copy />
    </div>
  );
}

function Logo16LogoDashpassNew() {
  return (
    <div className="absolute left-[-4px] size-[24px] top-[-2.5px]" data-name="logo/16-logo-dashpass-new">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="logo/16-logo-dashpass-new">
          <path d={svgPaths.p532d580} fill="var(--fill-0, black)" id="Logo" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[19px] overflow-clip relative shrink-0 w-[18px]">
      <Logo16LogoDashpassNew />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame17 />
      <div className="css-g0mm18 flex flex-col font-['DD_Norms-Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black tracking-[-0.01px]">
        <p className="css-ew64yg leading-[18px]">$0 delivery on $12+</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame7 />
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.01px]">
        <p className="css-ew64yg leading-[20px]">·</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['DD_Norms-Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black tracking-[-0.01px]">
        <p className="css-ew64yg leading-[18px]">{`Pricing & fees`}</p>
      </div>
      <div className="relative shrink-0 size-[11px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <path clipRule="evenodd" d={svgPaths.p1d364500} fill="var(--fill-0, black)" fillRule="evenodd" id="Primary" />
        </svg>
      </div>
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.01px]">
        <p className="css-ew64yg leading-[20px]">·</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['DD_Norms-Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black tracking-[-0.01px]">
        <p className="css-ew64yg leading-[18px]">4.2 miles</p>
      </div>
    </div>
  );
}

function RatingType() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Rating + type">
      <Frame50 />
    </div>
  );
}

function HeaderMetadata() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[300px]" data-name="Header metadata">
      <RatingType />
    </div>
  );
}

function Descriptions() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[279px]" data-name="Descriptions">
      <HeaderMetadata />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Descriptions />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame44 />
      <Frame5 />
    </div>
  );
}

function Component16StarFill1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="16/star-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="16/star-fill">
          <path d={svgPaths.p3fc1ef00} fill="var(--fill-0, black)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Component16StarFill1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame20 />
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.01px]">
        <p className="css-ew64yg leading-[20px]">4.8</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.01px]">
        <p className="css-ew64yg leading-[20px]">(2k+)</p>
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <div className="bg-[#ededed] content-stretch flex flex-col h-[40px] items-start justify-center px-[12px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Reviews">
      <Frame19 />
    </div>
  );
}

function Image() {
  return (
    <div className="bg-[#f1f1f1] relative rounded-[5.091px] shrink-0 size-[22.909px]" data-name="Image">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[26.236px] left-[-10px] top-[-1.91px] w-[22.783px]" data-name="image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.6px] border-black border-solid inset-[-0.6px] pointer-events-none rounded-[5.691px]" />
    </div>
  );
}

function Images() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[22.909px] top-0" data-name="images">
      <Image />
    </div>
  );
}

function Image1() {
  return (
    <div className="bg-[#493434] relative rounded-[5.091px] shrink-0 size-[22.909px]" data-name="Image">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[26.236px] left-0 top-[-1.27px] w-[22.783px]" data-name="image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.636px] border-black border-solid inset-[-0.636px] pointer-events-none rounded-[5.727px]" />
    </div>
  );
}

function Images1() {
  return (
    <div className="absolute content-stretch flex items-center left-[5.09px] size-[22.909px] top-0" data-name="images">
      <Image1 />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[22.909px] relative shrink-0 w-[28px]" data-name="Image">
      <Images />
      <Images1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.01px]">
        <p className="css-ew64yg leading-[20px]">Customer photos</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame21 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame22 />
    </div>
  );
}

function CustomerPhotos() {
  return (
    <div className="bg-[#ededed] content-stretch flex gap-[8px] h-[40px] items-center pl-[12px] pr-[10px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Customer Photos">
      <Image2 />
      <Frame24 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0">
      <Reviews />
      <CustomerPhotos />
    </div>
  );
}

function Component16TrophyLine() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="16/trophy-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.0001">
        <g id="16/trophy-line">
          <path clipRule="evenodd" d={svgPaths.p10bd5d00} fill="var(--fill-0, black)" fillRule="evenodd" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.01px]">
        <p className="css-ew64yg leading-[20px]">#6 Coffee</p>
      </div>
    </div>
  );
}

function CustomerPhotos1() {
  return (
    <div className="bg-[#ededed] content-stretch flex gap-[8px] h-[40px] items-center pl-[12px] pr-[10px] py-[12px] relative rounded-[9999px] shrink-0" data-name="Customer Photos">
      <Component16TrophyLine />
      <Frame23 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0">
      <CustomerPhotos1 />
    </div>
  );
}

function Attributes() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[289px]" data-name="Attributes">
      <Frame43 />
      <Frame45 />
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[294px] w-[317px]" data-name="Content">
      <Frame53 />
      <Attributes />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#f7f7f7] h-[484px] overflow-clip relative rounded-[24px] shrink-0 w-full" data-name="Header">
      <div className="absolute bg-[#f7f7f7] left-0 size-[347px] top-0" data-name="Video" />
      <Content1 />
    </div>
  );
}

function ChevronDownSmall() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron down small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron down small">
          <path d={svgPaths.p28303800} fill="var(--fill-0, #202125)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-[71px]">
      <div className="css-g0mm18 flex flex-col font-['DD_Norms-Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] text-center tracking-[-0.01px]">
        <p className="css-ew64yg leading-[18px]">20-30 min</p>
      </div>
      <ChevronDownSmall />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['DD_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] tracking-[-0.1px] w-[58px]">
        <p className="css-4hzbpn leading-[20px]">{`Delivery `}</p>
      </div>
      <Frame51 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[76px]">
      <Frame46 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Frame28 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[16px] py-[4px] relative rounded-[16px] shadow-[0px_4px_12px_0px_rgba(25,25,25,0.2)] shrink-0 w-[96px]" data-name="Section">
      <Frame29 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[#191919] text-center tracking-[-0.01px]">
      <div className="css-g0mm18 flex flex-col font-['DD_Norms-Bold',sans-serif] justify-center relative shrink-0 text-[14px]">
        <p className="css-ew64yg leading-[20px]">Pick up</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['DD_Norms-Medium',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="css-ew64yg leading-[18px]">10-20 min</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame47 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-[91px]">
      <Frame31 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[#191919] text-center">
      <div className="css-g0mm18 flex flex-col font-['DD_Norms-Bold',sans-serif] justify-center relative shrink-0 text-[14px] tracking-[-0.1px]">
        <p className="css-ew64yg leading-[20px]">Go out</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['DD_Norms-Medium',sans-serif] justify-center relative shrink-0 text-[12px] tracking-[-0.01px]">
        <p className="css-ew64yg leading-[18px]">1.7 km</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Frame49 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
      <Frame33 />
    </div>
  );
}

function Scheduling1() {
  return (
    <div className="bg-[#f7f7f5] content-stretch flex items-center justify-between pl-[4px] pr-[8px] py-[4px] relative rounded-[20px] shrink-0 w-[277px]" data-name="Scheduling">
      <Section3 />
      <Frame32 />
      <Frame27 />
    </div>
  );
}

function PersonPlus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Person plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Person plus">
          <g id="Vector">
            <path d={svgPaths.p8bcb680} fill="#202125" />
            <path d={svgPaths.p3568e980} fill="#202125" />
            <path d={svgPaths.p2659300} fill="#202125" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[#f7f7f5] content-stretch flex flex-col h-[56px] items-center justify-center px-[8px] py-[2px] relative rounded-[20px] shrink-0 w-[63px]">
      <PersonPlus />
      <div className="css-g0mm18 flex flex-col font-['DD_Norms-Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] text-center tracking-[-0.01px]">
        <p className="css-ew64yg leading-[18px]">Invite</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center relative w-full pl-[0px] pr-[16px] py-[0px]">
          <Scheduling1 />
          <Frame48 />
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
      <Header />
      <Frame52 />
    </div>
  );
}

function ChevronDownSmall1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron down small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron down small">
          <path d={svgPaths.p3a5e9a00} fill="var(--fill-0, #202125)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.01px]">
        <p className="css-ew64yg leading-[20px]">6:00 am to 10:00 am</p>
      </div>
      <ChevronDownSmall1 />
    </div>
  );
}

function MenuElement() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] pb-[20px] relative shrink-0 w-full" data-name="MenuElement">
      <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.01px]">
        <p className="css-ew64yg leading-[24px]">Breakfast menu</p>
      </div>
      <Frame56 />
    </div>
  );
}

function Component24SearchLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="24/search-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="24/search-line">
          <path d={svgPaths.p1c3ea800} fill="var(--fill-0, #191919)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Field2() {
  return (
    null
  );
}

function Field3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[348px]" data-name="Field">
      <Field2 />
    </div>
  );
}

function Frame55() {
  return (
    null
  );
}

function MenuElement1() {
  return (
    <div className="bg-[#f7f7f7] h-[40px] relative rounded-br-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="MenuElement">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full border-l-4 border-[#191919]">
          <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.01px]">
            <p className="css-ew64yg leading-[20px] font-[TT_Norms-Bold]">Picked for you</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuElement2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="MenuElement">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.01px]">
            <p className="css-ew64yg leading-[20px]">{`Ratings & Reviews`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuElement3() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="MenuElement">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.01px]">
            <p className="css-ew64yg leading-[20px]">Hot coffee</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuElement4() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="MenuElement">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.01px]">
            <p className="css-ew64yg leading-[20px]">Snacks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuElement5() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="MenuElement">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.01px]">
            <p className="css-ew64yg leading-[20px]">Breakfast</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuElement6() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="MenuElement">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['TT_Norms-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.01px]">
            <p className="css-ew64yg leading-[20px]">Lunch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menu1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full bg-white" data-name="Menu">
      <div className="w-full">
        <MenuElement />
        <Frame55 />
        <MenuElement1 />
        <MenuElement2 />
        <MenuElement3 />
        <MenuElement4 />
        <MenuElement5 />
        <MenuElement6 />
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[349px]" data-name="content">
      <Menu1 />
    </div>
  );
}

function Lhs() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [fixedPos, setFixedPos] = useState({ top: 0, left: 0, width: 354 });

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    // Find the nearest scroll container ancestor
    let scrollContainer: HTMLElement | null = sentinel.parentElement;
    while (scrollContainer) {
      const style = getComputedStyle(scrollContainer);
      if (style.overflowY === 'auto' || style.overflowY === 'scroll') break;
      scrollContainer = scrollContainer.parentElement;
    }
    if (!scrollContainer) return;

    const handleScroll = () => {
      const sentinelRect = sentinel.getBoundingClientRect();
      const scrollRect = scrollContainer!.getBoundingClientRect();

      if (sentinelRect.top < scrollRect.top) {
        setIsSticky(true);
        setFixedPos({
          top: scrollRect.top,
          left: sentinelRect.left,
          width: sentinelRect.width,
        });
      } else {
        setIsSticky(false);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      scrollContainer!.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="hidden md:flex flex-col gap-[24px] items-start relative w-[354px]" data-name="LHS">
      <Frame52 />
      <div ref={sentinelRef} className="w-full">
        <div
          ref={menuRef}
          className="bg-white z-20"
          style={
            isSticky
              ? { position: 'fixed', top: fixedPos.top, left: fixedPos.left, width: fixedPos.width, zIndex: 20 }
              : { width: '100%' }
          }
        >
          <Menu1 />
        </div>
      </div>
    </div>
  );
}

function CartPanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div className="h-full bg-white flex flex-col">
      {/* Cart Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#e7e7e7]">
        <h2 className="text-[24px] font-semibold text-black">Cart</h2>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-[#f1f1f1] rounded-full transition-colors"
          aria-label="Close cart"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Cart Content */}
      <div className="flex-1 overflow-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {/* Starbucks Section */}
        <div className="px-6 pt-5 pb-4">
          <h3 className="text-[16px] font-semibold text-black mb-4">Starbucks</h3>
          
          {/* Cart Items */}
          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex gap-3 pb-4 border-b border-[#e7e7e7] relative">
              <div className="w-[56px] h-[56px] rounded-lg bg-[#e7e7e7] flex-shrink-0" />
              <div className="flex-1 min-w-0 pr-10">
                <p className="text-[14px] font-semibold text-black mb-1">Iced White Chocolate Mocha</p>
                <p className="text-[12px] text-[#767676] mb-2">Grande, Extra whip</p>
                <p className="text-[14px] font-semibold text-black">$6.45</p>
              </div>
              <button className="absolute right-0 bottom-4 bg-[#f5f5f5] rounded-full w-[32px] h-[32px] flex items-center justify-center hover:bg-[#e7e7e7] transition-colors">
                <span className="text-[18px] text-black leading-none">+</span>
              </button>
            </div>

            {/* Item 2 */}
            <div className="flex gap-3 pb-4 border-b border-[#e7e7e7] relative">
              <div className="w-[56px] h-[56px] rounded-lg bg-[#e7e7e7] flex-shrink-0" />
              <div className="flex-1 min-w-0 pr-10">
                <p className="text-[14px] font-semibold text-black mb-1">Chocolate Chip Cookie</p>
                <p className="text-[12px] text-[#767676] mb-2">Warmed</p>
                <p className="text-[14px] font-semibold text-black">$2.95</p>
              </div>
              <button className="absolute right-0 bottom-4 bg-[#f5f5f5] rounded-full w-[32px] h-[32px] flex items-center justify-center hover:bg-[#e7e7e7] transition-colors">
                <span className="text-[18px] text-black leading-none">+</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sweetgreen Section */}
        <div className="px-6 pb-4">
          <h3 className="text-[16px] font-semibold text-black mb-4">Sweetgreen</h3>
          
          {/* Cart Item */}
          <div className="flex gap-3 pb-4 border-b border-[#e7e7e7] relative">
            <div className="w-[56px] h-[56px] rounded-lg bg-[#e7e7e7] flex-shrink-0" />
            <div className="flex-1 min-w-0 pr-10">
              <p className="text-[14px] font-semibold text-black mb-1">Harvest Bowl</p>
              <p className="text-[12px] text-[#767676] mb-2">Extra chicken, No cheese</p>
              <p className="text-[14px] font-semibold text-black">$12.50</p>
            </div>
            <button className="absolute right-0 bottom-4 bg-[#f5f5f5] rounded-full w-[32px] h-[32px] flex items-center justify-center hover:bg-[#e7e7e7] transition-colors">
              <span className="text-[18px] text-black leading-none">+</span>
            </button>
          </div>
        </div>

        {/* Complement your cart Section */}
        <div className="px-6 pb-4">
          <h4 className="text-[14px] font-semibold text-black mb-3">Complement your cart</h4>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[
              { name: "Blueberry Muffin", price: "$3.95", store: "Starbucks", time: "5 min" },
              { name: "Sparkling Water", price: "$2.50", store: "Sweetgreen", time: "5 min" },
              { name: "Greek Yogurt Parfait", price: "$4.95", store: "Starbucks", time: "5 min" }
            ].map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[110px]">
                <div className="relative bg-[#e7e7e7] rounded-lg mb-2 h-[110px] flex items-center justify-center">
                  <button className="absolute bottom-2 right-2 bg-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-shadow">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3V13M3 8H13" stroke="#191919" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
                <p className="text-[12px] font-semibold text-black mb-0.5 line-clamp-2 leading-tight">{item.name}</p>
                <p className="text-[12px] font-semibold text-black mb-0.5">{item.price}</p>
                <p className="text-[10px] text-[#767676]">{item.time} • {item.store}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Add items text */}
        <div className="px-6 pb-6">
          <p className="text-[14px] text-[#767676]">Add items with no extra delivery fee</p>
        </div>
      </div>

      {/* Continue Button */}
      <div className="px-6 py-4 border-t border-[#e7e7e7] bg-white">
        <button className="w-full bg-[#eb1700] text-white text-[16px] font-semibold py-3.5 rounded-full hover:bg-[#d11500] transition-colors">
          Continue
        </button>
      </div>
    </div>
  );
}

export default function StorePage() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="bg-white overflow-clip relative rounded-[16px] shadow-[0px_4px_16px_0px_rgba(25,25,25,0.2)] size-full" data-name="Store page">
      <Page isCartOpen={isCartOpen} onCartClose={() => setIsCartOpen(false)} onCartClick={() => setIsCartOpen(!isCartOpen)} />
    </div>
  );
}