import { Button } from "@/components/Button";
import Link from "next/link";

interface FormButtonsProps {
    href: string;
    buttonLabel: string;
}

export const FormButtons: React.FC<FormButtonsProps> = ({
    href,
    buttonLabel,
}) => {
    return (
        <div className="flex m-auto my-6 justify-end gap-x-4 w-[80%]">
            <Link
                href={href}
                className="rounded bg-red-500 px-8 py-3 text-centertext-sm font-bold text-white hover:bg-red-400 md:text-base md:py-3 focus:outline-none"
            >
                Cancel
            </Link>
            <Button
                type="submit"
                label={buttonLabel}
                className="rounded bg-sky-500 px-8 py-3 text-centertext-sm font-bold text-white hover:bg-sky-400 md:text-base md:py-3 focus:outline-none"
            />
        </div>
    );
};

