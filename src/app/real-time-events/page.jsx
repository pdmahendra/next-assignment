"use client";
import React, { useEffect } from "react";
import EventCard from "../components/EventCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { CalendarForm } from "../../components/ui/Datepicker";

import { SelectComponent } from "../../components/ui/SelectComponent";

const RealTimeEventsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 200,
    });
    AOS.refresh();
  }, []);

  const events = [
    {
      img: "./eventImg1.jpg",
      location: "Malta’s capital",
      time: "3.00 AM - 5.00 AM",
      date: "24 Nov, 2024 - 25 Nov, 2024",
      eventTitle: "Valletta Food Festival",
      description: "Sample the best local dishes in Malta’s capital",
    },
    {
      img: "./eventImg2.jpg",
      location: "Malta’s capital",
      time: "3.00 AM - 5.00 AM",
      date: "24 Nov, 2024 - 25 Nov, 2024",
      eventTitle: "Sunset Boat Party",
      description: "Dance the night away while cruising along the coast",
    },
    {
      img: "./eventImg3.jpg",
      location: "Malta’s capital",
      time: "3.00 AM - 5.00 AM",
      date: "24 Nov, 2024 - 25 Nov, 2024",
      eventTitle: "Open-Air Concert in Gozo",
      description: "Enjoy live music under the stars",
    },
    {
      img: "./eventImg4.jpg",
      location: "Malta’s capital",
      time: "3.00 AM - 5.00 AM",
      date: "24 Nov, 2024 - 25 Nov, 2024",
      eventTitle: "Maltese Mosaic Festival",
      description: "A celebration of Malta’s rich history, art, and culture.",
    },
    {
      img: "./eventImg5.jpg",
      location: "Malta’s capital",
      time: "3.00 AM - 5.00 AM",
      date: "24 Nov, 2024 - 25 Nov, 2024",
      eventTitle: "Sunset Serenade Series",
      description:
        "A live music and dining experience by the sea during Malta’s stunning sunsets.",
    },
    {
      img: "./eventImg6.jpg",
      location: "Malta’s capital",
      time: "3.00 AM - 5.00 AM",
      date: "24 Nov, 2024 - 25 Nov, 2024",
      eventTitle: "Heritage Under the Stars",
      description:
        "A nighttime tour and storytelling event at Malta’s iconic historical sites.",
    },
  ];

  const upcomingEvents = [
    {
      img: "./eventImg7.jpg",
      location: "Malta’s capital",
      time: "3.00 AM - 5.00 AM",
      date: "24 Nov, 2024 - 25 Nov, 2024",
      eventTitle: "Taste of Malta Food Fest",
      description:
        "A culinary journey through Maltese flavors with local chefs and food vendors.",
    },
    {
      img: "./eventImg8.jpg",
      location: "Malta’s capital",
      time: "3.00 AM - 5.00 AM",
      date: "24 Nov, 2024 - 25 Nov, 2024",
      eventTitle: "Valletta Vibes Street Fair",
      description:
        "A lively street fair featuring crafts, performances, and local goods in Malta’s capital.",
    },
    {
      img: "./eventImg9.jpg",
      location: "Malta’s capital",
      time: "3.00 AM - 5.00 AM",
      date: "24 Nov, 2024 - 25 Nov, 2024",
      eventTitle: "Golden Sands Wellness Retreat",
      description:
        "A weekend of yoga, meditation, and wellness workshops on Malta’s beautiful beaches.",
    },
  ];

  return (
    <div className="max-w-[90%] mx-auto font-outfit">
      <div
        className="relative bg-cover bg-center w-full h-[400px] rounded-lg"
        style={{ backgroundImage: "url(Hero.jpg)" }}
        data-aos="fade-down"
      >
        <div className="absolute inset-0 flex justify-center items-center text-4xl text-white font-bold">
          Real-Time Events
        </div>
      </div>

      <div className="mt-24">
        <div className="lg:flex justify-between">
          <h1 className="text-[#202020] text-4xl font-bold max-md:text-center">
            Today’s Events
          </h1>
          <div className="flex gap-4 max-md:pt-6">
            <CalendarForm />
            <SelectComponent />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-16 mt-12">
          {events.map((event, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <EventCard
                img={event.img}
                location={event.location}
                time={event.time}
                date={event.date}
                eventTitle={event.eventTitle}
                description={event.description}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <h1
          className="text-[#202020] text-4xl font-bold text-center"
          data-aos="fade-up"
        >
          Upcoming Events
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-md:place-items-center gap-16 mt-12">
          {upcomingEvents.map((event, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <EventCard
                img={event.img}
                location={event.location}
                time={event.time}
                date={event.date}
                eventTitle={event.eventTitle}
                description={event.description}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <h1
          className="text-[#202020] text-4xl font-bold text-center"
          data-aos="fade-up"
        >
          Event locations and nearby services
        </h1>

        <div className="mt-12 max-w-[100%] mx-auto border rounded-xl p-4 md:p-6 bg-[#D9D9D9]">
          <div
            className="relative bg-cover bg-center h-[400px] md:h-[530px] rounded-lg"
            style={{ backgroundImage: "url(map.jpg)" }}
            data-aos="zoom-in"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeEventsPage;
