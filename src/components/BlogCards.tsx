'use client';

interface BlogCard {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  bgColor: string;
}

const BlogCards = () => {
  const blogCards: BlogCard[] = [
    {
      id: 1,
      title: 'Free eBook: The Best Web Designs of 2015-2016',
      category: 'Web Design',
      date: '09 September',
      image: '/images/blog/blog-1.jpg',
      bgColor: 'bg-yellow-400',
    },
    {
      id: 2,
      title: 'On The Future of Web Design Tools',
      category: 'Resources & Tools',
      date: '08 September',
      image: '/images/blog/blog-2.jpg',
      bgColor: 'bg-teal-500',
    },
    {
      id: 3,
      title: 'Improving UI Design Through Better Typography',
      category: 'Web Design',
      date: '07 September',
      image: '/images/blog/blog-3.jpg',
      bgColor: 'bg-gray-300',
    },
    {
      id: 4,
      title: 'Vote now for August\'s Site of the Month!',
      category: 'UI Inspiration',
      date: '06 September',
      image: '/images/blog/blog-4.jpg',
      bgColor: 'bg-gray-800',
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16">
          <span className="text-rose-600 font-black tracking-[0.3em] text-[11px] uppercase mb-4 block">Insights & News</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase leading-none">
            Latest <br /><span className="text-rose-600 italic">Articles</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogCards.map((card) => (
            <div
              key={card.id}
              className="bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:bg-white hover:border-rose-100 hover:shadow-2xl transition duration-500 cursor-pointer group"
            >
              {/* Image Container */}
              <div className={`${card.bgColor} h-40 w-full overflow-hidden relative`}>
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-500 z-10" />
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Category Tag */}
                <p className="text-rose-600 text-[10px] font-black mb-3 uppercase tracking-widest">
                  {card.category}
                </p>

                {/* Title */}
                <h3 className="text-lg font-black text-slate-950 mb-6 group-hover:text-rose-600 transition duration-300 line-clamp-3 leading-tight tracking-tight uppercase">
                  {card.title}
                </h3>

                {/* Date */}
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                  {card.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCards;


