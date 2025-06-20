import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    id: "4Z2Im13A_bw",
    title: "Vídeo sobre investimentos",
    startTime: 1970
  },
  {
    id: "F4wctF9uNEs",
    title: "Educação financeira"
  },
  {
    id: "V1juuOvuxWo",
    title: "Estratégias de investimento"
  },
  {
    id: "zPV7aNb0ZsE",
    title: "Análise de mercado",
    startTime: 3030
  },
  {
    id: "S_bsRY0Pzg4",
    title: "Planejamento financeiro"
  },
  {
    id: "anF9CRB8pwQ",
    title: "Investimentos inteligentes"
  }
];

export default function VideoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = videos.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // Change slide every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const getEmbedUrl = (video: typeof videos[0]) => {
    const baseUrl = `https://www.youtube.com/embed/${video.id}`;
    return video.startTime ? `${baseUrl}?start=${video.startTime}` : baseUrl;
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--gold)]">
          Conteúdos Extras
        </h2>
        
        {/* Video Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {videos.map((video, index) => (
                <div key={video.id} className="w-full flex-shrink-0 px-3">
                  <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-xl overflow-hidden">
                    <div className="aspect-video">
                      <iframe
                        src={getEmbedUrl(video)}
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                        title={video.title}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Navigation */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[var(--gold)]/20 hover:bg-[var(--gold)]/40 border-[var(--gold)] text-[var(--gold)] rounded-full w-12 h-12"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[var(--gold)]/20 hover:bg-[var(--gold)]/40 border-[var(--gold)] text-[var(--gold)] rounded-full w-12 h-12"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-[var(--gold)]' : 'bg-gray-600 hover:bg-[var(--gold)]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
