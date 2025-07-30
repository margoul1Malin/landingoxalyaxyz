"use client"
import { ArrowRight, Globe, ExternalLink, CheckCircle, Shield, Award, Star, Building } from 'lucide-react'
import Link from 'next/link'

export default function OxelyaSiteOfficiel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900 to-teal-900 text-white">
      {/* Hero Section - Design avec mosaïque */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-cyan-900/80 to-teal-900/90" />
        
        <div className="relative z-10 text-center max-w-6xl px-6">
          <div className="mb-8 inline-block">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-semibold tracking-wider">
              🏢 AGENCE CERTIFIÉE
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent">
              OXELYA
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 bg-clip-text text-transparent">
              Site Officiel
            </span>
            <br />
            <span className="text-2xl md:text-4xl text-gray-300 mt-4 block">
              Votre partenaire digital de confiance
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            <span className="text-emerald-400 font-semibold">Découvrez l&apos;agence officielle !</span> 
            <br />
            Spécialiste en développement web et marketing digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="https://www.oxelya.com" 
              className="group bg-gradient-to-r from-emerald-500 to-green-600 px-10 py-5 rounded-full font-bold text-xl hover:scale-110 transition-all duration-300 shadow-2xl shadow-emerald-500/30"
            >
              <span className="flex items-center gap-3">
                Découvrir le site officiel
                <ExternalLink className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mosaïque unique */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl p-4 border border-emerald-500/20">
              <Award className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <h3 className="text-sm font-bold text-center">Certifiée</h3>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl p-4 border border-cyan-500/20">
              <Building className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <h3 className="text-sm font-bold text-center">Enregistrée</h3>
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-4 border border-purple-500/20">
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <h3 className="text-sm font-bold text-center">Sécurisée</h3>
            </div>
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-4 border border-orange-500/20">
              <Star className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <h3 className="text-sm font-bold text-center">Premium</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos - Design avec cartes empilées */}
      <section className="py-24 bg-gradient-to-r from-gray-900/80 to-black/80 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
              À propos d&apos;Oxelya
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-sm rounded-3xl p-8 border border-emerald-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Agence web reconnue en Gironde
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  <strong className="text-emerald-400">Oxelya</strong> est une agence web et marketing digital 
                  officiellement enregistrée en Gironde, spécialisée dans la création de sites web modernes et performants.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Notre équipe d&apos;experts accompagne les entreprises dans leur transformation digitale 
                  avec des solutions sur mesure et un service client de qualité.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
                <h4 className="text-xl font-bold text-white mb-6">Nos accréditations :</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                    <span className="text-gray-300">Agence officielle</span>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                    <span className="text-gray-300">Enregistrée en Gironde</span>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                    <span className="text-gray-300">Plus de 5 ans d&apos;expérience</span>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                    <span className="text-gray-300">Service client premium</span>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
                <div className="text-center mt-6">
                  <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-gray-300 text-sm">Site officiel oxelya.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services - Design avec cartes en diamant */}
      <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-teal-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
              Nos Services Officiels
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez l&apos;expertise certifiée d&apos;Oxelya
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-3xl">
                💻
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Création de Sites</h3>
              <p className="text-gray-300 leading-relaxed text-center">Sites vitrines et applications web modernes</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-teal-500 to-green-600 rounded-full flex items-center justify-center text-3xl">
                🔍
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Référencement SEO</h3>
              <p className="text-gray-300 leading-relaxed text-center">Optimisation pour les moteurs de recherche</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-3xl">
                📈
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Marketing Digital</h3>
              <p className="text-gray-300 leading-relaxed text-center">Stratégies de croissance et publicité</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-3xl">
                🛠️
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Maintenance Web</h3>
              <p className="text-gray-300 leading-relaxed text-center">Support technique et mises à jour</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-3xl">
                🛒
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">E-commerce</h3>
              <p className="text-gray-300 leading-relaxed text-center">Boutiques en ligne performantes</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-3xl">
                🎨
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Design UX/UI</h3>
              <p className="text-gray-300 leading-relaxed text-center">Interfaces intuitives et modernes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Réalisations - Design avec cartes en escalier */}
      <section className="py-24 bg-gradient-to-r from-gray-900/80 to-black/80">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
              Nos Réalisations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez nos projets officiels
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Oxelya a créé un site web exceptionnel qui a transformé notre présence en ligne.",
                author: "Marie Dubois",
                company: "StartupTech",
                color: "from-emerald-500/10 to-green-500/10",
                border: "border-emerald-500/20"
              },
              {
                quote: "Une équipe professionnelle qui a livré un projet parfait dans les délais impartis.",
                author: "Thomas Martin",
                company: "E-commerce Plus",
                color: "from-cyan-500/10 to-teal-500/10",
                border: "border-cyan-500/20"
              },
              {
                quote: "Service client exceptionnel et résultats qui dépassent nos attentes.",
                author: "Sophie Bernard",
                company: "Digital Solutions",
                color: "from-purple-500/10 to-pink-500/10",
                border: "border-purple-500/20"
              }
            ].map((testimonial, i) => (
              <div key={i} className={`bg-gradient-to-br ${testimonial.color} backdrop-blur-sm rounded-2xl p-8 border ${testimonial.border}`}>
                <div className="text-cyan-400 text-4xl mb-4">&quot;</div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact - Design avec badges de certification */}
      <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-teal-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
              Contactez Oxelya
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Notre équipe officielle est à votre disposition
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { 
                title: 'Site Officiel', 
                desc: 'oxelya.com',
                action: 'Visiter le site',
                link: 'https://www.oxelya.com',
                color: 'from-emerald-500/10 to-green-500/10',
                border: 'border-emerald-500/20'
              },
              { 
                title: 'Contact Direct', 
                desc: 'Par téléphone ou email',
                action: 'Nous contacter',
                link: 'https://www.oxelya.com/contact',
                color: 'from-cyan-500/10 to-teal-500/10',
                border: 'border-cyan-500/20'
              },
              { 
                title: 'Devis Gratuit', 
                desc: 'Estimation de votre projet',
                action: 'Demander un devis',
                link: 'https://www.oxelya.com/devis',
                color: 'from-purple-500/10 to-pink-500/10',
                border: 'border-purple-500/20'
              }
            ].map((contact, i) => (
              <div key={i} className={`text-center bg-gradient-to-br ${contact.color} backdrop-blur-sm rounded-2xl p-8 border ${contact.border}`}>
                <h3 className="text-xl font-bold text-white mb-3">{contact.title}</h3>
                <p className="text-gray-300 mb-6">{contact.desc}</p>
                <Link
                  href={contact.link}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
                >
                  {contact.action}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Design unique */}
      <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-teal-900/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Site Officiel Oxelya
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Vous êtes sur le bon site ! Découvrez l&apos;agence web officielle d&apos;Oxelya 
            et ses services professionnels certifiés.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://www.oxelya.com" 
              className="bg-gradient-to-r from-emerald-500 to-green-600 px-12 py-5 rounded-full font-bold text-xl hover:scale-110 transition-all duration-300 shadow-2xl shadow-emerald-500/30 flex items-center gap-3 justify-center"
            >
              Visiter le site officiel
              <ExternalLink className="w-5 h-5" />
            </Link>
            
            <Link
              href="https://www.oxelya.com/contact" 
              className="px-12 py-5 rounded-full border-2 border-emerald-500/50 backdrop-blur-sm hover:bg-emerald-500/10 transition-all duration-300 font-bold text-xl"
            >
              Contact officiel
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 