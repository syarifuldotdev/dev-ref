import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type Props = {
    title: string;
    description: string;
    link: string;
};

export function ItemCard({ title, description, link }: Props) {
    return (
        <Link href={link} target="_blank">
            <Card className="w-[350px] m-2 hover:bg-accent">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
            </Card>
        </Link>
    );
}