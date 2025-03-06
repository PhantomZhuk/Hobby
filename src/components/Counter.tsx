import { useEffect, useRef, useState } from "react";

function Counter({ targetNumber, text }: { targetNumber: number; text: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                if (!entry.isIntersecting) setCount(0);
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const duration = 1000;
        const stepTime = Math.abs(Math.floor(duration / targetNumber));

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= targetNumber) clearInterval(timer);
        }, stepTime);

        return () => clearInterval(timer);
    }, [isVisible, targetNumber]);

    return (
        <div className="w-[150px] flex flex-col gap-5">
            <svg className="absolute z-0 mt-[-20px]" width="100" height="87" viewBox="0 0 85 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.7688 5.68609C39.4052 -5.97915 56.5791 4.71577 69.8427 14.2511C80.8477 22.1626 89.0008 34.3058 80.7549 48.8103C72.6322 63.0979 53.9142 69.4173 37.5897 70.9834C21.3453 72.5418 5.95295 69.0768 2.66213 56.3021C-1.55946 39.9142 1.32487 17.8568 20.7688 5.68609Z" fill="#ECF8F0" />
            </svg>
            <h2 className="z-2 font-[800] text-[60px] leading-[70%] text-[#0ca941]" ref={ref}>{count}+</h2>
            <p className="z-2 font-[600] text-[18px] leading-[178%] text-[#678570]">{text}</p>
        </div>
    );
}

export default Counter;