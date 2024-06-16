import Card from "@/components/Card";

export default function Home() {
  const images = [
    {
      id: "qwe12341234123",
      imgSrc: "/img/image-1.jpg",
      alt: "Image 1",
    },
    {
      id: "qwe134454553423",
      imgSrc: "/img/image-2.jpg",
      alt: "Image 2",
    },
    {
      id: "qwe123345345345789123",
      imgSrc: "/img/image-3.jpg",
      alt: "Image 3",
    },
    {
      id: "qwe12334rwer5345345789123",
      imgSrc: "/img/image-4.jpg",
      alt: "Image 4",
    },
    {
      id: "qwe12334534534345345tdfgd5789123",
      imgSrc: "/img/image-5.jpg",
      alt: "Image 5",
    },
    {
      id: "qwe123345345345789345123",
      imgSrc: "/img/image-6.jpg",
      alt: "Image 6",
    },
    {
      id: "qwe12334rwer5345345787545679123",
      imgSrc: "/img/image-7.jpg",
      alt: "Image 7",
    },
    {
      id: "qwe12334534534345345tdfgd57896643677123",
      imgSrc: "/img/image-8.jpg",
      alt: "Image 8",
    },
  ];

  return (
    <main>
      <div className="flex gap-4 absolute">
        {images.map((image) => (
          <Card key={image.id} item={image} />
        ))}
      </div>
    </main>
  );
}
