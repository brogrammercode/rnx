interface CardProps {
    image: string;
    height: "h-24" | "h-32" | "h-48" | "h-64" | "h-72" | "h-80" | "h-96" | "h-120" | "h-140";
    width?: "w-24" | "w-32" | "w-48" | "w-full";
    className?: string
}

export default function Card({ className = '', image, height, width = "w-full" }: CardProps) {
    return (
        <div className={`${className} rounded-xl border-2 border-gray-200 overflow-hidden p-0.5 ${height} ${width}`}>
            <img
                src={image}
                alt="wall"
                className="w-full h-full object-cover rounded-lg"
            />
        </div>
    );
}
