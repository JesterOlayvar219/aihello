import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-sidebar w-sidebar text-white h-screen p-sidebar relative">
      <div className="logo mb-sidebar">
        <Image
          src="/images/sidebar/maskgroup.png"
          alt="Logo"
          width={152.41}
          height={42.09}
        />
        <Image
          src="/images/sidebar/button.png"
          alt="Button"
          width={29.86}
          height={29.86}
          className="absolute top-9 -right-3"
        />
      </div>
      <div className="bg-divider h-divider mb-sidebar"></div>
      <div className="menu">
        <span className=" pl-sidebar_li_x text-sidebar_menu font-medium text-sidebar_li mb-menu">
          MENU
        </span>
        <nav>
          <ul className="list-none">
            <li className="p-sidebar_li_x hover:bg-sidebar_item_active mb-menu">
              <Link href="/dashboard" className="flex items-center">
                <Image
                  src="/images/sidebar/dashboard.png"
                  alt="Dashboard"
                  width={21.33}
                  height={21.33}
                />
                <span className="text-sidebar_li font-medium ml-sidebar_li">
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="p-sidebar_li_x hover:bg-sidebar_item_active mb-menu">
              <Link href="/campaigns" className="flex items-center">
                <Image
                  src="/images/sidebar/campaigns.png"
                  alt="Campaigns"
                  width={21.33}
                  height={21.33}
                />
                <span className="text-sidebar_li font-medium ml-sidebar_li">
                  Campaigns
                </span>
              </Link>
            </li>
            <li className="p-sidebar_li_x hover:bg-sidebar_item_active mb-menu">
              <Link
                href="/report"
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <Image
                    src="/images/sidebar/report.png"
                    alt="Report"
                    width={21.33}
                    height={21.33}
                  />
                  <span className="text-sidebar_li font-medium ml-sidebar_li">
                    Report
                  </span>
                </div>

                <Image
                  src="/images/sidebar/chevron.png"
                  alt="Arrow"
                  width={17.06}
                  height={17.06}
                />
              </Link>
            </li>
            <li className="p-sidebar_li_x hover:bg-sidebar_item_active">
              <Link href="/tools" className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/images/sidebar/tools.png"
                    alt="Tools"
                    width={21.33}
                    height={21.33}
                  />
                  <span className="text-sidebar_li font-medium ml-sidebar_li">
                    Tools
                  </span>
                </div>
                <Image
                  src="/images/sidebar/chevron.png"
                  alt="Arrow"
                  width={17.06}
                  height={17.06}
                />
              </Link>
            </li>
            <div className="bg-divider h-divider my-sidebar"></div>
            <span className=" pl-sidebar_li_x text-sidebar_menu font-medium text-sidebar_li mb-menu">
              SETTINGS
            </span>
            <li className="p-sidebar_li_x hover:bg-sidebar_item_active">
              <Link
                href="/settings"
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <Image
                    src="/images/sidebar/settings.png"
                    alt="Settings"
                    width={21.33}
                    height={21.33}
                  />
                  <span className="text-sidebar_li font-medium ml-sidebar_li">
                    Settings
                  </span>
                </div>
                <Image
                  src="/images/sidebar/chevron.png"
                  alt="Arrow"
                  width={17.06}
                  height={17.06}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-auto">
        <Link href="/help" className="flex items-center mb-menu">
          <Image
            src="/images/sidebar/help.png"
            alt="Help"
            width={21.33}
            height={21.33}
          />
          <span className="text-sidebar_li font-medium ml-sidebar_li">
            Help
          </span>
        </Link>
        <Link href="/logout" className="flex items-center text-red-500">
          <Image
            src="/images/sidebar/logout.png"
            alt="Logout"
            width={21.33}
            height={21.33}
          />
          <span className="text-sidebar_li font-medium ml-sidebar_li">
            Logout Account
          </span>
        </Link>
      </div>
    </div>
  );
}
