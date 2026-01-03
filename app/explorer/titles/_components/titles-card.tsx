import Image from "next/image";

type TitleCardProps = {
  id?: string;
  titleText: string;
};

export function TitlesCard({ title }: { title: TitleCardProps }) {
  return (
    <div className="border rounded-md inline-block transition-transform duration-200 hover:scale-[1.01]">
      <div className="w-67">
        <Image
          className="mx-auto"
          src="/val-titles.webp"
          alt="titles-card-image"
          width="128"
          height="81"
        />
      </div>
      <p className="text-sm font-medium bg-card p-2 text-center">
        {title.titleText ?? "Missing Title name"}
      </p>
    </div>
  );
}
