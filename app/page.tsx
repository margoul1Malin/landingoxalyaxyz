"use client"
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { ArrowRight, Search, Target, CheckCircle, ExternalLink } from 'lucide-react'
import * as THREE from 'three' 
import { 
  FaReact, FaNodeJs, FaWordpress, FaShopify, FaAws, FaDocker, FaGitAlt, FaFigma,
  FaGlobe, FaChartLine, FaPalette, FaSearch, FaHeadset, FaMobile,
} from 'react-icons/fa'
import { 
  SiNextdotjs, SiTypescript, SiPython, SiPhp,
} from 'react-icons/si'
import Link from 'next/link'

export default function OxelyaTypoLanding() {
  const [isClient, setIsClient] = useState(false)
  const [currentTypo, setCurrentTypo] = useState(0)
  const threeRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  const typos = ['Oxelia', 'Oxalia', 'Oxalya', 'Oxylia', 'Oxelie', 'Oxeyla']
  
  useEffect(() => {
    setIsClient(true)
    
    // Rotation des fautes de frappe
    const typoTimer = setInterval(() => {
      setCurrentTypo((prev) => (prev + 1) % typos.length)
    }, 2000)

    return () => {
      clearInterval(typoTimer)
    }
  }, [typos.length])

  // Animation Three.js avec particules de correction
  useEffect(() => {
    if (!threeRef.current || !isClient) return

    if (threeRef.current.firstChild) {
      threeRef.current.removeChild(threeRef.current.firstChild)
    }

    // Vérification de la disponibilité de WebGL
    let renderer: THREE.WebGLRenderer | null = null
    try {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, threeRef.current.clientWidth / threeRef.current.clientHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true,
        powerPreference: "high-performance"
      })
      
      renderer.setSize(threeRef.current.clientWidth, threeRef.current.clientHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(0x000000, 0)
      threeRef.current.appendChild(renderer.domElement)

      // Particules de correction flottantes
      const particleGeometry = new THREE.BufferGeometry()
      const particleCount = 100
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)
      const velocities = new Float32Array(particleCount * 3)

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20

        // Couleurs gradient bleu-vert pour la correction
        colors[i * 3] = Math.random() * 0.3
        colors[i * 3 + 1] = 0.6 + Math.random() * 0.4
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2

        velocities[i * 3] = (Math.random() - 0.5) * 0.02
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      })

      const particles = new THREE.Points(particleGeometry, particleMaterial)
      scene.add(particles)

      // Géométrie principale - Icosahedron (correction/précision)
      const icosaGeometry = new THREE.IcosahedronGeometry(2, 1)
      const icosaMaterial = new THREE.MeshBasicMaterial({
        color: 0x00d4aa,
        wireframe: true,
        transparent: true,
        opacity: 0.7
      })
      const icosaMesh = new THREE.Mesh(icosaGeometry, icosaMaterial)
      scene.add(icosaMesh)

      // Anneau de correction
      const ringGeometry = new THREE.RingGeometry(2.5, 3, 32)
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        wireframe: true,
        transparent: true,
        opacity: 0.5
      })
      const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial)
      scene.add(ringMesh)

      camera.position.z = 8

      const animate = () => {
        animationRef.current = requestAnimationFrame(animate)
        
        // Animation des particules
        const positions = particles.geometry.attributes.position.array
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3] += velocities[i * 3]
          positions[i * 3 + 1] += velocities[i * 3 + 1]
          positions[i * 3 + 2] += velocities[i * 3 + 2]

          // Rebond
          if (Math.abs(positions[i * 3]) > 10) velocities[i * 3] *= -1
          if (Math.abs(positions[i * 3 + 1]) > 10) velocities[i * 3 + 1] *= -1
          if (Math.abs(positions[i * 3 + 2]) > 10) velocities[i * 3 + 2] *= -1
        }
        particles.geometry.attributes.position.needsUpdate = true

        // Rotation des géométries
        icosaMesh.rotation.x += 0.005
        icosaMesh.rotation.y += 0.008
        ringMesh.rotation.z += 0.003
        
        if (renderer) {
          renderer.render(scene, camera)
        }
      }
      animate()

      const handleResize = () => {
        if (threeRef.current && renderer && camera) {
          const width = threeRef.current.clientWidth
          const height = threeRef.current.clientHeight
          renderer.setSize(width, height)
          camera.aspect = width / height
          camera.updateProjectionMatrix()
        }
      }

      window.addEventListener('resize', handleResize)
      
      const currentThreeRef = threeRef.current
      const currentRenderer = renderer
      
      return () => {
        window.removeEventListener('resize', handleResize)
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
        if (currentThreeRef && currentRenderer && currentRenderer.domElement && currentThreeRef.contains(currentRenderer.domElement)) {
          currentThreeRef.removeChild(currentRenderer.domElement)
        }
        if (currentRenderer) {
          currentRenderer.dispose()
        }
      }
    } catch (error) {
      console.warn('WebGL not available, falling back to static background:', error)
      // Fallback : ajouter une classe CSS pour un effet de particules CSS
      if (threeRef.current) {
        threeRef.current.classList.add('fallback-particles')
      }
    }
  }, [isClient])

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900 to-teal-900 text-white">
        {/* Hero Section Statique */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-cyan-900/80 to-teal-900/90" />
          
          <div className="relative z-10 text-center max-w-6xl px-6">
            <div className="mb-8 inline-block">
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 text-orange-300 text-sm font-semibold tracking-wider">
                🔍 CORRECTION AUTOMATIQUE
              </span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
              <span className="text-gray-400 line-through">Oxalya</span>
              <span className="text-red-400 mx-4">?</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-500 to-green-500 bg-clip-text text-transparent">
                Non, c&apos;était
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-teal-400 bg-clip-text text-transparent">
                OXELYA
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              <span className="text-cyan-400 font-semibold">Ça arrive à tout le monde !</span> 
              <br />
              Vous cherchiez notre agence web ? Vous êtes au bon endroit.
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Search, title: 'Détection Auto', desc: 'Faute détectée automatiquement' },
                { icon: Target, title: 'Correction', desc: 'Redirection vers le bon site' },
                { icon: CheckCircle, title: 'Arrivée', desc: 'Oxelya vous attend !' }
              ].map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={i} className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section explicative SEO */}
        <section className="py-24 bg-gradient-to-r from-gray-900/80 to-black/80 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Pourquoi cette page existe ?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Les fautes de frappe, c&apos;est humain
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    <strong className="text-cyan-400">Oxelya</strong> est parfois tapé <em>Oxelia</em>, <em>Oxalia</em>, ou <em>Oxalya</em>. 
                    C&apos;est tout à fait normal ! Notre nom étant unique, il peut prêter à confusion.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Plutôt que de vous laisser dans l&apos;embarras, nous avons créé cette page pour vous 
                    <strong className="text-teal-400 mx-1">guider automatiquement</strong> vers notre vrai site.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
                  <h4 className="text-xl font-bold text-white mb-6">Variantes communes :</h4>
                  <div className="space-y-3">
                    {['Oxelia', 'Oxalia', 'Oxalya', 'Oxylia', 'Oxelie', 'Oxeyla'].map((typo, i) => (
                      <div key={i} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                        <span className="text-gray-300 line-through">{typo}</span>
                        <ArrowRight className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 font-bold">Oxelya</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Services */}
        <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-teal-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Nos Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Découvrez l&apos;expertise d&apos;Oxelya en développement web et marketing digital
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'Développement Web',
                  desc: 'Sites web modernes, applications et e-commerce sur mesure',
                  icon: FaGlobe,
                  color: 'from-cyan-500 to-blue-600'
                },
                {
                  title: 'Marketing Digital',
                  desc: 'SEO, publicité en ligne et stratégies de croissance',
                  icon: FaChartLine,
                  color: 'from-teal-500 to-green-600'
                },
                {
                  title: 'Design UX/UI',
                  desc: 'Interfaces utilisateur intuitives et expériences mémorables',
                  icon: FaPalette,
                  color: 'from-purple-500 to-pink-600'
                },
                {
                  title: 'Optimisation SEO',
                  desc: 'Référencement naturel et visibilité sur les moteurs de recherche',
                  icon: FaSearch,
                  color: 'from-orange-500 to-red-600'
                },
                {
                  title: 'Assistance Informatique',
                  desc: 'Support technique et maintenance informatique pour entreprises',
                  icon: FaHeadset,
                  color: 'from-indigo-500 to-purple-600'
                },
                {
                  title: 'Développement Mobile',
                  desc: 'Applications mobiles natives et hybrides performantes',
                  icon: FaMobile,
                  color: 'from-green-500 to-emerald-600'
                }
              ].map((service, i) => {
                const Icon = service.icon
                return (
                  <div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:scale-105 transition-all duration-300">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-2xl`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section Technologies */}
        <section className="py-24 bg-gradient-to-r from-gray-900/80 to-black/80">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Technologies & Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nous utilisons les technologies les plus modernes pour créer des solutions performantes
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { name: 'React', icon: FaReact },
                { name: 'Next.js', icon: SiNextdotjs },
                { name: 'TypeScript', icon: SiTypescript },
                { name: 'Node.js', icon: FaNodeJs },
                { name: 'Python', icon: SiPython },
                { name: 'PHP', icon: SiPhp },
                { name: 'WordPress', icon: FaWordpress },
                { name: 'Shopify', icon: FaShopify },
                { name: 'AWS', icon: FaAws },
                { name: 'Docker', icon: FaDocker },
                { name: 'Git', icon: FaGitAlt },
                { name: 'Figma', icon: FaFigma }
              ].map((tech, i) => {
                const Icon = tech.icon
                return (
                  <div key={i} className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center hover:scale-110 transition-all duration-300">
                    <div className="text-3xl mb-2 text-cyan-400">
                      <Icon />
                    </div>
                    <div className="font-semibold text-white">{tech.name}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section Témoignages */}
        <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-teal-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Ce que disent nos clients
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  quote: "Oxelya a transformé notre présence en ligne. Leur expertise technique et leur créativité sont exceptionnelles.",
                  author: "ClimGO",
                  company: "ClimGO"
                },
                {
                  quote: "Une équipe professionnelle qui a su comprendre nos besoins et livrer un projet parfait dans les délais.",
                  author: "DrHead",
                  company: "DrHead"
                },
                {
                  quote: "On est là pour vous aider à atteindre vos objectifs !",
                  author: "Margoul1",
                  company: "Oxelya"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
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

        {/* Section Process */}
        <section className="py-24 bg-gradient-to-r from-gray-900/80 to-black/80">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Notre Processus
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Une méthodologie éprouvée pour garantir le succès de votre projet
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { step: '01', title: 'Analyse', desc: 'Compréhension de vos besoins et objectifs' },
                { step: '02', title: 'Conception', desc: 'Création de maquettes et architecture technique' },
                { step: '03', title: 'Développement', desc: 'Codage et intégration des fonctionnalités' },
                { step: '04', title: 'Livraison', desc: 'Tests, déploiement et formation' }
              ].map((process, i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                  <p className="text-gray-300">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Statistiques */}
        <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-teal-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Nos Chiffres
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Des résultats qui parlent d&apos;eux-mêmes
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: '150+', label: 'Projets Réalisés' },
                { number: '98%', label: 'Clients Satisfaits' },
                { number: '5+', label: 'Années d&apos;Expérience' },
                { number: '24/7', label: 'Support Client' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section FAQ */}
        <section className="py-24 bg-gradient-to-r from-gray-900/80 to-black/80">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Questions Fréquentes
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {[
                {
                  question: "Combien de temps faut-il créer un site web ?",
                  answer: "Cela dépend de la complexité du projet. Un site vitrine simple prend 2-4 semaines, tandis qu'un e-commerce complexe peut prendre 2-3 mois."
                },
                {
                  question: "Proposez-vous la maintenance après livraison ?",
                  answer: "Oui, nous proposons des contrats de maintenance pour assurer la sécurité, les mises à jour et l&apos;optimisation continue de votre site."
                },
                {
                  question: "Travaillez-vous avec des clients internationaux ?",
                  answer: "Absolument ! Nous avons des clients dans plusieurs pays et nous adaptons nos services aux besoins locaux et internationaux."
                },
                {
                  question: "Quels sont vos tarifs pour un site vitrine ?",
                  answer: "Nos tarifs varient selon la complexité du projet. Contactez-nous pour un devis personnalisé adapté à vos besoins."
                },
                {
                  question: "Pouvez-vous créer un site e-commerce ?",
                  answer: "Oui, nous développons des sites e-commerce complets avec gestion des produits, paiements sécurisés et optimisation SEO."
                },
                {
                  question: "Faites-vous du référencement SEO ?",
                  answer: "Bien sûr ! Nous optimisons vos sites pour les moteurs de recherche et proposons des services SEO complets."
                },
                {
                  question: "Êtes-vous basés en Gironde ?",
                  answer: "Oui, notre agence est basée en Gironde mais nous travaillons avec des clients partout en France et à l'international."
                },
                {
                  question: "Proposez-vous l'hébergement web ?",
                  answer: "Oui, nous proposons des solutions d'hébergement sécurisées et performantes pour tous nos projets web."
                },
                {
                  question: "Pouvez-vous refaire un site existant ?",
                  answer: "Absolument ! Nous pouvons refaire complètement votre site existant ou l'améliorer selon vos besoins."
                },
                {
                  question: "Quelles sont vos garanties ?",
                  answer: "Nous offrons une garantie de 1 an sur nos développements et un support technique réactif."
                },
                {
                  question: "Acceptez-vous les petits projets ?",
                  answer: "Oui, nous travaillons sur des projets de toutes tailles, du site vitrine simple aux applications complexes."
                },
                {
                  question: "Proposez-vous la formation ?",
                  answer: "Oui, nous formons vos équipes à l'utilisation de votre nouveau site web et outils de gestion."
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

        {/* CTA Final */}
        <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-teal-900/30">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Prêt à démarrer votre projet ?
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="https://www.oxelya.com" 
                className="bg-gradient-to-r from-cyan-500 to-teal-600 px-12 py-5 rounded-full font-bold text-xl hover:scale-110 transition-all duration-300 shadow-2xl shadow-cyan-500/30 flex items-center gap-3 justify-center"
              >
                Visiter Oxelya.com
                <ExternalLink className="w-5 h-5" />
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
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.3); }
            50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.6); }
          }
          
          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }

          .fallback-particles {
            position: relative;
            overflow: hidden;
          }

          .fallback-particles::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 20% 30%, rgba(34, 211, 238, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(34, 211, 238, 0.05) 0%, transparent 50%);
            animation: float 6s ease-in-out infinite;
          }

          .fallback-particles::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 60% 20%, rgba(20, 184, 166, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 10% 60%, rgba(34, 211, 238, 0.06) 0%, transparent 50%);
            animation: float 8s ease-in-out infinite reverse;
          }
        `}</style>
      </div>
    )
  }

  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900 to-teal-900 text-white overflow-hidden">
        
        {/* Hero Section avec Animation Three.js */}
        <section className="relative min-h-screen flex items-center justify-center">
          {/* Animation Three.js Background */}
          <div 
            className="absolute inset-0 w-full h-full" 
            ref={threeRef}
            style={{ 
              zIndex: 1,
              background: 'transparent',
              pointerEvents: 'none'
            }}
          />
          
          {/* Gradient Background */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-cyan-900/80 to-teal-900/90"
            style={{ zIndex: 2 }}
          />

          {/* Particules flottantes */}
          <div className="absolute inset-0 z-3">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-70"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center max-w-6xl px-6">
            {/* Badge correction */}
            <motion.div 
              className="mb-8 inline-block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 text-orange-300 text-sm font-semibold tracking-wider">
                🔍 CORRECTION AUTOMATIQUE
              </span>
            </motion.div>
            
            {/* Titre principal avec fautes qui changent */}
            <motion.h1 
              className="text-5xl md:text-8xl font-black mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="text-gray-400 line-through">
                {typos[currentTypo]}
              </span>
              <span className="text-red-400 mx-4">?</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-500 to-green-500 bg-clip-text text-transparent animate-pulse">
                Non, c&apos;était
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-teal-400 bg-clip-text text-transparent">
                OXELYA
              </span>
            </motion.h1>
            
            {/* Sous-titre avec empathie */}
            <motion.p 
              className="text-xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="text-cyan-400 font-semibold">Ça arrive à tout le monde !</span> 
              <br />
              Vous cherchiez notre agence web ? Vous êtes au bon endroit.
            </motion.p>
            
            {/* Boutons d'action */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Link
                href="https://www.oxelya.com" 
                className="group bg-gradient-to-r from-cyan-500 to-teal-600 px-10 py-5 rounded-full font-bold text-xl hover:scale-110 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
              >
                <span className="flex items-center gap-3">
                  Aller sur Oxelya
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
            </motion.div>

            {/* Indicateurs de correction */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              {[
                { icon: Search, title: 'Détection Auto', desc: 'Faute détectée automatiquement' },
                { icon: Target, title: 'Correction', desc: 'Redirection vers le bon site' },
                { icon: CheckCircle, title: 'Arrivée', desc: 'Oxelya vous attend !' }
              ].map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={i} className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Section explicative SEO */}
        <section className="py-24 bg-gradient-to-r from-gray-900/80 to-black/80 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Pourquoi cette page existe ?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Les fautes de frappe, c&apos;est humain
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    <strong className="text-cyan-400">Oxelya</strong> est parfois tapé <em>Oxelia</em>, <em>Oxalia</em>, ou <em>Oxalya</em>. 
                    C&apos;est tout à fait normal ! Notre nom étant unique, il peut prêter à confusion.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Plutôt que de vous laisser dans l&apos;embarras, nous avons créé cette page pour vous 
                    <strong className="text-teal-400 mx-1">guider automatiquement</strong> vers notre vrai site.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
                  <h4 className="text-xl font-bold text-white mb-6">Variantes communes :</h4>
                  <div className="space-y-3">
                    {['Oxelia', 'Oxalia', 'Oxalya', 'Oxylia', 'Oxelie', 'Oxeyla'].map((typo, i) => (
                      <div key={i} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                        <span className="text-gray-300 line-through">{typo}</span>
                        <ArrowRight className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 font-bold">Oxelya</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-teal-900/30">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Prêt à découvrir Oxelya ?
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Notre vraie expertise vous attend : développement web, marketing digital, 
              et bien plus encore sur <strong className="text-cyan-400">oxelya.com</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="https://www.oxelya.com" 
                className="bg-gradient-to-r from-cyan-500 to-teal-600 px-12 py-5 rounded-full font-bold text-xl hover:scale-110 transition-all duration-300 shadow-2xl shadow-cyan-500/30 flex items-center gap-3 justify-center"
              >
                Visiter Oxelya.com
                <ExternalLink className="w-5 h-5" />
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

        {/* Section Services */}
        <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-teal-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Nos Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Découvrez l&apos;expertise d&apos;Oxelya en développement web et marketing digital
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'Développement Web',
                  desc: 'Sites web modernes, applications et e-commerce sur mesure',
                  icon: FaGlobe,
                  color: 'from-cyan-500 to-blue-600'
                },
                {
                  title: 'Marketing Digital',
                  desc: 'SEO, publicité en ligne et stratégies de croissance',
                  icon: FaChartLine,
                  color: 'from-teal-500 to-green-600'
                },
                {
                  title: 'Design UX/UI',
                  desc: 'Interfaces utilisateur intuitives et expériences mémorables',
                  icon: FaPalette,
                  color: 'from-purple-500 to-pink-600'
                },
                {
                  title: 'Optimisation SEO',
                  desc: 'Référencement naturel et visibilité sur les moteurs de recherche',
                  icon: FaSearch,
                  color: 'from-orange-500 to-red-600'
                },
                {
                  title: 'Assistance Informatique',
                  desc: 'Support technique et maintenance informatique pour entreprises',
                  icon: FaHeadset,
                  color: 'from-indigo-500 to-purple-600'
                },
                {
                  title: 'Développement Mobile',
                  desc: 'Applications mobiles natives et hybrides performantes',
                  icon: FaMobile,
                  color: 'from-green-500 to-emerald-600'
                }
              ].map((service, i) => {
                const Icon = service.icon
                return (
                  <div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:scale-105 transition-all duration-300">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-2xl`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section Technologies */}
        <section className="py-24 bg-gradient-to-r from-gray-900/80 to-black/80">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Technologies & Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nous utilisons les technologies les plus modernes pour créer des solutions performantes
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { name: 'React', icon: FaReact },
                { name: 'Next.js', icon: SiNextdotjs },
                { name: 'TypeScript', icon: SiTypescript },
                { name: 'Node.js', icon: FaNodeJs },
                { name: 'Python', icon: SiPython },
                { name: 'PHP', icon: SiPhp },
                { name: 'WordPress', icon: FaWordpress },
                { name: 'Shopify', icon: FaShopify },
                { name: 'AWS', icon: FaAws },
                { name: 'Docker', icon: FaDocker },
                { name: 'Git', icon: FaGitAlt },
                { name: 'Figma', icon: FaFigma }
              ].map((tech, i) => {
                const Icon = tech.icon
                return (
                  <div key={i} className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center hover:scale-110 transition-all duration-300">
                    <div className="text-3xl mb-2 text-cyan-400">
                      <Icon />
                    </div>
                    <div className="font-semibold text-white">{tech.name}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section Témoignages */}
        <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-teal-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Ce que disent nos clients
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  quote: "Oxelya a transformé notre présence en ligne. Leur expertise technique et leur créativité sont exceptionnelles.",
                  author: "Marie Dubois",
                  company: "StartupTech"
                },
                {
                  quote: "Une équipe professionnelle qui a su comprendre nos besoins et livrer un projet parfait dans les délais.",
                  author: "Thomas Martin",
                  company: "E-commerce Plus"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
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

        {/* Section Process */}
        <section className="py-24 bg-gradient-to-r from-gray-900/80 to-black/80">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Notre Processus
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Une méthodologie éprouvée pour garantir le succès de votre projet
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { step: '01', title: 'Analyse', desc: 'Compréhension de vos besoins et objectifs' },
                { step: '02', title: 'Conception', desc: 'Création de maquettes et architecture technique' },
                { step: '03', title: 'Développement', desc: 'Codage et intégration des fonctionnalités' },
                { step: '04', title: 'Livraison', desc: 'Tests, déploiement et formation' }
              ].map((process, i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                  <p className="text-gray-300">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Statistiques */}
        <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-teal-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Nos Chiffres
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Des résultats qui parlent d&apos;eux-mêmes
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: '150+', label: 'Projets Réalisés' },
                { number: '98%', label: 'Clients Satisfaits' },
                { number: '5+', label: 'Années d&apos;Expérience' },
                { number: '24/7', label: 'Support Client' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section FAQ */}
        <section className="py-24 bg-gradient-to-r from-gray-900/80 to-black/80">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Questions Fréquentes
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {[
                {
                  question: "Combien de temps faut-il créer un site web ?",
                  answer: "Cela dépend de la complexité du projet. Un site vitrine simple prend 2-4 semaines, tandis qu'un e-commerce complexe peut prendre 2-3 mois."
                },
                {
                  question: "Proposez-vous la maintenance après livraison ?",
                  answer: "Oui, nous proposons des contrats de maintenance pour assurer la sécurité, les mises à jour et l&apos;optimisation continue de votre site."
                },
                {
                  question: "Travaillez-vous avec des clients internationaux ?",
                  answer: "Absolument ! Nous avons des clients dans plusieurs pays et nous adaptons nos services aux besoins locaux et internationaux."
                },
                {
                  question: "Quels sont vos tarifs pour un site vitrine ?",
                  answer: "Nos tarifs varient selon la complexité du projet. Contactez-nous pour un devis personnalisé adapté à vos besoins."
                },
                {
                  question: "Pouvez-vous créer un site e-commerce ?",
                  answer: "Oui, nous développons des sites e-commerce complets avec gestion des produits, paiements sécurisés et optimisation SEO."
                },
                {
                  question: "Faites-vous du référencement SEO ?",
                  answer: "Bien sûr ! Nous optimisons vos sites pour les moteurs de recherche et proposons des services SEO complets."
                },
                {
                  question: "Êtes-vous basés en Gironde ?",
                  answer: "Oui, notre agence est basée en Gironde mais nous travaillons avec des clients partout en France et à l'international."
                },
                {
                  question: "Proposez-vous l'hébergement web ?",
                  answer: "Oui, nous proposons des solutions d'hébergement sécurisées et performantes pour tous nos projets web."
                },
                {
                  question: "Pouvez-vous refaire un site existant ?",
                  answer: "Absolument ! Nous pouvons refaire complètement votre site existant ou l'améliorer selon vos besoins."
                },
                {
                  question: "Quelles sont vos garanties ?",
                  answer: "Nous offrons une garantie de 1 an sur nos développements et un support technique réactif."
                },
                {
                  question: "Acceptez-vous les petits projets ?",
                  answer: "Oui, nous travaillons sur des projets de toutes tailles, du site vitrine simple aux applications complexes."
                },
                {
                  question: "Proposez-vous la formation ?",
                  answer: "Oui, nous formons vos équipes à l'utilisation de votre nouveau site web et outils de gestion."
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

        {/* CTA Final */}
        <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-teal-900/30">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Prêt à démarrer votre projet ?
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="https://www.oxelya.com" 
                className="bg-gradient-to-r from-cyan-500 to-teal-600 px-12 py-5 rounded-full font-bold text-xl hover:scale-110 transition-all duration-300 shadow-2xl shadow-cyan-500/30 flex items-center gap-3 justify-center"
              >
                Visiter Oxelya.com
                <ExternalLink className="w-5 h-5" />
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
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.3); }
            50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.6); }
          }
          
          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }

          .fallback-particles {
            position: relative;
            overflow: hidden;
          }

          .fallback-particles::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 20% 30%, rgba(34, 211, 238, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(34, 211, 238, 0.05) 0%, transparent 50%);
            animation: float 6s ease-in-out infinite;
          }

          .fallback-particles::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 60% 20%, rgba(20, 184, 166, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 10% 60%, rgba(34, 211, 238, 0.06) 0%, transparent 50%);
            animation: float 8s ease-in-out infinite reverse;
          }
        `}</style>
      </div>
    </>
  )
}