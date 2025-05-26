'use client'
import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function Work () {
    return (
        <>
            <Navbar />

            <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        <Card
          title=" Portfolio  "
          description=" responsive portfolio with simple designes , made by next.js "
          image="/portimage.png"
          link="/portfolio.mp4"
        />
        <Card
          title=" CSS project"
          description=" a simple animation using HTML and TailwindCSS "
          image="/flowerimage.png"
          link="/flower .mp4"
        />
        <Card
          title=" CRUD System"
          description=" this system made by ( HTML , CSS , JAVA SCRIPT)"
          image="crudimage.png"
          link="/cruds.mp4"
        />
        <Card
          title=" Scroll "
          description=" this is a responsive project using scroll animations , made by  ( HTML , CSS , JS) "
          image="scrollimage.png"
          link="/scroll .mp4"
        />
      </div>
    </div>

        </>
    )
}