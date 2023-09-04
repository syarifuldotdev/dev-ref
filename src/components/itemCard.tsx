"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type Props = {
    description: string;
    link: string;
};

export function ItemCard({ description, link }: Props) {
    return (
        <Link href={`https://${link}`} target="_blank">
            <Card className="w-[350px] m-2 hover:bg-accent">
                <CardHeader>
                    <CardTitle className="lowercase">{link}</CardTitle>
                    <CardDescription className="capitalize">{description}</CardDescription>
                </CardHeader>
            </Card>
        </Link>
    );
}