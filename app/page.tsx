"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Camera, Heart, Award, Users, Star, Clock, Check, Phone, Mail, MapPin, Instagram, Facebook, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const navLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Investment', href: '#pricing' },
    { label: 'Contact', href: '#contact' }
  ]

  const stats = [
    { number: '500+', label: 'Weddings Captured', icon: Camera },
    { number: '12', label: 'Years of Excellence', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Heart },
    { number: '50+', label: 'Destination Weddings', icon: Users }
  ]

  const portfolioImages = [
    { id: 1, couple: 'Sarah & Michael', date: 'September 2024', venue: 'The Grand Estate', aspect: 'tall' },
    { id: 2, couple: 'Emily & James', date: 'August 2024', venue: 'Seaside Manor', aspect: 'wide' },
    { id: 3, couple: 'Victoria & Alexander', date: 'July 2024', venue: 'Garden Pavilion', aspect: 'square' },
    { id: 4, couple: 'Isabella & William', date: 'June 2024', venue: 'Historic Chapel', aspect: 'tall' },
    { id: 5, couple: 'Charlotte & Benjamin', date: 'May 2024', venue: 'Vineyard Estate', aspect: 'wide' },
    { id: 6, couple: 'Olivia & Theodore', date: 'April 2024', venue: 'Mountain Lodge', aspect: 'square' },
    { id: 7, couple: 'Sophia & Harrison', date: 'March 2024', venue: 'Coastal Cliffs', aspect: 'tall' },
    { id: 8, couple: 'Amelia & Sebastian', date: 'February 2024', venue: 'Art Gallery', aspect: 'wide' }
  ]

  const services = [
    {
      title: 'Intimate Elopements',
      description: 'For couples seeking an intimate celebration. Perfect coverage for ceremonies with fewer than 30 guests, capturing every tender moment of your private vows.',
      features: ['4 Hours of Coverage', 'Online Gallery', '200+ Edited Images', 'Engagement Session'],
      accent: 'border-l-4'
    },
    {
      title: 'Signature Weddings',
      description: 'Our most beloved collection, designed for couples who desire comprehensive documentation of their wedding day from preparations to the last dance.',
      features: ['8 Hours of Coverage', 'Second Photographer', '500+ Edited Images', 'Heirloom Album', 'Engagement Session'],
      accent: 'border-l-4',
      popular: true
    },
    {
      title: 'Destination Celebrations',
      description: 'For the adventurous souls. Multi day coverage for destination weddings, including pre wedding events and extended family portraits.',
      features: ['Full Weekend Coverage', 'Two Photographers', '800+ Edited Images', 'Premium Album', 'Engagement Session', 'Travel Included'],
      accent: 'border-l-4'
    }
  ]

  const testimonials = [
    {
      name: 'Victoria & Alexander',
      quote: 'Lumiere Studio captured our wedding with such artistry and grace. Every photograph feels like a piece of fine art that tells our love story beautifully.',
      rating: 5,
      venue: 'Garden Pavilion Wedding'
    },
    {
      name: 'Emily & James',
      quote: 'From our first meeting, we knew we were in exceptional hands. The attention to detail and ability to capture genuine emotions exceeded our dreams.',
      rating: 5,
      venue: 'Seaside Manor Celebration'
    },
    {
      name: 'Sarah & Michael',
      quote: 'Our wedding gallery brought tears to our eyes. These photographs are treasures we will cherish for generations. Truly heirloom quality work.',
      rating: 5,
      venue: 'Grand Estate Wedding'
    },
    {
      name: 'Charlotte & Benjamin',
      quote: 'The experience was as beautiful as the final images. Professional, warm, and incredibly talented. Our album is a work of art.',
      rating: 5,
      venue: 'Vineyard Estate Wedding'
    },
    {
      name: 'Isabella & William',
      quote: 'Every guest has complimented our wedding photos. Lumiere Studio has a gift for capturing light and emotion in the most stunning ways.',
      rating: 5,
      venue: 'Historic Chapel Ceremony'
    },
    {
      name: 'Olivia & Theodore',
      quote: 'We traveled from abroad for our destination wedding, and Lumiere made us feel completely at ease. The results are breathtaking.',
      rating: 5,
      venue: 'Mountain Lodge Retreat'
    }
  ]

  const pricingTiers = [
    {
      name: 'Petite',
      subtitle: 'Intimate Celebrations',
      description: 'Perfect for elopements and intimate gatherings',
      features: [
        '4 Hours of Photography',
        'One Photographer',
        '200+ Edited Images',
        'Online Gallery',
        'Print Release'
      ]
    },
    {
      name: 'Signature',
      subtitle: 'Most Popular',
      description: 'Our most beloved collection for classic weddings',
      features: [
        '8 Hours of Photography',
        'Two Photographers',
        '500+ Edited Images',
        'Online Gallery',
        'Engagement Session',
        'Heirloom Album',
        'Print Release'
      ],
      popular: true
    },
    {
      name: 'Prestige',
      subtitle: 'The Complete Experience',
      description: 'Comprehensive coverage for grand celebrations',
      features: [
        'Full Day Coverage',
        'Two Photographers',
        '800+ Edited Images',
        'Online Gallery',
        'Engagement Session',
        'Premium Heirloom Album',
        'Parent Albums',
        'Print Release',
        'Same Day Preview'
      ]
    }
  ]

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
  ]

  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')
    
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSTRUCTOR_API}/v1/forms/${process.env.NEXT_PUBLIC_PROJECT_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formState)
        }
      )
      
      if (response.ok) {
        setFormStatus('success')
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length)
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length)

  const nextTestimonial = () => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const GoldOrnament = () => (
    <span className="text-2xl" style={{ color: '#D4AF37' }}>∴</span>
  )

  const GoldDivider = () => (
    <div className="flex items-center justify-center gap-4 my-12">
      <div className="h-px w-16 md:w-24" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
      <GoldOrnament />
      <div className="h-px w-16 md:w-24" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
    </div>
  )

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FEFAF3' }}>
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ backgroundColor: 'rgba(254, 250, 243, 0.95)', backdropFilter: 'blur(10px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="w-6 h-6" style={{ color: '#D4AF37' }} />
              <span className="text-2xl tracking-wider" style={{ fontFamily: 'Playfair Display, serif', color: '#2C2C2C' }}>
                Lumiere Studio
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm tracking-widest uppercase transition-colors duration-300 hover:opacity-70"
                  style={{ color: '#2C2C2C', fontFamily: 'Inter, sans-serif' }}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="tracking-widest uppercase text-xs px-6 py-5 transition-all duration-300"
                style={{ backgroundColor: '#D4AF37', color: '#FEFAF3' }}
              >
                <Link href="#contact">Book Consultation</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" style={{ color: '#2C2C2C' }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: '#2C2C2C' }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ backgroundColor: '#FEFAF3' }}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm tracking-widest uppercase py-2"
                style={{ color: '#2C2C2C' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full tracking-widest uppercase text-xs py-5 mt-4"
              style={{ backgroundColor: '#D4AF37', color: '#FEFAF3' }}
            >
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Book Consultation</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Split */}
      <section className="min-h-screen pt-20 flex flex-col lg:flex-row">
        <div className="flex-1 flex items-center justify-center px-6 py-16 lg:py-0 lg:px-12 xl:px-20" style={{ backgroundColor: '#FEFAF3' }}>
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
              Fine Art Wedding Photography
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#2C2C2C' }}>
              Capturing Love in Its Most{' '}
              <span style={{ color: '#D4AF37' }}>Luminous</span>{' '}
              Form
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#2C2C2C', opacity: 0.8, fontFamily: 'Inter, sans-serif' }}>
              We believe your wedding photographs should be as timeless and elegant as your love story. 
              Each image we create is a piece of art, designed to be treasured for generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="tracking-widest uppercase text-xs px-8 py-6 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#D4AF37', color: '#FEFAF3' }}
              >
                <Link href="#portfolio">View Portfolio</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="tracking-widest uppercase text-xs px-8 py-6 transition-all duration-300"
                style={{ borderColor: '#D4AF37', color: '#D4AF37' }}
              >
                <Link href="#contact">Begin Your Journey</Link>
              </Button>
            </div>
          </div>
        </div>
        <div
          className="flex-1 min-h-[50vh] lg:min-h-screen"
          style={{
            background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 30%, #FEFAF3 50%, #E8E3DC 70%, #D4AF37 100%)'
          }}
        >
          <div className="w-full h-full flex items-center justify-center p-8">
            <div
              className="w-full max-w-md aspect-[3/4] rounded-sm flex items-center justify-center"
              style={{
                background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.3) 0%, rgba(254, 250, 243, 0.5) 50%, rgba(212, 175, 55, 0.2) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.5)'
              }}
            >
              <div className="text-center p-8">
                <Camera className="w-16 h-16 mx-auto mb-4" style={{ color: '#D4AF37' }} />
                <p className="text-sm tracking-widest uppercase" style={{ color: '#2C2C2C', fontFamily: 'Inter, sans-serif' }}>
                  Golden Hour Portrait
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16" style={{ backgroundColor: '#2C2C2C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3" style={{ color: '#D4AF37' }} />
                <p className="text-3xl md:text-4xl mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#FEFAF3' }}>
                  {stat.number}
                </p>
                <p className="text-xs tracking-widest uppercase" style={{ color: '#E8E3DC', fontFamily: 'Inter, sans-serif' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Portfolio Gallery */}
      <section id="portfolio" className="py-20 lg:py-32" style={{ backgroundColor: '#F8F6F3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
              Our Work
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#2C2C2C' }}>
              Love Stories We Have Told
            </h2>
            <GoldDivider />
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {portfolioImages.map((image, index) => (
              <div
                key={image.id}
                className={`break-inside-avoid group cursor-pointer relative overflow-hidden ${
                  image.aspect === 'tall' ? 'aspect-[3/4]' : image.aspect === 'wide' ? 'aspect-[4/3]' : 'aspect-square'
                }`}
                onClick={() => openLightbox(index)}
              >
                <div
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(${index * 45}deg, rgba(212, 175, 55, 0.2) 0%, rgba(232, 227, 220, 0.4) 50%, rgba(254, 250, 243, 0.3) 100%)`
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center text-white">
                    <p className="text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>{image.couple}</p>
                    <p className="text-xs tracking-widest uppercase mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>{image.date}</p>
                    <p className="text-xs mt-2 opacity-80">{image.venue}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button
            className="absolute top-6 right-6 p-2 text-white hover:opacity-70 transition-opacity"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-6 p-2 text-white hover:opacity-70 transition-opacity"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            className="absolute right-6 p-2 text-white hover:opacity-70 transition-opacity"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="max-w-4xl w-full mx-4 text-center" onClick={(e) => e.stopPropagation()}>
            <div
              className="w-full aspect-[4/3] mb-6"
              style={{
                background: `linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, rgba(254, 250, 243, 0.2) 100%)`
              }}
            />
            <p className="text-2xl text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              {portfolioImages[currentImageIndex].couple}
            </p>
            <p className="text-sm tracking-widest uppercase text-white/70 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              {portfolioImages[currentImageIndex].venue} · {portfolioImages[currentImageIndex].date}
            </p>
          </div>
        </div>
      )}

      {/* Services Cards */}
      <section id="services" className="py-20 lg:py-32" style={{ backgroundColor: '#FEFAF3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#2C2C2C' }}>
              Tailored Photography Experiences
            </h2>
            <GoldDivider />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-500 hover:-translate-y-2 ${service.accent}`}
                style={{
                  backgroundColor: '#F8F6F3',
                  borderColor: service.popular ? '#D4AF37' : '#E8E3DC',
                  borderLeftColor: '#D4AF37'
                }}
              >
                {service.popular && (
                  <Badge
                    className="absolute top-4 right-4 text-xs tracking-widest uppercase"
                    style={{ backgroundColor: '#D4AF37', color: '#FEFAF3' }}
                  >
                    Most Popular
                  </Badge>
                )}
                <div className="p-8">
                  <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#2C2C2C' }}>
                    {service.title}
                  </h3>
                  <p className="mb-6 leading-relaxed" style={{ color: '#2C2C2C', opacity: 0.8, fontFamily: 'Inter, sans-serif' }}>
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm" style={{ color: '#2C2C2C', fontFamily: 'Inter, sans-serif' }}>
                        <Check className="w-4 h-4 flex-shrink-0" style={{ color: '#D4AF37' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full tracking-widest uppercase text-xs py-5 transition-all duration-300"
                    style={{ backgroundColor: service.popular ? '#D4AF37' : 'transparent', color: service.popular ? '#FEFAF3' : '#D4AF37', border: '1px solid #D4AF37' }}
                  >
                    <Link href="#contact">Inquire Now</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section id="testimonials" className="py-20 lg:py-32" style={{ backgroundColor: '#2C2C2C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
              Kind Words
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#FEFAF3' }}>
              From Our Beloved Couples
            </h2>
            <div className="flex items-center justify-center gap-4 my-12">
              <div className="h-px w-16 md:w-24" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
              <GoldOrnament />
              <div className="h-px w-16 md:w-24" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 transition-all duration-500 hover:-translate-y-1"
                style={{ backgroundColor: 'rgba(254, 250, 243, 0.05)', borderColor: 'rgba(212, 175, 55, 0.2)' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #E8E3DC 100%)' }}
                  >
                    <Heart className="w-6 h-6" style={{ color: '#FEFAF3' }} />
                  </div>
                  <div>
                    <p className="text-lg" style={{ fontFamily: 'Playfair Display, serif', color: '#FEFAF3' }}>
                      {testimonial.name}
                    </p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" style={{ color: '#D4AF37' }} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="italic leading-relaxed mb-4" style={{ fontFamily: 'Crimson Text, serif', color: '#E8E3DC' }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-xs tracking-widest uppercase" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
                  {testimonial.venue}
                </p>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <Card
              className="p-8"
              style={{ backgroundColor: 'rgba(254, 250, 243, 0.05)', borderColor: 'rgba(212, 175, 55, 0.2)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #E8E3DC 100%)' }}
                >
                  <Heart className="w-6 h-6" style={{ color: '#FEFAF3' }} />
                </div>
                <div>
                  <p className="text-lg" style={{ fontFamily: 'Playfair Display, serif', color: '#FEFAF3' }}>
                    {testimonials[testimonialIndex].name}
                  </p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" style={{ color: '#D4AF37' }} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic leading-relaxed mb-4" style={{ fontFamily: 'Crimson Text, serif', color: '#E8E3DC' }}>
                &ldquo;{testimonials[testimonialIndex].quote}&rdquo;
              </p>
              <p className="text-xs tracking-widest uppercase" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
                {testimonials[testimonialIndex].venue}
              </p>
            </Card>
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 transition-opacity hover:opacity-70"
              >
                <ChevronLeft className="w-6 h-6" style={{ color: '#D4AF37' }} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all ${idx === testimonialIndex ? 'w-6' : ''}`}
                    style={{ backgroundColor: idx === testimonialIndex ? '#D4AF37' : 'rgba(212, 175, 55, 0.3)' }}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 transition-opacity hover:opacity-70"
              >
                <ChevronRight className="w-6 h-6" style={{ color: '#D4AF37' }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-20 lg:py-32" style={{ backgroundColor: '#F8F6F3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
              Investment
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#2C2C2C' }}>
              Photography Collections
            </h2>
            <GoldDivider />
            <p className="max-w-2xl mx-auto" style={{ color: '#2C2C2C', opacity: 0.8, fontFamily: 'Inter, sans-serif' }}>
              Each collection is thoughtfully designed to capture your unique love story. 
              Contact us for detailed pricing tailored to your celebration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-500 hover:-translate-y-2 ${tier.popular ? 'ring-2' : ''}`}
                style={{
                  backgroundColor: tier.popular ? '#FEFAF3' : '#F8F6F3',
                  borderColor: tier.popular ? '#D4AF37' : '#E8E3DC',
                  ...(tier.popular && { boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.25)' })
                }}
              >
                {tier.popular && (
                  <div className="py-2 text-center text-xs tracking-widest uppercase" style={{ backgroundColor: '#D4AF37', color: '#FEFAF3', fontFamily: 'Inter, sans-serif' }}>
                    {tier.subtitle}
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#2C2C2C' }}>
                    {tier.name}
                  </h3>
                  {!tier.popular && (
                    <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
                      {tier.subtitle}
                    </p>
                  )}
                  <p className="mb-6 text-sm" style={{ color: '#2C2C2C', opacity: 0.8, fontFamily: 'Inter, sans-serif' }}>
                    {tier.description}
                  </p>
                  <div className="mb-6">
                    <p className="text-sm tracking-widest uppercase" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
                      Inquire for Investment
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm" style={{ color: '#2C2C2C', fontFamily: 'Inter, sans-serif' }}>
                        <Check className="w-4 h-4 flex-shrink-0" style={{ color: '#D4AF37' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full tracking-widest uppercase text-xs py-5 transition-all duration-300"
                    style={{ 
                      backgroundColor: tier.popular ? '#D4AF37' : 'transparent', 
                      color: tier.popular ? '#FEFAF3' : '#D4AF37', 
                      border: '1px solid #D4AF37' 
                    }}
                  >
                    <Link href="#contact">Request Details</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Split */}
      <section className="py-20 lg:py-0 lg:min-h-[70vh] flex flex-col lg:flex-row">
        <div
          className="flex-1 min-h-[40vh] lg:min-h-full"
          style={{
            background: 'linear-gradient(135deg, #2C2C2C 0%, #1a1a1a 50%, #2C2C2C 100%)'
          }}
        >
          <div className="w-full h-full flex items-center justify-center p-8">
            <div className="text-center">
              <Camera className="w-20 h-20 mx-auto mb-6" style={{ color: '#D4AF37' }} />
              <p className="text-sm tracking-[0.3em] uppercase" style={{ color: '#E8E3DC', fontFamily: 'Inter, sans-serif' }}>
                Your Story Awaits
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center px-6 py-16 lg:py-0 lg:px-12 xl:px-20" style={{ backgroundColor: '#FEFAF3' }}>
          <div className="max-w-lg text-center lg:text-left">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
              Begin Your Journey
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#2C2C2C' }}>
              Let Us Tell Your{' '}
              <span style={{ color: '#D4AF37' }}>Love Story</span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#2C2C2C', opacity: 0.8, fontFamily: 'Inter, sans-serif' }}>
              Every great love deserves to be immortalized. Schedule your complimentary consultation and 
              discover how we can transform your wedding day into timeless art.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                className="tracking-widest uppercase text-xs px-8 py-6 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#D4AF37', color: '#FEFAF3' }}
              >
                <Link href="#contact">Book Your Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="tracking-widest uppercase text-xs px-8 py-6 transition-all duration-300"
                style={{ borderColor: '#2C2C2C', color: '#2C2C2C' }}
              >
                <Link href="#portfolio">Explore Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 lg:py-32" style={{ backgroundColor: '#F8F6F3' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#2C2C2C' }}>
              Schedule Your Consultation
            </h2>
            <GoldDivider />
            <p className="max-w-2xl mx-auto" style={{ color: '#2C2C2C', opacity: 0.8, fontFamily: 'Inter, sans-serif' }}>
              We would love to hear about your wedding plans. Fill out the form below and we will be in touch within 24 hours.
            </p>
          </div>

          {formStatus === 'success' ? (
            <Card className="p-12 text-center" style={{ backgroundColor: '#FEFAF3', borderColor: '#D4AF37' }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#D4AF37' }}>
                <Check className="w-8 h-8" style={{ color: '#FEFAF3' }} />
              </div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#2C2C2C' }}>
                Thank You for Reaching Out
              </h3>
              <p style={{ color: '#2C2C2C', opacity: 0.8, fontFamily: 'Inter, sans-serif' }}>
                We have received your inquiry and will be in touch within 24 hours. 
                We cannot wait to learn more about your love story.
              </p>
            </Card>
          ) : (
            <Card className="p-8 md:p-12" style={{ backgroundColor: '#FEFAF3', borderColor: '#E8E3DC' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: '#2C2C2C', fontFamily: 'Inter, sans-serif' }}>
                      Your Name
                    </label>
                    <Input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="py-6 transition-all duration-300 focus:ring-2"
                      style={{ backgroundColor: '#F8F6F3', borderColor: '#E8E3DC' }}
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: '#2C2C2C', fontFamily: 'Inter, sans-serif' }}>
                      Email Address
                    </label>
                    <Input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="py-6 transition-all duration-300 focus:ring-2"
                      style={{ backgroundColor: '#F8F6F3', borderColor: '#E8E3DC' }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: '#2C2C2C', fontFamily: 'Inter, sans-serif' }}>
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="py-6 transition-all duration-300 focus:ring-2"
                      style={{ backgroundColor: '#F8F6F3', borderColor: '#E8E3DC' }}
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: '#2C2C2C', fontFamily: 'Inter, sans-serif' }}>
                      Service Interest
                    </label>
                    <select
                      required
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full py-3 px-4 rounded-md border transition-all duration-300 focus:ring-2 focus:outline-none"
                      style={{ backgroundColor: '#F8F6F3', borderColor: '#E8E3DC', color: '#2C2C2C' }}
                    >
                      <option value="">Select a collection</option>
                      <option value="petite">Petite Collection</option>
                      <option value="signature">Signature Collection</option>
                      <option value="prestige">Prestige Collection</option>
                      <option value="engagement">Engagement Session Only</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: '#2C2C2C', fontFamily: 'Inter, sans-serif' }}>
                      Preferred Date
                    </label>
                    <Input
                      type="date"
                      required
                      min={today}
                      value={formState.date}
                      onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                      className="py-6 transition-all duration-300 focus:ring-2"
                      style={{ backgroundColor: '#F8F6F3', borderColor: '#E8E3DC' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: '#2C2C2C', fontFamily: 'Inter, sans-serif' }}>
                      Preferred Time
                    </label>
                    <select
                      required
                      value={formState.time}
                      onChange={(e) => setFormState({ ...formState, time: e.target.value })}
                      className="w-full py-3 px-4 rounded-md border transition-all duration-300 focus:ring-2 focus:outline-none"
                      style={{ backgroundColor: '#F8F6F3', borderColor: '#E8E3DC', color: '#2C2C2C' }}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: '#2C2C2C', fontFamily: 'Inter, sans-serif' }}>
                    Tell Us About Your Wedding
                  </label>
                  <Textarea
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="transition-all duration-300 focus:ring-2"
                    style={{ backgroundColor: '#F8F6F3', borderColor: '#E8E3DC' }}
                    placeholder="Share details about your wedding date, venue, and vision..."
                  />
                </div>

                {formStatus === 'error' && (
                  <p className="text-sm text-center py-2" style={{ color: '#dc2626' }}>
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full tracking-widest uppercase text-xs py-6 transition-all duration-300 hover:scale-[1.02]"
                  style={{ backgroundColor: '#D4AF37', color: '#FEFAF3' }}
                >
                  {formStatus === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    'Send Inquiry'
                  )}
                </Button>
              </form>
            </Card>
          )}

          <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
            <div>
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#D4AF37' }}>
                <Mail className="w-5 h-5" style={{ color: '#FEFAF3' }} />
              </div>
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
                Email Us
              </p>
              <a href="mailto:hello@lumierestudio.com" className="transition-opacity hover:opacity-70" style={{ color: '#2C2C2C', fontFamily: 'Inter, sans-serif' }}>
                hello@lumierestudio.com
              </a>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#D4AF37' }}>
                <Phone className="w-5 h-5" style={{ color: '#FEFAF3' }} />
              </div>
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
                Call Us
              </p>
              <a href="tel:+1234567890" className="transition-opacity hover:opacity-70" style={{ color: '#2C2C2C', fontFamily: 'Inter, sans-serif' }}>
                By Appointment
              </a>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#D4AF37' }}>
                <MapPin className="w-5 h-5" style={{ color: '#FEFAF3' }} />
              </div>
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
                Studio Location
              </p>
              <p style={{ color: '#2C2C2C', fontFamily: 'Inter, sans-serif' }}>
                Available for Travel Worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Full */}
      <footer style={{ backgroundColor: '#2C2C2C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <Sparkles className="w-6 h-6" style={{ color: '#D4AF37' }} />
                <span className="text-2xl tracking-wider" style={{ fontFamily: 'Playfair Display, serif', color: '#FEFAF3' }}>
                  Lumiere Studio
                </span>
              </Link>
              <p className="mb-6 max-w-sm leading-relaxed" style={{ color: '#E8E3DC', opacity: 0.8, fontFamily: 'Inter, sans-serif' }}>
                Fine art wedding photography for the discerning couple. We believe every love story deserves 
                to be told with elegance, artistry, and timeless beauty.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}>
                  <Instagram className="w-5 h-5" style={{ color: '#D4AF37' }} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}>
                  <Facebook className="w-5 h-5" style={{ color: '#D4AF37' }} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs tracking-widest uppercase mb-6" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm transition-opacity hover:opacity-70" style={{ color: '#E8E3DC', fontFamily: 'Inter, sans-serif' }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-widest uppercase mb-6" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:hello@lumierestudio.com" className="text-sm transition-opacity hover:opacity-70 flex items-center gap-2" style={{ color: '#E8E3DC', fontFamily: 'Inter, sans-serif' }}>
                    <Mail className="w-4 h-4" style={{ color: '#D4AF37' }} />
                    hello@lumierestudio.com
                  </a>
                </li>
                <li className="text-sm flex items-center gap-2" style={{ color: '#E8E3DC', fontFamily: 'Inter, sans-serif' }}>
                  <MapPin className="w-4 h-4" style={{ color: '#D4AF37' }} />
                  Worldwide
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
            <p className="text-sm" style={{ color: '#E8E3DC', opacity: 0.6, fontFamily: 'Inter, sans-serif' }}>
              © {new Date().getFullYear()} Lumiere Studio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-xs transition-opacity hover:opacity-70" style={{ color: '#E8E3DC', opacity: 0.6, fontFamily: 'Inter, sans-serif' }}>
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs transition-opacity hover:opacity-70" style={{ color: '#E8E3DC', opacity: 0.6, fontFamily: 'Inter, sans-serif' }}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}