import { ItemCard } from "@/components/itemCard";
import { Items } from "@/configs/items";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex justify-center text-center flex-col my-11">
          <h1 className="text-6xl md:text-8xl text-bold">Dev Ref</h1>
          <p className="text-muted-foreground text-md text-xl">A Lists Of Useful Website For Developers</p>
        </div>

        {Items.map((category, i) => (
          <div className="flex flex-col justify-center my-11" key={i}>
            <h3 className="text-3xl font-medium text-center my-1">{category.title}</h3>
            <div className="flex flex-wrap justify-center">
              {category.items.map((item, j) => (
                <div key={j}>
                  <ItemCard title={item.title} description={item.description} link={item.link} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}