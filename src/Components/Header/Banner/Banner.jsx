import { Banner } from 'flowbite-react';
import { HiArrowRight, HiX } from 'react-icons/hi';
import { MdPercent } from 'react-icons/md';

export default function BottomBannerPosition() {
  return (
    <Banner>
      <div className="fixed bottom-0 left-0 z-50 flex justify-between w-full p-4 border-t border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="flex items-center mx-auto">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <span className="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center">
              <MdPercent className="h-4 w-4" />
            </span>
            <span>
              Get 5% commision per sale&nbsp;
              <a href="https://flowbite.com" className="flex items-center ml-0 text-sm font-medium text-cyan-600 md:ml-1 md:inline-flex dark:text-cyan-500 hover:underline">
                Become a partner
                <HiArrowRight className="ml-2" />
              </a>
            </span>
          </p>
        </div>
        <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </Banner>
  )
}
