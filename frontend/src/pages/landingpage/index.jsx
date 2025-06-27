
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import FeatureCard from '../../components/FeatureCard';

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-purple-100 to-white min-h-screen">
        <Header/>
              {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-r from-purple-200 to-indigo-200">
        <h2 className="text-4xl font-extrabold text-purple-900 mb-4">
          Your Mental Health Companion
        </h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
          Track your mood, manage stress, and build better self-care habits with AI-powered insights.
        </p>
        <a
          href="#demo"
          className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg hover:bg-purple-700 transition"
        >
          Try the Demo
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-purple-800 mb-12">Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            emoji="📊"
            title="Daily Mood Check-Ins"
            desc="Log your emotions and visualize trends to better understand your mental health."
          />
          <FeatureCard
            emoji="💡"
            title="Personalized Self-Care"
            desc="AI-powered activity suggestions like journaling, breathing, and mindfulness exercises."
          />
          <FeatureCard
            emoji="🫂"
            title="Anonymous Peer Support"
            desc="Share how you're feeling and support others in a safe, anonymous community."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-purple-50" id="demo">
        <h4 className="text-2xl font-bold text-purple-800 mb-4">
          Start Your Journey to Better Mental Wellness
        </h4>
        <p className="text-gray-600 mb-6">No sign-up needed. 100% private and free.</p>
        <a
          href="/app"
          className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg hover:bg-indigo-700 transition"
        >
          Launch App
        </a>
      </section>
        <Footer/>
    </div>
  )
}

export default LandingPage;

