import Script from 'next/script'

export default function MainHeader() {

  return (
	<div className="flex w-full flex-col items-center justify-between md:flex-row">
	  <div className="flex w-full flex-row justify-between md:w-1/4">
	  	<a href="/">
		    <svg width="100" viewBox="0 0 1014 218" fill="none" xmlns="http://www.w3.org/2000/svg">
		      <path d="M137.13 176.43H56.51L43.17 215H0.54L73.33 12.29H120.6L193.39 215H150.47L137.13 176.43ZM126.11 143.95L96.82 59.27L67.53 143.95H126.11ZM273.378 217.61C260.231 217.61 248.438 215.29 237.998 210.65C227.558 205.817 219.245 199.34 213.058 191.22C207.065 183.1 203.778 174.11 203.198 164.25H244.088C244.861 170.437 247.858 175.56 253.078 179.62C258.491 183.68 265.161 185.71 273.088 185.71C280.821 185.71 286.815 184.163 291.068 181.07C295.515 177.977 297.738 174.013 297.738 169.18C297.738 163.96 295.031 160.093 289.618 157.58C284.398 154.873 275.988 151.973 264.388 148.88C252.401 145.98 242.541 142.983 234.808 139.89C227.268 136.797 220.695 132.06 215.088 125.68C209.675 119.3 206.968 110.697 206.968 99.87C206.968 90.9767 209.481 82.8567 214.508 75.51C219.728 68.1633 227.075 62.3633 236.548 58.11C246.215 53.8567 257.525 51.73 270.478 51.73C289.618 51.73 304.891 56.5633 316.298 66.23C327.705 75.7033 333.988 88.56 335.148 104.8H296.288C295.708 98.42 293.001 93.3933 288.168 89.72C283.528 85.8533 277.245 83.92 269.318 83.92C261.971 83.92 256.268 85.2733 252.208 87.98C248.341 90.6867 246.408 94.4567 246.408 99.29C246.408 104.703 249.115 108.86 254.528 111.76C259.941 114.467 268.351 117.27 279.758 120.17C291.358 123.07 300.928 126.067 308.468 129.16C316.008 132.253 322.485 137.087 327.898 143.66C333.505 150.04 336.405 158.547 336.598 169.18C336.598 178.46 333.988 186.773 328.768 194.12C323.741 201.467 316.395 207.267 306.728 211.52C297.255 215.58 286.138 217.61 273.378 217.61ZM456.345 215L401.825 146.56V215H361.225V0.399997H401.825V122.49L455.765 54.34H508.545L437.785 134.96L509.125 215H456.345ZM669.491 75.22C669.491 86.0467 666.881 96.1967 661.661 105.67C656.634 115.143 648.611 122.78 637.591 128.58C626.764 134.38 613.037 137.28 596.411 137.28H562.481V215H521.881V12.58H596.411C612.071 12.58 625.411 15.2867 636.431 20.7C647.451 26.1133 655.667 33.5567 661.081 43.03C666.687 52.5033 669.491 63.2333 669.491 75.22ZM594.671 104.51C605.884 104.51 614.197 101.997 619.611 96.97C625.024 91.75 627.731 84.5 627.731 75.22C627.731 55.5 616.711 45.64 594.671 45.64H562.481V104.51H594.671ZM760.376 12.58C781.643 12.58 800.3 16.7367 816.346 25.05C832.586 33.3633 845.056 45.2533 853.756 60.72C862.65 75.9933 867.096 93.78 867.096 114.08C867.096 134.38 862.65 152.167 853.756 167.44C845.056 182.52 832.586 194.217 816.346 202.53C800.3 210.843 781.643 215 760.376 215H689.616V12.58H760.376ZM758.926 180.49C780.193 180.49 796.626 174.69 808.226 163.09C819.826 151.49 825.626 135.153 825.626 114.08C825.626 93.0067 819.826 76.5733 808.226 64.78C796.626 52.7933 780.193 46.8 758.926 46.8H730.216V180.49H758.926ZM1013.78 12.58V45.35H929.387V97.26H994.057V129.45H929.387V215H888.787V12.58H1013.78Z" fill="black"/>
		    </svg>
	  	</a>
	    <svg
	      xmlns="http://www.w3.org/2000/svg"
	      id="menu-button"
	      className="block h-6 w-6 cursor-pointer md:hidden"
	      fill="none"
	      viewBox="0 0 24 24"
	      stroke="currentColor"
	    >
	      <path
	        stroke-linecap="round"
	        stroke-linejoin="round"
	        stroke-width="2"
	        d="M4 6h16M4 12h16M4 18h16"
	      ></path>
	    </svg>
	  </div>

	  <div
	    className="mt-4 w-full rounded-t-md bg-white md:mt-0 md:w-auto md:bg-neutral-100"
	  >
	    <nav id="nav" className="hidden w-full px-4 py-4 md:flex">
	      <ul
	        className="flex flex-col space-y-1 text-base font-medium text-gray-900 md:flex-row md:space-x-8 md:space-y-0"
	      >
	        <li><a className="hover:text-gray-500" href="/pricing">Pricing</a></li>
	        <li><a className="hover:text-gray-500" href="/#faqs">FAQs</a></li>
	        <li><a className="hover:text-gray-500" href="/#benefits">Benefits</a></li>
	      </ul>
	    </nav>
	  </div>
	  <div
	    id="buttons"
	    className="hidden w-full flex-col justify-end space-y-2 space-x-0 rounded-b-md bg-white px-3 pb-4 md:flex md:w-1/4 md:flex-row md:space-y-0 md:space-x-4 md:bg-neutral-100 md:px-0 md:pb-0"
	  >
	    <a
	      className="w-full rounded-md border border-gray-200 px-3 py-1.5 text-base font-medium hover:text-gray-500 md:w-auto"
	      href="/login"
	    >
	      Log In
	    </a>
	  </div>
<Script id="show-banner" strategy="afterInteractive">
  {`const button = document.querySelector("#menu-button");
      const buttons = document.querySelector("#buttons");
      const nav = document.querySelector("#nav");

      button.addEventListener("click", () => {
        buttons.classList.toggle("hidden");
        nav.classList.toggle("hidden");
      })`}
</Script>

	</div>

  );
}
