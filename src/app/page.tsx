import { ItemCard } from "@/components/itemCard";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Items } from "@/config/items";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex justify-center text-center flex-col my-11">
          <h1 className="text-6xl md:text-8xl text-bold">Dev Ref</h1>
          <p className="text-muted-foreground text-md text-xl">A Lists Of Useful Website For Developers</p>
        </div>

        <div className="flex flex-col justify-center my-11">
          <div className="flex flex-col justify-center my-11">
            <h3 className="text-3xl font-medium text-center my-1">Start Learning</h3>
            <div className="flex flex-wrap justify-center">
              <Link href="https://syarifuldotdev.notion.site/syaAcademy-ac7000aa1e574a168f74af5e53b17081?pvs=4" target="_blank">
                <Card className="w-[350px] m-2 hover:bg-accent">
                  <CardHeader>
                    <CardTitle>syaAcademy</CardTitle>
                    <CardDescription className="capitalize">Programmers Starter Pack</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </div>

        {Items.map((category, i) => (
          <div className="flex flex-col justify-center my-11" key={i}>
            <h3 className="text-3xl font-medium text-center my-1">{category.category}</h3>
            <div className="flex flex-wrap justify-center">
              {category.items.map((item, j) => (
                <div key={j}>
                  <ItemCard description={item.description} link={item.link} />
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>

    </>
  );
}