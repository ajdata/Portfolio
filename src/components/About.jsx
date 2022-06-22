import React from "react";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div className='flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-20 py-20'>
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300'>
        Soy Alan MERN Stack Software developer y Digital Marketing Advisor con fuertes habilidades de resolución de problemas, motivado y apasionado por el aprendizaje continuo. Actualmente me desempeño como Developer en Bession también imparto mentorías en el área de desarrollo web y el marketing digital de forma voluntaria 

        </p>
        <a href="mailto:alanjesusblanco@gmail.com"
        className='block mt-3 text-md md:text-gray-500 underline hover:text-amber-500'
        >alanjesusblanco@gmail.com</a>
      </div>
      <div>
        <img
          src={
            "https://avatars.githubusercontent.com/u/70245624?s=400&u=29856dd3eea0188f295de6156b0a2686bae625df&v=4"
          }
          alt="Alan Blanco Profile Github"
          className="w-full md:w-10/12 rounded-lg object-cover"
        />
       {/* //Incluir un formulario de contacto  */}
      </div>
    </div>
  );
}

export default About;