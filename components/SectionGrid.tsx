import { Button } from "@/components/ui/button";
import PlayButton from "./PlayButton";

const SectionGrid = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold">Section Title</h2>
        <Button variant="link" className="text-sm text-zinc-400 hover:text-white">
          Show all
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="bg-zinc-800/40 p-4 rounded-md hover:bg-zinc-700/40 transition-all group cursor-pointer"
          >
            <div className="relative mb-4">
              <div className="aspect-square rounded-md shadow-lg overflow-hidden">
                <img
                  src="/placeholder-image.jpg"
                  alt="Song"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <PlayButton />
            </div>
            <h3 className="font-medium mb-2 truncate">Song Title</h3>
            <p className="text-sm text-zinc-400 truncate">Artist Name</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionGrid;
