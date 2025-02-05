import Image from 'next/image';
 

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p className="text-blue-500">hello world</p>
<Image
src="/images/image.png"
alt="my simple image"
width={400}
height={500}
className='hidden md:block'
/>

    </div> 

    
  );
}
  