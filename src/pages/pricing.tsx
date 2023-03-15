import Head from "next/head";
import { useState } from "react";

export default function TermsPage() {

return (
	<section class="max-w-4xl mx-auto p-4 space-y-12 mt-24 mb-56 prose">
	  <Head>
        <title>Get Instant Answers to Your PDF Questions with ChatGPT API</title>
      </Head>
	  <h1 class="">Pricing Plans</h1>
	  <div class="flex flex-col md:flex-row justify-center gap-12">
	    <div class="p-8 bg-base-100 rounded-md space-y-4 border basis-1/2">
	      <p class="text-lg font-semibold">Free</p>
	      <p class="text-base-content/80">Start free and see how it works for you</p>
	      <div class="text-4xl font-extrabold tracking-tight">$0</div>
	      <a href="/login" class="w-full rounded-md border border-gray-200 px-3 py-1.5 text-base font-medium hover:text-gray-500 w-full block text-center no-underline py-3">Get Started</a>
	      <ul class="space-y-4 pl-0 text-base-content/80">
	        <li class="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 inline text-accent">
	            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
	          </svg> 1 PDF File</li>
	        <li class="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 inline text-accent">
	            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
	          </svg> 25 questions/month</li>
	        <li class="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 inline text-accent">
	            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
	          </svg> 400,000 characters</li>
	      </ul>
	    </div>
	    <div class="p-8 bg-base-100 rounded-md space-y-4 border border-black basis-1/2">
	      <p class="text-lg font-semibold text-accent">Premium</p>
	      <p class="text-base-content/80">Take your PDF analysis to the next level</p>
	      <div class="flex items-end gap-2">
	        <div class="text-4xl font-extrabold tracking-tight">$19</div>
	        <div class="font-medium text-sm text-base-content/80">Month</div>
	      </div>
	      <a href="/login" class="w-full rounded-md bg-black mb-24 px-3 py-1.5 text-base font-medium text-white hover:bg-gray-800 w-full block text-center no-underline py-3">Get Started</a>
	      <ul class="space-y-4 pl-0 text-base-content/80">
	      	<li class="flex gap-2 items-center">
	        	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 inline text-accent">
	            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
	          </svg> Multiple files upload up to 75
	        </li>
	        <li class="flex gap-2 items-center">
	        	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 inline text-accent">
		           <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
		         </svg> 1750 questions/month
	        </li>
	        <li class="flex gap-2 items-center">
	          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 inline text-accent">
	            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
	          </svg> 3,000,000 Characters
	        </li>
	      </ul>
	    </div>
	  </div>
	</section>
);
}