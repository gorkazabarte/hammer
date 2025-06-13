import { Carousel } from 'react-responsive-carousel';

export default function MediaCarousel() {
  return (
    <section className="p-8 text-white-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Project Media</h2>

      <div className="max-w-4xl mx-auto">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          dynamicHeight
        >
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
            <img src="/media/terraform.png" alt="Terraform Infrastructure" className="w-full h-full object-cover"/>
          </div>
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
            <img src="/media/python.png" alt="Python" className="w-full h-full object-cover"/>
          </div>
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
            <img src="/media/k8s.png" alt="K8"  className="w-full h-full object-cover"/>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

