import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            SafeCall
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Your digital guardian against phone scams.
          </p>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            SafeCall helps seniors detect scam calls in real time using on-device AI – private, simple, and built for peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/mobile-demo" className="btn-primary inline-block">
              Try Mobile Demo
            </Link>
            <Link href="/demo" className="btn-secondary inline-block">
              Try Text Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">The Problem</h2>
          <div className="space-y-6 text-lg md:text-xl">
            <p>
              Older adults are increasingly targeted by voice phishing (vishing) and phone scams. Scammers use sophisticated tactics to impersonate family members, banks, or government officials, pressuring victims into sharing sensitive information or transferring money.
            </p>
            <p>
              With AI-generated voices and automated scam calls becoming more common, it's harder than ever for seniors to distinguish legitimate calls from frauds. This leads not only to financial loss but also anxiety, mistrust, and social isolation.
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg md:text-xl ml-4">
              <li>Financial losses from phone scams are increasing every year</li>
              <li>AI-generated voices make scams harder to detect</li>
              <li>Many seniors feel anxious about answering unknown calls</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-4">1. SafeCall Listens</h3>
              <p className="text-lg">
                With your explicit consent, SafeCall monitors phone conversations in real time.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">2. AI Scans for Patterns</h3>
              <p className="text-lg">
                Advanced AI analyzes speech for urgency, manipulation, impersonation, and AI-generated voice patterns.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold mb-4">3. You Get a Warning</h3>
              <p className="text-lg">
                When risk is detected, you receive a clear, simple warning on your device.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-4">4. You Stay in Control</h3>
              <p className="text-lg">
                You decide how to respond. SafeCall provides information, but you're always in charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Real-Time Analysis</h3>
              <p className="text-lg">
                SafeCall analyzes conversations as they happen, providing instant warnings when scam patterns are detected.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-3">Privacy by Design</h3>
              <p className="text-lg">
                Processing happens locally on your device whenever possible. No permanent recordings, GDPR-compliant.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">👵</div>
              <h3 className="text-2xl font-bold mb-3">Senior-Friendly Interface</h3>
              <p className="text-lg">
                Large text, high contrast, simple layout, and clear language designed specifically for seniors.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold mb-3">Peace of Mind for Families</h3>
              <p className="text-lg">
                Caregivers and family members can have confidence that their loved ones are protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Summary Section */}
      <section id="pricing-summary" className="section-padding bg-primary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Simple, Transparent Pricing</h2>
          <div className="card max-w-md mx-auto bg-white">
            <div className="text-5xl font-bold text-primary-600 mb-4">€9.99</div>
            <div className="text-2xl text-gray-700 mb-6">per month</div>
            <ul className="text-left text-lg space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Real-time scam detection</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>On-device privacy protection</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Senior-friendly interface</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Cancel anytime</span>
              </li>
            </ul>
            <Link href="/pricing" className="btn-primary inline-block w-full text-center">
              View Pricing Details
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <h3 className="text-xl font-bold mb-2">Glutting Erik</h3>
              <p className="text-lg text-gray-600">Market analysis, ethical & security considerations</p>
            </div>
            <div className="card text-center">
              <h3 className="text-xl font-bold mb-2">Safokhin Andrei</h3>
              <p className="text-lg text-gray-600">Pricing model, financial planning</p>
            </div>
            <div className="card text-center">
              <h3 className="text-xl font-bold mb-2">Medina García Carlos</h3>
              <p className="text-lg text-gray-600">Customer personas, work packages, time plan</p>
            </div>
            <div className="card text-center">
              <h3 className="text-xl font-bold mb-2">Pitic Emanuel</h3>
              <p className="text-lg text-gray-600">Technical solution description, team structure</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
