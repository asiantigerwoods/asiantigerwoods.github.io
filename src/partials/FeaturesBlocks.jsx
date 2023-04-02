import React from 'react';

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Coming in July 2023. </h2>
            <p className="text-xl text-gray-400">Obliq will give you the ability to enhance the way you work out.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-green-200" width="64" height="64" rx="32" />
                <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40" x="12" y="12"><path d="M705 928 447 668q-23 8-46 13t-47 5q-97.083 0-165.042-67.667Q121 550.667 121 454q0-31 8.158-60.388Q137.316 364.223 152 338l145 145 92-86-149-149q25.915-15.158 54.957-23.579Q324 216 354 216q99.167 0 168.583 69.417Q592 354.833 592 454q0 24-5 47t-13 46l259 258q11 10.957 11 26.478Q844 847 833 858l-76 70q-10.696 11-25.848 11T705 928Zm28-57 40-40-273-273q16-21 24-49.5t8-54.5q0-75-55.5-127T350 274l101 103q9 9 9 22t-9 22L319 545q-9 9-22 9t-22-9l-97-96q3 77 54.668 127T354 626q25 0 53-8t49-24l277 277ZM476 572Z" fill='white'/></svg>
              </svg>
              <h4 className="h4 mb-2">Build Routines</h4>
              <p className="text-lg text-gray-400 text-center">Your own workout in your pocket! Build and save your routine within the app using an intuitive template. No more spreadsheets, note apps, or notebooks.</p>
            </div>


            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-green-200" cx="32" cy="32" r="32" />
                <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40" x="12" y="12"><path d="m826 471-42-42 45-45-157-157-45 45-43-43 30-31q23-23 57-22.5t57 23.5l129 129q23 23 23 56.5T857 441l-31 30ZM346 952q-23 23-56.5 23T233 952L90 809q-17-17.378-17-42.689T90 724l44-44 43 42-45 45 157 157 45-45 42 43-30 30Zm397-308 85-85-331-331-85 85 331 331ZM463 924l86-86-331-331-86 86 331 331Zm9-248 109-109-92-92-109 109 92 92Zm33 290q-16.934 17-41.967 17Q438 983 421 966L90 635q-17-16.934-17-41.967Q73 568 90 551l85-86q17.378-17 42.689-17T260 465l77 77 110-110-77-77q-17-16.934-17-41.967Q353 288 370 271l85-86q17.378-17 42.689-17T540 185l331 331q17 17.378 17 42.689T871 601l-86 85q-16.934 17-41.967 17Q718 703 701 686l-77-77-110 110 77 77q17 17.378 17 42.689T591 881l-86 85Z" fill='white'/></svg>
              </svg>
              <h4 className="h4 mb-2">Kickstart Your Goals</h4>
              <p className="text-lg text-gray-400 text-center">Available pre-made routines for you. Finding random routines online are days of the past. Get matched with a routine that helps you acheive your goals. </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-green-200" width="64" height="64" rx="32" />
                <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40" x="12" y="12"><path d="M393 576q-21 0-34.5-16t-9.5-36l15-90q8-43 40.5-70.5T480 336q44 0 76.5 27.5T597 434l15 90q4 20-9.5 36T568 576H393Zm18-60h139l-12-72q-4-21-20-34.5T480.5 396q-21.5 0-37.5 13.5T423 444l-12 72ZM139 647.097q-20 .903-34.85-7.897-14.85-8.8-19.35-27.28Q83 604 84.5 596t4.5-15.333q0 .916-1-3.667 0-1-8.8-21.059Q77 545 81 536.5q4-8.5 12-16.5l2-2q2-17 13.777-28 11.776-11 29.223-11 1 0 16.158 3l2.842-1q5-4 11.667-6.5 6.666-2.5 14.166-2.5Q192 472 200 475.5q8 3.5 12.302 9.625.861 0 1.291.437.43.438 1.291.438 12.046.875 21.081 7.438Q245 500 250 511.333q2 6.103 1.5 11.77-.5 5.666-2.5 10.897 0 2 1 3 6.067 6.151 9.533 13.621Q263 558.091 263 566q0 2-5 18.19-1 1.905 0 3.81 1 4 1 14 0 18-15.217 31.548-15.218 13.549-36.957 13.549H139ZM807.911 646Q779 646 758.5 625.31T738 575.565q0-10.565 3.5-20.065Q745 546 750 538l-25-22q-8-8-3-18t15.535-10h70.232q28.971 0 49.602 20.673Q878 529.346 878 558.376v17.594q0 29.03-20.589 49.53-20.588 20.5-49.5 20.5ZM0 816v-53q0-39.464 42-63.232T150.398 676q12.158 0 23.38.5T196 678.727q-8 17.273-12 34.842-4 17.57-4 37.431v65H0Zm240 0v-65q0-65 66.5-105T480 606q108 0 174 40t66 105v65H240Zm570-140q67.5 0 108.75 23.768T960 763v53H780v-65q0-19.861-3.5-37.431Q773 696 765 678.727q11-1.727 22.171-2.227 11.172-.5 22.829-.5Zm-330.2-10Q400 666 350 690q-50 24-50 61v5h360v-6q0-36-49.5-60t-130.7-24Zm.2 90Zm1-300Z" fill='white'/></svg>
              </svg>
              <h4 className="h4 mb-2">Socially Exercise</h4>
              <p className="text-lg text-gray-400 text-center">Collaborate with your friends to create and share routines. Show off your progress and stay in the loop. Hold your friends accountable with streaks.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-green-200" width="64" height="64" rx="32" />
                <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40" x="12" y="12"><path d="M527 976v-60q35-6 69-19.5t66-37.5l43 44q-40 30-85 48t-93 25Zm-90 0q-137-21-226-122t-89-241q0-75 28-140.5T227 358q49-49 114.5-77T482 253h20l-79-79 44-44 153 153-153 153-44-44 79-79h-20q-127 0-213.5 86.5T182 613q0 117 72.5 199.5T437 916v60Zm331-136-44-44q23-30 36.5-65t18.5-73h61q-7 51-25.5 97.5T768 840Zm72-272h-61q-5-35-18.5-70T724 430l44-43q29 40 47 85.5t25 95.5Z" fill='white'/></svg>
              </svg>
              <h4 className="h4 mb-2">Automate Progression</h4>
              <p className="text-lg text-gray-400 text-center">Know how much to lift with AI optimizing the weight for each set and rep. Routines will automatically calculate your progressive overload based your progress. Streamline your progression automatically.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-green-200" width="64" height="64" rx="32" />
                <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40" x="13" y="13"><path d="M559 959q-18 18-43.5 18T472 959L97 584q-10-10-13.5-21T80 540V236q0-26 17-43t43-17h304q12 0 24 3.5t22 13.5l373 373q19 19 19 44.5T863 655L559 959Zm-41-41 304-304-378-378H140v304l378 378ZM245 392q21 0 36.5-15.5T297 340q0-21-15.5-36.5T245 288q-21 0-36.5 15.5T193 340q0 21 15.5 36.5T245 392ZM140 236Z" fill='white'/></svg>
              </svg>
              <h4 className="h4 mb-2">Monetize Your Services</h4>
              <p className="text-lg text-gray-400 text-center">One-stop shop for trainers, bodybuilders, and influencers to host your routines. Say bye to upkeeping a personal website and collecting payments from your clients. Tier-based system to interact with your subscribers.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-green-200" width="64" height="64" rx="32" />
                <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40" x="12" y="12"><path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-60q142.375 0 241.188-98.812Q820 718.375 820 576q0-60.662-21-116.831Q778 403 740 357L261 836q45 39 101.493 59.5Q418.987 916 480 916ZM221 795l478-478q-46-39-102.169-60T480 236q-142.375 0-241.188 98.812Q140 433.625 140 576q0 61.013 22 117.506Q184 750 221 795Z" fill='white'/></svg>
              </svg>
              <h4 className="h4 mb-2">No More BS</h4>
              <p className="text-lg text-gray-400 text-center">No ads, no hidden fees, no limits on how many workouts you can create, no required subscriptions. Free to download.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
