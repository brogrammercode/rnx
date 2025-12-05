interface CardProps {
    image: string;
    height: number;
    width?: number;
}

export default function Card({ image, height, width }: CardProps) {
    return (
        <div
            className={`rounded-xl border-2 border-gray-200 overflow-hidden ${width ? `w-[${width}px]` : "w-full"
                } h-[${height}px] p-0.5`}
        >
            <img
                src={image}
                alt="wall"
                className="w-full h-full object-cover rounded-lg"
            />
        </div>
    );
}
