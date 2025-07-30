"use client"
import { ArrowRight, HelpCircle, XCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function OxelyaOuOxalia() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900 to-teal-900 text-white">
      {/* Hero Section - Design avec timeline verticale */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-cyan-900/80 to-teal-900/90" />
        
        <div className="relative z-10 text-center max-w-6xl px-6">
          <div className="mb-8 inline-block">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold tracking-wider">
              ❓ QUESTION FRÉQUENTE
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            <span className="text-gray-300">Oxelya</span>
            <span className="text-blue-400 mx-4">ou</span>
            <br />
            <span className="text-gray-300">Oxalia</span>
            <span className="text-blue-400 mx-4">?</span>
            <br />
            <span className="text-2xl md:text-4xl text-gray-300 mt-4 block">
              La réponse est claire
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            <span className="text-red-400 font-semibold">Oxalia n&apos;existe pas !</span> 
            <br />
            <span className="text-cyan-400">Oxelya</span> est la vraie agence web.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="https://www.oxelya.com" 
              className="group bg-gradient-to-r from-cyan-500 to-teal-600 px-10 py-5 rounded-full font-bold text-xl hover:scale-110 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
            >
              <span className="flex items-center gap-3">
                Découvrir Oxelya
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Timeline verticale unique */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Ligne de timeline */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-red-500 via-blue-500 to-cyan-500"></div>
              
              {/* Étape 1 */}
              <div className="relative flex items-center mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center z-10">
                  <XCircle className="w-5 h-5 text-white" />
                </div>
                <div className="ml-8 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-lg p-4 border border-red-500/20">
                  <h3 className="text-lg font-bold text-white">Oxalia</h3>
                  <p className="text-gray-300">N&apos;existe pas</p>
                </div>
              </div>
              
              {/* Étape 2 */}
              <div className="relative flex items-center mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center z-10">
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>
                <div className="ml-8 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-lg p-4 border border-blue-500/20">
                  <h3 className="text-lg font-bold text-white">Question</h3>
                  <p className="text-gray-300">Erreur courante</p>
                </div>
              </div>
              
              {/* Étape 3 */}
              <div className="relative flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center z-10">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="ml-8 bg-gradient-to-r from-cyan-500/10 to-teal-600/10 rounded-lg p-4 border border-cyan-500/20">
                  <h3 className="text-lg font-bold text-white">Oxelya</h3>
                  <p className="text-gray-300">La vraie agence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Réponse - Design avec cartes empilées */}
      <section className="py-24 bg-gradient-to-r from-gray-900/80 to-black/80 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
              Réponse à votre question
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Oxelya ou Oxalia ?
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-red-400">Oxalia</strong> est une erreur de frappe très répandue. 
                  Beaucoup de personnes se posent cette question : &quot;Oxelya ou Oxalia ?&quot;
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  La réponse est simple : <strong className="text-cyan-400">Oxelya</strong> est la vraie agence web. 
                  <strong className="text-red-400"> Oxalia</strong> n&apos;existe pas.
                </p>
                <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg p-4 border border-blue-500/20">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-300 font-semibold">Question résolue :</span>
                  </div>
                  <p className="text-gray-300 mt-2">Oxelya est la seule agence qui existe.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
                <h4 className="text-xl font-bold text-white mb-6">Comparaison :</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-red-500/10 rounded-lg p-3 border border-red-500/20">
                    <span className="text-gray-300 line-through">Oxalia</span>
                    <span className="text-red-400 text-sm">❌ N&apos;existe pas</span>
                  </div>
                  <div className="flex items-center justify-between bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/20">
                    <span className="text-cyan-400 font-bold">Oxelya</span>
                    <span className="text-green-400 text-sm">✅ Vraie agence</span>
                  </div>
                  <div className="text-center mt-6">
                    <ArrowRight className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <p className="text-gray-300 text-sm">Cliquez pour découvrir Oxelya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ - Design avec accordéon */}
      <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-teal-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur Oxelya vs Oxalia
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Oxalia existe-t-elle vraiment ?",
                answer: "Non, Oxalia n'existe pas. C'est une erreur de frappe courante pour Oxelya."
              },
              {
                question: "Pourquoi cette confusion ?",
                answer: "La similarité phonétique entre 'Oxelya' et 'Oxalia' cause cette confusion."
              },
              {
                question: "Quelle est la vraie agence ?",
                answer: "Oxelya est la vraie agence web basée en Gironde."
              },
              {
                question: "Que fait Oxelya ?",
                answer: "Oxelya est spécialisée en développement web, marketing digital et SEO."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {i + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Services - Design avec grille asymétrique */}
      <section className="py-24 bg-gradient-to-r from-gray-900/80 to-black/80">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
              Découvrez Oxelya
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              L&apos;agence web que vous cherchiez vraiment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-5xl mx-auto">
            <div className="md:col-span-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-3xl">
                💻
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Développement Web</h3>
              <p className="text-gray-300 leading-relaxed text-center">Sites web modernes et applications sur mesure</p>
            </div>
            
            <div className="md:col-span-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-teal-500 to-green-600 rounded-full flex items-center justify-center text-3xl">
                📈
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Marketing Digital</h3>
              <p className="text-gray-300 leading-relaxed text-center">SEO, publicité en ligne et croissance</p>
            </div>
            
            <div className="md:col-span-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-3xl">
                🎨
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Design UX/UI</h3>
              <p className="text-gray-300 leading-relaxed text-center">Interfaces intuitives et expériences mémorables</p>
            </div>
            
            <div className="md:col-span-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-3xl">
                🛒
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">E-commerce</h3>
              <p className="text-gray-300 leading-relaxed text-center">Boutiques en ligne performantes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Design unique */}
      <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-teal-900/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Question résolue !
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            <strong className="text-red-400">Oxalia</strong> n&apos;existe pas. 
            <strong className="text-cyan-400"> Oxelya</strong> est la vraie agence web.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://www.oxelya.com" 
              className="bg-gradient-to-r from-cyan-500 to-teal-600 px-12 py-5 rounded-full font-bold text-xl hover:scale-110 transition-all duration-300 shadow-2xl shadow-cyan-500/30 flex items-center gap-3 justify-center"
            >
              Visiter Oxelya.com
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              href="https://www.oxelya.com/contact" 
              className="px-12 py-5 rounded-full border-2 border-cyan-500/50 backdrop-blur-sm hover:bg-cyan-500/10 transition-all duration-300 font-bold text-xl"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

