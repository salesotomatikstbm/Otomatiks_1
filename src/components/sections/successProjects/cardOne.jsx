import SlideUp from "@/lib/animations/slideUp"
import { cn } from "@/lib/utils"

const CardOne = ({ color, title, number, icon }) => {
    return (
        <SlideUp delay={2}>
            <div className="rounded-lg border border-gray-200 px-[18px] lg:py-7.5 py-5 flex items-center gap-5">
                <div className={cn("rounded-full bg-primary text-cream-foreground lg:w-20 lg:h-20 w-16 h-16 flex items-center justify-center", color)}>
                    {icon}
                </div>
                <div>
                    <h4 className="font-bold lg:text-[32px] md:text-[28px] text-2xl">{number}</h4>
                    <p>{title}</p>
                </div>
            </div>
        </SlideUp>
    )
}
export default CardOne