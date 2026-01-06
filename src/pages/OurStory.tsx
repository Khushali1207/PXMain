const Story = () => {
  const timeline = [
    {
      phase: "The Problem",
      title: "Long Queues, Wasted Time",
      description: "Students at BVCOE spent hours waiting in print queues, missing classes and losing precious time.",
      year: "2023",
    },
    {
      phase: "The Idea",
      title: "What If Printing Was Instant?",
      description: "A group of frustrated students imagined a world where printing was as simple as ordering food online.",
      year: "Early 2024",
    },
    {
      phase: "The Solution",
      title: "PX is Born",
      description: "Combining hardware innovation with smart software, PX was created to revolutionize printing.",
      year: "Mid 2024",
    },
    {
      phase: "The Future",
      title: "Scaling Across India",
      description: "From BVCOE to colleges nationwide, PX aims to make printing instant for every student.",
      year: "2025",
    },
  ];

  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient-primary">
            Our Story
          </h1>
          <div className="h-1 w-32 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-xl text-foreground/90 leading-relaxed">
            Born out of frustration and fueled by innovation, PX started with students at Bharati Vidyapeeth College of Engineering who realized that printing was wasting time and energy.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-primary hidden md:block" />

          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative mb-16 ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}
            >
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                <div
                  className="glass rounded-3xl p-8 smooth-transition hover:scale-105 glow-primary animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-accent font-heading font-bold text-lg mb-2">
                    {item.phase}
                  </div>
                  <h3 className="text-3xl font-heading font-bold mb-4 text-gradient-primary">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="text-sm text-primary font-semibold">
                    {item.year}
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 rounded-full bg-primary glow-primary border-4 border-background" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
