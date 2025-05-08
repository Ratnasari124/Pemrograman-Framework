import type { Metadata } from 'next';
import Image from 'next/image'
//import { defaultMetadata} from '../utils/metadata';



export const metadata: Metadata = {
  title: 'Proyek',
  description: 'Halaman Proyek',
  openGraph: {
    title: 'Proyek',
    description: 'Halaman Proyek.',
  },
};

type ProjectItemProps = {
  name: string;
  url: string;
  urlDisplay: string;
  imageSrc: string;
};

function ProjectItem({ name, url, urlDisplay, imageSrc }: ProjectItemProps) {
  return (
    <li>
      <a href={url} className="block text-center">
      <div className="relative w-[200px] min-h-[270px] mx-auto bg-white rounded-2xl shadow-md shadow-lg p-6  flex flex-col items-center justify-center pt-6 gap-y-4">
          <div className="relative w-[150px] h-[150px] mx-auto">
            <Image 
              className="rounded-2xl overflow-hidden object-cover bg-gray-300" 
              src={imageSrc} 
              alt={name} 
              layout="fill"
            />
          </div>
          <div className="mt-4">
            <div className="font-bold text-base text-black">{name}</div>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mt-2">
              {urlDisplay}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}

export default function Projects() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-black">Proyek Saya</h1>
        <p className="text-base mt-6 text-zinc-600">
          Berikut adalah beberapa proyek yang telah saya kerjakan.
        </p>
      </header>
      <div className="mt-16">
        <h2 className="text-2xl">Aplikasi</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 mt-8 justify-center">
          <ProjectItem name="Aplikasi 1" url="https://example.com" urlDisplay="App Store" imageSrc="/imgp4/project1.png" />
          <ProjectItem name="Aplikasi 2" url="https://example.com" urlDisplay="App Store" imageSrc="/imgp4/project2.png" />
        </ul>
      </div>
    </div>
  );
}
