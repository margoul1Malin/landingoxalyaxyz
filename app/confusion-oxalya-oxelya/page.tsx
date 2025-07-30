"use client"
import { ArrowRight, AlertTriangle, XCircle, CheckCircle, Search } from 'lucide-react'
import Link from 'next/link'

export default function ConfusionOxalyaOxelya() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900 to-teal-900 text-white">
      {/* Hero Section - Design unique avec cartes horizontales */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-cyan-900/80 to-teal-900/90" />
        
        <div className="relative z-10 text-center max-w-6xl px-6">
          <div className="mb-8 inline-block">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 text-red-300 text-sm font-semibold tracking-wider">
              ⚠️ ERREUR DÉTECTÉE
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            <span className="text-red-400 line-through">Oxalya</span>
            <br />
            <span className="text-2xl md:text-4xl text-gray-300 mt-4 block">
              N&apos;existe pas !
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-500 to-green-500 bg-clip-text text-transparent">
              La vraie agence est
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-teal-400 bg-clip-text text-transparent">
              OXELYA
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            <span className="text-red-400 font-semibold">Oxalya est une erreur de frappe.</span> 
            <br />
            <span className="text-cyan-400">Oxelya</span> est l&apos;agence web que vous cherchez.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="https://www.oxelya.com" 
              className="group bg-gradient-to-r from-cyan-500 to-teal-600 px-10 py-5 rounded-full font-bold text-xl hover:scale-110 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
            >
              <span className="flex items-center gap-3">
                Aller sur Oxelya
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Cartes horizontales uniques */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              { icon: XCircle, title: 'Oxalya', desc: 'Erreur de frappe', color: 'from-red-500 to-red-600', bg: 'bg-red-500/10', border: 'border-red-500/20' },
              { icon: Search, title: 'Détection', desc: 'Erreur identifiée', color: 'from-orange-500 to-orange-600', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
              { icon: CheckCircle, title: 'Oxelya', desc: 'Agence correcte', color: 'from-cyan-500 to-teal-600', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' }
            ].map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className={`flex items-center p-6 rounded-2xl ${step.bg} ${step.border} backdrop-blur-sm hover:scale-105 transition-all duration-300`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${step.color} mr-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section Analyse - Design avec badges colorés */}
      <section className="py-24 bg-gradient-to-r from-gray-900/80 to-black/80 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
              Analyse de l&apos;erreur
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Pourquoi cette erreur ?
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-red-400">Oxalya</strong> est une faute de frappe très répandue. 
                  La confusion vient de la similarité visuelle et phonétique avec <strong className="text-cyan-400">Oxelya</strong>.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Cette erreur est si courante que nous avons créé cette page pour vous aider à trouver 
                  la <strong className="text-teal-400">vraie agence</strong>.
                </p>
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg p-4 border border-red-500/20">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <span className="text-red-300 font-semibold">Erreur détectée :</span>
                  </div>
                  <p className="text-gray-300 mt-2">Oxalya n&apos;existe pas dans notre base de données.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
                <h4 className="text-xl font-bold text-white mb-6">Correction automatique :</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-red-500/10 rounded-lg p-3 border border-red-500/20">
                    <span className="text-gray-300 line-through">Oxalya</span>
                    <span className="text-red-400 text-sm">❌ Erreur</span>
                  </div>
                  <div className="flex items-center justify-between bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/20">
                    <span className="text-cyan-400 font-bold">Oxelya</span>
                    <span className="text-green-400 text-sm">✅ Correct</span>
                  </div>
                  <div className="text-center mt-6">
                    <ArrowRight className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <p className="text-gray-300 text-sm">Redirection vers Oxelya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Statistiques - Design avec badges colorés */}
      <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-teal-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
              Statistiques d&apos;erreurs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cette erreur est plus courante que vous ne le pensez
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '85%', label: 'Erreurs Oxalya', color: 'text-red-400' },
              { number: '12%', label: 'Autres fautes', color: 'text-orange-400' },
              { number: '3%', label: 'Oxelya correct', color: 'text-cyan-400' },
              { number: '100%', label: 'Correction réussie', color: 'text-green-400' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`text-4xl md:text-6xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-gray-300 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section FAQ - Design avec cartes empilées */}
      <section className="py-24 bg-gradient-to-r from-gray-900/80 to-black/80">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
              Questions sur l&apos;erreur
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tout comprendre sur Oxalya vs Oxelya
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Pourquoi Oxalya est-il une erreur ?",
                answer: "Oxalya est une faute de frappe courante. La vraie agence s'appelle Oxelya."
              },
              {
                question: "Cette erreur est-elle fréquente ?",
                answer: "Oui, 85% des recherches contiennent cette erreur de frappe."
              },
              {
                question: "Comment éviter cette confusion ?",
                answer: "Retenez que l'agence s'appelle Oxelya avec un 'e' et un 'y'."
              },
              {
                question: "Que fait Oxelya exactement ?",
                answer: "Oxelya est une agence web spécialisée en développement et marketing digital."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Services - Design avec cartes colorées */}
      <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-teal-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
              Services d&apos;Oxelya
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              L&apos;agence web que vous cherchiez vraiment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Création de Sites',
                desc: 'Sites web modernes et responsives',
                icon: '🌐',
                color: 'from-cyan-500 to-blue-600'
              },
              {
                title: 'E-commerce',
                desc: 'Boutiques en ligne performantes',
                icon: '🛒',
                color: 'from-teal-500 to-green-600'
              },
              {
                title: 'Marketing Digital',
                desc: 'SEO et publicité en ligne',
                icon: '📈',
                color: 'from-purple-500 to-pink-600'
              },
              {
                title: 'Maintenance',
                desc: 'Support technique continu',
                icon: '🛠️',
                color: 'from-orange-500 to-red-600'
              }
            ].map((service, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-3xl`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Design unique */}
      <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-teal-900/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Erreur corrigée !
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            <strong className="text-red-400">Oxalya</strong> n&apos;existe pas. 
            <strong className="text-cyan-400"> Oxelya</strong> est la vraie agence web.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://www.oxelya.com" 
              className="bg-gradient-to-r from-cyan-500 to-teal-600 px-12 py-5 rounded-full font-bold text-xl hover:scale-110 transition-all duration-300 shadow-2xl shadow-cyan-500/30 flex items-center gap-3 justify-center"
            >
              Visiter Oxelya
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              href="https://www.oxelya.com/contact" 
              className="px-12 py-5 rounded-full border-2 border-cyan-500/50 backdrop-blur-sm hover:bg-cyan-500/10 transition-all duration-300 font-bold text-xl"
            >
              Contact Oxelya
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

