import Image from "next/image";

export default function HeaderSection() {
  return (
    <div className="flex flex-row h-[104.03px] pt-[22.8px] pl-[27.36px] pr-6 items-center justify-between">
      <div className="flex flex-col">
        <div className="flex flex-row items-center space-x-[18.24px]">
          <h1 className="text-dark_blue_medium text-[20.52px]">Profile</h1>
          <span className="text-light_blue_medium text-[13.68px]">
            Label text or value
          </span>
        </div>
        <div>
          <span className="text-[15.96px] text-light_gray_medium">
            A descriptive body text comes here
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-3">
        <div className="flex flex-row items-center border h-[47.18px] rounded-md max-[1083px]:hidden">
          <button className="flex flex-row items-center space-x-2 px-4">
            <Image
              src="/images/dataGrid/table.png"
              alt="Table"
              width={24.38}
              height={24.38}
            />
            <span className="text-black text-[15px]">27 Columns Selected</span>
            <Image
              src="/images/dataGrid/angle-down-0.png"
              alt="arrowDown"
              width={24.38}
              height={24.38}
            />
          </button>
          <button className="flex flex-row items-center space-x-2 px-4">
            <Image
              src="/images/dataGrid/user.png"
              alt="user"
              width={21}
              height={21}
            />
            <span className="text-black text-[15px]">Active</span>
            <Image
              src="/images/dataGrid/angle-down-0.png"
              alt="arrowDown"
              width={24.38}
              height={24.38}
            />
          </button>
          <button className="flex flex-row items-center space-x-2 px-3">
            <Image
              src="/images/dataGrid/bars.png"
              alt="bar"
              width={24.38}
              height={24.38}
            />
            <span className="text-black text-[15px]">Select a Portfolio</span>
            <Image
              src="/images/dataGrid/angle-down-0.png"
              alt="arrowDown"
              width={24.38}
              height={24.38}
            />
          </button>
        </div>
        <button className="bg-light_blue_medium text-white text-[15px] h-[47.18px] w-[124.99px] border rounded-md">
          Actions
        </button>
      </div>
    </div>
  );
}
