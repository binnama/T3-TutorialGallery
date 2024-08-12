
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { photoId: number }) {
  const image = await getImage(props.photoId);

  return (
    <div className="flex h-full w-full min-w-0">
        <div className="flex-shrink flex justify-center items-center">
      <img src={image.url} className="object-contain flex-shrink" />;
        </div>
      <div className="flex w-48 flex-col flex-shrink-0 border-l">
        <div className="text-x1 font-bold">{image.name}</div>
      </div>
    </div>
  );
}