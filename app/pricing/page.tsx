import Link from 'next/link'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-primary-600 text-lg hover:underline">
            ← Back to home
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Pricing
        </h1>
        <p className="text-xl text-center text-gray-700 mb-12">
          Simple, transparent pricing designed for seniors and their families.
        </p>

        <div className="card max-w-2xl mx-auto bg-white">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-primary-600 mb-2">€9.99</div>
            <div className="text-3xl text-gray-700 mb-6">per month</div>
            <div className="text-xl text-gray-600 mb-8">
              Single plan, cancel anytime
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">What's Included:</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <span>
                  <strong>Real-time scam detection:</strong> Continuous monitoring of phone calls with instant risk alerts
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <span>
                  <strong>Privacy by design:</strong> On-device processing whenever possible, no permanent recordings
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <span>
                  <strong>Senior-friendly interface:</strong> Large text, high contrast, simple navigation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <span>
                  <strong>Family peace of mind:</strong> Protection for your loved ones, accessible to caregivers
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <span>
                  <strong>No ads, no data selling:</strong> Your privacy is our priority
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <span>
                  <strong>Cancel anytime:</strong> No long-term contracts, no hidden fees
                </span>
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mb-6">
              <p className="text-lg font-semibold text-yellow-900 mb-2">
                ⚠️ Important Note
              </p>
              <p className="text-lg text-yellow-800">
                This is a prototype for a university project. SafeCall is not an actual commercial product, and no payments are being processed. This pricing model is for demonstration purposes only.
              </p>
            </div>

            <div className="text-center">
              <Link href="/demo" className="btn-primary inline-block">
                Try the Demo
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 card max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 text-lg">
            <div>
              <h3 className="font-semibold mb-2">Who is SafeCall for?</h3>
              <p className="text-gray-700">
                SafeCall is designed primarily for seniors (65+) who want protection against phone scams. It's also available for caregivers and family members who want to protect their elderly relatives.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How does SafeCall protect my privacy?</h3>
              <p className="text-gray-700">
                SafeCall processes audio locally on your device whenever possible. No permanent recordings are stored, and all processing follows GDPR guidelines. Your conversations remain private.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-700">
                Yes! There are no long-term contracts. You can cancel your subscription at any time with no penalties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

