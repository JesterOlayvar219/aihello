import Image from "next/image";

export default function Header() {
  return (
    <div className="h-header flex items-center justify-end bg-white px-6 border-b">
      <Image
        src="/images/header/logo_b.png"
        alt="Logo"
        width={152.41}
        height={42.09}
        className="xl:hidden"
      />
      <div className="flex items-center space-x-4 mr-[26px] max-[1087px]:hidden ">
        <button className="text-header_button border border-header_button px-header_help_btn_x py-header_help_btn_y rounded-lg text-header_help_btn">
          Get Specialist Help
        </button>
        <div className="flex items-center space-x-3 bg-profile border border-header_filter_border rounded-lg px-[11px] py-header_help_btn_y justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/header/us-flag.png"
              alt="US"
              width={24}
              height={24}
            />
            <span className="text-header_filter">Natural Things Main (US)</span>
          </div>
          <Image
            src="/images/header/filter-arrow.png"
            alt="Filter"
            width={8.38}
            height={3.75}
          />
        </div>
        <div className="flex items-center space-x-2 bg-profile border border-header_filter_border rounded-lg py-[8px] px-header_help_btn_x h-[50px]">
          <span className="text-header_filter">Aug 6, 2024 - Sep 5, 2024</span>
          <div className="border border-header_filter h-[30px] w-[1px]"></div>
          <Image
            src="/images/header/calendar.png"
            alt="Calendar"
            width={15}
            height={15}
          />
        </div>
      </div>
      <div className="flex items-center space-x-[18.09px] mr-[32.92px]">
        <div className="flex border border-header_filter_border rounded-full w-[41px] h-[41px] relative justify-center items-center">
          <Image
            src="/images/header/alarm.png"
            alt="avatar"
            width={21.7}
            height={20.93}
          />
          <Image
            src="/images/header/alarm-dot.png"
            alt="avatar"
            width={12}
            height={12}
            className="absolute top-0 right-0"
          />
        </div>
        <div className="flex items-center">
          <Image
            src="/images/header/usflaground.png"
            alt="avatar"
            width={41}
            height={41}
          />
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex items-center space-x-[16.05px]">
          <div className="flex flex-col">
            <span className="text-header_profile_name text-align-right">
              Qasin Rai
            </span>
            <span className="text-header_profile_role text-align-right">
              Brand Manager
            </span>
          </div>
          <button className="flex items-center space-x-[13.16px]">
            <Image
              src="/images/header/avatar.png"
              alt="avatar"
              width={48.29}
              height={46.55}
            />

            <Image
              src="/images/header/arrow-down.png"
              alt="arrow-down"
              width={20.99}
              height={20.24}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
