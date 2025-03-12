"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MapPin, Phone, Mail, Leaf, Sprout, Users, TreePine, BarChart3, Globe, Menu } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Ínicio", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Parceiros", href: "#partners" },
  { label: "Região", href: "#region" },
  { label: "Contato", href: "#contact" },
];

const partners = [1, 2, 3, 4];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 hidden lg:block ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            <span className={`font-bold text-xl ${isScrolled ? "text-gray-900" : "text-white"}`}>
              Tuía Ágricola
            </span>
            <div className="flex gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`hover:text-green-500 transition-colors ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <nav className="fixed w-full z-50 lg:hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="font-bold text-xl text-white">AgriTech</span>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-lg hover:text-green-500 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80"
            alt="Agricultural field at sunset"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto relative z-10 text-white px-4 pt-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Growing Tomorrow's <br />Agriculture Today
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl">
            Pioneering sustainable farming practices with innovative technology 
            and deep-rooted community values.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Explore Our Services
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                Our Commitment to Sustainable Agriculture
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Since 1985, we've been at the forefront of agricultural innovation, 
                combining traditional farming wisdom with cutting-edge technology to 
                create sustainable solutions for modern farming challenges.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Leaf className="text-green-600 h-6 w-6" />
                  <span>Eco-friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sprout className="text-green-600 h-6 w-6" />
                  <span>Sustainable</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-green-600 h-6 w-6" />
                  <span>Community-focused</span>
                </div>
                <div className="flex items-center gap-2">
                  <TreePine className="text-green-600 h-6 w-6" />
                  <span>Organic practices</span>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80"
                alt="Farmer in field"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Crop Management",
                icon: <Sprout className="h-10 w-10 text-green-600" />,
                description: "Advanced crop monitoring and optimization solutions for maximum yield."
              },
              {
                title: "Soil Analysis",
                icon: <BarChart3 className="h-10 w-10 text-green-600" />,
                description: "Comprehensive soil testing and fertility management programs."
              },
              {
                title: "Agricultural Consulting",
                icon: <Globe className="h-10 w-10 text-green-600" />,
                description: "Expert guidance on sustainable farming practices and technology integration."
              }
            ].map((service, index) => (
              <Card key={index} className="transition-transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <Button variant="outline" className="mt-4">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Trusted Partners</h2>
          <div className="overflow-hidden relative">
            <div className="flex animate-slide min-w-[200%] gap-4">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="flex-shrink-0 w-1/2 md:w-1/4 px-2">
                  <div className="bg-gray-100 h-24 sm:h-32 rounded-lg flex items-center justify-center p-4">
                    {/* Replace with actual partner logos */}
                    <span className="text-gray-400">Partner {partner}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="region" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Region</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-[300px] sm:h-[400px] rounded-lg">
              <div className="h-full flex items-center justify-center">
                <span className="text-gray-600">Interactive Map</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Serving Our Local Community</h3>
              <p className="text-lg text-gray-700 mb-6">
                We're proud to serve farmers and agricultural businesses across the region, 
                providing expert solutions and support to help our community thrive.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-green-600" />
                  <span>Coverage across 5 counties</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-green-600" />
                  <span>Supporting 200+ local farms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Nos Contate</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-green-400" />
                  <span>(44) 99941-8023</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-green-400" />
                  <span>contact@agritech.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-green-400" />
                  <span>Avenida Armelindo Trombini, 2896. Jardim Flora III, Campo Mourão - PR </span>
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="text-2xl font-bold mb-6">Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:text-green-400">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2025 Tuía Ágricola</p>
          </div>
        </div>
      </footer>
    </main>
  );
}