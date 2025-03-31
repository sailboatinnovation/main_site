const TestimonialsGrid = () => {
  const items = [
    { src: "https://placehold.co/300x150/teal/darkgray", title: "Client 1", description: "This is the first client description." },
    { src: "https://placehold.co/300x150/teal/darkgray", title: "Client 2", description: "This is the second client description." },
    { src: "https://placehold.co/300x150/teal/darkgray", title: "Client 3", description: "This is the third client description." },
    { src: "https://placehold.co/300x150/teal/darkgray", title: "Client 4", description: "This is the fourth client description." }
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-[rgba(255,255,255,0.8)] rounded-lg shadow-md overflow-hidden p-4 text-center">
            <img src={item.src} alt={item.title} className="w-full h-auto rounded-md" />
            <h3 className="text-gray-400 mt-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsGrid;
