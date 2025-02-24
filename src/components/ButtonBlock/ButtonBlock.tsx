import { duration } from "../../Page/Home/Home";

function ButtonBlock(prop: any) {
    return (
        <div data-aos={`${prop.aos}`} data-aos-duration={duration} className="flex items-center gap-10">
            <button className="w-[179px] h-[67px] flex items-center justify-center gap-2 rounded-[100%] border-2 border-[#0ca941] cursor-pointer">
                {prop.text}
                <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3199 10.7426C13.4283 10.743 13.5355 10.7191 13.6335 10.6726C13.7315 10.6261 13.8178 10.5583 13.8861 10.474L17.3926 6.1182C17.4994 5.9883 17.5577 5.82536 17.5577 5.6572C17.5577 5.48905 17.4994 5.32611 17.3926 5.19621L13.7627 0.840384C13.6395 0.692128 13.4624 0.598896 13.2705 0.581197C13.0785 0.563498 12.8874 0.622782 12.7391 0.746008C12.5909 0.869233 12.4976 1.04631 12.4799 1.23827C12.4622 1.43024 12.5215 1.62137 12.6447 1.76963L15.8898 5.66083L12.7536 9.55204C12.6649 9.6586 12.6085 9.78836 12.5911 9.92597C12.5738 10.0636 12.5962 10.2033 12.6558 10.3285C12.7154 10.4538 12.8096 10.5593 12.9273 10.6327C13.045 10.7061 13.1812 10.7443 13.3199 10.7426Z" fill="#10AA42" />
                    <path d="M7.05924 9.71398C7.14574 9.71428 7.2312 9.69519 7.30935 9.65812C7.38749 9.62105 7.45634 9.56694 7.51083 9.49977L10.3072 6.02602C10.3924 5.92243 10.4389 5.79248 10.4389 5.65838C10.4389 5.52428 10.3924 5.39434 10.3072 5.29075L7.41241 1.817C7.31414 1.69877 7.17292 1.62441 7.01983 1.6103C6.86674 1.59618 6.71431 1.64346 6.59608 1.74173C6.47785 1.84001 6.40349 1.98122 6.38938 2.13431C6.37526 2.2874 6.42254 2.43983 6.52081 2.55806L9.10876 5.66128L6.60766 8.76449C6.53686 8.84947 6.49189 8.95296 6.47806 9.0627C6.46424 9.17244 6.48214 9.28384 6.52965 9.38373C6.57715 9.48362 6.65228 9.5678 6.74613 9.62633C6.83999 9.68486 6.94864 9.71528 7.05924 9.71398Z" fill="#10AA42" />
                    <path d="M0.995299 8.67343C1.05958 8.67364 1.1231 8.65946 1.18118 8.6319C1.23926 8.60435 1.29043 8.56414 1.33093 8.51421L3.40928 5.93241C3.47257 5.85542 3.50717 5.75884 3.50717 5.65917C3.50717 5.5595 3.47257 5.46293 3.40928 5.38593L1.25778 2.80413C1.18474 2.71625 1.07979 2.66099 0.966005 2.6505C0.852223 2.64001 0.738933 2.67515 0.651058 2.74819C0.563184 2.82123 0.507923 2.92618 0.497432 3.03997C0.486942 3.15375 0.522081 3.26704 0.595119 3.35491L2.51856 5.66132L0.659664 7.96773C0.607046 8.03089 0.573622 8.10781 0.563346 8.18937C0.553071 8.27093 0.566374 8.35373 0.601683 8.42797C0.636992 8.50221 0.692827 8.56478 0.762583 8.60828C0.83234 8.65178 0.913097 8.67439 0.995299 8.67343Z" fill="#10AA42" />
                </svg>
            </button>
            <svg className="mt-[50px]" width="112" height="88" viewBox="0 0 112 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M66.4499 30.2136C65.2298 23.1939 60.1732 17.8232 53.5125 14.2723C46.0039 10.3187 36.568 8.58251 28.7058 9.24747C25.9492 9.54318 23.2703 10.0983 20.7664 10.9201C17.0654 12.0727 13.4293 13.6525 9.96807 15.4991C9.66398 15.6448 9.53476 16.0572 9.70962 16.324C9.88447 16.5908 10.3634 16.7119 10.6675 16.5663C13.6825 15.4457 16.6912 14.4091 19.7711 13.7158C22.8511 13.0225 25.9182 12.4972 29.1409 12.4905C36.3044 12.0255 44.7696 13.6873 51.5209 17.3296C57.0488 20.3713 61.3025 24.7515 62.4249 30.4967C60.6519 30.6988 58.9759 30.9083 57.2807 31.3698C54.0907 32.2236 51.0564 33.5961 48.4367 35.9295C46.5543 37.5592 44.4913 40.2731 44.0008 42.854C43.5359 45.099 44.0483 47.3344 46.3722 48.8638C50.9165 51.9992 55.5818 51.005 59.3401 47.8296C63.7129 44.279 66.7319 38.0062 66.9564 33.8001C68.7165 33.7659 70.3732 33.8083 72.1269 33.8581C79.1419 34.0574 86.0802 36.5315 91.6088 40.8403C96.4836 44.7612 100.557 50.2256 102.501 56.7095C104.154 61.9041 103.645 67.271 102.302 72.0672C101.365 75.3742 99.9621 78.392 98.5914 80.99C97.3372 83.3435 96.1215 85.1932 94.8473 86.5315C94.7438 86.6081 94.7374 86.6921 94.8344 86.6995C94.9315 86.7069 95.0286 86.7144 95.0286 86.7144C96.7624 85.7491 98.7354 84.2108 100.559 82.0698C102.603 79.6079 104.407 76.4518 105.648 72.9992C107.509 67.8203 108.069 61.7815 106.468 55.9152C104.29 48.6532 99.8734 42.5712 94.1507 38.2475C87.8778 33.4594 80.0914 30.5825 72.0023 30.3854C70.1579 30.2442 68.3071 30.1869 66.4499 30.2136ZM62.5431 34.0534C61.1648 34.2012 59.7801 34.4331 58.486 34.7563C55.8978 35.4028 53.4651 36.568 51.3694 38.4347C50.218 39.4446 48.9245 41.0349 48.317 42.5933C47.8322 43.8231 47.6387 45.0753 48.8428 45.9277C51.4386 47.7314 54.1432 46.8404 56.3296 45.0651C59.661 42.3639 62.2795 37.4963 62.5431 34.0534Z" fill="#F47458" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1527 16.6031C12.0971 15.7463 13.0415 14.8894 13.8888 14.0252C14.9431 13.0079 16.0945 11.9979 17.0517 10.9732C19.6972 8.30387 22.0578 5.52829 24.6062 2.85155C24.9167 2.62193 24.8454 2.2786 24.5734 2.00437C24.3015 1.73015 23.9068 1.78439 23.5963 2.01401C21.0151 3.84357 18.2463 5.57429 15.6651 7.40385C14.533 8.16183 13.3945 9.00379 12.3531 9.85317C9.95964 11.7816 7.84457 13.9002 5.73593 15.9349C5.52249 16.172 5.09563 16.6461 4.95997 17.1425C4.82432 17.6389 4.78573 18.1427 4.94773 18.5775C5.10972 19.0122 5.36879 19.4544 6.11965 19.8498C6.50151 19.9635 7.26522 20.1909 8.33302 20.2727C11.9247 20.5477 20.8419 20.1324 22.6991 20.1057L26.4329 19.8004C26.6335 19.7313 26.9247 19.7536 27.2288 19.6079C27.6299 19.4697 28.0375 19.2475 28.2509 19.0104C28.3609 18.8499 28.0761 18.7437 28.2702 18.7585C28.3673 18.766 28.2831 18.5906 28.1796 18.6671C28.0632 18.9116 27.9983 18.4843 27.8948 18.5608C27.5843 18.7905 27.9141 18.3089 27.6229 18.2866C27.5258 18.2792 27.7264 18.2101 27.5322 18.1952C27.3381 18.1803 27.7328 18.1261 27.5451 18.0273C27.4544 17.9359 27.7457 17.9582 27.655 17.8667C27.5644 17.7753 27.8427 17.9656 27.7585 17.7902C27.6679 17.6988 27.8492 17.8816 27.8492 17.8816C27.8492 17.8816 27.862 17.7137 27.9334 18.057C27.8299 18.1335 27.8234 18.2175 27.9205 18.2249C28.0112 18.3164 28.1082 18.3238 28.1147 18.2398C28.9497 18.8106 28.2117 18.2472 28.5936 18.3609C28.6907 18.3684 28.6 18.277 28.6971 18.2844C29.1889 18.2376 28.5158 18.1016 28.7292 17.8645C28.8327 17.788 28.5351 17.8497 28.6386 17.7731C28.7485 17.6126 28.4316 17.9262 28.3602 17.5829C28.3731 17.4149 28.2503 17.7434 28.0755 17.4766C27.8942 17.2938 28.179 17.4001 27.7065 17.1949C27.4217 17.0887 26.6322 17.1972 26.3474 17.0909L22.8464 16.9073C21.2932 16.7883 15.2362 16.8313 11.1527 16.6031Z" fill="#F47458" />
            </svg>
        </div>
    );
}

export default ButtonBlock;