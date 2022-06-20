export default function Features({ features }: { features: any[] }) {
  return (
    <ul
      role="list"
      className="xs:px-8 mx-auto mt-0 grid grid-cols-1 gap-5 py-10 sm:max-w-3xl sm:grid-cols-2 sm:gap-8 sm:px-8 md:gap-7 md:px-2 lg:max-w-6xl lg:grid-cols-4 xl:gap-9 xl:px-0"
    >
      {features.map((feature) => (
        <li
          tabIndex={0}
          key={feature.name}
          className="col-span-1 flex cursor-pointer flex-col divide-y divide-gray-200 border-2 border-white bg-white text-center shadow hover:border-blue-600 active:ring-2"
        >
          <div className="flex flex-1 flex-col px-8 py-9">
            <img
              className="mx-auto h-24 w-24 shrink-0"
              src={feature.imageUrl}
              alt=""
            />
            <span className="mx-auto mt-4 w-36 text-base font-bold uppercase text-blue-800">
              {feature.name}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
