import Link from "next/link";

export default function NavigationTabs() {
  return (
    <div className="text-sm text-center font-bold border-b-2 border-header_filter_border">
      <ul className="flex max-sm:flex-col flex-wrap  -mb-px text-profile_tab space-x-[25.39px]">
        <li className="me-2">
          <Link
            href="#"
            className="inline-block p-[20.32px] text-light_blue_medium border-b-2 border-light_blue_medium rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
            aria-current="page"
          >
            Profile
          </Link>
        </li>
        <li className="me-2 relative">
          <Link
            href="#"
            className="inline-block p-[20.32px] text-profile_tab_inactive border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            Campaigns
          </Link>
          <span className="bg-header_button px-[7.11px] py-[2.03px] text-profile_tab_index rounded-md absolute -right-4 top-5 max-sm:right-[147px] max-[443px]:right-[100px]">
            120
          </span>
        </li>
        <li className="me-2 relative">
          <Link
            href="#"
            className="inline-block p-[20.32px] text-profile_tab_inactive border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            Ad Groups
          </Link>
          <span className="bg-header_button px-[7.11px] py-[2.03px] text-profile_tab_index rounded-md absolute -right-4 top-5 max-sm:right-[149px] max-[443px]:right-[100px]">
            12
          </span>
        </li>
        <li className="me-2 relative">
          <a
            href="#"
            className="inline-block p-[20.32px] text-profile_tab_inactive border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            Targeting
          </a>
          <span className="bg-header_button px-[7.11px] py-[2.03px] text-profile_tab_index rounded-md absolute -right-4 top-5 max-sm:right-[151px] max-[443px]:right-[100px]">
            5
          </span>
        </li>
      </ul>
    </div>
  );
}
