'use client'

import React, { useState, useEffect, useRef} from "react";
import Image from "next/image";

const CurrentWorks = ({header = "", currentWorkProjects = []}) => {

	const [isActive, setIsActive] = useState([]);
	const [highestIndex, setHighestIndex] = useState(0);

	const tileRefs = useRef([]);

	useEffect(() => {
		const observers = tileRefs.current.map((ref, index) => {
			if (!ref) return null;

			const observer = new IntersectionObserver(([entry]) => {
				setIsActive((prev) => {
					let updatedActive;

					if (entry.isIntersecting) {
						updatedActive = prev.includes(index) ? prev : [...prev, index];
					} else {
						updatedActive = prev.filter(i => i !== index);
					}

					// Update highest index
					setHighestIndex(updatedActive.length > 0 ? Math.max(...updatedActive) : 0);

					return updatedActive;
				});
			}, {
				threshold: 0.5,
				rootMargin: "50% 0% -50% 0%"
			});

			observer.observe(ref);
			return observer;
		});

		return () => observers.forEach(observer => observer?.disconnect());
	}, []);


  return (
	  <section className="x-margin my-40 animation">
		  <div className="flex flex-row relative">
			  <div className="relative flex flex-col pr-20 gap-40 w-[50%] items-center py-40">
				  <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-purple-400 via-red-500 to-orange-600"></div>
				  {currentWorkProjects.map((project, index) => (
					  <div key={index} ref={(el) => (tileRefs.current[index] = el)}>
						  <Image
							  src={project.image.src}
							  alt={project.image.alt || "Current Project Image"}
							  width={project.image.width || 500}
							  height={project.image.height || 300}
							  priority
							  className={`rounded-[15px] transition-all duration-500 ease-in-out ${highestIndex === index ? "scale-110" : "scale-100]"}`}
						  />
					  </div>
				  ))}
			  </div>

			  <div className="w-[50%]">
				  <div className="sticky top-[0] flex flex-col">
					  {currentWorkProjects[highestIndex] && ( 
						  <div className="flex flex-col mb-6 py-40 px-10">
							  <h3 className="text-xl font-bold">{currentWorkProjects[highestIndex].title}</h3>
							  <p className="text-gray-600">{currentWorkProjects[highestIndex].description}</p>
						  </div>
					  )}
				  </div>
			  </div>
		  </div>
	  </section>

  );
};

export default CurrentWorks;
