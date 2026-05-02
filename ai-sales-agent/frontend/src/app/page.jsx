import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              AI-Powered Sales Intelligence
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Analyze leads using AI, generate personalized sales pitches, and create
              call scripts in seconds. Transform your sales process with intelligent
              insights.
            </p>
            <Link
              href="/dashboard"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Powerful Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Social Media Audit
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive analysis of your leads' social presence and engagement
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-green-50 rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Personalized Sales Pitch
              </h3>
              <p className="text-gray-600 text-sm">
                AI-generated pitches tailored to each lead's specific needs
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-purple-50 rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Call Script Generator
              </h3>
              <p className="text-gray-600 text-sm">
                Professional call scripts ready to use with your prospects
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-orange-50 rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                CRM Lead Tracking
              </h3>
              <p className="text-gray-600 text-sm">
                Manage and track all your leads in one centralized location
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your sales?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Start analyzing leads with AI today
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
          >
            Go to Dashboard
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 AI Sales Agent. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
